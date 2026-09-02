import { C } from "./theme";

/* ---------- Kalka (paisley) floral accent ---------- */
export default function Kalka({ className = "", flip = false }) {
  return (
    <svg viewBox="0 0 60 90" className={`${className} kalka-pulse`} style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M30 5 C10 15 8 40 25 55 C35 63 35 75 22 82 C40 82 52 65 46 48 C42 36 28 32 30 20 C31 14 30 9 30 5 Z" fill={C.gold} opacity="0.75" />
      <path d="M30 5 C10 15 8 40 25 55 C35 63 35 75 22 82" stroke={C.ivory} strokeWidth="0.6" opacity="0.5" fill="none" />
    </svg>
  );
}
