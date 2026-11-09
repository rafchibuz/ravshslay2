import { useRef, useState } from 'react';
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.ended) video.currentTime = 0;
    void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  return <section id="prologue" className={styles.chapter} aria-labelledby="prologue-title">
    <div className={styles.ambient} aria-hidden="true"><span /><span /><span /></div>
    <div className={styles.inner}>
      <div className={styles.topline}><span>00 / ПЕРЕД НАЧАЛОМ</span><span>2026 — ГОД ПОД ВОПРОСОМ</span></div>
      <div className={styles.heading}><span>ВОПРОС ИЗ КОММЕНТАРИЕВ</span><h2 id="prologue-title">А ЧТО ОН<br /><em>СДЕЛАЛ ЗА ГОД?</em></h2><p>В комментариях спорили, достоин ли Равшан звания «Слэй Кинг». Ответ — в эфире, цифрах и событиях этого года.</p></div>
      <div className={styles.stage}>
        <div className={styles.commentColumn} aria-label="Комментарии зрителей слева">
          {comments.filter((comment) => comment.side === 'left').map((comment, index) => <blockquote key={`${comment.author}-${index}`} className={styles.comment} style={{ animationDelay: `${index * -.9}s` }}><span>@{comment.author}</span><p>{comment.quote}</p></blockquote>)}
        </div>
        <div className={styles.videoShell}>
          <video ref={videoRef} controls={playing} playsInline preload="metadata" src="/assets/prologue/question.mp4" aria-label="Вступительное видео с обсуждением номинации" onEnded={() => setPlaying(false)} />
          {!playing && <button className={styles.play} type="button" onClick={playVideo} aria-label="Смотреть вступительное видео"><span aria-hidden="true">▶</span><strong>СМОТРЕТЬ ВИДЕО</strong></button>}
        </div>
        <div className={styles.commentColumn} aria-label="Комментарии зрителей справа">
          {comments.filter((comment) => comment.side === 'right').map((comment, index) => <blockquote key={`${comment.author}-${index}`} className={styles.comment} style={{ animationDelay: `${index * -.9 - .4}s` }}><span>@{comment.author}</span><p>{comment.quote}</p></blockquote>)}
        </div>
      </div>
      <a className={styles.next} href="#statistics">СНАЧАЛА — ГОД В ЦИФРАХ <span>↘</span></a>
    </div>
  </section>;
}
