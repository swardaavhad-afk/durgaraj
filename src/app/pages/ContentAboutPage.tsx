import { Award, Compass, Heart, Mountain, Shield, Users } from 'lucide-react';
import { useSiteContent } from '../data/siteContentStore';

const values = [
  { title: 'Adventure', text: 'Embrace challenges and discover the excitement of exploring the outdoors.', icon: Mountain },
  { title: 'Discipline', text: 'Approach every adventure with preparation, responsibility and commitment.', icon: Shield },
  { title: 'Learning', text: 'Learn through real experiences, challenges and outdoor environments.', icon: Compass },
  { title: 'Teamwork', text: 'Grow together by supporting, encouraging and learning from one another.', icon: Users },
  { title: 'Nature', text: 'Build a meaningful connection with mountains, landscapes and the natural world.', icon: Heart },
  { title: 'Community', text: 'Create a welcoming community united by adventure and exploration.', icon: Award },
];

export function ContentAboutPage() {
  const content = useSiteContent();
  const about = content.about;
  const title = about.title || 'About Durgaraj Adventures';
  const intro = about.intro || 'Durgaraj Adventures is an adventure and outdoor experience organisation focused on trekking, mountaineering, adventure camps, outdoor training and nature-based experiences.';
  const story = about.story || 'Built around a passion for mountains, adventure and exploration, Durgaraj brings people together through experiences in the outdoors. From trekking and adventure camps to mountaineering and training activities, our aim is to create opportunities for people to explore, challenge themselves and discover the joy of adventure.\n\nOur experiences go beyond simply reaching a destination. We believe every journey can build confidence, discipline, teamwork, resilience and a deeper connection with nature.';
  const mission = about.mission || 'Our mission is to encourage people to experience the outdoors, explore the mountains and develop through adventure while creating a strong and responsible community of adventure enthusiasts.';

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 bg-[#173449] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80')] bg-cover bg-center opacity-25" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">About Durgaraj</p>
          <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-5xl space-y-12">
        <div><h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Introduction</h2><p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">{intro}</p></div>
        <div><h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Story</h2><p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">{story}</p></div>
        <div className="bg-muted rounded-2xl p-8"><h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h2><p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">{mission}</p></div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4"><div className="text-center mb-12"><h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Our Values</h2></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">{values.map(({ title: valueTitle, text, icon: Icon }) => <article key={valueTitle} className="bg-card rounded-2xl border border-border p-7"><Icon className="w-9 h-9 text-primary mb-5" /><h3 className="text-xl font-bold text-foreground mb-3">{valueTitle}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></article>)}</div></div>
      </section>

      <section className="py-20 bg-primary text-white"><div className="container mx-auto px-4"><div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center"><div><div className="text-5xl font-bold text-accent">5000+</div><p className="text-lg text-white/80 mt-2">Camps & Treks</p></div><div><div className="text-5xl font-bold text-accent">80,000+</div><p className="text-lg text-white/80 mt-2">Happy Adventures</p></div><div><div className="text-5xl font-bold text-accent">100+</div><p className="text-lg text-white/80 mt-2">Trained Volunteers</p></div></div></div></section>
    </div>
  );
}
