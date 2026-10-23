// All site content lives here — edit text, links and images in one place.
import type { StaticImageData } from "next/image";

import hero from "@/assets/images/hero.jpg";
import portrait from "@/assets/images/portrait.jpg";
import ademFitt from "@/assets/images/adem-fitt.jpg";
import heetch from "@/assets/images/heetch.jpg";
import inpha from "@/assets/images/inpha.jpg";
import ultraRapide from "@/assets/images/ultra-rapid.jpg";
import twsel from "@/assets/images/twsel.jpg";
import innovea from "@/assets/images/innovea.jpg";
import servicePackaging from "@/assets/images/service-packaging.jpg";
import w_banner_beko_dishwasher from "@/assets/images/work/banner-beko-dishwasher.jpg";
import w_banner_beko_leaderboard from "@/assets/images/work/banner-beko-leaderboard.jpg";
import w_banner_telecoming_1 from "@/assets/images/work/banner-telecoming-1.jpg";
import w_banner_telecoming_2 from "@/assets/images/work/banner-telecoming-2.jpg";
import w_banner_telecoming_3 from "@/assets/images/work/banner-telecoming-3.jpg";
import w_logo_01 from "@/assets/images/work/logo-01.png";
import w_logo_02 from "@/assets/images/work/logo-02.png";
import w_logo_03 from "@/assets/images/work/logo-03.png";
import w_logo_04 from "@/assets/images/work/logo-04.png";
import w_logo_05 from "@/assets/images/work/logo-05.png";
import w_logo_06 from "@/assets/images/work/logo-06.png";
import w_logo_07 from "@/assets/images/work/logo-07.png";
import w_logo_08 from "@/assets/images/work/logo-08.png";
import w_logo_09 from "@/assets/images/work/logo-09.png";
import w_logo_10 from "@/assets/images/work/logo-10.png";
import w_logo_11 from "@/assets/images/work/logo-11.png";
import w_logo_12 from "@/assets/images/work/logo-12.png";
import w_logo_13 from "@/assets/images/work/logo-13.png";
import w_logo_14 from "@/assets/images/work/logo-14.png";
import w_logo_15 from "@/assets/images/work/logo-15.png";
import w_logo_16 from "@/assets/images/work/logo-16.png";
import w_logo_17 from "@/assets/images/work/logo-17.png";
import w_logo_18 from "@/assets/images/work/logo-18.png";
import w_logo_19 from "@/assets/images/work/logo-19.png";
import w_logo_20 from "@/assets/images/work/logo-20.png";
import w_logo_21 from "@/assets/images/work/logo-21.png";
import w_medal_1 from "@/assets/images/work/medal-1.jpg";
import w_medal_2 from "@/assets/images/work/medal-2.jpg";
import w_medal_3 from "@/assets/images/work/medal-3.jpg";
import w_medal_4 from "@/assets/images/work/medal-4.jpg";
import w_medal_5 from "@/assets/images/work/medal-5.jpg";
import w_medal_6 from "@/assets/images/work/medal-6.jpg";
import w_medal_7 from "@/assets/images/work/medal-7.jpg";
import w_pack_doubby_dielines from "@/assets/images/work/pack-doubby-dielines.jpg";
import w_pack_doubby_mockup from "@/assets/images/work/pack-doubby-mockup.jpg";
import w_pack_honey_jar from "@/assets/images/work/pack-honey-jar.jpg";
import w_pack_honey_label from "@/assets/images/work/pack-honey-label.jpg";
import w_pack_infinix_box from "@/assets/images/work/pack-infinix-box.jpg";
import w_pack_infinix_dieline from "@/assets/images/work/pack-infinix-dieline.jpg";
import w_pack_latrasse_dieline from "@/assets/images/work/pack-latrasse-dieline.jpg";
import w_pack_rivano_buckets from "@/assets/images/work/pack-rivano-buckets.jpg";
import w_pack_rivano_label from "@/assets/images/work/pack-rivano-label.jpg";
import w_pack_rivano_pails from "@/assets/images/work/pack-rivano-pails.jpg";
import w_post_01 from "@/assets/images/work/post-01.jpg";
import w_post_02 from "@/assets/images/work/post-02.jpg";
import w_post_03 from "@/assets/images/work/post-03.jpg";
import w_post_04 from "@/assets/images/work/post-04.jpg";
import w_post_05 from "@/assets/images/work/post-05.jpg";
import w_post_06 from "@/assets/images/work/post-06.jpg";
import w_post_07 from "@/assets/images/work/post-07.jpg";
import w_post_08 from "@/assets/images/work/post-08.jpg";
import w_post_09 from "@/assets/images/work/post-09.jpg";
import w_post_10 from "@/assets/images/work/post-10.jpg";
import w_post_11 from "@/assets/images/work/post-11.jpg";
import w_post_12 from "@/assets/images/work/post-12.jpg";
import w_post_13 from "@/assets/images/work/post-13.jpg";
import w_post_14 from "@/assets/images/work/post-14.jpg";
import w_post_15 from "@/assets/images/work/post-15.jpg";
import w_post_16 from "@/assets/images/work/post-16.jpg";
import w_post_17 from "@/assets/images/work/post-17.jpg";
import w_post_18 from "@/assets/images/work/post-18.jpg";
import w_post_19 from "@/assets/images/work/post-19.jpg";
import w_post_20 from "@/assets/images/work/post-20.jpg";
import w_post_21 from "@/assets/images/work/post-21.jpg";
import w_post_22 from "@/assets/images/work/post-22.jpg";
import w_post_23 from "@/assets/images/work/post-23.jpg";
import w_post_24 from "@/assets/images/work/post-24.jpg";
import w_post_25 from "@/assets/images/work/post-25.jpg";
import w_poster_car_01 from "@/assets/images/work/poster-car-01.jpg";
import w_poster_car_02 from "@/assets/images/work/poster-car-02.jpg";
import w_poster_car_03 from "@/assets/images/work/poster-car-03.jpg";
import w_poster_car_04 from "@/assets/images/work/poster-car-04.jpg";
import w_poster_car_05 from "@/assets/images/work/poster-car-05.jpg";
import w_poster_car_06 from "@/assets/images/work/poster-car-06.jpg";
import w_poster_car_07 from "@/assets/images/work/poster-car-07.jpg";
import w_poster_car_08 from "@/assets/images/work/poster-car-08.jpg";
import w_poster_car_09 from "@/assets/images/work/poster-car-09.jpg";
import w_poster_car_10 from "@/assets/images/work/poster-car-10.jpg";
import w_poster_space_01 from "@/assets/images/work/poster-space-01.jpg";
import w_poster_space_02 from "@/assets/images/work/poster-space-02.jpg";
import w_poster_space_03 from "@/assets/images/work/poster-space-03.jpg";
import w_poster_space_04 from "@/assets/images/work/poster-space-04.jpg";
import w_poster_space_05 from "@/assets/images/work/poster-space-05.jpg";
import w_poster_space_06 from "@/assets/images/work/poster-space-06.jpg";
import w_poster_space_07 from "@/assets/images/work/poster-space-07.jpg";
import w_poster_space_08 from "@/assets/images/work/poster-space-08.jpg";
import w_poster_space_09 from "@/assets/images/work/poster-space-09.jpg";
import w_poster_space_10 from "@/assets/images/work/poster-space-10.jpg";
import w_poster_space_11 from "@/assets/images/work/poster-space-11.jpg";
import w_print_alaksa_halwa from "@/assets/images/work/print-alaksa-halwa.jpg";
import w_print_alaksa_tartilla from "@/assets/images/work/print-alaksa-tartilla.jpg";
import w_print_netto_banner from "@/assets/images/work/print-netto-banner.jpg";
import w_print_netto_magic from "@/assets/images/work/print-netto-magic.jpg";
import w_print_netto_star from "@/assets/images/work/print-netto-star.jpg";
import product1 from "@/assets/images/store/product-1.jpg";
import product2 from "@/assets/images/store/product-2.jpg";
import product3 from "@/assets/images/store/product-3.jpg";
import product4 from "@/assets/images/store/product-4.jpg";
import product5 from "@/assets/images/store/product-5.jpg";
import product6 from "@/assets/images/store/product-6.jpg";
import product7 from "@/assets/images/store/product-7.jpg";
import product8 from "@/assets/images/store/product-8.jpg";
import product9 from "@/assets/images/store/product-9.jpg";
import buzzDesktop from "@/assets/images/web/buzz-desktop.jpg";
import ibDesktop from "@/assets/images/web/ib-digital-desktop.jpg";
import ibMobile from "@/assets/images/web/ib-digital-mobile.jpg";
import kbDesktop from "@/assets/images/web/karin-bastin-desktop.jpg";
import kbMobile from "@/assets/images/web/karin-bastin-mobile.jpg";
import amsDesktop from "@/assets/images/web/ams-desktop.jpg";
import nihad from "@/assets/images/testimonial-nihad.jpg";
import artStandard from "@/assets/images/article-standard.jpg";
import artFraenk from "@/assets/images/article-fraenk.jpg";
import artAlgerian from "@/assets/images/article-algerian.jpg";
import artIkea from "@/assets/images/article-ikea.jpg";
import logo01 from "@/assets/images/clients/logo-01.png";
import logo02 from "@/assets/images/clients/logo-02.png";
import logo03 from "@/assets/images/clients/logo-03.png";
import logo04 from "@/assets/images/clients/logo-04.png";
import logo05 from "@/assets/images/clients/logo-05.png";
import logo06 from "@/assets/images/clients/logo-06.png";
import logo07 from "@/assets/images/clients/logo-07.png";
import logo08 from "@/assets/images/clients/logo-08.png";
import logo09 from "@/assets/images/clients/logo-09.png";
import logo10 from "@/assets/images/clients/logo-10.png";
import logo11 from "@/assets/images/clients/logo-11.png";
import logo12 from "@/assets/images/clients/logo-12.png";
import logo13 from "@/assets/images/clients/logo-13.png";
import logo14 from "@/assets/images/clients/logo-14.png";
import explore1 from "@/assets/images/explorations/exploration-1.jpg";
import explore2 from "@/assets/images/explorations/exploration-2.jpg";
import explore3 from "@/assets/images/explorations/exploration-3.jpg";
import explore4 from "@/assets/images/explorations/exploration-4.jpg";
import explore5 from "@/assets/images/explorations/exploration-5.jpg";

