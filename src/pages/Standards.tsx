import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Award, Droplets, Wind, Wrench, TreePine, Fence, Bug, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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

      {/* G-Tape Article */}
      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-6 flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary" />
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Quality Standard #1
          </span>
        </div>

        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          The Silent Killer of Great Decks (And the Tape That Stops It)
        </h2>

        <Separator className="my-8" />

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            When you're standing on a brand-new deck, admiring the clean lines of the railing and the perfect wood grain of the boards, it's easy to forget that the most important part of the structure is the part you'll never see. Beneath those beautiful boards lies a skeleton of wooden joists holding everything together. In a perfect world, that frame would last as long as the house itself.
          </p>
          <p>
           But around here, we don't just "get a little rain." We live in a climate where moisture is a constant, quiet force working against your home. It's the dampness that lingers in the air and the puddles that sit on your deck long after the clouds clear. Without the right protection, that moisture acts like a slow-motion wrecking ball, dismantling your investment from the inside out. This is where a specialized material called <strong className="text-foreground">G-Tape</strong> becomes the difference between a deck that lasts a decade and one that lasts a generation.
          </p>

          {/* Section: Water Sandwich */}
          <div className="my-10 rounded-xl border border-border bg-muted/50 p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Droplets className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">The "Water Sandwich" Phenomenon</h3>
            </div>
            <p>
              To understand why we obsessed over a roll of tape, you have to understand how a deck actually fails. It rarely starts with the boards you walk on. Instead, it starts at the "joist crown"—the flat top surface of the structural lumber.
            </p>
            <p className="mt-4">
              When it rains, water doesn't just disappear. It trickles through the gaps in your decking and settles directly on top of the joists. Because the deck boards are screwed tightly into that wood, the water gets trapped in a tight space with zero airflow. Builders call this the <strong className="text-foreground">"water sandwich."</strong> Every single screw creates a tiny puncture wound, acting like a straw that sucks moisture deep into the heart of the timber. Over time, that trapped water triggers fungal rot, softening the wood until the screws lose their "bite" and the frame begins to sag.
            </p>
          </div>

          {/* Section: Self-Healing */}
          <div className="my-10 rounded-xl border border-border bg-muted/50 p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Wrench className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Enter the Self-Healing Barrier</h3>
            </div>
            <p>
              This is where G-Tape (specifically the 3040BK series) changes the game. Unlike the old-school asphalt tapes of the past, G-Tape is a technical marvel made from a patented cloth and a high-performance acrylic adhesive.
            </p>
            <p className="mt-4">
              The "magic" happens the moment a screw passes through it. The acrylic adhesive is designed to be <strong className="text-foreground">self-healing</strong>. As the fastener enters the wood, the tape tightly wraps around the threads, creating a permanent, watertight gasket. It effectively heals the wound it just made, ensuring that moisture can never follow that screw down into the joist.
            </p>
          </div>

          {/* Section: Vapor Permeable */}
          <div className="my-10 rounded-xl border border-border bg-muted/50 p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Wind className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">More Than Just a Waterproof Sticker</h3>
            </div>
            <p>
              But G-Tape does more than just block water; it manages it. A common mistake in construction is completely "suffocating" wood, which can actually cause dry rot by trapping internal vapors. G-Tape is engineered to be <strong className="text-foreground">vapor-permeable</strong>. It blocks liquid water from entering the top of the joist while allowing the wood to "breathe" out any internal moisture. This keeps the lumber dimensionally stable, meaning your joists won't twist, warp, or "mushroom" over the years.
            </p>
            <p className="mt-4">
              When the wood stays dry and dense, the fasteners stay tight. This eliminates the annoying squeaks, creaks, and "wavy" boards that often plague decks after just a few years of Northwest winters.
            </p>
          </div>

          {/* Section: Long Haul */}
          <div className="my-10 rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <TreePine className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Building for the Long Haul</h3>
            </div>
            <p>
              Adding G-Tape to a build is a hallmark of a contractor who isn't just looking to finish a job, but to <strong className="text-foreground">leave a legacy</strong>. While it's a small detail hidden under the surface, it's the single most effective way to ensure the "bones" of your deck stay as healthy as the day they were framed.
            </p>
            <p className="mt-4">
              By investing in this invisible layer of protection, you aren't just buying a deck—you're buying <strong className="text-foreground">thirty years</strong> of backyard BBQs, morning coffees, and peace of mind, knowing that your foundation is as solid as the day it was built.
            </p>
          </div>
        </div>

        <Separator className="my-8" />
      </article>

      {/* PostMaster Article */}
      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-6 flex items-center gap-3">
          <Fence className="h-8 w-8 text-primary" />
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Quality Standard #2
          </span>
        </div>

        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          The Invisible Spine: Why We've Replaced Wood Posts with PostMaster Steel
        </h2>

        <Separator className="my-8" />

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            When you think of a failing fence, you probably picture a section leaning into the neighbor's yard or a gate that just won't latch anymore. It's frustrating because, often, the wood pickets themselves still look great. But the culprit is almost always hidden underground. Traditional 4x4 wood posts are the "Achilles' heel" of any fence—they are the first part to rot, the first to warp, and the first to snap when a heavy Snohomish County windstorm rolls through.
          </p>
          <p>
            Around here, we've seen too many homeowners forced to replace an entire fence just because two or three posts failed. That is why we have made the switch to <strong className="text-foreground">PostMaster Steel Posts</strong>. It is a system that gives your home the structural invincibility of a commercial-grade frame while maintaining the warm, classic look of a 100% wood privacy fence.
          </p>

          <div className="my-10 rounded-xl border border-border bg-muted/50 p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Droplets className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">The Problem with Wood Underground</h3>
            </div>
            <p>
              Even the best pressure-treated 4x4 posts are on a ticking clock the moment they hit the dirt. Soil moisture and standing water at the concrete line eventually cause the wood to soften and decay. But rot isn't the only issue. As wood posts dry out over the years, they have a natural tendency to twist or "diamond." This movement pulls your entire fence out of alignment, leaving your gates crooked and your horizontal rails strained.
            </p>
            <p className="mt-4">
              If you've ever had to deal with the expense and headache of a leaning fence, you know exactly how much that "weak link" can cost you in the long run.
            </p>
          </div>

          <div className="my-10 rounded-xl border border-border bg-muted/50 p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Steel Strength, Wood Aesthetics</h3>
            </div>
            <p>
              In the past, if you wanted the strength of steel, you had to settle for round chain-link pipes that stood out like a sore thumb against your beautiful cedar boards. PostMaster changed that. These posts are engineered with a unique "hat" shape—a slim, U-shaped profile—that allows us to cover them completely with matching wood pickets.
            </p>
            <p className="mt-4">
              Once the project is finished, the steel is entirely invisible. You get a <strong className="text-foreground">"Good Neighbor" fence</strong> that looks like 100% natural wood from both sides, but with a hidden spine of galvanized structural steel that won't budge.
            </p>
          </div>

          <div className="my-10 rounded-xl border border-border bg-muted/50 p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Zap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Why This is a "Next Level" Upgrade</h3>
            </div>
            <p>
              The difference shows up when the weather gets rough. While a standard wood post can fail or snap in high winds, PostMaster posts are engineered to withstand gusts of up to <strong className="text-foreground">73 mph</strong>, providing a rigid, unwavering anchor for your property. Because they are heavy-duty galvanized, they are immune to the rot, warping, and pests that claim wood posts every 10 to 15 years.
            </p>
            <p className="mt-4">
              In fact, these posts are backed by a <strong className="text-foreground">Limited Lifetime Warranty</strong>. This means the "bones" of your fence will likely outlast the pickets themselves.
            </p>
          </div>

          <div className="my-10 rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <TreePine className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">The Verdict: Build Your Last Fence First</h3>
            </div>
            <p>
              Choosing PostMaster steel posts is a small upfront investment that pays for itself the first time a major windstorm hits. While your neighbors are spending their weekend digging out rotted 4x4s and hauling heavy concrete to fix a leaning fence, yours will still be standing perfectly straight—unbothered by the wet soil that eventually claims every wooden post.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          More standards articles coming soon. Each entry highlights a specific
          material or technique we use to build decks and fences that last.
        </p>
      </article>

      <Footer />
    </div>
  );
};

export default Standards;
