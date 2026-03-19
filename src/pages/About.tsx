import { Link } from 'react-router-dom';
import { ArrowRight, Check, Target, Users, Lightbulb, Award } from 'lucide-react';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'We approach every project with the same attention to detail that you bring to your clients\' financials.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We don\'t just deliver projects—we build long-term relationships with firms committed to growth.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of digital trends so you can focus on what you do best—serving your clients.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Good enough isn\'t good enough. We strive for excellence in every pixel and every line of code.',
  },
];

const stats = [
  { value: '50+', label: 'CA Firms Served' },
  { value: '140%', label: 'Avg. Lead Increase' },
  { value: '4.9/5', label: 'Client Rating' },
  { value: '3+', label: 'Years Experience' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Primansh is a premium digital agency dedicated to helping mid-sized CA firms in India attract high-value clients."
      />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding bg-charcoal">
        <div className="max-w-4xl">
          <span className="label-mono text-gold mb-4 block">ABOUT US</span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-off-white mb-6">
            We understand how CA firms get clients.
          </h1>
          <p className="text-off-white/70 text-lg lg:text-xl max-w-2xl">
            And we build digital systems that replicate and scale that process online.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-32 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-warm-gray">
              <p>
                Primansh was born from a simple observation: mid-sized CA firms in India were being underserved by digital agencies. Generic websites, cookie-cutter strategies, and a lack of understanding of how CA firms actually win clients.
              </p>
              <p>
                We set out to change that. Our team combines deep expertise in digital marketing with a genuine understanding of the accounting profession. We've studied how successful CA firms attract and retain clients—and we've built systems that replicate that success online.
              </p>
              <p>
                Today, we work exclusively with mid-sized CA firms who are serious about growth. Firms that understand the value of a premium digital presence and are ready to invest in it.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden card-shadow">
            <img
              src="/images/case-study-office.jpg"
              alt="Primansh Team"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 section-padding bg-charcoal">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl lg:text-5xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-off-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 section-padding">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Our Values
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto">
            The principles that guide everything we do.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-off-white rounded-2xl p-8 card-border card-shadow"
            >
              <value.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-warm-gray text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why CA Firms */}
      <section className="py-20 lg:py-32 section-padding bg-off-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/images/pillar-growth.jpg"
              alt="CA Firm Meeting"
              className="rounded-3xl card-shadow w-full h-[400px] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Why CA Firms?
            </h2>
            <p className="text-warm-gray mb-6">
              We chose to focus on CA firms because we believe they deserve better. Your work is complex, your clients are discerning, and your digital presence should reflect that.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'We understand the regulatory environment you operate in',
                'We know how your clients make decisions',
                'We speak your language—no need to explain basic concepts',
                'We\'ve seen what works and what doesn\'t in your industry',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about-founder"
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
            >
              Meet Our Founder
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 section-padding bg-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-off-white mb-4">
              Ready to work together?
            </h2>
            <p className="text-off-white/70 mb-6">
              Let's discuss how we can help your firm attract more high-value clients.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Free 15-minute consultation',
                'No obligation or pressure',
                'Honest assessment of your current situation',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-off-white/80">
                  <Check className="w-5 h-5 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm
            title=""
            subtitle=""
            buttonText="Book My Consultation"
          />
        </div>
      </section>
    </>
  );
}
