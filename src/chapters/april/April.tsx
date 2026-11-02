import { useEffect, useRef } from 'react';
import { aprilFundraiser, aprilVesta } from './aprilContent';
import styles from './chapter.module.css';

function VestaReveal() {
  const trackRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = track.getBoundingClientRect();
        const distance = Math.max(1, rect.height - innerHeight);
        const p = Math.max(0, Math.min(1, -rect.top / distance));
        const ease = (value: number) => { const t = Math.max(0, Math.min(1, value)); return t * t * (3 - 2 * t); };
        const firstFade = ease(p / .46);
        const lastFade = ease((p - .54) / .46);
        track.style.setProperty('--covered', String(1 - firstFade));
        track.style.setProperty('--reveal', String(firstFade * (1 - lastFade)));
        track.style.setProperty('--vesta', String(lastFade));
        track.style.setProperty('--expectation', String(1 - ease((p - .55) / .3)));
        track.style.setProperty('--reality', String(ease((p - .56) / .28)));
        track.style.setProperty('--progress-pct', `${p * 100}%`);
        track.dataset.stage = p < .34 ? 'covered' : p < .68 ? 'unveiling' : 'reality';
      });
    };
    update();
    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    return () => { cancelAnimationFrame(frame); removeEventListener('scroll', update); removeEventListener('resize', update); };
  }, []);

  return <article ref={trackRef} id={aprilVesta.id} className={styles.revealTrack} aria-labelledby="vesta-title">
    <div className={styles.revealSticky}>
      <div className={styles.revealGrid}>
        <div className={styles.revealCopy}>
          <div className={styles.eventIndex}><span>01 / СДЕЛКА МЕСЯЦА</span><span>АПРЕЛЬ 2026</span></div>
          <span className={styles.revealEyebrow}>БЮДЖЕТ СУПЕРКАРА / СЮЖЕТНЫЙ ПОВОРОТ</span>
          <div className={styles.revealTitleBox}>
            <h3 id="vesta-title" className={styles.expectation}>ЛАМБА?<br /><span>ПОЧТИ.</span></h3>
            <h3 className={styles.reality}>LADA VESTA<br /><span>SPORT</span></h3>
          </div>
          <p className={styles.revealText}>2,7 миллиона рублей — ожидания были космические. Чехол обещал суперкар, но апрель приготовил сюжетный поворот.</p>
          <div className={styles.priceTag}><span>ЦЕНА ВОПРОСА</span><strong>2,7 <small>МЛН ₽</small></strong></div>
          <a className={styles.youtubeLink} href={aprilVesta.videoUrl} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">▶</span><span><b>СМОТРЕТЬ ИСТОРИЮ</b><small>Открыть ролик на YouTube ↗</small></span></a>
          <span className={styles.scrollCue}><i /> ЛИСТАЙ, ЧТОБЫ СНЯТЬ ЧЕХОЛ</span>
        </div>
        <div className={styles.revealVisual} aria-label="При прокрутке суперкар под чехлом превращается в Lada Vesta Sport">
          <span className={styles.revealHalo} />
          <span className={styles.revealOrbit} />
          <span className={`${styles.carState} ${styles.covered}`}><img src={aprilVesta.images[0]} alt="Машина полностью накрыта чёрным чехлом, видны фары" /></span>
          <span className={`${styles.carState} ${styles.unveiling}`}><img src={aprilVesta.images[1]} alt="Под чёрным чехлом начинает открываться передняя часть Lada Vesta Sport" /></span>
          <span className={`${styles.carState} ${styles.uncovered}`}><img src={aprilVesta.images[2]} alt="Раскрытая Lada Vesta Sport" /></span>
          <span className={styles.visualStamp}>ПРЕМИУМ-КОМПЛЕКТАЦИЯ<br /><b>ПО АПРЕЛЬСКИ</b></span>
        </div>
      </div>
      <div className={styles.revealProgress}><span>ОЖИДАНИЕ</span><i><b /></i><span>РЕАЛЬНОСТЬ</span></div>
    </div>
  </article>;
}

