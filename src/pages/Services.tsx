import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import { services } from '../data/services';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.service-card',
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
        title="Our Services"
        description="Premium digital services for CA firms: Web Design, SEO, Landing Pages, Brand Systems, and Analytics."
      />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding bg-charcoal">
        <div className="max-w-4xl">
          <span className="label-mono text-gold mb-4 block">SERVICES</span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-off-white mb-6">
            Everything your firm needs to grow online.
          </h1>
          <p className="text-off-white/70 text-lg lg:text-xl max-w-2xl">
            From strategy to execution, we provide end-to-end digital solutions designed specifically for CA firms.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="py-20 lg:py-32 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card bg-off-white rounded-3xl overflow-hidden card-border card-shadow ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`grid ${index === 0 ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
                <div className={`${index === 0 ? 'h-64 lg:h-auto' : 'h-56'} overflow-hidden`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                    {service.title}
                  </h2>
                  <p className="text-warm-gray mb-6">{service.fullDescription}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.slice(0, 4).map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-gold flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 section-padding bg-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-off-white mb-6">
            Not sure what you need?
          </h2>
          <p className="text-off-white/70 text-lg mb-8">
            Book a free 15-minute consultation. We'll analyze your current situation and recommend the right services for your goals.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Book a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
