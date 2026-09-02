import { FONT_IMPORT } from "./theme";

/* ---------- Global fonts & keyframe animations shared across sections ---------- */
export default function GlobalStyles() {
  return (
    <style>{`
      ${FONT_IMPORT}
      .diya-flame { animation: flicker 1.6s ease-in-out infinite; transform-origin: bottom center; }
      @keyframes flicker { 0%,100% { transform: scaleY(1); opacity: 1; } 50% { transform: scaleY(1.1); opacity: 0.8; } }
      .kolka-shimmer { animation: shimmer 3s ease-in-out infinite; }
      @keyframes shimmer { 0%,100% { opacity: 0.75; } 50% { opacity: 1; } }
      .kalka-pulse { animation: kalkapulse 4s ease-in-out infinite; }
      @keyframes kalkapulse { 0%,100% { opacity: 0.65; transform: scale(1) rotate(0deg); } 50% { opacity: 1; transform: scale(1.06) rotate(3deg); } }
      @keyframes envelopeBounce { 0% { transform: scale(1) translateY(0);} 25% { transform: scale(1.1) translateY(-8px);} 50% { transform: scale(0.95) translateY(4px);} 75% { transform: scale(1.04) translateY(-3px);} 100% { transform: scale(1) translateY(0);} }
      @keyframes lightBurst { 0% { transform: scale(0); opacity: 0.9; } 60% { opacity: 0.4; } 100% { transform: scale(3.4); opacity: 0; } }
      @keyframes twinkle { 0%,100% { opacity: 0; transform: scale(0.5);} 50% { opacity: 1; transform: scale(1.3);} }
      @keyframes confettiPop { 0% { transform: translate(0,0) scale(0); opacity: 1; } 100% { transform: translate(var(--tx), var(--ty)) scale(1); opacity: 0; } }
      .alpona-fade { animation: fadeInSlow 1.6s ease forwards; }
      @keyframes fadeInSlow { from { opacity: 0; } }
      @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
    `}</style>
  );
}
