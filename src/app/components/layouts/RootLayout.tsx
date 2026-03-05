import { Outlet, Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { Menu, X, User, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppButton, MobileStickyBar } from '../WhatsAppButton';
import logo from '@/assets/484ce3483d8a32e88cf47809ab7c80088f0be508.png';

export function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/sahyadri-treks', label: 'Sahyadri Treks' },
    { to: '/events', label: 'All Events' },
    { to: '/training', label: 'Training' },
    { to: '/blog', label: 'Blog' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+919422769242" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>Keshav: 94227-69242</span>
              </a>
              <a href="mailto:durgarajoffice@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>durgarajoffice@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs">Mountaineering Institute, Nashik</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-border' 
            : 'bg-white border-b border-border'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <img 
                src={logo} 
                alt="Durgaraj Adventures Logo" 
                className="h-16 w-16 object-contain group-hover:scale-105 transition-transform"
              />
              <div className="hidden md:block">
                <div className="text-secondary font-bold text-2xl tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  DURGARAJ
                </div>
                <div className="text-primary text-sm font-medium tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  A Joyful Adventure
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative ${
                    location.pathname === link.to
                      ? 'text-secondary bg-secondary/5'
                      : 'text-foreground hover:text-secondary hover:bg-muted'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold text-sm shadow-sm hover:shadow-md"
              >
                Book Trek
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pt-4 border-t border-border"
              >
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === link.to
                          ? 'text-secondary bg-secondary/5'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    className="mt-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold text-sm text-center"
                  >
                    Book Trek
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* WhatsApp Button - Floating */}
      <WhatsAppButton type="chat" />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 pb-24 lg:pb-16 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="Durgaraj Logo" className="h-14 w-14 object-contain" />
                <div>
                  <div className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    DURGARAJ
                  </div>
                  <div className="text-xs text-accent">A Joyful Adventure</div>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
                Official mountaineering institute and adventure organization dedicated to exploring the magnificent Sahyadri ranges with safety and joy.
              </p>
              <div className="flex gap-3">
                {['F', 'I', 'Y'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors text-sm font-semibold"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinks.slice(0, 6).map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <div>
                    <div>Keshav: 94227-69242</div>
                    <div>Jyoti: 94227-09943</div>
                    <div>Om: 72767-87383</div>
                    <div>Vrushali: 70288-27548</div>
                    <div className="text-xs mt-1">Mon-Sat, 9AM-7PM</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <div>durgarajoffice@gmail.com</div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>'Shakuntal' Hindashakti nagar,<br />panchak shiwar, pawarwadi,<br />Nashik road, Nashik-422101</div>
                </li>
              </ul>
            </div>

            {/* Stay Connected */}
            <div>
              <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Stay Connected
              </h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Get instant trek updates and exclusive offers on WhatsApp
              </p>
              <WhatsAppButton type="group" position="inline" className="w-full mb-4 justify-center" />
              <div className="bg-white/10 rounded-lg p-4 mt-6">
                <p className="text-xs text-primary-foreground/70 italic">
                  "The Sahyadris are calling. Don't just watch from afar — join the expedition."
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <p>&copy; 2026 Durgaraj Adventures. All rights reserved.</p>
            <div className="flex gap-6 text-xs">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
