import sourceRegistry from '../../content/events.2026.json';

export const aprilVesta = {
  id: '2026-04-01',
  sourceTitle: 'Не счастливый обладатель веста 2026',
  title: 'LADA VESTA SPORT за 2,7 млн ₽',
  videoUrl: 'https://youtu.be/oJowAubSukY?si=SzPD87RKw3tpeXKw',
  images: ['/assets/april/vesta-covered.png', '/assets/april/vesta-reveal.png', '/assets/april/vesta-sport.png'],
  verified: false,
} as const;

const april = sourceRegistry.months.find((month) => month.id === '2026-04');
if (!april?.events.some((event) => event.id === aprilVesta.id && event.sourceTitle === aprilVesta.sourceTitle)) {
  throw new Error('April scene must match the editorial registry');
}
