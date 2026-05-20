export const siteConfig = {
  name: "NetCulture",
  founded: "2002",
  location: "Jaipur, Rajasthan, India",
  tagline:
    "Modern websites, applications, SEO systems, and automation solutions built for businesses that want faster digital growth.",
  shortTagline: "Web, app, SEO, and automation systems for modern businesses.",
  phone: "+91 9887777993",
  email: "contact@netculture.in",
  whatsapp: "https://wa.me/919887777993",
  calendly:"https://calendly.com/aryambenson7/30min",
  website: "https://netculture.in",
  socials: {
    instagram: "https://instagram.com/netculture.in",
    linkedin: "https://linkedin.com/company/netculture",
    facebook: "https://facebook.com/netculture",
    x: "https://x.com/netculture",
    github: "https://github.com/netculture"
  }
};

// Backward-compatible alias used across existing components.
export const brand = siteConfig;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Future Lab", href: "/future-lab" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const fullSitemap = [
  ...navItems,
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" }
];

export const services = [
  {
    title: "Website Development",
    slug: "website-development",
    copy:
      "Fast, SEO-focused, mobile-friendly websites designed for trust, visibility, and business growth.",
    signal: "Next.js, SEO, CMS"
  },
  {
    title: "Web Application Development",
    slug: "web-application-development",
    copy:
      "Custom dashboards, portals, CRMs, SaaS platforms, and internal business systems built around real workflows.",
    signal: "Dashboards, APIs, databases"
  },
  {
    title: "Mobile Application Development",
    slug: "mobile-application-development",
    copy:
      "Cross-platform mobile apps and PWAs with smooth performance and scalable architecture.",
    signal: "Android, iOS, PWA"
  },
  {
    title: "SEO & Search Optimization",
    slug: "seo-search-optimization",
    copy:
      "Technical SEO, content structure, schema optimization, and search-focused website architecture.",
    signal: "Schema, rankings, performance"
  },
  {
    title: "AI Solutions",
    slug: "ai-solutions",
    copy:
      "AI-assisted workflows, smart automation systems, customer support tools, and lead qualification systems.",
    signal: "AI workflows, automation"
  },
  {
    title: "Digital Branding",
    slug: "digital-branding",
    copy:
      "Brand identity systems, premium UI/UX design, visual communication, and launch-ready digital assets.",
    signal: "Branding, UI systems"
  },
  {
    title: "Performance Marketing",
    slug: "performance-marketing",
    copy:
      "Landing pages, ad funnels, analytics tracking, and conversion-focused campaign systems.",
    signal: "Meta Ads, Google Ads"
  },
  {
    title: "Automation Systems",
    slug: "automation-systems",
    copy:
      "Workflow automation, CRM integrations, reporting systems, notifications, and operational dashboards.",
    signal: "CRM, APIs, automation"
  }
];

export const stats = [
  { value: "22+", label: "Years operating since 2002" },
  { value: "100+", label: "Projects and digital systems delivered" },
  { value: "90+", label: "Performance-first Lighthouse target" },
  { value: "24/7", label: "Support and automation readiness" }
];

export const logos = [
  "Hospitality",
  "Retail",
  "Healthcare",
  "Education",
  "Real Estate",
  "Professional Services"
];

export const caseStudies = [
  {
    title: "Hospitality booking platform",
    sector: "Hospitality",
    result: "Improved customer inquiry flow",
    copy:
      "Designed and developed a modern hotel booking interface with mobile-first UX and lead-focused architecture.",
    gradient: "from-brand-electric/40 via-brand-sky/20 to-brand-crimson/30"
  },
  {
    title: "Business operations dashboard",
    sector: "Operations",
    result: "Centralized reporting workflow",
    copy:
      "Built a secure dashboard system for internal reporting, staff management, and business monitoring.",
    gradient: "from-brand-deep/50 via-white/5 to-brand-sky/30"
  },
  {
    title: "SEO-focused business website",
    sector: "Professional services",
    result: "Better search visibility and conversions",
    copy:
      "Created a performance-focused website with structured SEO, analytics, and conversion-oriented design.",
    gradient: "from-brand-crimson/40 via-brand-deep/30 to-brand-electric/30"
  }
];

export const industries = [
  "Hospitality",
  "Healthcare",
  "Education",
  "Real Estate",
  "Retail & E-commerce",
  "Professional Services",
  "Manufacturing",
  "Travel & Tourism",
  "Media & Creators",
  "Startups & SaaS"
];

