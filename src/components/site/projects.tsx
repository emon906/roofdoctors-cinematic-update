import { Reveal } from "./reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";

const projects = [
  {
    img: p1,
    title: "Colorbond Re-Roof",
    place: "Gungahlin, ACT",
    detail: "Full tear-off and new Monument Colorbond sheeting with upgraded sarking.",
    span: "lg:col-span-7 lg:row-span-2",
    ratio: "aspect-[4/5]",
  },
  {
    img: p2,
    title: "Tile Restoration",
    place: "Queanbeyan, NSW",
    detail: "High-pressure clean, re-bed, flexible pointing and two-coat membrane.",
    span: "lg:col-span-5",
    ratio: "aspect-[4/3]",
  },
  {
    img: p5,
    title: "Ridge & Flashing Repair",
    place: "Weston Creek, ACT",
    detail: "Storm damage make-safe at dusk, permanent repair the following morning.",
    span: "lg:col-span-5",
    ratio: "aspect-[4/3]",
  },
  {
    img: p4,
    title: "Commercial Roof Renewal",
    place: "Fyshwick, ACT",
    detail: "Large-format metal deck renewal with skylight resealing across 1,400 m².",
    span: "lg:col-span-12",
    ratio: "aspect-[16/9] lg:aspect-[21/9]",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Recent work</p>
              <h2 className="mt-4 max-w-xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02]">
                Roofs we&apos;ve <span className="text-gradient-brand">brought back to life.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A selection of recent residential and commercial jobs across the ACT and surrounding
              NSW. Every roof finished, cleaned up and photographed the same day.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className={p.span}>
              <article className="group relative h-full overflow-hidden rounded-sm border border-border bg-surface shadow-[var(--shadow-cinema)]">
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.place}`}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className={`${p.ratio} w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-cinema)] group-hover:scale-[1.07]`}
                />
                <div className="absolute inset-0 bg-[var(--gradient-veil)] opacity-85 transition-opacity duration-700 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="eyebrow">{p.place}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">{p.title}</h3>
                  <p className="mt-2 max-w-md translate-y-2 text-sm text-muted-foreground opacity-0 transition-all duration-700 ease-[var(--ease-cinema)] group-hover:translate-y-0 group-hover:opacity-100">
                    {p.detail}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
