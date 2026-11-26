import { OBJECTIVE_IMAGES } from "./assets";

export const NAV = [
  { label: "The Advantage", href: "#advantage" },
  { label: "Objectives", href: "#objectives" },
  { label: "Why Miami", href: "#why-miami" },
  { label: "IRG", href: "#irg" },
];

export const ADVANTAGES = [
  {
    n: "01",
    tag: "Pricing",
    title: "Early-Stage Pricing",
    body: "Secure your purchase price during the early stages of a development, before potential price increases in subsequent sales phases.",
  },
  {
    n: "02",
    tag: "Capital",
    title: "Staggered Payments",
    body: "Commit your capital gradually through scheduled deposits throughout development, with the remaining balance due at closing.",
  },
  {
    n: "03",
    tag: "Selection",
    title: "Greater Selection",
    body: "Choose from a wider inventory of residences, securing your preferred floors, views and layouts before availability becomes more limited.",
  },
  {
    n: "04",
    tag: "Growth",
    title: "Appreciation",
    body: "Benefit from the potential increase in your residence's market value between the time you sign your purchase contract and the building's completion.",
  },
];

export const MIAMI_REASONS = [
  {
    stat: "+94%",
    title: "Wealth Growth",
    body: "Miami's millionaire population nearly doubled between 2014 and 2024. Global financial firms such as Citadel have made Miami their home.",
  },
  {
    stat: "52%",
    title: "International Demand",
    body: "International buyers from 73 countries accounted for more than half of reported new-development and condo-conversion sales in surveyed South Florida projects.",
  },
  {
    stat: "$9B",
    title: "Infrastructure Investment",
    body: "A $9 billion modernization program at Miami International Airport is designed to strengthen the city's global connectivity.",
  },
  {
    stat: "0%",
    title: "Personal State Income Tax",
    body: "Florida's tax environment is particularly attractive to entrepreneurs, professionals and wealthy individuals considering relocation.",
  },
  {
    stat: "#2",
    title: "Branded Residences",
    body: "Miami is the world's second-largest branded residences market, attracting some of the most prestigious hospitality, automotive and lifestyle brands.",
  },
];

export const OBJECTIVES = [
  {
    n: "01",
    title: "Own & Enjoy",
    headline: "A place to call your own.",
    body: "Secure your future Miami residence today and choose a property that reflects the way you and your family want to live.",
    points: [
      "Second home or future primary residence",
      "Preferred views, layouts and amenities",
      "Personal enjoyment and long-term ownership",
    ],
    image: OBJECTIVE_IMAGES[0],
  },
  {
    n: "02",
    title: "Capital Appreciation",
    headline: "Position yourself for future growth.",
    body: "Enter carefully selected developments at an early stage, with the potential to benefit from appreciation during construction and beyond.",
    points: [
      "Strategic entry pricing",
      "Potential appreciation before completion",
      "Long-term capital growth",
    ],
    image: OBJECTIVE_IMAGES[1],
  },
  {
    n: "03",
    title: "Rental Income",
    headline: "Own with income in mind.",
    body: "Secure a future residence in a development selected for its rental potential once completed.",
    points: [
      "Short- or long-term rental potential",
      "Rental-friendly developments",
      "Income potential and ownership costs",
    ],
    image: OBJECTIVE_IMAGES[2],
  },
  {
    n: "04",
    title: "Wealth Diversification",
    headline: "Build wealth beyond borders.",
    body: "Diversify your portfolio through U.S. dollar-denominated real estate while deploying capital progressively during development.",
    points: [
      "Geographic diversification",
      "Tangible U.S. dollar-denominated assets",
      "Progressive capital deployment",
    ],
    image: OBJECTIVE_IMAGES[3],
  },
  {
    n: "05",
    title: "Future & Family",
    headline: "Start building your family's next chapter.",
    body: "Plan ahead by securing a future residence in Miami that aligns with your family's long-term aspirations.",
    points: [
      "Future family residence",
      "Education and relocation planning",
      "Long-term generational ownership",
    ],
    image: OBJECTIVE_IMAGES[4],
  },
];

export const ACCESS_TIERS = [
  {
    stage: "Private / Limited Access",
    items: "List Zero · Friends & Family · Pre-Launch",
    note: "Earliest pricing, preferred inventory and developer incentives — before broader release.",
    dominant: true,
  },
  {
    stage: "Broker Release",
    items: "Wider broker distribution",
    note: "The project becomes visible to the broker community at published pricing.",
    dominant: false,
  },
  {
    stage: "Public Market",
    items: "Broad commercialization",
    note: "Public marketing, advertising and full retail visibility — often after earlier inventory has shifted.",
    dominant: false,
  },
];

export const EARLY_ACCESS = [
  "List Zero pricing",
  "Friends & Family releases",
  "Pre-launch inventory",
  "Preferred unit selection",
  "Developer incentives",
];

export const FRAMEWORK = [
  { k: "Developer", v: "Track record, execution and reputation." },
  { k: "Location", v: "Long-term demand, neighborhood evolution and connectivity." },
  { k: "Entry Point", v: "Where the opportunity sits within the project's commercial cycle." },
  { k: "Capital Structure", v: "Deposits, timing and overall financial flexibility." },
  { k: "Inventory", v: "Views, floors, layouts, scarcity and relative positioning." },
  {
    k: "Ownership Strategy",
    v: "Lifestyle, appreciation, rental, diversification or long-term portfolio role.",
  },
];

export const DEVELOPERS = [
  "Terra",
  "PMG",
  "Swire Properties",
  "13th Floor Investments",
  "Key International",
  "One Thousand Group",
  "DaGrosa Capital Development Partners",
];

export const OPPORTUNITIES = [
  {
    name: "Kempinski Residences",
    place: "Miami Design District",
    line: "Branded European hospitality meets the Design District's art-led identity.",
  },
  {
    name: "The Residences at Mandarin Oriental",
    place: "Brickell Key",
    line: "Waterfront branded living anchored by a five-star hospitality operator.",
  },
  {
    name: "Delano Residences & Hotel",
    place: "Miami Beach",
    line: "A reimagined landmark of Miami Beach's design heritage.",
  },
  {
    name: "Jean-Georges Miami Tropic",
    place: "Edgewater",
    line: "Culinary-led branded residences on the Biscayne waterfront.",
  },
  {
    name: "Villa Miami",
    place: "Edgewater",
    line: "Sculptural architecture on one of Edgewater's deepest waterfront parcels.",
  },
  {
    name: "619 Brickell by Nobu",
    place: "Brickell",
    line: "A branded vertical community at the heart of Brickell's evolution.",
  },
  {
    name: "One Twenty Brickell Residences",
    place: "Brickell",
    line: "A refined address within Brickell's next generation of residential towers.",
  },
];
