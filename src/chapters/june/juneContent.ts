import sourceRegistry from '../../content/events.2026.json';

export const juneNiva = {
  id: '2026-06-01',
  sourceTitle: 'ИРЛ стримы с бустером, анаром',
  image: '/assets/june/booster-niva.png',
  videos: [
    { id: 'M_SeJRHUm9A', url: 'https://www.youtube.com/watch?v=M_SeJRHUm9A', title: 'ИРЛ с Бустером на новой Ниве', label: 'ИРЛ / ПОЕХАЛИ' },
    { id: 'mEj-ZetQBmM', url: 'https://www.youtube.com/watch?v=mEj-ZetQBmM', title: 'Нива сломалась в первый день', label: 'ПЕРВЫЙ ДЕНЬ / ПОЛОМКА' },
  ],
} as const;

export const juneClassico = {
  id: '2026-06-02',
  sourceTitle: 'Медиа футбол блогеры vs стримеры',
  title: 'BetBoom Медиа Классико',
  portrait: '/assets/june/ravshan-mediaclassico-cutout.png',
  car: '/assets/june/bmw-mediaclassico.png',
  videoId: 'Dr2-b4tL_8Q',
  videoUrl: 'https://www.youtube.com/live/Dr2-b4tL_8Q?si=fQ3V2L1XrQyJ4NW-',
} as const;

export const juneDriving = {
  id: '2026-06-03',
  sourceTitle: 'Обучения Ростика вождению',
  reaction: '/assets/june/rostik-reaction.png',
  driving: '/assets/june/rostik-driving.png',
  meeting: '/assets/june/rostik-meeting.png',
  videoId: 'PDYfVgNaBmE',
  videoUrl: 'https://www.youtube.com/watch?v=PDYfVgNaBmE',
  title: 'Обучение Ростика вождению — запись стрима',
} as const;

// This project was added directly by the user after the initial editorial list.
export const juneVaz = {
  id: '2026-06-vaz',
  image: '/assets/june/vaz-2114-lambo.png',
  videoId: 'RD_f9twr6B4',
  videoUrl: 'https://www.youtube.com/watch?v=RD_f9twr6B4',
  title: 'ВАЗ 2114 с ламбо-дверями и пневмоподвеской',
} as const;

export const juneMatiz = {
  id: '2026-06-04',
  sourceTitle: 'Автоподбор для подписчицы',
  image: '/assets/june/matiz-subscriber.png',
  videoId: 'c_wlEkq4GrQ',
  videoUrl: 'https://www.youtube.com/watch?v=c_wlEkq4GrQ',
  title: 'Автоподбор Matiz для подписчицы',
} as const;

export const junePotato = {
  id: '2026-06-05',
  sourceTitle: 'Тесты картошкомёта',
  image: '/assets/june/potato-launcher.png',
  videoId: 'LcS6MTNPZ4s',
  videoUrl: 'https://www.youtube.com/watch?v=LcS6MTNPZ4s',
  title: 'Тесты картошкомёта',
} as const;

const june = sourceRegistry.months.find((month) => month.id === '2026-06');
if (!june?.events.some((event) => event.id === juneNiva.id && event.sourceTitle === juneNiva.sourceTitle)) {
  throw new Error('June Niva scene must match the editorial registry');
}
if (!june.events.some((event) => event.id === juneClassico.id && event.sourceTitle === juneClassico.sourceTitle)) {
  throw new Error('June Classico scene must match the editorial registry');
}
if (!june.events.some((event) => event.id === juneDriving.id && event.sourceTitle === juneDriving.sourceTitle)) {
  throw new Error('June driving scene must match the editorial registry');
}
if (!june.events.some((event) => event.id === juneMatiz.id && event.sourceTitle === juneMatiz.sourceTitle)) {
  throw new Error('June Matiz scene must match the editorial registry');
}
if (!june.events.some((event) => event.id === junePotato.id && event.sourceTitle === junePotato.sourceTitle)) {
  throw new Error('June potato scene must match the editorial registry');
}
