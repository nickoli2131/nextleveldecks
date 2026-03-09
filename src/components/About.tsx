import { Fence, LayoutDashboard, Shield, Trees, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import darkWoodBg from "@/assets/dark-wood-bg.jpg";
import deckImage from "@/assets/deck-showcase.jpg";
import fenceImage from "@/assets/fence-showcase.jpg";

const standards = [
  {
    icon: Shield,
    label: "Standard #1",
    title: "G-Tape Joist Protection",
    description: "Self-healing flashing tape that waterproofs every screw hole, protecting your deck frame for decades.",
    anchor: "g-tape",
  },
  {
    icon: Fence,
    label: "Standard #2",
    title: "PostMaster Steel Posts",
    description: "Galvanized steel posts that resist rot, warping, and 73 mph winds — hidden behind a 100% wood look.",
    anchor: "postmaster",
  },
  {
    icon: Trees,
    label: "Standard #3",
    title: "Dunn Lumber Sourcing",
    description: "Kiln-dried, slow-growth BC timber that keeps your deck flat, quiet, and rock-solid for years.",
    anchor: "dunn-lumber",
  },
];

const services = [
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

const promises = [
  { icon: ShieldCheck, title: "Licensed & Insured", description: "Fully licensed, bonded, and insured for your complete peace of mind." },
  { icon: Hammer, title: "Quality Materials", description: "We use only premium lumber and hardware that's built to withstand the elements." },
  { icon: Clock, title: "On-Time Delivery", description: "We respect your time — projects are completed on schedule, every time." },
  { icon: ThumbsUp, title: "100% Satisfaction", description: "We don't consider the job done until you're completely happy with the result." },
];

const About = () => {
  return (
    <section id="about">
      {/* What We Do — dark wood banner */}
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
              What We Do
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-white/60" />
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm transition-shadow hover:shadow-lg"
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/20 text-white">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-white/80">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Why Choose Us — Next Level Standards */}
      <div className="section-padding bg-[hsl(25,20%,10%)]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              The 'Next Level' Standards
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Our commitment to quality goes beyond code — every material and method we use is chosen to outlast and outperform.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {standards.map((s) => (
              <Link
                key={s.anchor}
                to={`/standards#${s.anchor}`}
                className="group flex flex-col rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-6 transition-all hover:border-primary/50 hover:bg-white/15"
              >
                <div className="mb-3 flex items-center gap-2">
                  <s.icon className="h-5 w-5 text-primary" />
                  <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    {s.label}
                  </span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-white">{s.title}</h4>
                <p className="mb-4 flex-1 text-sm text-white/70">{s.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                  Read more <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
