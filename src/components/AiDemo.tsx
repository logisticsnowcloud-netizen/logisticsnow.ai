import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEMO_SCENARIOS = [
  {
    product: "Lithium Batteries",
    origin: "Shanghai, China",
    destination: "Hamburg, Germany",
    results: {
      avgRate: "$2,840",
      rateChange: "+4.2%",
      transitDays: "28–32",
      bestMode: "Ocean FCL",
      riskLevel: "Medium",
      carriers: 14,
      co2: "2.1 tonnes",
      insights: [
        "Red Sea disruptions adding 8–12 days via Cape route",
        "Rate spike expected Q2 due to IMO 2025 surcharge",
        "3 carriers offering green fuel surcharge discounts",
      ],
      tradeFlow: { volume: "1.2M TEU/yr", trend: "↑ 12% YoY", competitors: 847 },
    },
  },
  {
    product: "Auto Parts",
    origin: "Pune, India",
    destination: "Detroit, USA",
    results: {
      avgRate: "$3,560",
      rateChange: "-1.8%",
      transitDays: "35–40",
      bestMode: "Ocean + Rail",
      riskLevel: "Low",
      carriers: 22,
      co2: "3.4 tonnes",
      insights: [
        "Multi-modal via Nhava Sheva saves 6% vs air",
        "US tariff adjustments expected in Q3",
        "Backhaul availability high on this corridor",
      ],
      tradeFlow: { volume: "890K TEU/yr", trend: "↑ 8% YoY", competitors: 534 },
    },
  },
  {
    product: "Organic Food",
    origin: "São Paulo, Brazil",
    destination: "London, UK",
    results: {
      avgRate: "$1,920",
      rateChange: "+2.1%",
      transitDays: "18–22",
      bestMode: "Reefer Container",
      riskLevel: "High",
      carriers: 9,
      co2: "1.8 tonnes",
      insights: [
        "Cold-chain compliance requires pre-cooling 48hrs",
        "Santos port congestion adding 2–3 day delays",
        "Temperature-controlled capacity tight in peak season",
      ],
      tradeFlow: { volume: "420K TEU/yr", trend: "↑ 18% YoY", competitors: 312 },
    },
  },
];

const AiDemo = () => {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const scenario = DEMO_SCENARIOS[selectedScenario];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setShowResults(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const handleScenarioChange = (idx: number) => {
    setSelectedScenario(idx);
    setShowResults(false);
    setIsAnalyzing(false);
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
          lorri-ai-analyzer.sh — LoRRI Supply Chain Intelligence
        </div>
      </div>

      <div className="p-5">
        {/* Scenario Selector */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {DEMO_SCENARIOS.map((s, i) => (
            <button
              key={i}
              onClick={() => handleScenarioChange(i)}
              className="px-3 py-1.5 rounded-full text-[11px] font-bold cursor-pointer transition-all font-body border-none"
              style={{
                background: i === selectedScenario ? "hsl(var(--ln-purple))" : "hsl(var(--surface))",
                color: i === selectedScenario ? "#fff" : "hsl(var(--muted-foreground))",
                border: `1px solid ${i === selectedScenario ? "hsl(var(--ln-purple))" : "hsl(var(--border))"}`,
              }}
            >
              {s.product}
            </button>
          ))}
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="bg-surface rounded-lg p-3 border border-border">
            <div className="text-[9px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-1">📦 Product</div>
            <div className="font-display text-[13px] font-bold">{scenario.product}</div>
          </div>
          <div className="bg-surface rounded-lg p-3 border border-border">
            <div className="text-[9px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-1">🚢 Origin</div>
            <div className="font-display text-[13px] font-bold">{scenario.origin}</div>
          </div>
          <div className="bg-surface rounded-lg p-3 border border-border">
            <div className="text-[9px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-1">📍 Destination</div>
            <div className="font-display text-[13px] font-bold">{scenario.destination}</div>
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
              {["Scanning freight markets...", "Analyzing trade flows...", "Running rate prediction model..."].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.6 }}
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
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* KPI Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                {[
                  { label: "Avg Rate", value: scenario.results.avgRate, sub: scenario.results.rateChange, color: "#393185" },
                  { label: "Transit", value: scenario.results.transitDays, sub: "days", color: "#1AA6DF" },
                  { label: "Best Mode", value: scenario.results.bestMode, sub: `${scenario.results.carriers} carriers`, color: "#54AF3A" },
                  { label: "CO₂ Footprint", value: scenario.results.co2, sub: `Risk: ${scenario.results.riskLevel}`, color: "#fb923c" },
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
                  {scenario.results.insights.map((insight, i) => (
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
                  { label: "Trade Volume", value: scenario.results.tradeFlow.volume },
                  { label: "Growth", value: scenario.results.tradeFlow.trend },
                  { label: "Active Competitors", value: scenario.results.tradeFlow.competitors.toString() },
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
