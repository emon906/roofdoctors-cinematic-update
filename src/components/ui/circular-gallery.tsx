import { useCallback, useEffect, useRef, useState } from "react";

export type CircularGalleryItem = {
  image: string;
  text: string;
  meta?: string;
};

type Props = {
  items: CircularGalleryItem[];
  bend?: number;
  className?: string;
};

/**
 * CircularGallery — a smooth 3D scroll/drag carousel.
 * Pure CSS 3D transforms (no WebGL) so it stays fast on mobile.
 * The track is clipped by the wrapper, so it never causes horizontal overflow.
 */
export function CircularGallery({ items, bend = 3, className = "" }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const target = useRef(0);
  const current = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const [, force] = useState(0);
  const [active, setActive] = useState(0);

  const count = items.length;

  const clamp = useCallback((v: number) => Math.max(0, Math.min(count - 1, v)), [count]);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      current.current += (target.current - current.current) * 0.09;
      if (Math.abs(target.current - current.current) > 0.0005) force((n) => n + 1);
      setActive(Math.round(current.current));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY) && Math.abs(e.deltaY) < 12) return;
      e.preventDefault();
      target.current = clamp(target.current + delta * 0.004);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [clamp]);

  const start = (x: number) => {
    dragging.current = true;
    lastX.current = x;
  };
  const move = (x: number) => {
    if (!dragging.current) return;
    const dx = x - lastX.current;
    lastX.current = x;
    target.current = clamp(target.current - dx / 260);
  };
  const end = () => {
    dragging.current = false;
    target.current = clamp(Math.round(target.current));
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        ref={wrapRef}
        className="relative h-[420px] w-full cursor-grab touch-pan-y select-none active:cursor-grabbing sm:h-[520px]"
        style={{ perspective: "1400px" }}
        onPointerDown={(e) => start(e.clientX)}
        onPointerMove={(e) => move(e.clientX)}
        onPointerUp={end}
        onPointerLeave={end}
      >
        <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {items.map((item, i) => {
            const offset = i - current.current;
            const abs = Math.abs(offset);
            if (abs > 3.2) return null;
            const x = offset * 33;
            const z = -abs * 190 - Math.pow(abs, 2) * bend * 8;
            const rotY = offset * -22;
            const y = Math.pow(abs, 2) * bend * 2.2;
            return (
              <figure
                key={item.text}
                className="absolute left-1/2 top-1/2 m-0 w-[78vw] max-w-[520px] sm:w-[46vw]"
                style={{
                  transform: `translate(-50%, -50%) translate3d(${x}%, ${y}px, ${z}px) rotateY(${rotY}deg)`,
                  zIndex: 100 - Math.round(abs * 10),
                  opacity: Math.max(0, 1 - abs * 0.28),
                  transition: "opacity 0.4s var(--ease-cinema)",
                }}
                onClick={() => {
                  target.current = clamp(i);
                }}
              >
                <div className="grain relative overflow-hidden rounded-sm border border-border bg-surface shadow-[var(--shadow-cinema)]">
                  <img
                    src={item.image}
                    alt={item.text}
                    loading="lazy"
                    draggable={false}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-veil)] opacity-70" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    {item.meta && <p className="eyebrow mb-1">{item.meta}</p>}
                    <p className="font-display text-lg font-semibold sm:text-xl">{item.text}</p>
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {items.map((it, i) => (
          <button
            key={it.text}
            aria-label={`Show ${it.text}`}
            onClick={() => {
              target.current = clamp(i);
            }}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === active ? "w-10 bg-brand-light" : "w-4 bg-border hover:bg-brand"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CircularGallery;
