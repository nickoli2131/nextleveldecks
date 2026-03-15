import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: name.trim(),
      phone: phone.trim() || null,
      email: email.trim() || null,
      message: message.trim() || null,
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
    } else {
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setName(""); setPhone(""); setEmail(""); setMessage("");
    }
  };

  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground/70">
              Ready to Start?
            </p>
            <h2 className="mb-6 font-display text-3xl font-bold md:text-5xl">
              Get Your Free Estimate Today
            </h2>
            <p className="mb-10 max-w-md text-primary-foreground/80">
              Tell us about your project and we'll get back to you within 24
              hours with a detailed, no-obligation quote.
            </p>

            <div className="space-y-5">
              <a href="tel:+14253971550" className="flex items-center gap-4 hover:text-primary-foreground/90">
                <Phone className="h-5 w-5 text-primary-foreground/70" />
                <span>(425) 397-1550</span>
              </a>
              <a href="mailto:Nick@nextlevel-decks.com" className="flex items-center gap-4 hover:text-primary-foreground/90">
                <Mail className="h-5 w-5 text-primary-foreground/70" />
                <span>Nick@nextlevel-decks.com</span>
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary-foreground/70" />
                <span>Serving Snohomish County</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/NextLevelDecks" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground/90">
                  <Facebook className="h-5 w-5 text-primary-foreground/70" />
                  <span>Next Level Decks</span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/nextlevel.decks" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground/90">
                  <Instagram className="h-5 w-5 text-primary-foreground/70" />
                  <span>@Nextlevel.decks</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right — simple form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-lg bg-background p-8 text-foreground shadow-lg"
          >
            <div>
              <label className="mb-1 block text-sm font-medium">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="(555) 000-0000"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Project Details
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tell us about your deck or fence project..."
              />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={submitting}>
              {submitting ? "Sending..." : "Request Free Quote"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
