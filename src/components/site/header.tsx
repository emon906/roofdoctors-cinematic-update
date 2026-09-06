import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { PHONE_HREF, PHONE_LABEL } from "./site-data";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
];

export function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "border-b border-border bg-ink/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-primary-foreground">
            RD
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.22em]">
            Roof Doctors <span className="text-brand-light">ACT</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:border-brand-light hover:bg-foreground/5"
        >
          <Phone className="h-3.5 w-3.5 text-brand-light" />
          <span className="hidden sm:inline">{PHONE_LABEL}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
