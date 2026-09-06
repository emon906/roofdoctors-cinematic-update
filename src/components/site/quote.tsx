import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./reveal";
import { AREAS, EMAIL, PHONE_HREF, PHONE_LABEL } from "./site-data";

const serviceOptions = [
  "Roof Restoration",
  "Roof Replacement",
  "Leak Detection & Repair",
  "Gutters & Downpipes",
  "Roof Painting",
  "Emergency Make-Safe",
];

const field =
  "w-full rounded-sm border border-input bg-ink/60 px-4 py-3.5 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-brand-light";

export function QuoteSection() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Free quote request — ${data.get("service")}`,
    )}&body=${encodeURIComponent(body)}`;

    toast.success("Opening your email app with the quote request ready to send.");
    setTimeout(() => setSending(false), 800);
  };

  return (
    <section id="quote" className="relative border-t border-border bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Free quote</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02]">
            Tell us about <span className="text-gradient-brand">your roof.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Send a few details and we&apos;ll arrange an on-site inspection with a written,
            fixed-price quote — no obligation, no pressure.
          </p>

          <div className="mt-10 space-y-5">
            <a href={PHONE_HREF} className="flex items-center gap-4 text-sm transition-colors hover:text-brand-light">
              <span className="grid h-11 w-11 place-items-center rounded-sm border border-border bg-surface">
                <Phone className="h-4 w-4 text-brand-light" />
              </span>
              {PHONE_LABEL}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 text-sm transition-colors hover:text-brand-light">
              <span className="grid h-11 w-11 place-items-center rounded-sm border border-border bg-surface">
                <Mail className="h-4 w-4 text-brand-light" />
              </span>
              {EMAIL}
            </a>
            <p className="flex items-center gap-4 text-sm">
              <span className="grid h-11 w-11 place-items-center rounded-sm border border-border bg-surface">
                <MapPin className="h-4 w-4 text-brand-light" />
              </span>
              {AREAS}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="rounded-sm border border-border bg-surface p-6 shadow-[var(--shadow-cinema)] sm:p-9"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Full name" className={field} />
              <input name="phone" required type="tel" placeholder="Phone number" className={field} />
            </div>
            <input name="email" required type="email" placeholder="Email address" className={`${field} mt-4`} />
            <select name="service" required defaultValue="" className={`${field} mt-4`}>
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((s) => (
                <option key={s} value={s} className="bg-ink">
                  {s}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us what's happening with your roof…"
              className={`${field} mt-4 resize-none`}
            />
            <button
              type="submit"
              disabled={sending}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[image:var(--gradient-brand)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-70"
            >
              Request my free quote
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
