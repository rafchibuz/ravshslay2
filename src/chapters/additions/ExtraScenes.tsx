import { YouTubePlayer } from '../../components/YouTubePlayer';
import { AutumnDecor } from '../../components/AutumnDecor';
import styles from './extraScenes.module.css';

function Video({ id, title, image, label }: { id: string; title: string; image: string; label: string }) {
  return <YouTubePlayer videoId={id} title={title} url={`https://www.youtube.com/watch?v=${id}`} posterFallback={image} label={label} />;
}

function Index({ number, month, label }: { number: string; month: string; label: string }) {
  return <div className={styles.index}><span>{number} / {label}</span><span>{month} 2026</span></div>;
}

export function JuneGiveaway() {
  return <article id="2026-06-06" className={`${styles.scene} ${styles.june}`} aria-labelledby="june-priora-title">
    <Index number="07" month="ИЮНЬ" label="РОЗЫГРЫШ" />
    <div className={styles.split}>
      <div className={styles.copy}><span className={styles.kicker}>ЭКСКЛЮЗИВНАЯ PRIORA</span><h3 id="june-priora-title">ТЕРРА 507.<br /><em>КРЕПКИЙ ОРЕШЕК.</em></h3><p>Июнь завершился розыгрышем эксклюзивной Lada Priora «Терра 507». Отдельная история для Стаи — с характером уже в названии.</p><span className={styles.stat}>507 <small>ТЕРРА / ИЮНЬ</small></span></div>
      <img className={styles.cutout} src="/assets/additions/priora-terra.png" alt="Бордовая Lada Priora Терра 507" loading="lazy" decoding="async" />
    </div>
  </article>;
}

export function AugustFinale() {
  return <>
    <article id="2026-08-07" className={`${styles.scene} ${styles.augustCar}`} aria-labelledby="august-w140-title">
      <Index number="07" month="АВГУСТ" label="РОЗЫГРЫШ ОТ СТАИ" />
      <div className={styles.split}><div className={styles.copy}><span className={styles.kicker}>АВГУСТОВСКИЙ ФИНАЛ</span><h3 id="august-w140-title">КАБАН.<br /><em>W140.</em></h3><p>Стая разыграла легендарный Mercedes W140 — тот самый «Кабан». Большой финальный акцент автомобильного августа.</p></div><img className={styles.cutout} src="/assets/additions/w140.png" alt="Чёрный Mercedes W140, автомобиль розыгрыша Стаи" loading="lazy" decoding="async" /></div>
    </article>
    <article id="2026-08-08" className={`${styles.scene} ${styles.robot}`} aria-labelledby="august-robot-title">
      <Index number="08" month="АВГУСТ" label="РОБОТ ВОЛОДЯ" />
      <div className={styles.split}><img className={styles.cutout} src="/assets/additions/robot-volodya.png" alt="Равшан в шуточной схватке с роботом Володей" loading="lazy" decoding="async" /><div className={styles.copy}><span className={styles.kicker}>СНАЧАЛА СХВАТКА. ПОТОМ ПРИМИРЕНИЕ.</span><h3 id="august-robot-title">РОБОТ<br /><em>ВОЛОДЯ.</em></h3><p>Шуточная драка с роботом превратилась в громкий рилс: больше 1,2 млн лайков в Instagram. Затем пришла досудебная претензия. История получила продолжение на детекторе лжи у Бустера, где Равшан и Володя помирились.</p><Video id="GXnHAz8QR9c" title="Равшан, робот Володя и детектор лжи у Бустера" image="/assets/additions/robot-volodya.png" label="СМОТРЕТЬ ПРИМИРЕНИЕ" /></div></div>
    </article>
  </>;
}

