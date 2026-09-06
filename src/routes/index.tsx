import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Projects } from "@/components/site/projects";
import { GallerySection } from "@/components/site/gallery-section";
import { Testimonials } from "@/components/site/testimonials";
import { QuoteSection } from "@/components/site/quote";
import { SiteFooter } from "@/components/site/footer";

const title = "The Roof Doctors ACT | Roofing Experts You Can Trust";
const description =
  "Premium roof restoration, replacement, leak repairs and gutters across Canberra, ACT and Queanbeyan, NSW. Over 5 years experience. Free on-site quotes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Projects />
        <GallerySection />
        <Testimonials />
        <QuoteSection />
      </main>
      <SiteFooter />
    </>
  );
}
