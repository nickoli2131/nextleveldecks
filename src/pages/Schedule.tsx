import { useEffect } from "react";
import { ArrowLeft, Calendar, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CALENDLY_URL = "https://calendly.com/nick-nextlevel-decks/30min?text_color=000000";

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding pt-32 bg-background">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
              Let's Talk
            </p>
            <h1 className="font-display text-3xl font-bold text-foreground md:text-5xl">
              Schedule a Call
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Book a free phone consultation to discuss your deck or cedar fence
              project. We'll walk through your vision, answer questions, and
              provide a rough estimate.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Free Consultation",
                desc: "No obligation, no pressure — just a friendly conversation about your project.",
              },
              {
                icon: Clock,
                title: "15–30 Minutes",
                desc: "Quick call to understand your needs and give you a ballpark estimate.",
              },
              {
                icon: Calendar,
                title: "Pick Your Time",
                desc: "Choose a day and time that works best for your schedule.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-display text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Calendly embed area */}
          {CALENDLY_URL ? (
            <CalendlyEmbed url={CALENDLY_URL} />
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-card p-16 text-center">
              <Calendar className="mb-4 h-16 w-16 text-muted-foreground/40" />
              <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                Scheduling Coming Soon
              </h3>
              <p className="mb-6 max-w-md text-muted-foreground">
                Online scheduling is being set up. In the meantime, give us a
                call or send a message and we'll get back to you right away.
              </p>
              <Button asChild>
                <Link to="/#contact">
                  <Phone className="mr-2 h-4 w-4" /> Contact Us Instead
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
