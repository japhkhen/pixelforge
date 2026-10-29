export const studio = {
  name: "PixelForge",
  founder: "Efua Mensah",
  role: "Freelance web designer and front-end developer",
  city: "Accra, Ghana",
  neighbourhood: "East Legon",
  address: "No. 12 Lagos Avenue, East Legon, Accra, Ghana",
  email: "hello@pixelforge.studio",
  hours: "Mon – Fri, 8:00 AM – 6:00 PM GMT",
  cv: "/efua-mensah-cv.pdf",
  phones: [
    { display: "0256 206 383", href: "tel:+233256206383" },
    { display: "055 314 0985", href: "tel:+233553140985" },
  ],
  socials: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/pixelforge.studio",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/pixelforge.studio",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/efua-mensah",
    },
    {
      name: "Behance",
      href: "https://www.behance.net/pixelforge",
    },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export type Skill = {
  name: string;
  level: number;
  note: string;
};

export const skills: Skill[] = [
  { name: "Interface design", level: 94, note: "Layout, type, and colour for real businesses" },
  { name: "HTML & CSS", level: 96, note: "Semantic pages that hold up on small screens" },
  { name: "TypeScript", level: 90, note: "Typed components and predictable UI state" },
  { name: "React & Next.js", level: 92, note: "App Router sites with fast, static pages" },
  { name: "Tailwind CSS", level: 95, note: "Design systems that stay consistent" },
  { name: "Figma", level: 91, note: "Wireframes and polished page designs" },
  { name: "Brand identity", level: 86, note: "Marks, palettes, and voice for new studios" },
  { name: "Content structure", level: 84, note: "Page outlines clients can actually write to" },
];

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  kind: "Work" | "Education";
  detail: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "2022 — Present",
    title: "Founder and lead developer",
    place: "PixelForge, East Legon, Accra",
    kind: "Work",
    detail:
      "I run a small studio for Ghanaian brands that have outgrown a Facebook page. I design the pages, build them in Next.js, and stay on through launch week.",
  },
  {
    period: "2019 — 2022",
    title: "UI developer",
    place: "Northstar Digital, Airport City",
    kind: "Work",
    detail:
      "I built marketing sites and design-system components for hotels, professional firms, and NGOs. I led the front end of a donor portal used by teams across Greater Accra.",
  },
  {
    period: "2018 — 2019",
    title: "Junior designer",
    place: "Bloom & Co. Studio, Osu",
    kind: "Work",
    detail:
      "Product pages, lookbooks, and the first client websites I both designed and coded. This is where I learned to defend a layout in a client meeting.",
  },
  {
    period: "2014 — 2018",
    title: "BSc Information Technology",
    place: "University of Ghana, Legon",
    kind: "Education",
    detail:
      "Studied interactive systems, databases, and visual communication. My final project was a directory of independent makers working in Accra.",
  },
];

export type ProjectTone =
  | "floral"
  | "studio"
  | "wellness"
  | "market"
  | "fashion"
  | "food"
  | "legal"
  | "stay";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "E-commerce" | "Brand" | "Hospitality" | "Professional" | "Wellness";
  summary: string;
  description: string;
  outcome: string;
  technologies: string[];
  year: string;
  location: string;
  featured: boolean;
  preview: {
    kicker: string;
    headline: string;
    tone: ProjectTone;
  };
};

