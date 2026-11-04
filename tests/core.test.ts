import { describe, expect, it } from 'vitest';
import { nextPoint, pointFromHash } from '../src/lib/deepLinks';
import { validateScenes } from '../src/lib/contentValidation';
import { scenes } from '../src/lib/contentValidation';
import { februaryScenes, validateFebruaryScenes } from '../src/lib/februaryContent';
import { derbyStory } from '../src/chapters/february/derbyContent';
import { marchEnduro, marchMatch } from '../src/chapters/march/marchContent';
import { julyBmw, julyClay, julyQuiz, julyRocket, julyStaya, julyTasting, julyWorldCup } from '../src/chapters/july/julyContent';
import { august } from '../src/chapters/august/augustContent';
import { september } from '../src/chapters/september/septemberContent';

describe('chronicle navigation', () => {
  it('moves through the statistics, hero and January points in both directions', () => {
    expect(nextPoint('hero', 1)).toBe('statistics');
    expect(nextPoint('statistics', 1)).toBe('january');
    expect(nextPoint('january', -1)).toBe('statistics');
    expect(nextPoint('2026-01-02', 1)).toBe('2026-01-03');
    expect(nextPoint('2026-01-03', 1)).toBe('2026-01-04');
    expect(nextPoint('2026-01-04', 1)).toBe('february');
    expect(nextPoint('february', 1)).toBe('2026-02-01');
    expect(nextPoint('2026-02-02', 1)).toBe('march');
    expect(nextPoint('march', 1)).toBe('2026-03-01');
    expect(nextPoint('2026-03-01', 1)).toBe('2026-03-02');
    expect(nextPoint('2026-06-05', 1)).toBe('july');
    expect(nextPoint('july', 1)).toBe('2026-07-01');
    expect(nextPoint('2026-07-01', 1)).toBe('2026-07-02');
    expect(nextPoint('2026-07-02', 1)).toBe('2026-07-03');
    expect(nextPoint('2026-07-03', 1)).toBe('2026-07-04');
    expect(nextPoint('2026-07-04', 1)).toBe('2026-07-05');
    expect(nextPoint('2026-07-05', 1)).toBe('2026-07-07');
    expect(nextPoint('2026-07-07', 1)).toBe('2026-07-06');
    expect(nextPoint('2026-07-06', 1)).toBe('august');
    expect(nextPoint('august', 1)).toBe('2026-08-01');
    expect(nextPoint('2026-08-05', 1)).toBe('2026-08-06');
    expect(nextPoint('2026-08-06', 1)).toBe('september');
    expect(nextPoint('september', 1)).toBe('2026-09-06');
    expect(nextPoint('2026-09-06', 1)).toBe('2026-09-02');
    expect(nextPoint('2026-09-03', 1)).toBe('2026-09-05');
    expect(nextPoint('2026-01-02', -1)).toBe('2026-01-01');
    expect(nextPoint('hero', -1)).toBe('hero');
  });

  it('uses stable anchors and rejects unknown ones', () => {
    expect(pointFromHash('#2026-01-03')).toBe('2026-01-03');
    expect(pointFromHash('#2026-01-04')).toBe('2026-01-04');
    expect(pointFromHash('#2026-02-01')).toBe('2026-02-01');
    expect(pointFromHash('#2026-02-02')).toBe('2026-02-02');
    expect(pointFromHash('#2026-03-01')).toBe('2026-03-01');
    expect(pointFromHash('#2026-03-02')).toBe('2026-03-02');
  });
});

describe('September media', () => {
  it('keeps the nine football photos and the original meme clip with their scenes', () => {
    expect(september.football.photos).toHaveLength(9);
    expect(september.football.videoUrl).toBe('https://www.youtube.com/watch?v=UF00M1hfzYA');
    expect(september.meme.videoSrc).toBe('/assets/september/meme-original.mp4');
  });
});

describe('August editorial data', () => {
  it('keeps the purchase clip, the stunt episode and the remaining events in order', () => {
    expect(august.surron.clip).toBe('/assets/august/surron-purchase.mp4');
    expect(august.surron.purchase.id).toBe('2xVxaZmbkAE');
    expect(august.surron.stunt.id).toBe('xSXBhqaun_M');
    expect([august.karting, august.track, august.judo, august.collab].map((scene) => scene.videoId)).toEqual([
      'C4Lyl1fb1ps', 'rtyJH86RJTE', '6nbyoSp2GQ4', 'PMbMCPnodgs',
    ]);
    expect(august.meme.id).toBe('2026-08-06');
  });
});

describe('July tasting', () => {
  it('keeps the bloggers and subscribers videos in the supplied order', () => {
    expect(julyTasting.videos.map(({ url }) => url)).toEqual([
      'https://www.youtube.com/watch?v=7O2DFqLDRRs',
      'https://www.youtube.com/watch?v=S6BO_i1ch_Y',
    ]);
  });
});

describe('July clay', () => {
  it('connects the supplied art and video to the second July scene', () => {
    expect(julyClay.id).toBe('2026-07-02');
    expect(julyClay.image).toBe('/assets/july/clay-with-lunak.png');
    expect(julyClay.videoUrl).toBe('https://www.youtube.com/watch?v=-U-F_dWjiJQ');
  });
});

describe('July rocket', () => {
  it('uses the supplied animation and local launch video in the third scene', () => {
    expect(julyRocket.id).toBe('2026-07-03');
    expect(julyRocket.animation).toBe('/assets/july/rocket/LIT_ENERGY_launch_transparent.webp');
    expect(julyRocket.videoSrc).toBe('/assets/july/rocket/rocket-launch.mp4');
  });
});

describe('late July stories', () => {
  it('keeps the supplied episodes, imagery and motorcycle clip paired with each scene', () => {
    expect(julyQuiz.videoUrl).toBe('https://www.youtube.com/watch?v=qIVhtivg8wg');
    expect(julyBmw.videos.map(({ id }) => id)).toEqual(['9v1f2KY5EaM', '0EyYtGarbis']);
    expect(julyWorldCup.reactionImage).toBe('/assets/july/world-cup-reaction.png');
    expect(julyStaya.clipSrc).toBe('/assets/july/staya-electric-moto.mp4');
    expect(julyStaya.videoUrl).toBe('https://www.youtube.com/watch?v=bQd2QTE-oAo');
  });
});

describe('January editorial data', () => {
  it('keeps the four supplied events in draft status', () => {
    expect(scenes).toHaveLength(4);
    expect(scenes.every((scene) => scene.verified === false)).toBe(true);
    expect(scenes[0].media).toEqual({ provider: 'local-video', src: '/assets/january/new-year-stream.mp4', fullUrl: 'https://www.youtube.com/watch?v=WJ7kJ0lyof0' });
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

  it('rejects an external path in the New Year local video', () => {
    expect(() => validateScenes([{ ...scenes[0], media: { provider: 'local-video', src: 'https://example.com/clip.mp4', fullUrl: 'https://www.youtube.com/watch?v=WJ7kJ0lyof0' } }])).toThrow('Invalid local video');
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

  it('keeps the supplied enduro clip paired with the second March point', () => {
    expect(marchEnduro.id).toBe('2026-03-02');
    expect(marchEnduro.image).toBe('/assets/march/enduro-fall.png');
    expect(marchEnduro.videoSrc).toBe('/assets/march/enduro-fall.mp4');
  });
});
