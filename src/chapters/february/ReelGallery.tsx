import { useRef, useState } from 'react';
import type { Reel } from '../../lib/februaryContent';
import styles from './chapter.module.css';

export function ReelGallery({ items }: { items: readonly Reel[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const touchStart = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reel = items[active];
  if (!reel) return null;

  const select = (index: number) => {
    if (index < 0 || index >= items.length || index === active) return;
    setActive(index);
    setPlaying(false);
  };

  const start = () => {
    setPlaying(true);
    void videoRef.current?.play();
  };

  return <div className={styles.reels} aria-label="Три вертикальных видео о встрече с Хамзатом Чимаевым">
    <div className={styles.reelsHeader}>
      <span className={styles.reelsAvatar} aria-hidden="true">R</span>
      <span><strong>RAVSHANN</strong><small>ФЕВРАЛЬ 2026 · ВСТРЕЧА</small></span>
      <span className={styles.reelsMore} aria-hidden="true">•••</span>
    </div>
    <div className={styles.reelViewport}
      onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const shift = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
        if (Math.abs(shift) > 55) select(active + (shift < 0 ? 1 : -1));
        touchStart.current = null;
      }}>
      <video key={reel.src} ref={videoRef} src={reel.src} poster={reel.poster} controls={playing} playsInline preload="metadata" onEnded={() => setPlaying(false)} aria-label={`${reel.label}: встреча с Хамзатом Чимаевым`} />
      {!playing && <button className={styles.reelPoster} type="button" onClick={start} aria-label={`Смотреть ${reel.label}`}>
          <span className={styles.reelPlay} aria-hidden="true">▶</span>
          <strong>СМОТРЕТЬ РИЛС</strong>
        </button>}
      <div className={styles.reelIndex} aria-hidden="true">0{active + 1} / 0{items.length}</div>
    </div>
    <div className={styles.reelsControls}>
      <button type="button" onClick={() => select(active - 1)} disabled={active === 0} aria-label="Предыдущий рилс">←</button>
      <div className={styles.reelDots} aria-label={`Рилс ${active + 1} из ${items.length}`}>
        {items.map((item, index) => <button key={item.src} type="button" className={index === active ? styles.activeDot : ''} onClick={() => select(index)} aria-label={`Перейти к рилсу ${index + 1}`} aria-current={index === active ? 'true' : undefined} />)}
      </div>
      <button type="button" onClick={() => select(active + 1)} disabled={active === items.length - 1} aria-label="Следующий рилс">→</button>
    </div>
    <div className={styles.reelFooter}><span>ХАМЗАТ × RAVSHANN</span><span>9:16 / 03 ВИДЕО</span></div>
  </div>;
}
