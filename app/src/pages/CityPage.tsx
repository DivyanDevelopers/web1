import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import { caseStudies } from '../data/caseStudies';

const cities: Record<string, { name: string; state: string; description: string }> = {
  kolkata: {
    name: 'Kolkata',
    state: 'West Bengal',
    description: 'Kolkata is home to a thriving community of chartered accountants serving diverse industries from manufacturing to IT. We help CA firms in Kolkata stand out in this competitive market.',
  },
  mumbai: {
    name: 'Mumbai',
    state: 'Maharashtra',
    description: 'As India\'s financial capital, Mumbai has one of the highest concentrations of CA firms. We help Mumbai-based firms attract high-value clients in this competitive landscape.',
  },
  delhi: {
    name: 'Delhi',
    state: 'Delhi NCR',
    description: 'Delhi NCR is a hub for CA firms serving startups, SMEs, and large corporations. We help Delhi-based firms build a digital presence that matches their expertise.',
  },
  bangalore: {
    name: 'Bangalore',
    state: 'Karnataka',
    description: 'Bangalore\'s thriving startup ecosystem creates unique opportunities for CA firms. We help Bangalore-based firms attract tech-savvy clients who value digital-first experiences.',
  },
};

const services = [
  'Custom Website Design for CA Firms',
  'Local SEO Optimization',
  'Google Business Profile Setup',
  'Content Marketing Strategy',
  'Lead Generation Systems',
  'Performance Analytics',
];

export default function CityPage() {
  const { cityName } = useParams<{ cityName: string }>();
  const city = cities[cityName || ''];

  if (!city) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO
        title={`Web Development Agency for CA in ${city.name}`}
        description={`Premium web design and digital marketing services for CA firms in ${city.name}, ${city.state}. Attract high-value clients with a professional online presence.`}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding bg-charcoal">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-gold mb-4">
            <MapPin className="w-4 h-4" />
            <span className="font-mono text-sm uppercase tracking-wider">{city.name}, {city.state}</span>
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-off-white mb-6">
            Web Development Agency for CA Firms in {city.name}
          </h1>
          <p className="text-off-white/70 text-lg lg:text-xl max-w-2xl">
            {city.description}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-32 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Services We Offer in {city.name}
            </h2>
            <p className="text-warm-gray mb-8">
              We provide end-to-end digital solutions designed specifically for CA firms in {city.name}. From website design to lead generation, we've got you covered.
            </p>
            <ul className="space-y-3 mb-8">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden card-shadow">
            <img
              src="/images/service-web.jpg"
              alt={`CA Firm Website Design in ${city.name}`}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 section-padding bg-off-white">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Why {city.name} CA Firms Choose Us
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto">
            We understand the unique challenges and opportunities of the {city.name} market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Local Market Knowledge',
              description: `We understand the ${city.name} business landscape and what local clients are looking for.`,
            },
            {
              title: 'Industry Expertise',
              description: 'We work exclusively with CA firms, so we understand your services and client expectations.',
            },
            {
              title: 'Proven Results',
              description: 'Our clients see an average 140% increase in qualified leads within 90 days.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-off-white rounded-2xl p-8 card-border card-shadow"
            >
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-warm-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-32 section-padding">
        <div className="mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Success Stories
          </h2>
          <p className="text-warm-gray max-w-2xl">
            See how we've helped CA firms across India transform their digital presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.slice(0, 3).map((caseStudy) => (
            <Link
              key={caseStudy.id}
              to={`/case-studies/${caseStudy.id}`}
              className="group bg-off-white rounded-3xl overflow-hidden card-border card-shadow hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {caseStudy.title}
                </h3>
                <p className="text-warm-gray text-sm line-clamp-2">{caseStudy.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 section-padding bg-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-off-white mb-6">
              Ready to Grow Your {city.name} Practice?
            </h2>
            <p className="text-off-white/70 mb-8">
              Book a free consultation and let's discuss how we can help your firm attract more high-value clients in {city.name}.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-off-white/80">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3 text-off-white/80">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:hello@primansh.in" className="hover:text-gold transition-colors">
                  hello@primansh.in
                </a>
              </div>
            </div>
          </div>
          <LeadForm
            title=""
            subtitle=""
            buttonText="Book My Free Consultation"
          />
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-20 lg:py-32 section-padding">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-4">
            We Also Serve Other Cities
          </h2>
          <p className="text-warm-gray">
            While we have a strong presence in {city.name}, we work with CA firms across India.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(cities)
            .filter(([key]) => key !== cityName)
            .map(([key, cityData]) => (
              <Link
                key={key}
                to={`/city/${key}`}
                className="px-6 py-3 bg-charcoal/5 rounded-full text-charcoal hover:bg-gold hover:text-white transition-colors"
              >
                {cityData.name}
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
