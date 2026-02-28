import { Fence, Wrench, Shield, Ruler } from "lucide-react";
import fenceImage from "@/assets/fence-showcase.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const services = [
  {
    icon: Fence,
    title: "Privacy Fences",
    description:
      "Full privacy cedar fences built with premium boards for maximum security and a beautiful, natural look that complements any property.",
    image: fenceImage,
  },
  {
    icon: Ruler,
    title: "Custom Cedar Designs",
    description:
      "From horizontal slat to traditional picket styles, we design and build custom cedar fences tailored to your property and taste.",
    image: gallery2,
  },
];

const features = [
  {
    icon: Wrench,
    title: "Expert Craftsmanship",
    description: "20+ years of experience building cedar fences that stand the test of time.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your complete peace of mind.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            What We Do
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Our Services
          </h2>
        </div>

        <div className="mb-20 grid gap-10 md:grid-cols-2">
          {services.map((service) => (
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

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <f.icon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-1 font-display text-lg font-bold text-foreground">
                  {f.title}
                </h4>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
