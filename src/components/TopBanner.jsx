import Reveal from "./common/Reveal";
import { C, IMG_BANNER } from "./common/theme";

/* ---------- Top banner / hero ---------- */
export default function TopBanner() {
  return (
    <section className="relative overflow-hidden" style={{
      background: `linear-gradient(180deg, ${C.goldPale} 0%, ${C.gold} 45%, ${C.maroon} 100%)`,
    }}>
      {/* Full-width cover banner, dynamic height */}
      {/* <Reveal y={0}><img src={IMG_COVER} alt="Shubho Bibaho" className="w-full h-auto block" /></Reveal> */}

      <Reveal y={0}>
        <div style={{
          position: "relative", zIndex: 2, marginBottom: -60,
          WebkitMaskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
        }}>
          <img src={IMG_BANNER} alt="Banner" className="w-full h-auto block" />
        </div>
      </Reveal>

      {/* Gradient fill, in place of a second image, blending the banner down into the maroon of the sections below */}
      <div style={{ height: 80 }} />
    </section>
  );
}
