import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CalendarPlus, Edit3, LogOut, MapPin, Plus, ShieldCheck, Trash2, X } from 'lucide-react';
import { toast } from 'sonner';
import { type Event } from '../data/mockData';
import { saveEvents, useEvents } from '../data/eventStore';
import { getSiteContent, refreshSiteContent, saveSiteContent, useSiteContent, type BlogPost } from '../data/siteContentStore';
import { clearAdminToken, createBlogApi, deleteBlogApi, getAdminToken, loginAdmin } from '../data/api';

const categories: Event['category'][] = ['Camping', 'Trek', 'Heritage', 'Nature', 'Himalayan', 'Training'];
const difficulties: Event['difficulty'][] = ['Easy', 'Moderate', 'Hard'];

type EventForm = Pick<Event, 'title' | 'marathiTitle' | 'category' | 'difficulty' | 'location' | 'duration' | 'date' | 'price' | 'shortDescription' | 'detailedDescription' | 'image' | 'terrain' | 'whatIncluded' | 'whatToBring' | 'gallery' | 'isFeatured'>;

const emptyForm: EventForm = {
  title: '',
  marathiTitle: '',
  category: 'Trek',
  difficulty: 'Moderate',
  location: '',
  duration: '1 Day',
  date: '',
  price: 0,
  shortDescription: '',
  detailedDescription: '',
  image: '',
  terrain: '',
  whatIncluded: [],
  whatToBring: [],
  gallery: [],
  isFeatured: false,
};

const emptyBlogPost: Omit<BlogPost, 'id'> = {
  title: '',
  excerpt: '',
  content: '',
  author: '',
  date: '',
  category: '',
  image: '',
  readTime: '',
};

function getFormFromEvent(event: Event): EventForm {
  return {
    title: event.title,
    marathiTitle: event.marathiTitle,
    category: event.category,
    difficulty: event.difficulty,
    location: event.location,
    duration: event.duration,
    date: event.date,
    price: event.price,
    shortDescription: event.shortDescription,
    detailedDescription: event.detailedDescription,
    image: event.image,
    terrain: event.terrain,
    whatIncluded: event.whatIncluded,
    whatToBring: event.whatToBring,
    gallery: event.gallery,
    isFeatured: event.isFeatured || false,
  };
}

function createEvent(form: EventForm): Event {
  return {
    ...form,
    id: Date.now().toString(),
    terrain: form.terrain,
    whatIncluded: form.whatIncluded,
    whatToBring: form.whatToBring,
    prerequisites: { fitnessLevel: '', ageLimit: '', experience: '', safety: [] },
    itinerary: [],
    gallery: form.gallery,
    faq: [],
  };
}

