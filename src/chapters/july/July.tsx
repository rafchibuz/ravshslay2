import { YouTubePlayer } from '../../components/YouTubePlayer';
import { julyTasting } from './julyContent';
import styles from './chapter.module.css';

function SummerLeaves({ right = false }: { right?: boolean }) {
  return <svg className={`${styles.leaves} ${right ? styles.leavesRight : ''}`} viewBox="0 0 340 600" fill="none" aria-hidden="true">
    <path d="M-20 594C42 505 104 447 128 340c19-90 83-190 184-300M55 489c-28-75-17-116 9-171m64 26c70-52 117-59 182-45m-142-39c-12-68 8-117 51-160m11 92c54-40 91-54 132-51" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M56 420c-27-36-29-69-16-101 27 33 34 65 16 101Zm55-60c-4-48 11-76 46-98 6 44-11 76-46 98Zm37-54c27-31 57-40 91-33-20 34-51 47-91 33Zm47-104c-5-42 10-74 44-95 6 39-9 71-44 95Zm38-36c28-25 57-32 90-20-23 28-51 37-90 20Z" fill="currentColor" opacity=".37" />
    <g fill="#d9f975"><circle cx="55" cy="420" r="5"/><circle cx="149" cy="306" r="6"/><circle cx="232" cy="166" r="5"/></g>
  </svg>;
}

export function July() {
  return <section id="july" className={styles.chapter} aria-labelledby="july-title">
    <SummerLeaves />
    <SummerLeaves right />
    <header className={styles.monthHeader}>
      <div className={styles.monthIndex}><span>07 / 12</span><i /><span>ГЛАВА СЕДЬМАЯ</span></div>
      <div className={styles.monthLine}><h2 id="july-title">ИЮЛЬ <span>’26</span></h2><p>Лето набрало вкус. Июль открывается двумя дегустациями LIT ENERGY от Равшана.</p></div>
    </header>

    <article id={julyTasting.id} className={styles.story} aria-labelledby="july-tasting-title">
      <div className={styles.eventIndex}><span>01 / ДЕГУСТАЦИЯ</span><span>ИЮЛЬ 2026</span></div>
      <div className={styles.feature}>
        <div className={styles.copy}>
          <span className={styles.kicker}>LIT ENERGY × RAVSHANN</span>
          <h3 id="july-tasting-title">ВКУС<br /><span>РАВШАНА</span><em>.</em></h3>
          <p>Два раунда дегустации: сначала с блогерами, затем с подписчиками. Смотри обе части по порядку.</p>
          <div className={styles.rounds}><span>01&nbsp; БЛОГЕРЫ</span><i /><span>02&nbsp; ПОДПИСЧИКИ</span></div>
        </div>
        <div className={styles.art}>
          <span className={styles.artGlow} aria-hidden="true" />
          <span className={styles.artRing} aria-hidden="true" />
          <span className={styles.artMark} aria-hidden="true">LIT / 07.26</span>
          <img src={julyTasting.image} alt="Равшан и девушка представляют банку LIT ENERGY со вкусом Равшана" loading="lazy" decoding="async" />
        </div>
      </div>
      <div className={styles.episodesLead}><span>ДВА ВЫПУСКА</span><i /><span>ОДИН ВКУС ↓</span></div>
      <div className={styles.episodes}>
        {julyTasting.videos.map((video, index) => <section className={styles.episode} key={video.id} aria-label={`Часть ${index + 1}: ${index === 0 ? 'с блогерами' : 'с подписчиками'}`}>
          <div className={styles.episodeHeading}><span className={styles.episodeNumber}>0{index + 1}</span><div><span className={styles.episodeKicker}>{index === 0 ? 'ПЕРВАЯ ДЕГУСТАЦИЯ' : 'ВТОРАЯ ДЕГУСТАЦИЯ'}</span><h4>{index === 0 ? 'С БЛОГЕРАМИ' : 'С ПОДПИСЧИКАМИ'}</h4></div></div>
          <YouTubePlayer videoId={video.id} title={video.title} url={video.url} posterFallback={julyTasting.image} label={video.label} />
        </section>)}
      </div>
    </article>
    <div className={styles.monthEnd}><span>07 / 12 — ИЮЛЬ</span><i /><span>ПРОДОЛЖЕНИЕ СЛЕДУЕТ</span></div>
  </section>;
}
