export const points = ['hero', 'january', '2026-01-01', '2026-01-02', '2026-01-03', '2026-01-04', 'february', '2026-02-01'] as const;
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
