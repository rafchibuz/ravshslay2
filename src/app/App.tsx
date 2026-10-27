import { useEffect, useState, type CSSProperties } from 'react';
import site from '../content/site.config.json';
import { January } from '../chapters/january/January';
import { February } from '../chapters/february/February';
import { goToPoint, nextPoint, pointFromHash, points, type Point } from '../lib/deepLinks';
import './app.css';

export function App() {
  const [active, setActive] = useState<Point>('hero');
  const [progress, setProgress] = useState(0);
  const [streamMode, setStreamMode] = useState(false);

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

  useEffect(() => {
    if (!streamMode) return;
    const keyHandler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('input, textarea, select, iframe, [contenteditable="true"]') || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault(); goToPoint(nextPoint(active, event.key === 'ArrowRight' ? 1 : -1));
      } else if (event.key === 'PageDown') { event.preventDefault(); goToPoint(active === 'hero' ? 'january' : 'february'); }
      else if (event.key === 'PageUp') { event.preventDefault(); goToPoint(active === 'february' || active === '2026-02-01' ? 'january' : 'hero'); }
      else if (event.key === 'Escape') setStreamMode(false);
    };
    addEventListener('keydown', keyHandler);
    return () => removeEventListener('keydown', keyHandler);
  }, [streamMode, active]);

  const activeMonth = active === 'hero' ? 'hero' : active === 'february' || active === '2026-02-01' ? 'february' : 'january';

  return <div className={`app ${streamMode ? 'stream-mode' : ''}`}>
    <a href="#january" className="skip-link">Перейти к январю</a>
    <header className="global-nav">
      <a className="brand" href="#hero" aria-label="RavshanN — на главную"><span className="brand-symbol">R<span>✦</span></span><span>RAVSHANN <small>/ 2026</small></span></a>
      <nav aria-label="Главная навигация"><a href="#hero" aria-current={activeMonth === 'hero' ? 'page' : undefined}>ГЛАВНАЯ</a><a href="#january" aria-current={activeMonth === 'january' ? 'page' : undefined}>ЯНВАРЬ</a><a href="#february" aria-current={activeMonth === 'february' ? 'page' : undefined}>ФЕВРАЛЬ</a></nav>
      <button className="stream-toggle" type="button" aria-pressed={streamMode} onClick={() => setStreamMode((value) => !value)}><span className="stream-dot" />{streamMode ? 'ВЫЙТИ ИЗ ПОКАЗА' : 'РЕЖИМ ПОКАЗА'}</button>
    </header>

    <aside className="timeline" aria-label="Временная дорожка"><span className="timeline-year">2026</span><div className="timeline-track" style={{ '--mobile-progress': `${progress}%` } as CSSProperties}><div className="timeline-fill" style={{ height: `${progress}%` }} /><a className={`timeline-dot hero-dot ${activeMonth === 'hero' ? 'is-active' : ''}`} href="#hero" aria-label="Пролог" /><a className={`timeline-dot january-dot ${activeMonth === 'january' ? 'is-active' : ''}`} href="#january" aria-label="Январь" /><a className={`timeline-dot february-dot ${activeMonth === 'february' ? 'is-active' : ''}`} href="#february" aria-label="Февраль" /></div><span className="timeline-label">{activeMonth === 'hero' ? 'ПРОЛОГ' : activeMonth === 'january' ? 'ЯНВАРЬ' : 'ФЕВРАЛЬ'}</span><span className="timeline-percent">{String(Math.round(progress)).padStart(2, '0')}%</span></aside>

    <main>
      <section id="hero" className="hero" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-frame" aria-hidden="true"><span className="frame-tl" /><span className="frame-tr" /><span className="frame-bl" /><span className="frame-br" /></div>
        <div className="hero-copy">
          <span className="hero-overline"><span className="small-diamond">✦</span> ИСТОРИЯ ОДНОГО ГОДА <span className="overline-rule" /></span>
          <h1 id="hero-title">{site.heroTitle}<span className="hero-title-shadow" aria-hidden="true">RAVSHANN</span></h1>
          <div className="hero-subrow"><span className="hero-index">01—26</span><strong>{site.heroSubtitle}</strong></div>
          <p className="hero-description">Первый кадр большой истории. Пройди январь и февраль вместе с RavshanN — от новогоднего старта до новых встреч.</p>
          <a className="primary-cta" href="#january"><span>ПРОЙТИ ГОД</span><span className="cta-arrow">↗</span></a>
          <span className="hero-status">ПРОТОТИП / ГЛАВНАЯ + ЯНВАРЬ + ФЕВРАЛЬ</span>
        </div>
        <div className="portrait-wrap"><div className="portrait-halo" /><img className="hero-portrait" src="/assets/real/ravshann-king.png" alt="RavshanN в короне, очках и королевской мантии" fetchPriority="high" /></div>
        <div className="hero-bottom"><span>ЛИСТАЙ, ЧТОБЫ НАЧАТЬ</span><span className="hero-bottom-line" /><span>01 / 12</span></div>
      </section>
      <div className="transition" aria-hidden="true"><div className="transition-thread" /><span>ГОД НАЧИНАЕТСЯ ЗДЕСЬ</span></div>
      <January />
      <February />
    </main>
    <footer className="footer"><span>RAVSHANN / SLAY KING 2026</span><span>НЕОФИЦИАЛЬНЫЙ ПРОТОТИП · КОНТЕНТ НА ПРОВЕРКЕ</span></footer>
  </div>;
}
