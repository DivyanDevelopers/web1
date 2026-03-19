import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Web Design', href: '/services/web-design' },
    { label: 'SEO & Content', href: '/services/seo-content' },
    { label: 'Landing Pages', href: '/services/landing-pages' },
    { label: 'Brand Systems', href: '/services/brand-systems' },
    { label: 'Analytics & CRO', href: '/services/analytics-cro' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Sitemap', href: '/sitemap' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-off-white">
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-bold">Primansh</span>
            </Link>
            <p className="text-off-white/70 mb-6 max-w-sm">
              Premium digital presence for CA firms. We help mid-sized firms attract high-value clients through strategic web design and digital marketing.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@primansh.in"
                className="w-10 h-10 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-off-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-off-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="font-display font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-off-white/70">
                  Delhi NCR, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-off-white/70 hover:text-gold transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:hello@primansh.in"
                  className="text-off-white/70 hover:text-gold transition-colors"
                >
                  hello@primansh.in
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-off-white/5 rounded-2xl">
              <p className="text-sm text-off-white/60 mb-2">Business Hours</p>
              <p className="text-off-white/80">Mon - Fri: 10:00 AM - 6:00 PM IST</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-off-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-off-white/50 text-sm">
            © {new Date().getFullYear()} Primansh. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-off-white/50 hover:text-off-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
