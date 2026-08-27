// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Tillman Reuter',
  role: 'Forest Scientist',
  email: 'tillman.reuter@tuta.io',
  tagline: 'I research forest ecosystems using LiDAR and climb trees',
  description:
    'Who I am and how what I do has to do with you', //goes under about on the main page
  status: 'Currently studying to obtain Dr. rer. nat at University of Göttingen',
  social: [
    { label: 'E-Mail', href: 'mailto:tillmanreuter@tuta.io' },
    { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Tillman-Reuter' },
    { label: 'Mastodon', href: 'https://ecoevo.social/@tillmanreuter' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = {
  arborist: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/arborist/blog' },
    { label: 'Gallery', href: '/arborist/gallery' },
    { label: 'Contact', href: '/arborist/#contact' }
    // ...
  ],
  scientist: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/scientist/blog' },
    { label: 'Gallery', href: '/scientist/gallery' },
    { label: 'Contact', href: '/scientist/#contact' }
  ],
  default: [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/#contact' }
  ],
};