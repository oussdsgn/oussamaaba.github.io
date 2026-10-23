// All site content lives here — edit text, links and images in one place.
import type { StaticImageData } from "next/image";

import hero from "@/assets/images/hero.jpg";
import aboutHero from "@/assets/images/about-hero.jpg";
import portrait from "@/assets/images/portrait.jpg";
import ademFitt from "@/assets/images/adem-fitt.jpg";
import heetch from "@/assets/images/heetch.jpg";
import inpha from "@/assets/images/inpha.jpg";
import ultraRapid from "@/assets/images/ultra-rapid.jpg";
import twsel from "@/assets/images/twsel.jpg";
import innovea from "@/assets/images/innovea.jpg";
import serviceArt from "@/assets/images/service-art-direction.jpg";
import serviceBrand from "@/assets/images/service-brand-identity.jpg";
import nihad from "@/assets/images/testimonial-nihad.jpg";
import artStandard from "@/assets/images/article-standard.jpg";
import artFraenk from "@/assets/images/article-fraenk.jpg";
import artAlgerian from "@/assets/images/article-algerian.jpg";
import artIkea from "@/assets/images/article-ikea.jpg";
import client1 from "@/assets/images/client-1.jpg";
import client2 from "@/assets/images/client-2.jpg";
import client3 from "@/assets/images/client-3.jpg";
import client4 from "@/assets/images/client-4.jpg";
import client5 from "@/assets/images/client-5.jpg";
import client6 from "@/assets/images/client-6.jpg";
import afHero from "@/assets/images/projects/adem-fitt/hero.jpg";
import afLogoNavy from "@/assets/images/projects/adem-fitt/logo-navy.jpg";
import afTourism from "@/assets/images/projects/adem-fitt/tourism-collage.jpg";
import afStationery from "@/assets/images/projects/adem-fitt/stationery.jpg";

export const site = {
  name: "oussdsgn",
  owner: "Oussama",
  role: "Senior Graphic Designer",
  city: "Algiers",
  timeZone: "Africa/Algiers",
  year: 2026,
  // Where the contact form sends messages (opens the visitor's mail app).
  email: "oussdsgn@gmail.com",
  socials: [
    { label: "Behance", href: "https://behance.net/oussamaaba" },
    { label: "LinkedIn", href: "https://linkedin.com/in/oussama-aba-tlm" },
    { label: "Instagram", href: "https://instagram.com/oussdesigns/" },
  ],
  images: { hero, aboutHero, portrait },
};

export const nav = [
  { label: "Works", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Assets Store", href: "/assets-store" },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Assets Store", href: "/assets-store" },
  { label: "Contact", href: "/contact" },
];

/**
 * A case-study page is built from `blocks`, top to bottom:
 *   { type: "text",  title, paragraphs }   — label on the left, copy on the right
 *   { type: "image", image, alt }          — full-width image
 *   { type: "pair",  images: [a, b] }      — two images side by side
 * Projects without blocks still get a page (cover + services + next project).
 */
export type ProjectBlock =
  | { type: "text"; title: string; paragraphs: string[] }
  | { type: "image"; image: StaticImageData; alt: string }
  | { type: "pair"; images: [{ image: StaticImageData; alt: string }, { image: StaticImageData; alt: string }] };

export type Project = {
  slug: string;
  title: string;
  /** Short labels shown on the project cards and used by the filters */
  tags: string[];
  /** Card thumbnail */
  image: StaticImageData;
  /** Large image at the top of the case study (falls back to `image`) */
  cover?: StaticImageData;
  /** Listed under SERVICES on the case study (falls back to `tags`) */
  services?: string[];
  year?: string;
  /** Paragraphs shown under INFO next to the services */
  info?: string[];
  blocks?: ProjectBlock[];
};