export const projects: Project[] = [
  {
    slug: "bloom-and-wild",
    title: "Bloom & Wild",
    client: "Bloom & Wild",
    category: "E-commerce",
    summary:
      "A calm online shop for an Osu florist, with weekly bouquets, wreaths, and same-day delivery notes for Accra.",
    description:
      "Bloom & Wild had a busy shop on Oxford Street and a WhatsApp list that collapsed every Valentine’s week. I designed a storefront that feels like the shop: soft paper, fresh stems, and clear delivery windows for Osu, Cantonments, Labone, and East Legon.",
    outcome:
      "The shop took weekend bouquet orders on the site for the first time, and staff stopped rewriting the same delivery reply by hand.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    year: "2025",
    location: "Osu, Accra",
    featured: true,
    preview: {
      kicker: "Osu florist",
      headline: "Fresh stems, delivered today",
      tone: "floral",
    },
  },
  {
    slug: "northland-studio",
    title: "Northland Studio",
    client: "Northland Studio",
    category: "Brand",
    summary:
      "A case-study site for a Cantonments creative studio, with room for film stills, identity work, and a plain enquiry path.",
    description:
      "Northland needed a home for work that was living in decks and Instagram highlights. I built a dark, quiet site where each case study leads with the picture, then the brief, then the result. The enquiry form asks for the job, not a dozen fields.",
    outcome:
      "New clients arrive already knowing which project they want to talk about, which shortens the first call.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    year: "2025",
    location: "Cantonments, Accra",
    featured: true,
    preview: {
      kicker: "Creative studio",
      headline: "Work worth lingering on",
      tone: "studio",
    },
  },
  {
    slug: "pure-balance",
    title: "Pure Balance",
    client: "Pure Balance",
    category: "Wellness",
    summary:
      "A timetable and practitioner site for a wellness studio in Labone, readable between classes on a phone.",
    description:
      "Pure Balance runs yoga, physio, and prenatal classes in a converted house in Labone. The old timetable was a JPEG. I designed a weekly schedule with filters for class type, a short bio for each instructor, and a front-end enquiry for first visits.",
    outcome:
      "Instructors update one shared page instead of resending a poster, and new visitors can see tonight’s class without pinching a photo.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Figma"],
    year: "2024",
    location: "Labone, Accra",
    featured: true,
    preview: {
      kicker: "Labone studio",
      headline: "This week’s classes",
      tone: "wellness",
    },
  },
  {
    slug: "adinkra-provisions",
    title: "Adinkra Provisions",
    client: "Adinkra Provisions",
    category: "E-commerce",
    summary:
      "A pantry brand from Madina, with product stories, wholesale notes, and a catalogue ready for a payment provider later.",
    description:
      "Adinkra Provisions packs oils, grains, and spice blends for homes and small hotels. I designed a warm catalogue that explains origin and pack size before price, plus a wholesale enquiry for restaurants that buy by the crate.",
    outcome:
      "Hotel buyers can send a crate list without waiting for a market-day phone call.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2024",
    location: "Madina, Accra",
    featured: false,
    preview: {
      kicker: "Pantry brand",
      headline: "Oils, grains, and spice",
      tone: "market",
    },
  },
  {
    slug: "kente-house",
    title: "Kente House",
    client: "Kente House",
    category: "Brand",
    summary:
      "A lookbook and made-to-order enquiry for a cloth and ready-to-wear label working out of Osu.",
    description:
      "Kente House weaves and sews for weddings, graduations, and Friday wear. The site is a lookbook first: large cloth photography, a short note on each pattern, and a measured enquiry for made-to-order pieces. No cart, because every garment is cut after the conversation.",
    outcome:
      "Brides and families send measurements with the pattern name already chosen, so the first fitting starts further along.",
    technologies: ["Next.js", "Tailwind CSS", "Figma"],
    year: "2024",
    location: "Osu, Accra",
    featured: false,
    preview: {
      kicker: "Cloth & clothing",
      headline: "Woven for the day",
      tone: "fashion",
    },
  },
  {
    slug: "volta-bites",
    title: "Volta Bites",
    client: "Volta Bites",
    category: "Hospitality",
    summary:
      "Menu, hours, and a table note for a grill room on Oxford Street, built to load quickly on mobile data.",
    description:
      "Volta Bites serves tilapia, kelewele, and weekend grill. The owner wanted a site a customer could open in a trotro: today’s menu, the Oxford Street pin, and a short note for groups larger than six. I kept the pages light and the type large.",
    outcome:
      "Groups book the back tables ahead of Friday, instead of arriving to a full room.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2023",
    location: "Osu, Accra",
    featured: false,
    preview: {
      kicker: "Oxford Street",
      headline: "Grill, tilapia, kelewele",
      tone: "food",
    },
  },
  {
    slug: "mensah-owusu-legal",
    title: "Mensah & Owusu",
    client: "Mensah & Owusu Legal",
    category: "Professional",
    summary:
      "A chambers site in Ridge with plain-language practice areas and a consultation request that does not pretend to be a case file.",
    description:
      "The partners wanted to retire a brochure PDF. I wrote the page structure with them: family, land, and commercial work, each in language a first-time client can follow. The consultation form collects the matter type and a preferred call window, and it states clearly that sending a note does not create a retainer.",
    outcome:
      "First calls arrive with the matter already named, and the front desk spends less time explaining what the chambers handle.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    year: "2023",
    location: "Ridge, Accra",
    featured: false,
    preview: {
      kicker: "Ridge chambers",
      headline: "Clear advice, plain words",
      tone: "legal",
    },
  },
  {
    slug: "cape-coast-stays",
    title: "Cape Coast Stays",
    client: "Cape Coast Stays",
    category: "Hospitality",
    summary:
      "Rooms, seasons, and a stay enquiry for a small guesthouse above the Cape Coast castle road.",
    description:
      "Cape Coast Stays is eight rooms and a courtyard breakfast. I designed a site that shows the room, the season rate, and what is within a walk: the castle, the beach, and the market. The enquiry asks for dates and number of guests without taking payment online.",
    outcome:
      "Travellers from Accra request dates before they call, and the owner stops repeating the rate card on WhatsApp.",
    technologies: ["Next.js", "Tailwind CSS", "Figma"],
    year: "2023",
    location: "Cape Coast",
    featured: false,
    preview: {
      kicker: "Guesthouse",
      headline: "Eight rooms, one courtyard",
      tone: "stay",
    },
  },
];

export const projectCategories = [
  "All",
  "E-commerce",
  "Brand",
  "Wellness",
  "Hospitality",
  "Professional",
] as const;

