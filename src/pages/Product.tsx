import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { PILLARS, MFR_FEATURES, CARRIER_FEATURES, VAL_DRIVERS } from "@/lib/data";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import CtaBanner from "@/components/CtaBanner";
import PlatformWalkthrough from "@/components/PlatformWalkthrough";
import AiDemo from "@/components/AiDemo";

const PROD_STATS = [
  { n: '$2.5Bn+', l: 'Spend Analyzed', c: '#393185' },
  { n: '2200+', l: 'Carriers', c: '#1AA6DF' },
  { n: '90K+', l: 'Routes', c: '#54AF3A' },
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
  { name: 'Maersk', src: '/logos/Maersk.png' },
  { name: 'DHL', src: '/logos/dhl.png' },
  { name: 'CEVA', src: '/logos/ceva.png' },
  { name: 'DSV', src: '/logos/dsv.png' },
  { name: 'Apollo Tyres', src: '/logos/apollo-tyres.png' },
  { name: 'Perfetti', src: '/logos/perfetti.png' },
  { name: 'Saint-Gobain', src: '/logos/saint-gobain.png' },
  { name: 'Kimberly-Clark', src: '/logos/kimberly-clark.png' },
  { name: 'General Mills', src: '/logos/general-mills.png' },
  { name: 'Shell', src: '/logos/shell.png' },
  { name: 'Bajaj', src: '/logos/bajaj.png' },
  { name: 'Jyothy Labs', src: '/logos/jyothy-labs.png' },
];

