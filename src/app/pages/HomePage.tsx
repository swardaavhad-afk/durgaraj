import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight, MapPin, Calendar, Shield, Award, Heart, 
  Star, CheckCircle2, TrendingUp, Users, Mountain, Clock,
  Phone, MessageCircle, Target, Trophy, Compass
} from 'lucide-react';
import { events, testimonials } from '../data/mockData';
import { Badge } from '../components/ui/badge';
import { StatsCounter } from '../components/StatsCounter';
import { toast } from 'sonner';
import logo from '@/assets/484ce3483d8a32e88cf47809ab7c80088f0be508.png';

export function HomePage() {
  const featuredEvents = events.filter(e => e.isFeatured).slice(0, 3);

  const handleWhatsAppGroup = () => {
    window.open('https://chat.whatsapp.com/DaqiHYV6ztN3EeOZ1cVFXD?mode=gi_t', '_blank');
  };

  const handleWhatsAppChat = (message: string) => {
    const url = `https://wa.me/919422769242?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* SECTION 2 – HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Sahyadri Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img src={logo} alt="Durgaraj Adventures" className="h-28 w-28 mx-auto mb-6" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Conquer the Sahyadris with<br />
              <span className="text-accent">Discipline & Courage</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium">
              Guided Weekend Treks by <span className="text-accent">Durgaraj Adventure</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/sahyadri-treks"
                className="px-10 py-4 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 justify-center group font-semibold text-lg"
              >
                <Mountain className="w-5 h-5" />
                <span>View Upcoming Treks</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={handleWhatsAppGroup}
                className="px-10 py-4 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all shadow-lg hover:shadow-xl flex items-center gap-2 justify-center font-semibold text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Join WhatsApp Trek Group</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Certified Trek Leaders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Safety First Protocol</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>25+ Years Experience (Since 1999)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tagline Strip */}
      <section className="py-4 bg-primary text-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-base md:text-lg font-medium italic">
            "The Sahyadris test your limits. We prepare you to conquer them."
          </p>
          <p className="text-center text-sm text-accent mt-1">
            - By Durgaraj Nisargmayee | Mountaineering Institute Nashik
          </p>
        </div>
      </section>

      {/* SECTION 3 – ABOUT SAHYADRI TREKS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Column 1 - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
                  alt="About Sahyadri Treks"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-8 rounded-2xl shadow-xl">
                <div className="text-5xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>25+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </motion.div>

            {/* Column 2 - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                About <span className="text-secondary">Sahyadri Treks</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                <strong className="text-foreground">Sahyadri Mitra Foundation - Durgaraj Nisargmayee</strong> is Maharashtra's premier mountaineering institute, 
                committed to providing safe, thrilling, and transformative experiences in the majestic Western Ghats.
              </p>
              
              {/* Icon List */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: Shield, title: 'Certified Trek Leaders', desc: 'Nationally certified mountaineering experts' },
                  { icon: Target, title: 'Safety First Protocol', desc: '100% safety record with international standards' },
                  { icon: Trophy, title: 'Skill-Based Outdoor Training', desc: 'Technical exposure and hands-on learning' },
                  { icon: Users, title: 'Limited Batch Size', desc: 'Personal attention with small group sizes' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-base mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold shadow-md"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => handleWhatsAppChat('Hello Durgaraj Team, I want to join trek updates.')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all font-semibold shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  Join WhatsApp Updates
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – FEATURED TREKS */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Featured <span className="text-secondary">Sahyadri Treks</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Handpicked adventures featuring Harishchandragad, Kalsubai Peak, Ratangad Fort & more
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-border">
                  <Link to={`/events/${event.id}`}>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${
                          event.difficulty === 'Easy' ? 'bg-green-500' :
                          event.difficulty === 'Moderate' ? 'bg-yellow-500' :
                          'bg-red-500'
                        } text-white border-0 font-semibold`}>
                          {event.difficulty}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-xl mb-1">{event.title}</h3>
                        <p className="text-white/80 text-xs" style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}>
                          {event.marathiTitle}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{event.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border mb-4">
                        <div className="text-2xl font-bold text-secondary">₹{event.price.toLocaleString()}</div>
                        <span className="text-primary group-hover:text-secondary transition-colors flex items-center gap-1 text-sm font-semibold">
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                  
                  {/* WhatsApp Enquiry Button */}
                  <div className="px-6 pb-6">
                    <button
                      onClick={() => handleWhatsAppChat(`Hello, I am interested in ${event.title}. Can you provide more details?`)}
                      className="w-full px-4 py-2.5 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Enquiry
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/sahyadri-treks"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg font-semibold text-lg"
            >
              <span>View All Sahyadri Treks</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY CHOOSE DURGARAJ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Choose <span className="text-secondary">Durgaraj</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: '100% Safety Approach',
                description: 'International standard equipment and zero compromise on safety protocols',
              },
              {
                icon: Compass,
                title: 'Technical Exposure',
                description: 'Learn professional mountaineering skills from certified instructors',
              },
              {
                icon: Heart,
                title: 'Nature Connection',
                description: 'Experience pristine Sahyadri beauty with responsible tourism',
              },
              {
                icon: Trophy,
                title: 'Discipline & Leadership',
                description: 'Build mental resilience, teamwork and leadership qualities',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 text-center border border-border group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – WHATSAPP CONVERSION STRIP */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
            alt="Trek Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/95 to-[#128C7E]/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
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
            <p className="text-xl mb-10 text-white/90 leading-relaxed">
              Get instant updates about Sahyadri treks, early bird discounts & last seat alerts directly on WhatsApp
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

      {/* SECTION 7 – TREK EXPERIENCE FLOW */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Trek <span className="text-secondary">Experience Flow</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Your journey from registration to summit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" style={{ top: '60px' }} />
            
            {[
              { step: '1', title: 'Registration', description: 'Book online or via WhatsApp with instant confirmation', icon: CheckCircle2 },
              { step: '2', title: 'Orientation', description: 'Pre-trek briefing with safety guidelines and gear checklist', icon: Shield },
              { step: '3', title: 'Base Village Briefing', description: 'Meet at base, equipment distribution, final briefing', icon: MapPin },
              { step: '4', title: 'Summit Attempt', description: 'Guided trek with breaks, support, and expert navigation', icon: Mountain },
              { step: '5', title: 'Certification', description: 'Share experiences and receive achievement certificate', icon: Award }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card p-6 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-border relative z-10">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 text-center">{item.title}</h3>
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 – TESTIMONIALS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our <span className="text-secondary">Trekkers Say</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real experiences from adventurers who've joined our treks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleWhatsAppGroup}
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all shadow-lg font-semibold text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Join the Next Batch on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9 – STATS COUNTER (Animated) */}
      <StatsCounter />

      {/* SECTION 10 – LEAD CAPTURE */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get <span className="text-secondary">Trek Calendar</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Subscribe to receive our complete trek schedule and exclusive offers
            </p>
          </motion.div>

          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); toast.success('Thank you! We will send you the trek calendar soon.'); }}>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-primary rounded" id="whatsapp-consent" />
                <label htmlFor="whatsapp-consent" className="text-sm text-muted-foreground">
                  ☑ Add me to WhatsApp Trek Updates for instant notifications
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all font-bold shadow-lg text-lg"
              >
                Get Trek Calendar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl mb-4 italic">"The Sahyadris are calling. Don't just watch from afar — join the expedition."</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready for Your Next Adventure?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sahyadri-treks"
                className="px-10 py-4 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all shadow-lg font-semibold text-lg inline-flex items-center justify-center gap-2"
              >
                <Mountain className="w-6 h-6" />
                Book Now
              </Link>
              <button
                onClick={handleWhatsAppGroup}
                className="px-10 py-4 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all shadow-lg font-semibold text-lg inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                Join WhatsApp Group
              </button>
              <Link
                to="/training"
                className="px-10 py-4 bg-white text-primary rounded-full hover:bg-white/95 transition-all shadow-lg font-semibold text-lg inline-flex items-center justify-center gap-2"
              >
                <Trophy className="w-6 h-6" />
                Train with Durgaraj
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
