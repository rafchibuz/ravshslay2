import { useRef, useState } from 'react';
import { YouTubePlayer } from '../../components/YouTubePlayer';
import { september } from './septemberContent';
import styles from './chapter.module.css';

function FallBranch({ right = false }: { right?: boolean }) {
  return <svg className={`${styles.branch} ${right ? styles.branchRight : ''}`} viewBox="0 0 300 550" fill="none" aria-hidden="true">
    <path d="M-14 541C108 446 78 312 169 220c40-42 72-111 116-214M58 426c-12-64-1-105 27-142m42 34c41-55 78-67 137-65m-94-45c-7-46 10-83 45-116" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M61 390c-31-27-38-55-33-79 29 22 42 48 33 79Zm47-78c-4-35 10-57 34-73 7 34-5 57-34 73Zm35-29c24-28 47-36 72-30-15 28-39 41-72 30Zm60-100c-4-30 7-54 34-69 6 29-5 51-34 69Zm17-45c23-20 48-24 72-12-20 21-43 27-72 12Z" fill="currentColor" opacity=".42" />
    <g fill="#e9c986"><circle cx="61" cy="390" r="4"/><circle cx="143" cy="283" r="4"/><circle cx="220" cy="138" r="4"/></g>
  </svg>;
}

function FootballGallery() {
  const [active, setActive] = useState(0);
  const photos = september.football.photos;
  const step = (direction: number) => setActive((current) => (current + direction + photos.length) % photos.length);
  return <div className={styles.phone} aria-label="Галерея фотографий футбольного стрима">
    <div className={styles.phoneSpeaker} aria-hidden="true" />
    <div className={styles.phoneHeader}><span className={styles.avatar}>R</span><div><strong>RAVSHANN</strong><small>ФУТБОЛ / СЕНТЯБРЬ 2026</small></div><span className={styles.phoneMenu}>•••</span></div>
    <div className={styles.photoWindow}><img key={photos[active]} src={photos[active]} alt={`Футбольный стрим и встреча с легендами: фото ${active + 1} из ${photos.length}`} loading="lazy" decoding="async" /><span>{String(active + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span></div>
    <div className={styles.phoneControls}><button type="button" onClick={() => step(-1)} aria-label="Предыдущее фото">←</button><div className={styles.phoneDots} aria-hidden="true">{photos.map((photo, index) => <i key={photo} className={index === active ? styles.activeDot : ''} />)}</div><button type="button" onClick={() => step(1)} aria-label="Следующее фото">→</button></div>
    <div className={styles.phoneFooter}>ЛИСТАЙ ФОТО <span>✦</span> КАДРЫ С ПОЛЯ</div>
  </div>;
}

function MemeReel() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = async () => {
    if (!ref.current) return;
    if (ref.current.paused) await ref.current.play(); else ref.current.pause();
  };
  return <div className={styles.reel}>
    <div className={styles.reelHead}><span className={styles.reelAvatar}>R</span><span><strong>RAVSHANN</strong><small>ОРИГИНАЛЬНЫЙ РОЛИК</small></span><span className={styles.reelMenu}>•••</span></div>
    <div className={styles.reelVideo}>
      <video ref={ref} src={september.meme.videoSrc} controls playsInline preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} aria-label="Оригинальный ролик мема" />
      {!playing && <button type="button" className={styles.reelPlay} onClick={toggle} aria-label="Воспроизвести оригинальный ролик">▶</button>}
    </div>
    <div className={styles.reelFooter}><span>♡　↗　◌</span><strong>МЕМ ВЕРНУЛСЯ В ЛЕНТУ</strong></div>
  </div>;
}

