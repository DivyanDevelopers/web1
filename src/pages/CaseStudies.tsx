import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import { caseStudies, industries } from '../data/caseStudies';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [previewCase, setPreviewCase] = useState<typeof caseStudies[0] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredCases = selectedIndustry === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.industry === selectedIndustry);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.case-card',
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
        title="Case Studies"
        description="See how we've helped CA firms transform their digital presence and attract high-value clients."
      />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding bg-charcoal">
        <div className="max-w-4xl">
          <span className="label-mono text-gold mb-4 block">CASE STUDIES</span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-off-white mb-6">
            Real results for real firms.
          </h1>
          <p className="text-off-white/70 text-lg lg:text-xl max-w-2xl">
            See how we've helped CA firms across India transform their digital presence and attract high-value clients.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 section-padding border-b border-charcoal/10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm text-warm-gray mr-2">Filter by industry:</span>
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedIndustry === industry
                  ? 'bg-gold text-white'
                  : 'bg-charcoal/5 text-charcoal hover:bg-charcoal/10'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={sectionRef} className="py-20 lg:py-32 section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="case-card group bg-off-white rounded-3xl overflow-hidden card-border card-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => setPreviewCase(caseStudy)}
                    className="bg-white text-charcoal px-6 py-3 rounded-full font-medium hover:bg-gold hover:text-white transition-colors"
                  >
                    Preview
                  </button>
                </div>
                <span className="absolute top-4 left-4 bg-gold text-white text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full">
                  {caseStudy.industry}
                </span>
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                  {caseStudy.title}
                </h2>
                <p className="text-warm-gray text-sm mb-4 line-clamp-2">
                  {caseStudy.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    {caseStudy.metrics.slice(0, 2).map((metric, index) => (
                      <div key={index}>
                        <div className="font-display text-lg font-bold text-gold">
                          {metric.value}
                        </div>
                        <div className="text-warm-gray text-xs">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/case-studies/${caseStudy.id}`}
                    className="text-gold hover:underline text-sm flex items-center gap-1"
                  >
                    View Full
                    <ArrowRight className="w-3 h-3" />
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
            Ready to be our next success story?
          </h2>
          <p className="text-off-white/70 text-lg mb-8">
            Book a free audit and let's discuss how we can help your firm achieve similar results.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Book Your Free Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Preview Dialog */}
      <Dialog open={!!previewCase} onOpenChange={() => setPreviewCase(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">{previewCase?.title}</DialogTitle>
          </DialogHeader>
          {previewCase && (
            <div className="space-y-6">
              <img
                src={previewCase.image}
                alt={previewCase.title}
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="grid grid-cols-3 gap-4">
                {previewCase.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-off-white rounded-xl">
                    <div className="font-display text-2xl font-bold text-gold">
                      {metric.value}
                    </div>
                    <div className="text-warm-gray text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-display font-semibold mb-2">The Challenge</h3>
                <p className="text-warm-gray">{previewCase.challenge}</p>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-2">Our Solution</h3>
                <p className="text-warm-gray">{previewCase.solution}</p>
              </div>
              <Link
                to={`/case-studies/${previewCase.id}`}
                className="btn-primary w-full flex items-center justify-center gap-2"
                onClick={() => setPreviewCase(null)}
              >
                Read Full Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
