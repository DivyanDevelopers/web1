import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudyDetail() {
  const { caseId } = useParams<{ caseId: string }>();
  const caseStudy = caseStudies.find(c => c.id === caseId);

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  const otherCases = caseStudies.filter(c => c.id !== caseId);

  return (
    <>
      <SEO
        title={caseStudy.title}
        description={caseStudy.description}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding">
        <div className="max-w-4xl">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-warm-gray hover:text-charcoal transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
          <span className="label-mono text-gold mb-4 block">{caseStudy.industry}</span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-charcoal mb-6">
            {caseStudy.title}
          </h1>
          <p className="text-warm-gray text-lg lg:text-xl max-w-2xl">
            {caseStudy.description}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="section-padding">
        <div className="rounded-3xl overflow-hidden card-shadow">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-[400px] lg:h-[600px] object-cover"
          />
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 section-padding">
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {caseStudy.metrics.map((metric, index) => (
            <div key={index} className="text-center p-8 bg-off-white rounded-3xl card-border">
              <TrendingUp className="w-8 h-8 text-gold mx-auto mb-4" />
              <div className="font-display text-4xl lg:text-5xl font-bold text-gold mb-2">
                {metric.value}
              </div>
              <div className="text-warm-gray">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="py-20 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                The Challenge
              </h2>
              <p className="text-warm-gray leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                Our Solution
              </h2>
              <p className="text-warm-gray leading-relaxed">{caseStudy.solution}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                The Results
              </h2>
              <p className="text-warm-gray leading-relaxed">{caseStudy.results}</p>
            </div>
          </div>
          <div className="lg:sticky lg:top-32 lg:self-start">
            <LeadForm
              title="Want similar results?"
              subtitle="Get a free audit of your website."
              buttonText="Get My Audit"
            />
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="py-20 lg:py-32 section-padding bg-charcoal">
        <h2 className="font-display text-2xl lg:text-3xl font-bold text-off-white mb-8">
          More Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherCases.map((otherCase) => (
            <Link
              key={otherCase.id}
              to={`/case-studies/${otherCase.id}`}
              className="group bg-off-white/5 rounded-2xl overflow-hidden border border-off-white/10 hover:border-gold/50 transition-colors"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={otherCase.image}
                  alt={otherCase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-off-white mb-2 group-hover:text-gold transition-colors">
                  {otherCase.title}
                </h3>
                <p className="text-off-white/60 text-sm line-clamp-2">{otherCase.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
