import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import { services } from '../data/services';

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO
        title={service.title}
        description={service.shortDescription}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding">
        <div className="max-w-4xl">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-warm-gray hover:text-charcoal transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-charcoal mb-6">
            {service.title}
          </h1>
          <p className="text-warm-gray text-lg lg:text-xl max-w-2xl">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="section-padding">
        <div className="rounded-3xl overflow-hidden card-shadow">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 lg:py-32 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-6">
              What's Included
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-6">
              Benefits
            </h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32 section-padding bg-charcoal">
        <div className="mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-off-white mb-4">
            Our Process
          </h2>
          <p className="text-off-white/70">
            A proven approach that delivers results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, index) => (
            <div key={index} className="bg-off-white/5 rounded-2xl p-6 border border-off-white/10">
              <span className="font-mono text-3xl font-bold text-gold mb-3 block">
                0{step.step}
              </span>
              <h3 className="font-display text-lg font-semibold text-off-white mb-2">
                {step.title}
              </h3>
              <p className="text-off-white/60 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA with Form */}
      <section className="py-20 lg:py-32 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Ready to get started?
            </h2>
            <p className="text-warm-gray mb-6">
              Fill out the form and we'll get back to you within 24 hours with a custom proposal for your {service.title.toLowerCase()} project.
            </p>
            <ul className="space-y-3">
              {[
                'Free initial consultation',
                'Custom proposal within 24 hours',
                'No commitment required',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm
            title=""
            subtitle=""
            buttonText="Get My Proposal"
          />
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 lg:py-32 section-padding bg-off-white">
        <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-8">
          Explore Other Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services
            .filter(s => s.id !== serviceId)
            .map((otherService) => (
              <Link
                key={otherService.id}
                to={`/services/${otherService.id}`}
                className="group bg-off-white rounded-2xl p-6 card-border hover:card-shadow transition-all"
              >
                <h3 className="font-display font-semibold mb-2 group-hover:text-gold transition-colors">
                  {otherService.title}
                </h3>
                <p className="text-warm-gray text-sm mb-4">{otherService.shortDescription}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
