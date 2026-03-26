import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { PILLARS, MFR_FEATURES, CARRIER_FEATURES, VAL_DRIVERS } from "@/lib/data";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import CtaBanner from "@/components/CtaBanner";
import PlatformWalkthrough from "@/components/PlatformWalkthrough";
import { useScheduleDemo } from "@/hooks/useScheduleDemo";

const PROD_STATS = [
  { n: '$2.5Bn+', l: 'Spend Analyzed', c: '#393185' },
  { n: '2200+', l: 'Carriers', c: '#1AA6DF' },
  { n: '80K+', l: 'Routes', c: '#54AF3A' },
  { n: '100+', l: 'Truck Types', c: '#fb923c' },
];

const CREDIBILITY_STATS = [
  { n: '120+', l: 'Countries', icon: '🌍' },
  { n: '500M+', l: 'Shipment Records', icon: '📦' },
  { n: '2B+', l: 'Trade Data Points', icon: '📊' },
  { n: '300+', l: 'Commodities Tracked', icon: '🏷️' },
  { n: '$2.5Bn+', l: 'Freight Analyzed', icon: '💰' },
  { n: '50K+', l: 'Lanes Benchmarked', icon: '🛤️' },
];

const TRUSTED_LOGOS = [
  { name: 'Apollo Tyres', src: '/logo/Apollo.png' },
  { name: 'CEAT', src: '/logos/ceat.png' },
  { name: 'CJ Darcl', src: '/logo/CJ_Darcl.png' },
  { name: 'DHL', src: '/logo/dhl-logo.png' },
  { name: 'Fiege', src: '/logo/fiege-logo.png' },
  { name: 'General Mills', src: '/logo/general-mills.png' },
  { name: 'Jyothy Labs', src: '/logo/Jyothy_Labs_Logo.png' },
  { name: 'Kimberly-Clark', src: '/logo/kimberly+clark.png' },
  { name: 'Maersk', src: '/logo/maersk.png' },
  { name: 'Rhenus', src: '/logo/Rhenus_Logistics.png' },
  { name: 'Saint-Gobain', src: '/logo/Saint-Gobain-Logo.png' },
  { name: 'Sennder', src: '/logos/sennder.png' },
  { name: 'Shell', src: '/logo/Shell.png' },
  { name: 'TOLL', src: '/logo/toll-group.png' },
  { name: 'Quehenberger', src: '/logo/Quehenberger.png' },
  { name: 'Vredestein', src: '/logo/Vredestein.png' },
];

const HOW_IT_WORKS_STEPS = [
  { num: '01', title: 'Upload Lanes / RFQs', desc: 'Import your shipping lanes, volumes, and requirements in minutes', icon: '📤', color: '#393185' },
  { num: '02', title: 'AI Benchmarks Pricing', desc: 'Instant market rate benchmarking using 2B+ data points across global lanes', icon: '📊', color: '#1AA6DF' },
  { num: '03', title: 'Run Auctions / Sourcing', desc: 'Automated carrier sourcing with AI-powered auction management', icon: '⚡', color: '#54AF3A' },
  { num: '04', title: 'AI Allocates Carriers', desc: 'Smart carrier recommendation and allocation based on performance, cost & reliability', icon: '🤖', color: '#fb923c' },
  { num: '05', title: 'Track Execution', desc: 'Real-time shipment tracking with proactive exception management', icon: '📍', color: '#393185' },
  { num: '06', title: 'Reconcile & Pay', desc: 'Automated invoice reconciliation and faster carrier payments', icon: '💳', color: '#1AA6DF' },
];

const AI_CAPABILITIES = [
  { icon: '🎯', title: 'Lane-Level Pricing Prediction', desc: 'Predicts lane-level pricing using 2B+ historical and real-time data points', color: '#393185' },
  { icon: '📉', title: 'Overpriced Lane Detection', desc: 'Identifies underpriced vs overpriced lanes — so you never overpay', color: '#ef4444' },
  { icon: '🏆', title: 'Carrier Shortlisting', desc: 'Auto-shortlists top 5 carriers per lane based on performance, price & reliability', color: '#54AF3A' },
  { icon: '🤝', title: 'Negotiation Simulations', desc: 'Runs AI-powered negotiation scenarios to find optimal pricing strategies', color: '#1AA6DF' },
  { icon: '📡', title: '24/7 Market Monitoring', desc: 'Autonomous agents monitor freight markets round-the-clock for rate changes & opportunities', color: '#fb923c' },
  { icon: '📋', title: 'Demand Forecasting', desc: 'Predicts shipment volumes and capacity needs before they happen', color: '#393185' },
];

