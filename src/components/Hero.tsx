import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-deck.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful custom deck and fence at golden hour"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 animate-fade-in-up text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
          Premium Deck & Fence Builders
        </p>
        <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl" style={{ animationDelay: "0.15s", animationFillMode: "both" }}>
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
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="#gallery">View Our Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
