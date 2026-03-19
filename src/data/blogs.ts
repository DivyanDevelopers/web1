export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export const blogs: Blog[] = [
  {
    id: "website-conversion",
    title: "How to Write Service Pages That Convert Visitors into Clients",
    excerpt: "Your service pages are the heart of your website. Learn how to structure them for maximum conversion and clarity.",
    content: `
      <p>Your service pages are often the first detailed interaction potential clients have with your firm. They need to do more than just list what you offer—they need to persuade visitors that you're the right choice.</p>
      
      <h2>Start with the Client's Problem</h2>
      <p>Before diving into your services, acknowledge the visitor's pain point. Are they struggling with tax compliance? Need help with audit preparation? Starting with their problem shows empathy and understanding.</p>
      
      <h2>Structure for Scannability</h2>
      <p>Most visitors scan rather than read. Use clear headings, bullet points, and short paragraphs. Make it easy for them to find the information they need quickly.</p>
      
      <h2>Include Social Proof</h2>
      <p>Testimonials, case studies, and client logos build trust. Place them strategically throughout your service pages to reinforce your credibility.</p>
      
      <h2>End with a Clear Call-to-Action</h2>
      <p>Every service page should have a clear next step. Whether it's scheduling a consultation or downloading a resource, make it obvious what visitors should do next.</p>
    `,
    image: "/images/blog-1.jpg",
    category: "Web Design",
    date: "March 15, 2026",
    readTime: "5 min read",
    author: "Primansh Team"
  },
  {
    id: "local-seo",
    title: "Local SEO for CA Firms: The Complete Checklist",
    excerpt: "A step-by-step guide to ranking higher in local search results and attracting clients in your city.",
    content: `
      <p>Local SEO is crucial for CA firms. When someone searches for "CA near me" or "chartered accountant in [city]," you want to be at the top of the results.</p>
      
      <h2>Claim Your Google Business Profile</h2>
      <p>This is the foundation of local SEO. Ensure your profile is complete with accurate information, photos, and regular updates.</p>
      
      <h2>Optimize for Local Keywords</h2>
      <p>Include your city and neighborhood names naturally throughout your website. Create location-specific pages if you serve multiple areas.</p>
      
      <h2>Build Local Citations</h2>
      <p>Ensure your business information is consistent across all online directories. This includes your name, address, and phone number (NAP).</p>
      
      <h2>Encourage Client Reviews</h2>
      <p>Positive reviews on Google and other platforms significantly impact local rankings. Make it easy for satisfied clients to leave reviews.</p>
    `,
    image: "/images/blog-2.jpg",
    category: "SEO",
    date: "March 10, 2026",
    readTime: "7 min read",
    author: "Primansh Team"
  },
  {
    id: "pricing-psychology",
    title: "Pricing Psychology for Advisory Services",
    excerpt: "How to communicate your fees in a way that emphasizes value and attracts premium clients.",
    content: `
      <p>Pricing is one of the most sensitive topics for CA firms. Communicate it poorly, and you attract price shoppers. Communicate it well, and you attract clients who value your expertise.</p>
      
      <h2>Lead with Value, Not Price</h2>
      <p>Always start by explaining what clients get, not what they pay. Frame your services in terms of outcomes and benefits.</p>
      
      <h2>Use Anchoring Effectively</h2>
      <p>Present your premium package first. This sets a reference point that makes your other packages seem more affordable.</p>
      
      <h2>Offer Tiered Options</h2>
      <p>Three pricing tiers work best. Most people choose the middle option, which should be your target package.</p>
      
      <h2>Be Transparent About What's Included</h2>
      <p>Clear pricing builds trust. List exactly what's included in each package to avoid misunderstandings later.</p>
    `,
    image: "/images/blog-3.jpg",
    category: "Strategy",
    date: "March 5, 2026",
    readTime: "6 min read",
    author: "Primansh Team"
  },
  {
    id: "content-marketing",
    title: "Content Marketing Strategy for CA Firms",
    excerpt: "How to use content to establish authority, attract leads, and nurture client relationships.",
    content: `
      <p>Content marketing is one of the most effective ways for CA firms to demonstrate expertise and attract qualified leads. Here's how to do it right.</p>
      
      <h2>Identify Your Audience's Questions</h2>
      <p>What do your clients ask you repeatedly? These questions are content gold. Create detailed guides that answer them thoroughly.</p>
      
      <h2>Create a Content Calendar</h2>
      <p>Consistency matters. Plan your content in advance and stick to a publishing schedule. Quality over quantity, but regularity is key.</p>
      
      <h2>Repurpose Your Content</h2>
      <p>A single blog post can become a video, infographic, social media posts, and email newsletter. Maximize your content's reach.</p>
    `,
    image: "/images/blog-1.jpg",
    category: "Marketing",
    date: "February 28, 2026",
    readTime: "8 min read",
    author: "Primansh Team"
  },
  {
    id: "lead-generation",
    title: "5 Lead Generation Tactics That Work for CA Firms",
    excerpt: "Proven strategies to attract a steady stream of qualified leads to your practice.",
    content: `
      <p>Generating consistent leads is the lifeblood of any growing CA firm. Here are five tactics that have proven effective for our clients.</p>
      
      <h2>1. Offer a Free Resource</h2>
      <p>Create a valuable guide or checklist that solves a common problem. Gate it behind an email signup to capture leads.</p>
      
      <h2>2. Host Educational Webinars</h2>
      <p>Webinars position you as an expert and allow you to connect with potential clients directly. Record them for ongoing lead generation.</p>
      
      <h2>3. Implement Live Chat</h2>
      <p>Many visitors have quick questions. Live chat can convert curious visitors into leads who might otherwise bounce.</p>
    `,
    image: "/images/blog-2.jpg",
    category: "Lead Generation",
    date: "February 20, 2026",
    readTime: "5 min read",
    author: "Primansh Team"
  },
  {
    id: "website-redesign",
    title: "When Is It Time for a Website Redesign?",
    excerpt: "Key signs that your current website is holding your firm back and what to do about it.",
    content: `
      <p>Your website is often the first impression potential clients have of your firm. Here are the signs it's time for a refresh.</p>
      
      <h2>It's Not Mobile-Friendly</h2>
      <p>Over 60% of web traffic comes from mobile devices. If your site doesn't work well on phones, you're losing clients.</p>
      
      <h2>It Takes Too Long to Load</h2>
      <p>Every second counts. If your site takes more than 3 seconds to load, visitors will leave before seeing what you offer.</p>
      
      <h2>Your Bounce Rate Is High</h2>
      <p>If visitors leave quickly without exploring other pages, your site isn't engaging or relevant to their needs.</p>
    `,
    image: "/images/blog-3.jpg",
    category: "Web Design",
    date: "February 15, 2026",
    readTime: "4 min read",
    author: "Primansh Team"
  },
];

export const blogCategories = ["All", "Web Design", "SEO", "Strategy", "Marketing", "Lead Generation"];
