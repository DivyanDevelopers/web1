import { Mail, Phone, MapPin, Clock, Linkedin, Twitter } from 'lucide-react';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Primansh. Book a free consultation or reach out with any questions."
      />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding bg-charcoal">
        <div className="max-w-4xl">
          <span className="label-mono text-gold mb-4 block">CONTACT</span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-off-white mb-6">
            Let's start a conversation.
          </h1>
          <p className="text-off-white/70 text-lg lg:text-xl max-w-2xl">
            Have a question or ready to get started? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-6">
              Get in Touch
            </h2>
            <p className="text-warm-gray mb-8">
              Fill out the form and we'll get back to you within 24 hours. Or reach out to us directly using the information below.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:hello@primansh.in"
                    className="text-warm-gray hover:text-gold transition-colors"
                  >
                    hello@primansh.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+919876543210"
                    className="text-warm-gray hover:text-gold transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Location</h3>
                  <p className="text-warm-gray">
                    Delhi NCR, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Business Hours</h3>
                  <p className="text-warm-gray">
                    Monday - Friday: 10:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-display font-semibold mb-4">Follow Us</h3>
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
              </div>
            </div>
          </div>

          {/* Form */}
          <LeadForm
            title="Send Us a Message"
            subtitle="Fill out the form below and we'll get back to you within 24 hours."
            buttonText="Send Message"
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-32 section-padding bg-charcoal">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-off-white mb-4">
            Serving CA Firms Across India
          </h2>
          <p className="text-off-white/70 max-w-2xl mx-auto">
            While we're based in Delhi NCR, we work with CA firms across India. Distance is never a barrier to great work.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            'Delhi NCR',
            'Mumbai',
            'Bangalore',
            'Chennai',
            'Hyderabad',
            'Pune',
            'Kolkata',
            'Ahmedabad',
          ].map((city, index) => (
            <div
              key={index}
              className="bg-off-white/5 rounded-xl p-4 text-center border border-off-white/10"
            >
              <span className="text-off-white font-medium">{city}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
