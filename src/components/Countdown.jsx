import { useState, useEffect } from "react";
import Reveal from "./common/Reveal";
import { C } from "./common/theme";

/* ---------- Countdown ---------- */
function useCountdown(targetISO) {
  const calc = () => {
    const diff = Math.max(new Date(targetISO).getTime() - Date.now(), 0);
    return { days: Math.floor(diff / 86400000), hours: Math.floor(diff / 3600000) % 24, mins: Math.floor(diff / 60000) % 60, secs: Math.floor(diff / 1000) % 60 };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return t;
}

export default function Countdown() {
  const t = useCountdown("2026-11-25T16:51:00+05:30");
  const units = [["Days", t.days], ["Hours", t.hours], ["Minutes", t.mins], ["Seconds", t.secs]];
  return (
    <section className="py-16 sm:py-20 px-6 text-center" style={{ background: `linear-gradient(180deg, ${C.goldPale} 0%, ${C.maroon} 18%, ${C.maroonDeep} 50%, ${C.maroon} 82%, ${C.goldPale} 100%)` }}>
      <Reveal><p className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: C.gold }}>Counting Down To Our Wedding</p></Reveal>
      <div className="flex justify-center gap-3 flex-wrap">
        {units.map(([label, val], i) => (
          <Reveal key={label} delay={i * 0.08}>
            <div className="rounded-lg px-4 py-3" style={{ background: C.ivory, minWidth: 68, border: `1px solid ${C.gold}` }}>
              <p className="text-2xl leading-none" style={{ color: C.maroonDeep, fontFamily: "Marcellus, serif" }}>{String(val).padStart(2, "0")}</p>
              <p className="text-[10px] uppercase tracking-wide mt-1" style={{ color: `${C.brown}99` }}>{label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
