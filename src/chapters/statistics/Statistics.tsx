import styles from './statistics.module.css';

const categories = [
  { name: 'IRL', hours: '317,2', share: '41,3%', className: styles.irl },
  { name: 'Just Chatting', hours: '235', share: '30,6%', className: styles.chatting },
  { name: 'Games', hours: '216,4', share: '28,2%', className: styles.games },
];

const channels = [
  {
    name: 'RAVSHANN',
    role: 'ОСНОВНОЙ КАНАЛ',
    href: 'https://twitchtracker.com/ravshann/statistics',
    streamsHref: 'https://twitchtracker.com/ravshann/streams',
    hours: '563,6',
    followers: '≈1,36 млн',
    gained: '≈285 тыс.',
    watched: '7,91 млн',
    average: '14 036',
    peak: '50 399',
    days: '152',
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
      <div className={styles.topline}><span>00 / ПРОЛОГ В ЦИФРАХ</span><span>01.01 — 04.11.2026</span></div>
      <header className={styles.heading}>
        <div>
          <span className={styles.eyebrow}>ДВА КАНАЛА. ОДИН ГОД.</span>
          <h2 id="statistics-title">ГОД <em>В ЭФИРЕ.</em></h2>
          <p>IRL, разговоры и игры — всё, что Равшан успел показать на двух Twitch-каналах к началу ноября.</p>
        </div>
        <div className={styles.totalTime}><strong>768,6</strong><span>ЧАСА ЭФИРА<br />НА ДВУХ КАНАЛАХ</span></div>
      </header>

      <div className={styles.distribution} aria-label="Распределение времени эфира по трём категориям">
        <div className={styles.distributionHeader}><h3>ИЗ ЧЕГО СОСТОЯЛ ЭФИР</h3><span>ДОЛЯ ОТ 768,6 ЧАСА</span></div>
        <div className={styles.bar} role="img" aria-label="IRL — 317,2 часа, 41,3 процента; Just Chatting — 235 часов, 30,6 процента; Games — 216,4 часа, 28,2 процента">
          <span className={styles.irl} style={{ flex: 317.2 }} /><span className={styles.chatting} style={{ flex: 235 }} /><span className={styles.games} style={{ flex: 216.4 }} />
        </div>
        <div className={styles.categoryGrid}>{categories.map((category) => <div className={styles.category} key={category.name}>
          <span className={`${styles.categoryMarker} ${category.className}`} /><div><strong>{category.name}</strong><span>{category.hours} ч</span></div><b>{category.share}</b>
        </div>)}</div>
        <p className={styles.method}>Доли рассчитаны по часам трансляций обоих каналов. Это время эфира, а не часы просмотра зрителями.</p>
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

      <div className={styles.summary}><div><span>ВМЕСТЕ ЗА 2026</span><strong>≈8,58 млн <small>часов просмотра</small></strong></div><div><span>ПРИРОСТ ДВУХ КАНАЛОВ</span><strong>≈326 тыс. <small>подписок за 2026</small></strong></div><div><span>ОБЩАЯ АУДИТОРИЯ</span><strong>≈1,66 млн <small>подписок на двух каналах</small></strong></div><a href="#january">НАЧАТЬ ИСТОРИЮ ГОДА <span>↘</span></a></div>
      <p className={styles.note}>Срез TwitchTracker на 04.11.2026. Показатели аудитории округлены сервисом; суммарные значения приблизительны. Часы и категории эфира сведены по данным, предоставленным для этой презентации.</p>
    </div>
  </section>;
}
