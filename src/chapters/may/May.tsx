import { YouTubePlayer } from '../../components/YouTubePlayer';
import { mayBuggy, mayDamas, mayKaha } from './mayContent';
import styles from './chapter.module.css';

function FloweringBranch({ right = false, placement = 'start' }: { right?: boolean; placement?: 'start' | 'mid' | 'late' }) {
  return <svg className={`${styles.branch} ${right ? styles.branchRight : ''} ${placement === 'mid' ? styles.branchMid : placement === 'late' ? styles.branchLate : ''}`} viewBox="0 0 310 580" fill="none" aria-hidden="true">
    <path d="M-22 575C59 493 69 408 127 338c54-67 63-167 163-321M70 425c63-33 96-75 105-139M128 337C81 297 65 260 54 201M204 209c-2-42 12-73 45-105" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M29 482c-25-5-42 0-56 20m104-91c-11-25-25-37-50-40m136-87c18 3 33-1 50-19M56 205c-22-11-38-7-56 3m236-101c15-20 32-28 56-28" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <g className={styles.blossoms} fill="currentColor"><circle cx="27" cy="371" r="11"/><circle cx="-2" cy="208" r="9"/><circle cx="210" cy="265" r="12"/><circle cx="291" cy="79" r="10"/><circle cx="-22" cy="501" r="10"/></g>
  </svg>;
}

export function May() {
  return <section id="may" className={styles.chapter} aria-labelledby="may-title">
    <FloweringBranch />
    <FloweringBranch right />
    <FloweringBranch right placement="mid" />
    <FloweringBranch placement="late" />
    <header className={styles.monthHeader}>
      <div className={styles.monthIndex}><span>05 / 12</span><i /><span>ГЛАВА ПЯТАЯ</span></div>
      <h2 id="may-title">МАЙ <span>’26</span></h2>
      <p>Весна расцвела. А вместе с ней — истории, в которых скорость важна, но настроение ещё важнее.</p>
    </header>
    <article id={mayDamas.id} className={styles.race} aria-labelledby="damas-title">
      <div className={styles.eventIndex}><span>01 / ГОНКА</span><span>МАЙ 2026</span></div>
      <div className={styles.raceHeading}>
        <span className={styles.kicker}>СТАРТ ДАН / DAMAS RACE</span>
        <h3 id="damas-title">ГОНКИ НА <em>ДАМАСАХ</em></h3>
        <p>Кто быстрее доберётся до финиша? Равшан даёт старт — дальше всё решает трасса.</p>
      </div>
      <div className={styles.raceLayout}>
        <div className={styles.video}><YouTubePlayer videoId={mayDamas.videoId} title="Гонки на Дамасах" url={mayDamas.videoUrl} posterFallback={mayDamas.imageReady} label="СМОТРЕТЬ ГОНКУ" /></div>
        <div className={styles.gesture} role="img" aria-label="Равшан показывает старт гонки, взмахивая руками">
          <span className={styles.gestureGlow} aria-hidden="true" />
          <span className={styles.motionArc} aria-hidden="true" />
          <img className={styles.readyPose} src={mayDamas.imageReady} alt="" loading="lazy" decoding="async" />
          <img className={styles.wavePose} src={mayDamas.imageWave} alt="" loading="lazy" decoding="async" />
          <span className={styles.startMark} aria-hidden="true">НА СТАРТ · ВНИМАНИЕ · МАРШ!</span>
        </div>
      </div>
    </article>
    <article id={mayKaha.id} className={styles.irl} aria-labelledby="kaha-title">
      <div className={styles.eventIndex}><span>02 / ИРЛ</span><span>МАЙ 2026</span></div>
      <div className={styles.irlHeading}>
        <span className={styles.irlKicker}>ВСТРЕЧА В КАДРЕ / ЛЕГЕНДА КАХА</span>
        <h3 id="kaha-title">ИРЛ <span>С КАХОЙ</span></h3>
        <p>Равшан и Каха в одном кадре. Включай выпуск — эту встречу лучше увидеть самому.</p>
      </div>
      <div className={styles.irlStage}>
        <span className={styles.irlHalo} aria-hidden="true" />
        <span className={styles.irlOrbit} aria-hidden="true" />
        <img className={styles.irlPortrait} src={mayKaha.image} alt="Каха и Равшан вместе в кадре" loading="lazy" decoding="async" />
        <span className={styles.irlStamp} aria-hidden="true"><b>IRL</b><span>МАЙ ’26</span></span>
        <div className={styles.irlVideo}><YouTubePlayer videoId={mayKaha.videoId} title={mayKaha.title} url={mayKaha.videoUrl} posterFallback={mayKaha.image} label="СМОТРЕТЬ ИРЛ" /></div>
      </div>
    </article>
    <article id={mayBuggy.id} className={styles.buggy} aria-labelledby="buggy-title">
      <div className={styles.eventIndex}><span>03 / МАЙСКИЙ ФИНАЛ</span><span>МАЙ 2026</span></div>
      <div className={styles.buggyStage}>
        <span className={styles.buggyGlow} aria-hidden="true" />
        <div className={styles.buggyCopy}>
          <span className={styles.buggyKicker}>НОВАЯ ПОКУПКА / НОВАЯ ТРАССА</span>
          <h3 id="buggy-title">БАГГИ<br /><span>ЗА 3 МЛН ₽</span></h3>
          <p>Финальный поворот мая — багги за три миллиона рублей. Дальше только газ, грязь и большой выпуск.</p>
        </div>
        <img className={styles.buggyArt} src={mayBuggy.image} alt="Равшан за рулём синего багги RS в грязевом заносе" loading="lazy" decoding="async" />
        <div className={styles.buggyVideo}><YouTubePlayer videoId={mayBuggy.videoId} title="Покупка багги за 3 млн рублей" url={mayBuggy.videoUrl} posterFallback={mayBuggy.image} label="СМОТРЕТЬ ВЫПУСК" /></div>
        <span className={styles.buggyMark} aria-hidden="true">RS / 05.26</span>
      </div>
      <div className={styles.monthEnd}><span>05 / 12 — МАЙ</span><i /><span>ПРОДОЛЖЕНИЕ СЛЕДУЕТ</span></div>
    </article>
  </section>;
}
