import styles from './chapter.module.css';

export function TelegramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.7 3.3 2.6 10.7c-1.1.4-1.1 1-.2 1.3l4.9 1.5 1.9 5.9c.2.6.1.8.7.8.5 0 .7-.2 1-.5l2.7-2.6 5.6 4.1c1 .6 1.7.3 1.9-1l3.2-15c.3-1.5-.6-2.2-1.6-1.9ZM8.5 13.1l10.9-6.7c.5-.3 1-.1.6.3l-9 8.2-.4 3.6-2.1-5.4Z" /></svg>;
}

export function TelegramArchiveLink({ href, ariaLabel, className }: { href: string; ariaLabel: string; className?: string }) {
  return <a className={`${styles.archiveLink} ${className ?? ''}`} href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
    <TelegramIcon />
    Архив записи стрима <span aria-hidden="true">↗</span>
  </a>;
}
