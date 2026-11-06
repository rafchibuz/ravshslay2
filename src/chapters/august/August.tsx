import { LocalVideoPlayer } from '../../components/LocalVideoPlayer';
import { YouTubePlayer } from '../../components/YouTubePlayer';
import { AugustFinale } from '../additions/ExtraScenes';
import { august } from './augustContent';
import styles from './chapter.module.css';

function Video({ id, url, title, image, label }: { id: string; url: string; title: string; image: string; label: string }) {
  return <YouTubePlayer videoId={id} url={url} title={title} posterFallback={image} label={label} />;
}

function SceneIndex({ number, label }: { number: string; label: string }) {
  return <div className={styles.sceneIndex}><span>{number} / {label}</span><span>АВГУСТ 2026</span></div>;
}

export function August() {
  return <section id="august" className={styles.chapter} aria-labelledby="august-title">
    <div className={styles.speedLines} aria-hidden="true" />
    <header className={styles.monthHeader}>
      <div className={styles.monthEyebrow}><span>08 / 12</span><i /><span>ГЛАВА ВОСЬМАЯ</span></div>
      <h2 id="august-title">АВГУСТ <em>’26</em></h2>
      <p>Последний месяц лета — на двух колёсах, картинговой трассе, гоночном треке и в ленте соцсетей.</p>
    </header>

    <article id={august.surron.id} className={`${styles.scene} ${styles.surron}`} aria-labelledby="august-surron-title">
      <SceneIndex number="01" label="НОВЫЙ ЭЛЕКТРОБАЙК" />
      <div className={styles.purchaseGrid}>
        <div className={styles.purchaseCopy}>
          <span className={styles.eyebrow}>ПОСЛЕ ПЕРВОГО ЗАЕЗДА СО СТАЕЙ</span>
          <h3 id="august-surron-title">ХОТЕЛ<br />ПОПРОБОВАТЬ.<br /><em>КУПИЛ SUR-RON.</em></h3>
          <p>Идея из июльских шашлыков быстро превратилась в покупку. Первый короткий клип — прямо здесь, полный выпуск — по ссылке.</p>
          <a className={styles.textLink} href={august.surron.purchase.url} target="_blank" rel="noopener noreferrer">ПОЛНОЕ ВИДЕО О ПОКУПКЕ <span>↗</span></a>
          <div className={styles.wheelMark} aria-hidden="true">E / 08</div>
        </div>
        <div className={styles.purchaseMedia}>
          <div className={styles.mediaOverline}><span>ПОКУПКА / КОРОТКИЙ ФРАГМЕНТ</span><span>▶ 01</span></div>
          <LocalVideoPlayer src={august.surron.clip} title="Покупка Sur-Ron — короткий клип" label="СМОТРЕТЬ КЛИП" />
        </div>
      </div>
      <div className={styles.stuntGrid}>
        <div className={styles.stuntArt}>
          <span className={styles.stuntArc} aria-hidden="true" />
          <img src={august.surron.image} alt="Равшан делает вилли на розовом электромотоцикле" loading="lazy" decoding="async" />
          <span className={styles.stuntBadge}>ПЕРВЫЙ СТАНТ / 08.26</span>
        </div>
        <div className={styles.stuntContent}>
          <span className={styles.eyebrow}>ВТОРАЯ ПЕРЕДАЧА ИСТОРИИ</span>
          <h4>А ТЕПЕРЬ — <em>НА ЗАДНЕЕ.</em></h4>
          <p>После покупки — обучение станту. Колесо вверх, взгляд вперёд и много попыток, которые лучше увидеть самому.</p>
          <Video id={august.surron.stunt.id} url={august.surron.stunt.url} title={august.surron.stunt.title} image={august.surron.image} label="СМОТРЕТЬ СТАНТ" />
        </div>
      </div>
    </article>

    <article id={august.karting.id} className={`${styles.scene} ${styles.karting}`} aria-labelledby="august-karting-title">
      <SceneIndex number="02" label="КАРТИНГ 1 × 1" />
      <div className={styles.kartingHeader}><span className={styles.eyebrow}>ДУЭЛЬ НА ТРАССЕ</span><h3 id="august-karting-title">КАРТИНГ <em>С ЛУНАКОМ</em></h3><p>После гончарного круга — совсем другие повороты. Картинг один на один, где уже решает скорость.</p></div>
      <div className={styles.kartingStage}>
        <div className={styles.kartingArt}><span className={styles.trackLoop} aria-hidden="true" /><img src={august.karting.image} alt="Равшан и Лунак перед картинговым заездом" loading="lazy" decoding="async" /></div>
        <div className={styles.kartingMedia}><span className={styles.mediaOverline}>ЗАЕЗД / ПОЛНОЕ ВИДЕО</span><Video id={august.karting.videoId} url={august.karting.videoUrl} title={august.karting.title} image={august.karting.image} label="СМОТРЕТЬ ЗАЕЗД" /></div>
      </div>
    </article>

    <article id={august.track.id} className={`${styles.scene} ${styles.track}`} aria-labelledby="august-track-title">
      <SceneIndex number="03" label="ТРЕК-ДЕНЬ" />
      <div className={styles.trackHeading}><span className={styles.eyebrow}>СКОРОСТЬ ПОВЫШАЕТСЯ</span><h3 id="august-track-title">С КАРТА — <em>В БОЛИД.</em></h3><p>Гоночные машины, настоящий трек и день, в который можно проверить себя на скорости.</p></div>
      <div className={styles.trackStage}>
        <div className={styles.trackMedia}><Video id={august.track.videoId} url={august.track.videoUrl} title={august.track.title} image={august.track.image} label="СМОТРЕТЬ ТРЕК-ДЕНЬ" /></div>
        <img src={august.track.image} alt="Равшан рядом с гоночным болидом на трек-дне" loading="lazy" decoding="async" />
        <span className={styles.trackNumber} aria-hidden="true">03</span>
      </div>
    </article>

    <article id={august.judo.id} className={`${styles.scene} ${styles.judo}`} aria-labelledby="august-judo-title">
      <SceneIndex number="04" label="ДЗЮДО" />
      <div className={styles.judoHeading}><span className={styles.eyebrow}>ЛЁВА × РОСТИК × РАВШАН</span><h3 id="august-judo-title">НЕ ТОЛЬКО <em>ЗА РУЛЁМ.</em></h3><p>Август меняет покрытие: вместо трассы — татами. Тренировка по дзюдо с Лёвой и Ростиком.</p></div>
      <div className={styles.judoStage}><div className={styles.judoArt}><span className={styles.matCircle} aria-hidden="true"/><img src={august.judo.image} alt="Борцы выполняют бросок на тренировке по дзюдо" loading="lazy" decoding="async" /></div><div className={styles.judoMedia}><Video id={august.judo.videoId} url={august.judo.videoUrl} title={august.judo.title} image={august.judo.image} label="СМОТРЕТЬ ТРЕНИРОВКУ" /></div></div>
    </article>

    <article id={august.collab.id} className={`${styles.scene} ${styles.collab}`} aria-labelledby="august-collab-title">
      <SceneIndex number="05" label="БОЛЬШАЯ КОЛЛАБОРАЦИЯ" />
      <div className={styles.collabHeading}><span className={styles.eyebrow}>ОДИН ВЫПУСК / МНОГО ПЛОЩАДОК</span><h3 id="august-collab-title">ЛИТВИН <span>×</span> ТАМАЕВ<br />РАВШАН <span>×</span> СТИЛ</h3><p>Коллаборация разошлась по TikTok, Instagram и YouTube. В этом же выпуске Тамаев подарил Равшану куртку, которую герои оценили в два миллиона рублей.</p></div>
      <div className={styles.collabStage}><div className={styles.collabMedia}><Video id={august.collab.videoId} url={august.collab.videoUrl} title={august.collab.title} image={august.collab.image} label="СМОТРЕТЬ КОЛЛАБУ" /><div className={styles.collabNote}>2 000 000 ₽ <small>КУРТКА / МОМЕНТ ВЫПУСКА</small></div></div><img src={august.collab.image} alt="Участники коллаборации стоят вместе" loading="lazy" decoding="async" /></div>
    </article>

    <article id={august.meme.id} className={`${styles.scene} ${styles.meme}`} aria-labelledby="august-meme-title">
      <SceneIndex number="06" label="МЕМ МЕСЯЦА" />
      <div className={styles.memeGrid}>
        <div className={styles.memeCopy}><span className={styles.eyebrow}>КОГДА МОНТАЖ УШЁЛ СЛИШКОМ ДАЛЕКО</span><h3 id="august-meme-title">А РОСТ-ТО<br /><em>ГДЕ?</em></h3><p>В соцсетях завирусилась шутка про рост Равшана. Его намеренно уменьшали на фотографиях, и каждый новый монтаж делал его ещё компактнее.</p><span className={styles.memeTag}>РЕДАКТОР ФОТО: −30 СМ ↘</span></div>
        <div className={styles.memeChart} aria-label="Стилизованная диаграмма мема: Равшана на фото нарочно делают ниже других">
          <div className={styles.chartTop}><span>ЛЕНТА / АВГУСТ ’26</span><span>ВИРУСНЫЙ ФОРМАТ</span></div>
          <div className={styles.chartTitle}>САМЫЙ<br /><em>КОМПАКТНЫЙ</em></div>
          <div className={styles.chartBars} aria-hidden="true"><div className={styles.barTall}><span>1,83</span><i /></div><div className={styles.barTallSecond}><span>1,79</span><i /></div><div className={styles.barSmall}><span>1,45</span><i /><img src="/assets/real/ravshann-king.png" alt="" /></div><div className={styles.barMid}><span>1,75</span><i /></div></div>
          <div className={styles.chartBottom}><span>РЕДАКТОР ФОТО ↘</span><strong>АПШЕРОНСК ↗</strong></div>
        </div>
      </div>
    </article>
    <AugustFinale />
  </section>;
}
