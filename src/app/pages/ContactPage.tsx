import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleWhatsAppChat = () => {
    const url = `https://wa.me/919422769242?text=${encodeURIComponent('Hello Durgaraj Team, I want to know more about your treks.')}`;
    window.open(url, '_blank');
  };

  const handleWhatsAppGroup = () => {
    window.open('https://chat.whatsapp.com/DaqiHYV6ztN3EeOZ1cVFXD?mode=gi_t', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919422769242';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in <span className="text-white/90">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have questions about our treks? We're here to help you plan your next adventure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            {[
              {
                icon: Phone,
                title: 'Call Us',
                info: ['Keshav: 94227-69242', 'Jyoti: 94227-09943', 'Om: 72767-87383', 'Vrushali: 70288-27548'],
                subinfo: 'Mon-Sat, 9AM-7PM',
                action: handleCall,
                actionText: 'Call Now',
                bgColor: 'bg-secondary'
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                info: 'Instant Response',
                subinfo: 'Chat with trek leader',
                action: handleWhatsAppChat,
                actionText: 'WhatsApp Chat',
                bgColor: 'bg-[#25D366]'
              },
              {
                icon: Mail,
                title: 'Email Us',
                info: 'durgarajoffice@gmail.com',
                subinfo: 'Response within 24 hours',
                action: () => window.location.href = 'mailto:durgarajoffice@gmail.com',
                actionText: 'Send Email',
                bgColor: 'bg-primary'
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl border border-border shadow-md hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 ${contact.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {contact.title}
                </h3>
                {Array.isArray(contact.info) ? (
                  <div className="mb-1 space-y-1">
                    {contact.info.map((item, i) => (
                      <p key={i} className="text-foreground font-medium text-sm">{item}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-foreground font-medium mb-1">{contact.info}</p>
                )}
                <p className="text-muted-foreground text-sm mb-6">{contact.subinfo}</p>
                <button
                  onClick={contact.action}
                  className={`w-full px-6 py-3 ${contact.bgColor} text-white rounded-full hover:opacity-90 transition-all font-semibold`}
                >
                  {contact.actionText}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-2xl border border-border shadow-md">
                <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Send us a <span className="text-secondary">Message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your query..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all font-bold shadow-lg flex items-center justify-center gap-2 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>

                <div className="mt-6 p-4 bg-[#25D366]/10 rounded-lg border border-[#25D366]/20">
                  <p className="text-muted-foreground text-sm mb-3 text-center">
                    Or get instant response via WhatsApp
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={handleWhatsAppChat}
                      className="flex-1 px-4 py-2.5 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat Now
                    </button>
                    <button
                      onClick={handleWhatsAppGroup}
                      className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Join Group
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Office Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Details */}
              <div className="bg-card p-8 rounded-2xl border border-border shadow-md">
                <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Visit Our <span className="text-secondary">Office</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        'Shakuntal' Hindashakti nagar,<br />
                        panchak shiwar, pawarwadi,<br />
                        Nashik road, Nashik-422101<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: By Appointment Only
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Direct Contact</h4>
                      <p className="text-muted-foreground">
                        Keshav: 94227-69242<br />
                        Jyoti: 94227-09943
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">
                        durgarajoffice@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-card rounded-2xl border border-border shadow-md overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.5537976177244!2d73.78638631490245!3d19.997453786486677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0x2b1f6d9b6b8e9e0!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Durgaraj Adventures Office Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#25D366] to-[#128C7E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Need Immediate Assistance?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Connect with our trek leaders on WhatsApp for instant responses to all your queries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppChat}
                className="px-10 py-4 bg-white text-[#25D366] rounded-full hover:bg-white/95 transition-all font-bold shadow-xl text-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </button>
              <button
                onClick={handleWhatsAppGroup}
                className="px-10 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all font-bold shadow-xl text-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                Join Trek Group
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
