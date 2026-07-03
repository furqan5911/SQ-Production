// â"€â"€â"€ SWAP ALL CONTENT HERE â€" no need to touch individual components â"€â"€â"€

export const SITE = {
  name: "SQ Productions",
  tagline: "Turning Video into Vibrant Conversations.",
  subtagline: "Friendly video wizards crafting commercials, corporate videos, and social ads that get results.",
  ctaPrimary: "Get Started",
  ctaShowreel: "PLAY SHOWREEL",
  showreelVideo: "/videos/showreel.mp4",
  heroBg: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/banner.png",
};

export const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "AI Ads",   href: "/projects/ai-ads" },
  { label: "Contact",  href: "/contact" },
];

export const BRAND_LOGOS: { name: string; src: string }[] = [
  { name: "Partner 1",  src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/1.png" },
  { name: "Partner 2",  src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/2.png" },
  { name: "Partner 3",  src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/3.png" },
  { name: "Partner 4",  src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/4.png" },
  { name: "Partner 5",  src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/5.png" },
  { name: "Partner 6",  src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/6.png" },
  { name: "Partner 7",  src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/7.png" },
  { name: "Partner 8",  src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/8.png" },
  { name: "Partner 9",  src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/9.png" },
  { name: "Partner 10", src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/10.png" },
  { name: "Partner 11", src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/11.png" },
  { name: "Partner 12", src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/12.png" },
  { name: "Partner 13", src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/13.png" },
  { name: "Partner 14", src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/14.png" },
  { name: "Lightinga",  src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/15.png" },
  { name: "Partner 16", src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/16.png" },
  { name: "Partner 17", src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/logos/17.png" },
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
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/Bukhariassociatesh.png",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Bukhari%20Associates/rim-house.mp4",              label: "RIM HOUSE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Bukhari%20Associates/Bhukhariassociates1.mp4",   label: "BUKHARI ASSOCIATES — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Bukhari%20Associates/Bhukhariassociates2.mp4",   label: "BUKHARI ASSOCIATES — FILM TWO" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Bukhari%20Associates/Bhukhariassociates3.mp4",   label: "BUKHARI ASSOCIATES — FILM THREE" },
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
  {
    slug: "the-next-dubai",
    title: "The Next Dubai",
    subtitle: "Branding films built for a city on the rise.",
    category: "Social Media",
    client: "The Next Dubai",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "A four-part branding series for The Next Dubai — cinematic, high-energy films that capture the vision, ambition, and identity of a brand shaping the future of Dubai.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/tndb.jpeg",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Thenextdubai/tnd.mp4",  label: "THE NEXT DUBAI — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Thenextdubai/tnd2.mp4", label: "THE NEXT DUBAI — FILM TWO" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Thenextdubai/tnd3.mp4", label: "THE NEXT DUBAI — FILM THREE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Thenextdubai/tnd4.mp4", label: "THE NEXT DUBAI — FILM FOUR" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of four branding films for The Next Dubai, designed to communicate the brand's vision and identity with cinematic precision across digital and social platforms.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a cinematic, aspirational visual language suited to the brand.",
          "Identified key brand pillars and messaging to communicate across all four films.",
          "Set the tone — bold, forward-thinking, and premium.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Location scouting across Dubai to find settings that reflect the brand vision.",
          "Shot list and storyboard preparation for all four films.",
          "Crew, equipment, and scheduling coordination across shoot days.",
        ],
      },
      {
        title: "Production",
        points: [
          "Multi-location filming across four distinct brand films.",
          "Cinematic camera movement and lighting to elevate the brand aesthetic.",
          "Drone and wide-format shots to capture the scale of the vision.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Editing all four films into cohesive, brand-consistent narratives.",
          "Colour grading for a premium, aspirational look.",
          "Sound design, music sync, and motion graphics for titles.",
        ],
      },
    ],
    timeline: "Completed over 4 weeks — pre-production, multi-day shoot, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered four polished branding films ready for social and digital use.",
      "Gave The Next Dubai a strong, consistent visual identity across all content.",
      "Content built for use across campaigns, social platforms, and presentations.",
    ],
    clientInstagram: "https://www.instagram.com/the_nextdubai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  // ── Placeholders — replace with real projects ──────────────────────────
  {
    slug: "esmel",
    title: "Esmel",
    subtitle: "Product films crafted with precision.",
    category: "Social Media",
    client: "Esmel",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "Two clean, detail-driven product films for Esmel — built to highlight the product's quality and appeal across social and retail platforms.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/esmelb.jpeg",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Esmel/Esmel%201.mp4", label: "ESMEL — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Esmel/esmel%202.mp4", label: "ESMEL — FILM TWO" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of two product films for Esmel, designed to showcase the product with clean, detail-focused visuals for social media and retail use.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a clean, product-first visual style to suit the brand.",
          "Identified key product features and details to capture.",
          "Set the tone — minimal, precise, and premium.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Set design and styling for product-focused shots.",
          "Shot list preparation for detail and lifestyle angles.",
          "Lighting and camera setup planning.",
        ],
      },
      {
        title: "Production",
        points: [
          "Macro and multi-angle filming of the product.",
          "Lifestyle shots showing the product in context.",
          "Multiple coverage options for a flexible edit.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Editing into two polished short-form product films.",
          "Colour grading for a clean, consistent brand look.",
          "Sound design and motion graphics for titles.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered two polished product films ready for social and retail use.",
      "Gave Esmel a clean, consistent visual identity across its content.",
      "Content built for reuse across ads, product pages, and social platforms.",
    ],
    clientInstagram: "",
  },
  {
    slug: "fit-like-farah",
    title: "Fit Like Farah",
    subtitle: "High-energy fitness content built to move.",
    category: "Social Media",
    client: "Fit Like Farah",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "A dynamic fitness content series for Fit Like Farah, capturing real training sessions with fast-paced, high-energy edits built for social-first audiences.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/Fitlikefarahbanner.png",
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
    slug: "bounceway",
    title: "Bounceway",
    subtitle: "Product films built to move.",
    category: "Product",
    client: "Bounceway",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "A product-focused campaign for Bounceway — two sharp, high-energy films designed to showcase the product in action and drive results across social and retail platforms.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/bouncewayb.jpeg",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Bounceway/bounceway.mp4",  label: "BOUNCEWAY — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Bounceway/bounceway2.mp4", label: "BOUNCEWAY — FILM TWO" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of two product-driven films for Bounceway, built to highlight the product with clean, high-energy visuals optimised for social media and retail use.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a dynamic, product-first visual style to match the brand energy.",
          "Identified key product features and moments to capture on camera.",
          "Set the tone — bold, fast-paced, and impactful.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Set design and styling for product-focused shots.",
          "Shot list preparation for action and detail angles.",
          "Lighting and camera setup planning for optimal product presentation.",
        ],
      },
      {
        title: "Production",
        points: [
          "Multi-angle filming of the product in use and in detail.",
          "Action and lifestyle shots to convey the brand personality.",
          "Multiple coverage options for a flexible edit.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Editing into two distinct short-form product films.",
          "Colour grading for a bold, punchy look.",
          "Sound design and motion graphics for titles and product highlights.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered two polished product films ready for social and retail use.",
      "Gave Bounceway a high-energy visual identity for their campaign.",
      "Content built for reuse across ads, product pages, and social platforms.",
    ],
    clientInstagram: "https://www.instagram.com/bounce.way?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    slug: "ali-zafar",
    title: "Ali Zafar",
    subtitle: "Content built for a star.",
    category: "Celebrity & Creator",
    client: "Ali Zafar",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "Two high-energy films produced for Ali Zafar — capturing his personality, presence, and brand with bold visuals built for social media and digital platforms.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/alizafarb.jpeg",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Ali%20zafar/AZ%20GYM.mp4",           label: "ALI ZAFAR — GYM" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Ali%20zafar/Ali%20zafar%202.mp4",    label: "ALI ZAFAR — FILM TWO" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Ali%20zafar/AlizafarConcert.mp4",    label: "ALI ZAFAR — CONCERT" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Ali%20zafar/REELSOULFEST.mp4",       label: "ALI ZAFAR — SOUL FEST" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of two content films for Ali Zafar, crafted to reflect his personal brand with dynamic visuals optimised for social media.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a visual style that matches Ali Zafar's personal brand and energy.",
          "Identified key moments and themes to capture across both films.",
          "Set the tone — bold, authentic, and high-energy.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Location and scheduling coordination.",
          "Shot list preparation for dynamic content coverage.",
          "Crew and equipment planning.",
        ],
      },
      {
        title: "Production",
        points: [
          "Multi-angle filming to capture energy and personality.",
          "Close-up and wide shots for versatile edit options.",
          "On-location audio and ambient capture.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Fast-paced editing into two distinct content films.",
          "Colour grading for a bold, social-ready look.",
          "Sound design, music sync, and motion graphics.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered two polished content films ready for social media.",
      "Captured Ali Zafar's brand presence with high-energy visuals.",
      "Content built for reuse across reels, ads, and digital platforms.",
    ],
    clientInstagram: "https://www.instagram.com/ali_zafar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    slug: "daniya-kanwal",
    title: "Daniya Kanwal",
    subtitle: "Creator content with style and substance.",
    category: "Celebrity & Creator",
    client: "Daniya Kanwal",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "Two standout films produced for Daniya Kanwal — vibrant, personality-driven content built to perform across social platforms and connect with her audience.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/kanwalb.jpeg",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Daniya%20kanwal/Shoqeen%20Kuri%20-%20Daniya.mp4", label: "SHOQEEN KURI" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Daniya%20kanwal/Daniya%20Kanwal%201.mp4",          label: "DANIYA KANWAL — FILM TWO" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of two creator films for Daniya Kanwal, designed to showcase her personality and style with polished visuals built for social-first audiences.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a vibrant, personality-first visual style to match the brand.",
          "Identified key themes and moments to highlight across both films.",
          "Set the tone — colourful, energetic, and authentic.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Location scouting and scheduling coordination.",
          "Shot list and styling preparation.",
          "Crew and equipment planning for creator content.",
        ],
      },
      {
        title: "Production",
        points: [
          "Multi-angle filming to capture personality and energy.",
          "Lifestyle and performance shots across locations.",
          "On-location audio and sound capture.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Editing into two polished, social-ready films.",
          "Colour grading for a vibrant, on-brand look.",
          "Sound design, music sync, and motion graphics.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered two polished creator films ready for social media.",
      "Captured Daniya Kanwal's brand with vibrant, engaging visuals.",
      "Content built for reuse across reels, ads, and digital platforms.",
    ],
    clientInstagram: "https://www.instagram.com/daniyakanwall?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    slug: "billy-x",
    title: "Billy X",
    subtitle: "AI-generated iconic visuals for a rising star.",
    category: "Celebrity & Creator",
    client: "Billy X",
    year: "2025",
    services: ["AI Image Generation", "Creative Direction", "Visual Design"],
    description:
      "We used AI image generation models to create a series of bold, high-concept visuals for Billy X — pushing the boundaries of creative identity through machine intelligence and artistic direction.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/billyx/billi1.png",
    noMeta: true,
    videos: [],
    aiImages: [
      "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/billyx/billi1.png",
      "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/billyx/billi2.png",
      "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/billyx/billi3.png",
      "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/billyx/billi4.png",
      "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/billyx/billi5.png",
      "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/billyx/billi6.png",
      "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/billyx/billi7.png",
      "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/billyx/billi8.png",
      "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/billyx/billi9.png",
    ],
    snaps: [],
    scopeOverview: "",
    scopePhases: [],
    timeline: "",
    budget: "",
    outcomes: [],
    clientInstagram: "https://www.instagram.com/billyxmusic/",
  },
  {
    slug: "moxie",
    title: "Moxie",
    subtitle: "Giving everyday stationery a story worth telling.",
    category: "Product",
    client: "Moxie",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "A product-focused campaign for Moxie, spotlighting their range of pens and stationery essentials with clean, detail-driven visuals built to perform across social and retail platforms.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/moxieb.jpeg",
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
    slug: "ali-wasi-kazmi",
    title: "Ali Wasi Kazmi",
    subtitle: "Creator content crafted for impact.",
    category: "Celebrity & Creator",
    client: "Ali Wasi Kazmi",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "Two high-energy films produced for Ali Wasi Kazmi — capturing his presence and personality with bold visuals built for social media and digital platforms.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/kazmib.jpeg",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/kazmi/kazmi1.mp4",          label: "ALI WASI KAZMI — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Reelhome/reelpage1.mp4",    label: "ALI WASI KAZMI — FILM TWO" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of two content films for Ali Wasi Kazmi, crafted to reflect his personal brand with dynamic visuals optimised for social media.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a visual style that matches Ali Wasi Kazmi's personal brand and energy.",
          "Identified key moments and themes to capture across both films.",
          "Set the tone — bold, authentic, and high-energy.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Location and scheduling coordination.",
          "Shot list preparation for dynamic content coverage.",
          "Crew and equipment planning.",
        ],
      },
      {
        title: "Production",
        points: [
          "Multi-angle filming to capture energy and personality.",
          "Close-up and wide shots for versatile edit options.",
          "On-location audio and ambient capture.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Fast-paced editing into two distinct content films.",
          "Colour grading for a bold, social-ready look.",
          "Sound design, music sync, and motion graphics.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered two polished content films ready for social media.",
      "Captured Ali Wasi Kazmi's brand presence with high-energy visuals.",
      "Content built for reuse across reels, ads, and digital platforms.",
    ],
    clientInstagram: "https://www.instagram.com/aliwasikazmi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    slug: "saharnoon",
    title: "Sahar Noon",
    subtitle: "Shoot & edit crafted for a rising influencer.",
    category: "Celebrity & Creator",
    client: "Sahar Noon",
    year: "2025",
    services: ["Shoot", "Video Editing"],
    description:
      "A complete shoot and edit project for Sahar Noon — an influencer-driven production where we handled everything from on-set filming to the final cut.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/saharnoonb.jpeg",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Reelhome/reelpage2.mp4" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/saharnoon/saharnoon.mp4" },
    ],
    snaps: [],
    scopeOverview: "",
    scopePhases: [],
    timeline: "",
    budget: "",
    outcomes: [],
    clientInstagram: "https://www.instagram.com/saharnoon/",
  },
  {
    slug: "roushan-builds",
    title: "Roushan Builds",
    subtitle: "Architectural storytelling built to inspire.",
    category: "Architecture",
    client: "Roushan Builds",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "A cinematic showcase for Roushan Builds — two powerful films capturing the craftsmanship, scale, and vision behind their architectural projects.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/roushanbuildsh.png",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Roushan%20Builds/Roushan%20Builds%201.mp4", label: "ROUSHAN BUILDS — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Roushan%20Builds/Roushan%20Builds%202.mp4", label: "ROUSHAN BUILDS — FILM TWO" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of two architectural showcase films for Roushan Builds, capturing the scale, detail, and craftsmanship of their projects for digital and marketing use.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined the visual narrative to highlight the brand's architectural identity.",
          "Identified key structural features and spaces to capture on camera.",
          "Set the tone — cinematic, bold, and premium.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Location scouting and scheduling across project sites.",
          "Shot list and storyboard preparation.",
          "Equipment and crew planning for architectural environments.",
        ],
      },
      {
        title: "Production",
        points: [
          "Full site filming across multiple angles and perspectives.",
          "Drone and aerial footage of exteriors.",
          "Detail shots capturing materials, finishes, and spatial transitions.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Editing footage into two cohesive architectural films.",
          "Colour grading to enhance the visual quality of the spaces.",
          "Sound design, music, and motion graphics for titles.",
        ],
      },
    ],
    timeline: "Completed over 3 weeks — pre-production, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered two polished architectural films for marketing and social use.",
      "Gave Roushan Builds a strong visual identity across their content.",
      "Content built for use across digital platforms and client presentations.",
    ],
    clientInstagram: "",
  },
  {
    slug: "music-videos",
    title: "Music Videos",
    subtitle: "Cinematic visuals built for the music.",
    category: "Music Video",
    client: "SQ Productions",
    year: "2025",
    services: ["Direction", "Cinematography", "Post Production"],
    description:
      "Two music videos produced by SQ Productions — visually driven productions that bring the track to life with bold cinematography and sharp editing.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/SQ%20productions%20banner.png",
    noMeta: true,
    horizontalVideos: true,
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/music%20video/music1.mp4",      label: "Fanna" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/music%20video/music2.mp4",      label: "Kukkad Song" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/music%20video/Teri%20yaad.mp4", label: "Teri Yaad" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/music%20video/DILDARA.mp4",     label: "Dildara" },
    ],
    snaps: [],
    scopeOverview: "",
    scopePhases: [],
    timeline: "",
    budget: "",
    outcomes: [],
    clientInstagram: "",
  },
  {
    slug: "ai-ads",
    title: "AI Ads",
    subtitle: "AI-powered video ads that convert.",
    category: "AI Ads",
    client: "SQ Productions",
    year: "2025",
    services: ["AI Production", "Motion Graphics", "Post Production"],
    description:
      "A collection of AI-powered video ads produced by SQ Productions — fast, visually compelling short-form content built for digital platforms and brand campaigns.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/SQ%20productions%20banner.png",
    noMeta: true,
    gridVideos: true,
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/AI%20Ads/0418(1).mp4",                label: "" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/AI%20Ads/1019.mov",                   label: "" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/AI%20Ads/Bang%20bang.mp4",            label: "" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/AI%20Ads/Cera%20Ve%20Ad.mp4",        label: "" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/AI%20Ads/Flora%20Product%20reel.mp4", label: "" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/AI%20Ads/Khasara.mp4",               label: "" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/AI%20Ads/Love%20Horror.mp4",         label: "" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/AI%20Ads/MIX%20Ai.mp4",             label: "" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/AI%20Ads/Members%20Card%20reel%20-%20Glome.mp4", label: "" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/AI%20Ads/Red%20Dress%20AI(1).mp4",  label: "" },
    ],
    snaps: [],
    scopeOverview: "",
    scopePhases: [],
    timeline: "",
    budget: "",
    outcomes: [],
    clientInstagram: "",
  },
  {
    slug: "short-films",
    title: "Short Films",
    subtitle: "Original short-form storytelling.",
    category: "Short Films",
    client: "SQ Productions",
    year: "2025",
    services: ["Direction", "Cinematography", "Post Production"],
    description:
      "Two original short films produced by SQ Productions — intimate, character-driven stories told with cinematic craft and a bold visual voice.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/SQ%20productions%20banner.png",
    noMeta: true,
    horizontalVideos: true,
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Shortfilms/ytvideo1.mp4", label: "College Diaries", poster: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/tumb2.jpeg" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Shortfilms/ytvideo.mp4",  label: "The Good Man",   poster: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/thumb.jpeg"  },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview: "",
    scopePhases: [],
    timeline: "",
    budget: "",
    outcomes: [],
    clientInstagram: "",
  },
  {
    slug: "glome",
    title: "Glome",
    subtitle: "Brand films built to make an impression.",
    category: "Social Media",
    client: "Glome",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "Two sleek branding films for Glome — cinematic, identity-driven visuals built to communicate the brand's personality and stand out across digital platforms.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/glomeb.jpeg",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Glome/Glome%201.mp4", label: "GLOME — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Glome/Glome%202.mp4", label: "GLOME — FILM TWO" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of two branding films for Glome, designed to capture the brand's identity and vision with polished, cinematic visuals for digital and social use.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a visual language that reflects the Glome brand identity.",
          "Identified key brand moments and themes to communicate.",
          "Set the tone — refined, modern, and distinctive.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Location scouting and scheduling coordination.",
          "Shot list and storyboard preparation for both films.",
          "Crew, equipment, and styling planning.",
        ],
      },
      {
        title: "Production",
        points: [
          "Cinematic filming across locations suited to the brand aesthetic.",
          "Detail and wide shots to capture the full brand story.",
          "Multiple coverage options for a flexible edit.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Editing into two cohesive, brand-consistent films.",
          "Colour grading for a refined, premium look.",
          "Sound design, music sync, and motion graphics.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered two polished branding films ready for digital and social use.",
      "Gave Glome a strong, consistent visual identity across their content.",
      "Content built for use across campaigns, social platforms, and presentations.",
    ],
    clientInstagram: "https://www.instagram.com/glome.club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    slug: "capten-amz",
    title: "Capten AMZ",
    subtitle: "High-energy social content built to go viral.",
    category: "Social Media",
    client: "Capten AMZ",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "Two fast-paced social media films for Capten AMZ — bold, energetic visuals crafted to capture attention and drive engagement across digital and social platforms.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/captenamzb.jpeg",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/captenAMZ/CaptenAMZ1.mp4", label: "CAPTEN AMZ — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/captenAMZ/CaptenAMZ3.mp4", label: "CAPTEN AMZ — FILM TWO" },
    ],
    snaps: [],
    scopeOverview: "",
    scopePhases: [],
    timeline: "",
    budget: "",
    outcomes: [],
    clientInstagram: "",
  },
  {
    slug: "new-times-roman",
    title: "Fashion Films",
    subtitle: "Fashion filmmaking at its finest.",
    category: "Fashion Films",
    horizontalVideos: true,
    client: "New Times Roman",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "A cinematic fashion film for New Times Roman — bold, editorial visuals that bring the collection to life with movement, mood, and style.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/SQ%20productions%20banner.png",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Fashion%20Films/fashion%20film.mp4", label: "NEW TIMES ROMAN" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Fashion%20Films/Espico%20pink.mp4",  label: "ESPICO PINK" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of a fashion film for New Times Roman, crafted to showcase the collection with cinematic style and editorial precision.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined an editorial visual language to match the collection's identity.",
          "Identified key looks and styling moments to capture on camera.",
          "Set the tone — cinematic, bold, and high-fashion.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Location scouting and casting for the fashion film.",
          "Shot list and storyboard preparation.",
          "Styling, wardrobe, and crew planning.",
        ],
      },
      {
        title: "Production",
        points: [
          "Cinematic filming of the collection in motion.",
          "Editorial lighting and camera work to elevate each look.",
          "Detail and wide shots for a dynamic edit.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Editing into a polished, cohesive fashion film.",
          "Colour grading for a bold, editorial look.",
          "Sound design and music sync for final delivery.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production, shoot, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered a polished fashion film ready for social and editorial use.",
      "Gave New Times Roman a cinematic visual identity for the collection.",
      "Content built for campaigns, lookbooks, and social platforms.",
    ],
    clientInstagram: "",
  },
  {
    slug: "al-fatah",
    title: "AL FATAH",
    subtitle: "Product films that command attention.",
    category: "Product",
    client: "AL FATAH",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "Two sharp, detail-driven product films for AL FATAH — clean visuals built to showcase the product and perform across social and retail platforms.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/alfatahb.jpeg",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Al%20fatah/Al%20fatah%201.mp4", label: "AL FATAH — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Al%20fatah/al%20fatah%202.mp4", label: "AL FATAH — FILM TWO" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of two product films for AL FATAH, built to highlight the product with clean, high-impact visuals for social media and retail use.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a bold, product-first visual style to match the brand.",
          "Identified key product features and details to capture on camera.",
          "Set the tone — clean, confident, and premium.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Set design and styling for product-focused shots.",
          "Shot list preparation for detail and lifestyle angles.",
          "Lighting and camera setup planning.",
        ],
      },
      {
        title: "Production",
        points: [
          "Multi-angle filming of the product in detail and in use.",
          "Macro and lifestyle shots for a versatile edit.",
          "Multiple coverage options across both films.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Editing into two distinct short-form product films.",
          "Colour grading for a bold, premium look.",
          "Sound design and motion graphics for titles and highlights.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered two polished product films ready for social and retail use.",
      "Gave AL FATAH a consistent, high-impact visual identity.",
      "Content built for reuse across ads, product pages, and social platforms.",
    ],
    clientInstagram: "",
  },
  {
    slug: "sanwal",
    title: "Sanwal",
    subtitle: "Product films built to impress.",
    category: "Product",
    client: "Sanwal Crafts",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "Two product films produced for Sanwal Crafts — clean, detail-driven visuals that showcase the craft and quality of the product across social and retail platforms.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/SanwalBanner.png",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/sanwal/sanwal%20(2).mp4", label: "SANWAL — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/sanwal/sanwal%20(1).mp4", label: "SANWAL — FILM TWO" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of two product films for Sanwal Crafts, built to highlight craftsmanship and quality with clean visuals optimised for social media and retail use.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a clean, craft-focused visual style to reflect the brand.",
          "Identified key product details and moments to highlight on camera.",
          "Set the tone — refined, detailed, and authentic.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Set design and styling for product-focused shots.",
          "Shot list preparation for detail and lifestyle angles.",
          "Lighting and camera setup planning for optimal product presentation.",
        ],
      },
      {
        title: "Production",
        points: [
          "Multi-angle filming of the product in detail and in use.",
          "Close-up shots to highlight craftsmanship and material quality.",
          "Multiple coverage options for a flexible edit.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Editing into two polished short-form product films.",
          "Colour grading for a clean, premium look.",
          "Sound design and motion graphics for titles and product highlights.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered two polished product films ready for social and retail use.",
      "Gave Sanwal Crafts a refined visual identity for their campaign.",
      "Content built for reuse across ads, product pages, and social platforms.",
    ],
    clientInstagram: "https://www.instagram.com/sanwal_crafts_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    slug: "bolt-cricket",
    title: "Bolt Cricket",
    subtitle: "Sports content built to energise.",
    category: "Product",
    client: "Bolt Cricket",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "Two high-energy product films for Bolt Cricket — bold, fast-paced visuals built to showcase the brand and drive excitement across social and digital platforms.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/blotcricketb.jpeg",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Bolt%20Cricket/bolt%20cricket1.mp4", label: "BOLT CRICKET — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Bolt%20Cricket/bolt%20cricket2.mp4", label: "BOLT CRICKET — FILM TWO" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of two product films for Bolt Cricket, built to capture the energy and identity of the brand with bold visuals optimised for social media and digital use.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a high-energy, sport-first visual style to match the brand.",
          "Identified key product moments and brand themes to capture on camera.",
          "Set the tone — bold, fast-paced, and impactful.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Set design and styling for product-focused shots.",
          "Shot list preparation for action and detail angles.",
          "Lighting and camera setup planning for optimal product presentation.",
        ],
      },
      {
        title: "Production",
        points: [
          "Multi-angle filming of the product in action and in detail.",
          "Dynamic shots to convey the brand's sporting energy.",
          "Multiple coverage options for a flexible edit.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Fast-paced editing into two distinct short-form product films.",
          "Colour grading for a bold, high-impact look.",
          "Sound design and motion graphics for titles and product highlights.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered two polished product films ready for social and digital use.",
      "Gave Bolt Cricket a high-energy visual identity for their campaign.",
      "Content built for reuse across ads, product pages, and social platforms.",
    ],
    clientInstagram: "",
  },
  {
    slug: "florabysheen",
    title: "Flora by Sheen",
    subtitle: "Elegant product films built to impress.",
    category: "Social Media",
    client: "Flora by Sheen",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "Two elegant product films for Flora by Sheen — clean, detail-driven visuals that showcase the brand's beauty and craftsmanship across social and retail platforms.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/florab.jpeg",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/florabysheen/florabysheen1.mp4", label: "FLORA BY SHEEN — FILM ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/florabysheen/florabysheen2.mp4", label: "FLORA BY SHEEN — FILM TWO" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of two product films for Flora by Sheen, designed to highlight the brand's elegance and quality with clean, detail-focused visuals for social and retail use.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a clean, elegant visual style suited to the brand's identity.",
          "Identified key product details and lifestyle moments to capture.",
          "Set the tone — refined, minimal, and premium.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Set design and styling for product-focused shots.",
          "Shot list preparation for macro and lifestyle angles.",
          "Lighting setup planning for a soft, premium look.",
        ],
      },
      {
        title: "Production",
        points: [
          "Macro and multi-angle filming of the product.",
          "Lifestyle shots showing the product in context.",
          "Multiple coverage options for a flexible edit.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Editing into two polished short-form product films.",
          "Colour grading for a clean, elegant brand look.",
          "Sound design and motion graphics for titles.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered two polished product films ready for social and retail use.",
      "Gave Flora by Sheen a refined visual identity across its content.",
      "Content built for reuse across ads, product pages, and social platforms.",
    ],
    clientInstagram: "",
  },
  {
    slug: "mukalma",
    title: "Mukalma",
    subtitle: "Conversations captured with intention.",
    category: "Podcast",
    client: "Mukalma",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "A podcast production series for Mukalma — cinematic, conversation-driven content filmed and edited to engage audiences across digital and social platforms.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/projectbanner/mukalmab.jpeg",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Mukalma/mukalma1.mp4", label: "MUKALMA — EPISODE ONE" },
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Mukalma/mukalma2.mp4", label: "MUKALMA — EPISODE TWO" },
    ],
    snaps: ["/images/portfolio/placeholder.png", "/images/portfolio/placeholder.png", "/images/portfolio/placeholder.png"],
    scopeOverview:
      "Full production of podcast episodes for Mukalma, designed to deliver clean, professional conversation content with cinematic visuals built for digital distribution.",
    scopePhases: [
      {
        title: "Pre-Production",
        points: [
          "Set and lighting design for a clean, professional podcast environment.",
          "Camera and audio setup for multi-angle coverage.",
          "Planning for consistent visual identity across episodes.",
        ],
      },
      {
        title: "Production",
        points: [
          "Multi-camera filming of each podcast episode.",
          "Professional audio capture for broadcast-quality sound.",
          "Direction to ensure natural, engaging on-screen conversations.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Editing into polished episode cuts optimised for digital platforms.",
          "Colour grading for a consistent, professional look.",
          "Sound mixing and motion graphics for titles and branding.",
        ],
      },
    ],
    timeline: "Ongoing production series.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered polished podcast episodes ready for digital and social distribution.",
      "Established a consistent visual identity for the Mukalma brand.",
      "Content built for reuse across clips, promos, and full-length releases.",
    ],
    clientInstagram: "",
    youtubeChannel: "https://www.youtube.com/@MuhammadMoeedNaeem",
  },
  {
    slug: "broadway-jehlum",
    title: "Broadway Jehlum Architectural DVC",
    subtitle: "Architecture brought to life on screen.",
    category: "Commercial",
    horizontalVideos: true,
    client: "Broadway Jehlum",
    year: "2025",
    services: ["Cinematography", "Direction", "Post Production"],
    description:
      "A cinematic DVC for Broadway Jehlum — an architectural showcase film crafted to highlight the vision, design, and scale of the project with bold, professional visuals.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/SQ%20productions%20banner.png",
    videos: [
      { src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Commercial/comercial.mp4", label: "BROADWAY JEHLUM — DVC" },
    ],
    snaps: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    scopeOverview:
      "Full production of an architectural DVC for Broadway Jehlum, designed to showcase the project's design and scale with cinematic visuals built for marketing and presentation.",
    scopePhases: [
      {
        title: "Concept Development",
        points: [
          "Defined a cinematic visual style to reflect the architectural vision.",
          "Planned key angles and sequences to highlight design and scale.",
          "Set the tone — professional, clean, and impressive.",
        ],
      },
      {
        title: "Pre-Production",
        points: [
          "Location planning and scheduling coordination.",
          "Shot list preparation for architectural coverage.",
          "Equipment and crew planning for on-site filming.",
        ],
      },
      {
        title: "Production",
        points: [
          "Wide and detail shots to capture the full architectural scope.",
          "Drone and ground-level coverage for visual variety.",
          "On-location audio and ambient capture.",
        ],
      },
      {
        title: "Post-Production",
        points: [
          "Editing into a polished architectural DVC.",
          "Colour grading for a clean, premium cinematic look.",
          "Sound design, music, and motion graphics.",
        ],
      },
    ],
    timeline: "Completed over 2 weeks — pre-production, shooting, and post-production delivery.",
    budget: "Budget details available upon request.",
    outcomes: [
      "Delivered a polished architectural DVC ready for marketing and presentation.",
      "Captured Broadway Jehlum's vision with cinematic, professional visuals.",
      "Content built for use across digital platforms and investor presentations.",
    ],
    clientInstagram: "",
  },
];

