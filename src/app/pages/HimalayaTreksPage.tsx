import { Link } from 'react-router';
import { Calendar, Clock, IndianRupee, MapPin, Mountain } from 'lucide-react';
import { useEvents } from '../data/eventStore';

export function HimalayaTreksPage() {
  const treks = useEvents().filter((event) => event.category === 'Himalayan');

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 bg-gradient-to-br from-[#173449] to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80')] bg-cover bg-center" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Mountain className="w-12 h-12 mx-auto text-accent mb-5" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Himalaya Treks</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">High-altitude journeys published by the Durgaraj administrator.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        {treks.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-16 border border-dashed border-border rounded-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-3">Himalaya treks coming soon</h2>
            <p className="text-muted-foreground">The administrator has not published any Himalayan treks yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treks.map((trek) => (
              <article key={trek.id} className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg">
                <img src={trek.image} alt={trek.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">{trek.title}</h2>
                  <p className="text-muted-foreground text-sm mb-5">{trek.shortDescription}</p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />{trek.location}</p>
                    <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />{trek.duration}</p>
                    <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" />{trek.date}</p>
                    <p className="flex items-center gap-2"><IndianRupee className="w-4 h-4 text-primary" />{trek.price.toLocaleString()}</p>
                  </div>
                  <Link to={`/events/${trek.id}`} className="block px-5 py-3 bg-secondary text-white rounded-full text-center font-semibold">View trek details</Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
