import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Linkedin, Twitter, Mail } from 'lucide-react';
import SEO from '../components/SEO';

export default function AboutFounder() {
  return (
    <>
      <SEO
        title="About the Founder"
        description="Meet the founder of Primansh and learn about our mission to help CA firms succeed digitally."
      />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding">
        <div className="max-w-4xl">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-warm-gray hover:text-charcoal transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>
          <span className="label-mono text-gold mb-4 block">FOUNDER</span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-charcoal mb-6">
            Building digital success for CA firms.
          </h1>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden card-shadow">
            <img
              src="/images/founder.jpg"
              alt="Founder"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Rohan Sharma
            </h2>
            <p className="text-gold font-medium mb-6">Founder & CEO, Primansh</p>
            
            <div className="space-y-4 text-warm-gray mb-8">
              <p>
                After spending over a decade in digital marketing, working with businesses across various industries, I noticed a gap. Mid-sized CA firms in India were being underserved by digital agencies. They were getting generic websites, cookie-cutter strategies, and advice from people who didn't understand their business.
              </p>
              <p>
                That's why I started Primansh. I wanted to create an agency that truly understands how CA firms operate, how they win clients, and what they need to succeed online.
              </p>
              <p>
                Our approach is simple: we study what works for successful CA firms, and we build digital systems that replicate and scale that success. No fluff, no jargon—just results.
              </p>
              <p>
                Today, I'm proud to say we've helped over 50 CA firms transform their digital presence and attract the high-value clients they deserve. And we're just getting started.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-charcoal/5 rounded-xl flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-charcoal/5 rounded-xl flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:rohan@primansh.in"
                className="w-12 h-12 bg-charcoal/5 rounded-xl flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-32 section-padding bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-off-white mb-8">
            Our Philosophy
          </h2>
          <blockquote className="text-2xl lg:text-3xl text-off-white/90 italic mb-8">
            "Every CA firm has expertise that deserves to be seen. Our job is to make sure the right clients find you at the right time."
          </blockquote>
          <div className="text-gold font-display font-semibold">— Rohan Sharma</div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 lg:py-32 section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-12 text-center">
            The Primansh Journey
          </h2>
          <div className="space-y-12">
            {[
              {
                year: '2021',
                title: 'The Beginning',
                description: 'Primansh was founded with a simple mission: help CA firms succeed online.',
              },
              {
                year: '2022',
                title: 'First 25 Clients',
                description: 'We helped our first 25 CA firms transform their digital presence.',
              },
              {
                year: '2023',
                title: 'Expanding the Team',
                description: 'We grew our team to better serve the growing demand from CA firms.',
              },
              {
                year: '2024',
                title: '50+ Firms Served',
                description: 'We crossed the milestone of 50 CA firms served across India.',
              },
              {
                year: '2025',
                title: 'The Future',
                description: "We're expanding our services and reaching more firms than ever before.",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0 w-24">
                  <span className="font-mono text-xl font-bold text-gold">{milestone.year}</span>
                </div>
                <div className="pb-12 border-l-2 border-charcoal/10 pl-8 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gold rounded-full" />
                  <h3 className="font-display text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-warm-gray">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 section-padding bg-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-off-white mb-6">
            Want to work with us?
          </h2>
          <p className="text-off-white/70 text-lg mb-8">
            Let's discuss how we can help your firm attract more high-value clients.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
