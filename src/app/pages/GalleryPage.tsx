import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { events } from '../data/mockData';

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Collect all gallery images from events
  const allImages = events.flatMap(event => 
    event.gallery.map(img => ({ src: img, category: event.category, title: event.title }))
  );

  // Also include the main event images if gallery is empty
  const eventMainImages = events
    .filter(event => event.gallery.length === 0)
    .map(event => ({ src: event.image, category: event.category, title: event.title }));

  const combinedImages = [...allImages, ...eventMainImages];

  const filteredImages = selectedCategory === 'all' 
    ? combinedImages 
    : combinedImages.filter(img => img.category === selectedCategory);

  const categories = ['all', ...Array.from(new Set(events.map(e => e.category)))];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setSelectedImage(filteredImages[index].src);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next'
      ? (lightboxIndex + 1) % filteredImages.length
      : (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].src);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Gallery"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Adventure <span className="text-white/90">Gallery</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-4" style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}>
              गॅलरी
            </p>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Moments captured from our adventures across the Sahyadris. Every picture tells a story of courage, friendship, and nature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all font-medium ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 pb-16">
        {filteredImages.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No images available in this category.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer break-inside-avoid"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-xl border border-border shadow-md">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white text-sm font-semibold">{image.title}</p>
                    <p className="text-white/70 text-xs">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox with Navigation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 text-white/80 text-sm z-10">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>

            {/* Previous */}
            {filteredImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            {filteredImages.length > 1 && (
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

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Want to Be Part of Our Next <span className="text-secondary">Adventure?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join us on our upcoming treks and create your own unforgettable memories in the Sahyadris.
          </p>
          <Link
            to="/sahyadri-treks"
            className="inline-block px-8 py-3 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all font-semibold shadow-md"
          >
            View Upcoming Treks
          </Link>
        </div>
      </section>
    </div>
  );
}