export type Package = {
  id: "starter" | "growth" | "premium";
  name: string;
  price: string;
  audience: string;
  featured: boolean;
  points: string[];
};

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$750",
    audience: "A first proper site for a small Accra business",
    featured: false,
    points: [
      "Up to 5 pages",
      "Mobile-first layout",
      "Contact form",
      "Basic on-page SEO",
      "One revision round",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$1,350",
    audience: "For a growing brand that needs more room",
    featured: true,
    points: [
      "Up to 10 pages",
      "Custom design system",
      "SEO and speed pass",
      "Case-study or menu layout",
      "30 days of launch support",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$2,200",
    audience: "A fuller site, ready for catalogue or booking later",
    featured: false,
    points: [
      "Up to 15 pages",
      "Catalogue or lookbook",
      "Enquiry flows for teams",
      "Priority replies",
      "60 days of launch support",
    ],
  },
];

export type Testimonial = {
  quote: string;
  longQuote: string;
  name: string;
  role: string;
  image: string;
  alt: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Efua rebuilt our flower shop site just before Valentine’s week. Orders from Osu came in the same evening, and customers say the site feels as calm as the shop.",
    longQuote:
      "We were taking bouquet orders in a WhatsApp group that three of us tried to watch. Efua sat in the shop on a Thursday, watched how we write cards, and turned that into a site our Saturday staff can actually run. She explained every page in plain language before a single screen was built.",
    name: "Akosua Boateng",
    role: "Founder, Bloom & Wild",
    image: "/images/akosua-boateng.jpg",
    alt: "Portrait of Akosua Boateng, founder of Bloom & Wild in Osu",
  },
  {
    quote:
      "PixelForge can hold a brand conversation and then ship the front end. Our case-study pages finally look the way the work deserves.",
    longQuote:
      "We had strong projects and a weak website. Efua pushed us to lead with the pictures and cut the jargon. The build matched the Figma file, including the awkward bits we usually lose, like long captions on a phone.",
    name: "Kofi Ansah",
    role: "Director, Northland Studio",
    image: "/images/kofi-ansah.jpg",
    alt: "Portrait of Kofi Ansah, director of Northland Studio in Cantonments",
  },
  {
    quote:
      "We needed a timetable people could read on a phone between classes. Efua designed it with our instructors and launched it without drama.",
    longQuote:
      "Our old schedule was a poster we photographed every Monday. Efua ran a short workshop with the instructors, named the classes the way students say them, and gave us a page we can update before the evening session. It is the first site we have had that did not need a follow-up rescue.",
    name: "Ama Serwaa",
    role: "Owner, Pure Balance",
    image: "/images/ama-serwaa.jpg",
    alt: "Portrait of Ama Serwaa, owner of Pure Balance in Labone",
  },
];

export const clients = [
  "Adinkra",
  "Paperplane",
  "Leaf & Co.",
  "Northern",
  "Sundaze",
  "Hive Digital",
];

export const values = [
  {
    title: "Plain language",
    detail:
      "I write pages the way people in the shop already talk. If a sentence only impresses other designers, it does not ship.",
  },
  {
    title: "Fast on a phone",
    detail:
      "Most clients will meet the site on mobile data. Pictures are sized properly, type is large, and the first screen earns its weight.",
  },
  {
    title: "Handed over cleanly",
    detail:
      "You get a site you can describe to the next person: what each page is for, how the form works, and what I am still looking after.",
  },
];

export const introSlides = [
  {
    kicker: "01 — Listen",
    title: "The brief starts in the shop",
    text: "I want to know who walks in, what they ask, and where the current site or WhatsApp thread gets in the way. Most of those conversations happen from the East Legon studio, or at your counter if you are in Accra.",
  },
  {
    kicker: "02 — Design",
    title: "You see it before I build it",
    text: "Type, colour, and the order of the pages are settled in Figma first. You can react to a real layout, not a mood board, and we change it while changes are still cheap.",
  },
  {
    kicker: "03 — Build",
    title: "Next.js, then a calm launch",
    text: "I develop the site in Next.js and TypeScript, check it on a phone, and stay close for the first weeks. This portfolio itself is a static site: forms are checked in the browser, and there is no checkout.",
  },
];

export const faqs = [
  {
    question: "How soon can we start?",
    answer:
      "I usually book a discovery call within three working days. A five-page site often takes three to five weeks once the words and pictures are ready.",
  },
  {
    question: "Do you work only in Accra?",
    answer:
      "The studio is in East Legon, and I meet Accra clients in person when it helps. I also work with businesses elsewhere in Ghana, and with clients abroad who want a designer who understands this market.",
  },
  {
    question: "How do payments work?",
    answer:
      "This website does not take payment. We agree the scope in writing, then I invoice a deposit before design starts and the balance before launch. Quotes can be discussed in US dollars or cedis.",
  },
  {
    question: "Can I see a CV?",
    answer:
      "Yes. The About page has a one-page PDF covering Efua’s study at the University of Ghana, studio roles, and the kind of work PixelForge takes on.",
  },
];
