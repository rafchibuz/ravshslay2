import { LocalVideoPlayer } from '../../components/LocalVideoPlayer';
import styles from './JanuaryDanceMeme.module.css';

export function JanuaryDanceMeme() {
  return <article id="2026-01-meme" className={styles.meme} aria-labelledby="january-dance-title">
    <div className={styles.glow} aria-hidden="true" />
    <div className={styles.topline}><span>ЯНВАРЬ / ПЕРВАЯ ИСТОРИЯ</span><span>НОВЫЙ ГОД 2026</span></div>
    <div className={styles.heading}>
      <span className={styles.kicker}>МЕМ, С КОТОРОГО ВСЁ НАЧАЛОСЬ</span>
      <h3 id="january-dance-title">ТАНЕЦ, КОТОРЫЙ <em>РАЗОРВАЛ ТИКТОК</em></h3>
      <p>Под Новый год танец Равшана в дублёнке разлетелся по TikTok и превратился в мем. Мгновение из стрима — и его уже повторяют и обсуждают в ленте.</p>
    </div>
    <div className={styles.composition}>
      <div className={styles.videoArea}>
        <div className={styles.videoHead}><span className={styles.liveDot} /> ОРИГИНАЛЬНЫЙ ФРАГМЕНТ <span>00:27</span></div>
        <div className={styles.videoFrame}>
          <LocalVideoPlayer
            src="/assets/january/new-year-dance.mp4"
            poster="/assets/january/new-year-dance-poster.jpg"
            title="Новогодний танец Равшана — фрагмент, ставший мемом"
            label="СМОТРЕТЬ ТАНЕЦ"
          />
        </div>
      </div>
      <figure className={styles.portrait}>
        <span className={styles.portraitWord} aria-hidden="true">ЧИК<br />ЧИРИК</span>
        <img src="/assets/january/new-year-dance-portrait.png" alt="Равшан в дублёнке и розовом галстуке держит телефон" loading="lazy" decoding="async" />
      </figure>
    </div>
    <div className={styles.next}><span>01 / НАЧАЛО ГОДА</span><a href="#2026-01-01">ДАЛЬШЕ / НОВОГОДНИЙ СТРИМ <span aria-hidden="true">↓</span></a></div>
  </article>;
}
