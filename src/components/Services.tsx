import { Fence, LayoutDashboard, Home, ShieldCheck, Truck } from "lucide-react";
import darkWoodBg from "@/assets/dark-wood-bg.jpg";
import deckImage from "@/assets/deck-showcase.jpg";
import fenceImage from "@/assets/fence-showcase.jpg";

const iconServices = [
  { icon: Fence, title: "Cedar Fencing" },
  { icon: LayoutDashboard, title: "Decks" },
  { icon: Home, title: "Covered Patios" },
  { icon: ShieldCheck, title: "Privacy Walls" },
  { icon: Truck, title: "& More" },
];

const detailedServices = [
  {
    icon: LayoutDashboard,
    title: "Custom Decks",
    description:
      "From intimate patios to expansive multi-level decks, we craft outdoor living spaces tailored to your lifestyle using premium wood and composite materials.",
    image: deckImage,
  },
  {
    icon: Fence,
    title: "Cedar Fencing",
    description:
      "Privacy, security, and curb appeal — our cedar fences are built to last with natural beauty and durability. Every style, every yard.",
    image: fenceImage,
  },
];

const Services = () => {
  return (
    <section id="services">
      {/* Dark wood icon banner */}
      <div className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src={darkWoodBg}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              Services
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-white/60" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {iconServices.map((s) => (
              <div key={s.title} className="flex flex-col items-center gap-4">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/40 md:h-36 md:w-36">
                  <s.icon className="h-12 w-12 text-white md:h-16 md:w-16" strokeWidth={1} />
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-white/90">
                  {s.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed service cards */}
      <div className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2">
            {detailedServices.map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