export function SeptemberQuiz() {
  return <article id="2026-09-01" className={`${styles.scene} ${styles.quiz}`} aria-labelledby="september-quiz-title">
    <Index number="02" month="СЕНТЯБРЬ" label="СВОЯ ИГРА" />
    <div className={styles.centered}><span className={styles.kicker}>ШКОЛЬНЫЙ РАУНД / БУСТЕР × LEVA2K × STEEL × ROSTISLAV_999</span><h3 id="september-quiz-title">СВОЯ ИГРА.<br /><em>ШКОЛЬНАЯ ВЕРСИЯ.</em></h3><p>Равшан собрал стримеров за игровым столом: школьные вопросы, быстрые ответы и знакомые соперники. В выпуске — Бустер, Leva2k, Steel и Ростик.</p><div className={styles.wideVideo}><Video id="kgLupuR6CpQ" title="Своя игра на школьную тематику со стримерами" image="https://i.ytimg.com/vi/kgLupuR6CpQ/hqdefault.jpg" label="СМОТРЕТЬ ВЫПУСК" /></div></div>
  </article>;
}

export function OctoberCasting() {
  return <article id="2026-10-06" className={`${styles.scene} ${styles.casting}`} aria-labelledby="october-casting-title">
    <Index number="03" month="ОКТЯБРЬ" label="КАСТИНГ / РАВШ РЕАЛИТИ" />
    <div className={styles.split}><img className={styles.cutout} src="/assets/additions/ravsh-reality.png" alt="Логотип бойцовского шоу Равш Реалити" loading="lazy" decoding="async" /><div className={styles.copy}><span className={styles.kicker}>КТО ВОЙДЁТ В КЛЕТКУ?</span><h3 id="october-casting-title">РАВШ<br /><em>РЕАЛИТИ.</em></h3><p>Равшан начал отбор участников для собственного бойцовского реалити. Кастинг — первый шаг к шоу, запланированному на середину декабря.</p><Video id="rL_QSsK2rOk" title="Кастинг участников Равш Реалити" image="/assets/additions/ravsh-reality.png" label="СМОТРЕТЬ КАСТИНГ" /></div></div>
  </article>;
}

export function OctoberParadeevich() {
  return <article id="2026-10-07" className={`${styles.scene} ${styles.parade}`} aria-labelledby="october-parade-title">
    <Index number="06" month="ОКТЯБРЬ" label="В ГОСТЯХ У ПАРАДЕЕВИЧА" />
    <div className={styles.centered}><span className={styles.kicker}>ЕЩЁ ОДНА КОЛЛАБОРАЦИЯ МЕСЯЦА</span><h3 id="october-parade-title">У ПАРАДЕЕВИЧА.</h3><p>Равшан появился в ролике Парадеевича. Открывай выпуск прямо здесь.</p><div className={styles.wideVideo}><Video id="V54CKqWQlpA" title="Равшан в ролике Парадеевича" image="https://i.ytimg.com/vi/V54CKqWQlpA/hqdefault.jpg" label="СМОТРЕТЬ РОЛИК" /></div></div>
  </article>;
}

export function OctoberWebsite() {
  return <article id="2026-10-08" className={`${styles.scene} ${styles.website}`} aria-labelledby="october-website-title">
    <Index number="08" month="ОКТЯБРЬ" label="САЙТ СООБЩЕСТВА" />
    <div className={styles.split}><div className={styles.copy}><span className={styles.kicker}>НОВАЯ ТОЧКА СБОРА</span><h3 id="october-website-title">RAVSHAN<br /><em>.TV</em></h3><p>В конце октября открылся сайт, где можно предложить идею, посмотреть рейтинг зрителей и заглянуть в «Равшток».</p><a className={styles.siteLink} href="https://ravshan.tv" target="_blank" rel="noopener noreferrer">ОТКРЫТЬ RAVSHAN.TV <span>↗</span></a></div><img className={styles.websiteArt} src="/assets/additions/ravshan-tv.png" alt="Равшан представляет сайт ravshan.tv" loading="lazy" decoding="async" /></div>
  </article>;
}

