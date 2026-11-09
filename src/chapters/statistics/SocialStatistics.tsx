import styles from './socialStatistics.module.css';

const networks = [
  { name: 'INSTAGRAM*', handle: '@ravshann030', url: null, posts: '56', plays: '152,6 млн', likes: '6,24 млн', share: '46,2%', className: styles.instagram },
  { name: 'TIKTOK', handle: '@ravshann_stream', url: 'https://www.tiktok.com/@ravshann_stream', posts: '171', plays: '177,6 млн', likes: '8,98 млн', share: '53,8%', className: styles.tiktok },
];

export function SocialStatistics() {
  return <div className={styles.social} aria-labelledby="social-title">
    <div className={styles.rule}><span>СОЦСЕТИ / 2026</span></div>
    <div className={styles.heading}><div><span className={styles.kicker}>ЗА ПРЕДЕЛАМИ ЭФИРА</span><h3 id="social-title">ГОД <em>В ЛЕНТЕ.</em></h3><p>Видео Равшана выходили и за пределами Twitch. Считаем публикации 2026 года отдельно для Instagram и TikTok, затем складываем показатели двух площадок.</p></div><div className={styles.total}><strong>330,2<small>млн</small></strong><span>СУММА ВОСПРОИЗВЕДЕНИЙ<br />ПО ДВУМ ВЫГРУЗКАМ</span></div></div>
    <div className={styles.comparison} aria-label="Instagram — 46,2 процента воспроизведений, TikTok — 53,8 процента"><span className={styles.instagram} style={{ flex: 152.586671 }} /><span className={styles.tiktok} style={{ flex: 177.6292 }} /></div>
    <div className={styles.grid}>{networks.map((network, index) => <article className={`${styles.card} ${network.className}`} key={network.name}>
      <div className={styles.cardTop}><span>0{index + 1}</span>{network.url ? <a href={network.url} target="_blank" rel="noopener noreferrer">{network.handle} ↗</a> : <span>{network.handle}</span>}</div>
      <h4>{network.name}</h4><div className={styles.cardLead}><strong>{network.plays}</strong><span>ВОСПРОИЗВЕДЕНИЙ В 2026</span></div>
      <div className={styles.cardMetrics}><div><strong>{network.posts}</strong><span>ВИДЕО</span></div><div><strong>{network.likes}</strong><span>ОТМЕТОК «НРАВИТСЯ»</span></div><div><strong>{network.share}</strong><span>ДОЛЯ ВОСПРОИЗВЕДЕНИЙ</span></div></div>
    </article>)}</div>
    <div className={styles.grand}><div><span>ВМЕСТЕ В ДВУХ ЛЕНТАХ</span><strong>227 <small>видео</small></strong></div><div><span>СУММА РЕАКЦИЙ «НРАВИТСЯ»</span><strong>15,2 млн</strong></div><div><span>СУММА ВОСПРОИЗВЕДЕНИЙ</span><strong>330,2 млн</strong></div></div>
    <p className={styles.note}>*Признаны экстремистскими организациями и запрещены на территории РФ.</p>
  </div>;
}
