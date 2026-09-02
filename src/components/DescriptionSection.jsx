import Reveal from "./common/Reveal";
import RevealImage from "./common/RevealImage";
import Kalka from "./common/Kalka";
import { C, IMG_INVITE_FRAME } from "./common/theme";

/* ---------- Description section: wedding shloka + families/invitation message ---------- */
export default function DescriptionSection() {
  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 px-6 text-center" style={{ background: `linear-gradient(180deg, ${C.goldPale} 0%, ${C.ivory} 50%, ${C.goldPale} 100%)` }}>
        <Reveal><Kalka className="w-7 h-10 sm:w-9 sm:h-14 mx-auto mb-4" /></Reveal>
        <Reveal delay={0.1}>
          <p className="text-3xl sm:text-5xl md:text-6xl leading-relaxed mb-3" style={{ color: C.maroonDeep, fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>
            यदिदं हृदयं मम तदिदं हृदयं तव
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg sm:text-2xl md:text-3xl italic" style={{ color: C.maroon, fontFamily: "'Cormorant Garamond', serif" }}>
            Yadidam Hridayam Mama Tadidam Hridayam Tava
          </p>
        </Reveal>
      </section>

      <section
        className="relative w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto aspect-[843/1264] overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${C.goldPale} 0%, ${C.ivory} 12%, ${C.ivory} 88%, ${C.goldPale} 100%)` }}
      >
        <RevealImage
          src={IMG_INVITE_FRAME}
          alt=""
          className="absolute inset-0 w-full h-full object-contain"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          }}
        />
        <div className="absolute flex flex-col items-center justify-center text-center" style={{ top: "15%", bottom: "30%", left: "14%", right: "14%" }}>
          <Reveal><Kalka className="w-4 h-6 sm:w-10 sm:h-14 md:w-12 md:h-16 mx-auto mb-2" /></Reveal>
          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] mb-2" style={{ color: C.maroon }}>Our Beginning</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-3xl sm:text-4xl md:text-5xl leading-none" style={{ color: C.maroonDeep, fontFamily: "'Cormorant Garamond', serif" }}>Manomoy</p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="text-xs sm:text-sm md:text-base mt-1 mb-2 leading-snug" style={{ color: `${C.brown}CC` }}>son of Sri Bhabesh Chandra Biswas<br />&amp; Smt. Suchitra Biswas</p>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="text-sm sm:text-base italic mb-2" style={{ color: C.gold }}>weds</p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-3xl sm:text-4xl md:text-5xl leading-none" style={{ color: C.maroonDeep, fontFamily: "'Cormorant Garamond', serif" }}>Rumki</p>
          </Reveal>
          <Reveal delay={0.48}>
            <p className="text-xs sm:text-sm md:text-base mt-1 leading-snug" style={{ color: `${C.brown}CC` }}>daughter of Lt. Soumen Das<br />&amp; Smt. Gopali Das</p>
          </Reveal>
          <Reveal delay={0.56}>
            <div className="w-10 sm:w-12 h-px mx-auto mt-3 mb-2" style={{ background: `${C.gold}99` }} />
          </Reveal>
          <Reveal delay={0.64}>
            <p className="text-base sm:text-lg md:text-xl leading-snug mx-auto max-w-[210px] sm:max-w-xs md:max-w-sm" style={{ color: C.maroon, fontFamily: "'Parisienne', cursive" }}>
              We request the pleasure of your company as we celebrate our wedding festivities with love, laughter, and joy.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
