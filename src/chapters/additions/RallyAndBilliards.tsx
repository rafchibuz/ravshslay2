import { useState } from 'react';
import { YouTubePlayer } from '../../components/YouTubePlayer';
import styles from './rallyAndBilliards.module.css';

const rallyEpisodes = [
  'LHgOeXnJ24k', 'edgAyDhC6Fg', 'oZxR8ORn4fg', 'u_AjayHKEZw',
  's8u1xJLJn_c', 'Za6jW1SD4nw', 'm9rtQpzVpQE',
];

export function FebruaryRally() {
  const [part, setPart] = useState(0);
  const id = rallyEpisodes[part];
  const url = `https://www.youtube.com/watch?v=${id}${part === 6 ? '&t=2987s' : ''}`;

  return <article id="2026-02-rally" className={`${styles.scene} ${styles.rally}`} aria-labelledby="rally-title">
    <div className={styles.top}><span>01 / РОЛЬФ МЕДИА РАЛЛИ</span><span>ФЕВРАЛЬ 2026</span></div>
    <div className={styles.layout}>
      <div className={styles.story}>
        <span className={styles.kicker}>RAVSHANN / НА СТАРТЕ</span>
        <h3 id="rally-title">РОЛЬФ<br /><em>МЕДИА РАЛЛИ.</em></h3>
        <p>Равшан снялся в «Рольф Медиа Ралли». Вся история — в семи частях: выбирай выпуск и смотри прямо здесь.</p>
        <div className={styles.switcher} role="group" aria-label="Выбрать часть Рольф Медиа Ралли">
          {rallyEpisodes.map((episode, index) => <button key={episode} type="button" aria-pressed={part === index} className={part === index ? styles.selected : ''} onClick={() => setPart(index)}>{String(index + 1).padStart(2, '0')}</button>)}
        </div>
        <div className={styles.player}><YouTubePlayer key={id} videoId={id} title={`Рольф Медиа Ралли — часть ${part + 1}`} url={url} posterFallback="/assets/february/rolf-rally.png" label={`СМОТРЕТЬ ЧАСТЬ ${part + 1}`} startSeconds={part === 6 ? 2987 : undefined} /></div>
      </div>
      <div className={styles.art}><img src="/assets/february/rolf-rally.png" alt="Равшан в гоночном костюме" loading="lazy" decoding="async" /></div>
    </div>
  </article>;
}

export function MarchBilliards() {
  return <article id="2026-03-billiards" className={`${styles.scene} ${styles.billiards}`} aria-labelledby="billiards-title">
    <div className={styles.top}><span>04 / БИЛЬЯРД</span><span>МАРТ 2026</span></div>
    <div className={styles.layout}>
      <div className={styles.art}><img src="/assets/march/billiards.png" alt="Равшан, Иосиф Абрамов и Армянский взрыв за бильярдным столом" loading="lazy" decoding="async" /></div>
      <div className={styles.story}>
        <span className={styles.kicker}>ПОСЛЕ ALF REALITY / НОВАЯ ПАРТИЯ</span>
        <h3 id="billiards-title">БИЛЬЯРД.<br /><em>ТРИ ИГРОКА.</em></h3>
        <p>Равшан сыграл в бильярд с Иосифом Абрамовым и Армянским взрывом. Смотри, как прошла партия, в полном видео.</p>
        <div className={styles.player}><YouTubePlayer videoId="jQcbQWFOIBU" title="Бильярд с Иосифом Абрамовым и Армянским взрывом" url="https://www.youtube.com/watch?v=jQcbQWFOIBU" posterFallback="/assets/march/billiards.png" label="СМОТРЕТЬ ВИДЕО" /></div>
      </div>
    </div>
  </article>;
}
