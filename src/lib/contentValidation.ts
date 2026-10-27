import sourceRegistry from '../content/events.2026.json';
import rawScenes from '../content/january.scenes.json';

export type LocalVideo = { src: string; poster: string; label: string; telegramUrl: string };
export type Playthrough = { title: string; links: string[] };

export type Scene = {
  id: string;
  eyebrow: string;
  title: string;
  sourceTitle: string;
  description: string;
  archiveUrl?: string;
  playthroughs?: Playthrough[];
  format: 'cinema' | 'social' | 'split' | 'feature';
  media: { provider: 'youtube'; url: string; poster?: string } | { provider: 'local-gallery'; items: [LocalVideo, LocalVideo] } | null;
  verified: boolean;
};

export function validateScenes(input: unknown): Scene[] {
  if (!Array.isArray(input) || input.length > 4 || input.length === 0) throw new Error('January requires 1–4 scenes');
  const ids = new Set<string>();
  for (const scene of input) {
    if (!scene || typeof scene !== 'object') throw new Error('Invalid scene');
    const value = scene as Record<string, unknown>;
    if (typeof value.id !== 'string' || !/^2026-01-\d\d$/.test(value.id) || ids.has(value.id)) throw new Error('Invalid scene ID');
    ids.add(value.id);
    if (!['cinema', 'social', 'split', 'feature'].includes(String(value.format))) throw new Error('Invalid format');
    if (typeof value.title !== 'string' || typeof value.sourceTitle !== 'string') throw new Error('Missing title');
    if (value.archiveUrl !== undefined && (typeof value.archiveUrl !== 'string' || !/^https:\/\/t\.me\/[\w]+\/\d+\/\d+$/.test(value.archiveUrl))) throw new Error('Invalid archive URL');
    if (value.playthroughs !== undefined && (!Array.isArray(value.playthroughs) || value.playthroughs.length === 0 || !value.playthroughs.every((entry: unknown) => {
      if (!entry || typeof entry !== 'object') return false;
      const group = entry as Record<string, unknown>;
      return typeof group.title === 'string' && group.title.length > 0
        && Array.isArray(group.links) && group.links.length > 0
        && group.links.every((link: unknown) => typeof link === 'string' && /^https:\/\/t\.me\/[\w]+\/\d+\/\d+$/.test(link));
    }))) throw new Error('Invalid playthrough links');
    if (value.verified !== false && value.verified !== true) throw new Error('Invalid verification status');
    if (value.media !== null) {
      const media = value.media as Record<string, unknown>;
      if (media.provider === 'youtube') {
        if (typeof media.url !== 'string' || !/^https:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(media.url)) throw new Error('Unsupported media URL');
      } else if (media.provider === 'local-gallery') {
        if (!Array.isArray(media.items) || media.items.length !== 2 || !media.items.every((item: unknown) => {
          if (!item || typeof item !== 'object') return false;
          const video = item as Record<string, unknown>;
          return typeof video.src === 'string' && /^\/assets\/video\/[\w-]+\.mp4$/.test(video.src)
            && typeof video.poster === 'string' && /^\/assets\/video\/[\w-]+\.webp$/.test(video.poster)
            && typeof video.label === 'string' && video.label.length > 0
            && typeof video.telegramUrl === 'string' && /^https:\/\/t\.me\/[\w]+\/\d+\/\d+$/.test(video.telegramUrl);
        })) throw new Error('Invalid local video gallery');
      } else {
        throw new Error('Unsupported media provider');
      }
    }
  }
  return input as Scene[];
}

export const scenes = validateScenes(rawScenes);
const january = sourceRegistry.months.find((month) => month.id === '2026-01');
if (!january || scenes.some((scene) => !january.events.some((event) => event.id === scene.id && event.sourceTitle === scene.sourceTitle))) {
  throw new Error('January scenes must match the supplied editorial registry');
}