export const projects: Project[] = [
  {
    slug: "adem-fitt",
    title: "Adem Fitt Group",
    tags: ["Brand Guidelines"],
    image: ademFitt,
    cover: afHero,
    services: ["Art Direction", "Branding", "Brand Identity"],
    year: "2025",
    info: [
      "Adem Fitt Group is a multi-business group bringing together two distinct activities: Adem Fitt Tourism and Adem Fitt Auto X. The brand needed a visual system capable of presenting both businesses as independent entities while clearly communicating their connection to the same parent group.",
      "The identity is built around the AF monogram, supported by a shared navy-and-orange color palette and a consistent visual language. Each sub-brand uses its own adapted mark while retaining recognizable elements from the group identity.",
      "The system is designed to work across multiple touchpoints, from office signage and stationery to badges, tote bags, and staff uniforms, creating a consistent brand experience across physical and professional environments.",
    ],
    blocks: [
      {
        type: "pair",
        images: [
          { image: afLogoNavy, alt: "Adem Fitt Groupe logo in white and orange on navy" },
          { image: afTourism, alt: "Adem Fitt Tourism and group marks applied across a collage of brand visuals" },
        ],
      },
      {
        type: "text",
        title: "Problem",
        paragraphs: [
          "The challenge was to create a unified identity for multiple businesses with different activities without making them look identical or disconnected.",
          "Adem Fitt Tourism and Adem Fitt Auto X operate in different sectors and therefore require their own visual personalities. At the same time, both needed to be immediately recognizable as part of the Adem Fitt Group.",
          "The identity also needed to remain clear, recognizable, and adaptable across different applications and scales, from small staff badges to large-format signage.",
        ],
      },
      { type: "image", image: afStationery, alt: "Adem Fitt letterhead, business cards and pencils" },
    ],
  },
  { slug: "heetch", title: "Heetch", tags: ["Web", "Social Media"], image: heetch },
  { slug: "inpha-medis", title: "INPHA-MédiS 25th Anniversary", tags: ["Rebrand"], image: inpha },
  { slug: "ultra-rapid", title: "Ultra Rapide", tags: ["Brand", "Web"], image: ultraRapid },
  { slug: "twsel", title: "Twsel Express Logistics", tags: ["Brand", "Web"], image: twsel },
  { slug: "innovea", title: "INNOVEA Labs", tags: ["Brand", "Brand Guidelines"], image: innovea },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const services = [
  {
    title: "Art Direction",
    image: serviceArt as StaticImageData | null,
    text: "I craft compelling visual stories that align with your vision and speak directly to your audience. From concept to execution, every detail is thoughtfully directed to ensure consistency, emotion, and impact across all touchpoints.",
  },
  {
    title: "Brand Identity",
    image: serviceBrand as StaticImageData | null,
    text: "I develop cohesive brand systems that go beyond logos—defining how your brand looks, feels, and communicates. The result is a distinct, memorable identity that builds trust and stands out in a crowded market.",
  },
  {
    title: "Web Design",
    image: null as StaticImageData | null,
    text: "I design intuitive, visually engaging websites that balance aesthetics with functionality. Every experience is tailored to guide users effortlessly while reinforcing your brand and driving meaningful interaction.",
  },
];

export const process = [
  { title: "Discovery", text: "I take time to understand your brand, objectives, and audience, gathering the insights needed to inform a clear and thoughtful direction." },
  { title: "Strategy", text: "I shape a focused plan that aligns ideas, messaging, and structure, ensuring every creative decision is intentional and effective." },
  { title: "Design", text: "I translate strategy into strong visual outcomes, crafting work that is both engaging and purposeful across every touchpoint." },
  { title: "Delivery", text: "I prepare and launch with care, delivering polished assets that are consistent, functional, and ready to perform in the real world." },
];

// Add more testimonials here — the slider arrows enable themselves.
export const testimonials = [
  {
    quote:
      "Working with them was seamless from start to finish. They understood our vision, elevated it with thoughtful design, and delivered results that truly set our brand apart.",
    name: "Nihad Ahmed Bensoltane",
    role: "Head of AMS Agency",
    image: nihad,
  },
];

export type Stat = { value: number; suffix: string; label: string; text: string };

const statCopy = {
  projects: { label: "projects delivered", text: "Delivering thoughtful, high-quality work across a wide range of industries and clients." },
  satisfaction: { label: "client satisfaction", text: "Long-term partnerships built on trust, clarity, and results." },
  years: { label: "years of experience", text: "A proven track record of crafting impactful design solutions over time." },
};

// Shown on both Home and About. The Framer site had two different sets
// (40+ / 98% / 7+ on Home, 15+ / 25% / 2+ on About) — confirm the real numbers.
export const stats: Stat[] = [
  { value: 40, suffix: "+", ...statCopy.projects },
  { value: 98, suffix: "%", ...statCopy.satisfaction },
  { value: 7, suffix: "+", ...statCopy.years },
];

// Newest first
export const articles = [
  { title: "Why Algerian Art Deserves Its Own Magazine", category: "Design", date: "Oct 4, 2026", image: artAlgerian },
  { title: "Why \u201cDiscount\u201d Doesn\u2019t Have to Mean \u201cBoring\u201d", category: "Design", date: "Aug 8, 2026", image: artFraenk },
  { title: "IKEA Turned the Football Wall Into a Sofa Sale", category: "Design", date: "Jul 16, 2026", image: artIkea },
  { title: "Studio Blackburn Gives Ellis Butchers a Cast of Characters From Meat", category: "Design", date: "Jan 12, 2026", image: artStandard },
];

export const clients = [
  { name: "Adem Fitt Group", image: client1 },
  { name: "INPHA-MédiS", image: client2 },
  { name: "Telecoming", image: client3 },
  { name: "Heetch", image: client4 },
  { name: "HB 1878", image: client5 },
  { name: "A", image: client6 },
];

export const about = {
  intro:
    "I am a multidisciplinary designer focused on crafting thoughtful, visually engaging digital experiences. With a strong eye for detail and a passion for simplicity, I blend creativity and strategy to create work that not only looks good but feels intuitive and purposeful.",
  approach:
    "I believe great design sits at the intersection of function and emotion. Every decision is guided by clarity, usability, and impact—ensuring that the final product communicates effectively while delivering a seamless user experience.",
};
