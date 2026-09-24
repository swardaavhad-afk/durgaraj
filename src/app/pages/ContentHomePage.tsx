import { Link } from 'react-router';
import { ArrowRight, Compass, Heart, Mountain, Shield, Sparkles, Users } from 'lucide-react';
import { useEvents } from '../data/eventStore';
import { useSiteContent } from '../data/siteContentStore';
import { StatsCounter } from '../components/StatsCounter';

const whatWeDo = [
  { title: 'Trekking & Expeditions', text: 'Explore mountains, trails and challenging landscapes through guided trekking and expedition experiences.', icon: Mountain },
  { title: 'Adventure Camps', text: 'Experience the outdoors through adventure camps designed around exploration, teamwork and memorable experiences.', icon: Compass },
  { title: 'Mountaineering & Training', text: 'Learn, train and develop outdoor skills through practical adventure and mountaineering-oriented experiences.', icon: Shield },
  { title: 'Nature & Outdoor Experiences', text: 'Reconnect with nature through camping, outdoor activities and immersive experiences in natural surroundings.', icon: Heart },
];

const whyDurgaraj = [
  { title: 'Adventure', text: 'Step beyond the ordinary and experience the excitement of the outdoors.', icon: Mountain },
  { title: 'Experience', text: 'Create meaningful memories through trekking, camps, expeditions and outdoor activities.', icon: Sparkles },
  { title: 'Learning', text: 'Develop confidence, discipline, teamwork and practical outdoor skills through experience.', icon: Compass },
  { title: 'Community', text: 'Be part of a growing community connected by adventure, nature and exploration.', icon: Users },
];

export function ContentHomePage() {
  const content = useSiteContent();
  const events = useEvents();
  const featuredEvents = events.filter((event) => event.isFeatured).slice(0, 3);

  const handleWhatsApp = () => {
    const message = 'Hello Durgaraj Team, I would like to know more about your upcoming adventure programs.';
    window.open(`https://wa.me/919422769242?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#173449]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#10251d]/90 via-[#173449]/80 to-[#173449]/50" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl">
          <Mountain className="w-12 h-12 mx-auto text-accent mb-6" />
          <p className="text-sm uppercase tracking-[0.24em] text-accent mb-4">Durgaraj Adventures</p>
          <h1 className="text-4xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{content.home.title || 'Explore. Experience. Conquer.'}</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-5">{content.home.subtitle || 'Your Adventure Begins With Durgaraj'}</p>
          <p className="text-lg text-white/75 max-w-3xl mx-auto mb-8">{content.home.description || 'Durgaraj Adventures brings together trekking, mountaineering, adventure camps, outdoor training and nature experiences for people who want to explore the mountains, challenge themselves and create unforgettable memories.'}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/himalaya-treks" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-bold text-white">Explore Himalayan Treks <ArrowRight className="w-5 h-5" /></Link>
            <Link to="/events" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-bold text-white">Discover Our Adventures</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 max-w-5xl">
        <div className="text-center mb-10"><p className="text-sm uppercase tracking-[0.2em] text-secondary font-bold mb-3">The Durgaraj spirit</p><h2 className="text-3xl md:text-5xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Adventure That Brings People Together</h2></div>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto"><p>Durgaraj Adventures is dedicated to creating meaningful experiences in the mountains and outdoors. Through trekking, mountaineering, adventure camps, outdoor training and nature experiences, we bring people closer to adventure and encourage them to explore beyond their comfort zone.</p><p>Adventure is more than reaching a destination. It is about discovering new places, challenging yourself, learning through experience, building confidence and sharing unforgettable moments with others.</p></div>
        <div className="text-center mt-8"><Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">About Durgaraj <ArrowRight className="w-5 h-5" /></Link></div>
      </section>

      <StatsCounter />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4"><div className="text-center max-w-3xl mx-auto mb-12"><h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>What We Do</h2><p className="text-lg text-muted-foreground">From mountain adventures to outdoor learning, Durgaraj creates experiences that connect people with nature, adventure and each other.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{whatWeDo.map(({ title, text, icon: Icon }) => <article key={title} className="bg-card border border-border rounded-2xl p-7 shadow-sm"><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-primary" /></div><h3 className="text-xl font-bold text-foreground mb-3">{title}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></article>)}</div></div>
      </section>

      <section className="py-20 bg-background"><div className="container mx-auto px-4"><div className="text-center mb-12"><h2 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Why Durgaraj?</h2></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{whyDurgaraj.map(({ title, text, icon: Icon }) => <article key={title} className="text-center p-7 border border-border rounded-2xl"><Icon className="w-10 h-10 text-secondary mx-auto mb-5" /><h3 className="text-xl font-bold text-foreground mb-3">{title}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></article>)}</div></div></section>

      <section className="py-20 bg-primary text-white"><div className="container mx-auto px-4 max-w-4xl text-center"><h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>More Than an Adventure</h2><p className="text-lg text-white/80 leading-relaxed">Every journey into the mountains offers an opportunity to learn something new. Durgaraj believes that adventure helps people discover their strengths, develop confidence, build lasting connections and experience nature in a meaningful way.</p><div className="flex flex-wrap justify-center gap-3 mt-8">{['Explore', 'Challenge', 'Learn', 'Connect', 'Experience'].map((word) => <span key={word} className="rounded-full border border-accent/50 px-5 py-2 text-accent font-semibold">{word}</span>)}</div></div></section>

      <section className="container mx-auto px-4 py-20"><div className="flex items-end justify-between gap-4 mb-8"><div><p className="text-sm uppercase tracking-[0.18em] text-secondary font-bold">Published adventures</p><h2 className="text-3xl font-bold text-foreground mt-2">Upcoming experiences</h2></div><Link to="/events" className="text-secondary font-semibold">View all</Link></div>{featuredEvents.length === 0 ? <div className="border border-dashed border-border rounded-2xl py-14 text-center text-muted-foreground">The administrator has not published featured experiences yet.</div> : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{featuredEvents.map((event) => <Link to={`/events/${event.id}`} key={event.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"><img src={event.image} alt={event.title} className="w-full h-48 object-cover" /><div className="p-5"><h3 className="font-bold text-lg text-foreground">{event.title}</h3><p className="text-sm text-muted-foreground mt-2">{event.location} · {event.date}</p></div></Link>)}</div>}</section>

      <section className="relative py-20 overflow-hidden"><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80')] bg-cover bg-center" /><div className="absolute inset-0 bg-[#128C7E]/90" /><div className="relative container mx-auto px-4 text-center text-white max-w-4xl"><h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>Ready for Your Next Adventure?</h2><p className="text-lg text-white/85 mb-8">Stay connected with Durgaraj Adventures for upcoming treks, camps, training programs and adventure experiences.</p><div className="flex flex-wrap justify-center gap-4"><button onClick={handleWhatsApp} className="rounded-full bg-white px-6 py-3 font-bold text-[#128C7E]">Chat on WhatsApp</button><Link to="/events" className="rounded-full bg-primary px-6 py-3 font-bold text-white">Explore Adventures</Link></div></div></section>

      <section className="container mx-auto px-4 py-20 text-center"><h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>Your Next Adventure Starts Here</h2><p className="text-lg text-muted-foreground mb-8">Discover new places, challenge yourself and create memories that stay with you.</p><div className="flex flex-wrap justify-center gap-4"><Link to="/contact" className="rounded-full bg-secondary px-6 py-3 font-bold text-white">Get in Touch</Link><Link to="/events" className="rounded-full border border-primary px-6 py-3 font-bold text-primary">Explore Adventures</Link></div></section>
    </div>
  );
}