export const processSteps = [
  {
    title: "Discover",
    copy:
      "Understand business goals, target audience, current systems, and operational requirements."
  },
  {
    title: "Plan",
    copy:
      "Create structure for UX, SEO, branding, content systems, and technical architecture."
  },
  {
    title: "Build",
    copy:
      "Develop fast interfaces, APIs, dashboards, automation systems, and scalable digital infrastructure."
  },
  {
    title: "Optimize",
    copy:
      "Improve performance, analytics, SEO, and automation workflows for long-term growth."
  }
];

export const pageData = {
  about: {
    eyebrow: "Since 2002",
    title: "A technology company focused on modern digital growth systems.",
    intro:
      "NetCulture combines development, design, SEO, AI-assisted workflows, and automation into one integrated digital platform for businesses.",
    bullets: [
      "Over two decades of practical digital experience",
      "Modern design and performance-focused engineering",
      "SEO, automation, and scalable digital systems"
    ]
  },
  services: {
    eyebrow: "Services",
    title: "Digital systems designed for speed, trust, and business growth.",
    intro:
      "From websites and applications to SEO and automation, NetCulture builds modern digital infrastructure for businesses.",
    bullets: services.map((service) => service.title)
  },
  portfolio: {
    eyebrow: "Portfolio",
    title:
      "Selected projects across websites, applications, branding, and digital systems.",
    intro:
      "Representative work covering UX, business systems, SEO architecture, and automation platforms.",
    bullets: [
      "Business websites",
      "Web applications",
      "Automation systems",
      "SEO-focused platforms"
    ]
  },
  "case-studies": {
    eyebrow: "Case Studies",
    title: "Selected digital transformation and growth projects.",
    intro:
      "Projects focused on improving user experience, operational systems, visibility, and lead generation.",
    bullets: [
      "SEO improvements",
      "Business automation",
      "Faster workflows",
      "Improved conversion systems"
    ]
  },
  industries: {
    eyebrow: "Industries",
    title:
      "Technology systems adapted for different industries and business models.",
    intro:
      "NetCulture builds tailored digital solutions based on the workflows and goals of each industry.",
    bullets: industries
  },
  "ai-solutions": {
    eyebrow: "AI Solutions",
    title:
      "AI-assisted workflows and automation systems for modern businesses.",
    intro:
      "Practical AI integrations for customer support, lead qualification, reporting, and operational efficiency.",
    bullets: [
      "AI-assisted customer support",
      "Workflow automation",
      "Lead qualification systems",
      "Smart reporting tools",
      "Knowledge assistants"
    ]
  },
  blog: {
    eyebrow: "Insights",
    title: "Articles on web performance, SEO, AI workflows, and digital growth.",
    intro:
      "A content platform designed to share practical insights and industry knowledge.",
    bullets: [
      "SEO",
      "Web performance",
      "Automation",
      "UI/UX",
      "AI workflows"
    ]
  },
  careers: {
    eyebrow: "Careers",
    title: "Build digital systems that are fast, useful, and scalable.",
    intro:
      "NetCulture welcomes designers, developers, marketers, and strategists who value practical innovation and quality execution.",
    bullets: [
      "Frontend development",
      "UI/UX design",
      "SEO strategy",
      "Performance marketing",
      "Automation systems"
    ]
  },
  "future-lab": {
    eyebrow: "Future Lab",
    title:
      "Research and experimentation across AI, automation, WebGL, and next-generation interfaces.",
    intro:
      "A space for testing advanced concepts and turning emerging technologies into practical business systems.",
    bullets: [
      "AI experiments",
      "Automation prototypes",
      "WebGL interfaces",
      "Digital systems research",
      "Future interaction concepts"
    ]
  }
};

export const blogPosts = [
  {
    title: "Why website performance directly impacts conversions",
    tag: "Performance",
    read: "5 min",
    copy:
      "How speed, stability, and responsive interfaces influence trust, SEO, and lead generation."
  },
  {
    title: "Using AI-assisted workflows without losing human communication",
    tag: "AI",
    read: "7 min",
    copy:
      "Practical approaches to automation that improve efficiency while maintaining customer trust."
  },
  {
    title: "Modern SEO architecture for scalable business websites",
    tag: "SEO",
    read: "6 min",
    copy:
      "A practical structure for search visibility, content organization, schema, and performance."
  }
];

export const adminModules = [
  "Portfolio management",
  "Blog management",
  "Project upload system",
  "Testimonials and reviews",
  "Media library",
  "Lead management",
  "Analytics overview",
  "SEO settings"
];