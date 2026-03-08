import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, Ruler, Fence, LayoutDashboard, Trees, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ProjectType = "deck" | "fence" | "";
type Material = string;

const FRAMING_PER_SQFT = 50;

const DECK_MATERIALS = [
  { value: "composite-value", label: "Composite – Value", deckingLow: 24, deckingHigh: 28, railingLow: 110, railingHigh: 130 },
  { value: "composite-premium", label: "Composite – Premium", deckingLow: 30, deckingHigh: 36, railingLow: 140, railingHigh: 165 },
  { value: "composite-luxury", label: "Composite – Luxury", deckingLow: 38, deckingHigh: 42, railingLow: 170, railingHigh: 195 },
];

const FENCE_MATERIALS = [
  { value: "cedar-fence", label: "Cedar", pricePerLinFt: 30 },
];

const FENCE_HEIGHTS = [
  { value: "4", label: "4 ft", multiplier: 0.8 },
  { value: "6", label: "6 ft", multiplier: 1.0 },
  { value: "8", label: "8 ft", multiplier: 1.3 },
];

const FENCE_REMOVAL_PER_LF = 12.5;
const METAL_POST_COST = 80;
const WOOD_POST_COST = 42;
const SMALL_GATE_COST = 640;
const LARGE_GATE_COST = 720;

const DECK_HEIGHTS = [
  { value: "below-3", label: "Below 3'", multiplier: 1.0 },
  { value: "3-6", label: "3' – 6'", multiplier: 1.3 },
  { value: "6-10", label: "6' – 10'", multiplier: 1.6 },
  { value: "10-plus", label: "10'+", multiplier: 2.0 },
];