export function AdminPage() {
  const navigate = useNavigate();
  const events = useEvents();
  const siteContent = useSiteContent();
  const [authenticated, setAuthenticated] = useState(() => Boolean(getAdminToken()));
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [form, setForm] = useState<EventForm>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [homeForm, setHomeForm] = useState(() => getSiteContent().home);
  const [aboutForm, setAboutForm] = useState(() => getSiteContent().about);
  const [blogForm, setBlogForm] = useState<Omit<BlogPost, 'id'>>(emptyBlogPost);

  useEffect(() => {
    setHomeForm(siteContent.home);
    setAboutForm(siteContent.about);
  }, [siteContent.home, siteContent.about]);

  useEffect(() => {
    const handleExpiredSession = () => {
      setAuthenticated(false);
      toast.error('Your admin session expired. Please sign in again.');
    };
    window.addEventListener('durgaraj-auth-expired', handleExpiredSession);
    return () => window.removeEventListener('durgaraj-auth-expired', handleExpiredSession);
  }, []);

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await loginAdmin(credentials.email, credentials.password);
      setAuthenticated(true);
      toast.success('Administrator access granted.');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Invalid administrator credentials.');
    }
  };

  const handleLogout = () => {
    clearAdminToken();
    setAuthenticated(false);
    navigate('/');
  };

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setFormOpen(true);
  };

  const openEdit = (event: Event) => {
    setEditingId(event.id);
    setForm(getFormFromEvent(event));
    setFormOpen(true);
  };

  const handleSave = async (event: FormEvent) => {
    event.preventDefault();
    if (!form.title.trim() || !form.location.trim() || !form.date.trim()) {
      toast.error('Title, location, and date are required.');
      return;
    }

    const nextEvents = editingId
      ? events.map((existingEvent) => existingEvent.id === editingId ? { ...existingEvent, ...form } : existingEvent)
      : [createEvent(form), ...events];
    try {
      await saveEvents(nextEvents);
      setFormOpen(false);
      toast.success(editingId ? 'Event updated.' : 'Event created.');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Could not save event.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this event from the public site?')) return;
    try { await saveEvents(events.filter((event) => event.id !== id)); toast.success('Event deleted.'); }
    catch (error) { toast.error(error instanceof Error ? error.message : 'Could not delete event.'); }
  };

  const saveHome = async (event: FormEvent) => {
    event.preventDefault();
    try { await saveSiteContent({ ...siteContent, home: homeForm }); toast.success('Home content saved.'); }
    catch (error) { toast.error(error instanceof Error ? error.message : 'Could not save Home content.'); }
  };

  const saveAbout = async (event: FormEvent) => {
    event.preventDefault();
    try { await saveSiteContent({ ...siteContent, about: aboutForm }); toast.success('About content saved.'); }
    catch (error) { toast.error(error instanceof Error ? error.message : 'Could not save About content.'); }
  };

  const saveBlogPost = async (event: FormEvent) => {
    event.preventDefault();
    if (!blogForm.title.trim() || !blogForm.content.trim()) {
      toast.error('Blog title and content are required.');
      return;
    }
    try { await createBlogApi(blogForm); await refreshSiteContent(); setBlogForm(emptyBlogPost); toast.success('Blog post published.'); }
    catch (error) { toast.error(error instanceof Error ? error.message : 'Could not publish blog post.'); }
  };

  const deleteBlogPost = (id: string) => {
    deleteBlogApi(id).then(() => refreshSiteContent()).then(() => toast.success('Blog post deleted.')).catch((error) => toast.error(error instanceof Error ? error.message : 'Could not delete blog post.'));
  };

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-[#10251d] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-[#d98b45] text-white flex items-center justify-center mb-6">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d98b45] mb-3">Private access</p>
          <h1 className="text-3xl font-bold text-[#10251d] mb-2">Durgaraj control room</h1>
          <p className="text-slate-500 mb-8">This area is reserved for the site administrator.</p>
          <form onSubmit={handleLogin} className="space-y-5">
            <label className="block text-sm font-semibold text-slate-700">
              Administrator email
              <input type="email" required value={credentials.email} onChange={(event) => setCredentials({ ...credentials, email: event.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#d98b45]" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Password
              <input type="password" required value={credentials.password} onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#d98b45]" />
            </label>
            <button type="submit" className="w-full rounded-xl bg-[#10251d] px-4 py-3 font-bold text-white hover:bg-[#1c3b2d]">Sign in</button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f1e9] text-[#10251d]">
      <header className="bg-[#10251d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#e6b276]">Durgaraj</p>
            <h1 className="text-2xl font-bold">Adventure content desk</h1>
          </div>
          <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10"><LogOut className="w-4 h-4" /> Log out</button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d98b45]">Private workspace</p>
            <h2 className="text-4xl font-bold mt-2">Treks & events</h2>
            <p className="text-slate-600 mt-2">Changes are reflected on the public site immediately on this device.</p>
          </div>
          <button onClick={openCreate} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d98b45] px-5 py-3 font-bold text-white hover:bg-[#bd7335]"><Plus className="w-5 h-5" /> Add trek or event</button>
        </div>

        <div className="grid gap-4">
          {events.map((event) => (
            <article key={event.id} className="bg-white rounded-2xl border border-[#e3ded2] p-5 flex flex-col md:flex-row md:items-center gap-5 shadow-sm">
              <img src={event.image} alt="" className="w-full md:w-36 h-28 object-cover rounded-xl bg-slate-100" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide mb-2">
                  <span className="rounded-full bg-[#e5f0e8] text-[#28613e] px-2.5 py-1">{event.category}</span>
                  <span className="rounded-full bg-slate-100 text-slate-600 px-2.5 py-1">{event.difficulty}</span>
                </div>
                <h3 className="text-xl font-bold truncate">{event.title}</h3>
                <p className="text-slate-600 mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm"><span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" />{event.location}</span><span className="inline-flex items-center gap-1"><CalendarPlus className="w-4 h-4" />{event.date}</span></p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => openEdit(event)} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold hover:bg-slate-50"><Edit3 className="w-4 h-4" /> Edit</button>
                <button onClick={() => handleDelete(event.id)} className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"><Trash2 className="w-4 h-4" /> Delete</button>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16">
          <div className="mb-6"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d98b45]">Public pages</p><h2 className="text-3xl font-bold mt-2">Site content</h2><p className="text-slate-600 mt-2">Only content saved here appears on Home, About, and Blog.</p></div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <form onSubmit={saveHome} className="bg-white rounded-2xl border border-[#e3ded2] p-6 shadow-sm space-y-4">
              <h3 className="text-xl font-bold">Home page</h3>
              <label className="admin-label">Main title<input value={homeForm.title} onChange={(event) => setHomeForm({ ...homeForm, title: event.target.value })} className="admin-input" /></label>
              <label className="admin-label">Subtitle<input value={homeForm.subtitle} onChange={(event) => setHomeForm({ ...homeForm, subtitle: event.target.value })} className="admin-input" /></label>
              <label className="admin-label">Introduction<textarea value={homeForm.description} onChange={(event) => setHomeForm({ ...homeForm, description: event.target.value })} className="admin-input min-h-28" /></label>
              <button type="submit" className="rounded-xl bg-[#10251d] px-5 py-3 font-bold text-white">Save Home</button>
            </form>

            <form onSubmit={saveAbout} className="bg-white rounded-2xl border border-[#e3ded2] p-6 shadow-sm space-y-4">
              <h3 className="text-xl font-bold">About page</h3>
              <label className="admin-label">Page title<input value={aboutForm.title} onChange={(event) => setAboutForm({ ...aboutForm, title: event.target.value })} className="admin-input" /></label>
              <label className="admin-label">Introduction<textarea value={aboutForm.intro} onChange={(event) => setAboutForm({ ...aboutForm, intro: event.target.value })} className="admin-input min-h-24" /></label>
              <label className="admin-label">Our story<textarea value={aboutForm.story} onChange={(event) => setAboutForm({ ...aboutForm, story: event.target.value })} className="admin-input min-h-24" /></label>
              <label className="admin-label">Mission<textarea value={aboutForm.mission} onChange={(event) => setAboutForm({ ...aboutForm, mission: event.target.value })} className="admin-input min-h-24" /></label>
              <button type="submit" className="rounded-xl bg-[#10251d] px-5 py-3 font-bold text-white">Save About</button>
            </form>

            <form onSubmit={saveBlogPost} className="bg-white rounded-2xl border border-[#e3ded2] p-6 shadow-sm space-y-4 xl:col-span-2">
              <h3 className="text-xl font-bold">Publish blog post</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="admin-label">Title *<input required value={blogForm.title} onChange={(event) => setBlogForm({ ...blogForm, title: event.target.value })} className="admin-input" /></label>
                <label className="admin-label">Category<input value={blogForm.category} onChange={(event) => setBlogForm({ ...blogForm, category: event.target.value })} className="admin-input" /></label>
                <label className="admin-label">Author<input value={blogForm.author} onChange={(event) => setBlogForm({ ...blogForm, author: event.target.value })} className="admin-input" /></label>
                <label className="admin-label">Date<input value={blogForm.date} onChange={(event) => setBlogForm({ ...blogForm, date: event.target.value })} className="admin-input" /></label>
                <label className="admin-label">Read time<input value={blogForm.readTime} onChange={(event) => setBlogForm({ ...blogForm, readTime: event.target.value })} className="admin-input" placeholder="5 min" /></label>
                <label className="admin-label">Image URL<input type="url" value={blogForm.image} onChange={(event) => setBlogForm({ ...blogForm, image: event.target.value })} className="admin-input" /></label>
                <label className="admin-label md:col-span-2">Excerpt<textarea required value={blogForm.excerpt} onChange={(event) => setBlogForm({ ...blogForm, excerpt: event.target.value })} className="admin-input min-h-24" /></label>
                <label className="admin-label md:col-span-2">Article content<textarea required value={blogForm.content} onChange={(event) => setBlogForm({ ...blogForm, content: event.target.value })} className="admin-input min-h-40" /></label>
              </div>
              <button type="submit" className="rounded-xl bg-[#d98b45] px-5 py-3 font-bold text-white">Publish blog post</button>
              {siteContent.blogPosts.length > 0 && <div className="border-t border-slate-200 pt-4 space-y-3"><p className="font-bold">Published posts</p>{siteContent.blogPosts.map((post) => <div key={post.id} className="flex items-center justify-between gap-4 text-sm"><span className="truncate">{post.title}</span><button type="button" onClick={() => deleteBlogPost(post.id)} className="text-red-600 font-semibold">Delete</button></div>)}</div>}
            </form>
          </div>
        </section>
      </div>

      {formOpen && (
        <div className="fixed inset-0 z-50 bg-[#10251d]/70 p-4 sm:p-8 overflow-y-auto">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d98b45]">Content editor</p><h2 className="text-2xl font-bold mt-1">{editingId ? 'Edit trek or event' : 'Create trek or event'}</h2></div>
              <button onClick={() => setFormOpen(false)} aria-label="Close editor" className="p-2 rounded-lg hover:bg-slate-100"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className="md:col-span-2 text-sm font-semibold">Title *<input required value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} className="admin-input" /></label>
              <label className="text-sm font-semibold">Marathi title<input value={form.marathiTitle} onChange={(event) => setForm({ ...form, marathiTitle: event.target.value })} className="admin-input" /></label>
              <label className="text-sm font-semibold">Location *<input required value={form.location} onChange={(event) => setForm({ ...form, location: event.target.value })} className="admin-input" /></label>
              <label className="text-sm font-semibold">Category<select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value as Event['category'] })} className="admin-input">{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
              <label className="text-sm font-semibold">Difficulty<select value={form.difficulty} onChange={(event) => setForm({ ...form, difficulty: event.target.value as Event['difficulty'] })} className="admin-input">{difficulties.map((difficulty) => <option key={difficulty}>{difficulty}</option>)}</select></label>
              <label className="text-sm font-semibold">Duration<input required value={form.duration} onChange={(event) => setForm({ ...form, duration: event.target.value })} className="admin-input" /></label>
              <label className="text-sm font-semibold">Date or schedule<input required value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} className="admin-input" /></label>
              <label className="text-sm font-semibold">Price (INR)<input type="number" min="0" value={form.price} onChange={(event) => setForm({ ...form, price: Number(event.target.value) })} className="admin-input" /></label>
              <label className="md:col-span-2 text-sm font-semibold">Image URL<input type="url" value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} className="admin-input" /></label>
              <label className="md:col-span-2 text-sm font-semibold">Short description<textarea required value={form.shortDescription} onChange={(event) => setForm({ ...form, shortDescription: event.target.value })} className="admin-input min-h-24" /></label>
              <label className="md:col-span-2 text-sm font-semibold">Detailed description<textarea required value={form.detailedDescription} onChange={(event) => setForm({ ...form, detailedDescription: event.target.value })} className="admin-input min-h-32" /></label>
              <label className="text-sm font-semibold">Terrain or route details<textarea value={form.terrain} onChange={(event) => setForm({ ...form, terrain: event.target.value })} className="admin-input min-h-24" /></label>
              <label className="text-sm font-semibold">Included items<textarea value={form.whatIncluded.join('\n')} onChange={(event) => setForm({ ...form, whatIncluded: event.target.value.split('\n').filter(Boolean) })} className="admin-input min-h-24" placeholder="One item per line" /></label>
              <label className="text-sm font-semibold">What to bring<textarea value={form.whatToBring.join('\n')} onChange={(event) => setForm({ ...form, whatToBring: event.target.value.split('\n').filter(Boolean) })} className="admin-input min-h-24" placeholder="One item per line" /></label>
              <label className="text-sm font-semibold">Gallery image URLs<textarea value={form.gallery.join('\n')} onChange={(event) => setForm({ ...form, gallery: event.target.value.split('\n').filter(Boolean) })} className="admin-input min-h-24" placeholder="One URL per line" /></label>
              <label className="flex items-center gap-3 text-sm font-semibold md:col-span-2"><input type="checkbox" checked={Boolean(form.isFeatured)} onChange={(event) => setForm({ ...form, isFeatured: event.target.checked })} className="h-4 w-4" /> Show this item as featured on Home</label>
              <div className="md:col-span-2 flex justify-end gap-3 pt-3"><button type="button" onClick={() => setFormOpen(false)} className="rounded-xl border border-slate-200 px-5 py-3 font-semibold">Cancel</button><button type="submit" className="rounded-xl bg-[#10251d] px-5 py-3 font-bold text-white">{editingId ? 'Save changes' : 'Create event'}</button></div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