function FundraiserStory() {
  return <article id={aprilFundraiser.id} className={styles.fundraiser} aria-labelledby="fundraiser-title">
    <div className={styles.fundraiserTop}><span>02 / ДОБРОЕ ДЕЛО</span><span>АПРЕЛЬ 2026</span></div>
    <div className={styles.fundraiserHeading}>
      <span className={styles.fundraiserKicker}>БЛАГОТВОРИТЕЛЬНЫЙ ЭФИР / ПОМОЩЬ ПОСТРАДАВШИМ</span>
      <h3 id="fundraiser-title">БОЛЬШЕ,<br /><span>ЧЕМ СТРИМ</span></h3>
    </div>
    <figure className={styles.fundraiserArtwork}>
      <img src={aprilFundraiser.image} alt="Равшан в наушниках на фоне последствий наводнения в Дагестане; на изображении указана сумма сбора — 1 500 000 рублей" loading="lazy" decoding="async" />
      <figcaption><span>ДАГЕСТАН / АПРЕЛЬ 2026</span><span>ЭФИР, КОТОРЫЙ ОБЪЕДИНИЛ</span></figcaption>
    </figure>
    <div className={styles.fundraiserBottom}>
      <p>Сильные дожди в конце марта и начале апреля вызвали паводки: вода затапливала дома и дороги, а в ряде районов нарушила работу инфраструктуры. Равшан провёл благотворительный стрим, чтобы поддержать пострадавших. Вместе со зрителями за один эфир собрали <strong>1,5 млн рублей</strong>.</p>
      <div className={styles.fundraiserTotal}><span>СОБРАНО ВМЕСТЕ</span><strong>{aprilFundraiser.amount}</strong><small>НА ПОМОЩЬ ЖИТЕЛЯМ ДАГЕСТАНА</small></div>
    </div>
    <div className={styles.fundraiserSources} aria-label="Источники информации">
      <span>ИСТОЧНИКИ</span>
      <a href={aprilFundraiser.sources.flood} target="_blank" rel="noopener noreferrer">МЧС Дагестана: паводковая обстановка ↗</a>
      <a href={aprilFundraiser.sources.fundraiser} target="_blank" rel="noopener noreferrer">Сообщение о сборе ↗</a>
    </div>
  </article>;
}

export function April() {
  return <section id="april" className={styles.chapter} aria-labelledby="april-title">
    <div className={styles.cityGlow} aria-hidden="true" />
    <div className={styles.springVine} aria-hidden="true"><svg viewBox="0 0 280 550" fill="none"><path d="M-10 530C60 430 50 356 127 276S198 128 274 18M53 414c-35-39-40-77-32-121m98-17c-44-5-72-28-89-65m122-43c-3-43 14-72 42-97" stroke="currentColor" strokeWidth="2"/><path d="M20 294c-16-13-28-11-42 1m106-23c-20-12-29-28-27-48m96-85c16-15 34-17 49-12m-52 25c-17-13-24-29-19-48" stroke="currentColor" strokeWidth="1.4"/><g fill="currentColor"><circle cx="-9" cy="296" r="5"/><circle cx="57" cy="223" r="5"/><circle cx="194" cy="139" r="5"/><circle cx="240" cy="62" r="5"/></g></svg></div>
    <header className={styles.chapterHeader}>
      <div className={styles.overline}><span>04 / 12</span><i /><span>ГЛАВА ЧЕТВЁРТАЯ</span></div>
      <div className={styles.monthTitle}><h2 id="april-title">АПРЕЛЬ <span>’26</span></h2><span className={styles.seasonNote}>ГОРОД ПРОСЫПАЕТСЯ<br />ИСТОРИИ ГРОМЧЕ</span></div>
      <p>Весна набирает скорость, город выходит из зимы — и на сцену выезжает «суперкар» с апрельским ценником.</p>
    </header>
    <VestaReveal />
    <div className={styles.aprilOutro} aria-hidden="true"><span>ЧЕХОЛ СНЯТ</span><i /><span>АПРЕЛЬ НАЧАЛСЯ</span></div>
    <FundraiserStory />
  </section>;
}