export function November() {
  return <section id="november" className={styles.november} aria-labelledby="november-title">
    <AutumnDecor phase="late" />
    <header className={styles.monthHeader}><span className={styles.kicker}>11 / 12 — ГЛАВА ОДИННАДЦАТАЯ</span><h2 id="november-title">НОЯБРЬ <em>’26</em></h2><p>Осень становится холоднее, а события — громче: гонки, неожиданная дуэль, большое интервью и новый розыгрыш.</p></header>
    <article id="2026-11-01" className={`${styles.scene} ${styles.race}`} aria-labelledby="november-race-title">
      <Index number="01" month="НОЯБРЬ" label="ЛИТВИН VS ТАМАЕВ" />
      <div className={styles.split}><div className={styles.copy}><span className={styles.kicker}>ГОНОЧНЫЙ ВЫПУСК АСХАБА ТАМАЕВА</span><h3 id="november-race-title">ГОНКА.<br /><em>КОНФЛИКТ.</em></h3><p>Равшан принял участие в выпуске «Литвин vs Тамаев», который набрал около 10 млн просмотров. На съёмках между Равшаном и Тамаевым возник конфликт — позже эта история может продолжиться уже в бою.</p><div className={styles.videoInCopy}><Video id="bY2bcUKAK0c" title="Литвин против Тамаева: гонки с участием Равшана" image="/assets/november/tamaev-standoff.png" label="СМОТРЕТЬ ГОНКУ" /></div></div><img className={styles.cutout} src="/assets/november/tamaev-standoff.png" alt="Равшан и Асхаб Тамаев стоят друг напротив друга" loading="lazy" decoding="async" /></div>
    </article>
    <article id="2026-11-02" className={`${styles.scene} ${styles.bus}`} aria-labelledby="november-bus-title">
      <Index number="02" month="НОЯБРЬ" label="ГОНКА НА АВТОБУСАХ" />
      <div className={styles.split}><div className={styles.gifStage}><img src="/assets/november/uberi-telefon.gif" alt="Гелоди из мема «Убери телефон» жестикулирует за рулём" loading="lazy" decoding="async" /><span>УБЕРИ ТЕЛИФОН ↗</span></div><div className={styles.copy}><span className={styles.kicker}>ГЕЛОДИ × RAVSHANN</span><h3 id="november-bus-title">АВТОБУСЫ.<br /><em>НА СТАРТ!</em></h3><p>Соперник Равшана — Гелоди, автор мема «Убери телифон». Теперь они встретились не в ленте, а на автобусной трассе.</p><Video id="mb0_jeBmEzk" title="Гонка на автобусах против Гелоди" image="/assets/november/uberi-telefon.gif" label="СМОТРЕТЬ ЗАЕЗД" /></div></div>
    </article>
    <article id="2026-11-03" className={`${styles.scene} ${styles.basta}`} aria-labelledby="november-basta-title">
      <Index number="03" month="НОЯБРЬ" label="ВОПРОС РЕБРОМ" />
      <div className={styles.centered}><span className={styles.kicker}>В ГОСТЯХ У БАСТЫ</span><h3 id="november-basta-title">ВОПРОС <em>РЕБРОМ.</em></h3><p>Равшан стал гостем шоу Басты. Полный выпуск — здесь.</p><div className={styles.wideVideo}><Video id="LsHPC1esgWg" title="Равшан в шоу Басты Вопрос ребром" image="https://i.ytimg.com/vi/LsHPC1esgWg/hqdefault.jpg" label="СМОТРЕТЬ ШОУ" /></div></div>
    </article>
    <article id="2026-11-04" className={`${styles.scene} ${styles.vesta}`} aria-labelledby="november-vesta-title">
      <Index number="04" month="НОЯБРЬ" label="РОЗЫГРЫШ LIT ENERGY" />
      <div className={styles.split}><div className={styles.copy}><span className={styles.kicker}>СВОЯ ВЕСТА — ДЛЯ СТАИ</span><h3 id="november-vesta-title">ВЕСТА<br /><em>SPORT ’26.</em></h3><p>Вместе с LIT Energy Равшан запустил розыгрыш своей Lada Vesta Sport 2026 года. Яркая оклейка «Юдзу Сушняк» превратила автомобиль в продолжение собственного вкуса.</p><span className={styles.stat}>LIT <small>ENERGY × RAVSHANN</small></span></div><img className={styles.cutout} src="/assets/november/vesta-giveaway.png" alt="Lada Vesta Sport в зелёно-жёлтой оклейке вкуса LIT Energy" loading="lazy" decoding="async" /></div>
    </article>
  </section>;
}
