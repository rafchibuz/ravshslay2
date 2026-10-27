import sourceRegistry from '../content/events.2026.json';
import rawScenes from '../content/february.scenes.json';

export type Reel = { src: string; label: string; poster?: string };
export type FebruaryScene = {
  id: string;
  sourceTitle: string;
  title: string;
  description: string;
  media: [Reel, Reel, Reel];
  verified: boolean;
};

export function validateFebruaryScenes(input: unknown): FebruaryScene[] {
  if (!Array.isArray(input) || input.length !== 1) throw new Error('February currently requires one scene');
  const scene = input[0] as Record<string, unknown>;
  if (!scene || scene.id !== '2026-02-01' || typeof scene.sourceTitle !== 'string'
    || typeof scene.title !== 'string' || typeof scene.description !== 'string'
    || scene.verified !== false) throw new Error('Invalid February scene');
  if (!Array.isArray(scene.media) || scene.media.length !== 3 || !scene.media.every((item: unknown) => {
    if (!item || typeof item !== 'object') return false;
    const reel = item as Record<string, unknown>;
    return typeof reel.src === 'string' && /^\/assets\/video\/february-reel-[1-3]\.mp4$/.test(reel.src)
      && typeof reel.label === 'string' && reel.label.length > 0
      && (reel.poster === undefined || typeof reel.poster === 'string' && /^\/assets\/video\/february-reel-[1-3]-poster\.webp$/.test(reel.poster));
  })) throw new Error('Invalid February reels');
  const sources = scene.media.map((item: Reel) => item.src);
  if (new Set(sources).size !== 3) throw new Error('Duplicate February reels');
  return input as FebruaryScene[];
}

export const februaryScenes = validateFebruaryScenes(rawScenes);
const february = sourceRegistry.months.find((month) => month.id === '2026-02');
if (!february || februaryScenes.some((scene) => !february.events.some((event) => event.id === scene.id && event.sourceTitle === scene.sourceTitle))) {
  throw new Error('February scenes must match the supplied editorial registry');
}
