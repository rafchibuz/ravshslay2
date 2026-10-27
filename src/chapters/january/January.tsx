import { useEffect, useRef } from 'react';
import { MediaFrame } from '../../components/MediaFrame';
import { scenes } from '../../lib/contentValidation';
import { BrotherPhone } from './BrotherPhone';
import { SnowBreakout } from './SnowBreakout';
import { TelegramArchiveLink, TelegramIcon } from './TelegramArchiveLink';
import styles from './chapter.module.css';

export function January() {
  const [opening, tradition, game, litvin] = scenes;
  const brotherVideos = tradition.media?.provider === 'local-gallery' ? tradition.media.items : [];
  const chapterRef = useRef<HTMLElement>(null);
  const cinemaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scene = cinemaRef.current;
    const chapter = chapterRef.current;
    if (!scene || !chapter) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = scene.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const frozenDistance = Math.max(0, Math.min(travel, -rect.top));
      const progress = reducedMotion.matches ? 1 : frozenDistance / travel;
      chapter.style.setProperty('--cinema-bg-shift', `${Math.round(frozenDistance)}px`);
      scene.style.setProperty('--face-reveal', `${Math.round(progress * 100)}%`);
      scene.style.setProperty('--wipe-opacity', String(Math.sin(progress * Math.PI)));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reducedMotion.addEventListener('change', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reducedMotion.removeEventListener('change', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <section ref={chapterRef} id="january" className={styles.chapter} aria-labelledby="january-title">
    <div className={styles.winterLight} aria-hidden="true" />
    <SnowBreakout />

    <article ref={cinemaRef} className={`${styles.scene} ${styles.cinema}`} id={opening.id} aria-labelledby={`${opening.id}-title`}>
      <div className={styles.cinemaSticky}>
        <div className={styles.sceneTop}><span>{opening.eyebrow}</span><span>01 — 04</span></div>
        <div className={styles.cinemaLayout}>
          <div className={styles.cinemaFrame}>
            <div className={styles.streamPosterTop}>НОВОГОДНИЙ СТРИМ <span>ЗАПИСЬ ОЖИДАЕТСЯ</span></div>
            <MediaFrame scene={opening} label={opening.title} />
            <div className={styles.streamPosterBottom}>ЗИМА / ЯНВАРЬ 2026 <span>16:9</span></div>
          </div>
          <figure className={styles.faceStage} aria-label="Образ RavshanN меняется при прокрутке: с бородой на лицо без бороды">
            <div className={styles.faceCanvas}>
              <img className={styles.faceBefore} src="/assets/visuals/ravshann-face-beard.webp" alt="" decoding="async" />
              <img className={styles.faceReveal} src="/assets/visuals/ravshann-face-clean.webp" alt="" decoding="async" />
              <span className={styles.faceWipe} aria-hidden="true" />
            </div>
            <figcaption>ОБРАЗ МЕНЯЕТСЯ ПРИ ПРОКРУТКЕ <span>01 → 02</span></figcaption>
          </figure>
          <div className={styles.sceneCopy}>
            <div><span className={styles.tag}>СЛЕДОМ ЗА СНЕГОМ / ВИДЕО</span><h3 id={`${opening.id}-title`}>{opening.title}</h3></div>
            <div className={styles.sceneSummary}><p>{opening.description}</p>{opening.archiveUrl && <TelegramArchiveLink href={opening.archiveUrl} ariaLabel="Архив записи новогоднего стрима в Telegram" className={styles.streamArchive} />}<a href={`#${tradition.id}`} className={styles.sceneNext}>СЛЕДУЮЩАЯ ИСТОРИЯ <span>↘</span></a></div>
          </div>
        </div>
      </div>
    </article>

    <article className={`${styles.scene} ${styles.social}`} id={tradition.id} aria-labelledby={`${tradition.id}-title`}>
      <div className={styles.sceneTop}><span>{tradition.eyebrow}</span><span>02 — 04</span></div>
      <div className={styles.socialLayout}>
        <div className={styles.socialArt}>
          <h3 id={`${tradition.id}-title`} className={styles.visuallyHidden}>{tradition.title}</h3>
          <img src="/assets/visuals/brothers-square.webp" alt="Двое друзей в кожаных куртках" loading="lazy" decoding="async" />
        </div>
        <div className={styles.socialSide}>
          <BrotherPhone items={brotherVideos} />
        </div>
      </div>
    </article>

    <article className={`${styles.scene} ${styles.mafiaScene}`} id={game.id} aria-labelledby={`${game.id}-title`}>
      <div className={styles.sceneTop}><span>{game.eyebrow}</span><span>03 — 04</span></div>
      <div className={styles.mafiaLayout}>
        <div className={styles.mafiaArt}>
          <img src="/assets/visuals/mafia-duology.png" alt="RavshanN в кожаной куртке с цитатой о своей истории" loading="lazy" decoding="async" />
        </div>
        <div className={styles.mafiaContent}>
          <span className={styles.tag}>ДВЕ ИСТОРИИ / ЯНВАРЬ 2026</span>
          <h3 id={`${game.id}-title`} className={styles.mafiaTitle} aria-label={game.title}>MAFIA <span>1 / 2</span></h3>
          <p>{game.description}</p>
          <div className={styles.mafiaArchives}>
            {game.playthroughs?.map((playthrough) => <section className={styles.mafiaArchiveGroup} key={playthrough.title} aria-label={`Прохождение ${playthrough.title}`}>
              <div className={styles.mafiaGroupHead}><strong>{playthrough.title}</strong><span>{String(playthrough.links.length).padStart(2, '0')} ЗАПИСИ</span></div>
              <div className={styles.mafiaLinks}>
                {playthrough.links.map((url, index) => <a key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${playthrough.title}: часть ${index + 1} в Telegram`}>
                  <TelegramIcon /><span>ЧАСТЬ {String(index + 1).padStart(2, '0')}</span><b aria-hidden="true">↗</b>
                </a>)}
              </div>
            </section>)}
          </div>
        </div>
      </div>
      <div className={styles.mafiaVideoSection}>
        <div className={styles.mafiaVideoHead}><span>ВИДЕО / 16:9</span><span>МАФИЯ 1 × МАФИЯ 2</span></div>
        <div className={styles.mafiaVideoFrame}><MediaFrame scene={game} label="Mafia 1 × Mafia 2" placeholderText={{ eyebrow: 'ВИДЕО В ПОДГОТОВКЕ', foot: 'ЗДЕСЬ ПОЯВИТСЯ ЗАПИСЬ 16:9' }} /></div>
        <div className={styles.mafiaVideoFoot}><span>ЗАПИСЬ ДЛЯ САЙТА ГОТОВИТСЯ</span><span>03 / ЯНВАРЬ</span></div>
      </div>
    </article>

    <article className={`${styles.scene} ${styles.litvinScene}`} id={litvin.id} aria-labelledby={`${litvin.id}-title`}>
      <div className={styles.sceneTop}><span>{litvin.eyebrow}</span><span>04 — 04</span></div>
      <div className={styles.litvinLayout}>
        <div className={styles.litvinContent}>
          <span className={styles.tag}>ЛИТВИН × RAVSHANN / ЯНВАРЬ 2026</span>
          <h3 id={`${litvin.id}-title`}>{litvin.title}</h3>
          <p>{litvin.description}</p>
          <div className={styles.litvinVideoHead}><span>ВЫПУСК / YOUTUBE</span><span>16:9</span></div>
          <div className={styles.litvinVideoFrame}><MediaFrame scene={litvin} label={litvin.title} /></div>
        </div>
        <div className={styles.litvinArt}>
          <img src="/assets/visuals/litvin-sedation.png" alt="Равшан и участник выпуска Литвина о седации" loading="lazy" decoding="async" />
        </div>
      </div>
    </article>

    <div className={styles.end}><span>01 / 12 — ЯНВАРЬ</span><a href="#february">СЛЕДУЮЩАЯ ГЛАВА / ФЕВРАЛЬ ↓</a></div>
  </section>;
}
