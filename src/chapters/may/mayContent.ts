import sourceRegistry from '../../content/events.2026.json';

export const mayDamas = {
  id: '2026-05-02',
  sourceTitle: 'Гонка на дамасах',
  title: 'Гонки на Дамасах',
  imageReady: '/assets/may/damas-gesture-ready.png',
  imageWave: '/assets/may/damas-gesture-wave.png',
  videoId: 'kXdliqGsjMs',
  videoUrl: 'https://www.youtube.com/watch?v=kXdliqGsjMs',
} as const;

const may = sourceRegistry.months.find((month) => month.id === '2026-05');
if (!may?.events.some((event) => event.id === mayDamas.id && event.sourceTitle === mayDamas.sourceTitle)) {
  throw new Error('May Damas scene must match the editorial registry');
}
