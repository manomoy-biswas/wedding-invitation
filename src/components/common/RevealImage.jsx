import { useReveal } from "./hooks";

/* ---------- Scroll-reveal for images that must stay absolutely positioned ----------
   (a plain <Reveal> wrapper would apply a CSS transform to its own div, which creates
   a new containing block and breaks any `position: absolute; inset: 0` image inside it —
   so this applies the same fade/scale treatment directly on the <img> itself instead.) */
export default function RevealImage({ delay = 0, y = 16, className = "", style = {}, ...imgProps }) {
  const [ref, visible] = useReveal();
  return (
    <img
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: `${visible ? "translateY(0) scale(1)" : `translateY(${y}px) scale(0.97)`}`,
        transition: `opacity 0.9s cubic-bezier(.2,.7,.2,1) ${delay}s, transform 0.9s cubic-bezier(.2,.7,.2,1) ${delay}s`,
      }}
      {...imgProps}
    />
  );
}
