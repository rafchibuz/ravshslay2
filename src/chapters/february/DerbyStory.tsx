import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { derbyStory } from './derbyContent';
import styles from './derby.module.css';

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const between = (value: number, from: number, to: number) => clamp((value - from) / (to - from));

export function DerbyStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const travel = Math.max(1, section.offsetHeight - innerHeight);
      const next = clamp(-section.getBoundingClientRect().top / travel);
      setProgress((previous) => Math.abs(previous - next) < .001 ? previous : next);
    };
    update();
    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    return () => {
      removeEventListener('scroll', update);
      removeEventListener('resize', update);
    };
  }, [reducedMotion]);

  const strike = between(progress, .29, .46);
  const interruption = between(progress, .29, .35) * (1 - between(progress, .46, .55));
  const posterOpacity = 1 - between(progress, .43, .62);
  const realityOpacity = between(progress, .48, .67);
  const stamp = between(progress, .53, .68);
  const finish = between(progress, .78, .94);
  const shake = interruption * Math.sin(progress * 110) * 2;
  const phase = progress < .3 ? 'ОЖИДАНИЕ' : progress < .52 ? 'ПОВОРОТ' : 'РЕАЛЬНОСТЬ';

  const skip = () => {
    const section = sectionRef.current;
    if (!section) return;
    const top = scrollY + section.getBoundingClientRect().top + section.offsetHeight - innerHeight - 2;
    scrollTo({ top, behavior: 'smooth' });
  };

  return <section ref={sectionRef} id={derbyStory.id} className={`${styles.track} ${reducedMotion ? styles.reduced : ''}`} aria-label="Дерби в Казахстане и неожиданный поворот">
    <div className={styles.stage} style={{ '--red-reveal': realityOpacity } as CSSProperties}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.stageTop}>
        <span>02 / ФЕВРАЛЬ 2026</span>
        <span className={styles.stageTopRule} />
        <span>ОЖИДАНИЕ <i>→</i> РЕАЛЬНОСТЬ</span>
      </div>
      {!reducedMotion && <button className={styles.skip} type="button" onClick={skip}>ПРОПУСТИТЬ АНИМАЦИЮ ↗</button>}

      <div className={styles.poster} style={reducedMotion ? undefined : { opacity: posterOpacity, transform: `translateX(${shake}px)` }} aria-hidden={!reducedMotion && posterOpacity < .08}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>ГРАНДИОЗНЫЕ ПЛАНЫ / 01</span>
          <h3 id="derby-title"><span className={styles.struck} style={{ '--strike': `${strike * 100}%` } as CSSProperties}>ДЕРБИ</span> В<br /><strong>КАЗАХСТАНЕ</strong></h3>
          <p>Четверо участников. Автомобильное шоу. Грандиозные планы.</p>
          <span className={styles.badge}>ОЖИДАНИЕ: БОЛЬШОЕ ДЕРБИ</span>
        </div>
        <img src={derbyStory.posterImage} alt="Четверо участников на фоне автомобилей и символов Казахстана — постановочный арт" loading="lazy" decoding="async" />
      </div>

      <div className={styles.interruption} style={reducedMotion ? undefined : { opacity: interruption }} aria-hidden="true">НО ЧТО-ТО ПОШЛО<br />НЕ ПО ПЛАНУ...</div>

      <div className={styles.reality} style={reducedMotion ? undefined : { opacity: realityOpacity, transform: `scale(${.96 + .04 * realityOpacity})` }} aria-hidden={!reducedMotion && realityOpacity < .08}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>НЕОЖИДАННЫЙ ПОВОРОТ / 02</span>
          <div className={styles.stamp} style={reducedMotion ? undefined : { opacity: stamp, transform: `rotate(${-6 + 2 * stamp}deg) scale(${1.12 - .12 * stamp})` }}>15 СУТОК</div>
          <h3>ШОУ ПОШЛО<br />НЕ ПО СЦЕНАРИЮ</h3>
          <p>RENATKO и ANAR. Вместо запланированного дерби — неожиданное продолжение истории.</p>
          <div className={styles.finalDetails} style={reducedMotion ? undefined : { opacity: finish, transform: `translateY(${18 * (1 - finish)}px)` }}>
            <span className={styles.disclaimer}>Юмористическая реконструкция. Изображение за решёткой создано для оформления истории.</span>
            <div className={styles.videoSlot} aria-label="Видео об этом событии пока не добавлено"><span aria-hidden="true">▶</span><span>ВИДЕО ПОКА НЕ ДОБАВЛЕНО</span></div>
          </div>
        </div>
        <img src={derbyStory.realityImage} alt="RENATKO и ANAR за решёткой в художественной юмористической реконструкции" loading="lazy" decoding="async" />
      </div>

      {!reducedMotion && <div className={styles.stageBottom}><span>{phase}</span><div className={styles.progressTrack}><span style={{ width: `${progress * 100}%` }} /></div><span>{String(Math.round(progress * 100)).padStart(2, '0')}%</span></div>}
    </div>
  </section>;
}
