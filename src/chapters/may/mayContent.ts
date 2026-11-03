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

export const mayKaha = {
  id: '2026-05-03',
  sourceTitle: 'ИРЛ с Кахой',
  title: 'ИРЛ с Кахой',
  image: '/assets/may/irl-kaha.png',
  videoId: 'g9kJIgYj-Io',
  videoUrl: 'https://www.youtube.com/watch?v=g9kJIgYj-Io',
} as const;

const may = sourceRegistry.months.find((month) => month.id === '2026-05');
if (!may?.events.some((event) => event.id === mayDamas.id && event.sourceTitle === mayDamas.sourceTitle)) {
  throw new Error('May Damas scene must match the editorial registry');
}
if (!may.events.some((event) => event.id === mayKaha.id && event.sourceTitle === mayKaha.sourceTitle)) {
  throw new Error('May Kaha scene must match the editorial registry');
}
