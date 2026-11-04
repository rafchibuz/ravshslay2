import { useState } from 'react';
import { YouTubePlayer } from '../../components/YouTubePlayer';
import { october } from './octoberContent';
import styles from './chapter.module.css';

function SceneIndex({ number, title }: { number: string; title: string }) {
  return <div className={styles.sceneIndex}><span>{number} / {title}</span><span>ОКТЯБРЬ 2026</span></div>;
}

function OdysseyPlayer() {
  const [episodeIndex, setEpisodeIndex] = useState(0);
  const episode = october.odyssey.episodes[episodeIndex];

  return <div className={styles.odysseyPlayer}>
    <div className={styles.episodeTabs} role="group" aria-label="Выбрать часть Одиссеи">
      {october.odyssey.episodes.map((part, index) => <button key={part.id} type="button" className={index === episodeIndex ? styles.episodeActive : ''} aria-pressed={index === episodeIndex} onClick={() => setEpisodeIndex(index)}>ЧАСТЬ {String(index + 1).padStart(2, '0')}</button>)}
    </div>
    <YouTubePlayer key={episode.id} videoId={episode.id} title={`Выживание STAYA: Одиссея — часть ${episodeIndex + 1}`} url={episode.url} posterFallback={october.odyssey.image} label={`СМОТРЕТЬ ЧАСТЬ ${episodeIndex + 1}`} />
  </div>;
}

