export const site = {
  name: 'LUMIÈRE',
  fullName: 'LUMIÈRE — Med Spa & Skin Studio',
  tagline: 'Skin care that starts with medicine.',
  phone: '(303) 555-0119',
  phoneHref: 'tel:+13035550119',
  address: '212 Larimer Street, Denver, CO 80205',
  hours: [
    ['Tuesday – Friday', '9:00 – 18:00'],
    ['Saturday', '9:00 – 16:00'],
    ['Sunday – Monday', 'Closed'],
  ],
  rating: '4.9',
  reviewCount: '400+',
};

export const navLinks = [
  { label: 'Treatments', href: '/treatments' },
  { label: 'About', href: '/about' },
  { label: 'Results', href: '/results' },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact', href: '/contact' },
];

export type Treatment = {
  slug: string;
  title: string;
  category: 'Skin' | 'Laser' | 'Injectables' | 'Body';
  priceFrom: number;
  duration: string;
  downtime: string;
  excerpt: string;
  image: string;
  benefits: string[];
};

export const treatments: Treatment[] = [
  {
    slug: 'signature-facial',
    title: 'Signature Facial',
    category: 'Skin',
    priceFrom: 149,
    duration: '60 min',
    downtime: 'None',
    excerpt: 'A deep-cleansing reset, tailored to your skin.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&auto=format&fit=crop',
    benefits: ['Double cleanse + exfoliation', 'Extractions as needed', 'LED + hydration mask'],
  },
  {
    slug: 'chemical-peel',
    title: 'Chemical Peel',
    category: 'Skin',
    priceFrom: 199,
    duration: '45 min',
    downtime: '2–3 days',
    excerpt: 'Resurface tone and texture in one visit.',
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80&auto=format&fit=crop',
    benefits: ['Dullness + sun damage', 'Medical-grade acids', 'Take-home aftercare kit'],
  },
  {
    slug: 'microneedling',
    title: 'Microneedling',
    category: 'Skin',
    priceFrom: 249,
    duration: '60 min',
    downtime: '1–2 days',
    excerpt: 'Collagen induction for smoother, firmer skin.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80&auto=format&fit=crop',
    benefits: ['Texture + acne scars', 'Numbing included', 'Growth-factor boost option'],
  },
  {
    slug: 'wrinkle-relaxers',
    title: 'Wrinkle Relaxers',
    category: 'Injectables',
    priceFrom: 299,
    duration: '30 min',
    downtime: 'None',
    excerpt: 'Soften fine lines. Subtle, never frozen.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop',
    benefits: ['Forehead + crow’s feet', 'Provider-led dosing', '2-week follow-up included'],
  },
  {
    slug: 'dermal-fillers',
    title: 'Dermal Fillers',
    category: 'Injectables',
    priceFrom: 549,
    duration: '45 min',
    downtime: '1–2 days',
    excerpt: 'Restore volume with a natural finish.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80&auto=format&fit=crop',
    benefits: ['Lips, cheeks, jawline', 'Premium HA filler', 'Natural-look promise'],
  },
  {
    slug: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    category: 'Laser',
    priceFrom: 129,
    duration: '30 min',
    downtime: 'None',
    excerpt: 'Lasting reduction, safe for all skin tones.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&auto=format&fit=crop',
    benefits: ['All skin tones', 'Medical-grade diode', '6-session plans available'],
  },
  {
    slug: 'ipl-photofacial',
    title: 'IPL Photofacial',
    category: 'Laser',
    priceFrom: 279,
    duration: '45 min',
    downtime: '1 day',
    excerpt: 'Fade sun damage, redness and dark spots.',
    image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80&auto=format&fit=crop',
    benefits: ['Sun spots + redness', 'Even tone boost', 'SPF plan included'],
  },
  {
    slug: 'lymphatic-massage',
    title: 'Lymphatic Massage',
    category: 'Body',
    priceFrom: 179,
    duration: '60 min',
    downtime: 'None',
    excerpt: 'De-puff, drain and reset, head to toe.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&auto=format&fit=crop',
    benefits: ['Post-travel reset', 'Private room', 'Herbal tea ritual'],
  },
];

export const reviews = [
  { name: 'Dana W.', treatment: 'Microneedling', text: 'Three weeks post-microneedling and my skin has never looked better.' },
  { name: 'Priya S.', treatment: 'Wrinkle Relaxers', text: 'Finally a place that listens. Subtle, nobody guessed.' },
  { name: 'Meg T.', treatment: 'Chemical Peel', text: 'The peel was quick and the flaking was gone by Friday.' },
  { name: 'Alicia R.', treatment: 'Laser Hair Removal', text: 'Six sessions in and I have not shaved in months.' },
  { name: 'Jordan K.', treatment: 'Signature Facial', text: 'Calm, spotless, zero upsell on my lunch break.' },
  { name: 'Carmen V.', treatment: 'IPL Photofacial', text: 'Sun spots faded more in one visit than a year of creams.' },
];

export const faqs = [
  { q: 'Who performs the treatments?', a: 'Every treatment is performed or directly supervised by a board-certified provider. You always know who is treating you and why.' },
  { q: 'Does it hurt?', a: 'Most guests describe facials and laser as warm pressure. Injectables use ultra-fine needles + numbing. We check in constantly.' },
  { q: 'How much downtime should I plan for?', a: 'Most have none. Peels need 2–3 days of flaking, microneedling 1–2 days of pinkness. Your plan lists it upfront.' },
  { q: 'How do I know what I need?', a: 'Start with a free 15-minute consult. We map concern to plan with exact pricing — take it home, no pressure.' },
  { q: 'Can I cancel or reschedule?', a: 'Yes, free up to 24h before. Memberships cancel anytime from your portal.' },
];
