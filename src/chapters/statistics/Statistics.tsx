import styles from './statistics.module.css';
import { SocialStatistics } from './SocialStatistics';

const categories = [
  { name: 'IRL', hours: '≈335,6', share: '42,6%', className: styles.irl },
  { name: 'Just Chatting', hours: '≈235,3', share: '29,9%', className: styles.chatting },
  { name: 'Games', hours: '≈217,1', share: '27,5%', className: styles.games },
];

const channels = [
  {
    name: 'RAVSHANN',
    role: 'ОСНОВНОЙ КАНАЛ',
    href: 'https://twitchtracker.com/ravshann/statistics',
    streamsHref: 'https://twitchtracker.com/ravshann/streams',
    hours: '583',
    followers: '≈1,37 млн',
    gained: '≈297 тыс.',
    watched: '8,19 млн',
    average: '14 054',
    peak: '50 399',
    days: '157',
  },
  {
    name: 'RAVSHANBTW',
    role: 'ИГРОВОЙ КАНАЛ',
    href: 'https://twitchtracker.com/ravshanbtw/statistics',
    streamsHref: 'https://twitchtracker.com/ravshanbtw/streams',
    hours: '205',
    followers: '≈302 тыс.',
    gained: '≈41,2 тыс.',
    watched: '665 тыс.',
    average: '3 247',
    peak: '11 434',
    days: '64',
  },
];

export function Statistics() {
  return <section id="statistics" className={styles.chapter} aria-labelledby="statistics-title">
    <div className={styles.inner}>
      <div className={styles.topline}><span>00 / ПРОЛОГ В ЦИФРАХ</span></div>
      <header className={styles.heading}>
        <div>
          <span className={styles.eyebrow}>ДВА КАНАЛА. ОДИН ГОД.</span>
          <h2 id="statistics-title">ГОД <em>В ЭФИРЕ.</em></h2>
          <p>IRL, разговоры и игры — всё, что Равшан успел показать на двух Twitch-каналах за 2026 год.</p>
        </div>
        <div className={styles.totalTime}><strong>788</strong><span>ЧАСОВ ЭФИРА<br />НА ДВУХ КАНАЛАХ</span></div>
      </header>

      <div className={styles.distribution} aria-label="Распределение времени эфира по трём категориям">
        <div className={styles.distributionHeader}><h3>ИЗ ЧЕГО СОСТОЯЛ ЭФИР</h3><span>ДОЛЯ ОТ 788 ЧАСОВ</span></div>
        <div className={styles.bar} role="img" aria-label="IRL — около 335,6 часа, 42,6 процента; Just Chatting — около 235,3 часа, 29,9 процента; Games — около 217,1 часа, 27,5 процента">
          <span className={styles.irl} style={{ flex: 335.6 }} /><span className={styles.chatting} style={{ flex: 235.3 }} /><span className={styles.games} style={{ flex: 217.1 }} />
        </div>
        <div className={styles.categoryGrid}>{categories.map((category) => <div className={styles.category} key={category.name}>
          <span className={`${styles.categoryMarker} ${category.className}`} /><div><strong>{category.name}</strong><span>{category.hours} ч</span></div><b>{category.share}</b>
        </div>)}</div>
      </div>

      <div className={styles.channelGrid}>{channels.map((channel, index) => <article className={styles.channel} key={channel.name}>
        <div className={styles.channelTop}><span className={styles.channelNumber}>0{index + 1}</span><div><span className={styles.channelRole}>{channel.role}</span><h3>{channel.name}</h3></div><a href={channel.href} target="_blank" rel="noopener noreferrer" aria-label={`Статистика ${channel.name} на TwitchTracker`}>↗</a></div>
        <div className={styles.channelLead}><div><span>ПОДПИСЧИКОВ</span><strong>{channel.followers}</strong></div><div><span>ПРИРОСТ В 2026</span><strong>{channel.gained}</strong></div></div>
        <dl className={styles.channelMetrics}>
          <div><dt>ЧАСЫ ПРОСМОТРА</dt><dd>{channel.watched}</dd></div>
          <div><dt>СРЕДНИЙ ОНЛАЙН</dt><dd>{channel.average}</dd></div>
          <div><dt>ПИК ОНЛАЙНА</dt><dd>{channel.peak}</dd></div>
          <div><dt>ДНЕЙ В ЭФИРЕ</dt><dd>{channel.days}</dd></div>
        </dl>
        <div className={styles.channelFoot}><span>{channel.hours} ЧАСА ЭФИРА</span><a href={channel.streamsHref} target="_blank" rel="noopener noreferrer">ИСТОРИЯ СТРИМОВ ↗</a></div>
      </article>)}</div>

      <div className={styles.summary}><div><span>ВМЕСТЕ ЗА 2026</span><strong>≈8,86 млн <small>часов просмотра</small></strong></div><div><span>ПРИРОСТ ДВУХ КАНАЛОВ</span><strong>≈338 тыс. <small>подписок за 2026</small></strong></div><div><span>ОБЩАЯ АУДИТОРИЯ</span><strong>≈1,67 млн <small>подписок на двух каналах</small></strong></div></div>
      <SocialStatistics />
      <a className={styles.next} href="#january">НАЧАТЬ ИСТОРИЮ ГОДА <span>↘</span></a>
    </div>
  </section>;
}