const Product = () => {
  const [activePillar, setActivePillar] = useState(0);
  const [audience, setAudience] = useState<'mfr' | 'carrier'>('mfr');
  const [pillarPaused, setPillarPaused] = useState(false);
  const [pillarProgress, setPillarProgress] = useState(0);
  const pillarIntervalRef = useRef<number | null>(null);
  const pillarProgressRef = useRef<number | null>(null);

  const PILLAR_INTERVAL = 5000; // 5 seconds per tab

  const advancePillar = useCallback(() => {
    setActivePillar((prev) => (prev + 1) % PILLARS.length);
    setPillarProgress(0);
  }, []);

  useEffect(() => {
    if (pillarPaused) {
      if (pillarIntervalRef.current) clearInterval(pillarIntervalRef.current);
      if (pillarProgressRef.current) clearInterval(pillarProgressRef.current);
      return;
    }

    setPillarProgress(0);
    const progressStep = 50; // update every 50ms
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
                  AI Copilot for Global Logistics
                </div>
                <h1 className="font-display font-extrabold leading-[1.03] tracking-[-0.035em] mb-3 heading-hero">
                  AI Intelligence Layer<br />for <span className="text-ln-green">Global Supply Chains</span>
                </h1>
                <p className="text-[13.5px] text-muted-foreground leading-[1.6] max-w-[460px] mb-3">
                  Predict freight rates, analyze global trade flows, and automate logistics decisions — all powered by <strong className="text-foreground">LoRRI AI</strong>, the industry's first end-to-end logistics intelligence platform.
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
                  <button className="btn-primary-ln !px-5 !py-2.5 !text-[13px]">🤖 Try AI Demo ↓</button>
                  <button className="btn-secondary-ln !px-5 !py-2.5 !text-[13px]">🚀 Explore Platform →</button>
                </div>
              </div>
            </ScrollReveal>

            {/* ORBIT DIAGRAM */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="flex items-center justify-center relative min-h-[360px]">
                <div className="absolute inset-0 rounded-[28px] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(57,49,133,0.12) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="relative w-[360px] h-[360px]">
                  <svg className="absolute inset-0 overflow-visible" width="360" height="360" viewBox="0 0 360 360">
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
                      return <line key={i} x1="180" y1="180" x2={x2} y2={y2} stroke={p.color} strokeWidth="1" strokeOpacity={i === activePillar ? 0.45 : 0.15} strokeDasharray="4 6" />;
                    })}
                    <g style={{ transformOrigin: '180px 180px', animation: 'spinCW 8s linear infinite' }}>
                      <circle cx="180" cy="45" r="4" fill="#1AA6DF" opacity="0.9" style={{ filter: 'drop-shadow(0 0 8px #1AA6DF)' }} />
                    </g>
                    <g style={{ transformOrigin: '180px 180px', animation: 'spinCCW 14s linear infinite' }}>
                      <circle cx="180" cy="108" r="3" fill="#54AF3A" opacity="0.7" style={{ filter: 'drop-shadow(0 0 6px #54AF3A)' }} />
                    </g>
                    <circle cx="180" cy="180" r="32" fill="rgba(57,49,133,0.2)" stroke="#393185" strokeWidth="1.5" />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[3] pointer-events-none w-16">
                    <div className="font-display text-base font-extrabold gradient-lorri leading-[1.1] tracking-[-0.02em]">LoRRI</div>
                    <div className="text-[7px] font-bold tracking-[0.15em] uppercase text-muted-foreground mt-0.5">AI COPILOT</div>
                  </div>
                  {PILLARS.map((p, i) => {
                    const angles = [-90, 0, 90, 180];
                    const rad = (angles[i] * Math.PI) / 180;
                     const nx = 180 + 135 * Math.cos(rad);
                     const ny = 180 + 135 * Math.sin(rad);
                    const isActive = i === activePillar;
                    const labelStyle: React.CSSProperties = i === 0 
                      ? { top: -28, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }
                      : i === 1 
                      ? { left: 62, top: '50%', transform: 'translateY(-50%)', whiteSpace: 'nowrap' }
                      : i === 2 
                      ? { bottom: -28, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }
                      : { right: 62, top: '50%', transform: 'translateY(-50%)', whiteSpace: 'nowrap' };
                    return (
                      <div
                        key={i}
                        className="absolute w-14 h-14 z-[4] cursor-pointer -translate-x-1/2 -translate-y-1/2"
                        style={{ left: nx, top: ny }}
                        onClick={() => setActivePillar(i)}
                      >
                        <div className="absolute -inset-2 rounded-full transition-all duration-300" style={{ border: `2px solid ${p.color}`, opacity: isActive ? 0.75 : 0.3, boxShadow: isActive ? `0 0 20px ${p.color}` : 'none' }} />
                        <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center text-[20px] transition-all duration-300" style={{ border: `2px solid ${p.color}`, boxShadow: isActive ? `0 0 28px rgba(0,0,0,.3)` : 'none' }}>
                          {p.icon}
                        </div>
                        <div className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[8px] font-extrabold font-mono" style={{ background: p.color, color: '#fff' }}>{p.num}</div>
                        <div className="absolute text-[10px] font-bold" style={{ ...labelStyle, color: p.color }}>
                          <span style={{margin: '-2%'}}>{orbitLabels[i]}</span>
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

      {/* ═══════════════ PROBLEM → SOLUTION ═══════════════ */}
      <section className="section-std bg-bg2 relative overflow-hidden">
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
                  Logistics Data is <span style={{ color: '#ef4444' }}>Broken</span>
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
                  LoRRI AI — Your <span className="text-ln-green">Logistics Copilot</span>
                </h2>
                <p className="text-muted-foreground text-body-lg mb-4 max-w-[480px]">
                  LoRRI AI combines real-time trade data, predictive analytics, and autonomous agents to give logistics teams instant intelligence.
                </p>
                <div className="space-y-2.5">
                  {[
                    { icon: '🧠', solve: 'Unified Intelligence', desc: 'All freight data in one platform — benchmarks, rates & carrier insights', color: '#393185' },
                    { icon: '📈', solve: 'Predictive Pricing', desc: 'AI-powered rate forecasting across routes and markets', color: '#1AA6DF' },
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

      {/* ═══════════════ PLATFORM WALKTHROUGH ═══════════════ */}
      <section className="section-std bg-background relative overflow-hidden">
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
                    { icon: '🔍', title: 'Deep Discovery', desc: 'AI-powered carrier matching across 90K+ routes' },
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
                <Link to="/contact" className="btn-primary-ln no-underline !px-7 !py-3 !text-[15px]">
                  Schedule a Live Demo →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <PlatformWalkthrough />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ DATA CREDIBILITY ═══════════════ */}
      <section className="py-[28px] px-[5vw] bg-bg2 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 30% 50%, rgba(26,166,223,0.06), transparent)' }} />
        <div className="max-w-[1280px] mx-auto relative z-[1]">
          <ScrollReveal direction="up">
            <div className="text-left mb-5">
              <div className="section-tag">Global Data Coverage</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] heading-section">
                The <span className="text-ln-green">Bloomberg Terminal</span> for Logistics
              </h2>
              <p className="text-left text-muted-foreground text-body-lg mt-2">
                Powered by the world's largest logistics intelligence dataset — real data, real insights, real decisions.
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

      {/* ═══════════════ AI DEMO ═══════════════ */}
      {/* <section className="section-std bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 60% at 70% 40%, rgba(84,175,58,0.06), transparent)' }} />
        <div className="max-w-[1280px] mx-auto relative z-[1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <ScrollReveal direction="up">
              <div>
                <div className="section-tag">Interactive AI Demo</div>
                <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] mb-3 heading-section">
                  Try the <span className="text-ln-green">AI Supply Chain Analyzer</span>
                </h2>
                <p className="text-muted-foreground text-body-lg mb-4 max-w-[480px]">
                  Experience LoRRI's intelligence firsthand — powered by <strong className="text-foreground">real AI</strong>. Enter any trade route and get live freight intelligence.
                </p>
                <div className="space-y-3 mb-4">
                  {[
                    { icon: '📈', title: 'Freight Rate Forecasting', desc: 'Predict rate changes across routes and markets before they happen' },
                    { icon: '🌐', title: 'Trade Flow Analysis', desc: 'Analyze commodity flows, identify risks and discover new markets' },
                    { icon: '🤖', title: 'AI Agent Monitoring', desc: 'Autonomous agents that monitor freight markets 24/7 for opportunities' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0" style={{ background: 'rgba(84,175,58,0.08)', border: '1px solid rgba(84,175,58,0.15)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-display text-[14px] font-bold">{item.title}</div>
                        <div className="text-[12.5px] text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <AiDemo />
            </ScrollReveal>
          </div>
        </div>
      </section> */}

      {/* ═══════════════ AUDIENCE TOGGLE ═══════════════ */}
      <section className="section-std bg-bg2">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="section-tag">One Platform, Two Ecosystems</div>
            <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] mb-4 heading-section">
              Built for Both Sides of <span className="text-ln-green">Logistics</span>
            </h2>
            <p className="text-muted-foreground text-body-lg mb-4 max-w-[580px]">
              One unified platform serving manufacturers and carriers with tailored experiences.
            </p>
            <div className="inline-flex mt-6 bg-surface border border-border rounded-full p-1 gap-1">
              <button
                onClick={() => setAudience('mfr')}
                className={`px-7 py-2.5 rounded-full text-sm font-bold border-none cursor-pointer transition-all duration-300 font-body ${audience === 'mfr' ? 'text-white' : 'text-muted-foreground bg-transparent'}`}
                style={audience === 'mfr' ? { background: 'linear-gradient(135deg,#393185,#1AA6DF)', boxShadow: '0 4px 16px rgba(57,49,133,.4)' } : {}}
              >
                🏭 Manufacturers / Shippers
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
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6" key={audience}>
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
            <div className="flex gap-1.5 justify-center mb-4 flex-wrap">
              {PILLARS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActivePillar(i)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-bold cursor-pointer transition-all duration-300 font-body"
                  style={{
                    border: `1.5px solid ${i === activePillar ? p.color : 'rgba(57,49,133,0.2)'}`,
                    color: i === activePillar ? p.color : 'hsl(var(--muted-foreground))',
                    background: i === activePillar ? `${p.color}18` : 'transparent',
                    boxShadow: i === activePillar ? `0 0 20px ${p.glow}` : 'none',
                  }}
                >
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
