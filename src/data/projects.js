import * as a from '../assets';

/**
 * ONE flat list. Each project is named after its BRAND / PROJECT (not its type).
 * `phase`  -> the group it belongs to; drives the badge and the filter chips.
 * `format` -> what was delivered (shown small under the badge).
 * `kind`   -> 'video' | 'image' (only decides which viewer opens).
 * Add a project = add one object. Add a phase = just use a new phase string.
 */
export const projects = [
  // ---- Motion & VFX ----
  { id: 'nacoss-hod-cup', name: 'NACOSS HOD Cup', phase: 'Motion & VFX', format: 'Event Title Animation', kind: 'video',
    thumbnail: a.an9Thumb, media: a.an9Video,
    description: 'Dynamic motion title for the NACOSS HOD Cup with energetic animation, smooth transitions and an exciting event introduction.' },
  { id: 'mc-flow', name: 'MC Flow', phase: 'Motion & VFX', format: 'Explainer Animation', kind: 'video',
    thumbnail: a.an0Thumb, media: a.an0Video,
    description: 'Explainer animation for MC Flow with dynamic motion graphics and clear messaging.' },
  { id: 'quickpro', name: 'Quickpro', phase: 'Motion & VFX', format: 'Logo Animation', kind: 'video',
    thumbnail: a.an5Thumb, media: a.an5Video,
    description: 'High-impact logo animation combining fluid motion, precise timing and engaging effects for a memorable brand intro.' },
  { id: 'workmerate', name: 'WorkMerate', phase: 'Motion & VFX', format: 'Product Motion Graphic', kind: 'video',
    thumbnail: a.an11Thumb, media: a.an11Video,
    description: "Motion graphic showcasing the platform's ease of use and key features through dynamic visuals and smooth transitions." },
  { id: 'nccf-urban-rugged', name: 'NCCF — Urban Rugged', phase: 'Motion & VFX', format: 'Event Teaser', kind: 'video',
    thumbnail: a.an14Thumb, media: a.an14Video,
    description: 'Teaser animation for the upcoming Urban Rugged event, built on dynamic visuals and smooth transitions.' },
  { id: 'sumal', name: 'SUMAL', phase: 'Motion & VFX', format: 'Logo Animation', kind: 'video',
    thumbnail: a.an12Thumb, media: a.an12Video,
    description: 'Logo animation with smooth motion graphics and creative transitions that bring the SUMAL identity to life.' },
  { id: 'item-7', name: 'Item 7', phase: 'Motion & VFX', format: 'Logo Animation', kind: 'video',
    thumbnail: a.an13Thumb, media: a.an13Video,
    description: 'Logo animation for Item 7 with dynamic transitions and polished visual effects.' },
  { id: 'uinspire-class', name: 'Uinspire Class', phase: 'Motion & VFX', format: 'Promo Clip', kind: 'video',
    thumbnail: a.an8Thumb, media: a.an8Video,
    description: 'Short promotional clip highlighting the Uinspire class.' },
  { id: 'nacoss-promo', name: 'NACOSS Achievements', phase: 'Motion & VFX', format: 'Promo Clip', kind: 'video',
    thumbnail: a.an7Thumb, media: a.an7Video,
    description: 'Short promotional clip highlighting NACOSS achievements.' },
  // TODO: add the brand name for these two
  { id: 'logo-animation-showcase', name: 'Logo Animation Showcase', phase: 'Motion & VFX', format: 'Logo Animation', kind: 'video',
    thumbnail: a.an4Thumb, media: a.an4Video,
    description: 'Sleek logo animation using smooth transitions and modern motion effects to strengthen brand identity.' },
  { id: 'abstract-explainer', name: 'Abstract Explainer', phase: 'Motion & VFX', format: 'Explainer Video', kind: 'video',
    thumbnail: a.an6Thumb, media: a.an6Video,
    description: 'Abstract motion graphic piece showcasing smooth transitions.' },

  // ---- AI Video ---- (TODO: replace placeholder descriptions)
  { id: '44-80-gram', name: '44.80 Gram', phase: 'AI Video', format: 'AI Promo Video', kind: 'video',
    thumbnail: a.vd1Thumb, media: a.vd1Video,
    description: 'AI-assisted promotional video for 44.80 Gram with clean cuts and transitions.' },
  { id: 'adufe-signature', name: 'Adufe Signature', phase: 'AI Video', format: 'AI Promo Video', kind: 'video',
    thumbnail: a.vd2Thumb, media: a.vd2Video,
    description: 'AI-assisted brand video for Adufe Signature.' },
  { id: 'adufe-signature-skincare', name: 'Adufe Signature Skincare', phase: 'AI Video', format: 'AI Product Video', kind: 'video',
    thumbnail: a.vd3Thumb, media: a.vd3Video,
    description: 'AI-assisted product video for the Adufe Signature skincare line.' },

  // ---- Brand Identity ----
  { id: 'mc-sporting', name: 'MC Sporting', phase: 'Brand Identity', format: 'Brand Guide', kind: 'image',
    thumbnail: a.dmDesign, media: a.dmDesign,
    description: 'Branding and marketing graphic showcasing the MC Sporting creative identity.' },
  { id: 'da-musik-celebrate', name: 'Da Musik — "Celebrate"', phase: 'Brand Identity', format: 'Album Cover', kind: 'image',
    thumbnail: a.daMusik, media: a.daMusik,
    description: 'Vibrant album cover with bold typography and strong colour contrast.' },
  { id: 'nacoss-corporate-event', name: 'NACOSS Corporate Event', phase: 'Brand Identity', format: 'Tri-fold Brochure', kind: 'image',
    thumbnail: a.pamphlet, media: a.pamphlet,
    description: 'Elegant tri-fold brochure layout for the NACOSS corporate event.' },
  { id: 'yosola-electrical', name: 'Yosola Electrical Services', phase: 'Brand Identity', format: 'Business Card', kind: 'image',
    thumbnail: a.yesCard, media: a.yesCard,
    description: 'Professional business card design for Yosola Electrical Services.' },

  // ---- Social Media ----
  { id: 'airaide-masterclass-form', name: 'AIRAIDE AI Masterclass', phase: 'Social Media', format: 'Registration Form Header', kind: 'image',
    thumbnail: a.socNacos, media: a.socNacos,
    description: 'Registration form header promoting the AIRAIDE AI Masterclass.' },
  { id: 'airaide-masterclass-reminder', name: 'AIRAIDE AI Masterclass — Reminder', phase: 'Social Media', format: 'Instagram Post', kind: 'image',
    thumbnail: a.aimasterclass, media: a.aimasterclass,
    description: 'Minimal reminder post for the AI Masterclass.' },
  { id: 'nigeria-act-2025', name: 'Nigeria ACT 2025', phase: 'Social Media', format: '40-Day Countdown Post', kind: 'image',
    thumbnail: a.nacos, media: a.nacos,
    description: 'Countdown campaign post building momentum toward Nigeria ACT 2025.' },
  // TODO: add the brand names for these two
  { id: 'facebook-ad-set', name: 'Facebook Ad Set', phase: 'Social Media', format: 'Ad Creatives', kind: 'image',
    thumbnail: a.facebookAds, media: a.facebookAds,
    description: 'Ad creatives designed for optimized Facebook engagement.' },
  { id: 'linkedin-carousel', name: 'LinkedIn Carousel', phase: 'Social Media', format: 'Carousel', kind: 'image',
    thumbnail: a.linkedinCarousel, media: a.linkedinCarousel,
    description: 'Professional carousel tailored for LinkedIn marketing.' },
];

// Filter chips, in display order. Any phase used above but missing here is appended automatically.
const PHASE_ORDER = ['Motion & VFX', 'Brand Identity', 'Social Media', 'AI Video'];
export const phases = [
  ...PHASE_ORDER,
  ...[...new Set(projects.map((p) => p.phase))].filter((p) => !PHASE_ORDER.includes(p)),
];
