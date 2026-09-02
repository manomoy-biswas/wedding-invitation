import { IMG_MANDALA } from "./theme";

/* ---------- Alpona motif (uploaded mandala, recolored gold linework) ---------- */
export default function AlponaMotif({ className = "", opacity = 0.9, style }) {
  return <img src={IMG_MANDALA} alt="" className={`${className} alpona-fade`} style={{ opacity, ...style }} />;
}
