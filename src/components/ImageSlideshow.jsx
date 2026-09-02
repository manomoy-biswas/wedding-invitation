import { useState, useEffect } from "react";
import { C } from "./common/theme";

/* ---------- Image slideshow (Sangeet / Holud — cycles through multiple images) ---------- */
export default function ImageSlideshow({ images, alt }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (images.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 2800);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <div className="relative w-full h-80" style={{ background: C.maroonDeep }}>
      {images.map((src, i) => (
        <img key={i} src={src} alt={alt} className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000" style={{ opacity: i === idx ? 1 : 0 }} />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-2 right-2 flex gap-1">
          {images.map((_, i) => (<span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: i === idx ? C.gold : `${C.ivory}66` }} />))}
        </div>
      )}
    </div>
  );
}
