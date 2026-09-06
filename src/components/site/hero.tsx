import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import heroImg from "@/assets/hero-roof.jpg";
import { PHONE_HREF, PHONE_LABEL } from "./site-data";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Roofer finishing a new charcoal metal roof at sunset in Canberra"
          width={1920}
          height={1088}
          className="animate-slow-zoom h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--gradient-veil)]" />
        <div className="absolute inset-0 bg-ink/35" />
      </div>

      <div className="grain mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-in">Canberra ACT · Queanbeyan NSW</p>

          <h1 className="mt-5 text-[clamp(2.6rem,8vw,6rem)] font-bold leading-[0.95] animate-fade-in">
            Roofing Experts
            <br />
            <span className="text-gradient-brand">You Can Trust.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-in">
            Over 5 years restoring, repairing and replacing roofs across the ACT — precise
            workmanship, honest pricing and a finish built for Canberra weather.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-[image:var(--gradient-brand)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-foreground/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] backdrop-blur-md transition-colors duration-300 hover:border-brand-light hover:bg-foreground/10"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-3">
            <Stat icon={<Star className="h-4 w-4" />} value="5+ Years" label="Roofing experience" />
            <Stat icon={<ShieldCheck className="h-4 w-4" />} value="Fully Insured" label="Workmanship guaranteed" />
            <Stat icon={<Phone className="h-4 w-4" />} value={PHONE_LABEL} label="Free on-site quotes" />
          </dl>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 hidden h-24 w-px -translate-x-1/2 overflow-hidden bg-border md:block">
        <span className="animate-drift-line block h-1/2 w-full bg-brand-light" />
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div>
      <dt className="flex items-center gap-2 text-brand-light">{icon}</dt>
      <dd className="mt-2 font-display text-lg font-semibold">{value}</dd>
      <dd className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</dd>
    </div>
  );
}
