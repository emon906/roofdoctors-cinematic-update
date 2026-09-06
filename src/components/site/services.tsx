import { useState } from "react";
import { Droplets, Hammer, PaintRoller, Layers, Wrench, Waves } from "lucide-react";
import { Reveal } from "./reveal";

const services = [
  {
    n: "01",
    title: "Roof Restoration",
    icon: Layers,
    copy: "Full clean, re-bed, re-point and re-coat — decades added to a tired Canberra roof.",
  },
  {
    n: "02",
    title: "Roof Replacement",
    icon: Hammer,
    copy: "Complete tear-off and new Colorbond or tile installation, sealed for ACT frost and hail.",
  },
  {
    n: "03",
    title: "Leak Detection & Repair",
    icon: Droplets,
    copy: "We trace the true source — valleys, flashings, ridge caps — and fix it once, properly.",
  },
  {
    n: "04",
    title: "Gutters & Downpipes",
    icon: Waves,
    copy: "Seamless gutter replacement, leaf guard and downpipe work that moves storm water fast.",
  },
  {
    n: "05",
    title: "Roof Painting",
    icon: PaintRoller,
    copy: "Membrane spray finishes in premium colours with a factory-grade, even coverage.",
  },
  {
    n: "06",
    title: "Emergency Make-Safe",
    icon: Wrench,
    copy: "Storm damage response across Canberra and Queanbeyan — tarped, secured, then repaired.",
  },
];

export function Services() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="services" className="relative border-t border-border bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02]">
            Every roof problem, <span className="text-gradient-brand">solved on site.</span>
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            const active = hover === i;
            return (
              <Reveal key={s.title} delay={i * 60}>
                <div
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  className="group relative grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-3 border-b border-border py-8 transition-colors duration-500 sm:grid-cols-[6rem_18rem_1fr] sm:items-center"
                >
                  <span
                    className={`font-display text-sm tracking-[0.2em] transition-colors duration-500 ${
                      active ? "text-brand-light" : "text-muted-foreground"
                    }`}
                  >
                    {s.n}
                  </span>
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">
                    <span className="inline-flex items-center gap-3">
                      <Icon
                        className={`h-5 w-5 transition-all duration-500 ${
                          active ? "scale-110 text-brand-light" : "text-brand"
                        }`}
                      />
                      {s.title}
                    </span>
                  </h3>
                  <p className="col-span-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:col-span-1">
                    {s.copy}
                  </p>
                  <span
                    className={`pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-[image:var(--gradient-brand)] transition-transform duration-700 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
