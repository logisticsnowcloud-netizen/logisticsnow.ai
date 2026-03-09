import { useState } from "react";
import { Link } from "react-router-dom";
import { PILLARS, MFR_FEATURES, CARRIER_FEATURES, VAL_DRIVERS } from "@/lib/data";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const PROD_STATS = [
  { n: '$2.5Bn+', l: 'Spend Analyzed', c: '#393185' },
  { n: '2200+', l: 'Carriers', c: '#1AA6DF' },
  { n: '80K+', l: 'Routes', c: '#54AF3A' },
  { n: '100+', l: 'Truck Types', c: '#fb923c' },
];

const Product = () => {
  const [activePillar, setActivePillar] = useState(0);
  const [audience, setAudience] = useState<'mfr' | 'carrier'>('mfr');

  const features = audience === 'mfr' ? MFR_FEATURES : CARRIER_FEATURES;
  const valItems = [...VAL_DRIVERS, ...VAL_DRIVERS, ...VAL_DRIVERS];

  return (
    <div>
      {/* PRODUCT HERO */}
      <div className="px-[5vw] pt-[90px] pb-[70px] relative overflow-hidden bg-background">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(57,49,133,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(57,49,133,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(57,49,133,0.22) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-[10%] left-[10%] w-[500px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(26,166,223,0.10) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-[5%] w-[400px] h-[350px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(84,175,58,0.08) 0%, transparent 70%)' }} />

        <div className="max-w-[1280px] mx-auto relative z-[2]">
          <div className="flex items-center gap-[7px] text-xs font-semibold tracking-[0.07em] uppercase text-muted-foreground mb-7">
            <Link to="/" className="no-underline text-muted-foreground font-body">Home</Link>
            <span>›</span>
            <span className="text-ln-purple">Products</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="up">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11.5px] font-bold tracking-[0.09em] uppercase mb-6" style={{ background: 'rgba(26,166,223,.10)', border: '1px solid rgba(26,166,223,.25)', color: '#1AA6DF' }}>
                  <span className="w-[7px] h-[7px] rounded-full" style={{ background: '#1AA6DF', boxShadow: '0 0 8px #1AA6DF' }} />
                  Global Smart Logistics Grid
                </div>
                <h1 className="font-display font-extrabold leading-[1.03] tracking-[-0.035em] mb-5" style={{ fontSize: 'clamp(42px, 5.5vw, 72px)' }}>
                  Meet <span className="gradient-lorri">LoRRI</span><br />— The Brain of<br />Your Logistics
                </h1>
                <p className="text-[17px] text-muted-foreground leading-[1.78] max-w-[500px] mb-9">
                  <strong className="text-foreground">LoRRI (Logistics Routing & Real-time Intelligence)</strong> is the industry's first end-to-end logistics intelligence platform — powering deep discovery, rapid procurement, digital operations and 10× faster payments.
                </p>
                <div className="flex flex-wrap gap-2.5 mb-9">
                  {PROD_STATS.map((s) => (
                    <div key={s.l} className="px-4 py-2.5 rounded-[14px] bg-surface flex flex-col items-center min-w-[90px]">
                      <div className="font-display text-xl font-extrabold tracking-[-0.03em]" style={{ color: s.c }}>{s.n}</div>
                      <div className="text-[10.5px] text-muted-foreground font-semibold mt-0.5 text-center">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3.5 flex-wrap">
                  <button className="btn-primary-ln">🚀 Explore LoRRI →</button>
                  <a href="https://www.lorri.ai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground bg-surface border border-border px-6 py-3 rounded-full text-[15px] font-semibold no-underline">🌐 Visit lorri.ai ↗</a>
                </div>
              </div>
            </ScrollReveal>

            {/* ORBIT DIAGRAM */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="flex items-center justify-center relative min-h-[460px]">
                <div className="absolute inset-0 rounded-[28px] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(57,49,133,0.12) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="relative w-[440px] h-[440px]">
                  <svg className="absolute inset-0 overflow-visible" width="440" height="440" viewBox="0 0 440 440">
                    <defs>
                      <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#393185" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#393185" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="220" cy="220" r="200" fill="url(#orbGlow)" />
                    <circle cx="220" cy="220" r="168" fill="none" stroke="rgba(57,49,133,0.15)" strokeWidth="1.5" strokeDasharray="5 8" />
                    <circle cx="220" cy="220" r="90" fill="none" stroke="rgba(57,49,133,0.2)" strokeWidth="1" strokeDasharray="3 5" />
                    <circle cx="220" cy="220" r="44" fill="none" stroke="rgba(57,49,133,0.15)" strokeWidth="1" />
                    {PILLARS.map((p, i) => {
                      const angles = [-90, 0, 90, 180];
                      const rad = (angles[i] * Math.PI) / 180;
                      const x2 = 220 + 168 * Math.cos(rad);
                      const y2 = 220 + 168 * Math.sin(rad);
                      return <line key={i} x1="220" y1="220" x2={x2} y2={y2} stroke={p.color} strokeWidth="1" strokeOpacity={i === activePillar ? 0.45 : 0.15} strokeDasharray="4 6" />;
                    })}
                    <g style={{ transformOrigin: '220px 220px', animation: 'spinCW 8s linear infinite' }}>
                      <circle cx="220" cy="52" r="5" fill="#1AA6DF" opacity="0.9" style={{ filter: 'drop-shadow(0 0 8px #1AA6DF)' }} />
                    </g>
                    <g style={{ transformOrigin: '220px 220px', animation: 'spinCCW 14s linear infinite' }}>
                      <circle cx="220" cy="130" r="3.5" fill="#54AF3A" opacity="0.7" style={{ filter: 'drop-shadow(0 0 6px #54AF3A)' }} />
                    </g>
                    <circle cx="220" cy="220" r="40" fill="rgba(57,49,133,0.2)" stroke="#393185" strokeWidth="1.5" />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[3] pointer-events-none w-20">
                    <div className="font-display text-lg font-extrabold gradient-lorri leading-[1.1] tracking-[-0.02em]">LoRRI</div>
                    <div className="text-[7px] font-bold tracking-[0.15em] uppercase text-muted-foreground mt-0.5">INTELLIGENCE</div>
                  </div>
                  {PILLARS.map((p, i) => {
                    const angles = [-90, 0, 90, 180];
                    const rad = (angles[i] * Math.PI) / 180;
                    const nx = 220 + 168 * Math.cos(rad);
                    const ny = 220 + 168 * Math.sin(rad);
                    const isActive = i === activePillar;
                    return (
                      <div
                        key={i}
                        className="absolute w-16 h-16 z-[4] cursor-pointer -translate-x-1/2 -translate-y-1/2"
                        style={{ left: nx, top: ny }}
                        onClick={() => setActivePillar(i)}
                      >
                        <div className="absolute -inset-2 rounded-full transition-all duration-300" style={{ border: `2px solid ${p.color}`, opacity: isActive ? 0.75 : 0.3, boxShadow: isActive ? `0 0 20px ${p.color}` : 'none' }} />
                        <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center text-[22px] transition-all duration-300" style={{ border: `2px solid ${p.color}`, boxShadow: isActive ? `0 0 28px rgba(0,0,0,.3)` : 'none' }}>
                          {p.icon}
                        </div>
                        <div className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[8px] font-extrabold font-mono" style={{ background: p.color, color: '#fff' }}>{p.num}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* INTERACTIVE DEMO / VIDEO */}
      <section className="py-[88px] px-[5vw] bg-bg2 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 20%, rgba(57,49,133,0.08), transparent)' }} />
        <div className="max-w-[1280px] mx-auto relative z-[1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="up">
              <div>
                <div className="section-tag">Platform Walkthrough</div>
                <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] mb-5" style={{ fontSize: 'clamp(30px, 4.2vw, 54px)' }}>
                  See LoRRI <span className="text-ln-blue">in Action</span>
                </h2>
                <p className="text-muted-foreground text-[17px] leading-[1.78] mb-8 max-w-[480px]">
                  Watch how LoRRI transforms freight procurement from fragmented spreadsheets into an intelligent, AI-driven workflow — in under 3 minutes.
                </p>
                <div className="flex flex-col gap-4 mb-8">
                  {[
                    { icon: '🔍', title: 'Deep Discovery', desc: 'AI-powered carrier matching across 80K+ routes' },
                    { icon: '⚡', title: 'Rapid Procurement', desc: 'From indent to award in minutes, not days' },
                    { icon: '📊', title: 'Live Intelligence', desc: 'Real-time dashboards with actionable insights' },
                    { icon: '🤖', title: 'AI Agents at Work', desc: 'Autonomous negotiation, routing & optimization' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3.5 group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-transform group-hover:scale-110" style={{ background: 'rgba(57,49,133,0.08)', border: '1px solid rgba(57,49,133,0.15)' }}>
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
                  🎯 Schedule a Live Demo →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="relative group cursor-pointer">
                {/* Video Container */}
                <div className="relative rounded-[20px] overflow-hidden border border-border/50" style={{ boxShadow: '0 20px 60px rgba(57,49,133,0.15), 0 0 0 1px rgba(57,49,133,0.08)' }}>
                  <div className="aspect-video bg-gradient-to-br from-ln-purple/10 via-ln-blue/5 to-ln-green/10 flex items-center justify-center relative">
                    {/* Animated grid background */}
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(57,49,133,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57,49,133,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    
                    {/* Mock UI elements */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-destructive/60" />
                        <div className="w-3 h-3 rounded-full bg-ln-orange/60" />
                        <div className="w-3 h-3 rounded-full bg-ln-green/60" />
                        <div className="flex-1 h-6 rounded-md bg-foreground/5 mx-4" />
                      </div>
                      <div className="flex gap-3">
                        <div className="w-[30%] space-y-2">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-5 rounded bg-foreground/5" style={{ width: `${70 + Math.random() * 30}%` }} />
                          ))}
                        </div>
                        <div className="flex-1 rounded-lg bg-foreground/[0.03] p-3 space-y-2">
                          <div className="flex gap-2">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="flex-1 h-16 rounded-lg" style={{ background: ['rgba(57,49,133,0.1)', 'rgba(26,166,223,0.1)', 'rgba(84,175,58,0.1)'][i] }} />
                            ))}
                          </div>
                          <div className="h-24 rounded-lg bg-foreground/[0.03]" />
                        </div>
                      </div>
                    </div>

                    {/* Play Button */}
                    <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #393185, #1AA6DF)', boxShadow: '0 8px 32px rgba(57,49,133,0.4)' }}>
                      <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
                        <path d="M4 2.5L26 16L4 29.5V2.5Z" fill="white" />
                      </svg>
                    </div>
                    
                    {/* Duration badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-[11px] font-bold" style={{ background: 'rgba(0,0,0,0.6)', color: '#fff' }}>
                      2:47
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.08em] uppercase" style={{ background: 'linear-gradient(135deg, #393185, #1AA6DF)', color: '#fff', boxShadow: '0 4px 16px rgba(57,49,133,0.3)' }}>
                  ▶ Watch Demo
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AUDIENCE TOGGLE */}
      <section className="py-[88px] px-[5vw] bg-bg2">
        <div className="max-w-[1280px] mx-auto text-center">
          <ScrollReveal>
            <div className="section-tag justify-center">One Platform, Two Ecosystems</div>
            <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(30px, 4.2vw, 54px)' }}>Built for Both Sides of Logistics</h2>
            <div className="inline-flex mt-6 bg-surface border border-border rounded-full p-1 gap-1">
              <button
                onClick={() => setAudience('mfr')}
                className={`px-7 py-2.5 rounded-full text-sm font-bold border-none cursor-pointer transition-all duration-300 font-body ${audience === 'mfr' ? 'text-white' : 'text-muted-foreground bg-transparent'}`}
                style={audience === 'mfr' ? { background: 'linear-gradient(135deg,#393185,#1AA6DF)', boxShadow: '0 4px 16px rgba(57,49,133,.4)' } : {}}
              >
                🏭 Manufacturers / Clients
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
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10" key={audience}>
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

      {/* 4 PILLARS */}
      <section className="py-[88px] px-[5vw] bg-background">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-tag justify-center">The Platform</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(30px, 4.2vw, 54px)' }}>
                4 Pillars. <span className="text-ln-blue">Infinite Value.</span>
              </h2>
              <p className="text-muted-foreground text-[17px] leading-[1.75] max-w-[540px] mx-auto mt-2.5">Industry-first logistics intelligence powering next-level value creation end-to-end.</p>
            </div>
          </ScrollReveal>

          {/* Pillar Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex gap-2 justify-center mb-10 flex-wrap">
              {PILLARS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActivePillar(i)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-bold cursor-pointer transition-all duration-300 font-body"
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

          {/* Active Pillar Detail */}
          {PILLARS.map((p, i) => i === activePillar && (
            <ScrollReveal key={i} direction="none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-surface border border-border rounded-[28px] p-12" style={{ borderColor: `${p.color}22`, boxShadow: `0 0 60px ${p.glow}18` }}>
                <div>
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-5" style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                    <span className="text-lg">{p.icon}</span>
                    <span className="text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: p.color }}>{p.sub}</span>
                  </div>
                  <div className="font-mono text-sm font-bold tracking-[0.04em] mb-1.5" style={{ color: p.color }}>{p.num} / 04</div>
                  <div className="font-display font-extrabold tracking-[-0.025em] mb-4" style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}>{p.title}</div>
                  <p className="text-base text-muted-foreground leading-[1.78] mb-7">{p.desc}</p>
                  <div className="flex flex-col gap-2.5">
                    {p.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="font-bold flex-shrink-0 mt-px" style={{ color: p.color }}>✓</span>{b}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-6">
                    <div className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-3.5">Platform Modules</div>
                    <div className="flex flex-wrap gap-2.5">
                      {p.tags.map((t) => (
                        <div key={t} className="px-4 py-2 rounded-full text-[13px] font-bold flex items-center gap-1.5" style={{ background: `${p.color}12`, border: `1px solid ${p.color}30`, color: p.color }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }} />{t}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[20px] p-7" style={{ background: `linear-gradient(135deg, ${p.color}12, transparent)`, border: `1px solid ${p.color}22` }}>
                    <div className="font-mono text-[11px] text-muted-foreground tracking-[0.05em] mb-3">// PLATFORM IMPACT</div>
                    <div className="grid grid-cols-2 gap-3.5">
                      {p.impact.map((cell) => (
                        <div key={cell[1]} className="text-center p-3.5 rounded-xl" style={{ background: 'rgba(57,49,133,.05)' }}>
                          <div className="font-display text-[22px] font-extrabold" style={{ color: cell[2] }}>{cell[0]}</div>
                          <div className="text-[10.5px] text-muted-foreground mt-0.5">{cell[1]}</div>
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

      {/* FLOW SECTION */}
      <section className="py-[88px] px-[5vw] bg-bg2">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-[52px]">
              <div className="section-tag justify-center">Circular Intelligence</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(30px, 4.2vw, 54px)' }}>
                Everything Flows. <span className="text-ln-green">Everything Connects.</span>
              </h2>
              <p className="text-muted-foreground text-[17px] leading-[1.75] max-w-[520px] mx-auto mt-3">LoRRI is a closed-loop system — each pillar feeds intelligence back into the others, compounding value continuously.</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
            <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 opacity-25 rounded-sm hidden lg:block" style={{ background: 'linear-gradient(90deg,#1AA6DF,#54AF3A,#c084fc,#fb923c)' }} />
            {PILLARS.map((p) => (
              <StaggerItem key={p.num}>
                <div className="text-center px-5 relative z-[1]">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-[26px] mx-auto mb-4 transition-transform hover:scale-110" style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}08)`, border: `2px solid ${p.color}40`, boxShadow: `0 0 24px ${p.glow}` }}>
                    {p.icon}
                  </div>
                  <div className="font-mono text-[10px] font-bold tracking-[0.1em] mb-1.5" style={{ color: p.color }}>{p.num}</div>
                  <div className="font-display text-[15px] font-extrabold mb-2 leading-[1.2]">{p.title}</div>
                  <div className="text-[12.5px] text-muted-foreground leading-[1.65]">{p.desc.split('—')[0]}</div>
                  <div className="mt-3 flex flex-col gap-1">
                    {p.tags.map((t) => (
                      <div key={t} className="text-[11px] rounded-full px-2.5 py-0.5 inline-block" style={{ color: p.color, background: `${p.color}10`, border: `1px solid ${p.color}20` }}>{t}</div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PRODUCT CTA */}
      <ScrollReveal direction="none" duration={0.8}>
        <div className="gradient-cta py-[90px] px-[5vw] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(84,175,58,.15), transparent 60%)' }} />
          <div className="relative z-[1]">
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-4" style={{ color: 'rgba(255,255,255,.3)' }}>{'// Ready to go live?'}</div>
            <h2 className="font-display font-extrabold tracking-[-0.025em] mb-4" style={{ fontSize: 'clamp(30px, 5vw, 58px)', color: '#fff' }}>
              Start Your <span className="text-ln-green">LoRRI Journey</span> Today
            </h2>
            <p className="text-lg max-w-[520px] mx-auto mb-9" style={{ color: 'rgba(255,255,255,.72)' }}>Join 120+ companies that have transformed their freight operations. Onboarding in 5 business days. Free 30-day pilot.</p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <button className="btn-white-ln">🚛 Schedule a Demo →</button>
              <a href="https://www.lorri.ai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold no-underline" style={{ color: 'rgba(255,255,255,.7)', border: '1px solid rgba(255,255,255,.15)' }}>🌐 Explore lorri.ai ↗</a>
            </div>
            <p className="font-mono text-[13px] mt-4" style={{ color: 'rgba(255,255,255,.45)' }}>No credit card required · No lock-in · Deploy in days</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Mini Footer */}
      <footer className="flex items-center justify-between flex-wrap gap-3 px-[5vw] py-7" style={{ background: '#07060f', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <p className="text-[12.5px]" style={{ color: 'rgba(255,255,255,.25)' }}>© 2025 LogisticsNow Technologies Pvt. Ltd. All rights reserved.</p>
        <div className="flex items-center gap-2 font-mono text-[11px]" style={{ color: 'rgba(255,255,255,.25)' }}>
          <div className="w-[7px] h-[7px] bg-ln-green rounded-full" style={{ boxShadow: '0 0 6px #54AF3A' }} />
          api.logisticsnow.ai · All systems operational
        </div>
      </footer>
    </div>
  );
};

export default Product;
