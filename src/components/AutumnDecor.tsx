import './autumnDecor.css';

const leaf = 'M0 0 C-27 -12 -43 -38 -30 -62 C-4 -60 17 -35 0 0 Z';

function Branch({ className }: { className: string }) {
  return <svg className={className} viewBox="0 0 420 650" fill="none" aria-hidden="true">
    <path d="M-22 648 C106 551 76 425 184 330 C263 259 280 157 435 -22 M85 530 C59 466 64 423 81 379 M126 423 C205 429 248 408 281 371 M185 330 C166 251 191 196 221 151 M273 233 C332 235 379 214 409 170" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" opacity=".65" />
    <path d={leaf} transform="translate(79 379) rotate(-21)" fill="currentColor" opacity=".65" />
    <path d={leaf} transform="translate(116 429) rotate(71) scale(.75)" fill="currentColor" opacity=".72" />
    <path d={leaf} transform="translate(216 408) rotate(115) scale(.92)" fill="currentColor" opacity=".73" />
    <path d={leaf} transform="translate(225 151) rotate(21) scale(.8)" fill="currentColor" opacity=".6" />
    <path d={leaf} transform="translate(326 224) rotate(99) scale(.68)" fill="currentColor" opacity=".71" />
    <path d={leaf} transform="translate(395 174) rotate(128) scale(.78)" fill="currentColor" opacity=".73" />
    <path d={leaf} transform="translate(49 571) rotate(-49) scale(.7)" fill="currentColor" opacity=".48" />
    <path d="M39 574c58-19 72-49 79-80 M211 407c34-11 50-22 79-58 M226 151c18-33 31-55 44-76" stroke="currentColor" strokeWidth="1" opacity=".38" />
  </svg>;
}

export function AutumnDecor({ phase }: { phase: 'early' | 'deep' | 'late' }) {
  return <div className={`autumn-decor autumn-decor--${phase}`} aria-hidden="true">
    <Branch className="autumn-branch autumn-branch--one" />
    <Branch className="autumn-branch autumn-branch--two" />
    <Branch className="autumn-branch autumn-branch--three" />
    <Branch className="autumn-branch autumn-branch--four" />
    <Branch className="autumn-branch autumn-branch--five" />
    <Branch className="autumn-branch autumn-branch--six" />
    <div className="autumn-lines" />
    {Array.from({ length: 12 }, (_, index) => <svg key={index} className={`autumn-leaf autumn-leaf--${index + 1}`} viewBox="-45 -70 90 80"><path d={leaf} fill="currentColor" /><path d="M0 0C-3-22-12-40-22-52" stroke="rgba(255,241,199,.58)" strokeWidth="2" fill="none" /></svg>)}
  </div>;
}
