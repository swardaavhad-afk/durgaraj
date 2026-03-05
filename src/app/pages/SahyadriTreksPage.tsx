import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { MapPin, Clock, IndianRupee, Filter, TrendingUp, Calendar, MessageCircle, Phone } from 'lucide-react';
import { events } from '../data/mockData';
import { Badge } from '../components/ui/badge';

export function SahyadriTreksPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  // Filter treks (exclude Himalayan and Training categories)
  const sahyadriTreks = events.filter(
    (event) => event.category !== 'Himalayan' && event.category !== 'Training'
  );

  // Apply filters
  const filteredTreks = sahyadriTreks.filter((trek) => {
    if (selectedDifficulty !== 'all' && trek.difficulty !== selectedDifficulty) return false;
    if (selectedDuration !== 'all') {
      if (selectedDuration === '1-day' && !trek.duration.includes('1 Day')) return false;
      if (selectedDuration === '2-day' && !trek.duration.includes('2 Days')) return false;
      if (selectedDuration === '3-day+' && (trek.duration.includes('1 Day') || trek.duration.includes('2 Days'))) return false;
    }
    if (selectedMonth !== 'all' && trek.month && trek.month !== selectedMonth) return false;
    if (priceRange !== 'all') {
      const price = trek.price;
      if (priceRange === 'under-1500' && price >= 1500) return false;
      if (priceRange === '1500-2500' && (price < 1500 || price > 2500)) return false;
      if (priceRange === 'above-2500' && price <= 2500) return false;
    }
    return true;
  });

  const handleWhatsAppGroup = () => {
    window.open('https://chat.whatsapp.com/DaqiHYV6ztN3EeOZ1cVFXD?mode=gi_t', '_blank');
  };

  const handleWhatsAppChat = (message: string) => {
    const url = `https://wa.me/919422769242?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const difficultyColors: Record<string, string> = {
    Easy: 'bg-green-500',
    Moderate: 'bg-yellow-500',
    Hard: 'bg-red-500',
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SECTION 1 – BANNER */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Sahyadri Mountains"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Sahyadri Treks <span className="text-accent">Maharashtra</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-6" style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}>
              सह्याद्री ट्रेक्स महाराष्ट्र
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Explore Maharashtra's legendary peaks: Harishchandragad, Kalsubai Peak, Ratangad Fort, Rajmachi Fort & more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppGroup}
                className="px-10 py-3.5 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all flex items-center gap-2 justify-center font-semibold shadow-lg text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Join Trek WhatsApp Group
              </button>
              <Link
                to="/contact"
                className="px-10 py-3.5 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all flex items-center gap-2 justify-center font-semibold shadow-lg text-lg"
              >
                <Phone className="w-5 h-5" />
                Talk to Trek Leader
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-6 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary p-6 rounded-lg">
            <p className="text-foreground text-lg font-medium italic">
              "The Sahyadris test your limits. We prepare you to conquer them."
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              - By Durgaraj Nisargmayee | Mountaineering Institute Nashik
            </p>
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-lg bg-background/95">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-6 border border-border shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Filter className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Filter Treks</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Difficulty Filter */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full bg-muted text-foreground border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Levels</option>
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              {/* Duration Filter */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Duration</label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full bg-muted text-foreground border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Durations</option>
                  <option value="1-day">1 Day</option>
                  <option value="2-day">2 Days / 1 Night</option>
                  <option value="3-day+">3+ Days</option>
                </select>
              </div>

              {/* Month Filter */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Month</label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full bg-muted text-foreground border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Months</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full bg-muted text-foreground border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Prices</option>
                  <option value="under-1500">Under ₹1,500</option>
                  <option value="1500-2500">₹1,500 - ₹2,500</option>
                  <option value="above-2500">Above ₹2,500</option>
                </select>
              </div>
            </div>

            {/* Reset Filters */}
            {(selectedDifficulty !== 'all' || selectedDuration !== 'all' || selectedMonth !== 'all' || priceRange !== 'all') && (
              <button
                onClick={() => {
                  setSelectedDifficulty('all');
                  setSelectedDuration('all');
                  setSelectedMonth('all');
                  setPriceRange('all');
                }}
                className="mt-4 text-secondary hover:text-secondary/80 transition-colors text-sm font-semibold"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* TREK LISTING GRID */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {filteredTreks.length} Trek{filteredTreks.length !== 1 ? 's' : ''} Available
            </h2>
          </div>

          {filteredTreks.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-2xl border border-border">
              <p className="text-muted-foreground text-lg mb-4">No treks match your filters. Try adjusting your selection.</p>
              <button
                onClick={() => {
                  setSelectedDifficulty('all');
                  setSelectedDuration('all');
                  setSelectedMonth('all');
                  setPriceRange('all');
                }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreks.map((trek) => (
                <motion.div
                  key={trek.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary hover:shadow-2xl transition-all"
                >
                  <Link to={`/events/${trek.id}`}>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={trek.image}
                        alt={trek.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className={`${difficultyColors[trek.difficulty]} text-white border-0 font-semibold`}>
                          {trek.difficulty}
                        </Badge>
                        {trek.isFeatured && (
                          <Badge className="bg-accent text-white border-0 font-semibold">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-xl mb-1 group-hover:text-accent transition-colors">
                          {trek.title}
                        </h3>
                        <p className="text-white/80 text-sm" style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}>
                          {trek.marathiTitle}
                        </p>
                      </div>
                    </div>
                  </Link>

                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{trek.shortDescription}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        {trek.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        {trek.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        {trek.date}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border mb-4">
                      <div className="flex items-center gap-1 text-secondary">
                        <IndianRupee className="w-5 h-5" />
                        <span className="text-2xl font-bold">{trek.price.toLocaleString()}</span>
                      </div>
                      <Link
                        to={`/events/${trek.id}`}
                        className="text-primary group-hover:text-secondary transition-colors flex items-center gap-1 text-sm font-semibold"
                      >
                        View Details →
                      </Link>
                    </div>

                    {/* Book Now Button */}
                    <Link
                      to={`/events/${trek.id}`}
                      className="block w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold text-center mb-3"
                    >
                      Book Now
                    </Link>

                    {/* WhatsApp Enquiry Button */}
                    <button
                      onClick={() => handleWhatsAppChat(`Hello, I am interested in ${trek.title}. Can you provide more details?`)}
                      className="w-full px-4 py-2.5 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all font-semibold flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Enquiry
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WHATSAPP CONVERSION SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#25D366] to-[#128C7E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Stay Updated. Never Miss a Trek.
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Get instant updates about Sahyadri treks, early bird discounts & last seat alerts directly on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppGroup}
                className="px-10 py-4 bg-white text-[#25D366] rounded-full hover:bg-white/95 transition-all font-bold shadow-xl text-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                Join Official WhatsApp Group
              </button>
              <button
                onClick={() => handleWhatsAppChat('Hello Durgaraj Team, I want to join trek updates.')}
                className="px-10 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all font-bold shadow-xl text-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-6 h-6" />
                Chat with Trek Leader
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
