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
    assetId: 'january-snow-breakout', chapterId: '2026-01', eventId: null, role: 'scroll scene artwork',
    src: '/assets/visuals/ravshann-snow.png', kind: 'supplied-artwork', rightsStatus: 'provided-by-user',
    approved: false, alt: 'Постановочная иллюстрация: RavshanN пробирается через сугроб',
  },
  {
    assetId: 'january-winter-night', chapterId: '2026-01', eventId: null, role: 'decorative chapter background',
    src: '/assets/generated/january-winter-night.webp', kind: 'generated', rightsStatus: 'generated-in-project',
    approved: false, alt: 'Декоративный заснеженный ночной лес с огнями',
  },
  {
    assetId: 'january-snow-rolls', chapterId: '2026-01', eventId: '2026-01-01', role: 'supplied companion image beside stream poster',
    src: '/assets/visuals/snow-rolls.webp', kind: 'supplied-artwork', rightsStatus: 'provided-by-user',
    approved: false, alt: 'Заснеженный Rolls-Royce',
  },
  ...['2026-01-01', '2026-01-02', '2026-01-03'].map((eventId) => ({
    assetId: `${eventId}-media`, chapterId: '2026-01', eventId, role: 'documentary event media',
    src: null, kind: 'placeholder' as const, rightsStatus: 'missing' as const,
    approved: false, alt: 'Оригинальный материал события ожидается',
  })),
];
