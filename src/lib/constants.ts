// â"€â"€â"€ SWAP ALL CONTENT HERE â€" no need to touch individual components â"€â"€â"€

export const SITE = {
  name: "SQ Productions",
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

export const PROJECTS = [
  {
    slug: "bukhari-associates",
    title: "Bukhari Associates",
    subtitle: "Architectural storytelling at the highest level.",
    category: "Architecture",
    client: "Bukhari Associates",
    year: "2024",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "A cinematic showcase of two landmark architectural projects by Bukhari Associates — capturing the transformation of residential spaces through open planning and bold design.",
    image: "/images/portfolio/placeholder.png",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Bukhari%20Associates/rim-house.mp4",    label: "RIM HOUSE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Bukhari%20Associates/we%20are%20back.mp4",  label: "We Are Back With a Bang" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "This project encompassed the conception, production, and delivery of full architectural showcase videos, highlighting transformations of residential spaces through open planning design.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Creative brainstorming to define the visual narrative of each transformation.",
          "Identification of key architectural features to highlight.",
          "Defining the visual style, tone, and atmosphere of the production.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Location scouting and scheduling across each property.",
          "Scriptwriting and shot list preparation.",
          "Equipment and lighting setup planning.",
        ],
      },
      {
        title: "Production",
        points: [
          "Full property filming across multiple angles and perspectives.",
          "Drone and aerial footage of the exteriors.",
          "Capturing key design details and spatial transitions.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Expert editing of footage into cohesive narratives.",
          "Colour grading to enhance the architectural aesthetics.",
          "Motion graphics, titles, and sound design.",
        ],
      },
    ],
    timeline: "Completed over 4 weeks — pre-production planning, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered compelling showcases of both architectural projects.",
      "Client received broadcast-ready videos for marketing and social media.",
      "Content used across digital platforms to attract new residential clients.",
    ],
    clientInstagram: "https://www.instagram.com/bukhariassociates",
  },
  // ── Placeholders — replace with real projects ──────────────────────────
  {
    slug: "placeholder-2",
    title: "Coming Soon",
    subtitle: "Project placeholder.",
    category: "Fashion",
    client: "TBD",
    year: "2025",
    services: ["Cinematography", "Post Production"],
    description: "Project details coming soon.",
    image: "/images/portfolio/placeholder.png",
    videos: [],
    snaps: ["/images/portfolio/placeholder.png", "/images/portfolio/placeholder.png", "/images/portfolio/placeholder.png"],
    scopeOverview: "Coming soon.",
    scopePhases: [],
    timeline: "TBD",
    budget: "TBD",
    outcomes: [],
    clientInstagram: "",
  },
  {
    slug: "fit-like-farah",
    title: "Fit Like Farah",
    subtitle: "High-energy fitness content built to move.",
    category: "Fitness",
    client: "Fit Like Farah",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "A dynamic fitness content series for Fit Like Farah, capturing real training sessions with fast-paced, high-energy edits built for social-first audiences.",
    image: "/images/portfolio/placeholder.png",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Fitlikefarah/fitlikefarah.mp4", label: "FIT LIKE FARAH — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Fitlikefarah/fitlikefarha2.mp4", label: "FIT LIKE FARAH — FILM TWO" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "This project covered the full production of two fitness-focused films for Fit Like Farah, built to capture the energy and intensity of real training sessions for social media.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a high-energy, fast-cut visual style suited to training content.",
          "Identified key exercises and moments to highlight on camera.",
          "Set the tone — bold, motivating, and authentic — to match the brand.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Training session scheduling and location planning.",
          "Shot list preparation for dynamic movement coverage.",
          "Lighting and camera setup planning for gym environments.",
        ],
      },
      {
        title: "Production",
        points: [
          "Multi-angle filming of live training sessions.",
          "Close-up and tracking shots to capture movement and intensity.",
          "On-location audio capture for authentic energy.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Fast-paced editing into two short-form fitness films.",
          "Colour grading for a bold, high-contrast look.",
          "Sound design, music sync, and motion graphics for titles.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production planning, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered two polished fitness films ready for social media.",
      "Gave Fit Like Farah a consistent, high-energy visual identity.",
      "Content built for reuse across reels, ads, and social platforms.",
    ],
    clientInstagram: "",
  },
  {
    slug: "moxie",
    title: "Moxie",
    subtitle: "Giving everyday stationery a story worth telling.",
    category: "Stationery",
    client: "Moxie",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "A product-focused campaign for Moxie, spotlighting their range of pens and stationery essentials with clean, detail-driven visuals built to perform across social and retail platforms.",
    image: "/images/portfolio/placeholder.png",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/moxie/moxie1.mp4", label: "MOXIE — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/moxie/moxie2.mp4", label: "MOXIE — FILM TWO" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "This project covered the full production of two product-driven films for Moxie, designed to highlight the everyday craftsmanship of their stationery line in a clean, premium light.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a simple, product-first visual style suited to stationery close-ups.",
          "Identified key products and details to feature on camera.",
          "Set the tone — clean, tactile, and minimal — to match the brand.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Set design and styling planning for product shots.",
          "Shot list preparation for macro and lifestyle angles.",
          "Lighting setup planning for tabletop product filming.",
        ],
      },
      {
        title: "Production",
        points: [
          "Macro filming of product textures, materials, and finishes.",
          "Lifestyle shots showing the products in everyday use.",
          "Multiple angle coverage for flexible edit options.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Editing into two distinct short-form product films.",
          "Colour grading for a clean, consistent brand look.",
          "Sound design and motion graphics for titles and product call-outs.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production planning, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered two polished product films ready for social and retail use.",
      "Gave Moxie a consistent visual identity across its stationery range.",
      "Content built for reuse across ads, product pages, and social platforms.",
    ],
    clientInstagram: "",
  },
  {
    slug: "placeholder-5",
    title: "Coming Soon",
    subtitle: "Project placeholder.",
    category: "Documentary",
    client: "TBD",
    year: "2025",
    services: ["Cinematography", "Post Production"],
    description: "Project details coming soon.",
    image: "/images/portfolio/placeholder.png",
    videos: [],
    snaps: ["/images/portfolio/placeholder.png", "/images/portfolio/placeholder.png", "/images/portfolio/placeholder.png"],
    scopeOverview: "Coming soon.",
    scopePhases: [],
    timeline: "TBD",
    budget: "TBD",
    outcomes: [],
    clientInstagram: "",
  },
  {
    slug: "placeholder-6",
    title: "Coming Soon",
    subtitle: "Project placeholder.",
    category: "Architecture",
    client: "TBD",
    year: "2025",
    services: ["Cinematography", "Post Production"],
    description: "Project details coming soon.",
    image: "/images/portfolio/placeholder.png",
    videos: [],
    snaps: ["/images/portfolio/placeholder.png", "/images/portfolio/placeholder.png", "/images/portfolio/placeholder.png"],
    scopeOverview: "Coming soon.",
    scopePhases: [],
    timeline: "TBD",
    budget: "TBD",
    outcomes: [],
  },
];

