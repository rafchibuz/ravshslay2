import { YouTubePlayer } from '../../components/YouTubePlayer';
import { juneClassico, juneDriving, juneNiva } from './juneContent';
import { JuneExtra } from './JuneExtra';
import styles from './chapter.module.css';

function SummerBranch({ right = false, placement = 'start' }: { right?: boolean; placement?: 'start' | 'mid' | 'late' }) {
  return <svg className={`${styles.branch} ${right ? styles.branchRight : ''} ${placement === 'mid' ? styles.branchMid : placement === 'late' ? styles.branchLate : ''}`} viewBox="0 0 360 540" fill="none" aria-hidden="true">
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
    <SummerBranch right placement="mid" />
    <SummerBranch placement="late" />
    <header className={styles.monthHeader}>
      <div className={styles.monthIndex}><span>06 / 12</span><i /><span>ГЛАВА ШЕСТАЯ</span></div>
      <h2 id="june-title">ИЮНЬ <span>’26</span></h2>
      <p>Ветки уже в цвету, лето набирает ход. ИРЛ, футбол, автомобильные проекты и неожиданные эксперименты — июнь только разгоняется.</p>
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
    <article id={juneClassico.id} className={styles.classico} aria-labelledby="classico-title">
      <div className={styles.eventIndex}><span>02 / МЕДИАФУТБОЛ</span><span>ИЮНЬ 2026</span></div>
      <div className={styles.classicoHeader}>
        <span className={styles.classicoKicker}>СТРИМЕРЫ × БЛОГЕРЫ / ВЫХОД НА ПОЛЕ</span>
        <h3 id="classico-title">BETBOOM <span>МЕДИА</span><br />КЛАССИКО<span className={styles.titleStar}>✳</span></h3>
        <p>Равшан — среди участников большого медиафутбольного матча. А выход на поле устроили с особым размахом: футболиста подвезли на BMW, как пассажира такси.</p>
      </div>
      <div className={styles.classicoStage}>
        <span className={styles.pitchArc} aria-hidden="true" />
        <span className={styles.pitchMark} aria-hidden="true">НА ПОЛЕ / № 30</span>
        <div className={styles.classicoVideo}>
          <YouTubePlayer videoId={juneClassico.videoId} title={juneClassico.title} url={juneClassico.videoUrl} posterFallback={juneClassico.car} label="СМОТРЕТЬ МАТЧ" />
        </div>
        <img className={styles.classicoCar} src={juneClassico.car} alt="Чёрный BMW, стилизующий выход футболиста на поле" loading="lazy" decoding="async" />
        <img className={styles.classicoPortrait} src={juneClassico.portrait} alt="Равшан в фиолетовой футбольной форме с номером 30" loading="lazy" decoding="async" />
        <div className={styles.taxiNote}><span className={styles.taxiIcon}>↗</span><span>ВЫХОД НА ПОЛЕ<br /><strong>С ДОСТАВКОЙ</strong></span></div>
      </div>
      <div className={styles.classicoFoot}><span>BMW → ГАЗОН</span><i /><span>СМОТРЕТЬ ЗАПИСЬ МАТЧА ↑</span></div>
    </article>
    <article id={juneDriving.id} className={styles.driving} aria-labelledby="driving-title">
      <div className={styles.eventIndex}><span>03 / УРОК ВОЖДЕНИЯ</span><span>ИЮНЬ 2026</span></div>
      <div className={styles.drivingHeader}>
        <div>
          <span className={styles.drivingKicker}>РОСТИК × RAVSHANN / ИРЛ</span>
          <h3 id="driving-title">РОСТИК<br /><em>ЗА РУЛЁМ</em><span className={styles.drivingPeriod}>.</span></h3>
        </div>
        <p>Планировали урок вождения. Получился стрим, в котором спокойствие осталось где-то на старте. Пристегнитесь: дальше — полный беспредел.</p>
      </div>
      <div className={styles.drivingStage}>
        <svg className={styles.drivingRoute} viewBox="0 0 1200 580" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path d="M-35 428C150 493 284 242 455 291S717 525 906 368s249-117 339-67" stroke="currentColor" strokeWidth="2" strokeDasharray="8 13" />
          <path d="M-35 449C150 514 284 263 455 312S717 546 906 389s249-117 339-67" stroke="currentColor" strokeWidth="1" opacity=".35" />
          <circle cx="185" cy="396" r="7" /><circle cx="594" cy="387" r="7" /><circle cx="1050" cy="279" r="7" />
        </svg>
        <span className={styles.drivingSun} aria-hidden="true" />
        <figure className={`${styles.drivingFigure} ${styles.drivingReaction}`}>
          <img src={juneDriving.reaction} alt="Бурная реакция в машине во время стрима" loading="lazy" decoding="async" />
          <figcaption><b>01</b><span>НАЧАЛОСЬ<br />ГРОМКО</span></figcaption>
        </figure>
        <figure className={`${styles.drivingFigure} ${styles.drivingWheel}`}>
          <img src={juneDriving.driving} alt="Ростик за рулём автомобиля" loading="lazy" decoding="async" />
          <figcaption><b>02</b><span>РОСТИК<br />ЗА РУЛЁМ</span></figcaption>
        </figure>
        <figure className={`${styles.drivingFigure} ${styles.drivingMeeting}`}>
          <img src={juneDriving.meeting} alt="Ростик и Равшан встречаются на улице" loading="lazy" decoding="async" />
          <figcaption><b>03</b><span>ВЫШЛИ<br />НА СВЕЖИЙ ВОЗДУХ</span></figcaption>
        </figure>
        <span className={styles.drivingEdgeNote} aria-hidden="true">ПРИСТЕГНИСЬ / 06.26</span>
      </div>
      <div className={styles.drivingWatch}>
        <div className={styles.drivingWatchHeading}><span>ЗАПИСЬ СТРИМА</span><i /><span>СМОТРЕТЬ УРОК ЦЕЛИКОМ ↘</span></div>
        <YouTubePlayer videoId={juneDriving.videoId} title={juneDriving.title} url={juneDriving.videoUrl} posterFallback={juneDriving.driving} label="СМОТРЕТЬ СТРИМ" />
      </div>
    </article>
    <JuneExtra />
    <div className={styles.monthEnd}><span>06 / 12 — ИЮНЬ</span><i /><span>ЛЕТО ТОЛЬКО НАЧАЛОСЬ</span></div>
  </section>;
}
