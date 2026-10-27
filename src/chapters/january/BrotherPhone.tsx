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
        <a className={styles.phoneArchive} href={video.telegramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Архив просмотра «${video.label}» в Telegram`}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.7 3.3 2.6 10.7c-1.1.4-1.1 1-.2 1.3l4.9 1.5 1.9 5.9c.2.6.1.8.7.8.5 0 .7-.2 1-.5l2.7-2.6 5.6 4.1c1 .6 1.7.3 1.9-1l3.2-15c.3-1.5-.6-2.2-1.6-1.9ZM8.5 13.1l10.9-6.7c.5-.3 1-.1.6.3l-9 8.2-.4 3.6-2.1-5.4Z" /></svg>
          АРХИВ ПРОСМОТРА <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
    <div className={styles.phoneControls}>
      <button type="button" onClick={() => select(active - 1)} disabled={active === 0} aria-label="Предыдущее видео">←</button>
      <span>0{active + 1} <i /> 0{items.length}</span>
      <button type="button" onClick={() => select(active + 1)} disabled={active === items.length - 1} aria-label="Следующее видео">→</button>
    </div>
  </div>;
}
