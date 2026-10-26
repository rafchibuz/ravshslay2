export type Asset = {
  assetId: string;
  chapterId: string;
  eventId: string | null;
  role: string;
  src: string | null;
  kind: 'real' | 'generated' | 'edited' | 'supplied-artwork' | 'placeholder';
  rightsStatus: 'provided-by-user' | 'missing';
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
  ...['2026-01-01', '2026-01-02', '2026-01-03'].map((eventId) => ({
    assetId: `${eventId}-media`, chapterId: '2026-01', eventId, role: 'documentary event media',
    src: null, kind: 'placeholder' as const, rightsStatus: 'missing' as const,
    approved: false, alt: 'Оригинальный материал события ожидается',
  })),
];
