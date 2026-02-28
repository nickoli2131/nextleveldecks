import gallery2 from "@/assets/gallery-2.jpg";
import fenceShowcase from "@/assets/fence-showcase.jpg";
import heroImage from "@/assets/hero-deck.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [
  { src: heroImage, alt: "Cedar fence with ambient lighting at sunset", span: "md:col-span-2" },
  { src: fenceShowcase, alt: "Horizontal cedar slat fence", span: "" },
  { src: gallery2, alt: "White cedar privacy fence", span: "" },
  { src: gallery1, alt: "Backyard with cedar fence and pergola", span: "" },
  { src: gallery3, alt: "Cedar fence around outdoor living space", span: "md:col-span-2" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-muted/50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Our Portfolio
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
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
