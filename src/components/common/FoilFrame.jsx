import { C } from "./theme";

/* ---------- Ornamental foil frame ---------- */
export default function FoilFrame({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ border: `1px solid ${C.gold}88`, margin: 5 }} />
      <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: `0 12px 32px -12px ${C.maroonDeep}88, inset 0 0 0 1px ${C.gold}33` }} />
      {["-top-1 -left-1", "-top-1 -right-1 scale-x-[-1]", "-bottom-1 -left-1 scale-y-[-1]", "-bottom-1 -right-1 scale-x-[-1] scale-y-[-1]"].map((pos, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`absolute w-4 h-4 ${pos}`} style={{ color: C.gold }}>
          <path d="M2 2 Q2 12 12 12 M2 2 Q12 2 12 12" stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.8" />
        </svg>
      ))}
      {children}
    </div>
  );
}
