import { CircularGallery, type CircularGalleryItem } from "@/components/ui/circular-gallery";
import { Reveal } from "./reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const items: CircularGalleryItem[] = [
  { image: p1, text: "Colorbond Sheeting", meta: "Gungahlin" },
  { image: p2, text: "Tile Restoration", meta: "Queanbeyan" },
  { image: p3, text: "Gutter Replacement", meta: "Belconnen" },
  { image: p4, text: "Commercial Deck", meta: "Fyshwick" },
  { image: p5, text: "Ridge Repairs", meta: "Weston Creek" },
  { image: p6, text: "Membrane Coating", meta: "Woden" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="relative overflow-hidden border-y border-border bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px hairline" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Site reel</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02]">
            Scroll through the <span className="text-gradient-brand">workmanship.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            Drag, swipe or scroll the reel to move through recent roofing jobs across Canberra.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <CircularGallery items={items} bend={3} />
      </Reveal>
    </section>
  );
}
