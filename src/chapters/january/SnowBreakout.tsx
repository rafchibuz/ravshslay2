import styles from './snowBreakout.module.css';

const snow = Array.from({ length: 24 }, (_, index) => ({
  left: `${(index * 41 + 13) % 100}%`,
  delay: `${-((index * 17) % 80) / 10}s`,
  duration: `${6 + (index % 5)}s`,
  size: `${2 + (index % 3) * 2}px`,
}));

export function SnowBreakout() {
  return <div className={styles.intro}>
    <div className={styles.stage}>
      <div className={styles.verticalMark}>01 / 12</div>
      <div className={styles.introText}>
        <span className={styles.eyebrow}>ГЛАВА ПЕРВАЯ <i /> ЗИМНИЙ ПРОЛОГ</span>
        <h2 id="january-title">ЯНВАРЬ<span>’26</span></h2>
        <p>Год начинается со снега. Впереди — новогодний стрим и первые истории января.</p>
        <span className={styles.concept}>СНЕГ · НОЧЬ · НОВЫЙ ГОД</span>
        <div className={styles.scrollCue}><span className={styles.scrollCueLine} />ЛИСТАЙ К ПЕРВОЙ ИСТОРИИ <span aria-hidden="true">↓</span></div>
      </div>
      <div className={styles.art}>
        <img src="/assets/visuals/ravshann-snow-cutout.webp" alt="RavshanN пробирается сквозь глубокий снег" fetchPriority="high" />
      </div>
      <div className={styles.snowfall} aria-hidden="true">
        {snow.map((flake, index) => <span key={index} style={{ left: flake.left, animationDelay: flake.delay, animationDuration: flake.duration, width: flake.size, height: flake.size }} />)}
      </div>
    </div>
  </div>;
}
