import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const sitemapLinks = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'About Founder', href: '/about-founder' },
  ],
  services: [
    { label: 'All Services', href: '/services' },
    { label: 'Web Design & UX', href: '/services/web-design' },
    { label: 'SEO & Content', href: '/services/seo-content' },
    { label: 'Landing Pages', href: '/services/landing-pages' },
    { label: 'Brand Systems', href: '/services/brand-systems' },
    { label: 'Analytics & CRO', href: '/services/analytics-cro' },
  ],
  resources: [
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
  cities: [
    { label: 'Web Development for CA in Kolkata', href: '/city/kolkata' },
    { label: 'Web Development for CA in Mumbai', href: '/city/mumbai' },
    { label: 'Web Development for CA in Delhi', href: '/city/delhi' },
    { label: 'Web Development for CA in Bangalore', href: '/city/bangalore' },
  ],
};

export default function Sitemap() {
  return (
    <>
      <SEO
        title="Sitemap"
        description="Complete sitemap of Primansh website. Find all pages and resources."
      />

      <section className="pt-32 pb-20 section-padding min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-12">
            Sitemap
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Main Pages */}
            <div>
              <h2 className="font-display text-xl font-semibold mb-4">Main Pages</h2>
              <ul className="space-y-2">
                {sitemapLinks.main.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-warm-gray hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="font-display text-xl font-semibold mb-4">Services</h2>
              <ul className="space-y-2">
                {sitemapLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-warm-gray hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h2 className="font-display text-xl font-semibold mb-4">Resources</h2>
              <ul className="space-y-2">
                {sitemapLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-warm-gray hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="font-display text-xl font-semibold mb-4">Legal</h2>
              <ul className="space-y-2">
                {sitemapLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-warm-gray hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* City Pages */}
            <div className="md:col-span-2">
              <h2 className="font-display text-xl font-semibold mb-4">City Pages</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sitemapLinks.cities.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-warm-gray hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
