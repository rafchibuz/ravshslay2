import sourceRegistry from '../../content/events.2026.json';

export const august = {
  surron: {
    id: '2026-08-01', sourceTitle: 'Покупка сурона и обучение станту',
    clip: '/assets/august/surron-purchase.mp4', image: '/assets/august/surron-stunt.png',
    purchase: { id: '2xVxaZmbkAE', url: 'https://www.youtube.com/watch?v=2xVxaZmbkAE', title: 'Покупка Sur-Ron' },
    stunt: { id: 'xSXBhqaun_M', url: 'https://www.youtube.com/watch?v=xSXBhqaun_M', title: 'Обучение станту на Sur-Ron' },
  },
  karting: { id: '2026-08-02', sourceTitle: 'Картинг против Лунаком', image: '/assets/august/karting-lunak.png', videoId: 'C4Lyl1fb1ps', videoUrl: 'https://www.youtube.com/watch?v=C4Lyl1fb1ps', title: 'Картинг 1 на 1 против Лунаком' },
  track: { id: '2026-08-03', sourceTitle: 'Трек-день на болидах', image: '/assets/august/track-day.png', videoId: 'rtyJH86RJTE', videoUrl: 'https://www.youtube.com/watch?v=rtyJH86RJTE', title: 'Трек-день на гоночных машинах' },
  judo: { id: '2026-08-04', sourceTitle: 'Тренировка по борьбе с Левой и Ростиком', image: '/assets/august/judo.png', videoId: '6nbyoSp2GQ4', videoUrl: 'https://www.youtube.com/watch?v=6nbyoSp2GQ4', title: 'Тренировка по дзюдо с Лёвой и Ростиком' },
  collab: { id: '2026-08-05', sourceTitle: 'ИРЛ: Тамаев, Литвин, Равшан (большие охваты в инсте/тт)', image: '/assets/august/collab.png', videoId: 'PMbMCPnodgs', videoUrl: 'https://www.youtube.com/watch?v=PMbMCPnodgs', title: 'Литвин, Тамаев, Равшан и Стил — коллаборация' },
  meme: { id: '2026-08-06', sourceTitle: 'Мем про рост' },
} as const;

const month = sourceRegistry.months.find((item) => item.id === '2026-08');
for (const scene of Object.values(august)) {
  if (!month?.events.some((event) => event.id === scene.id && event.sourceTitle === scene.sourceTitle)) {
    throw new Error(`August scene ${scene.id} must match the editorial registry`);
  }
}
