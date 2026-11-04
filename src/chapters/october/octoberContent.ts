import sourceRegistry from '../../content/events.2026.json';

export const october = {
  training: {
    id: '2026-10-01',
    sourceTitle: 'RFC: Подготовка и бой Муро vs Амирбрутал',
    image: '/assets/october/muro-training.png',
    videoId: 'nySc5h5u-dI',
    videoUrl: 'https://www.youtube.com/watch?v=nySc5h5u-dI',
    title: 'Подготовка Муробензо к бою против Амирбрутала',
  },
  fight: {
    id: '2026-10-02',
    sourceTitle: 'Бой Муробензо vs Амирбрутал',
    image: '/assets/october/muro-fight.png',
    videoId: 'q_vcmclxkD0',
    videoUrl: 'https://www.youtube.com/watch?v=q_vcmclxkD0',
    title: 'Бой Муробензо против Амирбрутала',
  },
  cashier: {
    id: '2026-10-03',
    sourceTitle: 'Работа из пятёрочки',
    canImage: '/assets/october/lit-energy-can.png',
    cashierImage: '/assets/october/ravshan-cashier.png',
    carImage: '/assets/october/lit-energy-vesta.png',
    videoId: 'TTlJUMk0JtM',
    videoUrl: 'https://www.youtube.com/watch?v=TTlJUMk0JtM',
    title: 'Равшан за кассой и вкус Юдзу Сушняк',
  },
  odyssey: {
    id: '2026-10-04',
    sourceTitle: 'Бетбум выживание Одиссея',
    image: '/assets/october/staya-odyssey.png',
    episodes: [
      { id: 'w1_3F1eqo4s', url: 'https://www.youtube.com/watch?v=w1_3F1eqo4s' },
      { id: 'Y2vuQOyORU8', url: 'https://www.youtube.com/watch?v=Y2vuQOyORU8' },
      { id: 'ndrCte9TiPY', url: 'https://www.youtube.com/watch?v=ndrCte9TiPY' },
      { id: 'l4T4RdZKIb8', url: 'https://www.youtube.com/watch?v=l4T4RdZKIb8' },
      { id: 'bxc4QDxNoBI', url: 'https://www.youtube.com/watch?v=bxc4QDxNoBI' },
    ],
  },
  poker: {
    id: '2026-10-05',
    sourceTitle: 'Бетбум покер',
    image: '/assets/october/betboom-poker.png',
    videoId: 'Boy60NwjlBg',
    videoUrl: 'https://www.youtube.com/watch?v=Boy60NwjlBg',
    title: 'Равшан на турнире BetBoom Медиа Покер',
  },
} as const;

const month = sourceRegistry.months.find((item) => item.id === '2026-10');
for (const scene of Object.values(october)) {
  if (!month?.events.some((event) => event.id === scene.id && event.sourceTitle === scene.sourceTitle)) {
    throw new Error(`October scene ${scene.id} must match the editorial registry`);
  }
}
