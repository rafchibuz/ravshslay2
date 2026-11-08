import styles from './prologue.module.css';

const comments = [
  { author: 'мистер алабастер', quote: 'Скажи 10 вещей, что сделал за год, Равшан.', side: 'left' },
  { author: 'Hawk_STN', quote: 'По онлайну, стримам и подписчикам — какие аргументы?', side: 'right' },
  { author: 'AXYU_GP', quote: 'Почему именно Равшан — слэй кинг?', side: 'left' },
  { author: 'Hawk_STN', quote: 'Ну это не уровень Слэй Кинга, без обид.', side: 'right' },
  { author: '(k)callme.beb', quote: 'Твич не шаурмечная.', side: 'left' },
  { author: 'KAPI-21+21', quote: 'Но всё равно слэй кинг наш босс.', side: 'right' },
];

export function Prologue() {
  return <section id="prologue" className={styles.chapter} aria-labelledby="prologue-title">
    <div className={styles.ambient} aria-hidden="true"><span /><span /><span /></div>
    <div className={styles.inner}>
      <div className={styles.topline}><span>00 / ПЕРЕД НАЧАЛОМ</span><span>2026 — ГОД ПОД ВОПРОСОМ</span></div>
      <div className={styles.heading}><span>ВОПРОС ИЗ КОММЕНТАРИЕВ</span><h2 id="prologue-title">А ЧТО ОН<br /><em>СДЕЛАЛ ЗА ГОД?</em></h2><p>В комментариях спорили, достоин ли Равшан звания «Слэй Кинг». Ответ — в эфире, цифрах и событиях этого года.</p></div>
      <div className={styles.stage}>
        <div className={styles.comments} aria-label="Комментарии зрителей">
          {comments.map((comment, index) => <blockquote key={`${comment.author}-${index}`} className={`${styles.comment} ${comment.side === 'left' ? styles.left : styles.right}`} style={{ animationDelay: `${index * -.9}s` }}><span>@{comment.author}</span><p>{comment.quote}</p></blockquote>)}
        </div>
        <div className={styles.videoShell}><div className={styles.videoTop}><span className={styles.liveDot} /> РЕАКЦИЯ / ВИДЕО <span>▶</span></div><video controls playsInline preload="metadata" src="/assets/prologue/question.mp4" aria-label="Вступительное видео с обсуждением номинации" /><div className={styles.videoFoot}><span>СМОТРИ И РЕШАЙ САМ</span><span>00 / 12</span></div></div>
      </div>
      <a className={styles.next} href="#statistics">СНАЧАЛА — ГОД В ЦИФРАХ <span>↘</span></a>
    </div>
  </section>;
}
