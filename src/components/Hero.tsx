import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-deck.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import deckShowcase from "@/assets/deck-showcase.jpg";
import fenceShowcase from "@/assets/fence-showcase.jpg";

const slides = [
  { src: heroImage, alt: "Bonney Lake deck with pool surround" },
  { src: gallery1, alt: "Custom deck with above-ground pool" },
  { src: deckShowcase, alt: "Composite deck stairway construction" },
  { src: gallery2, alt: "Deck stairs and railing detail" },
  { src: fenceShowcase, alt: "Deck and landscaping overview" },
  { src: gallery3, alt: "Cedar deck with privacy fencing" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image montage */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="group absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            style={i === current ? { animation: 'ken-burns 8s ease-in-out forwards' } : undefined}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-primary"
                : "w-1.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 animate-fade-in-up text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
          Premium Deck & Fence Builders
        </p>
        <h1
          className="mb-6 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.15s", animationFillMode: "both" }}
        >
          Taking Your Backyard to the{" "}
          <span className="italic">Next Level</span>
        </h1>
        <p
          className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/80 md:text-xl animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          We design and build custom decks and fences that elevate your
          property's beauty, privacy, and value.
        </p>
        <div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <Button size="lg" asChild>
            <a href="#contact">
              Get Your Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
            asChild
          >
            <a href="#gallery">View Our Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
