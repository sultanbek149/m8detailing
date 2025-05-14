export default [
  { UserAgent: '*' },
  { Allow: '/' },
  { BlankLine: true },

  // Be aware that this will NOT work on target: 'static' mode
  { Sitemap: (req) => `https://detailing.8milya.kz/sitemap.xml` },
];
