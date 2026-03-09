import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Fence, LayoutDashboard, Home, ShieldCheck, Hammer, ChevronRight, Award, Shield, Trees } from "lucide-react";
import deckImage from "@/assets/deck-showcase.jpg";
import fenceImage from "@/assets/fence-showcase.jpg";
import darkWoodBg from "@/assets/dark-wood-bg.jpg";

const services = [
  {
    id: "decks",
    icon: LayoutDashboard,
    title: "Custom Composite Decks",
    tagline: "Outdoor living, elevated.",
    image: deckImage,
    description:
      "From intimate patios to expansive multi-level entertaining spaces, we design and build composite decks tailored to your lifestyle. Every project starts with a detailed consultation to understand how you use your outdoor space — then we engineer a structure that's built to last decades.",
    features: [
      "Premium composite decking materials (Trex, TimberTech, and more)",
      "Kiln-dried, straight-frame substructures sourced from Dunn Lumber",
      "Hidden fastener systems for a clean, seamless surface",
      "Custom railings, stairs, and built-in seating",
      "Multi-level designs with integrated lighting",
    ],
  },
  {
    id: "cedar-fencing",
    icon: Fence,
    title: "Cedar Fencing",
    tagline: "Privacy, beauty, and natural durability.",
    image: fenceImage,
    description:
      "Our cedar fences are crafted from premium Western Red Cedar, chosen for its natural resistance to rot and insects. We build every fence with the same structural integrity we put into our decks — because a fence should last as long as the home it protects.",
    features: [
      "Western Red Cedar sourced for tight grain and longevity",
      "Full-framed panels with dado-notched rails",
      "Steel post brackets for rot-free ground contact",
      "Privacy, semi-privacy, and decorative styles",
      "Custom gates with self-closing hardware",
    ],
  },
  {
    id: "vinyl-fencing",
    icon: ShieldCheck,
    title: "Vinyl Fencing",
    tagline: "Zero maintenance. Lasting beauty.",
    image: fenceImage,
    description:
      "For homeowners who want a beautiful fence without the upkeep, our vinyl fencing solutions deliver. Engineered to resist fading, cracking, and weathering, vinyl fencing keeps its like-new appearance year after year with zero staining or sealing required.",
    features: [
      "Commercial-grade vinyl that won't yellow or crack",
      "Privacy, semi-privacy, and picket styles available",
      "Wind-rated designs for Pacific Northwest weather",
      "Lifetime manufacturer warranties",
      "Color-matched gates and accessories",
    ],
  },
  {
    id: "covered-patios",
    icon: Home,
    title: "Covered Patios",
    tagline: "Enjoy your deck rain or shine.",
    image: deckImage,
    description:
      "Extend your outdoor season with a custom patio cover. Whether you want a fully enclosed roof structure or an open pergola, we integrate covers seamlessly with your existing deck or build them as standalone features.",
    features: [
      "Solid roof and open pergola options",
      "Integrated gutter and drainage systems",
      "Fan and lighting pre-wiring available",
      "Engineered for local snow and wind loads",
      "Seamless integration with new or existing decks",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center">
        <div className="absolute inset-0">
          <img src={darkWoodBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 px-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary">
            <Hammer className="h-7 w-7 text-primary" />
          </div>
          <h1 className="font-display text-4xl font-bold text-white md:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Premium craftsmanship for every corner of your outdoor space.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-6 py-4">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <s.icon className="h-4 w-4" />
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Service sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`scroll-mt-24 ${i % 2 === 1 ? "bg-muted/50" : "bg-background"}`}
        >
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className={`flex flex-col items-center gap-10 md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-72 w-full object-cover md:h-96"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {service.tagline}
                  </p>
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-foreground">
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link to="/estimate">Get an Estimate</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/schedule">
                      <Calendar className="mr-2 h-4 w-4" /> Schedule a Call
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default Services;
