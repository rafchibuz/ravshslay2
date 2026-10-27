import { februaryScenes } from '../../lib/februaryContent';
import { ReelGallery } from './ReelGallery';
import styles from './chapter.module.css';

export function February() {
  const meeting = februaryScenes[0];

  return <section id="february" className={styles.chapter} aria-labelledby="february-title">
    <div className={styles.light} aria-hidden="true" />
    <header className={styles.chapterHeader}>
      <div className={styles.chapterOverline}><span>02 / 12</span><i /><span>ГЛАВА ВТОРАЯ</span></div>
      <h2 id="february-title">ФЕВРАЛЬ <span>’26</span></h2>
      <p>Зима продолжается. Впереди — новые встречи и совместные видео.</p>
    </header>
    <article id={meeting.id} className={styles.meeting} aria-labelledby={`${meeting.id}-title`}>
      <div className={styles.sceneTop}><span>01 / ВСТРЕЧА</span><span>ФЕВРАЛЬ 2026</span></div>
      <div className={styles.meetingIntro}>
        <h3 id={`${meeting.id}-title`}>ХАМЗАТ <em>×</em> RAVSHANN</h3>
        <p>{meeting.description}</p>
      </div>
      <div className={styles.meetingLayout}>
        <div className={styles.meetingArt}>
          <img src="/assets/visuals/chimaev-group.png" alt="Равшан с Хамзатом Чимаевым и участником совместных съёмок" loading="lazy" decoding="async" />
          <span className={styles.artCaption}>RAVSHANN × ХАМЗАТ</span>
        </div>
        <ReelGallery items={meeting.media} />
      </div>
    </article>
  </section>;
}
