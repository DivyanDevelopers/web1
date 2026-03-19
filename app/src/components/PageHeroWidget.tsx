import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';
import LeadForm from './LeadForm';
import {
  Code2,
  TrendingUp,
  Newspaper,
  Users,
  MapPin,
  Shield,
  FileText,
  Award,
  Phone,
  BarChart3,
  Target,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  label: string;
  value: string;
  icon: React.ElementType;
}

interface PageConfig {
  title: string;
  subtitle: string;
  primaryIcon: React.ElementType;
  stats?: Stat[];
  ctaText?: string;
  ctaLink?: string;
  formTitle: string;
  formSubtitle: string;
  formButton: string;
  gradient: string;
}

const pageConfigs: Record<string, PageConfig> = {
  '/services': {
    title: 'Our Services',
    subtitle: 'Digital solutions designed for CA firms',
    primaryIcon: Code2,
    stats: [
      { label: 'Projects Live', value: '50+', icon: BarChart3 },
      { label: 'CA Firms Served', value: '30+', icon: Users },
      { label: 'Client NPS', value: '98%', icon: Award }
    ],
    ctaText: 'Explore Services',
    ctaLink: '/services',
    formTitle: 'Launch Your Project',
    formSubtitle: 'Free project roadmap included',
    formButton: 'Get Free Roadmap',
    gradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20'
  },
  '/services/:serviceId': {
    title: 'Service Deep Dive',
    subtitle: 'Technical breakdown and results',
    primaryIcon: Code2,
    formTitle: 'Ready to Implement?',
    formSubtitle: 'Custom proposal in 24hrs',
    formButton: 'Request Proposal',
    gradient: 'from-emerald-500/20 via-teal-500/20 to-blue-500/20'
  },
  '/case-studies': {
    title: 'Proven Results',
    subtitle: 'Real revenue growth for CA firms',
    primaryIcon: TrendingUp,
    stats: [
      { label: 'Avg Growth', value: '+240%', icon: TrendingUp },
      { label: 'Projects', value: '50+', icon: Target },
      { label: 'Retention', value: '100%', icon: Award }
    ],
    formTitle: 'Your Turn?',
    formSubtitle: "See what's possible for you",
    formButton: 'Analyze My Firm',
    gradient: 'from-emerald-500/20 via-green-500/20 to-teal-400/20'
  },
  '/case-studies/:caseId': {
    title: 'Success Story',
    subtitle: 'Detailed case analysis',
    primaryIcon: TrendingUp,
    formTitle: 'Inspired?',
    formSubtitle: "Let's replicate this",
    formButton: 'Strategy Session',
    gradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20'
  },
  '/blog': {
    title: 'Fresh Insights',
    subtitle: 'Growth strategies that work',
    primaryIcon: Newspaper,
    stats: [
      { label: 'Articles', value: '25+', icon: Newspaper },
      { label: 'Read Time', value: '5 min', icon: Clock },
      { label: 'Subscribers', value: '1K+', icon: Users }
    ],
    formTitle: 'Never Miss Out',
    formSubtitle: 'Weekly growth tips delivered',
    formButton: 'Start Reading',
    gradient: 'from-blue-500/20 via-indigo-500/20 to-violet-500/20'
  },
  '/blog/:blogId': {
    title: 'Deep Dive Article',
    subtitle: 'Implementation guide',
    primaryIcon: Newspaper,
    formTitle: 'Apply This Now?',
    formSubtitle: 'Personalized action plan',
    formButton: 'Get Action Plan',
    gradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20'
  },
  '/about': {
    title: 'The Team',
    subtitle: 'CA firm specialists',
    primaryIcon: Users,
    stats: [
      { label: 'Experience', value: '5+ years', icon: Award },
      { label: 'Team Size', value: '8 experts', icon: Users },
      { label: 'Firms Helped', value: '30+', icon: Target }
    ],
    formTitle: 'Work With Us',
    formSubtitle: 'Learn our methodology',
    formButton: 'Methodology Guide',
    gradient: 'from-slate-500/20 via-zinc-500/20 to-stone-400/20'
  },
  '/about-founder': {
    title: 'Founder Story',
    subtitle: 'Why we built Primansh',
    primaryIcon: Users,
    formTitle: 'Join the Mission',
    formSubtitle: 'Partnership opportunities',
    formButton: 'Partner Call',
    gradient: 'from-rose-500/20 via-pink-500/20 to-fuchsia-500/20'
  },
  '/contact': {
    title: 'Start Growing',
    subtitle: 'Free 30min strategy session',
    primaryIcon: Phone,
    formTitle: 'Book Now',
    formSubtitle: 'Response within 60 mins',
    formButton: 'Secure My Spot',
    gradient: 'from-cyan-500/20 via-sky-500/20 to-blue-500/20'
  },
  '/city/:cityName': {
    title: 'Local Expert',
    subtitle: 'Your city, our expertise',
    primaryIcon: MapPin,
    formTitle: 'Local Service',
    formSubtitle: 'Tailored for your market',
    formButton: 'Local Quote',
    gradient: 'from-lime-500/20 via-emerald-500/20 to-teal-500/20'
  },
  '/privacy-policy': {
    title: 'Privacy First',
    subtitle: 'Your data, our responsibility',
    primaryIcon: Shield,
    formTitle: 'Data Questions?',
    formSubtitle: 'Privacy experts available',
    formButton: 'Privacy Support',
    gradient: 'from-slate-400/20 via-gray-500/20 to-zinc-400/20'
  },
  '/terms-of-service': {
    title: 'Terms Overview',
    subtitle: 'Clear service agreement',
    primaryIcon: FileText,
    formTitle: 'Contract Questions?',
    formSubtitle: 'Legal team ready',
    formButton: 'Legal Support',
    gradient: 'from-stone-400/20 via-gray-500/20 to-slate-400/20'
  },
  '/sitemap': {
    title: 'Quick Navigation',
    subtitle: 'Everything in one place',
    primaryIcon: FileText,
    formTitle: 'Need Help?',
    formSubtitle: 'Navigation assistance',
    formButton: 'Get Guided',
    gradient: 'from-amber-400/20 via-yellow-500/20 to-orange-400/20'
  }
};

