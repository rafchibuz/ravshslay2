import { MediaFrame } from '../../components/MediaFrame';
import { scenes } from '../../lib/contentValidation';
import { designBrief } from './designBrief';
import styles from './chapter.module.css';

export function January() {
  const [opening, tradition, game] = scenes;
  return <section id="january" className={styles.chapter} aria-labelledby="january-title">
    <div className={styles.winterLight} aria-hidden="true" />
    <div className={styles.intro}>
      <div className={styles.verticalMark}>01 / 12</div>
      <div className={styles.introText}>
        <span className="eyebrow">ГЛАВА ПЕРВАЯ <i /> ЗИМНИЙ ПРОЛОГ</span>
        <h2 id="january-title">ЯНВАРЬ<span>’26</span></h2>
        <p>Год начинается с историй, к которым хочется вернуться. Первые три эпизода — редакционный прототип; оригиналы ещё собираются.</p>
        <span className={styles.concept}>АРТ-КОНЦЕПЦИЯ В РАБОТЕ · {designBrief.accent}</span>
      </div>
      <div className={styles.bigOne} aria-hidden="true">01</div>
    </div>

    <article className={`${styles.scene} ${styles.cinema}`} id={opening.id} aria-labelledby={`${opening.id}-title`}>
      <div className={styles.sceneTop}><span>{opening.eyebrow}</span><span>01 — 03</span></div>
      <div className={styles.cinemaLayout}>
        <div className={styles.cinemaFrame}><MediaFrame scene={opening} label={opening.title} /></div>
        <div className={styles.sceneCopy}>
          <span className={styles.tag}>АРХИВ / ЯНВАРЬ</span>
          <h3 id={`${opening.id}-title`}>{opening.title}</h3>
          <p>{opening.description}</p>
          <div className={styles.source}>ИЗ ИСХОДНОГО ПЛАНА: «{opening.sourceTitle}»</div>
          <a href={`#${tradition.id}`} className={styles.sceneNext}>СЛЕДУЮЩАЯ ИСТОРИЯ <span>↘</span></a>
        </div>
      </div>
    </article>

    <article className={`${styles.scene} ${styles.social}`} id={tradition.id} aria-labelledby={`${tradition.id}-title`}>
      <div className={styles.sceneTop}><span>{tradition.eyebrow}</span><span>02 — 03</span></div>
      <div className={styles.socialLayout}>
        <div className={styles.socialCopy}>
          <div className={styles.quoteMark}>“</div>
          <span className={styles.tag}>ПАУЗА МЕЖДУ СОБЫТИЯМИ</span>
          <h3 id={`${tradition.id}-title`}>{tradition.title}</h3>
          <p>{tradition.description}</p>
          <div className={styles.source}>ИЗ ИСХОДНОГО ПЛАНА: «{tradition.sourceTitle}»</div>
          <a href={`#${game.id}`} className={styles.sceneNext}>ДАЛЬШЕ ПО ЯНВАРЮ <span>↘</span></a>
        </div>
        <div className={styles.phoneShell}><span className={styles.phoneTop}>9:16 / SOCIAL</span><div className={styles.phoneScreen}><MediaFrame scene={tradition} label={tradition.title} /></div><span className={styles.phoneBottom}>ОРИГИНАЛ В ПОДГОТОВКЕ</span></div>
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
