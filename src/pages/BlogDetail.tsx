import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import { blogs } from '../data/blogs';

export default function BlogDetail() {
  const { blogId } = useParams<{ blogId: string }>();
  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const relatedBlogs = blogs
    .filter(b => b.id !== blogId && b.category === blog.category)
    .slice(0, 2);

  return (
    <>
      <SEO
        title={blog.title}
        description={blog.excerpt}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-warm-gray hover:text-charcoal transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-gold bg-gold/10 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="flex items-center gap-1 text-warm-gray text-sm">
              <Calendar className="w-4 h-4" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1 text-warm-gray text-sm">
              <Clock className="w-4 h-4" />
              {blog.readTime}
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            {blog.title}
          </h1>
          <p className="text-warm-gray text-lg">{blog.excerpt}</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden card-shadow">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <article
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-warm-gray prose-p:leading-relaxed prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            
            {/* Author */}
            <div className="mt-12 pt-8 border-t border-charcoal/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-gold">
                    {blog.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-display font-semibold">{blog.author}</div>
                  <div className="text-warm-gray text-sm">Content Team at Primansh</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:sticky lg:top-32 lg:self-start space-y-8">
            <LeadForm
              title="Get Our Best Tips"
              subtitle="Subscribe for weekly insights delivered to your inbox."
              buttonText="Subscribe"
              variant="compact"
            />
            
            {relatedBlogs.length > 0 && (
              <div className="bg-off-white rounded-2xl p-6 card-border">
                <h3 className="font-display font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedBlogs.map((related) => (
                    <Link
                      key={related.id}
                      to={`/blog/${related.id}`}
                      className="group block"
                    >
                      <h4 className="font-medium text-sm group-hover:text-gold transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <span className="text-warm-gray text-xs">{related.readTime}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* More Articles */}
      {relatedBlogs.length > 0 && (
        <section className="py-20 lg:py-32 section-padding bg-charcoal">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-off-white">
              More from the Blog
            </h2>
            <Link
              to="/blog"
              className="text-gold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedBlogs.map((related) => (
              <Link
                key={related.id}
                to={`/blog/${related.id}`}
                className="group bg-off-white/5 rounded-2xl overflow-hidden border border-off-white/10 hover:border-gold/50 transition-colors"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-gold mb-2 block">
                    {related.category}
                  </span>
                  <h3 className="font-display font-semibold text-off-white mb-2 group-hover:text-gold transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-off-white/60 text-sm line-clamp-2">{related.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
