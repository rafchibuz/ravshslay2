export const points = ['hero', 'statistics', 'january', '2026-01-01', '2026-01-02', '2026-01-03', '2026-01-04', 'february', '2026-02-01', '2026-02-02', 'march', '2026-03-01', '2026-03-02', '2026-03-03', 'april', '2026-04-01', '2026-04-02', '2026-04-03', '2026-04-04', 'may', '2026-05-02', '2026-05-03', '2026-05-04', 'june', '2026-06-01', '2026-06-02', '2026-06-03', '2026-06-vaz', '2026-06-04', '2026-06-05', '2026-06-06', 'july', '2026-07-01', '2026-07-02', '2026-07-03', '2026-07-04', '2026-07-05', '2026-07-07', '2026-07-06', 'august', '2026-08-01', '2026-08-02', '2026-08-03', '2026-08-04', '2026-08-05', '2026-08-06', '2026-08-07', '2026-08-08', 'september', '2026-09-06', '2026-09-01', '2026-09-02', '2026-09-03', '2026-09-05', 'october', '2026-10-01', '2026-10-02', '2026-10-06', '2026-10-03', '2026-10-04', '2026-10-07', '2026-10-05', '2026-10-08', 'november', '2026-11-01', '2026-11-02', '2026-11-03', '2026-11-04'] as const;
export type Point = typeof points[number];

export function nextPoint(current: string, direction: -1 | 1): Point {
  const index = Math.max(0, points.indexOf(current as Point));
  return points[Math.min(points.length - 1, Math.max(0, index + direction))];
}

export function pointFromHash(hash: string): Point {
  const value = decodeURIComponent(hash.replace(/^#/, ''));
  return points.includes(value as Point) ? value as Point : 'hero';
}

export function goToPoint(point: Point) {
  document.getElementById(point)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  history.replaceState(null, '', `#${point}`);
}
