import { useParams, useNavigate, Link } from 'react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin, Calendar, Clock, Users, CheckCircle2, Package, AlertCircle,
  X, MessageCircle, Phone, Shield, Award, Heart, IndianRupee, Mountain,
  ChevronDown, ChevronLeft, ChevronRight, Share2, Star
} from 'lucide-react';
import { useEvents } from '../data/eventStore';
import { toast } from 'sonner';
import { Badge } from '../components/ui/badge';

type TabType = 'overview' | 'itinerary' | 'included' | 'bring' | 'prerequisites' | 'gallery' | 'faq';

export function EventDetailPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const events = useEvents();
  const event = events.find((e) => e.id === eventId);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    participants: '1',
    date: '',
  });

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Trek Not Found</h1>
          <button
            onClick={() => navigate('/sahyadri-treks')}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold"
          >
            Back to Treks
          </button>
        </div>
      </div>
    );
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking request submitted! We will contact you shortly.');
    setBookingModalOpen(false);
    setBookingData({ name: '', email: '', phone: '', participants: '1', date: '' });
  };

  const handleWhatsAppChat = (message: string) => {
    const url = `https://wa.me/919422769242?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleWhatsAppGroup = () => {
    window.open('https://chat.whatsapp.com/DaqiHYV6ztN3EeOZ1cVFXD?mode=gi_t', '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: event.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  // Gallery images: use event gallery if available, fallback to event image
  const galleryImages = event.gallery.length > 0 ? event.gallery : [event.image];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next'
      ? (lightboxIndex + 1) % galleryImages.length
      : (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightboxIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Related treks: same category, exclude current
  const relatedTreks = events
    .filter(e => e.category === event.category && e.id !== event.id)
    .slice(0, 3);

  const totalPrice = event.price * parseInt(bookingData.participants || '1');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'included', label: "What's Included" },
    { id: 'bring', label: 'What to Bring' },
    { id: 'prerequisites', label: 'Prerequisites' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SECTION 1 – BANNER */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-2 mb-4">
                <Badge className={`${
                  event.difficulty === 'Easy' ? 'bg-green-500' :
                  event.difficulty === 'Moderate' ? 'bg-yellow-500' :
                  'bg-red-500'
                } text-white border-0 font-semibold text-base px-4 py-1.5`}>
                  {event.difficulty}
                </Badge>
                <Badge className="bg-primary text-primary-foreground border-0 font-semibold text-base px-4 py-1.5">
                  {event.category}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                {event.title}
              </h1>
              <p className="text-2xl md:text-3xl text-accent mb-6" style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}>
                {event.marathiTitle}
              </p>
              
              <div className="flex flex-wrap gap-6 text-white mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="font-medium">{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="font-medium">{event.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.8 (50+ reviews)</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleWhatsAppGroup}
                  className="px-8 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all font-semibold flex items-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Join WhatsApp Group
                </button>
                <button
                  onClick={handleShare}
                  className="px-6 py-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all font-semibold flex items-center gap-2 backdrop-blur-sm"
                >
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Row */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            {[
              { icon: Clock, label: 'Duration', value: event.duration },
              { icon: Mountain, label: 'Difficulty', value: event.difficulty },
              { icon: Users, label: 'Group Size', value: '15-25 people' },
              { icon: Shield, label: 'Age Limit', value: event.prerequisites.ageLimit },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="font-semibold text-foreground text-sm">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content (70%) */}
            <div className="lg:col-span-2 space-y-8">
              {/* TABS NAVIGATION */}
              <div className="bg-card rounded-2xl border border-border shadow-md overflow-hidden">
                <div className="flex overflow-x-auto border-b border-border">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                        activeTab === tab.id
                          ? 'text-secondary border-b-2 border-secondary bg-secondary/5'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-8">
                  {/* OVERVIEW TAB */}
                  {activeTab === 'overview' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Trek <span className="text-secondary">Overview</span>
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                        {event.detailedDescription}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.shortDescription}
                      </p>
                      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-foreground mb-2">Terrain</h4>
                        <p className="text-muted-foreground">{event.terrain}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* ITINERARY TAB */}
                  {activeTab === 'itinerary' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Trek <span className="text-secondary">Itinerary</span>
                      </h2>
                      
                      <div className="space-y-6">
                        {event.itinerary?.map((dayItem, index) => (
                          <div
                            key={index}
                            className="relative pl-8 border-l-2 border-primary/30"
                          >
                            <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {dayItem.day}
                            </div>
                            <div className="bg-muted rounded-xl p-6 border border-border">
                              <h3 className="font-bold text-foreground text-lg mb-4">
                                Day {dayItem.day}: {dayItem.title}
                              </h3>
                              <ul className="space-y-2">
                                {dayItem.activities.map((activity, actIdx) => (
                                  <li key={actIdx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                                    <span className="text-muted-foreground">{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* WHAT'S INCLUDED TAB */}
                  {activeTab === 'included' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        What's <span className="text-secondary">Included</span>
                      </h2>
                      <ul className="space-y-3">
                        {event.whatIncluded?.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 bg-green-500/5 p-4 rounded-lg border border-green-500/10">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* WHAT TO BRING TAB */}
                  {activeTab === 'bring' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Things to <span className="text-secondary">Carry</span>
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {event.whatToBring?.map((item, index) => (
                          <div key={index} className="flex items-center gap-3 bg-muted p-4 rounded-lg border border-border">
                            <Package className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* PREREQUISITES TAB */}
                  {activeTab === 'prerequisites' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        <span className="text-secondary">Prerequisites</span> & Safety
                      </h2>
                      
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-muted p-4 rounded-lg border border-border">
                            <div className="text-sm text-muted-foreground mb-1">Fitness Level</div>
                            <div className="font-semibold text-foreground">{event.prerequisites.fitnessLevel}</div>
                          </div>
                          <div className="bg-muted p-4 rounded-lg border border-border">
                            <div className="text-sm text-muted-foreground mb-1">Age Limit</div>
                            <div className="font-semibold text-foreground">{event.prerequisites.ageLimit}</div>
                          </div>
                          <div className="bg-muted p-4 rounded-lg border border-border">
                            <div className="text-sm text-muted-foreground mb-1">Experience</div>
                            <div className="font-semibold text-foreground">{event.prerequisites.experience}</div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-primary" />
                            Safety Guidelines
                          </h3>
                          <ul className="space-y-2">
                            {event.prerequisites.safety.map((item, index) => (
                              <li key={index} className="flex items-start gap-3 bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span className="text-foreground text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* GALLERY TAB */}
                  {activeTab === 'gallery' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Trek <span className="text-secondary">Gallery</span>
                      </h2>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((img, index) => (
                          <div
                            key={index}
                            onClick={() => openLightbox(index)}
                            className="relative h-48 rounded-xl overflow-hidden cursor-pointer group"
                          >
                            <img
                              src={img}
                              alt={`Gallery ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                              <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                View
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* FAQ TAB */}
                  {activeTab === 'faq' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Frequently Asked <span className="text-secondary">Questions</span>
                      </h2>
                      
                      <div className="space-y-3">
                        {event.faq?.map((item, index) => (
                          <div
                            key={index}
                            className="bg-muted rounded-xl border border-border overflow-hidden"
                          >
                            <button
                              onClick={() => setOpenFaq(openFaq === index ? null : index)}
                              className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/80 transition-colors"
                            >
                              <span className="font-semibold text-foreground text-left">{item.question}</span>
                              <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {openFaq === index && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-6 pb-4">
                                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* SAFETY MEASURES */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Safety <span className="text-secondary">Measures</span>
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Certified Trek Leaders',
                    'First Aid Kit & Medical Support',
                    'Emergency Evacuation Plan',
                    'Weather Monitoring',
                    'Safety Briefing Before Trek',
                    'Quality Equipment Provided'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-card/50 p-4 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* RELATED TREKS */}
              {relatedTreks.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Similar <span className="text-secondary">Treks</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedTreks.map((trek) => (
                      <Link key={trek.id} to={`/events/${trek.id}`} className="group">
                        <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all">
                          <div className="relative h-40 overflow-hidden">
                            <img src={trek.image} alt={trek.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute top-3 left-3">
                              <Badge className={`${
                                trek.difficulty === 'Easy' ? 'bg-green-500' :
                                trek.difficulty === 'Moderate' ? 'bg-yellow-500' : 'bg-red-500'
                              } text-white border-0 text-xs`}>
                                {trek.difficulty}
                              </Badge>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold text-foreground text-sm mb-1 group-hover:text-secondary transition-colors">{trek.title}</h3>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              {trek.location}
                            </div>
                            <div className="text-secondary font-bold mt-2">₹{trek.price.toLocaleString()}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column - Sticky Sidebar (30%) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price & Booking Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border shadow-lg"
                >
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-sm text-muted-foreground">From</span>
                    <div className="flex items-center text-secondary">
                      <IndianRupee className="w-7 h-7" />
                      <span className="text-4xl font-bold">{event.price.toLocaleString()}</span>
                    </div>
                    <span className="text-muted-foreground">per person</span>
                  </div>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-semibold text-foreground">{event.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Difficulty</span>
                      <Badge className={`${
                        event.difficulty === 'Easy' ? 'bg-green-500' :
                        event.difficulty === 'Moderate' ? 'bg-yellow-500' :
                        'bg-red-500'
                      } text-white border-0`}>
                        {event.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Next Date</span>
                      <span className="font-semibold text-foreground">{event.date}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => setBookingModalOpen(true)}
                      className="w-full px-6 py-3.5 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all font-bold shadow-md flex items-center justify-center gap-2"
                    >
                      <Mountain className="w-5 h-5" />
                      Book Now
                    </button>

                    <button
                      onClick={() => handleWhatsAppChat(`Hello, I am interested in ${event.title} scheduled on ${event.date}. Can you provide more details?`)}
                      className="w-full px-6 py-3.5 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all font-bold shadow-md flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Enquiry
                    </button>

                    <button
                      onClick={handleWhatsAppGroup}
                      className="w-full px-6 py-3.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-bold shadow-md flex items-center justify-center gap-2"
                    >
                      <Users className="w-5 h-5" />
                      Join Group
                    </button>

                    <button
                      onClick={handleShare}
                      className="w-full px-6 py-3 border border-border text-foreground rounded-full hover:bg-muted transition-all font-semibold flex items-center justify-center gap-2"
                    >
                      <Share2 className="w-4 h-4" />
                      Share Trek
                    </button>
                  </div>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border shadow-md"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">Have Questions?</h3>
                  <div className="space-y-3 mb-4">
                    <a href="tel:+919422769242" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm">Keshav: 94227-69242</span>
                    </a>
                    <a href="tel:+919422709943" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm">Jyoti: 94227-09943</span>
                    </a>
                    <a href="mailto:durgarajoffice@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">durgarajoffice@gmail.com</span>
                    </a>
                  </div>
                  <button
                    onClick={() => handleWhatsAppChat('Hello, I need help with trek booking.')}
                    className="w-full px-4 py-2.5 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all font-semibold text-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat Now
                  </button>
                </motion.div>

                {/* Why Book With Us */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border shadow-md"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">Why Book With Us</h3>
                  <ul className="space-y-3">
                    {[
                      { icon: Shield, text: '100% Safety Record' },
                      { icon: Award, text: 'Certified Guides' },
                      { icon: Heart, text: 'Small Group Size' },
                      { icon: CheckCircle2, text: 'Best Price Guarantee' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {bookingModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setBookingModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-card p-8 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto z-10 border border-border mx-4"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Book Your Trek</h2>
                <button onClick={() => setBookingModalOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="bg-muted p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-foreground">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.date} • {event.duration}</p>
              </div>

              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={bookingData.email}
                    onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Number of Participants</label>
                  <select
                    value={bookingData.participants}
                    onChange={(e) => setBookingData({ ...bookingData, participants: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>{num} Person{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-semibold">Total Price</span>
                    <span className="text-2xl font-bold text-secondary">₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    ₹{event.price.toLocaleString()} × {bookingData.participants} person{parseInt(bookingData.participants) > 1 ? 's' : ''}
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all font-bold shadow-md mt-2"
                >
                  Confirm Booking
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    setBookingModalOpen(false);
                    handleWhatsAppChat(`Hello, I want to book ${event.title} for ${bookingData.participants} person(s). Total: ₹${totalPrice.toLocaleString()}`);
                  }}
                  className="w-full px-6 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Or Book via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Image Lightbox with Navigation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Image counter */}
            <div className="absolute top-4 left-4 text-white/80 text-sm z-10">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>

            {/* Previous button */}
            {galleryImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next button */}
            {galleryImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
