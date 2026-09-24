import { Link } from 'react-router';
import { Calendar, Clock, IndianRupee, MessageCircle } from 'lucide-react';
import { useEvents } from '../data/eventStore';

export function TrainingCatalogPage() {
  const programs = useEvents().filter((event) => event.category === 'Training');

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Training Programs</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Training programs published by the Durgaraj administrator.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        {programs.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-16 border border-dashed border-border rounded-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-3">Training programs coming soon</h2>
            <p className="text-muted-foreground">The administrator has not published any training programs yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <article key={program.id} className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg">
                <img src={program.image} alt={program.title} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">{program.title}</h2>
                  {program.marathiTitle && <p className="text-primary text-sm mb-4">{program.marathiTitle}</p>}
                  <p className="text-muted-foreground mb-6">{program.detailedDescription || program.shortDescription}</p>
                  <div className="flex flex-wrap gap-5 text-sm text-muted-foreground mb-6">
                    <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />{program.duration}</span>
                    <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" />{program.date}</span>
                    <span className="inline-flex items-center gap-2"><IndianRupee className="w-4 h-4 text-primary" />{program.price.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to={`/events/${program.id}`} className="flex-1 px-5 py-3 bg-secondary text-white rounded-full text-center font-semibold">View details</Link>
                    <button onClick={() => window.open(`https://wa.me/919422769242?text=${encodeURIComponent(`Hello, I am interested in ${program.title}.`)}`, '_blank')} className="flex-1 px-5 py-3 bg-[#25D366] text-white rounded-full font-semibold inline-flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" /> Enquire</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
