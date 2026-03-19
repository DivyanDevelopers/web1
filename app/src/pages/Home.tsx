import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import { caseStudies } from '../data/caseStudies';
import { blogs } from '../data/blogs';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    label: 'STRATEGY',
    title: 'Positioning & Messaging',
    description: 'Clarify your ideal client and craft a message that earns trust in seconds.',
    image: '/images/pillar-strategy.jpg',
  },
  {
    label: 'DESIGN',
    title: 'Premium Web Experience',
    description: 'Editorial layouts, fast performance, and conversion paths that feel effortless.',
    image: '/images/pillar-design.jpg',
  },
  {
    label: 'GROWTH',
    title: 'Visibility & Leads',
    description: 'SEO, content, and paid landing pages that bring inquiries to your calendar.',
    image: '/images/pillar-growth.jpg',
  },
];

const outcomes = [
  {
    icon: Clock,
    title: 'Faster Trust',
    description: 'Your site answers the questions that usually take 3 emails.',
  },
  {
    icon: Users,
    title: 'Higher Intent',
    description: 'Visitors self-qualify through clear service pages.',
  },
  {
    icon: Award,
    title: 'More Referrals',
    description: 'A professional presence makes clients proud to share.',
  },
  {
    icon: TrendingUp,
    title: 'Repeatable Leads',
    description: 'Systems that keep working while you focus on compliance.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We map your services, differentiators, and ideal client profile.',
    image: '/images/process-discover.jpg',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Editorial layouts, clear navigation, and conversion paths.',
    image: '/images/process-design.jpg',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Fast, accessible, SEO-ready—content and technical setup.',
    image: '/images/process-build.jpg',
  },
  {
    number: '04',
    title: 'Grow',
    description: 'Content, landing pages, and ongoing optimization.',
    image: '/images/process-grow.jpg',
  },
];

const services = [
  {
    title: 'Web Design & UX',
    description: 'Editorial, fast, conversion-first.',
    image: '/images/service-web.jpg',
    href: '/services/web-design',
  },
  {
    title: 'SEO & Content',
    description: 'Rank for what your ideal client searches.',
    image: '/images/service-seo.jpg',
    href: '/services/seo-content',
  },
  {
    title: 'Landing Pages',
    description: 'Campaign-ready pages in days.',
    image: '/images/service-landing.jpg',
    href: '/services/landing-pages',
  },
  {
    title: 'Brand Systems',
    description: 'Type, color, and tone that feel premium.',
    image: '/images/service-brand.jpg',
    href: '/services/brand-systems',
  },
  {
    title: 'Analytics & CRO',
    description: 'Measure what matters; improve monthly.',
    image: '/images/service-analytics.jpg',
    href: '/services/analytics-cro',
  },
];

const testimonials = [
  {
    quote: "The site now does the selling for us. We've seen a 3x increase in qualified inquiries.",
    author: 'Rajesh Gupta',
    role: 'Managing Partner',
    firm: 'Gupta & Associates',
    image: '/images/testimonial-1.jpg',
  },
  {
    quote: "We went from 'just another CA' to the firm people recommend. Our brand perception completely changed.",
    author: 'Priya Mehta',
    role: 'Founder',
    firm: 'Mehta Partners',
    image: '/images/testimonial-2.jpg',
  },
  {
    quote: "Clear process, clean design, and leads we actually want. Best investment we've made.",
    author: 'Amit Sharma',
    role: 'Senior Partner',
    firm: 'Sharma Advisors',
    image: '/images/testimonial-3.jpg',
  },
];

