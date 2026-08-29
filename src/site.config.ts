// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Tillman Reuter',
  role: 'Forest Scientist',
  email: 'tillmanreuter@tuta.io',
  description: 'text',
  tagline: 'I research forest ecosystems using LiDAR and climb trees',
  social: [
    { label: 'E-Mail', href: 'mailto:tillmanreuter@tuta.io' },
    { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Tillman-Reuter'},
    { label: 'Mastodon', href: 'https://ecoevo.social/@tillmanreuter' },
    { label: 'Uni-Gö', href: 'https://uni-goettingen.de/en/704786.html' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = {
  arborist: [
    { label: 'Home', href: '/arborist' },
    { label: 'Blog', href: '/arborist/blog' },
    { label: 'Gallery', href: '/arborist/gallery' },
    { label: 'Contact', href: '/arborist/#bottom' },
    { label: 'Impressum', href: '/impressum' }
    // ...
  ],
  scientist: [
    { label: 'Home', href: '/scientist' },
    { label: 'Blog', href: '/scientist/blog' },
    { label: 'Gallery', href: '/scientist/gallery' },
    { label: 'Contact', href: '/scientist/#bottom' },
    { label: 'Impressum', href: '/impressum' },
  ],
  impressum: [
    { label: 'Home', href: '/' },
  ],
  default: [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: 'mailto:tillmanreuter@tuta.io' },
    { label: 'Impressum', href: '/impressum' },
  ],
};