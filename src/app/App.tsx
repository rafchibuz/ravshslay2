import { useEffect, useState, type CSSProperties } from 'react';
import site from '../content/site.config.json';
import { Statistics } from '../chapters/statistics/Statistics';
import { Prologue } from '../chapters/prologue/Prologue';
import { January } from '../chapters/january/January';
import { February } from '../chapters/february/February';
import { March } from '../chapters/march/March';
import { April } from '../chapters/april/April';
import { May } from '../chapters/may/May';
import { June } from '../chapters/june/June';
import { July } from '../chapters/july/July';
import { August } from '../chapters/august/August';
import { September } from '../chapters/september/September';
import { October } from '../chapters/october/October';
import { November } from '../chapters/additions/ExtraScenes';
import { pointFromHash, points, type Point } from '../lib/deepLinks';
import './app.css';

export function App() {
  const [active, setActive] = useState<Point>('hero');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const amount = document.documentElement.scrollHeight - innerHeight;
      setProgress(amount > 0 ? Math.min(100, Math.max(0, scrollY / amount * 100)) : 0);
      const current = [...points].reverse().find((id) => {
        const node = document.getElementById(id);
        return node && node.getBoundingClientRect().top <= innerHeight * .38;
      });
      if (current) setActive(current);
    };
    update();
    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    if (location.hash) requestAnimationFrame(() => document.getElementById(pointFromHash(location.hash))?.scrollIntoView());
    return () => { removeEventListener('scroll', update); removeEventListener('resize', update); };
  }, []);

  const activeMonth = active === 'hero' || active === 'prologue' || active === 'statistics' ? active : active === 'november' || active.startsWith('2026-11-') ? 'november' : active === 'october' || active.startsWith('2026-10-') ? 'october' : active === 'september' || active.startsWith('2026-09-') ? 'september' : active === 'august' || active.startsWith('2026-08-') ? 'august' : active === 'july' || active.startsWith('2026-07-') ? 'july' : active === 'june' || active.startsWith('2026-06-') ? 'june' : active === 'may' || active.startsWith('2026-05-') ? 'may' : active === 'april' || active.startsWith('2026-04-') ? 'april' : active === 'march' || active.startsWith('2026-03-') ? 'march' : active === 'february' || active.startsWith('2026-02-') ? 'february' : 'january';

  return <div className="app">
    <a href="#statistics" className="skip-link">Перейти к статистике</a>
    <header className="global-nav">
      <a className="brand" href="#hero" aria-label="RavshanN — на главную"><span className="brand-symbol">R<span>✦</span></span><span>RAVSHANN <small>/ 2026</small></span></a>
      <nav aria-label="Главная навигация"><a href="#hero" aria-current={activeMonth === 'hero' ? 'page' : undefined}>ГЛАВНАЯ</a><a href="#statistics" aria-current={activeMonth === 'statistics' ? 'page' : undefined}>ЦИФРЫ</a><a href="#january" aria-current={activeMonth === 'january' ? 'page' : undefined}>ЯНВАРЬ</a><a href="#february" aria-current={activeMonth === 'february' ? 'page' : undefined}>ФЕВРАЛЬ</a><a href="#march" aria-current={activeMonth === 'march' ? 'page' : undefined}>МАРТ</a><a href="#april" aria-current={activeMonth === 'april' ? 'page' : undefined}>АПРЕЛЬ</a><a href="#may" aria-current={activeMonth === 'may' ? 'page' : undefined}>МАЙ</a><a href="#june" aria-current={activeMonth === 'june' ? 'page' : undefined}>ИЮНЬ</a><a href="#july" aria-current={activeMonth === 'july' ? 'page' : undefined}>ИЮЛЬ</a><a href="#august" aria-current={activeMonth === 'august' ? 'page' : undefined}>АВГУСТ</a><a href="#september" aria-current={activeMonth === 'september' ? 'page' : undefined}>СЕНТЯБРЬ</a><a href="#october" aria-current={activeMonth === 'october' ? 'page' : undefined}>ОКТЯБРЬ</a><a href="#november" aria-current={activeMonth === 'november' ? 'page' : undefined}>НОЯБРЬ</a></nav>
    </header>

      <aside className="timeline" aria-label="Временная дорожка"><span className="timeline-year">2026</span><div className="timeline-track" style={{ '--mobile-progress': `${progress}%` } as CSSProperties}><div className="timeline-fill" style={{ height: `${progress}%` }} /><a className={`timeline-dot hero-dot ${activeMonth === 'hero' ? 'is-active' : ''}`} href="#hero" aria-label="Пролог" /><a className={`timeline-dot statistics-dot ${activeMonth === 'statistics' ? 'is-active' : ''}`} href="#statistics" aria-label="Статистика 2026" /><a className={`timeline-dot january-dot ${activeMonth === 'january' ? 'is-active' : ''}`} href="#january" aria-label="Январь" /><a className={`timeline-dot february-dot ${activeMonth === 'february' ? 'is-active' : ''}`} href="#february" aria-label="Февраль" /><a className={`timeline-dot march-dot ${activeMonth === 'march' ? 'is-active' : ''}`} href="#march" aria-label="Март" /><a className={`timeline-dot april-dot ${activeMonth === 'april' ? 'is-active' : ''}`} href="#april" aria-label="Апрель" /><a className={`timeline-dot may-dot ${activeMonth === 'may' ? 'is-active' : ''}`} href="#may" aria-label="Май" /><a className={`timeline-dot june-dot ${activeMonth === 'june' ? 'is-active' : ''}`} href="#june" aria-label="Июнь" /><a className={`timeline-dot july-dot ${activeMonth === 'july' ? 'is-active' : ''}`} href="#july" aria-label="Июль" /><a className={`timeline-dot august-dot ${activeMonth === 'august' ? 'is-active' : ''}`} href="#august" aria-label="Август" /><a className={`timeline-dot september-dot ${activeMonth === 'september' ? 'is-active' : ''}`} href="#september" aria-label="Сентябрь" /><a className={`timeline-dot october-dot ${activeMonth === 'october' ? 'is-active' : ''}`} href="#october" aria-label="Октябрь" /><a className={`timeline-dot november-dot ${activeMonth === 'november' ? 'is-active' : ''}`} href="#november" aria-label="Ноябрь" /></div><span className="timeline-label">{activeMonth === 'hero' || activeMonth === 'prologue' ? 'ПРОЛОГ' : activeMonth === 'statistics' ? 'ЦИФРЫ' : activeMonth === 'january' ? 'ЯНВАРЬ' : activeMonth === 'february' ? 'ФЕВРАЛЬ' : activeMonth === 'march' ? 'МАРТ' : activeMonth === 'april' ? 'АПРЕЛЬ' : activeMonth === 'may' ? 'МАЙ' : activeMonth === 'june' ? 'ИЮНЬ' : activeMonth === 'july' ? 'ИЮЛЬ' : activeMonth === 'august' ? 'АВГУСТ' : activeMonth === 'september' ? 'СЕНТЯБРЬ' : activeMonth === 'october' ? 'ОКТЯБРЬ' : 'НОЯБРЬ'}</span><span className="timeline-percent">{String(Math.round(progress)).padStart(2, '0')}%</span></aside>

    <main>
      <section id="hero" className="hero" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-frame" aria-hidden="true"><span className="frame-tl" /><span className="frame-tr" /><span className="frame-bl" /><span className="frame-br" /></div>
        <div className="hero-copy">
          <span className="hero-overline"><span className="small-diamond">✦</span> ИСТОРИЯ ОДНОГО ГОДА <span className="overline-rule" /></span>
          <h1 id="hero-title">{site.heroTitle}<span className="hero-title-shadow" aria-hidden="true">RAVSHANN</span></h1>
          <div className="hero-subrow"><strong>{site.heroSubtitle}</strong></div>
          <p className="hero-description">Первый кадр большой истории. Пройди месяцы вместе с RavshanN — от новогоднего старта и футбола до летних ИРЛ и осенних историй.</p>
          <a className="primary-cta" href="#prologue"><span>ПРОЙТИ ГОД</span><span className="cta-arrow">↗</span></a>
          <span className="hero-status">2026 / ИСТОРИЯ В ЦИФРАХ И СОБЫТИЯХ</span>
        </div>
        <div className="portrait-wrap"><div className="portrait-halo" /><img className="hero-portrait" src="/assets/real/ravshann-king.png" alt="RavshanN в короне, очках и королевской мантии" fetchPriority="high" /></div>
        <div className="hero-bottom"><span>ЛИСТАЙ, ЧТОБЫ НАЧАТЬ</span><span className="hero-bottom-line" /><span>01 / 12</span></div>
      </section>
      <div className="transition" aria-hidden="true"><div className="transition-thread" /><span>ГОД В ЦИФРАХ</span></div>
      <Prologue />
      <Statistics />
      <January />
      <February />
      <March />
      <April />
      <May />
      <June />
      <July />
      <August />
      <September />
      <October />
      <November />
    </main>
    <footer className="footer"><span>RAVSHANN / SLAY KING 2026</span><span>НЕОФИЦИАЛЬНЫЙ ПРОТОТИП · КОНТЕНТ НА ПРОВЕРКЕ</span></footer>
  </div>;
}