import afLogoNavy from "@/assets/images/projects/adem-fitt/logo-navy.jpg";
import afFamily from "@/assets/images/projects/adem-fitt/brand-family.jpg";
import afStationery from "@/assets/images/projects/adem-fitt/stationery.jpg";
import afStickers from "@/assets/images/projects/adem-fitt/stickers.jpg";
import afMerch from "@/assets/images/projects/adem-fitt/merch.jpg";
import afSocial from "@/assets/images/projects/adem-fitt/social.jpg";
import hePromo from "@/assets/images/projects/heetch/promo-erkeb50.jpg";
import heBillboard from "@/assets/images/projects/heetch/ghardaia-billboard.jpg";
import hePoster from "@/assets/images/projects/heetch/ghardaia-poster.jpg";
import hePhone from "@/assets/images/projects/heetch/promo-phone.jpg";
import heConfort from "@/assets/images/projects/heetch/confort.jpg";
import heWide from "@/assets/images/projects/heetch/ghardaia-wide.jpg";
import inStationery from "@/assets/images/projects/inpha-medis/stationery.jpg";
import inBuilding from "@/assets/images/projects/inpha-medis/building.jpg";
import urTagline from "@/assets/images/projects/ultra-rapide/tagline.jpg";
import urBottle from "@/assets/images/projects/ultra-rapide/bottle.jpg";
import urCap from "@/assets/images/projects/ultra-rapide/cap.jpg";
import urTee from "@/assets/images/projects/ultra-rapide/tee-palette.jpg";
import urKit from "@/assets/images/projects/ultra-rapide/kit.jpg";
import urBillboard from "@/assets/images/projects/ultra-rapide/billboard.jpg";
import twSheet from "@/assets/images/projects/twsel/brand-sheet.jpg";
import twHighway from "@/assets/images/projects/twsel/highway.jpg";
import twTruck from "@/assets/images/projects/twsel/truck.jpg";
import twFlag from "@/assets/images/projects/twsel/flag.jpg";
import twContainer from "@/assets/images/projects/twsel/container.jpg";
import twApps from "@/assets/images/projects/twsel/applications.jpg";
import inoLogo from "@/assets/images/projects/innovea/logo-system.jpg";
import inoEvent from "@/assets/images/projects/innovea/event.jpg";
import inoLaptop from "@/assets/images/projects/innovea/laptop.jpg";
import inoSignage from "@/assets/images/projects/innovea/signage.jpg";
import inoGuidelines from "@/assets/images/projects/innovea/guidelines.jpg";
import afGuidelines from "@/assets/images/projects/adem-fitt/guidelines.jpg";
import arBoard from "@/assets/images/projects/ariadne/cover.jpg";
import ar1 from "@/assets/images/projects/ariadne/page-1.jpg";
import ar2 from "@/assets/images/projects/ariadne/page-2.jpg";
import ar3 from "@/assets/images/projects/ariadne/page-3.jpg";
import ar4 from "@/assets/images/projects/ariadne/page-4.jpg";
import hbBoard from "@/assets/images/projects/hiba-co/cover.jpg";
import hb1 from "@/assets/images/projects/hiba-co/page-1.jpg";
import hb2 from "@/assets/images/projects/hiba-co/page-2.jpg";
import hb3 from "@/assets/images/projects/hiba-co/page-3.jpg";
import hb4 from "@/assets/images/projects/hiba-co/page-4.jpg";
import apBoard from "@/assets/images/projects/algerie-poste/cover.jpg";
import ap1 from "@/assets/images/projects/algerie-poste/page-1.jpg";
import ap2 from "@/assets/images/projects/algerie-poste/page-2.jpg";
import ap3 from "@/assets/images/projects/algerie-poste/page-3.jpg";
import ap4 from "@/assets/images/projects/algerie-poste/page-4.jpg";

