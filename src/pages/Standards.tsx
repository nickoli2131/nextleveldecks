import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const standardsEntries = [
  {
    title: "G-Tape Flashing System",
    icon: Shield,
    summary:
      "We use G-Tape butyl-based flashing tape on every deck ledger board and beam connection to prevent moisture intrusion and rot — the #1 cause of structural deck failure.",
    details: [
      "Self-adhering butyl flashing rated for extreme weather",
      "Applied to ledger boards, beam pockets, and all critical junctions",
      "Prevents water damage that voids most warranties",
      "Industry best-practice endorsed by leading building scientists",
    ],
  },
];

const Standards = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex items-center justify-center bg-foreground px-6 pb-16 pt-32 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <Award className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h1 className="text-4xl font-bold md:text-5xl">The Next Level Way</h1>
          <p className="mt-4 text-lg text-primary-foreground/70">
            Our commitment to quality goes beyond code — every material and
            method we use is chosen to outlast and outperform.
          </p>
        </div>
      </section>

      {/* Entries */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-10">
          {standardsEntries.map((entry) => (
            <Card key={entry.title} className="overflow-hidden">
              <CardHeader className="bg-muted">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <entry.icon className="h-6 w-6 text-primary" />
                  {entry.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4 text-muted-foreground">{entry.summary}</p>
                <ul className="space-y-2">
                  {entry.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          More standards entries coming soon. Each article highlights a specific
          material or technique we use to build decks and fences that last.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Standards;
