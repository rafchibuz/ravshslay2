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
  {
    assetId: 'january-brothers-square', chapterId: '2026-01', eventId: '2026-01-02', role: 'square editorial artwork beside video phone',
    src: '/assets/visuals/brothers-square.webp', kind: 'supplied-artwork', rightsStatus: 'provided-by-user',
    approved: false, alt: 'Брат и Брат 2 — двое друзей в кожаных куртках',
  },
  {
    assetId: 'january-mafia-duology', chapterId: '2026-01', eventId: '2026-01-03', role: 'transparent character and quote artwork beside game archives',
    src: '/assets/visuals/mafia-duology.png', kind: 'supplied-artwork', rightsStatus: 'provided-by-user',
    approved: false, alt: 'RavshanN в кожаной куртке и цитата о его истории',
  },
  {
    assetId: 'january-litvin-sedation', chapterId: '2026-01', eventId: '2026-01-04', role: 'transparent cutout beside YouTube video',
    src: '/assets/visuals/litvin-sedation.png', kind: 'supplied-artwork', rightsStatus: 'provided-by-user',
    approved: false, alt: 'Равшан и участник выпуска Литвина о седации',
  },
  {
    assetId: 'january-litvin-youtube', chapterId: '2026-01', eventId: '2026-01-04', role: 'embedded YouTube video',
    src: 'https://youtu.be/RzZn5SlTQU8?si=EPwxj6HtWqYQHppc', kind: 'real', rightsStatus: 'provided-by-user',
    approved: false, alt: 'Видео Литвина о седации с участием Равшана',
  },
  ...[1, 2].flatMap((part) => ([
    {
      assetId: `january-brothers-video-${part}`, chapterId: '2026-01', eventId: '2026-01-02', role: `phone video ${part}`,
      src: `/assets/video/brat-${part}.mp4`, kind: 'edited' as const, rightsStatus: 'provided-by-user' as const,
      approved: false, alt: `Видео ${part} в телефоне`,
    },
    {
      assetId: `january-brothers-poster-${part}`, chapterId: '2026-01', eventId: '2026-01-02', role: `phone poster ${part}`,
      src: `/assets/video/brat-${part}-poster.webp`, kind: 'edited' as const, rightsStatus: 'provided-by-user' as const,
      approved: false, alt: `Обложка видео ${part}`,
    },
  ])),
  ...['2026-01-01', '2026-01-03'].map((eventId) => ({
    assetId: `${eventId}-media`, chapterId: '2026-01', eventId, role: 'documentary event media',
    src: null, kind: 'placeholder' as const, rightsStatus: 'missing' as const,
    approved: false, alt: 'Оригинальный материал события ожидается',
  })),
];
