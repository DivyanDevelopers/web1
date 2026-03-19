import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export default function SEO({
  title,
  description,
  keywords = "CA firm website design, digital marketing for CA firms, SEO for chartered accountants, web development India",
  ogImage = "/images/hero-portrait.jpg",
  ogType = "website",
  canonical,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Primansh`;

    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: canonical || window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'robots', content: 'index, follow' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      let meta = document.querySelector(`meta[${name ? `name="${name}"` : `property="${property}"`}]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (name) meta.setAttribute('name', name);
        if (property) meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Update canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    return () => {
      // Cleanup not needed as we want to keep the meta tags
    };
  }, [title, description, keywords, ogImage, ogType, canonical]);

  return null;
}