export const SERVICES = [
  {
    title: "Pre-Production",
    description:
      "Pre-production serves as the pivotal phase in any creative endeavor — where ideas become actionable plans through scripting, storyboarding, and careful planning.",
    href: "/services",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/pre%20production.jfif",
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
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/production.jfif",
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
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/post%20production.jfif",
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

export const SERVICE_ALBUM_CARDS = [
  {
    title: "AI Content Creation",
    slug: "ai-generation",
    subtitle: "Where imagination meets intelligence.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/AI%20CONTENT%20CREATION.png",
    overview:
      "AI is a creative multiplier, not a shortcut. We pair the latest generative tools with real production craft to turn your ideas into polished, on-brand content fast — without losing the human touch.",
    whatWeDo: [
      { title: "AI Video Generation", description: "Concept-to-clip pieces built with current generative video models, refined by our editors before they ever ship." },
      { title: "AI Voiceovers & Avatars", description: "Natural-sounding multilingual narration and digital presenters for content that scales without a studio day." },
      { title: "Image-to-Video & Product Renders", description: "Turn static product shots into scroll-stopping motion content in a fraction of the usual turnaround." },
      { title: "Rapid Iteration", description: "Multiple creative directions explored and delivered in days, so you can test and pick what actually works." },
    ],
  },
  {
    title: "Video Editing",
    slug: "video-editing",
    subtitle: "Every cut tells a story.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/editing.png",
    overview:
      "Great footage is only half the story. Our editors shape raw clips into sharp, story-driven videos built for how people actually watch today — fast-paced, vertical-first, and made to hold attention.",
    whatWeDo: [
      { title: "Narrative Editing", description: "Pacing, structure, and sound design that keep viewers watching to the very last frame." },
      { title: "Short-Form Cuts", description: "Reels, Shorts, and TikTok edits built for scroll-stopping retention from the first second." },
      { title: "Color Grading & Finishing", description: "A consistent, cinematic look applied across every deliverable, on every platform." },
      { title: "Multi-Platform Versioning", description: "One shoot, reformatted and resized for every feed you actually publish to." },
    ],
  },
  {
    title: "Content Creation",
    slug: "content-creation",
    subtitle: "From brief to brilliant, every time.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/Content%20Creation.png",
    overview:
      "From concept to caption, we build content systems — not one-off posts. Every piece is planned around your brand voice and built to perform on the platforms your audience actually lives on.",
    whatWeDo: [
      { title: "Content Strategy & Planning", description: "Calendars and content pillars built around what's resonating right now, not last year's playbook." },
      { title: "Photo & Video Production", description: "On-location and studio shoots covering everything your channels need in a single session." },
      { title: "Copywriting", description: "Captions, scripts, and on-screen text that sound like your brand, not a generic template." },
      { title: "Repurposing", description: "One shoot stretched into weeks of platform-ready content across every channel." },
    ],
  },
  {
    title: "Social Media Management",
    slug: "social-media",
    subtitle: "Content that connects and converts.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/Social%20Media%20Management.png",
    overview:
      "Posting isn't a strategy. We manage the full loop — planning, publishing, community, and reporting — so your channels grow with intention instead of guesswork.",
    whatWeDo: [
      { title: "Platform Strategy", description: "Tailored playbooks for Instagram, TikTok, YouTube, and LinkedIn, built around your goals." },
      { title: "Content Calendar & Publishing", description: "Consistent, on-time posting across every channel, planned weeks ahead." },
      { title: "Community Management", description: "Real replies and engagement that build trust, not just impressions." },
      { title: "Performance Reporting", description: "Clear, monthly insights on what's actually driving growth — and what to fix." },
    ],
  },
  {
    title: "Branding & Graphic Design",
    slug: "graphic-design",
    subtitle: "Visual identity that stands out.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/Branding%20%26%20Graphic%20Design.png",
    overview:
      "Your brand is the first impression before anyone watches a single video. We build visual identities — logos, systems, and templates — that stay consistent everywhere your business shows up.",
    whatWeDo: [
      { title: "Logo & Identity Design", description: "Distinctive marks built to scale across every touchpoint, from app icon to billboard." },
      { title: "Brand Guidelines", description: "Colors, type, and tone documented so your brand stays consistent as your team grows." },
      { title: "Social & Marketing Templates", description: "On-brand layouts your team can reuse fast, without starting from scratch each time." },
      { title: "Print & Digital Collateral", description: "Decks, packaging, and marketing assets that match your identity down to the pixel." },
    ],
  },
  {
    title: "Performance Marketing",
    slug: "marketing",
    subtitle: "Campaigns that drive real results.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/Performance%20marketing.png",
    overview:
      "Creative only matters if it converts. We pair production with performance marketing — running, testing, and optimizing campaigns so your content turns views into real business results.",
    whatWeDo: [
      { title: "Paid Social Campaigns", description: "Meta, TikTok, and YouTube ads planned, launched, and managed end-to-end." },
      { title: "Creative Testing", description: "Multiple hooks and edits tested side-by-side to find what actually converts." },
      { title: "Audience Targeting", description: "Campaigns built around the people most likely to buy, not just broad reach." },
      { title: "ROI Reporting", description: "Transparent metrics tied directly to spend, leads, and revenue — no vanity numbers." },
    ],
  },
  {
    title: "Content Strategies",
    slug: "content-strategies",
    subtitle: "A plan behind every post.",
    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/Content%20Strategies.png",
    overview:
      "Random posting doesn't build a brand. We build the strategy behind the content — the plan, the pillars, and the direction — so everything you publish moves toward a clear goal instead of chasing trends.",
    whatWeDo: [
      { title: "Brand & Content Audits", description: "A clear-eyed look at what's working, what isn't, and where the real opportunity is." },
      { title: "Content Pillars & Messaging", description: "A defined framework for what you post and why, so every piece reinforces the same story." },
      { title: "Platform Roadmaps", description: "A tailored plan for where to show up and how, matched to where your audience actually spends time." },
      { title: "Growth Frameworks", description: "Ongoing strategy reviews that adapt to real performance data, not guesswork." },
    ],
  },
];

export const STUDIO_GALLERY = {
  heading: "Rent, Shoot, Wow: Our Studio Awaits!",
  subtext:
    "We've got the coolest tech and all the resources to bring your ideas to life. Book a tour and come be a part of the excitement — we're eager to show you around with a smile!",
  ctaLabel: "Book a Tour",
  ctaHref: "/contact",
  slides: [
    { title: "Professional Gears",      image: "/images/portfolio/placeholder.png" },
    { title: "Recording Facility",      image: "/images/portfolio/placeholder.png" },
    { title: "Professional Setup",      image: "/images/portfolio/placeholder.png" },
    { title: "Premium Backdrops",       image: "/images/portfolio/placeholder.png" },
    { title: "Green Screen",            image: "/images/portfolio/placeholder.png" },
    { title: "Beautiful Interior",      image: "/images/portfolio/placeholder.png" },
    { title: "Open Space",              image: "/images/portfolio/placeholder.png" },
    { title: "Natural Light Source",    image: "/images/portfolio/placeholder.png" },
    { title: "Rooftop",                 image: "/images/portfolio/placeholder.png" },
  ],
};

export const SERVICE_DETAILS = [
  {
    title: "Pre-Production",
    intro1: "Before the cameras roll, the magic of video production begins with pre-production. This is where your ideas take shape, scripts are written, and plans are made.",
    intro2: "Pre-production is the critical planning phase where we lay the foundation for your video project. This stage involves:",
    images: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    items: [
      {
        title: "Concept Development",
        description: "We work closely with you to brainstorm ideas, themes, and concepts that align with your goals and vision. This is where the creative magic begins.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M104,188a28,28,0,1,1-28-28A28,28,0,0,1,104,188Z" opacity="0.2"></path><path d="M76,152a36,36,0,1,0,36,36A36,36,0,0,0,76,152Zm0,56a20,20,0,1,1,20-20A20,20,0,0,1,76,208ZM42.34,106.34,56.69,92,42.34,77.66A8,8,0,0,1,53.66,66.34L68,80.69,82.34,66.34A8,8,0,0,1,93.66,77.66L79.31,92l14.35,14.34a8,8,0,0,1-11.32,11.32L68,103.31,53.66,117.66a8,8,0,0,1-11.32-11.32Zm187.32,96a8,8,0,0,1-11.32,11.32L204,199.31l-14.34,14.35a8,8,0,0,1-11.32-11.32L192.69,188l-14.35-14.34a8,8,0,0,1,11.32-11.32L204,176.69l14.34-14.35a8,8,0,0,1,11.32,11.32L215.31,188Zm-45.19-89.51c-6.18,22.33-25.32,41.63-46.53,46.93A8.13,8.13,0,0,1,136,160a8,8,0,0,1-1.93-15.76c15.63-3.91,30.35-18.91,35-35.68,3.19-11.5,3.22-29-14.71-46.9L152,59.31V80a8,8,0,0,1-16,0V40a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H163.31l2.35,2.34C183.9,68.59,190.58,90.78,184.47,112.83Z"></path></g></svg>',
      },
      {
        title: "Scriptwriting",
        description: "Our experienced scriptwriters craft compelling narratives that effectively convey your message. Whether it's a commercial, corporate video, or any other format, we ensure that the script resonates with your target audience.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M200,176H104s8,6,8,16a24,24,0,0,1-48,0V64A24,24,0,0,0,40,40H176a24,24,0,0,1,24,24Z" opacity="0.2"></path><path d="M96,104a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,104Zm8,40h64a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Zm128,48a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64a16,16,0,0,0-32,0c0,5.74,4.83,9.62,4.88,9.66h0A8,8,0,0,1,24,88a7.89,7.89,0,0,1-4.79-1.61h0C18.05,85.54,8,77.61,8,64A32,32,0,0,1,40,32H176a32,32,0,0,1,32,32V168h8a8,8,0,0,1,4.8,1.6C222,170.46,232,178.39,232,192ZM96.26,173.48A8.07,8.07,0,0,1,104,168h88V64a16,16,0,0,0-16-16H67.69A31.71,31.71,0,0,1,72,64V192a16,16,0,0,0,32,0c0-5.74-4.83-9.62-4.88-9.66A7.82,7.82,0,0,1,96.26,173.48ZM216,192a12.58,12.58,0,0,0-3.23-8h-94a26.92,26.92,0,0,1,1.21,8,31.82,31.82,0,0,1-4.29,16H200A16,16,0,0,0,216,192Z"></path></g></svg>',
      },
      {
        title: "Storyboarding",
        description: "Visual storytelling is key to engaging your audience. We create storyboards that outline the visual sequence, shot angles, and transitions, providing a blueprint for the shoot.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M232,56V200H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H24V56H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32Z" opacity="0.2"></path><path d="M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"></path></g></svg>',
      },
      {
        title: "Location Scouting",
        description: "The right location can make or break a video. We scout and select the ideal settings, whether it's a studio, outdoor location, or a unique environment that suits your project.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M160,72V216L96,184V40Z" opacity="0.2"></path><path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z"></path></g></svg>',
      },
      {
        title: "Casting and Talent Management",
        description: "We handle talent auditions, casting, and management. Our goal is to select the perfect actors, presenters, or hosts who bring your script to life.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M160,112a32,32,0,1,1-32-32A32,32,0,0,1,160,112Z" opacity="0.2"></path><path d="M224,40V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h36A8,8,0,0,1,224,40Zm-8,132a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h36a8,8,0,0,0,8-8V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v36a8,8,0,0,0,8,8H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V76A8,8,0,0,0,40,84Zm136,92a8,8,0,0,1-6.41-3.19,52,52,0,0,0-83.2,0,8,8,0,1,1-12.8-9.62A67.94,67.94,0,0,1,101,141.51a40,40,0,1,1,53.94,0,67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,176,176Zm-48-40a24,24,0,1,0-24-24A24,24,0,0,0,128,136Z"></path></g></svg>',
      },
      {
        title: "Equipment and Crew Planning",
        description: "We ensure that the right equipment and skilled crew members are in place for a successful shoot. This includes camera selection, lighting setup, and more.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M195.88,60.12a96,96,0,1,0,0,135.76A96,96,0,0,0,195.88,60.12Zm-55.34,103h0l-36.68-6.69h0L91.32,121.3l24.14-28.41h0l36.68,6.69,12.54,35.12Z" opacity="0.2"></path><path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,65.78a88.18,88.18,0,0,1,11,13.48L167.55,119,139.63,40.78A87.34,87.34,0,0,1,190.23,65.78ZM155.59,133l-18.16,21.37-27.59-5L100.41,123l18.16-21.37,27.59,5ZM65.77,65.78a87.34,87.34,0,0,1,56.66-25.59l17.51,49L58.3,74.32A88,88,0,0,1,65.77,65.78ZM46.65,161.54a88.41,88.41,0,0,1,2.53-72.62l51.21,9.35Zm19.12,28.68a88.18,88.18,0,0,1-11-13.48L88.45,137l27.92,78.18A87.34,87.34,0,0,1,65.77,190.22Zm124.46,0a87.34,87.34,0,0,1-56.66,25.59l-17.51-49,81.64,14.91A88,88,0,0,1,190.23,190.22Zm-34.62-32.49,53.74-63.27a88.41,88.41,0,0,1-2.53,72.62Z"></path></g></svg>',
      },
      {
        title: "Production Timeline",
        description: "We establish a clear timeline for the pre-production phase to keep everything on track and ensure timely project delivery.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z"></path></g></svg>',
      },
    ],
  },
  {
    title: "Production",
    intro1: "Our skilled cinematographers expertly frame and capture your content, ensuring that every shot is visually stunning and engaging.",
    intro2: "Elevate your visuals with breathtaking aerial footage. Our drone videography services provide stunning perspectives that add a dynamic dimension to your videos.",
    images: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    items: [
      {
        title: "Cinematography",
        description: "Our skilled cinematographers expertly frame and capture your content, ensuring that every shot is visually stunning and engaging.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M67.71,64.59l47.79,27.6L40.43,112,32.27,82a7.76,7.76,0,0,1,5.58-9.52ZM199.84,37.76a7.9,7.9,0,0,0-9.66-5.49L126.61,49.05,174.4,76.64,208,67.77Z" opacity="0.2"></path><path d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"></path></g></svg>',
      },
      {
        title: "Drone Videography",
        description: "Elevate your visuals with breathtaking aerial footage. Our drone videography services provide stunning perspectives that add a dynamic dimension to your videos.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M200,80v96a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h40A8,8,0,0,1,200,80ZM104,32H64a8,8,0,0,0-8,8V176a8,8,0,0,0,8,8h40a8,8,0,0,0,8-8V40A8,8,0,0,0,104,32Z" opacity="0.2"></path><path d="M64,192h40a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V176A16,16,0,0,0,64,192ZM64,40h40V176H64ZM224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-72-24h40a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H152a16,16,0,0,0-16,16v96A16,16,0,0,0,152,192Zm0-112h40v96H152Z"></path></g></svg>',
      },
      {
        title: "Live Streaming",
        description: "We're well-versed in live streaming, enabling you to broadcast events, presentations, and content in real-time to a global audience.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M160,128a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z" opacity="0.2"></path><path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Zm73.71,7.14a80,80,0,0,1-14.08,22.2,8,8,0,0,1-11.92-10.67,63.95,63.95,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67,80.08,80.08,0,0,1,14.08,84.47ZM69,103.09a64,64,0,0,0,11.26,67.58,8,8,0,0,1-11.92,10.67,79.93,79.93,0,0,1,0-106.67A8,8,0,1,1,80.29,85.34,63.77,63.77,0,0,0,69,103.09ZM248,128a119.58,119.58,0,0,1-34.29,84,8,8,0,1,1-11.42-11.2,103.9,103.9,0,0,0,0-145.56A8,8,0,1,1,213.71,44,119.58,119.58,0,0,1,248,128ZM53.71,200.78A8,8,0,1,1,42.29,212a119.87,119.87,0,0,1,0-168,8,8,0,1,1,11.42,11.2,103.9,103.9,0,0,0,0,145.56Z"></path></g></svg>',
      },
      {
        title: "Steadicam and Gimbal Work",
        description: "For silky-smooth and stabilized footage, our Steadicam and gimbal work ensures that every shot is free from shaky distractions.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M81,175A24,24,0,1,1,47,175,24,24,0,0,1,81,175ZM209,47A24,24,0,1,0,209,81,24,24,0,0,0,209,47Z" opacity="0.2"></path><path d="M214.64,41.36a32,32,0,0,0-50.2,38.89L80.25,164.44a32.06,32.06,0,0,0-38.89,4.94h0a32,32,0,1,0,50.2,6.37l84.19-84.19a32,32,0,0,0,38.89-50.2Zm-139.33,162a16,16,0,0,1-22.64-22.64h0a16,16,0,0,1,22.63,0h0A16,16,0,0,1,75.31,203.33Zm128-128a16,16,0,1,1,0-22.63A16,16,0,0,1,203.33,75.3Z"></path></g></svg>',
      },
      {
        title: "Multi-Camera Setup",
        description: "Multi-camera setups add versatility and dynamism to your video. We utilize multiple cameras to capture different angles and perspectives, enhancing your storytelling.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z" opacity="0.2"></path><path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path></g></svg>',
      },
      {
        title: "Time-Lapse and Slow Motion",
        description: "Time-lapse and slow-motion techniques are powerful storytelling tools. Our team excels in creating time-lapse sequences and slow-motion footage that captivate audiences.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M144,128a7.76,7.76,0,0,1-3.63,6.59L52.18,190.74A7.91,7.91,0,0,1,40,184.15V71.85a7.91,7.91,0,0,1,12.18-6.59l88.19,56.15A7.76,7.76,0,0,1,144,128Zm100.37-6.59L156.18,65.26A7.91,7.91,0,0,0,144,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15A7.8,7.8,0,0,0,244.37,121.41Z" opacity="0.2"></path><path d="M248.67,114.66,160.48,58.5A15.91,15.91,0,0,0,136,71.84v37.3L56.48,58.5A15.91,15.91,0,0,0,32,71.84V184.16A15.92,15.92,0,0,0,56.48,197.5L136,146.86v37.3a15.92,15.92,0,0,0,24.48,13.34l88.19-56.16a15.8,15.8,0,0,0,0-26.68ZM48,183.94V72.07L135.82,128Zm104,0V72.07L239.82,128Z"></path></g></svg>',
      },
      {
        title: "Green Screen and Chroma Key",
        description: "For projects that require background replacement or visual effects, our green screen and chroma key services allow us to create virtually any environment, enhancing your storytelling.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M52.3,160h89l-38.62,38.63a32,32,0,0,1-32.06,8h0l-20,8.74a8,8,0,0,1-8.86-1.67,5.74,5.74,0,0,1-1.2-6.36l9.19-21.06h0A32.07,32.07,0,0,1,52.3,160ZM207.23,47.51c-11.07-10.49-28.65-9.83-39.44,1l-25,25.1-4.89-4.88a16,16,0,0,0-22.63,0l-9,9a8,8,0,0,0,0,11.31L167,149.66a8,8,0,0,0,11.31,0l9-9a16,16,0,0,0,0-22.63l-4.88-4.89L207.8,87.66A28,28,0,0,0,207.23,47.51Z" opacity="0.2"></path><path d="M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L142.8,62.2a24,24,0,0,0-33.14.77l-9,9a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.65,13.65,0,0,0,36,219.29a15.9,15.9,0,0,0,17.71,3.36L71.24,215a39.9,39.9,0,0,0,37.05-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l9-9a24,24,0,0,0,.74-33.18l19.75-19.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.9L57,189.41a8,8,0,0,0,.25-5.75,24,24,0,0,1,.1-15.69H122Zm41-41H70.07l44-44,33.94,34Zm64.18-70-25.37,25.52a8,8,0,0,0,0,11.31l4.89,4.88a8,8,0,0,1,0,11.32l-9,9L112,83.26l9-9a8,8,0,0,1,11.31,0l4.89,4.89a8,8,0,0,0,5.65,2.34h0a8,8,0,0,0,5.66-2.36l24.94-25.09c7.81-7.82,20.5-8.18,28.29-.81a20,20,0,0,1,.39,28.7Z"></path></g></svg>',
      },
      {
        title: "Dynamic Webinars",
        description: "Webinars are an essential tool for online engagement. We can create and manage dynamic webinars, making sure your content is engaging and informative.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M224,64V176a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z" opacity="0.2"></path><path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z"></path></g></svg>',
      },
    ],
  },
  {
    title: "Post-Production",
    intro1: "The real magic happens in post-production. This is where we take the raw footage and craft it into a polished, engaging video.",
    intro2: "Our post-production services cover video editing, sound design, color correction, visual effects, and more. We pay meticulous attention to detail to ensure your video looks and sounds its best.",
    images: [
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
      "/images/portfolio/placeholder.png",
    ],
    items: [
      {
        title: "Video Editing",
        description: "Our skilled editors meticulously assemble and edit the footage, creating a seamless, coherent, and compelling narrative that captivates your audience.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M40.2,95.8a28,28,0,1,1,39.6,0A28,28,0,0,1,40.2,95.8Zm0,64.4a28,28,0,1,0,39.6,0A28,28,0,0,0,40.2,160.2Z" opacity="0.2"></path><path d="M157.73,113.13A8,8,0,0,1,159.82,102L227.48,55.7a8,8,0,0,1,9,13.21l-67.67,46.3a7.92,7.92,0,0,1-4.51,1.4A8,8,0,0,1,157.73,113.13Zm80.87,85.09a8,8,0,0,1-11.12,2.08L136,137.7,93.49,166.78a36,36,0,1,1-9-13.19L121.83,128,84.44,102.41a35.86,35.86,0,1,1,9-13.19l143,97.87A8,8,0,0,1,238.6,198.22ZM80,180a20,20,0,1,0-5.86,14.14A19.85,19.85,0,0,0,80,180ZM74.14,90.13a20,20,0,1,0-28.28,0A19.85,19.85,0,0,0,74.14,90.13Z"></path></g></svg>',
      },
      {
        title: "Color Grading",
        description: "We enhance the visuals by applying color grading techniques, ensuring that your video looks its best with vibrant colors, a consistent mood, and a professional finish.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M224,127.17a96.48,96.48,0,0,1-2.39,22.18A24,24,0,0,1,198.21,168H152a24,24,0,0,0-24,24,24,24,0,0,1-32,22.61C58.73,201.44,32,169.81,32,128a96,96,0,0,1,95-96C179.84,31.47,223.55,74.35,224,127.17Z" opacity="0.2"></path><path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"></path></g></svg>',
      },
      {
        title: "Audio Enhancement",
        description: "Clear and impactful audio is vital for a memorable video. We provide audio enhancement services to make sure your message is conveyed with crystal clarity.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M232,128c-52,110.85-78,55.43-104,0ZM24,128H128C102,72.57,76,17.15,24,128Z" opacity="0.2"></path><path d="M239.24,131.4c-22,46.8-41.4,68.6-61.2,68.6-25.1,0-40.73-33.32-57.28-68.6C107.7,103.56,92.9,72,78,72c-16.4,0-36.31,37.21-46.72,59.4a8,8,0,0,1-14.48-6.8C38.71,77.8,58.16,56,78,56c25.1,0,40.73,33.32,57.28,68.6C148.3,152.44,163.1,184,178,184c16.4,0,36.31-37.21,46.72-59.4a8,8,0,0,1,14.48,6.8Z"></path></g></svg>',
      },
      {
        title: "3D Animation and CGI",
        description: "To add a touch of magic to your project, we offer 3D animation and CGI services that create stunning visual effects and immersive 3D elements.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"></path><path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path></g></svg>',
      },
      {
        title: "Subtitles and Closed Captions",
        description: "We can add subtitles and closed captions to make your content accessible to a broader audience, ensuring that your message reaches everyone.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M232,164c0,15.46-14.33,28-32,28s-32-12.54-32-28,14.33-28,32-28S232,148.54,232,164ZM34.82,152h90.36L80,56Z" opacity="0.2"></path><path d="M87.24,52.59a8,8,0,0,0-14.48,0l-64,136a8,8,0,1,0,14.48,6.81L39.9,160h80.2l16.66,35.4a8,8,0,1,0,14.48-6.81ZM47.43,144,80,74.79,112.57,144ZM200,96c-12.76,0-22.73,3.47-29.63,10.32a8,8,0,0,0,11.26,11.36c3.8-3.77,10-5.68,18.37-5.68,13.23,0,24,9,24,20v3.22A42.76,42.76,0,0,0,200,128c-22.06,0-40,16.15-40,36s17.94,36,40,36a42.73,42.73,0,0,0,24-7.25,8,8,0,0,0,16-.75V132C240,112.15,222.06,96,200,96Zm0,88c-13.23,0-24-9-24-20s10.77-20,24-20,24,9,24,20S213.23,184,200,184Z"></path></g></svg>',
      },
      {
        title: "Whiteboard Animation",
        description: "Whiteboard animation is an engaging way to convey complex ideas. Our whiteboard animation services turn your concepts into captivating visuals that resonate with your audience.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M192,80v96H104a32,32,0,1,0-32-32H64V80Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H53.39a8,8,0,0,0,7.23-4.57,48,48,0,0,1,86.76,0,8,8,0,0,0,7.23,4.57H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,144a24,24,0,1,1,24,24A24,24,0,0,1,80,144Zm136,56H159.43a64.39,64.39,0,0,0-28.83-26.16,40,40,0,1,0-53.2,0A64.39,64.39,0,0,0,48.57,200H40V56H216ZM56,96V80a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V88H72v8a8,8,0,0,1-16,0Z"></path></g></svg>',
      },
      {
        title: "DVD and Blu-ray Authoring",
        description: "If your project is intended for physical distribution, we provide DVD and Blu-ray authoring services, ensuring your content is professionally presented.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M224,128a96,96,0,1,1-28.12-67.88l-45.25,45.25h0A32,32,0,1,0,160,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.2,96a39.77,39.77,0,0,0-5.84-14l34.23-34.24a87.54,87.54,0,0,1,20,48.28ZM152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Zm-24,88A88,88,0,1,1,184.28,60.4L150,94.64A40,40,0,1,0,167.2,136h48.43A88.11,88.11,0,0,1,128,216Z"></path></g></svg>',
      },
      {
        title: "Archiving and Backup",
        description: "We understand the importance of preserving your valuable content. Our archiving and backup services ensure that your video assets are securely stored and easily retrievable for future use.",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style="user-select:none;width:100%;height:100%;display:inline-block;fill:rgb(255,115,0);color:rgb(255,115,0);flex-shrink:0"><g weight="duotone"><path d="M240,128a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.74l0,.1A80,80,0,0,1,240,128Z" opacity="0.2"></path><path d="M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z"></path></g></svg>',
      },
    ],
  },
];

/* Stand-in photos used for all 12 categories until distinct per-category
   photos are sourced — see FIX-SERVICECATEGORIES.md Fix 3. Previously this
   pointed at 3 user-supplied screenshots (a client logo on white, and two
   raw browser screenshots with visible tabs/address bar) — flagged as
   actively wrong, not just generic, so swapped for neutral on-theme
   gradients (no text/logos/UI chrome) until real photos exist. 3 distinct
   files so the fan/auto-cycle swap is visible; once real per-category
   photos exist, replace this shared array with a unique `images` triplet
   per category. */
const CATEGORY_PLACEHOLDER_IMAGES = [
  "/images/services/categories/neutral-1.svg",
  "/images/services/categories/neutral-2.svg",
  "/images/services/categories/neutral-3.svg",
];

export const SERVICE_CATEGORIES = [
  { number: "01", title: "Commercial Video",     description: "Short, impactful visual narratives that promote products, services, or brands with strong storytelling and persuasive visuals.", images: CATEGORY_PLACEHOLDER_IMAGES, projectSlug: "broadway-jehlum" },
  { number: "02", title: "Podcast",              description: "From concept to audio-visual production, we craft podcast content that connects, informs, and keeps your audience coming back for every episode.", images: CATEGORY_PLACEHOLDER_IMAGES, projectSlug: "mukalma" },
  { number: "03", title: "Product Video",        description: "Clean, detail-driven product films that highlight features, craftsmanship, and use-cases to drive conversions.", images: CATEGORY_PLACEHOLDER_IMAGES, projectSlug: "bounceway" },
  { number: "04", title: "Real Estate Video",    description: "Cinematic property walkthroughs and listing videos that showcase every space and help homes sell faster.", images: CATEGORY_PLACEHOLDER_IMAGES, projectSlug: "bukhari-associates" },
  { number: "05", title: "Event Video",          description: "Multi-camera coverage and same-day edits that capture the energy of conferences, launches, and live events.", images: CATEGORY_PLACEHOLDER_IMAGES, projectSlug: "ali-zafar" },
  { number: "06", title: "Educational Video",    description: "Training and e-learning content designed to inform clearly and keep learners engaged from start to finish.", images: CATEGORY_PLACEHOLDER_IMAGES, projectSlug: "capten-amz" },
  { number: "07", title: "Fashion Video",        description: "Stylish, fast-paced visuals that showcase collections and campaigns with editorial polish.", images: CATEGORY_PLACEHOLDER_IMAGES, projectSlug: "new-times-roman" },
  { number: "08", title: "Music Video",          description: "Bold, artist-driven music videos built around concept, choreography, and visual storytelling that matches the sound.", images: CATEGORY_PLACEHOLDER_IMAGES, projectSlug: "music-videos" },
  { number: "09", title: "Lifestyle",            description: "Authentic lifestyle content that captures real moments and connects with audiences on a personal level.", images: CATEGORY_PLACEHOLDER_IMAGES, projectSlug: "saharnoon" },
  { number: "10", title: "Social Media Video",   description: "Platform-native, fast-cut content built to perform across Reels, TikTok, and YouTube Shorts.", images: CATEGORY_PLACEHOLDER_IMAGES, projectSlug: "the-next-dubai" },
];

export const INDUSTRIES = [
  { title: "AI Content Creation",  image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/AI%20Content%20CReationh.jpeg",  description: "Cutting-edge AI-powered content that pushes creative boundaries — from generated visuals to intelligent video production workflows." },
  { title: "Podcast",              image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/Podcasth.jpeg",              description: "From concept to audio-visual production, we craft podcast content that connects, informs, and keeps your audience coming back for every episode." },
  { title: "Video Ads",            image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/Social%20mediah.jpeg",             description: "High-impact video ads built to grab attention, drive clicks, and convert — optimised for every platform and audience." },
  { title: "Editing",              image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/Editingh.jpeg",                     description: "Sharp, precise editing that transforms raw footage into polished, compelling content ready for any screen." },
  { title: "Commercials and Ads",  image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/Commercials%26Adsh.jpeg",          description: "Make a memorable impression. Our short, attention-grabbing commercials showcase your products, services, or brand identity effectively." },
  { title: "Social Media",         image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/video%20adsh.jpeg",                description: "Platform-native, fast-cut content built to perform across Reels, TikTok, and YouTube Shorts — designed for maximum reach and shareability." },
  { title: "Short Films",          image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Serviceimages/short%20filmsh.jpeg",              description: "Intimate, character-driven short films told with cinematic craft and a bold visual voice that resonates with audiences." },
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
  founderInstagram: "https://www.instagram.com/call_me_sheraz/",
  founderBehance: "https://www.behance.net/sqproductions",
  career: [],
};

export const TESTIMONIALS_BG = "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/clientsection.png";

export const TESTIMONIALS = [
  {
    stars: 5,
    quote: "SQ Productions has been a great creative partner for Bounceway. Shooting footwear is all about the details — texture, finish, the right angles — and they nailed it from the first session. The product shots came out sharp and commercial, and the ad edits they put together were punchy and ready to run. They understand how to make a product look desirable on camera and the turnaround on edits has always been smooth. We're happy with every deliverable they've produced for us.",
    name: "Bounceway",
    title: "Footwear Brand · Product shoots, ad creation & video editing",
    logo: "",
  },
  {
    stars: 5,
    quote: "Sheraz Qureshi has been a standout creative partner. As someone who puts a lot of care into how my work is presented publicly, I needed more than just an editor — I needed someone who thinks like a creative director. Sheraz, working as the creative head manager, reviews every piece of content with a sharp eye alongside his team, keeps my social presence consistent, and brings real intentionality to the work. They understand my scale and they match it.",
    name: "Ali Zafar",
    title: "Renowned Music Artist & Performer · Creative Media Manager",
    logo: "",
  },
  {
    stars: 5,
    quote: "SQ Productions has transformed the way Bukhari Associates shows up online. Architecture is a visual field but translating that into engaging social content is harder than it looks — SQ gets it completely. They manage our social media, handle all our video editing, and consistently produce content that reflects the quality and vision of our work. Our online presence has grown significantly since partnering with them and the content always feels premium and on-brand.",
    name: "Bukhari Associates",
    title: "Architecture & Design Firm · Social media, video editing & content creation",
    logo: "",
  },
  {
    stars: 5,
    quote: "The Next Dubai operates in a competitive media space and we needed video content that matched the calibre of the names we feature. SQ Productions delivered exactly that — cinematic, editorial, refined. They understood our brand language without needing much direction and the editing quality on every feature has been consistently excellent. We continue to work with them for ongoing productions.",
    name: "The Next Dubai",
    title: "Editorial Magazine Brand, Dubai · Video production & editing",
    logo: "",
  },
  {
    stars: 4.5,
    quote: "Our platform is built around exclusivity so the content representing it had to feel premium. SQ Productions understood the assignment immediately. The videos they produced for Glome were polished, sophisticated, and felt aligned with what we're building. Their editing sensibility is strong and they were receptive to feedback throughout. A reliable team for any brand with high visual standards.",
    name: "Glome",
    title: "Premium Social Networking App · App promotional video creation & editing",
    logo: "",
  },
  {
    stars: 5,
    quote: "Cricket content lives and dies by speed and SQ Productions keeps up effortlessly. They handle our full editing pipeline — long cuts, reels, highlights — and the quality doesn't suffer for the pace. They've become a core part of how Bolt Cricket operates day-to-day. Dependable, fast, and they know cricket content well.",
    name: "Bolt Cricket",
    title: "Cricket Media & Content Brand · Long-form & short-form video editing",
    logo: "",
  },
  {
    stars: 4.5,
    quote: "We needed a team that understood the local market but could produce content at a professional level. SQ Productions came in, shot our fashion products with care and a good eye for styling, and the edits came back clean and commercial-ready. They're easy to work with on set and the final output has been great for our campaigns.",
    name: "Al Fatah",
    title: "Fashion Retail, Pakistan · On-location shoots & post-production editing",
    logo: "",
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
  { label: "Filming",          image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/filming.jpeg" },
  { label: "Scriptwriting",    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/scriptwrting.jpeg" },
  { label: "Color Grading",    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/colourgrading.jpeg" },
  { label: "Motion Graphics",  image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/motiongraphics.jpeg" },
  { label: "Editing",          image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/editing.jpeg" },
  { label: "Content Creation", image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/content%20creation.jpeg" },
  { label: "Social Media",     image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/socialmedia.jpeg" },
  { label: "Generative AI",    image: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/ai.jpeg" },
];

export const COLLABORATE = {
  heading: ["Got a vision?", "Let's bring it to life on screen."],
  subtext: "From concept to final cut — tell us about your project and let's start creating something great together.",
  ctaLabel: "Let's Collaborate",
  ctaHref: "/contact",
};

export const FOOTER = {
  email: "teamsq.business@gmail.com",
  phone: "+92 316 4479771",
  address: "SQ Productions, 22 CCA, Z-block Sector Z DHA Phase 3, Lahore",
  hours: "Monday - Friday : 9am to 6pm",
  socials: {
    facebook:  "https://www.facebook.com/profile.php?id=61589987776707",
    email:     "mailto:teamsq.business@gmail.com",
    linkedin:  "https://www.linkedin.com/in/sheraz-qureshi410/",
    youtube:   "https://www.youtube.com/@SherazQureshiOfficial",
    instagram: "https://www.instagram.com/sq.productions.co/",
    behance:   "https://www.behance.net/sqproductions",
    tiktok:    "#",
  },
  links: {
    company: [
      { label: "Home",           href: "/" },
      { label: "Projects",       href: "/projects" },
      { label: "About",          href: "/#about" },
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
      { label: "TikTok",    href: "#" },
    ],
  },
};