export const SERVICES = [
  {
    title: "Pre-Production",
    description:
      "Pre-production serves as the pivotal phase in any creative endeavor — where ideas become actionable plans through scripting, storyboarding, and careful planning.",
    href: "/services",
    image: "/images/portfolio/placeholder.png",
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
    image: "/images/portfolio/alpha-thumb.jpg",
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
    image: "/images/portfolio/beta-thumb.jpg",
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
  { title: "Corporate Videos",          image: "/images/industries/corporate.jpg",   description: "Enhance your brand's impact with our corporate video expertise. We create engaging content for businesses, from promotions to training materials." },
  { title: "Documentaries",             image: "/images/industries/documentaries.jpg", description: "We bring real-life stories to life. Our documentaries inform, entertain, and educate on diverse subjects, ensuring your message is captivatingly conveyed." },
  { title: "Entertainment & Narrative", image: "/images/industries/narrative.jpg",   description: "Immerse your audience in captivating stories. Our creative team brings your visions to life, whether it's a short film or a full-length feature." },
  { title: "Commercials & Ads",         image: "/images/industries/commercials.jpg", description: "Make a memorable impression. Our short, attention-grabbing videos showcase your products, services, or brand identity effectively." },
  { title: "Shorts & Reels",            image: "/images/industries/reels.jpg",       description: "Stay on-trend and engage your audience with our dynamic social media content designed for maximum impact and shareability on popular platforms." },
  { title: "Event & Live Streaming",    image: "/images/industries/events.jpg",      description: "Capture and share the excitement of live events. We provide multi-camera setups, live streaming, and post-event editing for unforgettable experiences." },
  { title: "Animation & VFX",           image: "/images/industries/vfx.jpg",         description: "Elevate your content with stunning visuals. Our animation and VFX artists use cutting-edge tech for breathtaking effects in films, commercials, and more." },
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

export const TESTIMONIALS_BG = "";

export const TESTIMONIALS = [
  {
    quote: "Working with this team completely transformed our brand presence. The video quality and storytelling was beyond what we imagined.",
    name: "Sarah Adams",
    title: "CMO, HorizonTech Solutions",
    logo: "/images/logos/greenwaves.svg",
  },
  {
    quote: "Professional, creative, and delivered on time. The team understood our vision perfectly and brought it to life.",
    name: "Michael Lee",
    title: "Director of Sales, EcoGrowth",
    logo: "/images/logos/eco-warriors.svg",
  },
  {
    quote: "Our brand film went viral — 2M views in the first week. The storytelling and production quality was exceptional.",
    name: "Emily Rodriguez",
    title: "Creative Director, BrightSights",
    logo: "/images/logos/pixelfusion.svg",
  },
  {
    quote: "Deadline-conscious, creative, and a genuine pleasure to collaborate with. Highly recommend for any video production needs.",
    name: "David Chen",
    title: "CEO, Nexus Innovations",
    logo: "/images/logos/techno.svg",
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

export const CLIENT_MARQUEE = [
  "Bukhari Associates",
  "Ali Zafar",
  "Fit Like Farah",
];

export const SKILLS_STRIP = [
  { label: "VFX",             image: "/images/portfolio/placeholder.png" },
  { label: "Filming",         image: "/images/portfolio/placeholder.png" },
  { label: "Scriptwriting",   image: "/images/portfolio/placeholder.png" },
  { label: "Sound Design",    image: "/images/portfolio/placeholder.png" },
  { label: "Color Grading",   image: "/images/portfolio/placeholder.png" },
  { label: "Motion Graphics", image: "/images/portfolio/placeholder.png" },
  { label: "Editing",         image: "/images/portfolio/placeholder.png" },
  { label: "Storyboarding",   image: "/images/portfolio/placeholder.png" },
];

export const COLLABORATE = {
  heading: ["Got a vision?", "Let's bring it to life on screen."],
  subtext: "From concept to final cut — tell us about your project and let's start creating something great together.",
  ctaLabel: "Let's Collaborate",
  ctaHref: "/contact",
};

export const FOOTER = {
  email: "teamsq.business@gmail.com",
  phone: "+1 (555) 000-0000",
  address: "123 Studio Lane, Los Angeles, CA",
  hours: "Monday - Friday : 9am to 6pm",
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
      { label: "Home",           href: "/" },
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
    social: [
      { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61589987776707" },
      { label: "LinkedIn",  href: "https://www.linkedin.com/in/sheraz-qureshi410/" },
      { label: "YouTube",   href: "https://www.youtube.com/@SherazQureshiOfficial" },
      { label: "Instagram", href: "https://www.instagram.com/sq.productions.co/" },
      { label: "Behance",   href: "https://www.behance.net/sqproductions" },
    ],
  },
};
