import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import deckShowcase from "@/assets/deck-showcase.jpg";
import fenceShowcase from "@/assets/fence-showcase.jpg";
import heroImage from "@/assets/hero-deck.jpg";

const images = [
  { src: heroImage, alt: "Bonney Lake deck with pool surround", span: "md:col-span-2" },
  { src: gallery1, alt: "Custom deck with above-ground pool", span: "" },
  { src: gallery2, alt: "Deck stairs and railing detail", span: "" },
  { src: gallery3, alt: "Cedar deck with privacy fencing", span: "" },
  { src: deckShowcase, alt: "Composite deck stairway construction", span: "" },
  { src: fenceShowcase, alt: "Deck and landscaping overview", span: "md:col-span-2" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-[hsl(25,20%,10%)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Our Portfolio
          </p>
          <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
            Recent Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-lg ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-72"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
