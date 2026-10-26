export type Asset = {
  assetId: string;
  chapterId: string;
  eventId: string | null;
  role: string;
  src: string | null;
  kind: 'real' | 'generated' | 'edited' | 'placeholder';
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
    assetId: 'january-atmosphere', chapterId: '2026-01', eventId: null, role: 'decorative backdrop',
    src: null, kind: 'placeholder', rightsStatus: 'missing', approved: false,
    alt: 'Декоративная зимняя атмосфера',
    prompt: 'Abstract cinematic winter stage, near-black glass, restrained gold light thread, icy blue glints, subtle frost, no people, no event imagery, no typography, wide 16:9 and tall 9:16 crops.',
  },
  ...['2026-01-01', '2026-01-02', '2026-01-03'].map((eventId) => ({
    assetId: `${eventId}-media`, chapterId: '2026-01', eventId, role: 'documentary event media',
    src: null, kind: 'placeholder' as const, rightsStatus: 'missing' as const,
    approved: false, alt: 'Оригинальный материал события ожидается',
  })),
];