const faqs = [
  {
    question: 'Do you work with small CA firms?',
    answer: 'We primarily work with mid-sized CA firms (5-50 partners) who are serious about growth. However, we do consider smaller firms with strong growth potential. Book a call to discuss your specific situation.',
  },
  {
    question: 'How long does a redesign take?',
    answer: 'A typical website redesign takes 6-8 weeks from kickoff to launch. This includes discovery, design, development, and testing phases. More complex projects may take longer.',
  },
  {
    question: 'Will we rank on Google?',
    answer: 'We implement SEO best practices from day one and have a strong track record of getting CA firms to page 1 for relevant keywords. However, SEO is a long-term game—expect 3-6 months for significant results.',
  },
  {
    question: 'Can we update content ourselves?',
    answer: 'Absolutely. We build all our sites on user-friendly content management systems. We also provide training and documentation so your team can make updates confidently.',
  },
  {
    question: 'What do you need from us?',
    answer: 'We need your time for discovery calls, feedback on designs, and content inputs. Beyond that, we handle everything—from strategy to launch and ongoing optimization.',
  },
  {
    question: 'Is there a maintenance plan?',
    answer: 'Yes, we offer monthly retainer plans that include hosting, security updates, performance monitoring, and continuous optimization. This ensures your site stays fast and secure.',
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const caseStudyRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        '.hero-portrait',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo(
        '.hero-content',
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.4 }
      );
      gsap.fromTo(
        '.hero-gold-frame',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.6 }
      );

      // Pillars section
      ScrollTrigger.create({
        trigger: pillarsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.pillar-card',
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Outcomes section
      ScrollTrigger.create({
        trigger: outcomesRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.outcome-card',
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Process section
      ScrollTrigger.create({
        trigger: processRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.process-card',
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Case study section
      ScrollTrigger.create({
        trigger: caseStudyRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.case-study-image',
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );
          gsap.fromTo(
            '.case-study-content',
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Services section
      ScrollTrigger.create({
        trigger: servicesRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.service-tile',
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Testimonials section
      ScrollTrigger.create({
        trigger: testimonialsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.testimonial-card',
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // FAQ section
      ScrollTrigger.create({
        trigger: faqRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.faq-item',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
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
        title="Premium Digital Agency for CA Firms in India"
        description="We help mid-sized CA firms attract high-value business clients by making their website visible and converting it into a consistent source of qualified inquiries."
      />

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen pt-20 relative overflow-hidden">
        <div className="section-padding py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-10rem)]">
            {/* Portrait Card */}
            <div className="relative">
              {/* Gold Frame */}
              <div className="hero-gold-frame absolute -left-4 -top-4 w-full h-full border-l-[6px] border-t-[6px] border-gold rounded-3xl z-0" />
              <div className="hero-portrait relative z-10 rounded-3xl overflow-hidden card-shadow">
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Professional CA"
                  className="w-full h-[400px] lg:h-[600px] object-cover"
                />
              </div>
            </div>

            {/* Content Card */}
            <div className="hero-content bg-off-white rounded-3xl p-8 lg:p-12 card-border card-shadow">
              <span className="label-mono mb-4 block">PREMIUM DIGITAL FOR CA FIRMS</span>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal mb-6">
                Your expertise deserves a website that{' '}
                <span className="text-gold">converts</span>.
              </h1>
              <p className="text-warm-gray text-lg mb-8 max-w-lg">
                We redesign digital presence for mid-sized CA firms—so you attract high-value clients, not random inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                  Book a Free Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/case-studies" className="btn-outline flex items-center justify-center gap-2">
                  See Our Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section ref={pillarsRef} className="py-20 lg:py-32 section-padding">
        <div className="mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mb-4">
            A system built for CA firms.
          </h2>
          <p className="text-warm-gray text-lg max-w-2xl">
            Strategy + design + growth—integrated from day one.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="pillar-card bg-off-white rounded-3xl overflow-hidden card-border card-shadow group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8">
                <span className="label-mono text-gold mb-2 block">{pillar.label}</span>
                <h3 className="font-display text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-warm-gray">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes Section */}
      <section ref={outcomesRef} className="py-20 lg:py-32 section-padding bg-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="label-mono text-gold mb-4 block">OUTCOMES</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-off-white mb-6">
              What changes in 90 days.
            </h2>
            <p className="text-off-white/70 text-lg mb-8">
              We measure by the quality of conversations—fewer cold inquiries, more retained clients.
            </p>
            <Link to="/case-studies" className="text-gold flex items-center gap-2 hover:gap-3 transition-all">
              See a sample report
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="outcome-card bg-off-white/5 rounded-2xl p-6 border border-off-white/10"
              >
                <outcome.icon className="w-8 h-8 text-gold mb-4" />
                <h3 className="font-display text-lg font-semibold text-off-white mb-2">
                  {outcome.title}
                </h3>
                <p className="text-off-white/60 text-sm">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 lg:py-32 section-padding">
        <div className="mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mb-4">
            How we work
          </h2>
          <p className="text-warm-gray text-lg max-w-2xl">
            A 4-step system designed for busy partners.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="process-card bg-off-white rounded-3xl overflow-hidden card-border card-shadow"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="font-mono text-3xl font-bold text-gold mb-2 block">
                  {step.number}
                </span>
                <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-warm-gray text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section ref={caseStudyRef} className="py-20 lg:py-32 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="case-study-image rounded-3xl overflow-hidden card-shadow">
            <img
              src={caseStudies[0].image}
              alt={caseStudies[0].title}
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
          <div className="case-study-content">
            <span className="label-mono text-gold mb-4 block">CASE STUDY</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              {caseStudies[0].title}
            </h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {caseStudies[0].metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-gold">
                    {metric.value}
                  </div>
                  <div className="text-warm-gray text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
            <p className="text-warm-gray mb-8">{caseStudies[0].fullContent}</p>
            <Link
              to={`/case-studies/${caseStudies[0].id}`}
              className="btn-primary inline-flex items-center gap-2"
            >
              Read Full Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Mosaic */}
      <section ref={servicesRef} className="py-20 lg:py-32 section-padding bg-off-white">
        <div className="mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mb-4">
            Services that scale with your firm.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className={`service-tile group relative rounded-3xl overflow-hidden card-shadow ${
                index === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <div className={`${index === 0 ? 'h-full min-h-[400px]' : 'h-64'}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-semibold text-off-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-off-white/70 text-sm">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 section-padding">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mb-4">
            Pricing that matches your stage.
          </h2>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto">
            No hidden fees. You own the site. Cancel anytime after launch.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Launch',
              price: '₹1.25L',
              description: 'One-page premium site + basic SEO',
              features: ['Single-page design', 'Mobile responsive', 'Basic SEO setup', 'Contact form', '2 weeks delivery'],
            },
            {
              name: 'Expand',
              price: '₹2.75L',
              description: 'Multi-page site + content + conversion tracking',
              features: ['Up to 10 pages', 'Advanced SEO', 'Content strategy', 'Analytics setup', '6 weeks delivery'],
              popular: true,
            },
            {
              name: 'Scale',
              price: '₹45K/mo',
              description: 'Ongoing optimization + landing pages + reporting',
              features: ['Everything in Expand', 'Monthly optimization', 'Landing pages', 'Priority support', 'Quarterly reviews'],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-off-white rounded-3xl p-8 card-border card-shadow ${
                plan.popular ? 'ring-2 ring-gold relative -translate-y-2' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-mono uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                {!plan.price.includes('/mo') && <span className="text-warm-gray">+ GST</span>}
              </div>
              <p className="text-warm-gray text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`w-full block text-center py-3 rounded-full font-medium transition-all ${
                  plan.popular
                    ? 'btn-primary'
                    : 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white'
                }`}
              >
                Get a Proposal
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-warm-gray mt-8">
          Not sure? <Link to="/contact" className="text-gold hover:underline">Start with a 15-minute audit—free.</Link>
        </p>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 lg:py-32 section-padding bg-charcoal">
        <div className="mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-off-white mb-4">
            What partners say.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-off-white/5 rounded-3xl p-8 border border-off-white/10"
            >
              <p className="text-off-white text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-display font-semibold text-off-white">
                    {testimonial.author}
                  </div>
                  <div className="text-off-white/60 text-sm">
                    {testimonial.role}, {testimonial.firm}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 lg:py-32 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Common questions.
            </h2>
            <p className="text-warm-gray">
              Can't find what you're looking for?{' '}
              <Link to="/contact" className="text-gold hover:underline">
                Reach out to us.
              </Link>
            </p>
          </div>
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-off-white rounded-2xl p-6 card-border"
              >
                <h3 className="font-display font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-warm-gray">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 lg:py-32 section-padding bg-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="label-mono text-gold mb-4 block">FREE AUDIT</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-off-white mb-6">
              Get a 15-point revenue leak audit.
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                'Where your site loses trust',
                'Quick wins for SEO + conversions',
                'A 90-day growth roadmap',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-off-white/80">
                  <Check className="w-5 h-5 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/report-thumbnail.jpg"
                alt="Sample Audit Report"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          <LeadForm
            title=""
            subtitle=""
            buttonText="Send My Audit"
          />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 lg:py-32 section-padding">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Insights for CA firms.
            </h2>
          </div>
          <Link to="/blog" className="hidden sm:flex items-center gap-2 text-gold hover:gap-3 transition-all">
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((blog, index) => (
            <Link
              key={index}
              to={`/blog/${blog.id}`}
              className="group bg-off-white rounded-3xl overflow-hidden card-border card-shadow hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
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
                  <span className="text-warm-gray text-xs">{blog.readTime}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-gold transition-colors">
                  {blog.title}
                </h3>
                <p className="text-warm-gray text-sm line-clamp-2">{blog.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link to="/blog" className="btn-outline inline-flex items-center gap-2">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 section-padding bg-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-off-white mb-6">
            Ready to become the firm clients remember?
          </h2>
          <p className="text-off-white/70 text-lg mb-8">
            Book a free audit. We'll show you exactly what to fix—and how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:hello@primansh.in"
              className="border border-off-white/30 text-off-white px-6 py-3 rounded-full font-medium hover:bg-off-white/10 transition-colors flex items-center justify-center gap-2"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
