import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, ArrowRight, Filter, X, MessageCircle } from 'lucide-react';
import { useEvents } from '../data/eventStore';
import { Badge } from '../components/ui/badge';

export function EventsListingPage() {
  const events = useEvents();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedDuration, setSelectedDuration] = useState<string>('All');
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Camping', 'Trek', 'Heritage', 'Nature'];
  const difficulties = ['All', 'Easy', 'Moderate', 'Hard'];
  const durations = ['All', '1 Day', '2 Days / 1 Night'];

  const filteredEvents = events.filter((event) => {
    const categoryMatch = selectedCategory === 'All' || event.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || event.difficulty === selectedDifficulty;
    const durationMatch = selectedDuration === 'All' || event.duration.includes(selectedDuration);
    const searchMatch = searchQuery === '' || event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && difficultyMatch && durationMatch && searchMatch;
  });

  const handleWhatsAppEnquiry = (eventTitle: string) => {
    const url = `https://wa.me/919422769242?text=${encodeURIComponent(`Hello, I am interested in "${eventTitle}". Can you share more details?`)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Adventures"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Explore Our <span className="text-white/90">Adventures</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Choose from our wide range of carefully curated adventure experiences
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search treks by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-6 py-3 bg-card border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-card text-foreground rounded-xl border border-border hover:border-primary transition-all"
          >
            <Filter className="w-5 h-5" />
            Filters
            {(selectedCategory !== 'All' || selectedDifficulty !== 'All' || selectedDuration !== 'All') && (
              <span className="w-2 h-2 bg-secondary rounded-full" />
            )}
          </button>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`lg:block ${filterOpen ? 'fixed inset-0 z-50 bg-background p-6 overflow-y-auto' : 'hidden'} lg:relative lg:inset-auto lg:p-0 lg:w-64 flex-shrink-0`}
          >
            <div className="bg-card rounded-xl p-6 border border-border sticky top-24 shadow-md">
              <div className="flex items-center justify-between mb-6 lg:block">
                <h2 className="text-xl font-bold text-foreground">Filters</h2>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="lg:hidden text-foreground hover:text-secondary"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-foreground font-semibold mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground font-semibold'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="mb-6">
                <h3 className="text-foreground font-semibold mb-3">Difficulty</h3>
                <div className="space-y-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedDifficulty === difficulty
                          ? 'bg-primary text-primary-foreground font-semibold'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      {difficulty}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Filter */}
              <div>
                <h3 className="text-foreground font-semibold mb-3">Duration</h3>
                <div className="space-y-2">
                  {durations.map((duration) => (
                    <button
                      key={duration}
                      onClick={() => setSelectedDuration(duration)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedDuration === duration
                          ? 'bg-primary text-primary-foreground font-semibold'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      {duration}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory !== 'All' || selectedDifficulty !== 'All' || selectedDuration !== 'All') && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedDifficulty('All');
                    setSelectedDuration('All');
                  }}
                  className="w-full mt-6 px-4 py-2 border border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-all"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </motion.div>

          {/* Events Grid */}
          <div className="flex-1">
            <div className="mb-6 text-muted-foreground">
              Showing {filteredEvents.length} of {events.length} events
            </div>

            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-border group">
                      <Link to={`/events/${event.id}`} className="block">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-primary/90 text-primary-foreground border-0">
                              {event.category}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge className={`${
                              event.difficulty === 'Easy' ? 'bg-green-500' :
                              event.difficulty === 'Moderate' ? 'bg-yellow-500' : 'bg-red-500'
                            } text-white border-0 font-semibold`}>
                              {event.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </Link>
                      
                      <div className="p-6">
                        <Link to={`/events/${event.id}`} className="block">
                          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.shortDescription}</p>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4 text-primary" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4 text-primary" />
                              {event.duration}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 text-primary" />
                              {event.date}
                            </div>
                          </div>
                        </Link>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-2xl font-bold text-secondary">₹{event.price.toLocaleString()}</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => { e.preventDefault(); handleWhatsAppEnquiry(event.title); }}
                              className="p-2 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all"
                              title="WhatsApp Enquiry"
                            >
                              <MessageCircle className="w-4 h-4" />
                            </button>
                            <Link to={`/events/${event.id}`} className="text-secondary hover:text-secondary/80 transition-colors flex items-center gap-1 text-sm font-semibold">
                              View Details
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No events found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedDifficulty('All');
                    setSelectedDuration('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-6 py-3 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
