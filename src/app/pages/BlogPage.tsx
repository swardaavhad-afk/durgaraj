import { motion } from 'motion/react';
import { Link, useParams } from 'react-router';
import { Calendar, User, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import { Badge } from '../components/ui/badge';

export function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Blog"
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
              Trek Stories & <span className="text-white/90">Guides</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-4" style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}>
              ब्लॉग
            </p>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Insights, tips, and stories from the Sahyadris. Learn from our experiences and prepare for your next adventure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-white border-0">Featured</Badge>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="bg-primary/10 text-primary w-fit mb-4">{blogPosts[0].category}</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">{blogPosts[0].excerpt}</p>

                <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>

                <Link
                  to={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center gap-2 text-secondary hover:gap-4 transition-all font-semibold"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          Latest <span className="text-secondary">Articles</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all group shadow-md"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <Badge className="bg-primary/10 text-primary mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3 text-primary" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-primary" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <span className="text-secondary text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all font-semibold">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Want to Share Your Trek <span className="text-secondary">Story?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We'd love to hear about your adventure experiences. Get in touch with us to feature your story on our blog.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all font-semibold shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

// Blog Detail Page for individual posts
export function BlogDetailPage() {
  const { blogId } = useParams();
  const post = blogPosts.find((p) => p.id === blogId);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link
            to="/blog"
            className="px-8 py-3 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all font-semibold inline-block"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="bg-secondary text-white border-0 mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-xl">{post.excerpt}</p>
            <p className="mt-6">
              This is a detailed article about {post.title.toLowerCase()}. The content covers practical advice and insights from our experienced team at Durgaraj Adventures. 
              Whether you're a beginner or an experienced trekker, you'll find valuable information to enhance your adventures in the Sahyadris.
            </p>
            <p className="mt-4">
              Our team has over 25 years of experience organizing treks and camps across the Sahyadri mountain range. 
              We've compiled our best practices and recommendations here for fellow adventure enthusiasts.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/blog" className="inline-flex items-center gap-2 text-secondary hover:gap-3 transition-all font-semibold">
              <ArrowLeft className="w-5 h-5" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
