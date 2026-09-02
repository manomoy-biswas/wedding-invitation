import Reveal from "./common/Reveal";
import { C, IMG_HANDS } from "./common/theme";

export default function Footer() {
  return (
    <footer
      className="relative text-center pt-16 sm:pt-20 pb-10 px-6 overflow-hidden"
      style={{ background: `linear-gradient(180deg, ${C.goldPale} 0%, ${C.maroon} 35%, ${C.maroonDeep} 100%)` }}
    >
      <Reveal>
        <img src={IMG_HANDS} alt="" className="w-24 mx-auto mb-4 rounded-lg opacity-90" style={{ border: `1px solid ${C.gold}66` }} />
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg" style={{ color: C.ivory }}>With love, Manomoy & Rumki</p>
      </Reveal>
    </footer>
  );
}
