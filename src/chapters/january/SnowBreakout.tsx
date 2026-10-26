import { useEffect, useRef } from 'react';
import styles from './snowBreakout.module.css';

const snow = Array.from({ length: 24 }, (_, index) => ({
  left: `${(index * 41 + 13) % 100}%`,
  delay: `${-((index * 17) % 80) / 10}s`,
  duration: `${6 + (index % 5)}s`,
  size: `${2 + (index % 3) * 2}px`,
}));

function Firework({ className }: { className: string }) {
  return <div className={`${styles.firework} ${className}`} aria-hidden="true">
    <svg viewBox="0 0 120 120" focusable="false">
      {Array.from({ length: 12 }, (_, index) =>
        <line key={index} x1="60" y1="13" x2="60" y2="32" transform={`rotate(${index * 30} 60 60)`} />,
      )}
      <circle cx="60" cy="60" r="7" />
    </svg>
  </div>;
}

export function SnowBreakout() {
  const introRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const intro = introRef.current;
    if (!intro) return;
    const video = videoRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = intro.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = reducedMotion.matches ? 1 : Math.max(0, Math.min(1, -rect.top / travel));
      const eased = progress * progress * (3 - 2 * progress);
      intro.style.setProperty('--fireworks-visible', String(Math.min(1, Math.max(0, (progress - .5) * 2.6))));
      intro.style.setProperty('--intro-progress', `${Math.round(progress * 100)}%`);
      if (video && Number.isFinite(video.duration) && video.duration > 0) {
        const time = Math.min(video.duration - .04, eased * video.duration);
        if (Math.abs(video.currentTime - time) > .04) video.currentTime = time;
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reducedMotion.addEventListener('change', schedule);
    video?.addEventListener('loadedmetadata', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reducedMotion.removeEventListener('change', schedule);
      video?.removeEventListener('loadedmetadata', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={introRef} className={styles.intro}>
    <div className={styles.stage}>
      <div className={styles.verticalMark}>01 / 12</div>
      <div className={styles.introText}>
        <span className={styles.eyebrow}>ГЛАВА ПЕРВАЯ <i /> ЗИМНИЙ ПРОЛОГ</span>
        <h2 id="january-title">ЯНВАРЬ<span>’26</span></h2>
        <p>Год начинается со снега. Пройди сквозь сугроб вместе с RavshanN — дальше ждёт новогодний стрим.</p>
        <span className={styles.concept}>СНЕГ · НОЧЬ · НОВЫЙ ГОД</span>
        <div className={styles.scrollCue}><span className={styles.scrollCueLine} />ЛИСТАЙ, ЧТОБЫ ПРОЙТИ СКВОЗЬ СНЕГ <span aria-hidden="true">↓</span></div>
      </div>
      <div className={styles.art}>
        <video ref={videoRef} className={styles.motion} preload="auto" muted playsInline poster="/assets/motion/ravshann-snow-start.webp" aria-label="RavshanN раздвигает снег; движение связано с прокруткой страницы">
          <source src="/assets/motion/ravshann-snow-breakout.mp4" type="video/mp4" />
        </video>
        <img className={styles.reducedStill} src="/assets/motion/ravshann-snow-end.webp" alt="RavshanN раздвинул снег" />
        <div className={styles.artCaption}><span>01 / СКВОЗЬ ЗИМУ</span><span>ВИЗУАЛИЗАЦИЯ СЦЕНЫ</span></div>
      </div>
      <Firework className={styles.fireworkOne} />
      <Firework className={styles.fireworkTwo} />
      <div className={styles.snowfall} aria-hidden="true">
        {snow.map((flake, index) => <span key={index} style={{ left: flake.left, animationDelay: flake.delay, animationDuration: flake.duration, width: flake.size, height: flake.size }} />)}
      </div>
      <div className={styles.progressTrack} aria-hidden="true"><span /></div>
      <div className={styles.nextCue}>ДАЛЬШЕ / НОВОГОДНИЙ СТРИМ <span>↓</span></div>
    </div>
  </div>;
}
