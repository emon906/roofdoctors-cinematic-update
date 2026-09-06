import { AREAS, EMAIL, PHONE_HREF, PHONE_LABEL, TAGLINE } from "./site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-primary-foreground">
              RD
            </span>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.22em]">
              The Roof Doctors <span className="text-brand-light">ACT</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{TAGLINE}</p>
          <p className="mt-1 text-sm text-muted-foreground">{AREAS}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href={PHONE_HREF} className="transition-colors hover:text-brand-light">
            {PHONE_LABEL}
          </a>
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-brand-light">
            {EMAIL}
          </a>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            © {new Date().getFullYear()} The Roof Doctors ACT
          </p>
        </div>
      </div>
    </footer>
  );
}
