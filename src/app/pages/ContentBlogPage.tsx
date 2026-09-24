import { Link, useParams } from 'react-router';
import { Calendar, Clock, User } from 'lucide-react';
import { useSiteContent } from '../data/siteContentStore';

export function ContentBlogPage() {
  const { blogPosts } = useSiteContent();
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-[#173449] py-20 text-center text-white"><div className="container mx-auto px-4"><p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Durgaraj journal</p><h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Blog & Guides</h1></div></section>
      <section className="container mx-auto px-4 py-16">
        {blogPosts.length === 0 ? <div className="max-w-2xl mx-auto text-center py-16 border border-dashed border-border rounded-2xl"><h2 className="text-2xl font-bold text-foreground mb-3">Stories coming soon</h2><p className="text-muted-foreground">The administrator has not published any blog posts yet.</p></div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{blogPosts.map((post) => <article key={post.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"><img src={post.image} alt={post.title} className="w-full h-52 object-cover" /><div className="p-6"><p className="text-xs uppercase tracking-wide text-secondary font-bold mb-3">{post.category}</p><h2 className="text-xl font-bold text-foreground mb-3">{post.title}</h2><p className="text-muted-foreground text-sm mb-5">{post.excerpt}</p><div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-5"><span className="inline-flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span><span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span><span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span></div><Link to={`/blog/${post.id}`} className="text-secondary font-bold">Read article</Link></div></article>)}</div>}
      </section>
    </div>
  );
}

export function ContentBlogDetailPage() {
  const { blogId } = useParams();
  const post = useSiteContent().blogPosts.find((item) => item.id === blogId);
  if (!post) return <div className="min-h-screen flex items-center justify-center text-center"><div><h1 className="text-3xl font-bold mb-4">Article not found</h1><Link to="/blog" className="text-secondary font-semibold">Back to blog</Link></div></div>;
  return <article className="min-h-screen bg-background"><div className="container mx-auto px-4 py-16 max-w-3xl"><p className="text-sm uppercase tracking-wide text-secondary font-bold mb-4">{post.category}</p><h1 className="text-4xl md:text-6xl font-bold text-foreground mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>{post.title}</h1><div className="flex flex-wrap gap-5 text-sm text-muted-foreground mb-8"><span>{post.author}</span><span>{post.date}</span><span>{post.readTime}</span></div>{post.image && <img src={post.image} alt={post.title} className="w-full max-h-[28rem] object-cover rounded-2xl mb-10" />}<p className="text-xl text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p><div className="text-lg text-foreground leading-relaxed whitespace-pre-line">{post.content}</div></div></article>;
}