export function September() {
  return <section id="september" className={styles.chapter} aria-labelledby="september-title">
    <FallBranch /><FallBranch right />
    <header className={styles.monthHeader}>
      <div className={styles.monthEyebrow}><span>09 / 12</span><i /><span>ГЛАВА ДЕВЯТАЯ</span></div>
      <h2 id="september-title">СЕНТЯБРЬ <em>’26</em></h2>
      <p>Лето отступает постепенно. Листва желтеет, а истории набирают новый ход: шутка про рост, легендарная М5 и футбол с легендами.</p>
    </header>

    <article id={september.room.id} className={`${styles.scene} ${styles.room}`} aria-labelledby="september-room-title">
      <div className={styles.sceneIndex}><span>01 / МЕМ ПРО РОСТ</span><span>СЕНТЯБРЬ 2026</span></div>
      <div className={styles.sceneHeading}><span className={styles.kicker}>СЛИШКОМ БОЛЬШАЯ КОМНАТА</span><h3 id="september-room-title">МАСШТАБ<br /><em>ИМЕЕТ ЗНАЧЕНИЕ.</em></h3><p>Мем про рост вышел из фотомонтажа в реальность. Ребята построили комнату с гигантскими предметами: на их фоне Равшан кажется ещё меньше.</p></div>
      <div className={styles.roomStage}><div className={styles.roomArt}><span className={styles.roomMeasure}>× 4 МАСШТАБ</span><img src={september.room.image} alt="Равшан сидит среди огромных предметов в комнате, построенной для шутки о росте" loading="lazy" decoding="async" /></div><div className={styles.roomMedia}><span className={styles.mediaLabel}>КАК ЭТО СДЕЛАЛИ / ВИДЕО</span><YouTubePlayer videoId={september.room.videoId} title={september.room.title} url={september.room.videoUrl} posterFallback={september.room.image} label="СМОТРЕТЬ ВИДЕО" /></div></div>
    </article>

    <article id={september.bmw.id} className={`${styles.scene} ${styles.bmw}`} aria-labelledby="september-bmw-title">
      <div className={styles.sceneIndex}><span>02 / НОВАЯ ПОКУПКА</span><span>СЕНТЯБРЬ 2026</span></div>
      <div className={styles.bmwHeading}><span className={styles.kicker}>ЛЕГЕНДА В НОВОМ ГАРАЖЕ</span><h3 id="september-bmw-title">M5 <em>F10.</em></h3><p>В сентябре у Равшана появилась легендарная BMW M5 F10. Покупку и первые эмоции можно посмотреть в выпуске.</p></div>
      <div className={styles.bmwStage}><div className={styles.bmwGlow} aria-hidden="true" /><img src={september.bmw.image} alt="Синяя BMW M5 F10" loading="lazy" decoding="async" /><div className={styles.bmwVideo}><span className={styles.mediaLabel}>ПОКУПКА BMW M5 F10</span><YouTubePlayer videoId={september.bmw.videoId} title={september.bmw.title} url={september.bmw.videoUrl} posterFallback={september.bmw.image} label="СМОТРЕТЬ ПОКУПКУ" /></div></div>
    </article>

    <article id={september.football.id} className={`${styles.scene} ${styles.football}`} aria-labelledby="september-football-title">
      <div className={styles.sceneIndex}><span>03 / ФУТБОЛ С ЛЕГЕНДАМИ</span><span>СЕНТЯБРЬ 2026</span></div>
      <div className={styles.footballHeading}><span className={styles.kicker}>ВЫЗОВ ПРИНЯТ</span><h3 id="september-football-title">НА ПОЛЕ <em>С ЛЕГЕНДАМИ.</em></h3><p>Футбольные челленджи, игра против сборной России и встреча с легендами российского футбола. Стрим — рядом, фотографии с поля — в галерее.</p></div>
      <div className={styles.footballStage}><div className={styles.footballVideo}><span className={styles.mediaLabel}>СТРИМ / ФУТБОЛЬНЫЕ ЧЕЛЛЕНДЖИ</span><YouTubePlayer videoId={september.football.videoId} title={september.football.title} url={september.football.videoUrl} posterFallback={september.football.photos[1]} label="СМОТРЕТЬ СТРИМ" /><span className={styles.footballRule}>90:00　　RAVSHANN / 030</span></div><FootballGallery /></div>
    </article>

    <article id={september.meme.id} className={`${styles.scene} ${styles.meme}`} aria-labelledby="september-meme-title">
      <div className={styles.sceneIndex}><span>04 / МЕМ ВЕРНУЛСЯ</span><span>СЕНТЯБРЬ 2026</span></div>
      <div className={styles.memeStage}><div className={styles.memeCopy}><span className={styles.kicker}>ИЗ АРХИВА — СНОВА В РЕКОМЕНДАЦИЯХ</span><h3 id="september-meme-title">СТАРЫЙ<br />ПРИКОЛ.<br /><em>НОВАЯ ВОЛНА.</em></h3><p>Старый ролик Равшана снова завирусился. Шутку подхватили в соцсетях и стали повторять далеко за пределами его аудитории. Вот оригинал, с которого всё началось.</p><div className={styles.memeOrbit} aria-hidden="true">↗　♡　↗</div></div><MemeReel /></div>
    </article>
  </section>;
}
