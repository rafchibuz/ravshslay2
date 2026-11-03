import sourceRegistry from '../../content/events.2026.json';

export const julyTasting = {
  id: '2026-07-01',
  sourceTitle: 'Дегустация вкуса Равшана',
  image: '/assets/july/lit-energy-tasting.png',
  videos: [
    { id: '7O2DFqLDRRs', url: 'https://www.youtube.com/watch?v=7O2DFqLDRRs', title: 'Дегустация вкуса Равшана с блогерами', label: 'СМОТРЕТЬ С БЛОГЕРАМИ' },
    { id: 'S6BO_i1ch_Y', url: 'https://www.youtube.com/watch?v=S6BO_i1ch_Y', title: 'Дегустация вкуса Равшана с подписчиками', label: 'СМОТРЕТЬ С ПОДПИСЧИКАМИ' },
  ],
} as const;

export const julyClay = {
  id: '2026-07-02',
  sourceTitle: 'Лепка глины с Лунаком',
  image: '/assets/july/clay-with-lunak.png',
  videoId: '-U-F_dWjiJQ',
  videoUrl: 'https://www.youtube.com/watch?v=-U-F_dWjiJQ',
  title: 'Лепка глины с Лунаком',
} as const;

export const julyRocket = {
  id: '2026-07-03',
  sourceTitle: 'Запуск ракеты лит энержи',
  animation: '/assets/july/rocket/LIT_ENERGY_launch_transparent.webp',
  still: '/assets/july/rocket/01_rocket_standing.png',
  videoSrc: '/assets/july/rocket/rocket-launch.mp4',
  title: 'Запуск ракеты LIT ENERGY',
} as const;

const july = sourceRegistry.months.find((month) => month.id === '2026-07');
if (!july?.events.some((event) => event.id === julyTasting.id && event.sourceTitle === julyTasting.sourceTitle)) {
  throw new Error('July tasting scene must match the editorial registry');
}
if (!july.events.some((event) => event.id === julyClay.id && event.sourceTitle === julyClay.sourceTitle)) {
  throw new Error('July clay scene must match the editorial registry');
}
if (!july.events.some((event) => event.id === julyRocket.id && event.sourceTitle === julyRocket.sourceTitle)) {
  throw new Error('July rocket scene must match the editorial registry');
}
