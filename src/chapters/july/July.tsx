import { YouTubePlayer } from '../../components/YouTubePlayer';
import { LocalVideoPlayer } from '../../components/LocalVideoPlayer';
import { julyBmw, julyClay, julyQuiz, julyRocket, julyStaya, julyTasting, julyWorldCup } from './julyContent';
import styles from './chapter.module.css';

function SummerLeaves({ right = false }: { right?: boolean }) {
  return <svg className={`${styles.leaves} ${right ? styles.leavesRight : ''}`} viewBox="0 0 340 600" fill="none" aria-hidden="true">
    <path d="M-20 594C42 505 104 447 128 340c19-90 83-190 184-300M55 489c-28-75-17-116 9-171m64 26c70-52 117-59 182-45m-142-39c-12-68 8-117 51-160m11 92c54-40 91-54 132-51" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M56 420c-27-36-29-69-16-101 27 33 34 65 16 101Zm55-60c-4-48 11-76 46-98 6 44-11 76-46 98Zm37-54c27-31 57-40 91-33-20 34-51 47-91 33Zm47-104c-5-42 10-74 44-95 6 39-9 71-44 95Zm38-36c28-25 57-32 90-20-23 28-51 37-90 20Z" fill="currentColor" opacity=".37" />
    <g fill="#d9f975"><circle cx="55" cy="420" r="5"/><circle cx="149" cy="306" r="6"/><circle cx="232" cy="166" r="5"/></g>
  </svg>;
}

