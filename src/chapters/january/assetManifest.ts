export type Asset = {
  assetId: string;
  chapterId: string;
  eventId: string | null;
  role: string;
  src: string | null;
  kind: 'real' | 'generated' | 'edited' | 'supplied-artwork' | 'placeholder';
  rightsStatus: 'provided-by-user' | 'generated-in-project' | 'missing';
  approved: boolean;
  alt: string;
  prompt?: string;
};

export const assetManifest: Asset[] = [
  {
    assetId: 'hero-portrait', chapterId: 'hero', eventId: null, role: 'hero cutout',
    src: '/assets/real/ravshann-king.png', kind: 'edited', rightsStatus: 'provided-by-user',
    approved: false, alt: 'RavshanN в короне и королевской мантии',
  },
  {
    assetId: 'january-snow-cutout', chapterId: '2026-01', eventId: null, role: 'static winter opening cutout',
    src: '/assets/visuals/ravshann-snow-cutout.webp', kind: 'supplied-artwork', rightsStatus: 'provided-by-user',
    approved: false, alt: 'RavshanN пробирается сквозь глубокий снег',
  },
  {
    assetId: 'january-winter-abstract', chapterId: '2026-01', eventId: null, role: 'continuous vector background',
    src: '/assets/visuals/winter-abstract.svg', kind: 'edited', rightsStatus: 'generated-in-project',
    approved: false, alt: 'Абстрактные ледяные линии и снежная пыль',
  },
  {
    assetId: 'january-face-beard', chapterId: '2026-01', eventId: '2026-01-01', role: 'face wipe initial portrait',
    src: '/assets/visuals/ravshann-face-beard.webp', kind: 'supplied-artwork', rightsStatus: 'provided-by-user',
    approved: false, alt: 'RavshanN с бородой',
  },
  {
    assetId: 'january-face-clean', chapterId: '2026-01', eventId: '2026-01-01', role: 'face wipe final portrait',
    src: '/assets/visuals/ravshann-face-clean.webp', kind: 'supplied-artwork', rightsStatus: 'provided-by-user',
    approved: false, alt: 'RavshanN без бороды',
  },
  ...['2026-01-01', '2026-01-02', '2026-01-03'].map((eventId) => ({
    assetId: `${eventId}-media`, chapterId: '2026-01', eventId, role: 'documentary event media',
    src: null, kind: 'placeholder' as const, rightsStatus: 'missing' as const,
    approved: false, alt: 'Оригинальный материал события ожидается',
  })),
];