export function October() {
  return <section id="october" className={styles.chapter} aria-labelledby="october-title">
    <header className={styles.monthHeader}>
      <div className={styles.monthEyebrow}><span>10 / 12</span><i /><span>ГЛАВА ДЕСЯТАЯ</span></div>
      <h2 id="october-title">ОКТЯБРЬ <em>’26</em></h2>
      <p>Осень набирает темп: ринг, неожиданный рабочий день, большое приключение и ещё один вечер за покерным столом.</p>
      <span className={styles.monthGhost} aria-hidden="true">10</span>
    </header>

    <article id={october.training.id} className={`${styles.scene} ${styles.training}`} aria-labelledby="october-training-title">
      <SceneIndex number="01" title="ПОДГОТОВКА К БОЮ" />
      <div className={styles.trainingStage}>
        <div className={styles.trainingCopy}><span className={styles.kicker}>ДО ГОНГА</span><h3 id="october-training-title">МУРОБЕНЗО.<br /><em>ПОДГОТОВКА.</em></h3><p>Перед встречей с Амирбруталом — тренировки, работа в паре и настрой на бой. Равшан рядом с Муробензо в выпуске о подготовке.</p><div className={styles.trainingVideo}><YouTubePlayer videoId={october.training.videoId} title={october.training.title} url={october.training.videoUrl} posterFallback={october.training.image} label="СМОТРЕТЬ ПОДГОТОВКУ" /></div></div>
        <div className={styles.trainingArt}><span className={styles.ringOutline} aria-hidden="true" /><img src={october.training.image} alt="Иллюстрация: Муробензо и Равшан в боксёрских перчатках перед тренировкой" loading="lazy" decoding="async" /><span className={styles.cornerLabel}>КРАСНЫЙ УГОЛ / БЕЛЫЙ УГОЛ</span></div>
      </div>
    </article>

    <article id={october.fight.id} className={`${styles.scene} ${styles.fight}`} aria-labelledby="october-fight-title">
      <SceneIndex number="02" title="ДЕНЬ БОЯ" />
      <div className={styles.fightHeading}><span className={styles.kicker}>БОЙ, КОТОРЫЙ ОБСУЖДАЛИ</span><h3 id="october-fight-title">МУРОБЕНЗО <span>VS</span> <em>АМИРБРУТАЛ.</em></h3><p>Подготовка осталась позади. Теперь — сам поединок, эмоции и пик трансляции свыше 50 тысяч зрителей.</p></div>
      <div className={styles.fightStage}><div className={styles.fightArt}><img src={october.fight.image} alt="Иллюстрация: участники поединка и рефери после боя" loading="lazy" decoding="async" /><span className={styles.fightStamp}>50К+ <small>НА ПИКЕ ЭФИРА</small></span></div><div className={styles.fightVideo}><YouTubePlayer videoId={october.fight.videoId} title={october.fight.title} url={october.fight.videoUrl} posterFallback={october.fight.image} label="СМОТРЕТЬ БОЙ" /></div></div>
    </article>

    <article id={october.cashier.id} className={`${styles.scene} ${styles.cashier}`} aria-labelledby="october-cashier-title">
      <SceneIndex number="03" title="ЮДЗУ СУШНЯК В ДЕЛЕ" />
      <div className={styles.cashierHeading}><span className={styles.kicker}>НЕОЖИДАННАЯ СМЕНА</span><h3 id="october-cashier-title">СЕГОДНЯ <em>ЗА КАССОЙ.</em></h3><p>В «Пятёрочке» Равшан встал за кассу и представил свой вкус LIT Energy — «Юдзу Сушняк». Рядом с магазином появились Веста в оклейке вкуса и банка, которая могла ездить сама.</p></div>
      <div className={styles.cashierStage}><div className={styles.cashierVideo}><YouTubePlayer videoId={october.cashier.videoId} title={october.cashier.title} url={october.cashier.videoUrl} posterFallback={october.cashier.cashierImage} label="СМОТРЕТЬ СМЕНУ" /></div><img className={styles.cashierPerson} src={october.cashier.cashierImage} alt="Иллюстрация: Равшан за кассой" loading="lazy" decoding="async" /></div>
    </article>

    <article id={october.odyssey.id} className={`${styles.scene} ${styles.odyssey}`} aria-labelledby="october-odyssey-title">
      <SceneIndex number="04" title="ВЫЖИВАНИЕ STAYA" />
      <div className={styles.odysseyIntro}><div className={styles.odysseyCopy}><span className={styles.kicker}>BETBOOM / ОДИССЕЯ</span><h3 id="october-odyssey-title">ТРИ ДНЯ.<br /><em>ТРИ ИСПЫТАНИЯ.</em></h3><p>Три легенды отправляются в приключение: строят корабль, ищут сокровища на острове, переживают ночь в доме Медеи и добираются до горной вершины. История — в пяти частях.</p></div><div className={styles.odysseyArt}><img src={october.odyssey.image} alt="Иллюстрация: команда STAYA с картой во время Одиссеи" loading="lazy" decoding="async" /></div></div>
      <ol className={styles.odysseyDays}><li><span>ДЕНЬ 01</span><strong>СТРОИМ КОРАБЛЬ</strong></li><li><span>ДЕНЬ 02</span><strong>ОСТРОВ / НОЧЬ У МЕДЕИ</strong></li><li><span>ДЕНЬ 03</span><strong>ГОРНЫЕ ИСПЫТАНИЯ</strong></li></ol>
      <OdysseyPlayer />
    </article>

    <article id={october.poker.id} className={`${styles.scene} ${styles.poker}`} aria-labelledby="october-poker-title">
      <SceneIndex number="05" title="СНОВА ЗА СТОЛОМ" />
      <div className={styles.pokerStage}><div className={styles.pokerArt}><img src={october.poker.image} alt="Иллюстрация: Равшан и участницы за столом BetBoom Медиа Покер" loading="lazy" decoding="async" /></div><div className={styles.pokerCopy}><span className={styles.kicker}>НОВАЯ РАЗДАЧА</span><h3 id="october-poker-title">МЕДИА<br /><em>ПОКЕР.</em></h3><p>В октябре Равшан снова принял участие в турнире BetBoom Медиа Покер. Карты на столе, решения под камерами — выпуск можно посмотреть здесь.</p><div className={styles.pokerVideo}><YouTubePlayer videoId={october.poker.videoId} title={october.poker.title} url={october.poker.videoUrl} posterFallback={october.poker.image} label="СМОТРЕТЬ ТУРНИР" /></div></div></div>
    </article>
  </section>;
}
