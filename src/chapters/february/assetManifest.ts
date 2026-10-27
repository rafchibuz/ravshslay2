import type { Asset } from '../january/assetManifest';

export const februaryAssets: Asset[] = [
  {
    assetId: 'february-chimaev-group', chapterId: '2026-02', eventId: '2026-02-01',
    role: 'transparent artwork beside vertical reels', src: '/assets/visuals/chimaev-group.png',
    kind: 'supplied-artwork', rightsStatus: 'provided-by-user', approved: false,
    alt: 'Равшан с Хамзатом Чимаевым и участником совместных съёмок',
  },
  ...[1, 2, 3].map((number) => ({
    assetId: `february-chimaev-reel-${number}`, chapterId: '2026-02', eventId: '2026-02-01',
    role: `vertical reel ${number}`, src: `/assets/video/february-reel-${number}.mp4`,
    kind: 'real' as const, rightsStatus: 'provided-by-user' as const, approved: false,
    alt: `Рилс ${number} о встрече с Хамзатом Чимаевым`,
  })),
];
