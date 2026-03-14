import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const PRESET_SCENARIOS = [
  { product: "Lithium Batteries", origin: "Shanghai, China", destination: "Hamburg, Germany" },
  { product: "Auto Parts", origin: "Pune, India", destination: "Detroit, USA" },
  { product: "Organic Food", origin: "São Paulo, Brazil", destination: "London, UK" },
];

interface AnalysisResult {
  avgRate: string;
  rateChange: string;
  transitDays: string;
  bestMode: string;
  riskLevel: string;
  carriers: number;
  co2: string;
  insights: string[];
  tradeFlow: { volume: string; trend: string; competitors: number };
}

const AiDemo = () => {
  const [product, setProduct] = useState(PRESET_SCENARIOS[0].product);
  const [origin, setOrigin] = useState(PRESET_SCENARIOS[0].origin);
  const [destination, setDestination] = useState(PRESET_SCENARIOS[0].destination);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [activePreset, setActivePreset] = useState(0);

  const handlePreset = (idx: number) => {
    setActivePreset(idx);
    setProduct(PRESET_SCENARIOS[idx].product);
    setOrigin(PRESET_SCENARIOS[idx].origin);
    setDestination(PRESET_SCENARIOS[idx].destination);
    setResults(null);
  };

  const handleAnalyze = async () => {
    if (!product.trim() || !origin.trim() || !destination.trim()) {
      toast({ title: "Missing fields", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }

    setIsAnalyzing(true);
    setResults(null);

    try {
      const { data, error } = await supabase.functions.invoke("ai-logistics-analyzer", {
        body: { product, origin, destination },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setResults(data as AnalysisResult);
    } catch (err: any) {
      console.error("AI Demo error:", err);
      toast({
        title: "Analysis failed",
        description: err?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="rounded-[18px] border border-border bg-card overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <div className="font-mono text-[10px] text-muted-foreground tracking-wider ml-2">
          lorri-ai-analyzer — Live AI Supply Chain Intelligence
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-[6px] h-[6px] rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-[9px] text-green-500">LIVE AI</span>
        </div>
      </div>

      <div className="p-5">
        {/* Preset Selector */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {PRESET_SCENARIOS.map((s, i) => (
            <button
              key={i}
              onClick={() => handlePreset(i)}
              className="px-3 py-1.5 rounded-full text-[11px] font-bold cursor-pointer transition-all font-body border-none"
              style={{
                background: i === activePreset ? "hsl(var(--ln-purple))" : "hsl(var(--surface))",
                color: i === activePreset ? "#fff" : "hsl(var(--muted-foreground))",
                border: `1px solid ${i === activePreset ? "hsl(var(--ln-purple))" : "hsl(var(--border))"}`,
              }}
            >
              {s.product}
            </button>
          ))}
        </div>

        {/* Editable Input Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="bg-surface rounded-lg p-3 border border-border">
            <div className="text-[9px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-1">📦 Product</div>
            <input
              type="text"
              value={product}
              onChange={(e) => { setProduct(e.target.value); setActivePreset(-1); }}
              className="w-full bg-transparent font-display text-[13px] font-bold border-none outline-none text-foreground placeholder:text-muted-foreground"
              placeholder="e.g. Electronics"
            />
          </div>
          <div className="bg-surface rounded-lg p-3 border border-border">
            <div className="text-[9px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-1">🚢 Origin</div>
            <input
              type="text"
              value={origin}
              onChange={(e) => { setOrigin(e.target.value); setActivePreset(-1); }}
              className="w-full bg-transparent font-display text-[13px] font-bold border-none outline-none text-foreground placeholder:text-muted-foreground"
              placeholder="e.g. Tokyo, Japan"
            />
          </div>
          <div className="bg-surface rounded-lg p-3 border border-border">
            <div className="text-[9px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-1">📍 Destination</div>
            <input
              type="text"
              value={destination}
              onChange={(e) => { setDestination(e.target.value); setActivePreset(-1); }}
              className="w-full bg-transparent font-display text-[13px] font-bold border-none outline-none text-foreground placeholder:text-muted-foreground"
              placeholder="e.g. New York, USA"
            />
          </div>
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="btn-primary-ln !px-6 !py-2.5 !text-[13px] mb-4 disabled:opacity-60"
        >
          {isAnalyzing ? (
            <span className="flex items-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="inline-block"
              >
                ⚙️
              </motion.span>
              Analyzing with LoRRI AI...
            </span>
          ) : (
            "🤖 Run AI Analysis →"
          )}
        </button>

        {/* Loading Animation */}
        <AnimatePresence>
          {isAnalyzing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-2 mb-4"
            >
              {["Connecting to LoRRI AI...", "Scanning freight markets...", "Running rate prediction model..."].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.8 }}
                  className="flex items-center gap-2 text-[12px] font-mono text-muted-foreground"
                >
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.3 }}
                    className="text-ln-green"
                  >
                    ▸
                  </motion.span>
                  {step}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        <AnimatePresence>
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* KPI Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                {[
                  { label: "Avg Rate", value: results.avgRate, sub: results.rateChange, color: "#393185" },
                  { label: "Transit", value: results.transitDays, sub: "days", color: "#1AA6DF" },
                  { label: "Best Mode", value: results.bestMode, sub: `${results.carriers} carriers`, color: "#54AF3A" },
                  { label: "CO₂ Footprint", value: results.co2, sub: `Risk: ${results.riskLevel}`, color: "#fb923c" },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-surface rounded-lg p-3 border border-border text-center">
                    <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-muted-foreground mb-1">{kpi.label}</div>
                    <div className="font-display text-[16px] font-extrabold" style={{ color: kpi.color }}>{kpi.value}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{kpi.sub}</div>
                  </div>
                ))}
              </div>

              {/* AI Insights */}
              <div className="bg-surface rounded-lg p-3.5 border border-border mb-3">
                <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-muted-foreground mb-2">🤖 AI Insights</div>
                <div className="space-y-1.5">
                  {results.insights.map((insight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className="flex items-start gap-2 text-[12px] text-muted-foreground leading-[1.5]"
                    >
                      <span className="text-ln-green font-bold mt-px">▸</span>
                      {insight}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Trade Flow */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Trade Volume", value: results.tradeFlow.volume },
                  { label: "Growth", value: results.tradeFlow.trend },
                  { label: "Active Competitors", value: results.tradeFlow.competitors.toString() },
                ].map((tf) => (
                  <div key={tf.label} className="bg-surface rounded-lg p-2.5 border border-border text-center">
                    <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-muted-foreground mb-0.5">{tf.label}</div>
                    <div className="font-display text-[13px] font-extrabold text-ln-blue">{tf.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AiDemo;
