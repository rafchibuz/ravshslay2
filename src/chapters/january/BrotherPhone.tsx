import { useState } from 'react';
import type { LocalVideo } from '../../lib/contentValidation';
import styles from './chapter.module.css';

export function BrotherPhone({ items }: { items: readonly LocalVideo[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const video = items[active];
  if (!video) return null;

  const select = (index: number) => {
    setActive(index);
    setPlaying(true);
  };

  return <div className={styles.phoneShell} aria-label="Два видео: Брат и Брат 2">
    <span className={styles.phoneTop}>9:16 / КИНОАРХИВ <span>● REC</span></span>
    <div className={styles.phoneScreen}>
      <div className={styles.phoneScreenHeader}><span>ЯНВАРЬ ’26</span><span>0{active + 1} / 0{items.length}</span></div>
      <div className={styles.phoneVideoFrame}>
        {playing ? <video key={video.src} src={video.src} poster={video.poster} controls autoPlay playsInline preload="metadata" aria-label={`Видео «${video.label}»`} /> :
          <button className={styles.phonePlay} type="button" onClick={() => setPlaying(true)} aria-label={`Смотреть видео «${video.label}»`}>
            <img src={video.poster} alt="" />
            <span className={styles.playDisc} aria-hidden="true">▶</span>
            <strong>СМОТРЕТЬ</strong>
          </button>}
      </div>
      <div className={styles.phoneScreenMeta}>
        <span>ТРАДИЦИЯ / ДВА ФИЛЬМА</span>
        <strong>{video.label}</strong>
        <small>Выбери следующий ролик стрелкой ниже</small>
      </div>
    </div>
    <div className={styles.phoneControls}>
      <button type="button" onClick={() => select(active - 1)} disabled={active === 0} aria-label="Предыдущее видео">←</button>
      <span>0{active + 1} <i /> 0{items.length}</span>
      <button type="button" onClick={() => select(active + 1)} disabled={active === items.length - 1} aria-label="Следующее видео">→</button>
    </div>
  </div>;
}
