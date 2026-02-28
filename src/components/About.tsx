import { ShieldCheck, Clock, ThumbsUp, Hammer } from "lucide-react";

const promises = [
  { icon: ShieldCheck, title: "Licensed & Insured", description: "Fully licensed, bonded, and insured for your complete peace of mind." },
  { icon: Hammer, title: "Quality Materials", description: "We use only premium lumber and hardware that's built to withstand the elements." },
  { icon: Clock, title: "On-Time Delivery", description: "We respect your time — projects are completed on schedule, every time." },
  { icon: ThumbsUp, title: "100% Satisfaction", description: "We don't consider the job done until you're completely happy with the result." },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Our Promise to You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Next Level Decks and Fences is built on a commitment to honest work, quality craftsmanship, and treating every backyard like our own.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <div key={p.title} className="rounded-lg border border-border bg-card p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <p.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
