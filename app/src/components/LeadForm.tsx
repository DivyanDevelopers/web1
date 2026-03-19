import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface LeadFormProps {
  variant?: 'default' | 'compact' | 'inline';
  title?: string;
  subtitle?: string;
  buttonText?: string;
  showWebsite?: boolean;
}

export default function LeadForm({
  variant = 'default',
  title = "Get Your Free Audit",
  subtitle = "We'll analyze your website and show you exactly what to fix.",
  buttonText = "Send My Audit",
  showWebsite = true,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    email: '',
    website: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-gold" />
        </div>
        <h3 className="font-display text-xl font-semibold mb-2">Thank You!</h3>
        <p className="text-warm-gray">
          We've received your request. Our team will analyze your website and send your audit within 24-48 hours.
        </p>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-off-white border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-off-white border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              {buttonText}
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-xs text-warm-gray text-center">
          We respect your time. No spam. Unsubscribe anytime.
        </p>
      </form>
    );
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="flex-1 px-5 py-3 rounded-full bg-off-white border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
        >
          {isSubmitting ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              {buttonText}
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    );
  }

  return (
    <div className="bg-off-white rounded-3xl p-8 lg:p-10 card-shadow">
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h3 className="font-display text-2xl font-semibold mb-2">{title}</h3>}
          {subtitle && <p className="text-warm-gray">{subtitle}</p>}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Firm Name</label>
            <input
              type="text"
              name="firm"
              placeholder="Your Firm"
              value={formData.firm}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@firm.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
            />
          </div>
        </div>
        {showWebsite && (
          <div>
            <label className="block text-sm font-medium mb-2">Website (Optional)</label>
            <input
              type="url"
              name="website"
              placeholder="https://yourfirm.com"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
            />
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center gap-2 mt-6"
        >
          {isSubmitting ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              {buttonText}
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-xs text-warm-gray text-center">
          We respect your time. No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
