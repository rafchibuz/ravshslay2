import { useState } from 'react';
import styles from './YouTubePlayer.module.css';

type Props = {
  videoId: string;
  title: string;
  url: string;
  posterFallback: string;
  label: string;
  playlistId?: string;
};

export function YouTubePlayer({ videoId, title, url, posterFallback, label, playlistId }: Props) {
  const [playing, setPlaying] = useState(false);
  const [posterIndex, setPosterIndex] = useState(0);
  const posters = [
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    posterFallback,
  ];
  const tryNextPoster = () => setPosterIndex((index) => Math.min(index + 1, posters.length - 1));
  const embed = new URL(`https://www.youtube-nocookie.com/embed/${videoId}`);
  embed.searchParams.set('autoplay', '1');
  if (playlistId) embed.searchParams.set('list', playlistId);

  return <div className={styles.player}>
    <div className={styles.meta}><span>ВИДЕО / YOUTUBE</span><span>16:9</span></div>
    <div className={styles.frame}>
      {playing ? <iframe title={title} src={embed.toString()} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> :
        <button type="button" className={styles.preview} onClick={() => setPlaying(true)} aria-label={`Смотреть ${title}`}>
          <img
            src={posters[posterIndex]}
            alt=""
            onError={tryNextPoster}
            onLoad={(event) => {
              // YouTube may return a tiny placeholder with HTTP 200 when maxres is unavailable.
              if (posterIndex < posters.length - 1 && event.currentTarget.naturalWidth < 480) tryNextPoster();
            }}
          />
          <span className={styles.shade} />
          <span className={styles.playIcon} aria-hidden="true">▶</span>
          <strong>{label}</strong>
        </button>}
    </div>
    <div className={styles.foot}><span>{playlistId ? 'ПЛЕЙЛИСТ' : 'ОРИГИНАЛЬНОЕ ВИДЕО'}</span><a href={url} target="_blank" rel="noopener noreferrer">ОТКРЫТЬ НА YOUTUBE ↗</a></div>
  </div>;
}
