import { useMemo } from "react";
import { C } from "./theme";

/* ---------- Glitter field (ambient, page-wide) ---------- */
export default function GlitterField({ count = 22 }) {
  const particles = useMemo(() => Array.from({ length: count }).map(() => ({
    top: Math.random() * 100, left: Math.random() * 100, delay: Math.random() * 4, size: 2 + Math.random() * 2,
  })), [count]);
  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {particles.map((p, i) => (
        <span key={i} className="absolute rounded-full" style={{ top: `${p.top}%`, left: `${p.left}%`, width: p.size, height: p.size, background: C.goldLight, animation: `twinkle 3s ease-in-out ${p.delay}s infinite` }} />
      ))}
    </div>
  );
}
