import { useEffect, useRef, useState } from 'react';
import { marchEnduro, marchMatch } from './marchContent';
import styles from './chapter.module.css';

function BuddingBranch({ side }: { side: 'left' | 'right' | 'late' }) {
  return <svg className={`${styles.branch} ${side === 'right' ? styles.branchRight : side === 'late' ? styles.branchLate : ''}`} viewBox="0 0 300 560" fill="none" aria-hidden="true">
    <path d="M-20 550C34 460 77 421 111 343c35-80 28-166 88-270M42 459c86-47 123-104 154-189M107 348C50 303 39 247 51 163M145 238c62-23 90-56 120-113M174 144c-14-45-7-84 8-126" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M47 463c-17-8-29-6-37 7m102-123c-14-21-24-26-43-24m121-58c10-20 22-27 39-25M50 168c-17-13-27-12-39-2m187-87c16-14 28-15 44-11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <g className={styles.buds} fill="currentColor"><ellipse cx="13" cy="470" rx="9" ry="15" transform="rotate(-40 13 470)" /><ellipse cx="69" cy="324" rx="8" ry="13" transform="rotate(-47 69 324)" /><ellipse cx="226" cy="239" rx="8" ry="13" transform="rotate(38 226 239)" /><ellipse cx="13" cy="164" rx="7" ry="12" transform="rotate(-28 13 164)" /><ellipse cx="241" cy="67" rx="9" ry="14" transform="rotate(38 241 67)" /><ellipse cx="183" cy="19" rx="8" ry="13" transform="rotate(5 183 19)" /></g>
  </svg>;
}

function EnduroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
    }, { threshold: .1 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    if (video.ended) video.currentTime = 0;
    void video.play().catch(() => undefined);
  };

  return <div className={styles.enduroMedia}>
    <div className={styles.enduroMediaTop}><span>ПЕРВЫЙ ВЫЕЗД / ОРИГИНАЛЬНЫЙ ФРАГМЕНТ</span><span>▶ 00:59</span></div>
    <div className={styles.enduroVideoFrame}>
      <video ref={videoRef} src={`${marchEnduro.videoSrc}#t=0.1`} preload="metadata" playsInline controls={started} aria-label="Видео первого выезда и падения с эндуро" />
      {!started && <button type="button" className={styles.enduroPlay} onClick={play} aria-label="Смотреть фрагмент падения с эндуро"><span className={styles.enduroPlayIcon} aria-hidden="true">▶</span><strong>СМОТРЕТЬ ПЕРВЫЙ ЗАЕЗД</strong></button>}
    </div>
    <div className={styles.enduroMediaFoot}><span>МАРТ / ДЕНЬ ПОКУПКИ</span><a href={marchEnduro.videoSrc} target="_blank" rel="noopener noreferrer">ОТКРЫТЬ ВИДЕО ↗</a></div>
  </div>;
}

export function March() {
  const [playing, setPlaying] = useState(false);
  const [posterFallback, setPosterFallback] = useState(false);
  const poster = `https://i.ytimg.com/vi/${marchMatch.videoId}/${posterFallback ? 'hqdefault' : 'maxresdefault'}.jpg`;

  return <section id="march" className={styles.chapter} aria-labelledby="march-title">
    <div className={styles.springLight} aria-hidden="true" />
    <BuddingBranch side="left" />
    <BuddingBranch side="right" />
    <BuddingBranch side="late" />
    <header className={styles.chapterHeader}>
      <div className={styles.overline}><span>03 / 12</span><i /><span>ГЛАВА ТРЕТЬЯ</span></div>
      <div className={styles.monthTitle}><h2 id="march-title">МАРТ <span>’26</span></h2><span className={styles.seasonNote}>ЗИМА ОТСТУПАЕТ<br />ВЕСНА НАЧИНАЕТСЯ</span></div>
      <p>Холод ещё рядом, но в воздухе уже чувствуется весна. Первые бутоны, футбольный матч и первый выезд на эндуро.</p>
    </header>

    <article id={marchMatch.id} className={styles.match} aria-labelledby="march-match-title">
      <div className={styles.eventTop}><span>01 / ФУТБОЛ</span><span>МАРТ 2026</span></div>
      <div className={styles.matchHeading}>
        <span className={styles.kicker}>СТРИМ RAVSHANN / ФУТБОЛЬНЫЙ МАТЧ</span>
        <h3 id="march-match-title"><span>2DROTS</span><em>VS</em><span>LIT ENERGY</span></h3>
        <p>Матч 2DROTS против LIT ENERGY — смотрим стрим Равшана прямо здесь.</p>
      </div>

      <div className={styles.matchLayout}>
        <div className={styles.videoColumn}>
          <div className={styles.videoMeta}><span>ЭФИР / YOUTUBE</span><span>16:9</span></div>
          <div className={styles.videoFrame}>
            {playing ? <iframe title="Стрим Равшана: 2DROTS против LIT ENERGY" src={`https://www.youtube-nocookie.com/embed/${marchMatch.videoId}?autoplay=1`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <button type="button" className={styles.playButton} onClick={() => setPlaying(true)} aria-label="Смотреть стрим Равшана: 2DROTS против LIT ENERGY">
              <img src={poster} alt="" onError={() => { if (!posterFallback) setPosterFallback(true); }} />
              <span className={styles.playCircle} aria-hidden="true">▶</span>
              <strong>СМОТРЕТЬ СТРИМ</strong>
            </button>}
          </div>
          <a className={styles.originalLink} href={marchMatch.videoUrl} target="_blank" rel="noopener noreferrer">ОТКРЫТЬ НА YOUTUBE <span aria-hidden="true">↗</span></a>
        </div>
        <div className={styles.matchArt}>
          <span className={styles.pitchArc} aria-hidden="true" />
          <img src={marchMatch.image} alt="Художественный вырезанный кадр: игроки 2DROTS и LIT ENERGY борются за мяч" loading="lazy" decoding="async" />
          <span className={styles.artCaption}>НА ПОЛЕ / 2DROTS × LIT ENERGY</span>
        </div>
      </div>
      <div className={styles.touchline} aria-hidden="true"><span>2DROTS</span><i /><span>LIT ENERGY</span></div>
    </article>

    <article id={marchEnduro.id} className={styles.enduro} aria-labelledby="enduro-title">
      <div className={styles.eventTop}><span>02 / ЭНДУРО</span><span>МАРТ 2026</span></div>
      <div className={styles.enduroLayout}>
        <div className={styles.enduroStory}>
          <div className={styles.enduroHeading}>
            <span className={styles.kicker}>ПОКУПКА / ПЕРВЫЙ ДЕНЬ</span>
            <h3 id="enduro-title">ЭНДУРО.<br /><span>ДЕНЬ ПЕРВЫЙ.</span></h3>
            <p>Купил эндуро и в первый же день выяснил, насколько близко бывает земля. Первый выезд — сразу с неожиданным финалом.</p>
          </div>
          <div className={styles.enduroArt}>
            <span className={styles.enduroOrbit} aria-hidden="true" />
            <img src={marchEnduro.image} alt="Постановочный арт: мотоциклист падает с эндуро в грязь" loading="lazy" decoding="async" />
            <span className={styles.gravity}>ГРАВИТАЦИЯ <b>1:0</b></span>
          </div>
        </div>
        <EnduroVideo />
      </div>
      <div className={styles.enduroTrail} aria-hidden="true"><span>КУПИЛ</span><i /><span>ПОЕХАЛ</span><i /><span>ПОЗНАКОМИЛСЯ С ГРЯЗЬЮ</span></div>
    </article>
  </section>;
}