export function July() {
  return <section id="july" className={styles.chapter} aria-labelledby="july-title">
    <SummerLeaves />
    <SummerLeaves right />
    <header className={styles.monthHeader}>
      <div className={styles.monthIndex}><span>07 / 12</span><i /><span>ГЛАВА СЕДЬМАЯ</span></div>
      <div className={styles.monthLine}><h2 id="july-title">ИЮЛЬ <span>’26</span></h2><p>Лето набрало скорость: дегустация, ракета, футбольная игра, ЧМ и встречи со СТАЕЙ.</p></div>
    </header>

    <article id={julyTasting.id} className={styles.story} aria-labelledby="july-tasting-title">
      <div className={styles.eventIndex}><span>01 / ДЕГУСТАЦИЯ</span><span>ИЮЛЬ 2026</span></div>
      <div className={styles.feature}>
        <div className={styles.copy}>
          <span className={styles.kicker}>LIT ENERGY × RAVSHANN</span>
          <h3 id="july-tasting-title">ВКУС<br /><span>РАВШАНА</span><em>.</em></h3>
          <p>Два раунда дегустации: сначала с блогерами, затем с подписчиками. Смотри обе части по порядку.</p>
          <div className={styles.rounds}><span>01&nbsp; БЛОГЕРЫ</span><i /><span>02&nbsp; ПОДПИСЧИКИ</span></div>
        </div>
        <div className={styles.art}>
          <span className={styles.artGlow} aria-hidden="true" />
          <span className={styles.artRing} aria-hidden="true" />
          <span className={styles.artMark} aria-hidden="true">LIT / 07.26</span>
          <img src={julyTasting.image} alt="Равшан и девушка представляют банку LIT ENERGY со вкусом Равшана" loading="lazy" decoding="async" />
        </div>
      </div>
      <div className={styles.episodesLead}><span>ДВА ВЫПУСКА</span><i /><span>ОДИН ВКУС ↓</span></div>
      <div className={styles.episodes}>
        {julyTasting.videos.map((video, index) => <section className={styles.episode} key={video.id} aria-label={`Часть ${index + 1}: ${index === 0 ? 'с блогерами' : 'с подписчиками'}`}>
          <div className={styles.episodeHeading}><span className={styles.episodeNumber}>0{index + 1}</span><div><span className={styles.episodeKicker}>{index === 0 ? 'ПЕРВАЯ ДЕГУСТАЦИЯ' : 'ВТОРАЯ ДЕГУСТАЦИЯ'}</span><h4>{index === 0 ? 'С БЛОГЕРАМИ' : 'С ПОДПИСЧИКАМИ'}</h4></div></div>
          <YouTubePlayer videoId={video.id} title={video.title} url={video.url} posterFallback={julyTasting.image} label={video.label} />
        </section>)}
      </div>
    </article>
    <article id={julyClay.id} className={styles.clayStory} aria-labelledby="july-clay-title">
      <div className={styles.eventIndex}><span>02 / ЛЕПКА ГЛИНЫ</span><span>ИЮЛЬ 2026</span></div>
      <div className={styles.clayHeading}>
        <span className={styles.clayKicker}>RAVSHANN × ЛУНАК / НОВЫЙ ОПЫТ</span>
        <h3 id="july-clay-title">ГЛИНА <span>С ЛУНАКОМ</span></h3>
        <p>На этот раз вместо скорости — гончарный круг. Равшан и Лунак пробуют лепить из глины и смотрят, что получится.</p>
      </div>
      <div className={styles.clayStage}>
        <div className={styles.clayArt}>
          <span className={styles.clayHalo} aria-hidden="true" />
          <span className={styles.clayWheel} aria-hidden="true" />
          <img src={julyClay.image} alt="Равшан и Лунак за гончарным кругом с глиной" loading="lazy" decoding="async" />
          <span className={styles.clayArtNote}>ФОРМА РОЖДАЕТСЯ В РУКАХ</span>
        </div>
        <div className={styles.clayMedia}>
          <div className={styles.clayMediaTop}><span>ИРЛ / ОДИН ВЫПУСК</span><span>07.26</span></div>
          <YouTubePlayer videoId={julyClay.videoId} title={julyClay.title} url={julyClay.videoUrl} posterFallback={julyClay.image} label="СМОТРЕТЬ ЛЕПКУ" />
          <span className={styles.clayMediaNote}>ГОНЧАРНЫЙ КРУГ ↗</span>
        </div>
      </div>
    </article>
    <article id={julyRocket.id} className={styles.rocketStory} aria-labelledby="july-rocket-title">
      <div className={styles.eventIndex}><span>03 / ЗАПУСК РАКЕТЫ</span><span>ИЮЛЬ 2026</span></div>
      <div className={styles.rocketHeading}>
        <span className={styles.rocketKicker}>LIT ENERGY / ВРЕМЯ ВЗЛЕТАТЬ</span>
        <h3 id="july-rocket-title">ПОЕХАЛИ<span>!</span></h3>
        <p>Ракета LIT ENERGY готова к старту. Смотри запуск в короткой анимации и в видео рядом.</p>
      </div>
      <div className={styles.rocketStage}>
        <div className={styles.rocketArt}>
          <span className={styles.rocketOrbit} aria-hidden="true" />
          <span className={styles.rocketLaunchLine} aria-hidden="true" />
          <img className={styles.rocketAnimated} src={julyRocket.animation} alt="Анимация запуска ракеты LIT ENERGY" loading="lazy" decoding="async" />
          <img className={styles.rocketStill} src={julyRocket.still} alt="Ракета LIT ENERGY перед запуском" loading="lazy" decoding="async" />
          <span className={styles.rocketArtNote}>03 · 02 · 01 · ПУСК</span>
        </div>
        <div className={styles.rocketMedia}>
          <div className={styles.rocketMediaTop}><span>ЗАПУСК / ВИДЕО</span><span>16:9</span></div>
          <LocalVideoPlayer src={julyRocket.videoSrc} title={julyRocket.title} label="СМОТРЕТЬ ЗАПУСК" />
          <div className={styles.rocketMediaFoot}><span>ОРИГИНАЛЬНЫЙ ФРАГМЕНТ</span><span>LIT ENERGY ↗</span></div>
        </div>
      </div>
    </article>
    <article id={julyQuiz.id} className={`${styles.newStory} ${styles.quizStory}`} aria-labelledby="july-quiz-title">
      <div className={styles.eventIndex}><span>04 / ФУТБОЛЬНАЯ СВОЯ ИГРА</span><span>ИЮЛЬ 2026</span></div>
      <div className={styles.quizHeading}><span className={styles.sceneKicker}>БЛОГЕРЫ / ВОПРОСЫ / ФУТБОЛ</span><h3 id="july-quiz-title">СВОЯ <span>ИГРА</span></h3><p>Футбол оказался темой не только на поле. Равшан собрал блогеров на выпуск «Своей игры»: вопросы, азарт и борьба за правильный ответ.</p></div>
      <div className={styles.quizStage}>
        <div className={styles.quizMedia}><YouTubePlayer videoId={julyQuiz.videoId} title={julyQuiz.title} url={julyQuiz.videoUrl} posterFallback={`https://i.ytimg.com/vi/${julyQuiz.videoId}/hqdefault.jpg`} label="СМОТРЕТЬ ВЫПУСК" /></div>
      </div>
    </article>
    <article id={julyBmw.id} className={`${styles.newStory} ${styles.bmwStory}`} aria-labelledby="july-bmw-title">
      <div className={styles.eventIndex}><span>05 / BMW X5 M</span><span>ИЮЛЬ 2026</span></div>
      <div className={styles.bmwHeading}><span className={styles.sceneKicker}>НОВЫЕ КЛЮЧИ / НОВЫЙ МАРШРУТ</span><h3 id="july-bmw-title">X5 <span>M.</span> ЧЕЧНЯ.</h3><p>Покупка BMW X5 M, дорога в Чечню и реакция отца — две части одной истории.</p></div>
      <div className={styles.bmwStage}>
        <img className={styles.bmwImage} src={julyBmw.image} alt="Чёрный BMW X5 M у ворот со львами" loading="lazy" decoding="async" />
        <div className={styles.bmwEpisodes}>{julyBmw.videos.map((video, index) => <div className={styles.bmwEpisode} key={video.id}><div className={styles.videoCaption}><span>0{index + 1}</span><strong>{index === 0 ? 'ПОКУПКА И ПОЕЗДКА' : 'РЕАКЦИЯ ОТЦА'}</strong></div><YouTubePlayer videoId={video.id} title={video.title} url={video.url} posterFallback={julyBmw.image} label={video.label} /></div>)}</div>
      </div>
    </article>
    <article id={julyWorldCup.id} className={`${styles.newStory} ${styles.worldStory}`} aria-labelledby="july-world-title">
      <div className={styles.eventIndex}><span>06 / ЧМ 2026</span><span>ИЮЛЬ 2026</span></div>
      <div className={styles.worldHeading}><span className={styles.sceneKicker}>СМОТРЕЛИ ВМЕСТЕ / ПЕРЕЖИВАЛИ ВМЕСТЕ</span><h3 id="july-world-title">ФУТБОЛ <span>НА СТРИМЕ</span></h3><p>Матчи чемпионата мира смотрели вместе на стримах. На экране — финал Испания × Аргентина, у Равшана — эмоции без фильтра.</p></div>
      <div className={styles.worldStage}><div className={styles.worldFinal}><img src={julyWorldCup.finalImage} alt="Иллюстрация к просмотру финала: Испания и Аргентина" loading="lazy" decoding="async" /><span>ИСПАНИЯ × АРГЕНТИНА</span></div><img className={styles.worldReaction} src={julyWorldCup.reactionImage} alt="Эмоция Равшана во время совместного просмотра футбола" loading="lazy" decoding="async" /><div className={styles.worldStamp}>90:00 <span>ЭМОЦИИ — В ПРЯМОМ ЭФИРЕ</span></div></div>
    </article>
    <article id={julyStaya.id} className={`${styles.newStory} ${styles.stayaStory}`} aria-labelledby="july-staya-title">
      <div className={styles.eventIndex}><span>07 / ВСЯ СТАЯ В СБОРЕ</span><span>ИЮЛЬ 2026</span></div>
      <div className={styles.stayaHeading}><span className={styles.sceneKicker}>ШАШЛЫК / ДРУЗЬЯ / ПЕРВАЯ ПОЕЗДКА</span><h3 id="july-staya-title">ШАШЛЫКИ <span>СО СТАЕЙ</span></h3><p>Собрались всей СТАЕЙ на шашлыки. Там Равшан впервые сел на электромотоцикл, успел упасть — и всё равно загорелся идеей купить свой.</p></div>
      <div className={styles.stayaStage}><div className={styles.stayaArt}><img src={julyStaya.image} alt="Равшан готовит шашлыки для СТАИ" loading="lazy" decoding="async" /><span>СНАЧАЛА — ШАШЛЫКИ</span></div><div className={styles.stayaMedia}><div className={styles.videoCaption}><span>01</span><strong>ПЕРВЫЙ ЗАЕЗД / И ПЕРВОЕ ПАДЕНИЕ</strong></div><LocalVideoPlayer src={julyStaya.clipSrc} title="Первый заезд на электромотоцикле и падение" label="СМОТРЕТЬ ФРАГМЕНТ" /><a className={styles.fullEpisode} href={julyStaya.videoUrl} target="_blank" rel="noopener noreferrer">ПОЛНЫЙ ВЫПУСК НА YOUTUBE <span>↗</span></a></div></div>
    </article>
  </section>;
}
