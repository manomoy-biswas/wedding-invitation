import { useReveal } from "./hooks";

export default function Reveal({ children, delay = 0, y = 28, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) scale(1)" : `translateY(${y}px) scale(0.97)`,
      transition: `opacity 0.9s cubic-bezier(.2,.7,.2,1) ${delay}s, transform 0.9s cubic-bezier(.2,.7,.2,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}