const COMPARISON_DATA = [
  { category: 'Rate Intelligence', traditional: 'Static rates from brokers', lorri: 'Dynamic AI benchmarks from 2B+ data points' },
  { category: 'Carrier Sourcing', traditional: 'Manual RFQs over weeks', lorri: 'AI-driven sourcing in hours' },
  { category: 'Visibility', traditional: 'Fragmented spreadsheets', lorri: 'Real-time unified intelligence' },
  { category: 'Pricing', traditional: 'Gut-feel negotiations', lorri: 'Data-backed predictive pricing' },
  { category: 'Procurement Cycle', traditional: '2–4 weeks per cycle', lorri: '2–3 days end-to-end' },
  { category: 'Invoice Reconciliation', traditional: 'Manual, error-prone', lorri: 'Automated & instant' },
];

const Product = () => {
  const [heroPillar, setHeroPillar] = useState(0);
  const [activePillar, setActivePillar] = useState(0);
  const [audience, setAudience] = useState<'mfr' | 'carrier'>('mfr');
  const [pillarPaused, setPillarPaused] = useState(false);
  const [pillarProgress, setPillarProgress] = useState(0);
  const pillarIntervalRef = useRef<number | null>(null);
  const pillarProgressRef = useRef<number | null>(null);
  const { setOpen } = useScheduleDemo();

  const PILLAR_INTERVAL = 5000;

  const advancePillar = useCallback(() => {
    setActivePillar((prev) => (prev + 1) % PILLARS.length);
    setPillarProgress(0);
  }, []);

  useEffect(() => {
    setActivePillar(0);
    setPillarProgress(0);
  }, []);

  useEffect(() => {
    if (pillarPaused) {
      if (pillarIntervalRef.current) clearInterval(pillarIntervalRef.current);
      if (pillarProgressRef.current) clearInterval(pillarProgressRef.current);
      return;
    }

    setPillarProgress(0);
    const progressStep = 50;
    pillarProgressRef.current = window.setInterval(() => {
      setPillarProgress((prev) => Math.min(prev + (progressStep / PILLAR_INTERVAL) * 100, 100));
    }, progressStep);

    pillarIntervalRef.current = window.setInterval(() => {
      advancePillar();
    }, PILLAR_INTERVAL);

    return () => {
      if (pillarIntervalRef.current) clearInterval(pillarIntervalRef.current);
      if (pillarProgressRef.current) clearInterval(pillarProgressRef.current);
    };
  }, [pillarPaused, activePillar, advancePillar]);

  const features = audience === 'mfr' ? MFR_FEATURES : CARRIER_FEATURES;
  const valItems = [...VAL_DRIVERS, ...VAL_DRIVERS, ...VAL_DRIVERS];
  const orbitLabels = [
    "Deep Discovery",
    "Rapid Procurement",
    "Digitalize Operation (in days)",
    "LoRRI Pay (10x faster!)",
  ];

  return (
    <div>
      {/* ═══════════════ HERO ═══════════════ */}
      <div className="px-[5vw] pt-[12px] pb-[28px] relative overflow-hidden bg-background">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(57,49,133,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(57,49,133,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(57,49,133,0.22) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-[10%] left-[10%] w-[500px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(26,166,223,0.10) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-[5%] w-[400px] h-[350px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(84,175,58,0.08) 0%, transparent 70%)' }} />

        <div className="max-w-[1280px] mx-auto relative z-[2]">
          <div className="flex items-center gap-[7px] text-xs font-semibold tracking-[0.07em] uppercase text-muted-foreground mb-3">
            <Link to="/" className="no-underline text-muted-foreground font-body">Home</Link>
            <span>›</span>
            <span className="text-ln-purple">Products</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="up">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10.5px] font-bold tracking-[0.09em] uppercase mb-3" style={{ background: 'rgba(26,166,223,.10)', border: '1px solid rgba(26,166,223,.25)', color: '#1AA6DF' }}>
                  <span className="w-[7px] h-[7px] rounded-full" style={{ background: '#1AA6DF', boxShadow: '0 0 8px #1AA6DF' }} />
                  Procurement Infrastructure for Logistics
                </div>
                <h1 className="font-display font-extrabold leading-[1.03] tracking-[-0.035em] mb-3 heading-hero">
                  The Operating System<br />for <span className="text-ln-green">Logistics Procurement</span>
                </h1>
                <p className="text-[13.5px] text-muted-foreground leading-[1.6] max-w-[460px] mb-3">
                  From benchmarking and sourcing to execution and payments — LoRRI uses AI to run your entire logistics procurement lifecycle. Powered by <strong className="text-foreground">2B+ data points</strong> across global supply chains.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {PROD_STATS.map((s) => (
                    <div key={s.l} className="px-2.5 py-1.5 rounded-[10px] bg-surface flex flex-col items-center min-w-[72px]">
                      <div className="font-display text-base font-extrabold tracking-[-0.03em]" style={{ color: s.c }}>{s.n}</div>
                      <div className="text-[10px] text-muted-foreground font-semibold mt-0.5 text-center">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3.5 flex-wrap">
                  <button onClick={() => setOpen(true)} className="btn-primary-ln !px-5 !py-2.5 !text-[13px]">📅 Schedule Demo →</button>
                  <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary-ln !px-5 !py-2.5 !text-[13px]">🚀 How It Works ↓</button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[360px]">
                <div className="absolute inset-0 rounded-[28px] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(57,49,133,0.12) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                <div className="relative aspect-square w-[min(100%,320px)] sm:w-[360px]">
                  <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 360 360">
                    <defs>
                      <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#393185" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#393185" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="180" cy="180" r="160" fill="url(#orbGlow)" />
                    <circle cx="180" cy="180" r="135" fill="none" stroke="rgba(57,49,133,0.15)" strokeWidth="1.5" strokeDasharray="5 8" />
                    <circle cx="180" cy="180" r="72" fill="none" stroke="rgba(57,49,133,0.2)" strokeWidth="1" strokeDasharray="3 5" />
                    <circle cx="180" cy="180" r="36" fill="none" stroke="rgba(57,49,133,0.15)" strokeWidth="1" />
                    {PILLARS.map((p, i) => {
                      const angles = [-90, 0, 90, 180];
                      const rad = (angles[i] * Math.PI) / 180;
                      const x2 = 180 + 135 * Math.cos(rad);
                      const y2 = 180 + 135 * Math.sin(rad);
                      return <line key={i} x1="180" y1="180" x2={x2} y2={y2} stroke={p.color} strokeWidth="1" strokeOpacity={i === heroPillar ? 0.45 : 0.15} strokeDasharray="4 6" />;
                    })}
                    <g style={{ transformOrigin: "180px 180px", animation: "spinCW 8s linear infinite" }}>
                      <circle cx="180" cy="45" r="4" fill="#1AA6DF" opacity="0.9" style={{ filter: "drop-shadow(0 0 8px #1AA6DF)" }} />
                    </g>
                    <g style={{ transformOrigin: "180px 180px", animation: "spinCCW 14s linear infinite" }}>
                      <circle cx="180" cy="108" r="3" fill="#54AF3A" opacity="0.7" style={{ filter: "drop-shadow(0 0 6px #54AF3A)" }} />
                    </g>
                    <circle cx="180" cy="180" r="32" fill="rgba(57,49,133,0.2)" stroke="#393185" strokeWidth="1.5" />
                  </svg>
                  <div className="pointer-events-none absolute left-1/2 top-1/2 z-[3] w-14 -translate-x-1/2 -translate-y-1/2 text-center sm:w-16">
                    <div className="font-display text-sm font-extrabold leading-[1.1] tracking-[-0.02em] gradient-lorri sm:text-base">LoRRI</div>
                    <div className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.15em] text-muted-foreground">AI COPILOT</div>
                  </div>
                  {PILLARS.map((p, i) => {
                    const angles = [-90, 0, 90, 180];
                    const rad = (angles[i] * Math.PI) / 180;
                    const nx = 180 + 135 * Math.cos(rad);
                    const ny = 180 + 135 * Math.sin(rad);
                    const isActive = i === heroPillar;
                    const labelStyle: React.CSSProperties = i === 0
                      ? { top: -28, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }
                      : i === 1
                        ? { left: 62, top: "50%", transform: "translateY(-50%)", whiteSpace: "nowrap" }
                        : i === 2
                          ? { bottom: -28, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }
                          : { right: 62, top: "50%", transform: "translateY(-50%)", whiteSpace: "nowrap" };
                    return (
                      <div
                        key={i}
                        className="absolute z-[4] h-12 w-12 cursor-pointer -translate-x-1/2 -translate-y-1/2 sm:h-14 sm:w-14"
                        style={{ left: nx, top: ny }}
                        onClick={() => setHeroPillar(i)}
                      >
                        <div className="absolute -inset-2 rounded-full transition-all duration-300" style={{ border: `2px solid ${p.color}`, opacity: isActive ? 0.75 : 0.3, boxShadow: isActive ? `0 0 20px ${p.color}` : "none" }} />
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-[18px] transition-all duration-300 sm:h-14 sm:w-14 sm:text-[20px]" style={{ border: `2px solid ${p.color}`, boxShadow: isActive ? "0 0 28px rgba(0,0,0,.3)" : "none" }}>
                          {p.icon}
                        </div>
                        <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full font-mono text-[7px] font-extrabold text-primary-foreground sm:h-[18px] sm:w-[18px] sm:text-[8px]" style={{ background: p.color }}>
                          {p.num}
                        </div>
                        <div className="absolute hidden text-[10px] font-bold sm:block" style={{ ...labelStyle, color: p.color }}>
                          <span style={{ margin: "-2%" }}>{orbitLabels[i]}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ═══════════════ ENTERPRISE TRUST STRIP ═══════════════ */}
      <div className="bg-bg2 border-y border-border py-4 px-[5vw]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {[
              { icon: '🔒', label: 'SOC2 Ready' },
              { icon: '🔐', label: 'Enterprise-Grade Security' },
              { icon: '🌍', label: 'Multi-Region Compliant' },
              { icon: '🏢', label: 'Trusted by Fortune 500 Supply Chains' },
              { icon: '📜', label: 'GDPR Compliant' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-[12px] font-semibold text-muted-foreground">
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ PROBLEM → SOLUTION ═══════════════ */}
      <section className="section-std bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 30%, rgba(251,146,60,0.06), transparent)' }} />
        <div className="max-w-[1280px] mx-auto relative z-[1]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* The Problem */}
            <ScrollReveal direction="up">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase mb-3" style={{ color: '#ef4444' }}>
                  <span className="w-6 h-[2.5px] rounded-sm inline-block" style={{ background: '#ef4444' }} />
                  The Problem
                </div>
                <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] mb-3 heading-section">
                  Logistics Procurement is <span style={{ color: '#ef4444' }}>Broken</span>
                </h2>
                <p className="text-muted-foreground text-body-lg mb-4 max-w-[480px]">
                  Global logistics data is fragmented across silos, freight pricing is unpredictable, and supply chain decisions are painfully slow.
                </p>
                <div className="space-y-2.5">
                  {[
                    { icon: '📊', pain: 'Fragmented Data', desc: 'Rates scattered across emails, spreadsheets & broker calls' },
                    { icon: '💸', pain: 'Unpredictable Pricing', desc: 'No visibility into market rates — you overpay without knowing' },
                    { icon: '🐌', pain: 'Slow Decisions', desc: 'Procurement cycles take weeks; the market moves in hours' },
                    { icon: '🔒', pain: 'Information Asymmetry', desc: 'Carriers know more about rates than you do' },
                  ].map((item) => (
                    <div key={item.pain} className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-display text-[14px] font-bold">{item.pain}</div>
                        <div className="text-[12.5px] text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* The Solution */}
            <ScrollReveal direction="up" delay={0.15}>
              <div>
                <div className="section-tag">The Solution</div>
                <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] mb-3 heading-section">
                  From RFQ to Payment —<br /><span className="text-ln-green">Fully Automated</span>
                </h2>
                <p className="text-muted-foreground text-body-lg mb-4 max-w-[480px]">
                  LoRRI automates your entire logistics procurement lifecycle — from benchmarking and sourcing to execution and payments — powered by real-time intelligence.
                </p>
                <div className="space-y-2.5">
                  {[
                    { icon: '🧠', solve: 'Unified Intelligence', desc: 'All freight data in one platform — benchmarks, rates & carrier insights', color: '#393185' },
                    { icon: '📈', solve: 'Predictive Pricing', desc: 'AI predicts lane-level pricing using 2B+ data points', color: '#1AA6DF' },
                    { icon: '⚡', solve: 'Instant Procurement', desc: 'From RFQ to award in hours — not weeks', color: '#54AF3A' },
                    { icon: '🤖', solve: 'Autonomous AI Agents', desc: 'Agents that monitor, negotiate and optimize 24/7', color: '#fb923c' },
                  ].map((item) => (
                    <div key={item.solve} className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0" style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-display text-[14px] font-bold">{item.solve}</div>
                        <div className="text-[12.5px] text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW LORRI WORKS ═══════════════ */}
      <section id="how-it-works" className="section-std bg-bg2 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 30%, rgba(57,49,133,0.06), transparent)' }} />
        <div className="max-w-[1280px] mx-auto relative z-[1]">
          <ScrollReveal direction="up">
            <div className="text-center mb-8">
              <div className="section-tag mx-auto">How It Works</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] heading-section">
                From Upload to Payment in <span className="text-ln-green">6 Steps</span>
              </h2>
              <p className="text-muted-foreground text-body-lg mt-2 max-w-[560px] mx-auto">
                LoRRI replaces your entire logistics procurement workflow — end to end — with AI-powered automation.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2" style={{ background: 'linear-gradient(90deg, #393185, #1AA6DF, #54AF3A, #fb923c, #393185, #1AA6DF)' }} />

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <StaggerItem key={step.num}>
                  <div className="relative bg-card border border-border rounded-[16px] p-5 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0" style={{ background: `${step.color}15`, border: `2px solid ${step.color}40` }}>
                        {step.icon}
                      </div>
                      <div className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: step.color }}>
                        Step {step.num}
                      </div>
                    </div>
                    <div className="font-display text-[16px] font-bold mb-1.5">{step.title}</div>
                    <div className="text-[12.5px] text-muted-foreground leading-[1.6]">{step.desc}</div>
                    {/* Arrow connector for desktop */}
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-[2] text-muted-foreground/30 text-lg">
                      {step.num !== '06' && '→'}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHAT AI ACTUALLY DOES ═══════════════ */}
      <section className="section-std bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 60% at 20% 40%, rgba(84,175,58,0.06), transparent)' }} />
        <div className="max-w-[1280px] mx-auto relative z-[1]">
          <ScrollReveal direction="up">
            <div className="mb-6">
              <div className="section-tag">AI That Delivers</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] heading-section">
                What Our AI <span className="text-ln-green">Actually Does</span>
              </h2>
              <p className="text-muted-foreground text-body-lg mt-2 max-w-[560px]">
                No buzzwords. Here's exactly how LoRRI's AI works for your logistics procurement — with real, measurable outcomes.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AI_CAPABILITIES.map((cap) => (
              <StaggerItem key={cap.title}>
                <div className="bg-card border border-border rounded-[14px] p-5 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[20px] mb-3" style={{ background: `${cap.color}12`, border: `1px solid ${cap.color}25` }}>
                    {cap.icon}
                  </div>
                  <div className="font-display text-[15px] font-bold mb-1.5">{cap.title}</div>
                  <div className="text-[12.5px] text-muted-foreground leading-[1.65]">{cap.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════ PLATFORM WALKTHROUGH ═══════════════ */}
      <section className="section-std bg-bg2 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 20%, rgba(57,49,133,0.08), transparent)' }} />
        <div className="max-w-[1280px] mx-auto relative z-[1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="up">
              <div>
                <div className="section-tag">Platform Walkthrough</div>
                <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] mb-4 heading-section">
                  See LoRRI <span className="text-ln-green">in Action</span>
                </h2>
                <p className="text-muted-foreground text-body-lg mb-4 max-w-[480px]">
                  Watch how LoRRI transforms freight procurement from fragmented spreadsheets into an intelligent, AI-driven workflow — in minutes.
                </p>
                <div className="flex flex-col gap-2.5 mb-5">
                  {[
                    { icon: '🔍', title: 'Deep Discovery', desc: 'AI-powered carrier matching across 80K+ routes' },
                    { icon: '⚡', title: 'Rapid Procurement', desc: 'From indent to award in minutes, not days' },
                    { icon: '📊', title: 'Live Intelligence', desc: 'Real-time dashboards with actionable insights' },
                    { icon: '🤖', title: 'AI Agents at Work', desc: 'Autonomous negotiation, routing & optimization' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3.5 group">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0 transition-transform group-hover:scale-110" style={{ background: 'rgba(57,49,133,0.08)', border: '1px solid rgba(57,49,133,0.15)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-display text-[15px] font-bold">{item.title}</div>
                        <div className="text-[13px] text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={() => setOpen(true)} className="btn-primary-ln no-underline !px-7 !py-3 !text-[15px]">
                  Schedule a Live Demo →
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <PlatformWalkthrough />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ DATA CREDIBILITY — BLOOMBERG TERMINAL ═══════════════ */}
      <section className="py-[28px] px-[5vw] bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 30% 50%, rgba(26,166,223,0.06), transparent)' }} />
        <div className="max-w-[1280px] mx-auto relative z-[1]">
          <ScrollReveal direction="up">
            <div className="text-left mb-5">
              <div className="section-tag">Global Data Coverage</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] heading-section">
                The <span className="text-ln-green">Bloomberg Terminal</span> for Logistics
              </h2>
              <p className="text-left text-muted-foreground text-body-lg mt-2 max-w-[560px]">
                Unlike traditional TMS or brokers, LoRRI gives you real-time market intelligence — powered by the world's largest logistics dataset.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats Grid */}
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {CREDIBILITY_STATS.map((stat) => (
              <StaggerItem key={stat.l}>
                <div className="bg-card border border-border rounded-[14px] p-4 text-center hover:shadow-lg transition-shadow">
                  <div className="text-[22px] mb-1.5">{stat.icon}</div>
                  <div className="font-display text-[20px] font-extrabold text-ln-purple">{stat.n}</div>
                  <div className="text-[11px] text-muted-foreground font-semibold mt-1">{stat.l}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Comparison Table: Traditional vs LoRRI */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-card border border-border rounded-[16px] overflow-hidden mb-6">
              <div className="px-5 py-3 border-b border-border">
                <div className="font-display text-[15px] font-bold">Traditional Logistics vs LoRRI</div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left px-5 py-3 font-bold text-muted-foreground text-[11px] uppercase tracking-[0.08em]">Capability</th>
                      <th className="text-left px-5 py-3 font-bold text-[11px] uppercase tracking-[0.08em]" style={{ color: '#ef4444' }}>Traditional</th>
                      <th className="text-left px-5 py-3 font-bold text-[11px] uppercase tracking-[0.08em]" style={{ color: '#54AF3A' }}>LoRRI AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_DATA.map((row, i) => (
                      <tr key={row.category} className={i < COMPARISON_DATA.length - 1 ? 'border-b border-border/50' : ''}>
                        <td className="px-5 py-3 font-semibold">{row.category}</td>
                        <td className="px-5 py-3 text-muted-foreground">{row.traditional}</td>
                        <td className="px-5 py-3 font-semibold" style={{ color: '#54AF3A' }}>{row.lorri}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* Trusted By Logos */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center">
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-3">
                Trusted by Industry Leaders
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {TRUSTED_LOGOS.map((logo) => (
                  <div key={logo.name} className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center w-[100px] h-[40px]">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-[36px] max-w-[90px] w-auto h-auto object-contain"
                      loading="lazy"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ ROI SECTION ═══════════════ */}
      <section className="section-std bg-bg2 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 60% at 70% 50%, rgba(84,175,58,0.08), transparent)' }} />
        <div className="max-w-[1280px] mx-auto relative z-[1]">
          <ScrollReveal direction="up">
            <div className="text-center mb-6">
              <div className="section-tag mx-auto">Business Impact</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] heading-section">
                What This Means for <span className="text-ln-green">Your Business</span>
              </h2>
              <p className="text-muted-foreground text-body-lg mt-2 max-w-[560px] mx-auto">
                If you manage ₹100 Cr+ in logistics spend, here's the measurable impact LoRRI delivers from day one.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: '₹8–20 Cr', label: 'Annual Savings', desc: 'On a ₹100 Cr logistics spend through AI-optimized sourcing', icon: '💰', color: '#54AF3A' },
              { metric: '3 Weeks → 3 Days', label: 'Procurement Cycle', desc: 'Reduce procurement cycle time by 85% with automated workflows', icon: '⚡', color: '#1AA6DF' },
              { metric: '15–25%', label: 'Fill Rate Improvement', desc: 'Better carrier matching leads to higher fill rates and fewer empty miles', icon: '📈', color: '#393185' },
              { metric: '60%', label: 'Manual Ops Reduction', desc: 'Automate repetitive procurement tasks and free up your team', icon: '🤖', color: '#fb923c' },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="bg-card border border-border rounded-[16px] p-5 text-center hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-[28px] mb-2">{item.icon}</div>
                  <div className="font-display text-[22px] font-extrabold mb-1" style={{ color: item.color }}>{item.metric}</div>
                  <div className="font-display text-[14px] font-bold mb-1.5">{item.label}</div>
                  <div className="text-[12px] text-muted-foreground leading-[1.6]">{item.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mt-6">
              <button onClick={() => setOpen(true)} className="btn-primary-ln !px-8 !py-3 !text-[15px]">
                📅 Calculate Your ROI — Schedule Demo →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ AUDIENCE TOGGLE ═══════════════ */}
      <section className="section-std bg-background">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="section-tag">One Platform, Two Ecosystems</div>
            <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] mb-4 heading-section">
              Built for Both Sides of <span className="text-ln-green">Logistics</span>
            </h2>
            <p className="text-muted-foreground text-body-lg mb-4 max-w-[580px]">
              One unified platform with tailored experiences — driving value for both shippers and carriers.
            </p>
            <div className="inline-flex mt-6 bg-surface border border-border rounded-full p-1 gap-1">
              <button
                onClick={() => setAudience('mfr')}
                className={`px-7 py-2.5 rounded-full text-sm font-bold border-none cursor-pointer transition-all duration-300 font-body ${audience === 'mfr' ? 'text-white' : 'text-muted-foreground bg-transparent'}`}
                style={audience === 'mfr' ? { background: 'linear-gradient(135deg,#393185,#1AA6DF)', boxShadow: '0 4px 16px rgba(57,49,133,.4)' } : {}}
              >
                🏭 Shippers
              </button>
              <button
                onClick={() => setAudience('carrier')}
                className={`px-7 py-2.5 rounded-full text-sm font-bold border-none cursor-pointer transition-all duration-300 font-body ${audience === 'carrier' ? 'text-white' : 'text-muted-foreground bg-transparent'}`}
                style={audience === 'carrier' ? { background: 'linear-gradient(135deg,#393185,#1AA6DF)', boxShadow: '0 4px 16px rgba(57,49,133,.4)' } : {}}
              >
                🚛 Carriers / LSPs
              </button>
            </div>
          </ScrollReveal>

          {/* Sharper value props based on audience */}
          <div className="mt-4 mb-2">
            <ScrollReveal direction="up">
              <div className="flex flex-wrap gap-3">
                {audience === 'mfr' ? (
                  <>
                    {[
                      { icon: '💰', label: 'Cost Savings', desc: 'Save 8–20% on logistics spend' },
                      { icon: '🎛️', label: 'Full Control', desc: 'Own your procurement data & decisions' },
                      { icon: '👁️', label: 'Total Visibility', desc: 'Real-time spend & performance analytics' },
                    ].map((v) => (
                      <div key={v.label} className="flex items-center gap-2.5 bg-card border border-border rounded-full px-4 py-2">
                        <span className="text-base">{v.icon}</span>
                        <div>
                          <span className="font-display text-[13px] font-bold">{v.label}</span>
                          <span className="text-[11px] text-muted-foreground ml-1.5">{v.desc}</span>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {[
                      { icon: '📦', label: 'More Loads', desc: 'Access enterprise shipper demand' },
                      { icon: '🚛', label: 'Better Utilization', desc: 'AI-matched loads reduce empty miles' },
                      { icon: '💳', label: 'Faster Payments', desc: 'Get paid 10x faster with LoRRI Pay' },
                    ].map((v) => (
                      <div key={v.label} className="flex items-center gap-2.5 bg-card border border-border rounded-full px-4 py-2">
                        <span className="text-base">{v.icon}</span>
                        <div>
                          <span className="font-display text-[13px] font-bold">{v.label}</span>
                          <span className="text-[11px] text-muted-foreground ml-1.5">{v.desc}</span>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4" key={audience}>
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="card-hover">
                  <div className="text-[28px] mb-3.5">{f.icon}</div>
                  <div className="font-display text-lg font-bold mb-2">{f.title}</div>
                  <div className="text-sm text-muted-foreground leading-[1.7]">{f.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════ DESIGNED FOR STRIP ═══════════════ */}
      <div className="bg-bg2 border-y border-border py-5 px-[5vw]">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-3">
            Designed For
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              '🏢 Enterprise Shippers',
              '📋 Procurement Leaders',
              '🔗 Supply Chain Teams',
              '🏭 Manufacturing Companies',
              '🚛 3PL & LSP Partners',
            ].map((item) => (
              <div key={item} className="px-4 py-2 rounded-full bg-card border border-border text-[13px] font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ 4 PILLARS ═══════════════ */}
      <section className="py-[24px] px-[5vw] bg-background">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="mb-4">
              <div className="section-tag">The Platform</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] mb-4 heading-section">
                4 Pillars. <span className="text-ln-green">Infinite Value.</span>
              </h2>
              <p className="text-muted-foreground text-body-lg mb-4 max-w-[580px]">Industry-first logistics intelligence powering next-level value creation end-to-end.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              className="flex gap-1.5 justify-center mb-4 flex-wrap"
              onMouseEnter={() => setPillarPaused(true)}
              onMouseLeave={() => setPillarPaused(false)}
            >
              {PILLARS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => { setActivePillar(i); setPillarProgress(0); }}
                  className="relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-bold cursor-pointer transition-all duration-300 font-body overflow-hidden"
                  style={{
                    border: `1.5px solid ${i === activePillar ? p.color : 'rgba(57,49,133,0.2)'}`,
                    color: i === activePillar ? p.color : 'hsl(var(--muted-foreground))',
                    background: i === activePillar ? `${p.color}18` : 'transparent',
                    boxShadow: i === activePillar ? `0 0 20px ${p.glow}` : 'none',
                  }}
                >
                  {i === activePillar && (
                    <span
                      className="absolute bottom-0 left-0 h-[2px] transition-none"
                      style={{
                        width: `${pillarProgress}%`,
                        background: p.color,
                      }}
                    />
                  )}
                  {p.icon} {p.num} — {p.title}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {PILLARS.map((p, i) => i === activePillar && (
            <ScrollReveal key={i} direction="none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start bg-surface border border-border rounded-[18px] p-5" style={{ borderColor: `${p.color}22`, boxShadow: `0 0 60px ${p.glow}18` }}>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3" style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                    <span className="text-base">{p.icon}</span>
                    <span className="text-[10px] font-bold tracking-[0.1em] uppercase" style={{ color: p.color }}>{p.sub}</span>
                  </div>
                  <div className="font-mono text-xs font-bold tracking-[0.04em] mb-1" style={{ color: p.color }}>{p.num} / 04</div>
                  <div className="font-display font-extrabold tracking-[-0.025em] mb-2" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}>{p.title}</div>
                  <p className="text-[13px] text-muted-foreground leading-[1.6] mb-3">{p.desc}</p>
                  <div className="flex flex-col gap-1.5">
                    {p.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-[12.5px] text-muted-foreground leading-[1.5]">
                        <span className="font-bold flex-shrink-0 mt-px" style={{ color: p.color }}>✓</span>{b}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-2">Platform Modules</div>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <div key={t} className="px-3 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5" style={{ background: `${p.color}12`, border: `1px solid ${p.color}30`, color: p.color }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }} />{t}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[12px] p-3.5" style={{ background: `linear-gradient(135deg, ${p.color}12, transparent)`, border: `1px solid ${p.color}22` }}>
                    <div className="font-mono text-[10px] text-muted-foreground tracking-[0.05em] mb-2">// PLATFORM IMPACT</div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {p.impact.map((cell) => (
                        <div key={cell[1]} className="text-center p-2.5 rounded-lg" style={{ background: 'rgba(57,49,133,.05)' }}>
                          <div className="font-display text-[18px] font-extrabold" style={{ color: cell[2] }}>{cell[0]}</div>
                          <div className="text-[9.5px] text-muted-foreground mt-0.5">{cell[1]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* VALUE MARQUEE */}
      <div className="bg-bg3 border-y border-border py-5 overflow-hidden">
        <div className="flex gap-12 animate-marquee-fast w-max">
          {valItems.map((v, i) => (
            <span key={i} className="flex items-center gap-3 font-display text-sm font-bold tracking-[0.04em] text-muted-foreground whitespace-nowrap opacity-70">
              <span className="w-1.5 h-1.5 rounded-full bg-ln-green inline-block" style={{ boxShadow: '0 0 6px hsl(107 50% 46%)' }} />{v}
            </span>
          ))}
        </div>
      </div>

      <CtaBanner />
    </div>
  );
};

export default Product;
