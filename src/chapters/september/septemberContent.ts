import sourceRegistry from '../../content/events.2026.json';

const footballPhotos = [
  '/assets/september/football-01.png',
  '/assets/september/football-02.jpg',
  '/assets/september/football-03.jpg',
  '/assets/september/football-04.jpg',
  '/assets/september/football-05.jpg',
  '/assets/september/football-06.jpg',
  '/assets/september/football-07.jpg',
  '/assets/september/football-08.jpg',
  '/assets/september/football-09.jpg',
] as const;

export const september = {
  room: { id: '2026-09-06', sourceTitle: 'Фейк комната', image: '/assets/september/oversized-room.png', videoId: 'FTtkZiXU2tE', videoUrl: 'https://www.youtube.com/watch?v=FTtkZiXU2tE', title: 'Комната с увеличенными предметами' },
  bmw: { id: '2026-09-02', sourceTitle: 'Покупка M5F10', image: '/assets/september/m5-f10.png', videoId: '8eJqGcbELg4', videoUrl: 'https://www.youtube.com/watch?v=8eJqGcbELg4', title: 'Покупка BMW M5 F10' },
  football: { id: '2026-09-03', sourceTitle: 'Стрим с сборной России и легендами футбола', photos: footballPhotos, videoId: 'UF00M1hfzYA', videoUrl: 'https://www.youtube.com/watch?v=UF00M1hfzYA', title: 'Футбольные челленджи против сборной России и легенд футбола' },
  meme: { id: '2026-09-05', sourceTitle: 'Мем с танцем', videoSrc: '/assets/september/meme-original.mp4' },
} as const;

const month = sourceRegistry.months.find((item) => item.id === '2026-09');
for (const scene of Object.values(september)) {
  if (!month?.events.some((event) => event.id === scene.id && event.sourceTitle === scene.sourceTitle)) {
    throw new Error(`September scene ${scene.id} must match the editorial registry`);
  }
}
