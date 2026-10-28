import sourceRegistry from '../../content/events.2026.json';

export const derbyStory = {
  id: '2026-02-02',
  sourceTitle: 'Дерби в казахстане + 15 суток',
  posterImage: '/assets/february/derby/derby_kazakhstan_four_participants.png',
  realityImage: '/assets/february/derby/derby_15_days_renatko_anar.png',
  videoUrl: null,
  verified: false,
} as const;

const february = sourceRegistry.months.find((month) => month.id === '2026-02');
if (!february?.events.some((event) => event.id === derbyStory.id && event.sourceTitle === derbyStory.sourceTitle)) {
  throw new Error('Derby scene must match the supplied editorial registry');
}
