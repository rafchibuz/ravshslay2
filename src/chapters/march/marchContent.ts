import sourceRegistry from '../../content/events.2026.json';

export const marchMatch = {
  id: '2026-03-01',
  sourceTitle: 'Футбол анар против равшана',
  title: '2DROTS vs LIT ENERGY',
  videoUrl: 'https://www.youtube.com/watch?v=E36Qw2QIqnw',
  videoId: 'E36Qw2QIqnw',
  image: '/assets/march/2drots-lit-energy.png',
  verified: false,
} as const;

export const marchEnduro = {
  id: '2026-03-02',
  sourceTitle: 'Покупка и падение с эндуро',
  title: 'Первый день на эндуро',
  image: '/assets/march/enduro-fall.png',
  videoSrc: '/assets/march/enduro-fall.mp4',
  verified: false,
} as const;

const march = sourceRegistry.months.find((month) => month.id === '2026-03');
if (![marchMatch, marchEnduro].every((scene) => march?.events.some((event) => event.id === scene.id && event.sourceTitle === scene.sourceTitle))) {
  throw new Error('March scene must match the editorial registry');
}
