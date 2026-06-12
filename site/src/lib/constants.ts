// â"€â"€â"€ SWAP ALL CONTENT HERE â€" no need to touch individual components â"€â"€â"€

export const SITE = {
  name: "SQ Production",
  tagline: "Turning Video into Vibrant Conversations.",
  subtagline: "We're your friendly video wizards creating fantastic commercials, corporate videos, and social ads that get results.",
  ctaPrimary: "Get Started",
  ctaShowreel: "PLAY SHOWREEL",
  showreelVideo: "/videos/showreel.mp4",
  heroBg: "/images/hero-bg.jpg",
};

export const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact",  href: "/contact" },
];

export const BRAND_LOGOS: { name: string; src: string }[] = [
  { name: "GreenWaves",     src: "/images/logos/greenwaves.svg" },
  { name: "Eco-Warriors",   src: "/images/logos/eco-warriors.svg" },
  { name: "Mystic Horizons",src: "/images/logos/mystic-horizons.svg" },
  { name: "ModeElite",      src: "/images/logos/modeelite.svg" },
  { name: "Pixel Fusion",   src: "/images/logos/pixelfusion.svg" },
  { name: "Techno",         src: "/images/logos/techno.svg" },
  { name: "EcoExplorer",    src: "/images/logos/ecoexplorer.svg" },
  { name: "GreenEarth",     src: "/images/logos/greenearth.svg" },
  { name: "Urban Uplift",   src: "/images/logos/urbanuplift.svg" },
  { name: "MetroScape",     src: "/images/logos/metroscape.svg" },
];

export const PORTFOLIO_ITEMS = [
  {
    title: "Project Alpha",
    category: "Commercial",
    thumb: "/images/portfolio/alpha-thumb.jpg",
    video: "/videos/alpha.mp4",
  },
  {
    title: "Project Beta",
    category: "Corporate",
    thumb: "/images/portfolio/beta-thumb.jpg",
    video: "/videos/beta.mp4",
  },
  {
    title: "Project Gamma",
    category: "Documentary",
    thumb: "/images/portfolio/gamma-thumb.jpg",
    video: "/videos/gamma.mp4",
  },
  {
    title: "Project Delta",
    category: "Short Film",
    thumb: "/images/portfolio/delta-thumb.jpg",
    video: "/videos/delta.mp4",
  },
];

export const SERVICES = [
  {
    title: "Pre-Production",
    description:
      "Pre-production serves as the pivotal phase in any creative endeavor — where ideas become actionable plans through scripting, storyboarding, and careful planning.",
    href: "/services",
    image: "/images/services/pre-production.jpg",
    details: [
      "Concept Development",
      "Script Writing",
      "Location Scouting",
      "Talent Casting",
      "Budgeting & Styling",
      "Storyboarding",
    ],
  },
  {
    title: "Production",
    description:
      "The dynamic phase where creative vision materialises — cameras roll, stories unfold, and magic happens on set with our expert crew.",
    href: "/services",
    image: "/images/services/production.jpg",
    details: [
      "Camera & Lighting Setup",
      "Direction & Cinematography",
      "On-Set Sound Recording",
      "Multi-Camera Shoots",
      "Green Screen & Studio",
      "Drone & Aerial Footage",
    ],
  },
  {
    title: "Post-Production",
    description:
      "Raw footage transforms into a polished, audience-ready final product through editing, colour grading, sound design, and motion graphics.",
    href: "/services",
    image: "/images/services/post-production.jpg",
    details: [
      "Video Editing & Assembly",
      "Colour Grading & LUTs",
      "Sound Design & Mixing",
      "Motion Graphics & Titles",
      "VFX & Compositing",
      "Final Delivery & Export",
    ],
  },
];

export const INDUSTRIES = [
  { title: "Corporate Videos",          image: "/images/industries/corporate.jpg" },
  { title: "Documentaries",             image: "/images/industries/documentaries.jpg" },
  { title: "Entertainment & Narrative", image: "/images/industries/narrative.jpg" },
  { title: "Commercials & Ads",         image: "/images/industries/commercials.jpg" },
  { title: "Shorts & Reels",            image: "/images/industries/reels.jpg" },
  { title: "Event & Live Streaming",    image: "/images/industries/events.jpg" },
  { title: "Animation & VFX",           image: "/images/industries/vfx.jpg" },
];

