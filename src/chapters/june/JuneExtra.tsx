import { YouTubePlayer } from '../../components/YouTubePlayer';
import { juneMatiz, junePotato, juneVaz } from './juneContent';
import styles from './juneExtra.module.css';

export function JuneExtra() {
  return <>
    <article id={juneVaz.id} className={styles.vaz} aria-labelledby="june-vaz-title">
      <div className={styles.index}><span>04 / ПРОЕКТ ЗАВЕРШЁН</span><span>ИЮНЬ 2026</span></div>
      <div className={styles.vazStage}>
        <span className={styles.vazOutline} aria-hidden="true">2114</span>
        <div className={styles.vazCopy}>
          <span className={styles.kicker}>ЛАМБО-ДВЕРИ × ПНЕВМОПОДВЕСКА</span>
          <h3 id="june-vaz-title">ВАЗ 2114<br /><em>НА ПНЕВМЕ.</em></h3>
          <p>Проект доведён до финала: «четырнадцатая» получила двери, которые открываются вверх, и пневмоподвеску. Пора увидеть результат в движении.</p>
        </div>
        <span className={styles.vazRule} aria-hidden="true" />
        <img className={styles.vazArt} src={juneVaz.image} alt="Белый ВАЗ 2114 с поднятыми дверями и заниженной подвеской" loading="lazy" decoding="async" />
        <div className={styles.vazPlayer}>
          <div className={styles.playerLabel}><span>ФИНАЛ ПРОЕКТА</span><span>01 / ВИДЕО</span></div>
          <YouTubePlayer videoId={juneVaz.videoId} title={juneVaz.title} url={juneVaz.videoUrl} posterFallback={juneVaz.image} label="СМОТРЕТЬ ПРОЕКТ" />
        </div>
        <div className={styles.vazDetails}><span>ДВЕРИ ↑</span><i /><span>ПОДВЕСКА ↓</span></div>
      </div>
    </article>

    <article id={juneMatiz.id} className={styles.matiz} aria-labelledby="june-matiz-title">
      <div className={styles.index}><span>05 / АВТОПОДБОР</span><span>ИЮНЬ 2026</span></div>
      <div className={styles.matizHeader}>
        <div>
          <span className={styles.kicker}>ПОИСК МАШИНЫ / ДЛЯ ПОДПИСЧИЦЫ</span>
          <h3 id="june-matiz-title">ТОТ САМЫЙ<br /><em>MATIZ.</em></h3>
        </div>
        <p>На этот раз задача — подобрать Matiz для подписчицы. Небольшая машина, большая история выбора: смотрим, чем закончился поиск.</p>
      </div>
      <div className={styles.matizStage}>
        <span className={styles.matizHalo} aria-hidden="true" />
        <span className={styles.matizRoute} aria-hidden="true" />
        <img className={styles.matizArt} src={juneMatiz.image} alt="Две девушки рядом с подобранным Matiz" loading="lazy" decoding="async" />
        <div className={styles.matizVideo}>
          <div className={styles.playerLabel}><span>АВТОПОДБОР / MATIZ</span><span>СМОТРЕТЬ ↘</span></div>
          <YouTubePlayer videoId={juneMatiz.videoId} title={juneMatiz.title} url={juneMatiz.videoUrl} posterFallback={juneMatiz.image} label="СМОТРЕТЬ ВЫПУСК" />
        </div>
        <span className={styles.matizNote}>ГОРОДСКОЙ МАРШРУТ / 06.26</span>
      </div>
    </article>

    <article id={junePotato.id} className={styles.potato} aria-labelledby="june-potato-title">
      <div className={styles.index}><span>06 / ПОЛЕВЫЕ ИСПЫТАНИЯ</span><span>ИЮНЬ 2026</span></div>
      <div className={styles.potatoHeader}>
        <div>
          <span className={styles.kicker}>ЭКСПЕРИМЕНТ / БОЛЬШОЙ ПУСК</span>
          <h3 id="june-potato-title">КАРТОШКА<br /><em>ПОШЛА!</em></h3>
        </div>
        <p>Картошкомёт готов к испытаниям. Проверяем затею в деле — и смотрим, куда приведёт этот безумный июньский эксперимент.</p>
      </div>
      <div className={styles.potatoStage}>
        <span className={styles.potatoGlow} aria-hidden="true" />
        <span className={styles.potatoTrajectory} aria-hidden="true" />
        <img className={styles.potatoArt} src={junePotato.image} alt="Равшан испытывает картошкомёт; из трубы вылетает картофелина" loading="lazy" decoding="async" />
        <div className={styles.potatoVideo}>
          <div className={styles.playerLabel}><span>ИСПЫТАНИЯ / ЗАПИСЬ</span><span>16:9 ↗</span></div>
          <YouTubePlayer videoId={junePotato.videoId} title={junePotato.title} url={junePotato.videoUrl} posterFallback={junePotato.image} label="СМОТРЕТЬ ТЕСТЫ" />
        </div>
        <span className={styles.potatoFoot}>ПУСК / СМОТРИ ВЫПУСК ↑</span>
      </div>
    </article>
  </>;
}
