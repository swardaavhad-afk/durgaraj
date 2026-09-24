import 'dotenv/config';
import cors from 'cors';
import express, { type NextFunction, type Request, type Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { db, getSetting, saveSetting, serializeBlog, serializeEvent } from './db';

const app = express();
const port = Number(process.env.PORT || 8787);
const jwtSecret = process.env.JWT_SECRET || (process.env.NODE_ENV === 'production' ? '' : 'local-development-secret');
if (!jwtSecret) throw new Error('JWT_SECRET must be set in production.');

const allowedOrigins = process.env.FRONTEND_ORIGIN?.split(',').map((origin) => origin.trim()).filter(Boolean) || [];
app.use(cors({ origin: allowedOrigins.length > 0 ? allowedOrigins : process.env.NODE_ENV === 'production' ? false : true, credentials: true }));
app.use(express.json({ limit: '2mb' }));

function authRequired(request: Request, response: Response, next: NextFunction) {
  const token = request.headers.authorization?.replace('Bearer ', '');
  if (!token) return response.status(401).json({ error: 'Authentication required.' });
  try {
    request.adminId = (jwt.verify(token, jwtSecret) as { adminId: number }).adminId;
    return next();
  } catch {
    return response.status(401).json({ error: 'Session expired.' });
  }
}

function eventParams(event: any) {
  return {
    id: event.id || randomUUID(),
    title: String(event.title || '').trim(),
    marathi_title: String(event.marathiTitle || ''),
    category: String(event.category || 'Trek'),
    difficulty: String(event.difficulty || 'Moderate'),
    location: String(event.location || '').trim(),
    duration: String(event.duration || '').trim(),
    date: String(event.date || '').trim(),
    price: Number(event.price || 0),
    short_description: String(event.shortDescription || '').trim(),
    detailed_description: String(event.detailedDescription || '').trim(),
    image: String(event.image || ''),
    terrain: String(event.terrain || ''),
    what_included: JSON.stringify(event.whatIncluded || []),
    what_to_bring: JSON.stringify(event.whatToBring || []),
    prerequisites: JSON.stringify(event.prerequisites || {}),
    itinerary: JSON.stringify(event.itinerary || []),
    gallery: JSON.stringify(event.gallery || []),
    faq: JSON.stringify(event.faq || []),
    month: event.month || null,
    is_featured: event.isFeatured ? 1 : 0,
  };
}

function validateEvent(event: any) {
  return event && event.title && event.location && event.duration && event.date && event.shortDescription && event.detailedDescription;
}

app.get('/api/health', (_request, response) => response.json({ ok: true }));

app.post('/api/auth/login', (request, response) => {
  const { email, password } = request.body || {};
  const admin = db.prepare('SELECT id, email, password_hash FROM admins WHERE email = ?').get(email) as { id: number; email: string; password_hash: string } | undefined;
  if (!admin || !bcrypt.compareSync(String(password || ''), admin.password_hash)) return response.status(401).json({ error: 'Invalid administrator credentials.' });
  const token = jwt.sign({ adminId: admin.id }, jwtSecret, { expiresIn: '8h' });
  return response.json({ token, admin: { email: admin.email } });
});

app.get('/api/content', (_request, response) => {
  const home = getSetting('home', { title: '', subtitle: '', description: '' });
  const about = getSetting('about', { title: '', intro: '', story: '', mission: '' });
  const events = db.prepare('SELECT * FROM events ORDER BY created_at DESC').all().map((row) => serializeEvent(row as Record<string, unknown>));
  const blogPosts = db.prepare('SELECT * FROM blog_posts ORDER BY created_at DESC').all().map((row) => serializeBlog(row as Record<string, unknown>));
  return response.json({ home, about, events, blogPosts });
});

app.put('/api/admin/site-content', authRequired, (request, response) => {
  const { home, about } = request.body || {};
  if (!home || !about) return response.status(400).json({ error: 'Home and About content are required.' });
  saveSetting('home', home);
  saveSetting('about', about);
  return response.json({ home, about });
});

app.post('/api/admin/events', authRequired, (request, response) => {
  const event = eventParams(request.body);
  if (!validateEvent(request.body)) return response.status(400).json({ error: 'Title, location, duration, date, descriptions, and image details are required.' });
  db.prepare(`INSERT INTO events (id,title,marathi_title,category,difficulty,location,duration,date,price,short_description,detailed_description,image,terrain,what_included,what_to_bring,prerequisites,itinerary,gallery,faq,month,is_featured) VALUES (@id,@title,@marathi_title,@category,@difficulty,@location,@duration,@date,@price,@short_description,@detailed_description,@image,@terrain,@what_included,@what_to_bring,@prerequisites,@itinerary,@gallery,@faq,@month,@is_featured)`).run(event);
  return response.status(201).json(serializeEvent(db.prepare('SELECT * FROM events WHERE id = ?').get(event.id) as Record<string, unknown>));
});

app.put('/api/admin/events/:id', authRequired, (request, response) => {
  const event = eventParams({ ...request.body, id: request.params.id });
  if (!validateEvent(request.body)) return response.status(400).json({ error: 'Title, location, duration, date, descriptions, and image details are required.' });
  const result = db.prepare(`UPDATE events SET title=@title,marathi_title=@marathi_title,category=@category,difficulty=@difficulty,location=@location,duration=@duration,date=@date,price=@price,short_description=@short_description,detailed_description=@detailed_description,image=@image,terrain=@terrain,what_included=@what_included,what_to_bring=@what_to_bring,prerequisites=@prerequisites,itinerary=@itinerary,gallery=@gallery,faq=@faq,month=@month,is_featured=@is_featured,updated_at=CURRENT_TIMESTAMP WHERE id=@id`).run(event);
  if (!result.changes) return response.status(404).json({ error: 'Event not found.' });
  return response.json(serializeEvent(db.prepare('SELECT * FROM events WHERE id = ?').get(event.id) as Record<string, unknown>));
});

app.delete('/api/admin/events/:id', authRequired, (request, response) => {
  db.prepare('DELETE FROM events WHERE id = ?').run(request.params.id);
  return response.status(204).send();
});

app.post('/api/admin/blog', authRequired, (request, response) => {
  const blog = { ...request.body, id: randomUUID() };
  if (!blog.title || !blog.excerpt || !blog.content) return response.status(400).json({ error: 'Blog title, excerpt, and content are required.' });
  db.prepare('INSERT INTO blog_posts (id,title,excerpt,content,author,date,category,image,read_time) VALUES (@id,@title,@excerpt,@content,@author,@date,@category,@image,@readTime)').run(blog);
  return response.status(201).json(serializeBlog(db.prepare('SELECT * FROM blog_posts WHERE id = ?').get(blog.id) as Record<string, unknown>));
});

app.delete('/api/admin/blog/:id', authRequired, (request, response) => {
  db.prepare('DELETE FROM blog_posts WHERE id = ?').run(request.params.id);
  return response.status(204).send();
});

const frontendDirectory = path.resolve(import.meta.dirname, '..', 'dist');
app.use(express.static(frontendDirectory));
app.use((request, response, next) => {
  if (request.method !== 'GET' || request.path.startsWith('/api/')) return next();
  return response.sendFile(path.join(frontendDirectory, 'index.html'));
});

app.use((error: Error, _request: Request, response: Response, _next: NextFunction) => {
  console.error(error);
  return response.status(500).json({ error: 'Unexpected server error.' });
});

app.listen(port, () => console.log(`Durgaraj API listening on http://localhost:${port}`));

declare global {
  namespace Express { interface Request { adminId?: number } }
}
