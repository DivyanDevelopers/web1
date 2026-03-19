export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
}

export const services: Service[] = [
  {
    id: "web-design",
    title: "Web Design & UX",
    shortDescription: "Editorial, fast, conversion-first websites that reflect your firm's expertise.",
    fullDescription: "Your website is your digital office. We design premium web experiences that communicate trust, professionalism, and expertise—converting visitors into qualified leads.",
    image: "/images/service-web.jpg",
    features: [
      "Custom design tailored to your brand",
      "Mobile-responsive development",
      "Fast loading speeds (under 2 seconds)",
      "Conversion-optimized layouts",
      "Accessibility compliance",
      "Content management system",
    ],
    benefits: [
      "Make a premium first impression",
      "Convert more visitors into leads",
      "Reduce bounce rates significantly",
      "Rank higher in search results",
    ],
    process: [
      { step: 1, title: "Discovery", description: "We understand your firm, audience, and goals." },
      { step: 2, title: "Design", description: "We create wireframes and visual designs for approval." },
      { step: 3, title: "Development", description: "We build your site with clean, optimized code." },
      { step: 4, title: "Launch", description: "We deploy, test, and optimize for performance." },
    ],
  },
  {
    id: "seo-content",
    title: "SEO & Content",
    shortDescription: "Rank for what your ideal client searches and establish thought leadership.",
    fullDescription: "We help CA firms rank for the search terms that matter. Our SEO and content strategies attract qualified leads who are actively looking for your services.",
    image: "/images/service-seo.jpg",
    features: [
      "Keyword research and strategy",
      "On-page SEO optimization",
      "Technical SEO audits",
      "Content strategy and creation",
      "Local SEO for your city",
      "Monthly performance reports",
    ],
    benefits: [
      "Appear on page 1 for key terms",
      "Attract organic, qualified traffic",
      "Build long-term visibility",
      "Establish industry authority",
    ],
    process: [
      { step: 1, title: "Audit", description: "We analyze your current SEO performance." },
      { step: 2, title: "Strategy", description: "We develop a keyword and content plan." },
      { step: 3, title: "Optimization", description: "We implement on-page and technical SEO." },
      { step: 4, title: "Growth", description: "We create content and build authority." },
    ],
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    shortDescription: "Campaign-ready pages designed to convert specific audiences.",
    fullDescription: "Whether you're running ads, email campaigns, or webinars, our landing pages are designed to convert specific audience segments into leads.",
    image: "/images/service-landing.jpg",
    features: [
      "High-converting page design",
      "A/B testing capabilities",
      "Form optimization",
      "Thank you pages",
      "Integration with CRM tools",
      "Fast turnaround times",
    ],
    benefits: [
      "Maximize campaign ROI",
      "Test and optimize messaging",
      "Capture more leads",
      "Track conversion metrics",
    ],
    process: [
      { step: 1, title: "Brief", description: "We understand your campaign goals." },
      { step: 2, title: "Design", description: "We create conversion-focused layouts." },
      { step: 3, title: "Build", description: "We develop and integrate the page." },
      { step: 4, title: "Optimize", description: "We test and improve performance." },
    ],
  },
  {
    id: "brand-systems",
    title: "Brand Systems",
    shortDescription: "Cohesive visual identity that communicates premium positioning.",
    fullDescription: "Your brand is more than a logo. We create comprehensive brand systems that communicate your firm's values, expertise, and premium positioning.",
    image: "/images/service-brand.jpg",
    features: [
      "Logo design and refinement",
      "Color palette development",
      "Typography selection",
      "Brand guidelines document",
      "Marketing collateral design",
      "Brand messaging framework",
    ],
    benefits: [
      "Stand out from competitors",
      "Build brand recognition",
      "Communicate premium value",
      "Ensure consistency everywhere",
    ],
    process: [
      { step: 1, title: "Research", description: "We analyze your market and positioning." },
      { step: 2, title: "Concept", description: "We develop brand direction and concepts." },
      { step: 3, title: "Design", description: "We create visual identity elements." },
      { step: 4, title: "Document", description: "We compile comprehensive brand guidelines." },
    ],
  },
  {
    id: "analytics-cro",
    title: "Analytics & CRO",
    shortDescription: "Measure what matters and continuously improve performance.",
    fullDescription: "Data-driven decisions lead to better results. We set up comprehensive analytics and continuously optimize your site for higher conversions.",
    image: "/images/service-analytics.jpg",
    features: [
      "Google Analytics 4 setup",
      "Conversion tracking",
      "Heatmap and session recording",
      "A/B testing framework",
      "Monthly performance reports",
      "Actionable recommendations",
    ],
    benefits: [
      "Understand visitor behavior",
      "Identify improvement opportunities",
      "Make data-driven decisions",
      "Continuously increase conversions",
    ],
    process: [
      { step: 1, title: "Setup", description: "We implement tracking and analytics." },
      { step: 2, title: "Analyze", description: "We review data and identify issues." },
      { step: 3, title: "Test", description: "We run experiments to improve performance." },
      { step: 4, title: "Optimize", description: "We implement winning variations." },
    ],
  },
];
