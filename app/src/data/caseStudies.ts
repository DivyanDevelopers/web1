export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  industry: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  fullContent: string;
  challenge: string;
  solution: string;
  results: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "gupta-associates",
    title: "How Gupta & Associates Increased Qualified Leads by 140%",
    description: "A complete digital transformation for a 12-partner CA firm in Delhi NCR.",
    industry: "Accounting",
    image: "/images/case-study-1.jpg",
    metrics: [
      { label: "Qualified Inquiries", value: "+140%" },
      { label: "Time Saved", value: "-35%" },
      { label: "Project Value", value: "3.2×" },
    ],
    fullContent: "Gupta & Associates, a well-established CA firm with 12 partners, was struggling to attract high-value clients despite their excellent track record. Their website was outdated, not mobile-friendly, and failed to communicate their expertise effectively.",
    challenge: "The firm's website was built in 2015 and had not been updated since. It was not mobile-responsive, had poor loading speeds, and lacked clear service pages. The partners were spending too much time explaining basic services to unqualified leads.",
    solution: "We completely redesigned their website with a focus on user experience and conversion optimization. We created dedicated service pages for each of their offerings, implemented a lead qualification system, and optimized the site for local SEO.",
    results: "Within 90 days of launch, the firm saw a 140% increase in qualified inquiries, reduced time spent on unqualified leads by 35%, and increased their average project value by 3.2×. The partners could now focus on high-value advisory work instead of explaining basic services."
  },
  {
    id: "mehta-partners",
    title: "Mehta & Partners: From Invisible to Industry Leader",
    description: "Building a premium digital presence for a mid-sized audit firm in Mumbai.",
    industry: "Audit",
    image: "/images/case-study-2.jpg",
    metrics: [
      { label: "Organic Traffic", value: "+280%" },
      { label: "Page 1 Rankings", value: "15" },
      { label: "Client Retention", value: "95%" },
    ],
    fullContent: "Mehta & Partners, an audit firm based in Mumbai, was virtually invisible online despite having a strong reputation in the local business community. They needed a digital strategy that would match their offline credibility.",
    challenge: "The firm had no online presence beyond a basic listing. Potential clients searching for audit services in Mumbai couldn't find them. They were losing business to competitors with stronger digital footprints.",
    solution: "We developed a comprehensive digital strategy including a new website, content marketing plan, and SEO optimization. We created thought leadership content showcasing their expertise and implemented local SEO tactics to improve visibility in Mumbai.",
    results: "The firm now ranks on page 1 for 15 key search terms related to audit services in Mumbai. Organic traffic increased by 280%, and they've maintained a 95% client retention rate since the digital transformation."
  },
  {
    id: "sharma-advisors",
    title: "Sharma Advisors: Scaling Advisory Services Through Digital",
    description: "Helping a boutique tax advisory firm expand their client base nationally.",
    industry: "Tax Advisory",
    image: "/images/case-study-3.jpg",
    metrics: [
      { label: "New Clients", value: "+75%" },
      { label: "Revenue Growth", value: "+120%" },
      { label: "Referral Rate", value: "+45%" },
    ],
    fullContent: "Sharma Advisors, a boutique tax advisory firm, wanted to expand beyond their local market and attract clients from across India. They needed a digital strategy that would establish them as thought leaders in tax advisory.",
    challenge: "The firm's expertise was limited to their local network. They had no system for attracting clients from other cities, and their website did not effectively communicate their specialized knowledge in complex tax matters.",
    solution: "We created a content-driven digital strategy with detailed tax guides, case studies, and a resource library. We also implemented a webinar series and email marketing campaign to nurture leads.",
    results: "Sharma Advisors saw a 75% increase in new clients within 6 months, with revenue growing by 120%. Their referral rate increased by 45% as existing clients became more confident in recommending them."
  },
];

export const industries = ["All", "Accounting", "Audit", "Tax Advisory", "Consulting"];
