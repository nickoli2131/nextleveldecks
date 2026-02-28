import { Star } from "lucide-react";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "20+", label: "Years Experience" },
  { value: "4.9", label: "Star Rating" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

const testimonials = [
  {
    name: "Mike & Sarah T.",
    text: "SummitCraft built us an incredible cedar privacy fence. Their attention to detail and professionalism exceeded all expectations. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jennifer R.",
    text: "Our new cedar fence is absolutely gorgeous. The crew was friendly, on time, and left everything spotless. Couldn't be happier.",
    rating: 5,
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-border bg-card p-8 shadow-sm"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-secondary text-secondary"
                  />
                ))}
              </div>
              <p className="mb-6 italic text-muted-foreground">"{t.text}"</p>
              <p className="font-display font-bold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
