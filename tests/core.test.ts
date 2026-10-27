import { describe, expect, it } from 'vitest';
import { nextPoint, pointFromHash } from '../src/lib/deepLinks';
import { validateScenes } from '../src/lib/contentValidation';
import { scenes } from '../src/lib/contentValidation';

describe('chronicle navigation', () => {
  it('moves through the hero and January points in both directions', () => {
    expect(nextPoint('hero', 1)).toBe('january');
    expect(nextPoint('2026-01-02', 1)).toBe('2026-01-03');
    expect(nextPoint('2026-01-02', -1)).toBe('2026-01-01');
    expect(nextPoint('hero', -1)).toBe('hero');
  });

  it('uses stable anchors and rejects unknown ones', () => {
    expect(pointFromHash('#2026-01-03')).toBe('2026-01-03');
    expect(pointFromHash('#2026-02-01')).toBe('hero');
  });
});

describe('January editorial data', () => {
  it('keeps the three supplied events in draft status', () => {
    expect(scenes).toHaveLength(3);
    expect(scenes.every((scene) => scene.verified === false)).toBe(true);
    expect(scenes[0].media).toBeNull();
    expect(scenes[1].media?.provider).toBe('local-gallery');
    expect(scenes[2].media).toBeNull();
  });

  it('rejects duplicate scene IDs', () => {
    expect(() => validateScenes([scenes[0], scenes[0]])).toThrow('Invalid scene ID');
  });

  it('rejects unsupported media URLs', () => {
    expect(() => validateScenes([{ ...scenes[0], media: { provider: 'youtube', url: 'https://example.com/video' } }])).toThrow('Unsupported media URL');
  });

  it('rejects unsafe local video paths', () => {
    expect(() => validateScenes([{ ...scenes[1], media: { provider: 'local-gallery', items: [{ src: 'https://example.com/clip.mp4', poster: '/assets/video/a.webp', label: 'Брат' }] } }])).toThrow('Invalid local video gallery');
  });

  it('keeps each film paired with its Telegram archive', () => {
    const gallery = scenes[1].media;
    expect(gallery?.provider).toBe('local-gallery');
    if (gallery?.provider !== 'local-gallery') return;
    expect(gallery.items.map(({ label, telegramUrl }) => [label, telegramUrl])).toEqual([
      ['Брат', 'https://t.me/stayavods/3/27816'],
      ['Брат 2', 'https://t.me/stayavods/3/27833'],
    ]);
  });
});
