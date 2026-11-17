import { februaryScenes } from '../../lib/februaryContent';
import { ReelGallery } from './ReelGallery';
import { DerbyStory } from './DerbyStory';
import { FebruaryRally } from '../additions/RallyAndBilliards';
import styles from './chapter.module.css';

export function February() {
  const meeting = februaryScenes[0];

  return <section id="february" className={styles.chapter} aria-labelledby="february-title">
    <div className={styles.light} aria-hidden="true" />
    <header className={styles.chapterHeader}>
      <div className={styles.chapterOverline}><span>02 / 12</span><i /><span>ГЛАВА ВТОРАЯ</span></div>
      <h2 id="february-title">ФЕВРАЛЬ <span>’26</span></h2>
      <p>Зима продолжается: медиа ралли, встреча с Хамзатом и история дерби.</p>
    </header>
    <FebruaryRally />
    <article id={meeting.id} className={styles.meeting} aria-labelledby={`${meeting.id}-title`}>
      <div className={styles.sceneTop}><span>02 / ВСТРЕЧА</span><span>ФЕВРАЛЬ 2026</span></div>
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
    <DerbyStory />
  </section>;
}
