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

const june = sourceRegistry.months.find((month) => month.id === '2026-06');
if (!june?.events.some((event) => event.id === juneNiva.id && event.sourceTitle === juneNiva.sourceTitle)) {
  throw new Error('June Niva scene must match the editorial registry');
}
