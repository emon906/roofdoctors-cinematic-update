import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { Reveal } from "./reveal";

const reviews = [
  {
    quote:
      "After two summers of leaks we finally got a straight answer. They found the failed valley flashing in twenty minutes and had it repaired properly the next morning. No mess left behind.",
    name: "Sarah M.",
    place: "Kambah, ACT",
  },
  {
    quote:
      "Full restoration on our 1980s tile roof. Re-bedded, re-pointed and sprayed — it honestly looks like a new house. Quote was clear and the final price didn't move.",
    name: "Daniel & Kate R.",
    place: "Queanbeyan, NSW",
  },
  {
    quote:
      "Storm took half our ridge caps off. They made the roof safe that evening and came back with the right caps within the week. Genuinely reliable tradies.",
    name: "Peter L.",
    place: "Gungahlin, ACT",
  },
  {
    quote:
      "New Colorbond roof and gutters on our Weston Creek place. Tidy work, on time every day, and they walked me over the finished job before invoicing.",
    name: "Amanda T.",
    place: "Weston Creek, ACT",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % reviews.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Client reviews</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02]">
            Trusted across <span className="text-gradient-brand">Canberra.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-14">
          <div className="relative min-h-[300px] overflow-hidden rounded-sm border border-border bg-surface p-8 shadow-[var(--shadow-cinema)] sm:min-h-[280px] sm:p-14">
            <Quote className="h-8 w-8 text-brand" />
            {reviews.map((r, idx) => (
              <blockquote
                key={r.name}
                aria-hidden={idx !== i}
                className="absolute inset-x-8 top-24 transition-all duration-700 ease-[var(--ease-cinema)] sm:inset-x-14 sm:top-28"
                style={{
                  opacity: idx === i ? 1 : 0,
                  transform: idx === i ? "none" : "translateY(24px)",
                  pointerEvents: idx === i ? "auto" : "none",
                }}
              >
                <p className="font-display text-lg leading-relaxed sm:text-2xl">{r.quote}</p>
                <footer className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex gap-0.5 text-brand-light">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </span>
                  <span className="font-semibold text-foreground">{r.name}</span>
                  <span>· {r.place}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((r, idx) => (
              <button
                key={r.name}
                aria-label={`Show review from ${r.name}`}
                onClick={() => setI(idx)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  idx === i ? "w-10 bg-brand-light" : "w-4 bg-border hover:bg-brand"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
