import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const dataDirectory = path.resolve(projectRoot, process.env.DATA_DIR || 'data');
fs.mkdirSync(dataDirectory, { recursive: true });

export const db = new Database(path.join(dataDirectory, 'durgaraj.sqlite'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS events (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    marathi_title TEXT NOT NULL DEFAULT '',
    category TEXT NOT NULL,
    difficulty TEXT NOT NULL,
    location TEXT NOT NULL,
    duration TEXT NOT NULL,
    date TEXT NOT NULL,
    price INTEGER NOT NULL DEFAULT 0,
    short_description TEXT NOT NULL,
    detailed_description TEXT NOT NULL,
    image TEXT NOT NULL DEFAULT '',
    terrain TEXT NOT NULL DEFAULT '',
    what_included TEXT NOT NULL DEFAULT '[]',
    what_to_bring TEXT NOT NULL DEFAULT '[]',
    prerequisites TEXT NOT NULL DEFAULT '{}',
    itinerary TEXT NOT NULL DEFAULT '[]',
    gallery TEXT NOT NULL DEFAULT '[]',
    faq TEXT NOT NULL DEFAULT '[]',
    month TEXT,
    is_featured INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS blog_posts (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL DEFAULT '',
    date TEXT NOT NULL DEFAULT '',
    category TEXT NOT NULL DEFAULT '',
    image TEXT NOT NULL DEFAULT '',
    read_time TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

const adminEmail = process.env.ADMIN_EMAIL || 'admin@durgaraj.com';
const adminPassword = process.env.ADMIN_PASSWORD;
if (!adminPassword && process.env.NODE_ENV === 'production') {
  throw new Error('ADMIN_PASSWORD must be set in production.');
}
const password = adminPassword || 'change-me-now';
const existingAdmin = db.prepare('SELECT id FROM admins WHERE email = ?').get(adminEmail) as { id: number } | undefined;
if (!existingAdmin) {
  db.prepare('INSERT INTO admins (email, password_hash) VALUES (?, ?)').run(adminEmail, bcrypt.hashSync(password, 12));
} else if (process.env.NODE_ENV !== 'production' || process.env.ADMIN_PASSWORD) {
  db.prepare('UPDATE admins SET password_hash = ? WHERE email = ?').run(bcrypt.hashSync(password, 12), adminEmail);
}

export function getSetting<T>(key: string, fallback: T): T {
  const row = db.prepare('SELECT value FROM settings WHERE key = ?').get(key) as { value: string } | undefined;
  if (!row) return fallback;
  try { return JSON.parse(row.value) as T; } catch { return fallback; }
}

export function saveSetting(key: string, value: unknown) {
  db.prepare(`INSERT INTO settings (key, value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP`).run(key, JSON.stringify(value));
}

function parseJson(value: string) {
  try { return JSON.parse(value); } catch { return []; }
}

export function serializeEvent(row: Record<string, unknown>) {
  return {
    id: row.id,
    title: row.title,
    marathiTitle: row.marathi_title,
    category: row.category,
    difficulty: row.difficulty,
    location: row.location,
    duration: row.duration,
    date: row.date,
    price: row.price,
    shortDescription: row.short_description,
    detailedDescription: row.detailed_description,
    image: row.image,
    terrain: row.terrain,
    whatIncluded: parseJson(String(row.what_included)),
    whatToBring: parseJson(String(row.what_to_bring)),
    prerequisites: parseJson(String(row.prerequisites)),
    itinerary: parseJson(String(row.itinerary)),
    gallery: parseJson(String(row.gallery)),
    faq: parseJson(String(row.faq)),
    month: row.month,
    isFeatured: Boolean(row.is_featured),
  };
}

export function serializeBlog(row: Record<string, unknown>) {
  return {
    id: row.id,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    author: row.author,
    date: row.date,
    category: row.category,
    image: row.image,
    readTime: row.read_time,
  };
}
