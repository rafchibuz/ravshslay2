import { useRef, useState } from 'react';
import styles from './LocalVideoPlayer.module.css';

type Props = {
  src: string;
  title: string;
  label: string;
  poster?: string;
};

export function LocalVideoPlayer({ src, title, label, poster }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.ended) video.currentTime = 0;
    setPlaying(true);
    void video.play().catch(() => setPlaying(false));
  };

  return <div className={styles.player}>
    <video ref={videoRef} src={src} poster={poster} preload="metadata" playsInline controls={playing} aria-label={title} onEnded={() => setPlaying(false)} />
    {!playing && <button type="button" className={styles.play} onClick={start} aria-label={label}>
      <span className={styles.playIcon} aria-hidden="true">▶</span>
      <strong>{label}</strong>
    </button>}
  </div>;
}
