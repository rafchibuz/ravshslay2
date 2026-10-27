import { useEffect, useRef } from 'react';
import { MediaFrame } from '../../components/MediaFrame';
import { scenes } from '../../lib/contentValidation';
import { BrotherPhone } from './BrotherPhone';
import { SnowBreakout } from './SnowBreakout';
import styles from './chapter.module.css';

export function January() {
  const [opening, tradition, game] = scenes;
  const brotherVideos = tradition.media?.provider === 'local-gallery' ? tradition.media.items : [];
  const chapterRef = useRef<HTMLElement>(null);
  const cinemaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scene = cinemaRef.current;
    const chapter = chapterRef.current;
    if (!scene || !chapter) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = scene.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const frozenDistance = Math.max(0, Math.min(travel, -rect.top));
      const progress = reducedMotion.matches ? 1 : frozenDistance / travel;
      chapter.style.setProperty('--cinema-bg-shift', `${Math.round(frozenDistance)}px`);
      scene.style.setProperty('--face-reveal', `${Math.round(progress * 100)}%`);
      scene.style.setProperty('--wipe-opacity', String(Math.sin(progress * Math.PI)));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reducedMotion.addEventListener('change', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reducedMotion.removeEventListener('change', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <section ref={chapterRef} id="january" className={styles.chapter} aria-labelledby="january-title">
    <div className={styles.winterLight} aria-hidden="true" />
    <SnowBreakout />

    <article ref={cinemaRef} className={`${styles.scene} ${styles.cinema}`} id={opening.id} aria-labelledby={`${opening.id}-title`}>
      <div className={styles.cinemaSticky}>
        <div className={styles.sceneTop}><span>{opening.eyebrow}</span><span>01 — 03</span></div>
        <div className={styles.cinemaLayout}>
          <div className={styles.cinemaFrame}>
            <div className={styles.streamPosterTop}>НОВОГОДНИЙ СТРИМ <span>ЗАПИСЬ ОЖИДАЕТСЯ</span></div>
            <MediaFrame scene={opening} label={opening.title} />
            <div className={styles.streamPosterBottom}>ЗИМА / ЯНВАРЬ 2026 <span>16:9</span></div>
          </div>
          <figure className={styles.faceStage} aria-label="Образ RavshanN меняется при прокрутке: с бородой на лицо без бороды">
            <div className={styles.faceCanvas}>
              <img src="/assets/visuals/ravshann-face-beard.webp" alt="" decoding="async" />
              <img className={styles.faceReveal} src="/assets/visuals/ravshann-face-clean.webp" alt="" decoding="async" />
              <span className={styles.faceWipe} aria-hidden="true" />
            </div>
            <figcaption>ОБРАЗ МЕНЯЕТСЯ ПРИ ПРОКРУТКЕ <span>01 → 02</span></figcaption>
          </figure>
          <div className={styles.sceneCopy}>
            <div><span className={styles.tag}>СЛЕДОМ ЗА СНЕГОМ / ВИДЕО</span><h3 id={`${opening.id}-title`}>{opening.title}</h3></div>
            <div className={styles.sceneSummary}><p>{opening.description}</p><div className={styles.source}>ИЗ ИСХОДНОГО ПЛАНА: «{opening.sourceTitle}»</div><a href={`#${tradition.id}`} className={styles.sceneNext}>СЛЕДУЮЩАЯ ИСТОРИЯ <span>↘</span></a></div>
          </div>
        </div>
      </div>
    </article>

    <article className={`${styles.scene} ${styles.social}`} id={tradition.id} aria-labelledby={`${tradition.id}-title`}>
      <div className={styles.sceneTop}><span>{tradition.eyebrow}</span><span>02 — 03</span></div>
      <div className={styles.socialLayout}>
        <div className={styles.socialArt}>
          <h3 id={`${tradition.id}-title`} className={styles.visuallyHidden}>{tradition.title}</h3>
          <img src="/assets/visuals/brothers-square.webp" alt="Двое друзей в кожаных куртках" loading="lazy" decoding="async" />
        </div>
        <div className={styles.socialSide}>
          <BrotherPhone items={brotherVideos} />
        </div>
      </div>
    </article>

    <article className={`${styles.scene} ${styles.split}`} id={game.id} aria-labelledby={`${game.id}-title`}>
      <div className={styles.sceneTop}><span>{game.eyebrow}</span><span>03 — 03</span></div>
      <div className={styles.splitLayout}>
        <div className={styles.splitNumber} aria-hidden="true">2<span>+</span>1</div>
        <div className={styles.splitText}><span className={styles.tag}>ЗАКЛЮЧИТЕЛЬНЫЙ КАДР ПРОТОТИПА</span><h3 id={`${game.id}-title`}>{game.title}</h3><p>{game.description}</p><div className={styles.source}>ИЗ ИСХОДНОГО ПЛАНА: «{game.sourceTitle}»</div></div>
        <div className={styles.splitFrame}><MediaFrame scene={game} label={game.title} /></div>
      </div>
    </article>

    <div className={styles.end}><span>КОНЕЦ ПЕРВОЙ ГЛАВЫ</span><strong>ПРОДОЛЖЕНИЕ<br />ПОСЛЕ СОГЛАСОВАНИЯ</strong><a href="#hero">↑ ВЕРНУТЬСЯ К НАЧАЛУ</a></div>
  </section>;
}