export const STATS = [
  { value: 15,  suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Repeated Clients" },
  { value: 478, suffix: "",  label: "Completed Projects" },
  { value: 350, suffix: "+", label: "Happy Clients" },
];

export const ABOUT = {
  since: "2020",
  heading: "About Our Agency",
  body: "Established in 2020, we have dedicated ourselves to crafting captivating visual narratives that help brands tell their story. From concept to final cut, every project is driven by creativity, precision, and a passion for great filmmaking.",
  cta: "Know More About Us",
  image: "/images/team.jpg",
  founderTitle: "The Founder",
  founderBio:
    "Sheraz is a video production specialist focused on crafting bold, story-driven content that connects brands with audiences. He works with creative teams and businesses to build standout visual narratives and seamless digital experiences. He balances technical precision with creative vision — and enjoys pushing the boundaries of cinematography and motion design.",
  founderImage: "/images/about/founder.png",
  founderLinkedIn: "https://www.linkedin.com/in/sheraz-qureshi410/",
  founderInstagram: "https://www.instagram.com/sq.productions.co/",
  founderBehance: "https://www.behance.net/sqproductions",
  career: [],
};

export const TESTIMONIALS = [
  {
    quote: "Working with this team completely transformed our brand presence. The video quality and storytelling was beyond what we imagined.",
    name: "Sarah Adams",
    title: "CMO, HorizonTech Solutions",
    avatar: "/images/testimonials/sarah.jpg",
  },
  {
    quote: "Professional, creative, and delivered on time. The team understood our vision perfectly and brought it to life.",
    name: "Michael Lee",
    title: "Director of Sales, EcoGrowth",
    avatar: "/images/testimonials/michael.jpg",
  },
  {
    quote: "Our brand film went viral — 2M views in the first week. The storytelling and production quality was exceptional.",
    name: "Emily Rodriguez",
    title: "Creative Director, BrightSights",
    avatar: "/images/testimonials/emily.jpg",
  },
  {
    quote: "Deadline-conscious, creative, and a genuine pleasure to collaborate with. Highly recommend for any video production needs.",
    name: "David Chen",
    title: "CEO, Nexus Innovations",
    avatar: "/images/testimonials/david.jpg",
  },
];

export const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "We offer end-to-end video production: commercials, corporate films, documentaries, social reels, event coverage, animation, VFX, and full post-production services.",
  },
  {
    question: "How much does video production cost?",
    answer:
      "Pricing varies based on scope, length, and complexity. We work with budgets of all sizes and will provide a transparent quote after understanding your requirements.",
  },
  {
    question: "How long does it take to produce a video?",
    answer:
      "Timelines depend on the project. A social reel takes 1-2 weeks; a full commercial typically takes 4-8 weeks from brief to delivery, including revisions.",
  },
  {
    question: "Can you help with scriptwriting and storyboarding?",
    answer:
      "Absolutely. Our pre-production team handles creative strategy, scripting, storyboarding, and full shot planning before a single camera rolls.",
  },
  {
    question: "What is the production process like?",
    answer:
      "We start with a discovery call, move into pre-production planning, then shooting, followed by editing, colour grading, sound, and final delivery with revision rounds included.",
  },
  {
    question: "Do you provide video marketing services?",
    answer:
      "Yes — we can advise on distribution strategy, platform optimisation (YouTube, LinkedIn, Instagram), and ad formats to maximise the reach of your video content.",
  },
  {
    question: "Can you work with a specific budget?",
    answer:
      "Yes — we're flexible. Tell us your budget upfront and we'll design the best possible production within those constraints without sacrificing quality.",
  },
];

export const BLOG_POSTS = [
  {
    tag: "Tips",
    title: "5 Pre-Production Mistakes That Kill Great Videos",
    author: "Jane Smith",
    date: "May 12, 2025",
    image: "/images/blog/post1.jpg",
    href: "#blog",
  },
  {
    tag: "Gear",
    title: "Camera Rigs We Use for High-End Commercials",
    author: "Ali Hassan",
    date: "Apr 28, 2025",
    image: "/images/blog/post2.jpg",
    href: "#blog",
  },
  {
    tag: "Trends",
    title: "Why Short-Form Video Isn't Going Anywhere in 2025",
    author: "Sara Lee",
    date: "Apr 10, 2025",
    image: "/images/blog/post3.jpg",
    href: "#blog",
  },
];

export const SKILLS_STRIP = [
  "VFX", "Filming", "Scriptwriting", "Sound Design",
  "Color Grading", "Motion Graphics", "Editing", "Storyboarding",
];

export const FOOTER = {
  email: "teamsq.business@gmail.com",
  phone: "+1 (555) 000-0000",
  address: "123 Studio Lane, Los Angeles, CA",
  socials: {
    facebook:  "https://www.facebook.com/profile.php?id=61589987776707",
    email:     "mailto:teamsq.business@gmail.com",
    linkedin:  "https://www.linkedin.com/in/sheraz-qureshi410/",
    youtube:   "https://www.youtube.com/@SherazQureshiOfficial",
    instagram: "https://www.instagram.com/sq.productions.co/",
    behance:   "https://www.behance.net/sqproductions",
  },
  links: {
    company: [
      { label: "Projects",       href: "/projects" },
      { label: "About",          href: "/about" },
      { label: "Services",       href: "/services" },
      { label: "Blogs",          href: "/blogs" },
      { label: "Contact",        href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy",    href: "#" },
      { label: "Terms & Conditions",href: "#" },
      { label: "Refund Policy",     href: "#" },
    ],
  },
};
