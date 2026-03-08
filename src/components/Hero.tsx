import { useState, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-deck.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import deckShowcase from "@/assets/deck-showcase.jpg";
import fenceShowcase from "@/assets/fence-showcase.jpg";

const slides = [heroImage, gallery1, gallery2, gallery3, deckShowcase, fenceShowcase];

const kenBurnsVariants = [
  "scale-110 translate-x-2 -translate-y-1",
  "scale-115 -translate-x-3 translate-y-1",
  "scale-110 translate-x-1 translate-y-2",
  "scale-115 -translate-x-1 -translate-y-2",
  "scale-110 translate-x-3 translate-y-1",
  "scale-115 -translate-x-2 -translate-y-1",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const advance = useCallback(() => {
    setIsAnimating(false);
    // Brief reset before next slide
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsAnimating(true);
    }, 50);
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 6000);
    return () => clearInterval(interval);
  }, [advance]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Slideshow background with Ken Burns */}
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
              i === current && isAnimating ? kenBurnsVariants[i] : "scale-100"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

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
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90" asChild>
            <a href="#gallery">View Our Work</a>
          </Button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsAnimating(false);
              setTimeout(() => {
                setCurrent(i);
                setIsAnimating(true);
              }, 50);
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-primary-foreground" : "w-1.5 bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
