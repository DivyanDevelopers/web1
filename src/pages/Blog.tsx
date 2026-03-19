import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import { blogs, blogCategories } from '../data/blogs';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.blog-card',
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
          );
        },
        once: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Blog"
        description="Insights, tips, and strategies for CA firms looking to grow their digital presence and attract high-value clients."
      />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding bg-charcoal">
        <div className="max-w-4xl">
          <span className="label-mono text-gold mb-4 block">BLOG</span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-off-white mb-6">
            Insights for CA firms.
          </h1>
          <p className="text-off-white/70 text-lg lg:text-xl max-w-2xl">
            Practical advice on web design, SEO, and digital marketing tailored for chartered accountants.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 section-padding border-b border-charcoal/10">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-gray" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-off-white border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
            />
          </div>
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gold text-white'
                    : 'bg-charcoal/5 text-charcoal hover:bg-charcoal/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section ref={sectionRef} className="py-20 lg:py-32 section-padding">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="blog-card group bg-off-white rounded-3xl overflow-hidden card-border card-shadow hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-gold">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1 text-warm-gray text-xs">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-semibold mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-warm-gray text-sm line-clamp-3">{blog.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-warm-gray text-lg">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 text-gold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 section-padding bg-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-off-white mb-6">
            Want personalized advice?
          </h2>
          <p className="text-off-white/70 text-lg mb-8">
            Book a free consultation and let's discuss your firm's specific challenges and goals.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Book a Free Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