const Estimate = () => {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<ProjectType>("");
  const [material, setMaterial] = useState<Material>("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [railingLf, setRailingLf] = useState("");
  const [railingAutoCalc, setRailingAutoCalc] = useState(true);
  const [fenceHeight, setFenceHeight] = useState("6");
  const [deckHeight, setDeckHeight] = useState("below-3");
  const [showEstimate, setShowEstimate] = useState(false);
  const [needsRemoval, setNeedsRemoval] = useState("no");
  const [postType, setPostType] = useState("wood");
  const [smallGates, setSmallGates] = useState("0");
  const [largeGates, setLargeGates] = useState("0");

  const calculateEstimate = () => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;

    if (projectType === "deck") {
      const sqFt = l * w;
      const mat = DECK_MATERIALS.find((m) => m.value === material);
      const dh = DECK_HEIGHTS.find((h) => h.value === deckHeight);
      const rlf = parseFloat(railingLf) || 0;
      if (!mat || !dh || sqFt === 0) return { low: 0, high: 0, unit: "sq ft", size: sqFt };
      const framingCost = sqFt * FRAMING_PER_SQFT * dh.multiplier;
      const deckingLow = sqFt * mat.deckingLow;
      const deckingHigh = sqFt * mat.deckingHigh;
      const railLow = rlf * mat.railingLow;
      const railHigh = rlf * mat.railingHigh;
      return {
        low: Math.round(framingCost + deckingLow + railLow),
        high: Math.round(framingCost + deckingHigh + railHigh),
        unit: "sq ft",
        size: sqFt,
      };
    }

    // fence
    const linFt = l;
    const mat = FENCE_MATERIALS.find((m) => m.value === material);
    const ht = FENCE_HEIGHTS.find((h) => h.value === fenceHeight);
    if (!mat || !ht || linFt === 0) return { low: 0, high: 0, unit: "lin ft", size: 0 };
    const base = linFt * mat.pricePerLinFt * ht.multiplier;
    const removalCost = needsRemoval === "yes" ? linFt * FENCE_REMOVAL_PER_LF : 0;
    const postCount = Math.ceil(linFt / 8);
    const postCost = postType === "metal" ? postCount * METAL_POST_COST : postCount * WOOD_POST_COST;
    const gateCost = (parseInt(smallGates) || 0) * SMALL_GATE_COST + (parseInt(largeGates) || 0) * LARGE_GATE_COST;
    const total = base + removalCost + postCost + gateCost;
    return { low: Math.round(total * 0.85), high: Math.round(total * 1.25), unit: "linear ft", size: linFt };
  };

  const estimate = calculateEstimate();

  const canProceedStep2 = projectType !== "";
  const canProceedStep3 = material !== "";
  const canCalculate =
    projectType === "deck"
      ? parseFloat(length) > 0 && parseFloat(width) > 0
      : parseFloat(length) > 0;

  const handleCalculate = () => {
    if (canCalculate) setShowEstimate(true);
  };

  const resetCalculator = () => {
    setStep(1);
    setProjectType("");
    setMaterial("");
    setLength("");
    setWidth("");
    setRailingLf("");
    setRailingAutoCalc(true);
    setFenceHeight("6");
    setDeckHeight("below-3");
    setShowEstimate(false);
    setNeedsRemoval("no");
    setPostType("wood");
    setSmallGates("0");
    setLargeGates("0");
  };

  const materialLabel =
    projectType === "deck"
      ? DECK_MATERIALS.find((m) => m.value === material)?.label
      : FENCE_MATERIALS.find((m) => m.value === material)?.label;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-padding pt-28">
        <div className="mx-auto max-w-2xl">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Calculator className="h-7 w-7 text-primary" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Project Estimator
            </h1>
            <p className="mt-2 text-muted-foreground">
              Get a rough ballpark for your project in under a minute.
            </p>
          </div>

          {/* Progress indicators */}
          <div className="mb-8 flex items-center justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 w-16 rounded-full transition-colors ${
                  s <= step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>

          {!showEstimate ? (
            <Card className="border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">
                  {step === 1 && "What type of project?"}
                  {step === 2 && "Choose a material"}
                  {step === 3 && "Enter dimensions"}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Select the type of project you're planning."}
                  {step === 2 && "Material choice is the biggest cost factor."}
                  {step === 3 &&
                    (projectType === "deck"
                      ? "Enter the approximate length and width of your deck."
                      : "Enter the total linear footage and height of your fence.")}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Step 1 — Project type */}
                {step === 1 && (
                  <>
                    <RadioGroup
                      value={projectType}
                      onValueChange={(v) => setProjectType(v as ProjectType)}
                      className="grid grid-cols-2 gap-4"
                    >
                      {[
                        { value: "deck", label: "Deck", Icon: LayoutDashboard, desc: "Patios, elevated decks, pergolas" },
                        { value: "fence", label: "Fence", Icon: Fence, desc: "Privacy, picket, ornamental" },
                      ].map(({ value, label, Icon, desc }) => (
                        <Label
                          key={value}
                          htmlFor={value}
                          className={`flex cursor-pointer flex-col items-center gap-3 rounded-lg border-2 p-6 text-center transition-colors ${
                            projectType === value
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/40"
                          }`}
                        >
                          <RadioGroupItem value={value} id={value} className="sr-only" />
                          <Icon className="h-8 w-8 text-primary" />
                          <span className="font-display text-lg font-semibold text-foreground">{label}</span>
                          <span className="text-xs text-muted-foreground">{desc}</span>
                        </Label>
                      ))}
                    </RadioGroup>
                    <Button
                      className="w-full"
                      size="lg"
                      disabled={!canProceedStep2}
                      onClick={() => setStep(2)}
                    >
                      Continue <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </>
                )}

                {/* Step 2 — Material */}
                {step === 2 && (
                  <>
                    <RadioGroup
                      value={material}
                      onValueChange={setMaterial}
                      className="space-y-3"
                    >
                      {(projectType === "deck" ? DECK_MATERIALS : FENCE_MATERIALS).map(
                        (mat) => (
                          <Label
                            key={mat.value}
                            htmlFor={mat.value}
                            className={`flex cursor-pointer items-center justify-between rounded-lg border-2 px-5 py-4 transition-colors ${
                              material === mat.value
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/40"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value={mat.value} id={mat.value} className="sr-only" />
                              <Trees className="h-5 w-5 text-primary" />
                              <span className="font-medium text-foreground">{mat.label}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {"deckingLow" in mat
                                ? `$${mat.deckingLow}–$${mat.deckingHigh}/sq ft`
                                : `$${(mat as any).pricePerLinFt}/lin ft`}
                            </span>
                          </Label>
                        )
                      )}
                    </RadioGroup>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1" onClick={() => { setStep(1); setMaterial(""); }}>
                        Back
                      </Button>
                      <Button className="flex-1" size="lg" disabled={!canProceedStep3} onClick={() => setStep(3)}>
                        Continue <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </>
                )}

                {/* Step 3 — Dimensions */}
                {step === 3 && (
                  <>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="length" className="mb-1.5 block text-sm">
                          {projectType === "deck" ? "Length (ft)" : "Total Linear Feet"}
                        </Label>
                        <div className="relative">
                          <Ruler className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="length"
                            type="number"
                            min="1"
                            placeholder={projectType === "deck" ? "e.g. 20" : "e.g. 150"}
                            value={length}
                            onChange={(e) => {
                              setLength(e.target.value);
                              if (projectType === "deck" && railingAutoCalc) {
                                const l = parseFloat(e.target.value) || 0;
                                const w = parseFloat(width) || 0;
                                if (l > 0 && w > 0) setRailingLf(String(Math.round(2 * l + 2 * w - w)));
                              }
                            }}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      {projectType === "deck" && (
                        <div>
                          <Label htmlFor="width" className="mb-1.5 block text-sm">
                            Width (ft)
                          </Label>
                          <div className="relative">
                            <Ruler className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id="width"
                              type="number"
                              min="1"
                              placeholder="e.g. 14"
                              value={width}
                              onChange={(e) => {
                                setWidth(e.target.value);
                                if (railingAutoCalc) {
                                  const l = parseFloat(length) || 0;
                                  const w = parseFloat(e.target.value) || 0;
                                  if (l > 0 && w > 0) setRailingLf(String(Math.round(2 * l + 2 * w - w)));
                                }
                              }}
                              className="pl-10"
                            />
                          </div>
                        </div>
                      )}

                      {projectType === "deck" && (
                        <div>
                          <Label htmlFor="railing" className="mb-1.5 block text-sm">
                            Railing (linear ft){" "}
                            <span className="text-xs text-muted-foreground">— auto-calculated from perimeter</span>
                          </Label>
                          <div className="relative">
                            <Ruler className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id="railing"
                              type="number"
                              min="0"
                              placeholder="e.g. 50"
                              value={railingLf}
                              onChange={(e) => {
                                setRailingLf(e.target.value);
                                setRailingAutoCalc(false);
                              }}
                              className="pl-10"
                            />
                          </div>
                        </div>
                      )}

                      {projectType === "deck" && (
                        <div>
                          <Label className="mb-1.5 block text-sm">Deck Height</Label>
                          <RadioGroup
                            value={deckHeight}
                            onValueChange={setDeckHeight}
                            className="grid grid-cols-2 gap-3"
                          >
                            {DECK_HEIGHTS.map((h) => (
                              <Label
                                key={h.value}
                                htmlFor={`dh-${h.value}`}
                                className={`flex cursor-pointer items-center justify-center rounded-lg border-2 py-3 text-sm font-medium transition-colors ${
                                  deckHeight === h.value
                                    ? "border-primary bg-primary/5 text-foreground"
                                    : "border-border text-muted-foreground hover:border-primary/40"
                                }`}
                              >
                                <RadioGroupItem value={h.value} id={`dh-${h.value}`} className="sr-only" />
                                {h.label}
                              </Label>
                            ))}
                          </RadioGroup>
                        </div>
                      )}

                      {projectType === "fence" && (
                        <div>
                          <Label className="mb-1.5 block text-sm">Fence Height</Label>
                          <RadioGroup
                            value={fenceHeight}
                            onValueChange={setFenceHeight}
                            className="flex gap-3"
                          >
                            {FENCE_HEIGHTS.map((h) => (
                              <Label
                                key={h.value}
                                htmlFor={`h-${h.value}`}
                                className={`flex flex-1 cursor-pointer items-center justify-center rounded-lg border-2 py-3 text-sm font-medium transition-colors ${
                                  fenceHeight === h.value
                                    ? "border-primary bg-primary/5 text-foreground"
                                    : "border-border text-muted-foreground hover:border-primary/40"
                                }`}
                              >
                                <RadioGroupItem value={h.value} id={`h-${h.value}`} className="sr-only" />
                                {h.label}
                              </Label>
                            ))}
                          </RadioGroup>
                        </div>
                      )}

                      {projectType === "fence" && (
                        <div>
                          <Label className="mb-1.5 block text-sm">Old fence removal needed?</Label>
                          <RadioGroup
                            value={needsRemoval}
                            onValueChange={setNeedsRemoval}
                            className="flex gap-3"
                          >
                            {[
                              { value: "no", label: "No" },
                              { value: "yes", label: "Yes (+$12.50/lf)" },
                            ].map((opt) => (
                              <Label
                                key={opt.value}
                                htmlFor={`rem-${opt.value}`}
                                className={`flex flex-1 cursor-pointer items-center justify-center rounded-lg border-2 py-3 text-sm font-medium transition-colors ${
                                  needsRemoval === opt.value
                                    ? "border-primary bg-primary/5 text-foreground"
                                    : "border-border text-muted-foreground hover:border-primary/40"
                                }`}
                              >
                                <RadioGroupItem value={opt.value} id={`rem-${opt.value}`} className="sr-only" />
                                {opt.label}
                              </Label>
                            ))}
                          </RadioGroup>
                        </div>
                      )}

                      {projectType === "fence" && (
                        <div>
                          <Label className="mb-1.5 block text-sm">Post type</Label>
                          <RadioGroup
                            value={postType}
                            onValueChange={setPostType}
                            className="flex gap-3"
                          >
                            {[
                              { value: "wood", label: "Wood ($42/post)" },
                              { value: "metal", label: "Metal ($80/post)" },
                            ].map((opt) => (
                              <Label
                                key={opt.value}
                                htmlFor={`post-${opt.value}`}
                                className={`flex flex-1 cursor-pointer items-center justify-center rounded-lg border-2 py-3 text-sm font-medium transition-colors ${
                                  postType === opt.value
                                    ? "border-primary bg-primary/5 text-foreground"
                                    : "border-border text-muted-foreground hover:border-primary/40"
                                }`}
                              >
                                <RadioGroupItem value={opt.value} id={`post-${opt.value}`} className="sr-only" />
                                {opt.label}
                              </Label>
                            ))}
                          </RadioGroup>
                        </div>
                      )}

                      {projectType === "fence" && (
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="small-gates" className="mb-1.5 block text-sm">
                              3'–5' Gates ($640 ea)
                            </Label>
                            <Input
                              id="small-gates"
                              type="number"
                              min="0"
                              value={smallGates}
                              onChange={(e) => setSmallGates(e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="large-gates" className="mb-1.5 block text-sm">
                              5'–8' Gates ($720 ea)
                            </Label>
                            <Input
                              id="large-gates"
                              type="number"
                              min="0"
                              value={largeGates}
                              onChange={(e) => setLargeGates(e.target.value)}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1" onClick={() => setStep(2)}>
                        Back
                      </Button>
                      <Button className="flex-1" size="lg" disabled={!canCalculate} onClick={handleCalculate}>
                        <Calculator className="mr-2 h-4 w-4" /> Get Estimate
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ) : (
            /* Result card */
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="space-y-6 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Estimated Range
                  </p>
                  <p className="mt-1 font-display text-4xl font-bold text-foreground md:text-5xl">
                    ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
                  </p>
                </div>

                <div className="mx-auto max-w-sm space-y-1 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Project:</span>{" "}
                    {projectType === "deck" ? "Deck" : "Fence"}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Material:</span>{" "}
                    {materialLabel}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Size:</span>{" "}
                    {estimate.size} {estimate.unit}
                    {projectType === "deck" && ` × ${DECK_HEIGHTS.find(h => h.value === deckHeight)?.label} tall`}
                    {projectType === "fence" && ` × ${fenceHeight} ft tall`}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground">
                  * This is a rough estimate. Final pricing depends on site conditions,
                  permits, and design complexity. Contact us for an accurate quote.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button variant="outline" className="flex-1" onClick={resetCalculator}>
                    Start Over
                  </Button>
                  <Button className="flex-1" size="lg" asChild>
                    <Link to="/schedule">Schedule a Call</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Estimate;