function matchPageConfig(pathname: string): PageConfig {
  for (const [key, config] of Object.entries(pageConfigs)) {
    if (key === pathname || (key.includes(':') && pathname.includes(key.split(':')[0]))) {
      return config;
    }
  }
  return pageConfigs['/services'];
}

export default function PageHeroWidget() {
  const location = useLocation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { pathname } = location;

  const config = matchPageConfig(pathname);
  const isRoot = pathname === '/';
  const hasStats = !!config.stats && config.stats.length > 0;

  useEffect(() => {
    if (isRoot) return;

    const ctx = gsap.context(() => {
      // Hero content animation (always safe)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo('.hero-content', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
        }
      });

      // Stats animation - only if stats exist
      if (hasStats) {
        gsap.fromTo('.stat-item', 
          { scale: 0.8, opacity: 0, y: 20 }, 
          { scale: 1, opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.3, ease: 'back.out(1.7)' }
        );
      }

      // Floating icons always exist
      gsap.to('.floating-icon', {
        y: -10,
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
        stagger: { amount: 5 }
      });
    });
    return () => ctx.revert();
  }, [hasStats, isRoot]);

  if (isRoot) return null;

  return (
    <section ref={sectionRef} className="relative pt-32 pb-24 overflow-hidden">
  <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-50 animate-pulse-slow`} />

      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent" />
      
      <div className="absolute top-10 left-10 w-20 h-20">
        <Sparkles className="floating-icon w-8 h-8 text-gold/30 absolute animate-ping" style={{ top: 0, left: 8 }} />
        <Sparkles className="floating-icon w-6 h-6 text-gold/20 absolute animate-ping" style={{ top: 20, right: 4, animationDelay: '1s' }} />
      </div>

      <div className="relative section-padding z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="hero-content space-y-8 lg:order-1">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse" />
              <span className="label-mono text-gold/90 uppercase tracking-wider font-mono text-sm">
                {pathname.split('/')[1]?.replace('-', ' ').toUpperCase() || 'EXPERIENCE'}
              </span>
            </div>

            <div className="space-y-4">
              {config.primaryIcon && <config.primaryIcon className="w-20 h-20 lg:w-24 lg:h-24 text-gold/80 animate-float-slow" />}
              <h1 className="font-display text-4xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-off-white to-gray-200 bg-clip-text text-transparent leading-tight">
                {config.title}
              </h1>
              <p className="text-xl lg:text-2xl text-off-white/85 max-w-lg bg-gradient-to-r from-white/50 to-transparent bg-clip-text">
                {config.subtitle}
              </p>
            </div>

            {config.stats && (
              <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {config.stats.map((stat, idx) => (
                  <div 
                    key={idx}
                    className="stat-item group relative p-6 lg:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <stat.icon className="w-8 h-8 text-gold/80 mb-2" />
                    <div className="text-3xl lg:text-4xl font-black text-gold mt-3 mb-1 bg-gradient-to-r from-gold to-amber-500 bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="text-off-white/70 font-medium group-hover:text-off-white transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {config.ctaText && (
              <Link
                to={config.ctaLink || '#'}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/20 text-lg font-semibold text-off-white transition-all duration-500 overflow-hidden"
              >
                <span>{config.ctaText}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent -skew-x-12 transform -translate-x-[120%] group-hover:translate-x-[0%] transition-transform duration-1000" />
              </Link>
            )}
          </div>

          <div className="hero-content lg:order-2 lg:max-w-md lg:-mr-16 lg:translate-x-8">
            <div className="bg-white/5 backdrop-blur-3xl rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl">
              <LeadForm
                variant="compact"
                title={config.formTitle}
                subtitle={config.formSubtitle}
                buttonText={config.formButton}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

