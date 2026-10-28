import { describe, expect, it } from 'vitest';
import { nextPoint, pointFromHash } from '../src/lib/deepLinks';
import { validateScenes } from '../src/lib/contentValidation';
import { scenes } from '../src/lib/contentValidation';
import { februaryScenes, validateFebruaryScenes } from '../src/lib/februaryContent';
import { derbyStory } from '../src/chapters/february/derbyContent';
import { marchMatch } from '../src/chapters/march/marchContent';

describe('chronicle navigation', () => {
  it('moves through the hero and January points in both directions', () => {
    expect(nextPoint('hero', 1)).toBe('january');
    expect(nextPoint('2026-01-02', 1)).toBe('2026-01-03');
    expect(nextPoint('2026-01-03', 1)).toBe('2026-01-04');
    expect(nextPoint('2026-01-04', 1)).toBe('february');
    expect(nextPoint('february', 1)).toBe('2026-02-01');
    expect(nextPoint('2026-02-02', 1)).toBe('march');
    expect(nextPoint('march', 1)).toBe('2026-03-01');
    expect(nextPoint('2026-01-02', -1)).toBe('2026-01-01');
    expect(nextPoint('hero', -1)).toBe('hero');
  });

  it('uses stable anchors and rejects unknown ones', () => {
    expect(pointFromHash('#2026-01-03')).toBe('2026-01-03');
    expect(pointFromHash('#2026-01-04')).toBe('2026-01-04');
    expect(pointFromHash('#2026-02-01')).toBe('2026-02-01');
    expect(pointFromHash('#2026-02-02')).toBe('2026-02-02');
    expect(pointFromHash('#2026-03-01')).toBe('2026-03-01');
  });
});

describe('January editorial data', () => {
  it('keeps the four supplied events in draft status', () => {
    expect(scenes).toHaveLength(4);
    expect(scenes.every((scene) => scene.verified === false)).toBe(true);
    expect(scenes[0].media).toBeNull();
    expect(scenes[1].media?.provider).toBe('local-gallery');
    expect(scenes[2].media).toBeNull();
    expect(scenes[3].media).toEqual({ provider: 'youtube', url: 'https://youtu.be/RzZn5SlTQU8?si=EPwxj6HtWqYQHppc', poster: 'https://i.ytimg.com/vi/RzZn5SlTQU8/hqdefault.jpg' });
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

describe('February editorial data', () => {
  it('keeps the supplied meeting and all three reels in order', () => {
    expect(februaryScenes).toHaveLength(1);
    expect(februaryScenes[0].id).toBe('2026-02-01');
    expect(februaryScenes[0].media.map((reel) => reel.src)).toEqual([1, 2, 3].map((number) => `/assets/video/february-reel-${number}.mp4`));
  });

  it('rejects a duplicate video in the carousel', () => {
    const scene = februaryScenes[0];
    expect(() => validateFebruaryScenes([{ ...scene, media: [scene.media[0], scene.media[0], scene.media[2]] }])).toThrow('Duplicate February reels');
  });

  it('keeps the derby episode in February with both supplied visuals', () => {
    expect(derbyStory.id).toBe('2026-02-02');
    expect(derbyStory.posterImage).toContain('derby_kazakhstan_four_participants.png');
    expect(derbyStory.realityImage).toContain('derby_15_days_renatko_anar.png');
  });
});

describe('March editorial data', () => {
  it('connects the supplied football art and YouTube stream to the first March point', () => {
    expect(marchMatch.id).toBe('2026-03-01');
    expect(marchMatch.image).toBe('/assets/march/2drots-lit-energy.png');
    expect(marchMatch.videoUrl).toBe('https://www.youtube.com/watch?v=E36Qw2QIqnw');
  });
});
