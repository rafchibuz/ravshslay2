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
    expect(scenes.every((scene) => scene.verified === false && scene.media === null)).toBe(true);
  });

  it('rejects duplicate scene IDs', () => {
    expect(() => validateScenes([scenes[0], scenes[0]])).toThrow('Invalid scene ID');
  });

  it('rejects unsupported media URLs', () => {
    expect(() => validateScenes([{ ...scenes[0], media: { provider: 'youtube', url: 'https://example.com/video' } }])).toThrow('Unsupported media URL');
  });
});
