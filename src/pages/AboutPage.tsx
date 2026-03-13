import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Heart, Target, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import darkWoodBg from "@/assets/dark-wood-bg.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img
            src={darkWoodBg}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            About Us
          </p>
          <h1 className="font-display text-4xl font-bold text-white md:text-6xl">
            Next Level Decks &amp; Fences
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            Building outdoor spaces that stand the test of time — with craftsmanship, integrity, and heart.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Story
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-primary" />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Next Level Decks &amp; Fences was founded on a simple belief: your outdoor space deserves the same quality and attention as the inside of your home. What started as a passion for woodworking has grown into a trusted name in custom deck and fence construction across the Pacific Northwest.
            </p>
            <p>
              Every project we take on is personal. We don't cut corners, we don't use cheap materials, and we don't rush through a build. From the first conversation to the final walkthrough, we treat every home like it's our own.
            </p>
            <p>
              We're not the biggest company out there — and that's by design. Staying hands-on means we can guarantee a level of quality and communication that larger outfits simply can't match.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src={darkWoodBg}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="mb-14 text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              What Drives Us
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-white/60" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Precision",
                description:
                  "Every cut, every joint, every detail is measured and executed with care. We believe the difference between good and great is in the details.",
              },
              {
                icon: Heart,
                title: "Integrity",
                description:
                  "Honest pricing, clear communication, and no surprises. We tell you what we're going to do — and then we do it right.",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "We're your neighbors. We live and work in the same communities we build in, and our reputation is everything to us.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-white/20 bg-white/10 p-8 backdrop-blur-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/20">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="text-sm text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's talk about your project. We'd love to hear what you have in mind.
          </p>
          <Link
            to="/schedule"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Schedule a Call <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
