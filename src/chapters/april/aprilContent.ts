import sourceRegistry from '../../content/events.2026.json';

export const aprilVesta = {
  id: '2026-04-01',
  sourceTitle: 'Не счастливый обладатель веста 2026',
  title: 'LADA VESTA SPORT за 2,7 млн ₽',
  videoUrl: 'https://youtu.be/oJowAubSukY?si=SzPD87RKw3tpeXKw',
  videoId: 'oJowAubSukY',
  images: ['/assets/april/vesta-covered.png', '/assets/april/vesta-reveal.png', '/assets/april/vesta-sport.png'],
  verified: false,
} as const;

export const aprilFundraiser = {
  id: '2026-04-02',
  sourceTitle: 'Благострим в поддержку Дагестана',
  title: 'Больше, чем стрим',
  image: '/assets/april/dagestan-fundraiser.png',
  amount: '1,5 млн ₽',
  sources: {
    fundraiser: 'https://www.sports.ru/mediafootball/1117132503-strimer-ravshan-sobral-poltora-milliona-rublej-postradavshim-ot-navodn.html',
  },
} as const;

export const aprilPoker = {
  id: '2026-04-03',
  sourceTitle: 'Бетбум покер',
  title: 'BetBoom Media Poker',
  image: '/assets/april/betboom-poker.png',
} as const;

export const aprilCs2 = {
  id: '2026-04-04',
  sourceTitle: 'Турнир по кс от лит энержи',
  title: 'LIT ENERGY × МЕДИЙКА CUP',
  image: '/assets/april/lit-energy-mediika-cup.png',
  videoId: 'RmDiME2RJ5w',
  videoUrl: 'https://youtu.be/RmDiME2RJ5w?si=ziyYYPEk4SLz13yk',
} as const;

const april = sourceRegistry.months.find((month) => month.id === '2026-04');
if (!april?.events.some((event) => event.id === aprilVesta.id && event.sourceTitle === aprilVesta.sourceTitle)) {
  throw new Error('April scene must match the editorial registry');
}
if (!april.events.some((event) => event.id === aprilFundraiser.id && event.sourceTitle === aprilFundraiser.sourceTitle)) {
  throw new Error('April fundraiser scene must match the editorial registry');
}
if (!april.events.some((event) => event.id === aprilPoker.id && event.sourceTitle === aprilPoker.sourceTitle)) {
  throw new Error('April poker scene must match the editorial registry');
}
if (!april.events.some((event) => event.id === aprilCs2.id && event.sourceTitle === aprilCs2.sourceTitle)) {
  throw new Error('April CS2 scene must match the editorial registry');
}
