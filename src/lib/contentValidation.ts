import sourceRegistry from '../content/events.2026.json';
import rawScenes from '../content/january.scenes.json';

export type Scene = {
  id: string;
  eyebrow: string;
  title: string;
  sourceTitle: string;
  description: string;
  format: 'cinema' | 'social' | 'split';
  media: { provider: 'youtube'; url: string; poster?: string } | null;
  verified: boolean;
};

export function validateScenes(input: unknown): Scene[] {
  if (!Array.isArray(input) || input.length > 3 || input.length === 0) throw new Error('January requires 1–3 scenes');
  const ids = new Set<string>();
  for (const scene of input) {
    if (!scene || typeof scene !== 'object') throw new Error('Invalid scene');
    const value = scene as Record<string, unknown>;
    if (typeof value.id !== 'string' || !/^2026-01-\d\d$/.test(value.id) || ids.has(value.id)) throw new Error('Invalid scene ID');
    ids.add(value.id);
    if (!['cinema', 'social', 'split'].includes(String(value.format))) throw new Error('Invalid format');
    if (typeof value.title !== 'string' || typeof value.sourceTitle !== 'string') throw new Error('Missing title');
    if (value.verified !== false && value.verified !== true) throw new Error('Invalid verification status');
    if (value.media !== null) {
      const media = value.media as Record<string, unknown>;
      if (media.provider !== 'youtube' || typeof media.url !== 'string' || !/^https:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(media.url)) throw new Error('Unsupported media URL');
    }
  }
  return input as Scene[];
}

export const scenes = validateScenes(rawScenes);
const january = sourceRegistry.months.find((month) => month.id === '2026-01');
if (!january || scenes.some((scene) => !january.events.some((event) => event.id === scene.id && event.sourceTitle === scene.sourceTitle))) {
  throw new Error('January scenes must match the supplied editorial registry');
}
