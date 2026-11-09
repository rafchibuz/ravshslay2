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

export const julyQuiz = {
  id: '2026-07-04', sourceTitle: 'Своя игра Футбольная тематика',
  videoId: 'qIVhtivg8wg', videoUrl: 'https://www.youtube.com/watch?v=qIVhtivg8wg',
  title: 'Своя игра: футбольный выпуск с блогерами',
} as const;

export const julyBmw = {
  id: '2026-07-05', sourceTitle: 'Покупка BMW X5M, Чечня',
  image: '/assets/july/bmw-x5m.png',
  videos: [
    { id: '9v1f2KY5EaM', url: 'https://www.youtube.com/watch?v=9v1f2KY5EaM', title: 'Покупка BMW X5 M и поездка в Чечню', label: 'СМОТРЕТЬ ПОКУПКУ' },
    { id: '0EyYtGarbis', url: 'https://www.youtube.com/watch?v=0EyYtGarbis', title: 'Реакция отца на BMW X5 M', label: 'СМОТРЕТЬ РЕАКЦИЮ' },
  ],
} as const;

export const julyWorldCup = {
  id: '2026-07-07', sourceTitle: 'ЧМ 2026',
  reactionImage: '/assets/july/world-cup-reaction.png',
  finalImage: '/assets/july/world-cup-final.png',
} as const;

export const julyStaya = {
  id: '2026-07-06', sourceTitle: 'Шашлыки с пацанами',
  image: '/assets/july/staya-shashlik.png',
  clipSrc: '/assets/july/staya-electric-moto.mp4',
  videoId: 'bQd2QTE-oAo', videoUrl: 'https://www.youtube.com/watch?v=bQd2QTE-oAo',
  title: 'Шашлыки со СТАЕЙ и первая поездка на электромотоцикле',
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
for (const scene of [julyQuiz, julyBmw, julyWorldCup, julyStaya]) {
  if (!july.events.some((event) => event.id === scene.id && event.sourceTitle === scene.sourceTitle)) {
    throw new Error(`July scene ${scene.id} must match the editorial registry`);
  }
}