export const site = {
  name: "oussdsgn",
  owner: "Oussama",
  fullName: "Oussama Aba",
  role: "Senior Graphic Designer",
  city: "Algiers",
  timeZone: "Africa/Algiers",
  year: 2026,
  // Where the contact form sends messages (opens the visitor's mail app).
  email: "oussamaaba1@outlook.com",
  phone: "+213 777 58 59 66",
  socials: [
    { label: "Behance", href: "https://behance.net/oussamaaba" },
    { label: "LinkedIn", href: "https://linkedin.com/in/oussama-aba-tlm" },
    { label: "Instagram", href: "https://instagram.com/oussdesigns/" },
    { label: "Gumroad", href: "https://oussdsgn.gumroad.com" },
  ],
  gumroad: { href: "https://oussdsgn.gumroad.com", handle: "oussdsgn.gumroad.com" },
  images: { hero, portrait },
  marquee: ["Brand Identity", "Social Media", "Packaging", "Print Design", "UI/UX Design", "Motion Graphics"],
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
 *   { type: "text", title, paragraphs }            — label + copy in the right column
 *   { type: "gallery", cols, ratio?, images }      — 1, 2 or 3 images in a row;
 *       `ratio` (e.g. "4 / 5") crops every image in the row to the same shape,
 *       leave it out to show images uncropped.
 * Projects without blocks still get a page (cover + services + next project).
 */
type Shot = { image: StaticImageData; alt: string };

export type ProjectBlock =
  | { type: "text"; title: string; paragraphs: string[] }
  | { type: "gallery"; cols: 1 | 2 | 3 | 4; ratio?: string; paper?: boolean; images: Shot[] };

export type Project = {
  slug: string;
  title: string;
  /** Short labels shown on the project cards and used by the filters */
  tags: string[];
  /** Card thumbnail, also the case-study cover unless `cover` is set */
  image: StaticImageData;
  cover?: StaticImageData;
  /** Listed under SERVICES on the case study (falls back to `tags`) */
  services?: string[];
  year?: string;
  /** Paragraphs shown under INFO next to the services */
  info?: string[];
  /** Optional external link shown under the services, e.g. the full Behance case study */
  link?: { label: string; href: string };
  blocks?: ProjectBlock[];
};

const text = (title: string, ...paragraphs: string[]): ProjectBlock => ({ type: "text", title, paragraphs });
const row = (cols: 1 | 2 | 3 | 4, images: Shot[], ratio?: string): ProjectBlock => ({ type: "gallery", cols, ratio, images });
const paper = (cols: 1 | 2 | 3 | 4, images: Shot[]): ProjectBlock => ({ type: "gallery", cols, paper: true, images });

export const projects: Project[] = [
  {
    slug: "adem-fitt",
    title: "Adem Fitt Group",
    tags: ["Brand Guidelines"],
    image: ademFitt,
    services: ["Art Direction", "Branding", "Brand Identity"],
    year: "2025",
    info: [
      "Adem Fitt Group is a multi-business group bringing together two distinct activities: Adem Fitt Tourism and Adem Fitt Auto X. The brand needed a visual system capable of presenting both businesses as independent entities while clearly communicating their connection to the same parent group.",
      "The identity is built around the AF monogram, supported by a shared navy-and-orange color palette and a consistent visual language. Each sub-brand uses its own adapted mark while retaining recognizable elements from the group identity.",
      "The system is designed to work across multiple touchpoints, from office signage and stationery to badges, tote bags, and staff uniforms, creating a consistent brand experience across physical and professional environments.",
    ],
    blocks: [
      row(1, [{ image: afGuidelines, alt: "Pages from the Adem Fitt brand guidelines: clear space, brand story, logo usage, typography and applications" }]),
      row(2, [
        { image: afLogoNavy, alt: "Adem Fitt Groupe logo in white and orange on navy" },
        { image: afFamily, alt: "The Adem Fitt brand family: group, Tourism and Auto X marks" },
      ], "16 / 9"),
      text(
        "Problem",
        "The challenge was to create a unified identity for multiple businesses with different activities without making them look identical or disconnected.",
        "Adem Fitt Tourism and Adem Fitt Auto X operate in different sectors and therefore require their own visual personalities. At the same time, both needed to be immediately recognizable as part of the Adem Fitt Group.",
        "The identity also needed to remain clear, recognizable, and adaptable across different applications and scales, from small staff badges to large-format signage.",
      ),
      row(1, [{ image: afStationery, alt: "Adem Fitt letterhead, business cards and pencils" }]),
      text(
        "Solution",
        "A flexible brand architecture was developed around a central AF monogram representing the parent group.",
        "Each business received a distinct mark derived from the same visual DNA, allowing the sub-brands to maintain their own identities while remaining visually connected. The shared navy-and-orange palette, typography, proportions, and graphic principles create consistency across the entire family.",
        "The resulting system provides a clear hierarchy: Adem Fitt Group → AF monogram → Tourism / Auto X.",
        "This approach creates a brand identity that is recognizable as one group, flexible across different businesses, and scalable across both digital and physical applications.",
      ),
      row(2, [
        { image: afStickers, alt: "Round Adem Fitt stickers in navy and white" },
        { image: afMerch, alt: "Adem Fitt tote bag, badge, desk flag and staff polo shirts" },
      ], "16 / 10"),
      row(1, [{ image: afSocial, alt: "Adem Fitt Tourism social media posts and app screen" }]),
    ],
  },
  {
    slug: "heetch",
    title: "Heetch",
    tags: ["Campaign", "Social Media"],
    image: heetch,
    services: ["Art Direction", "Campaign Design", "Social Media"],
    year: "2025",
    info: [
      "Heetch is a French ride-hailing platform operating across multiple markets, including Algeria. For this project, the focus was on developing localized promotional and city-launch visuals for the Algerian market.",
      "The campaign covered two objectives: promoting a 50% ride discount using the localized promo code “Erkeb50”, and announcing Heetch’s expansion into Ghardaïa. The visuals needed to remain recognizably Heetch while connecting with Algerian audiences through language, culture, and local visual references.",
    ],
    blocks: [
      row(3, [
        { image: hePromo, alt: "Heetch poster: 50% off with the promo code Erkeb50" },
        { image: heBillboard, alt: "Heetch Ghardaïa launch on a digital billboard in the old town at dusk" },
        { image: hePoster, alt: "Heetch Ghardaïa launch poster with a black car over the M’zab skyline" },
      ], "3 / 4"),
      text(
        "Problem",
        "The challenge was to communicate Heetch’s bold, energetic brand personality while making the campaign feel genuinely relevant to the Algerian market.",
        "The promotional campaign needed to capture attention quickly in crowded social-media feeds, while the Ghardaïa launch required a more location-specific approach that could celebrate the city’s distinctive cultural identity without losing Heetch’s visual language.",
        "The campaign also needed to work across French and Arabic, multiple formats, and different communication purposes while maintaining a coherent visual system.",
      ),
      row(1, [{ image: heWide, alt: "Heetch Ghardaïa launch key visual in magenta" }]),
      text(
        "Solution",
        "I developed a localized campaign system built around Heetch’s signature pink, combining high-contrast magenta-to-black gradients, condensed typography, diagonal graphic accents, and strong product-focused compositions.",
        "For the promotional campaign, the “Erkeb50” code became a central communication element, supported by Arabic treatments such as “Heetch Confort” to strengthen local brand recognition.",
        "For the Ghardaïa launch, I incorporated M’zab architecture, ochre tones, traditional clothing, and the city’s distinctive skyline into the compositions, reinterpreting these cultural elements through Heetch’s pink visual language.",
        "The result was a campaign system that balanced global brand consistency with local cultural relevance, allowing Heetch to communicate both as an established brand and as a service entering a specific Algerian community.",
      ),
      row(2, [
        { image: hePhone, alt: "Erkeb50 promotion shown on an Instagram feed on a phone" },
        { image: heConfort, alt: "“Heetch Confort” poster in Arabic with a passenger in a pink-lit car" },
      ], "4 / 5"),
    ],
  },
  {
    slug: "inpha-medis",
    title: "INPHA-MédiS 25th Anniversary",
    tags: ["Rebrand"],
    image: inpha,
    year: "2025",
    // TODO: the Framer page for this project still has template placeholder text — add the real story here.
    blocks: [
      row(1, [{ image: inStationery, alt: "INPHA-MédiS 25th anniversary stationery, mugs, calendar and tote bag" }]),
      row(1, [{ image: inBuilding, alt: "INPHA-MédiS 25 years banner on a glass office building at dusk" }]),
    ],
  },
  {
    slug: "ultra-rapide",
    title: "Ultra Rapide",
    tags: ["Brand Identity"],
    image: ultraRapide,
    services: ["Art Direction", "Brand Identity"],
    year: "2024",
    info: [
      "Ultra Rapide is an identity built around the idea of speed, movement, and instant action. The brand targets an active, fast-paced audience and uses a visual language designed to communicate velocity at first glance.",
      "The identity combines a dynamic sprinting figure, a bold italicized “ultra rapide” wordmark, and an energetic blue, yellow, and pink color palette. The brand voice reinforces the positioning through the French tagline: “Poussez-vous, ici on court ultra vite.”",
    ],
    blocks: [
      row(3, [
        { image: urTagline, alt: "“Poussez-vous, ici on court ultra vite !” in yellow on a dark motion-blurred background" },
        { image: urBottle, alt: "Blue Ultra Rapide water bottle in motion" },
        { image: urCap, alt: "Cream cap with the pink sprinting-figure icon in a blue bowl of lemons" },
      ], "4 / 5"),
      text(
        "Problem",
        "The challenge was to create a visual identity that could communicate speed and energy immediately, while remaining distinctive, readable, and adaptable across different brand applications.",
        "The brand needed more than simply a “fast” aesthetic. Its identity had to translate movement into a recognizable visual system, giving the business a strong personality while appealing to an audience that values speed, action, and efficiency.",
      ),
      row(1, [{ image: urTee, alt: "Ultra Rapide T-shirt, colour palette and logo on black" }]),
      text(
        "Solution",
        "I developed a speed-driven identity system centered around a sprinting figure that visually represents movement and urgency. The italicized wordmark reinforces this idea through its forward-leaning, energetic character.",
        "An electric blue and yellow foundation, supported by a vivid pink accent, creates a high-energy palette that gives the brand a playful yet highly visible presence. The colors and typography work together to create a sense of acceleration even in static applications.",
        "The tagline “Poussez-vous, ici on court ultra vite” extends the concept into the brand’s communication, giving the identity a confident and playful voice.",
        "The result is a high-velocity brand system where the icon, typography, color, and messaging all reinforce the same central idea: speed you can see.",
      ),
      row(1, [{ image: urKit, alt: "Ultra Rapide running vest, shorts, shoes and race bib on a track" }]),
      row(1, [{ image: urBillboard, alt: "Ultra Rapide tagline on a billboard outside a stadium" }]),
    ],
  },
  {
    slug: "twsel",
    title: "Twsel Express Logistics",
    tags: ["Brand Identity"],
    image: twsel,
    services: ["Art Direction", "Brand Identity"],
    year: "2026",
    info: [
      "Twsel Express is a logistics and delivery brand designed around the idea of movement, reliability, and scalability. The identity needed to function across a wide range of touchpoints, from small-format stationery to large-scale transportation and shipping applications.",
      "The visual system is centered around a “te” monogram enclosed within a square frame, supported by a navy-and-orange color palette. A custom typographic system and recurring wave pattern extend the identity across packaging, uniforms, vehicles, and marketing materials.",
    ],
    blocks: [
      row(2, [
        { image: twSheet, alt: "Twsel Express brand sheet: monogram construction, typeface, app icons and stationery" },
        { image: twHighway, alt: "Twsel Express delivery van on a coastal highway at sunset" },
      ], "3 / 4"),
      text(
        "Problem",
        "The challenge was to create a visual identity that could communicate trust and efficiency while remaining highly recognizable across very different physical scales.",
        "A logistics brand operates across numerous touchpoints, from business cards and documents to delivery vehicles and shipping containers. The identity therefore needed to remain simple, legible, and distinctive, even when reproduced at very large or very small sizes.",
        "It also needed to give Twsel Express a consistent visual language that could be extended beyond the logo itself.",
      ),
      row(1, [{ image: twTruck, alt: "Twsel Express branded truck at a loading dock" }]),
      text(
        "Solution",
        "I developed a scalable identity system built around the square “te” monogram. Its simple geometric construction allows the mark to remain immediately recognizable whether applied to stationery, uniforms, packaging, vehicles, or large freight containers.",
        "The navy-and-orange palette creates a balance between reliability and energy, while the custom typography establishes a consistent brand voice across communication materials.",
        "A recurring wave pattern was introduced as a secondary graphic element, reinforcing the ideas of movement, routes, and continuous flow while giving the brand additional visual recognition beyond the monogram.",
        "The result is a flexible logistics identity designed to travel with the business, maintaining consistency from the smallest piece of stationery to the largest transportation surface.",
      ),
      row(2, [
        { image: twFlag, alt: "Twsel Express flag against a blue sky" },
        { image: twContainer, alt: "Twsel Express label on a shipping container" },
      ], "3 / 4"),
      row(1, [{ image: twApps, alt: "Twsel Express stationery, envelope, truck and containers" }]),
    ],
  },
  {
    slug: "innovea",
    title: "INNOVEA Labs",
    tags: ["Brand Identity", "Brand Guidelines"],
    image: innovea,
    services: ["Art Direction", "Brand Identity", "Event Branding"],
    year: "2025",
    info: [
      "Innovea Laboratoires is a pharmaceutical and healthcare research company requiring a full brand identity to reflect its position in scientific innovation and clinical excellence.",
      "The brief called for a complete visual system — logo, color palette, typography, and brand applications — professional and credible enough for a pharmaceutical audience, while still feeling modern and distinct within a fairly conservative industry.",
    ],
    blocks: [
      row(2, [
        { image: inoEvent, alt: "INNOVEA event stage, roll-up banner and branded cup" },
        { image: inoLaptop, alt: "INNOVEA V monogram on a laptop and on an electric-blue grid" },
      ], "1 / 1"),
      text(
        "Concept",
        "I designed the identity around a refined “V” monogram, rendered as a sharp, faceted mark that reads as both a laboratory instrument and a mark of precision — evoking accuracy, trust, and scientific rigor.",
        "A deep navy and metallic silver-blue palette grounds the brand in credibility and clinical professionalism, while a secondary electric blue adds energy and a more contemporary, tech-forward edge.",
        "The wordmark pairs a clean, confident “INNOVEA” with a lighter tracked “LABORATOIRES” beneath it, keeping the full name legible and formal across all applications. The system was built to move fluidly between corporate, scientific, and event contexts without losing its identity.",
      ),
      row(1, [{ image: inoLogo, alt: "INNOVEA logo system: primary lockup, monogram and colour reversals" }]),
      text(
        "Solution",
        "I developed the identity as a comprehensive brand system, starting with the primary and secondary logo lockups, monogram variations, and full color and reversal guidelines to ensure consistency across dark and light backgrounds alike.",
        "From there, I extended the identity into real-world applications: laboratory and office photography treatments, a branded PowerPoint presentation template for internal and client-facing decks, corporate stationery, and large-scale event branding, including exhibition booth graphics, backlit signage, and digital screens for trade shows and conferences.",
        "Typography and color-coding rules were also defined to keep primary and secondary type usage consistent across every touchpoint, from a printed folder to a laboratory backdrop.",
      ),
      row(1, [{ image: inoSignage, alt: "INNOVEA Laboratoires sign on a textured wall in sunlight" }]),
      text(
        "Guidelines",
        "The system is documented in a full brand book: logo orientation and construction grid, wordmark design based on Poppins, primary and secondary colour palettes, brand patterns, typography, and rules for incorrect logo use.",
      ),
      row(1, [{ image: inoGuidelines, alt: "Pages from the INNOVEA brand guidelines: logo, grid, colours, wordmark, patterns, typography and misuse" }]),
    ],
  },
  {
    slug: "ariadne",
    title: "Ariadne",
    tags: ["Brand Identity"],
    image: arBoard,
    services: ["Brand Identity", "Logo Design"],
    info: [
      "Ariadne is a youthful clothing brand. The brief was to create a memorable brand identity with a minimalist, modern logo — simple, effective, and appealing to a young, progressive audience — built on three principles: comfort, relevance to fashion trends, and expression of individuality.",
    ],
    link: { label: "Full project on Behance", href: "https://www.behance.net/gallery/208883737/Ariadne-Clothing-Brand-Identity" },
    blocks: [
      text(
        "Solution",
        "The wordmark features a distinctive stylized “A”, the first letter of the brand name, while the “R” is drawn in a cursive style that adds a touch of elegance and sophistication. This stylized “R” becomes the key element of the identity — a simple, memorable symbol of the brand’s commitment to quality.",
        "A predominantly monochromatic colour scheme with a single red accent balances individuality with current fashion trends, giving Ariadne a modern, distinctive presence.",
      ),
      paper(4, [
        { image: ar1, alt: "Ariadne identity overview: hero image, brief, logo and colours" },
        { image: ar2, alt: "Ariadne logo construction, clear space and heart brand mark" },
        { image: ar3, alt: "Ariadne lifestyle applications and colour palette" },
        { image: ar4, alt: "Ariadne typography (Gabarito and Outfit) and repeating pattern" },
      ]),
    ],
  },
  {
    slug: "hiba-co",
    title: "Hiba & Co",
    tags: ["Brand Identity"],
    image: hbBoard,
    services: ["Brand Identity", "Logo Design", "Packaging"],
    info: [
      "Hiba & Co is a fashion studio that relies solely on natural materials, imported and manufactured with care. Its slogan, “Made with soul”, sets the tone for the whole identity.",
    ],
    link: { label: "Full project on Behance", href: "https://www.behance.net/gallery/162190171/Hiba-Co-Fashion-Studio-Brand-Identity" },
    blocks: [
      text(
        "Solution",
        "The logotype was fully hand-lettered — simple but elegant, to convey a sense of glamour and refinement — and paired with Playfair Display for supporting typography.",
        "A warm palette of brown, off-white, coral and black carries the identity across shopping bags, garment tags, stickers and apparel, with black, colour and white versions of the logo for every background.",
      ),
      paper(4, [
        { image: hb1, alt: "Hiba & Co logotype, slogan and typeface" },
        { image: hb2, alt: "Hiba & Co shopping bag, T-shirt, tags and sketchbook" },
        { image: hb3, alt: "Hiba & Co stickers and garment tags" },
        { image: hb4, alt: "Hiba & Co logo versions and colour palette" },
      ]),
    ],
  },
  {
    slug: "algerie-poste",
    title: "Algérie Poste — Chlef",
    tags: ["Packaging", "Rebrand"],
    image: apBoard,
    services: ["Packaging", "Print Production"],
    info: [
      "Algérie Poste is a public establishment of an industrial and commercial nature, operating both as a mail operator and as a financial institution.",
      "Its subsidiary in the Wilaya of Chlef requested a rebrand of their adhesive duct tape: a more detailed version carrying the agency’s name, to distinguish it from the other subsidiaries of the Algerian postal service.",
    ],
    link: { label: "Full project on Behance", href: "https://www.behance.net/gallery/184022365/Algerian-Postal-Service-Adhesive-Duct-Tape-rebranding" },
    blocks: [
      text(
        "Solution",
        "Blue and yellow ribbons were added beneath the logo, alongside the agency’s name, making the tape unique to Chlef while staying unmistakably Algérie Poste.",
        "Colours were separated and supplied as a production-ready PDF so the printing machine could read and colour each part accurately.",
      ),
      paper(4, [
        { image: ap1, alt: "Algérie Poste background and the Chlef brief" },
        { image: ap2, alt: "Old and new versions of the Algérie Poste duct tape" },
        { image: ap3, alt: "Mock-ups of the new Chlef duct tape rolls" },
        { image: ap4, alt: "Chlef duct tape applied on a concrete step" },
      ]),
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const services = [
  {
    title: "Brand Identity",
    image: afLogoNavy as StaticImageData | null,
    phone: null as StaticImageData | null,
    text: "I develop cohesive brand systems that go beyond logos—defining how your brand looks, feels, and communicates. The result is a distinct, memorable identity that builds trust and stands out in a crowded market.",
  },
  {
    title: "Social Media & Campaigns",
    image: hePromo,
    phone: null,
    text: "I design scroll-stopping social content and campaign visuals—from monthly calendars to product launches and city openings—built on a clear system so every post strengthens the brand and drives engagement.",
  },
  {
    title: "Packaging & Print",
    image: servicePackaging,
    phone: null,
    text: "From dielines and labels to roll-ups, medals and large-format signage, I prepare print-ready work that looks as good on the shelf as it does on screen, with the production know-how to get it printed right.",
  },
  {
    title: "UI/UX & Web Design",
    image: null,
    phone: ibMobile,
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

export type Stat = { value: number; decimals?: number; suffix: string; label: string; text: string };

// Every number here is backed by the CV — update them as they grow.
export const stats: Stat[] = [
  { value: 7, suffix: "+", label: "years of experience", text: "Branding, social media, print and UI/UX design since 2017." },
  { value: 14, suffix: "+", label: "brands & clients", text: "From Heetch and Beko to AMS Groupe and INPHA-MédiS." },
  { value: 2.7, decimals: 1, suffix: "K+", label: "stock assets published", text: "Graphic assets designed for Freepik and Adobe Stock." },
  { value: 46, suffix: "K+", label: "downloads worldwide", text: "Assets downloaded by designers around the world." },
];

// Newest first
export const articles = [
  { title: "Why Algerian Art Deserves Its Own Magazine", category: "Design", date: "Oct 4, 2026", image: artAlgerian },
  { title: "Why \u201cDiscount\u201d Doesn\u2019t Have to Mean \u201cBoring\u201d", category: "Design", date: "Aug 8, 2026", image: artFraenk },
  { title: "IKEA Turned the Football Wall Into a Sofa Sale", category: "Design", date: "Jul 16, 2026", image: artIkea },
  { title: "Studio Blackburn Gives Ellis Butchers a Cast of Characters From Meat", category: "Design", date: "Jan 12, 2026", image: artStandard },
];

export const clients = [
  { name: "Flash Graphic", image: logo01 },
  { name: "Heetch", image: logo02 },
  { name: "INNOVEA Laboratory", image: logo03 },
  { name: "Akyol Medical International", image: logo04 },
  { name: "Pulse", image: logo05 },
  { name: "Buzz", image: logo06 },
  { name: "INPHA-MédiS", image: logo07 },
  { name: "AMS Groupe", image: logo08 },
  { name: "AMS Agency", image: logo09 },
  { name: "Twsel Express", image: logo10 },
  { name: "Hiba & Co", image: logo11 },
  { name: "Beko", image: logo12 },
  { name: "Adem Fitt Groupe", image: logo13 },
  { name: "Telecoming", image: logo14 },
];

// Personal visual explorations shown on the About page
export const explorations = [explore1, explore2, explore3, explore4, explore5];

export const about = {
  intro:
    "Hi, I’m Ouss — a multidisciplinary graphic designer with 7+ years of experience across branding, visual communication, UI/UX design and social media content. I strengthen brand identities, grow engagement and deliver high-impact digital and print work.",
  approach:
    "I believe great design sits at the intersection of function and emotion. Every decision is guided by clarity, usability, and impact—ensuring that the final product communicates effectively while delivering a seamless user experience. AI-assisted tools are part of my process too: they speed up exploration and production, while the craft and the brand always stay in charge.",
  tools: ["Photoshop", "Illustrator", "InDesign", "After Effects", "Figma", "AI-assisted design"],
};

export const experience = [
  {
    company: "AMS Group SPA",
    href: "https://www.amsgroupe.com",
    role: "Graphic Designer",
    period: "03/2025 — Present",
    points: [
      "Create visual assets for digital and print communication.",
      "Ensure brand consistency across social media and marketing channels.",
      "Support marketing teams with creative concepts and visual execution.",
      "Integrate AI-assisted tools to speed up concept development, exploration and production while keeping brand integrity.",
    ],
  },
  {
    company: "Flash Graphic",
    href: "https://www.flashgraphic.net",
    role: "Graphic Designer & Community Manager",
    period: "09/2021 — Present",
    points: [
      "Responsible for all visual output, from print to web.",
      "Designed adhesive tapes and aluminium films for manufacturing, and operate the Roland large-format printer.",
      "Run the brand and its social presence on Facebook, Instagram and LinkedIn, plus the website and Ouedkniss store page.",
      "Improved customer service by 30% in six months through strategic social media campaigns, and increased product demand through paid ads.",
    ],
  },
  {
    company: "Freepik & Adobe Stock",
    role: "Graphic Assets Designer",
    // TODO: add the year both accounts closed, e.g. "09/2021 — 2025"
    period: "From 09/2021",
    points: [
      "Reached Level 3 contributor on Freepik with 2.7K+ published assets and 46.4K+ downloads.",
      "Published 500+ assets on Adobe Stock.",
      "Now selling brush kits for Procreate, Photoshop and Affinity directly on Gumroad.",
    ],
  },
  {
    company: "IB Digital (Belgium)",
    href: "https://ib-digital.com",
    role: "UI/UX Designer",
    period: "02/2022 — 11/2022",
    points: [
      "Designed website previews and templates proposed to prospective clients.",
      "Optimized existing websites and landing pages for clients.",
    ],
  },
  {
    company: "Merch Digger",
    role: "Junior Graphic Designer",
    period: "10/2018 — 08/2020",
    points: [],
  },
  {
    company: "Freelance",
    role: "Graphic Designer",
    period: "2017 — Present",
    points: [
      "Logos, posters, banners, social media content and brand identities.",
      "Identity design for Innovea Labs, A+ English School, Dikra Madjdouline Beauty Salon, Lekna Space Languages School, Pulse University Club Algiers, Stoflish University Club Tlemcen and others.",
      "Motion graphics and social media visuals for Heetch.",
    ],
  },
] as { company: string; href?: string; role: string; period: string; points: string[] }[];

export const education = [
  { school: "International Media Academy", title: "Professional Trainer — Infographic Design", period: "2025", note: "50 hours · MARAS 2025 session. Certified trainer in infographic design and visual information structuring." },
  { school: "Tlemcen University", title: "Master’s Degree in Sociolinguistics", period: "2018 — 2020" },
  { school: "Tlemcen University", title: "Bachelor’s Degree in English Language", period: "2015 — 2018" },
] as { school: string; title: string; period: string; note?: string }[];

/**
 * "More work" archive on the Works page. Each discipline picks a presentation:
 *   logos   — logo cards on their brand background
 *   posts   — social posts in a masonry wall
 *   objects — packaging / print pieces on a soft stage
 *   posters — framed prints
 *   web     — laptop + phone mockups (see webProjects)
 */
type Piece = { image: StaticImageData; alt: string; bg?: string };
export type ArchiveGroup = { title: string; kind: "logos" | "posts" | "objects" | "posters" | "web"; items: Piece[] };

export const archive: ArchiveGroup[] = [
  { title: "Logofolio", kind: "logos", items: [
    { image: w_logo_01, alt: "Accordons nos violons logo", bg: "#eeeeee" },
    { image: w_logo_02, alt: "Adem Fitt Groupe logo", bg: "#eeeeee" },
    { image: w_logo_03, alt: "Buzz logo", bg: "#eeeeee" },
    { image: w_logo_04, alt: "Twsel Express logo", bg: "#eeeeee" },
    { image: w_logo_05, alt: "INNOVEA Laboratory logo", bg: "#eeeeee" },
    { image: w_logo_06, alt: "Ariadne logo", bg: "#eeeeee" },
    { image: w_logo_07, alt: "AMS Technologie logo", bg: "#eeeeee" },
    { image: w_logo_08, alt: "AMS Modulaires logo", bg: "#eeeeee" },
    { image: w_logo_09, alt: "Medsim logo", bg: "#eeeeee" },
    { image: w_logo_10, alt: "Green Burger logo", bg: "#eeeeee" },
    { image: w_logo_11, alt: "FrancoNet logo", bg: "#eeeeee" },
    { image: w_logo_12, alt: "Citrus Energy Drinks logo", bg: "#eeeeee" },
    { image: w_logo_13, alt: "Crust & Cup logo", bg: "#eeeeee" },
    { image: w_logo_14, alt: "Green Soup logo", bg: "#eeeeee" },
    { image: w_logo_15, alt: "Centella logo", bg: "#eeeeee" },
    { image: w_logo_16, alt: "Crest monogram logo", bg: "#0d1015" },
    { image: w_logo_17, alt: "Meow logo", bg: "#0d1015" },
    { image: w_logo_18, alt: "FJ crest logo", bg: "#0d1015" },
    { image: w_logo_19, alt: "Design Pro logo", bg: "#0d1015" },
    { image: w_logo_20, alt: "Shield monogram logo", bg: "#0d1015" },
    { image: w_logo_21, alt: "S monogram logo", bg: "#0d1015" },
  ] },
  { title: "Social Media", kind: "posts", items: [
    { image: w_post_01, alt: "AMS Agency end-of-year gifts post" },
    { image: w_post_02, alt: "AMS Agency Movember post" },
    { image: w_post_03, alt: "AMS Agency packaging post" },
    { image: w_post_04, alt: "AMS Agency brand post" },
    { image: w_post_05, alt: "AMS Groupe Mother’s Day post" },
    { image: w_post_06, alt: "AMS Groupe Independence Day post" },
    { image: w_post_07, alt: "AMS Groupe Blue November post" },
    { image: w_post_08, alt: "AMS Groupe 1 November 1954 post" },
    { image: w_post_09, alt: "Capilos Colors product ad" },
    { image: w_post_10, alt: "Capilos Colors hair campaign" },
    { image: w_post_11, alt: "Capilos Colors shades campaign" },
    { image: w_post_12, alt: "Capilos Colors swirl campaign" },
    { image: w_post_13, alt: "Adem Fitt Tourism Algiers trip post" },
    { image: w_post_14, alt: "Adem Fitt Tourism summer post" },
    { image: w_post_15, alt: "Adem Fitt Tourism explore post" },
    { image: w_post_16, alt: "Adem Fitt Tourism travel post" },
    { image: w_post_17, alt: "INPHA-MédiS 1 November post" },
    { image: w_post_18, alt: "INPHA-MédiS disability day post" },
    { image: w_post_19, alt: "INPHA-MédiS world diabetes day post" },
    { image: w_post_20, alt: "INPHA-MédiS screening post" },
    { image: w_post_21, alt: "Flash Graphic roll-up banner post" },
    { image: w_post_22, alt: "Flash Graphic DHL tape post" },
    { image: w_post_23, alt: "Pulse suture training post" },
    { image: w_post_24, alt: "Pulse nursing training post" },
    { image: w_post_25, alt: "AIESEC global aspect post" },
  ] },
  { title: "Packaging", kind: "objects", items: [
    { image: w_pack_infinix_box, alt: "Infinix Hot 20S × PUBG Mobile special-edition box" },
    { image: w_pack_latrasse_dieline, alt: "La Trasse Dubai chocolate box dieline" },
    { image: w_pack_doubby_mockup, alt: "Doubby dôr chocolate bar mock-up" },
    { image: w_pack_rivano_buckets, alt: "Rivano Fix Primer paint buckets" },
    { image: w_pack_honey_jar, alt: "My Honey jar" },
    { image: w_pack_infinix_dieline, alt: "Infinix × PUBG box dieline" },
    { image: w_pack_doubby_dielines, alt: "Doubby dôr chocolate dielines" },
    { image: w_pack_rivano_pails, alt: "Rivano Fix Primer pails" },
    { image: w_pack_rivano_label, alt: "Rivano Fix Primer label" },
    { image: w_pack_honey_label, alt: "My Honey label" },
  ] },
  { title: "Print & Medals", kind: "objects", items: [
    { image: w_print_netto_banner, alt: "Netto Star & Magic billboard" },
    { image: w_print_netto_magic, alt: "Netto Magic roll-up" },
    { image: w_print_netto_star, alt: "Netto Star roll-up" },
    { image: w_print_alaksa_halwa, alt: "Al Aksa Halwa Turc banner" },
    { image: w_print_alaksa_tartilla, alt: "Al Aksa Tartilla banner" },
    { image: w_medal_1, alt: "COS 2024 race medal" },
    { image: w_medal_2, alt: "CAMA 10 km Kouba medal" },
    { image: w_medal_3, alt: "Algiers Urban Trail medal" },
    { image: w_medal_4, alt: "Nautical 2024 medal" },
    { image: w_medal_5, alt: "Trail Azro N’Thor winner medal" },
    { image: w_medal_6, alt: "Kids Trail finisher medal" },
    { image: w_medal_7, alt: "ASBAC semi-marathon medal" },
  ] },
  { title: "Posters & Apparel", kind: "posters", items: [
    { image: w_poster_car_01, alt: "Car-culture graphic" },
    { image: w_poster_car_02, alt: "Car-culture graphic" },
    { image: w_poster_car_03, alt: "Car-culture graphic" },
    { image: w_poster_car_04, alt: "Car-culture graphic" },
    { image: w_poster_car_05, alt: "Car-culture graphic" },
    { image: w_poster_car_06, alt: "Car-culture graphic" },
    { image: w_poster_car_07, alt: "Car-culture graphic" },
    { image: w_poster_car_08, alt: "Car-culture graphic" },
    { image: w_poster_car_09, alt: "Car-culture graphic" },
    { image: w_poster_car_10, alt: "Car-culture graphic" },
    { image: w_poster_space_01, alt: "Space & streetwear graphic" },
    { image: w_poster_space_02, alt: "Space & streetwear graphic" },
    { image: w_poster_space_03, alt: "Space & streetwear graphic" },
    { image: w_poster_space_04, alt: "Space & streetwear graphic" },
    { image: w_poster_space_05, alt: "Space & streetwear graphic" },
    { image: w_poster_space_06, alt: "Space & streetwear graphic" },
    { image: w_poster_space_07, alt: "Space & streetwear graphic" },
    { image: w_poster_space_08, alt: "Space & streetwear graphic" },
    { image: w_poster_space_09, alt: "Space & streetwear graphic" },
    { image: w_poster_space_10, alt: "Space & streetwear graphic" },
    { image: w_poster_space_11, alt: "Space & streetwear graphic" },
  ] },
  { title: "UI/UX & Web", kind: "web", items: [] },
  { title: "Web Banners", kind: "objects", items: [
    { image: w_banner_beko_dishwasher, alt: "Beko dishwasher web banner" },
    { image: w_banner_telecoming_1, alt: "Telecoming × Real Madrid banner" },
    { image: w_banner_telecoming_2, alt: "Telecoming × Real Madrid tickets banner" },
    { image: w_banner_telecoming_3, alt: "Telecoming × Real Madrid club banner" },
    { image: w_banner_beko_leaderboard, alt: "Beko leaderboard banner" },
  ] },
];

/** Website projects, shown in laptop / phone mockups on the Works page */
export const webProjects = [
  { name: "Buzz", note: "Landing page & app — online services marketplace", desktop: buzzDesktop, background: "linear-gradient(140deg, #ff3b7f, #c3004f)" },
  { name: "IB Digital", note: "Agency website", url: "https://ib-digital.com", desktop: ibDesktop, mobile: ibMobile, background: "linear-gradient(140deg, #e9e5ff, #ffe8df)" },
  { name: "Karin Bastin", note: "Consulting website", url: "https://karinbastin.com", desktop: kbDesktop, mobile: kbMobile, background: "linear-gradient(140deg, #24314a, #0c1220)" },
  { name: "AMS Groupe", note: "Group website & subsidiaries", desktop: amsDesktop, background: "linear-gradient(140deg, #2a63c4, #0a2a66)" },
] as { name: string; note: string; url?: string; desktop: StaticImageData; mobile?: StaticImageData; background: string }[];

/** Former stock profiles (both accounts are closed — kept as track record, not links) */
export const stockHistory = [
  { name: "Freepik", facts: ["Level 3 contributor", "2.7K+ assets", "46.4K+ downloads"] },
  { name: "Adobe Stock", facts: ["500+ assets", "200+ downloads"] },
];


/** Products on Gumroad (prices in USD — update when they change) */
export const products = [
  { name: "REDLINE 26 — Procreate & Photoshop Brush Kit", href: "https://oussdsgn.gumroad.com/l/26essentialbrushes", price: 13, image: product1 },
  { name: "INKWELL 12 — Ink & Comic Brush Kit", href: "https://oussdsgn.gumroad.com/l/otnjsc", price: 13, image: product2 },
  { name: "Chalk Brush Pack — 43 Brushes for Procreate, Photoshop & Clip Studio", href: "https://oussdsgn.gumroad.com/l/hevkh", price: 12, image: product3 },
  { name: "Scribbles for Lettering — 21 Photoshop Brushes", href: "https://oussdsgn.gumroad.com/l/kwkwmq", price: 10, image: product4 },
  { name: "50 Stroke & Splatter Brushes Collection", href: "https://oussdsgn.gumroad.com/l/stroke-splatter-brushes-collection", price: 15, image: product5 },
  { name: "Affinity Artistic Brushes Vol. 1", href: "https://oussdsgn.gumroad.com/l/affinity-artistic-brushes-vol-1", price: 13, image: product6 },
  { name: "30 Cloud Effect Photoshop Brushes", href: "https://oussdsgn.gumroad.com/l/cloud-effect-photoshop-brushes", price: 13, image: product7 },
  { name: "Blood Brushes for Photoshop", href: "https://oussdsgn.gumroad.com/l/blood-brushes-photoshop", price: 13, image: product8 },
  { name: "Glitter Luxe — Glitter Texture Multi-App Brushes", href: "https://oussdsgn.gumroad.com/l/glitter-luxe-brushes", price: 25, image: product9 },
];
