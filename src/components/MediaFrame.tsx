import { useState } from 'react';
import type { Scene } from '../lib/contentValidation';

function youtubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === 'youtu.be') return parsed.pathname.slice(1);
    if (parsed.hostname.endsWith('youtube.com')) return parsed.searchParams.get('v');
  } catch { return null; }
  return null;
}

export function MediaFrame({ scene, label, placeholderText }: { scene: Scene; label: string; placeholderText?: { eyebrow: string; foot: string } }) {
  const [playing, setPlaying] = useState(false);
  const youtube = scene.media?.provider === 'youtube' ? scene.media : null;
  const id = youtube && youtubeId(youtube.url);

  if (!youtube || !id) {
    return <div className="media-empty" role="img" aria-label={`Видео «${label}» пока не добавлено`}>
      <span className="media-cross media-cross-a" /><span className="media-cross media-cross-b" />
      <span className="media-empty-label">{placeholderText?.eyebrow ?? 'PLACEHOLDER / ОРИГИНАЛ ГОТОВИТСЯ'}</span>
      <span className="media-empty-title">{label}</span>
      <span className="media-empty-foot">{placeholderText?.foot ?? 'МЕДИА ОЖИДАЕТ ПОДТВЕРЖДЕНИЯ'}</span>
    </div>;
  }

  return <div className="media-live">
    {playing ? <>
      <iframe title={label} src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=0`} allow="encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
      <button className="media-stop" onClick={() => setPlaying(false)}>Закрыть видео</button>
    </> : <button className="media-play" onClick={() => setPlaying(true)} aria-label={`Открыть видео: ${label}`}>
      {youtube.poster ? <img src={youtube.poster} alt="" /> : <span>▶</span>}
      <strong>СМОТРЕТЬ</strong>
    </button>}
    <a className="media-original" href={youtube.url} target="_blank" rel="noopener noreferrer">Открыть оригинал ↗</a>
  </div>;
}
