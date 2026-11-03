import { YouTubePlayer } from '../../components/YouTubePlayer';
import { juneNiva } from './juneContent';
import styles from './chapter.module.css';

function SummerBranch({ right = false }: { right?: boolean }) {
  return <svg className={`${styles.branch} ${right ? styles.branchRight : ''}`} viewBox="0 0 360 540" fill="none" aria-hidden="true">
    <path d="M-20 496C79 420 118 362 146 288c31-85 89-144 177-202M91 394c-14-77-26-122-3-201M144 291c71-28 119-45 171-38M189 221c-13-60-7-115 26-164M245 148c22 14 56 16 93 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M67 417c44-14 55-8 69 5-29 13-48 12-69-5ZM113 344c-35-21-44-46-43-68 39 12 49 32 43 68ZM160 268c25-40 54-51 78-49-12 30-40 49-78 49ZM211 197c-21-37-20-61-11-82 29 25 34 49 11 82ZM251 144c24-24 47-28 65-20-16 22-36 30-65 20Z" fill="currentColor" opacity=".45" />
    {[ [88,193],[215,57],[315,253],[323,86],[338,153] ].map(([x,y], i) => <g key={i} transform={`translate(${x} ${y})`}>
      <circle r="19" fill="#f8d9a0" opacity=".2" />
      <path d="M0-25C8-15 9-7 0 0c-10-7-9-16 0-25ZM25 0C15 8 7 9 0 0c7-10 16-9 25 0ZM0 25C-8 15-9 7 0 0c10 7 9 16 0 25ZM-25 0C-15-8-7-9 0 0c-7 10-16 9-25 0Z" fill="#f5c69b" opacity=".82" />
      <circle r="5" fill="#ffe9a8" />
    </g>)}
  </svg>;
}

export function June() {
  return <section id="june" className={styles.chapter} aria-labelledby="june-title">
    <SummerBranch />
    <SummerBranch right />
    <header className={styles.monthHeader}>
      <div className={styles.monthIndex}><span>06 / 12</span><i /><span>ГЛАВА ШЕСТАЯ</span></div>
      <h2 id="june-title">ИЮНЬ <span>’26</span></h2>
      <p>Ветки уже в цвету, лето набирает ход. А новая Нива — кажется, не очень.</p>
    </header>
    <article id={juneNiva.id} className={styles.event} aria-labelledby="niva-title">
      <div className={styles.eventIndex}><span>01 / ЛЕТНИЙ ИРЛ</span><span>ИЮНЬ 2026</span></div>
      <div className={styles.storyStage}>
        <div className={styles.storyCopy}>
          <span className={styles.kicker}>БУСТЕР × RAVSHANN / НОВАЯ НИВА</span>
          <h3 id="niva-title">ПЕРВЫЙ<br /><em>ВЫЕЗД.</em><br /><span>ПЕРВЫЙ РЕМОНТ.</span></h3>
          <p>ИРЛ с Бустером на новой Ниве. План был прост: прокатиться и снять контент. Но уже в первый день машина решила добавить сюжету поворот.</p>
          <div className={styles.storyTrail}><span>01&nbsp; ЗНАКОМСТВО</span><i /><span>02&nbsp; КАПОТ ОТКРЫТ</span></div>
        </div>
        <span className={styles.sunDisc} aria-hidden="true" />
        <span className={styles.loop} aria-hidden="true" />
        <img className={styles.art} src={juneNiva.image} alt="Бустер рядом с синей Нивой с открытым капотом" loading="lazy" decoding="async" />
        <span className={styles.sideMark} aria-hidden="true">ЛЕТО / 06.26</span>
      </div>
      <div className={styles.videoLead}><span>ИСТОРИЯ В ДВУХ ВЫПУСКАХ</span><i /><span>СМОТРЕТЬ ПО ПОРЯДКУ ↓</span></div>
      <div className={styles.videoGrid}>
        {juneNiva.videos.map((video, index) => <div className={styles.videoStory} key={video.id}>
          <div className={styles.videoHeading}><span className={styles.videoNumber}>0{index + 1}</span><div><span className={styles.videoEyebrow}>{index === 0 ? 'НАЧАЛО / ИРЛ' : 'ПРОДОЛЖЕНИЕ / ПОЛОМКА'}</span><h4>{index === 0 ? 'НОВАЯ НИВА И БУСТЕР' : 'ПЕРВЫЙ ДЕНЬ — И УЖЕ КАПОТ'}</h4></div></div>
          <YouTubePlayer videoId={video.id} title={video.title} url={video.url} posterFallback={juneNiva.image} label={video.label} />
        </div>)}
      </div>
    </article>
    <div className={styles.monthEnd}><span>06 / 12 — ИЮНЬ</span><i /><span>ЛЕТО ТОЛЬКО НАЧАЛОСЬ</span></div>
  </section>;
}
