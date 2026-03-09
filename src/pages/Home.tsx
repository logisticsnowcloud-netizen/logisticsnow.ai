import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { CLIENTS, CASES, TESTIMONIALS, METHODOLOGY_STEPS } from "@/lib/data";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const STATS = [
  { num: '$2.5Bn+', label: 'Supply Chain Spend Analyzed', color: '#393185' },
  { num: '120+', label: 'Companies incl. 25+ Fortune 500', color: '#54AF3A' },
  { num: '$500Mn+', label: 'Freight Procured on Platform', color: '#1AA6DF' },
  { num: '1Mn+', label: 'Truckloads Procured', color: '#393185' },
];

const VISION_CARDS = [
  { icon: '💰', title: 'Cost Control & Savings', desc: 'Enable up to 20%+ freight savings through AI-powered benchmarking, carrier synergies, backhaul loops and intelligent route optimization.' },
  { icon: '🗺️', title: 'Enabling Reach & Service', desc: '80K+ routes covered globally. Carrier depth at every plant, depot and CFA location — from local to national to multimodal.' },
  { icon: '🌱', title: 'Sustainability at Scale', desc: 'Create the Global Smart Logistics Grid for green capacities. Better vehicle utilization, lower emissions per ton, efficient distribution.' },
  { icon: '⚡', title: 'Resilience & Speed', desc: "During COVID's first lockdown, LoRRI kept plants running by rapidly aligning capacities. Digital indents answered in <30 minutes." },
  { icon: '🤖', title: 'AI-Powered Intelligence', desc: 'Industry-first logistics intelligence platform combining benchmarks, procurement, TMS and AI agents — all in one integrated ecosystem.' },
  { icon: '😊', title: 'Happy Users & Ecosystem', desc: 'Rate, benchmark and share feedback on carriers with industry peers — driving continuous improvement across the logistics network.' },
];

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(57,49,133,0.28)';
        ctx.fill();
      });
      pts.forEach((a, i) => {
        pts.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(57,49,133,${0.05 * (1 - d / 110)})`;
            ctx.lineWidth = 0.7; ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animId); };
  }, []);

  const CLIENT_LOGOS = [
    { name: 'Apollo Tyres', logo: '/logos/apollo-tyres.png' },
    { name: 'Perfetti Van Melle', logo: '/logos/perfetti.png' },
    { name: 'Saint-Gobain', logo: '/logos/saint-gobain.png' },
    { name: 'General Mills', logo: '/logos/general-mills.png' },
    { name: 'Kimberly-Clark', logo: '/logos/kimberly-clark.png' },
    { name: 'CEVA Logistics', logo: '/logos/ceva.png' },
  ];
  const CLIENT_LOGOS_2 = [
    { name: 'Jyothy Labs', logo: '/logos/jyothy-labs.png' },
    { name: 'MIRC Electronics', logo: '/logos/mirc.png' },
    { name: 'Bajaj Electricals', logo: '/logos/bajaj.png' },
    { name: 'Schreiber Foods', logo: '/logos/schreiber.png' },
    { name: 'Woolworths AU', logo: '/logos/woolworths.png' },
  ];
  const caseColors = ['#393185', '#54AF3A', '#1AA6DF', '#393185', '#54AF3A', '#1AA6DF'];

  return (
    <div>
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-[5vw] pt-8 pb-6 bg-background relative overflow-hidden" style={{ minHeight: 'calc(100vh - 120px)' }}>
        <div className="absolute inset-0 opacity-55 pointer-events-none" style={{ backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, hsl(var(--background)) 100%)' }} />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
        <div className="relative z-[2] max-w-[1000px]">
          <ScrollReveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full px-[16px] py-[5px] text-[11px] font-bold tracking-[0.07em] uppercase text-ln-purple mb-2" style={{ background: 'rgba(57,49,133,0.09)', border: '1px solid rgba(57,49,133,0.2)' }}>
              <span className="w-[6px] h-[6px] bg-ln-green rounded-full inline-block" />
              AI Agentic Smart Logistics Grid
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-display font-extrabold leading-[1.05] tracking-[-0.035em] mb-2" style={{ fontSize: 'clamp(28px, 3.8vw, 52px)' }}>
              The <span className="text-ln-purple">Intelligent</span> Logistics<br />& Procurement Platform for <span className="text-ln-green">Global</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-muted-foreground max-w-[600px] leading-[1.5] mx-auto mb-4" style={{ fontSize: 'clamp(13px, 1.3vw, 16px)' }}>
              AI-powered freight procurement, routing intelligence and supply chain visibility — trusted by 120+ companies including 25+ Fortune 500s across 4 continents.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex gap-3 flex-wrap justify-center">
              <Link to="/product" className="btn-primary-ln no-underline !px-7 !py-3 !text-[15px]">🚛 See the Platform →</Link>
              <Link to="/about" className="btn-secondary-ln no-underline !px-6 !py-2.5 !text-[15px]">Learn About Us</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.45}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-[820px] w-full relative z-[2] mt-5 mx-auto">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="group relative rounded-xl p-3.5 text-center transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}12, ${s.color}08)`,
                    border: `1px solid ${s.color}25`,
                    boxShadow: `0 4px 20px ${s.color}10`,
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle at 50% 0%, ${s.color}15, transparent 70%)` }} />
                  <div className="relative z-[1]">
                    <div className="font-display text-[24px] md:text-[28px] font-black tracking-[-0.03em] mb-0.5" style={{ color: s.color }}>{s.num}</div>
                    <div className="text-[10px] text-muted-foreground font-semibold leading-tight">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative overflow-hidden py-10 bg-bg2 border-y border-border">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10" style={{ background: 'linear-gradient(to right, hsl(var(--bg2)), transparent)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10" style={{ background: 'linear-gradient(to left, hsl(var(--bg2)), transparent)' }} />
        
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Trusted by Industry Leaders Worldwide
        </p>
        
        {/* Row 1 */}
        <div className="flex gap-8 items-center animate-marquee w-max mb-4">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-ln-purple/30 transition-all duration-300 hover:shadow-lg group"
              style={{ minWidth: 180 }}
            >
              <img src={c.logo} alt={c.name} className="w-9 h-9 rounded-lg object-contain shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-display text-[13px] font-bold text-foreground/80 whitespace-nowrap group-hover:text-foreground transition-colors">
                {c.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Row 2 - reverse */}
        <div className="flex gap-8 items-center animate-marquee-reverse w-max">
          {[...CLIENT_LOGOS_2, ...CLIENT_LOGOS_2].map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-ln-green/30 transition-all duration-300 hover:shadow-lg group"
              style={{ minWidth: 180 }}
            >
              <img src={c.logo} alt={c.name} className="w-9 h-9 rounded-lg object-contain shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-display text-[13px] font-bold text-foreground/80 whitespace-nowrap group-hover:text-foreground transition-colors">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* VISION */}
      <section className="py-[88px] px-[5vw] bg-background">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal><div className="section-tag">Our Purpose</div></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-[52px] items-end">
            <ScrollReveal direction="up" delay={0.05}>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(30px, 4.2vw, 54px)' }}>
                The Trusted, Neutral<br /><span className="text-ln-purple">Logistics Intelligence Platform</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <div>
                <p className="text-muted-foreground text-[17px] leading-[1.75]">LogisticsNow is uniquely positioned with trust, technology & data to enable your digital logistics ecosystem.</p>
                <div className="flex gap-3.5 mt-5">
                  <Link to="/product" className="btn-primary-ln no-underline !px-7 !py-3 !text-[14.5px]">Explore Platform →</Link>
                  <Link to="/product" className="btn-secondary-ln no-underline !px-6 !py-2.5 !text-[14.5px] !text-ln-purple !border-ln-purple">Meet LoRRI</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VISION_CARDS.map((c) => (
              <StaggerItem key={c.title}>
                <div className="card-hover">
                  <div className="text-[28px] mb-3.5">{c.icon}</div>
                  <div className="font-display text-lg font-bold mb-2">{c.title}</div>
                  <div className="text-sm text-muted-foreground leading-[1.7]">{c.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-[88px] px-[5vw] bg-bg2">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal><div className="section-tag">6-Step Methodology</div></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-[52px] items-end">
            <ScrollReveal>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(30px, 4.2vw, 54px)' }}>
                From Data to <span className="text-ln-green">Savings</span> in 90 Days
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-[17px] leading-[1.75]">A proven procurement transformation methodology that has delivered $21Mn+ in savings across 120+ enterprises.</p>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {METHODOLOGY_STEPS.map((s) => (
              <StaggerItem key={s.num}>
                <div className="card-hover relative overflow-hidden">
                  <div className="absolute right-4 top-2 font-mono text-5xl font-bold text-ln-purple opacity-[0.07]">{s.num}</div>
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-[10px] text-ln-purple font-display text-sm font-extrabold mb-4" style={{ background: 'rgba(57,49,133,.1)' }}>{s.num}</div>
                  <div className="font-display text-lg font-bold mb-2">{s.title}</div>
                  <div className="text-sm text-muted-foreground leading-[1.7]">{s.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* AI SUITE */}
      <section className="py-[88px] px-[5vw] bg-background">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="section-tag">AI Suite</div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-[52px] items-end">
            <ScrollReveal direction="up" delay={0.05}>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(30px, 4.2vw, 54px)' }}>
                Not AI as a Feature.<br /><span className="text-ln-blue">AI as the Foundation.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <p className="text-muted-foreground text-[17px] leading-[1.75]">Nine proprietary AI agents and engines built ground-up for Indian logistics — each solving a critical industry problem at national scale.</p>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { tag: 'PROCUREMENT', tagColor: 'hsl(var(--ln-green))', name: 'Carrier Selection Agent', desc: 'AI-powered Procurement Co-Pilot that evaluates carriers, scores performance per lane, normalizes bids, predicts service reliability, and recommends optimal award strategies.' },
              { tag: 'DOCUMENT AI', tagColor: 'hsl(var(--ln-blue))', name: 'Document Intelligence Agent', desc: 'Intelligent LR-POD-Invoice matching system — extracts structured data via OCR, auto-matches documents, detects discrepancies, and assigns risk scores.' },
              { tag: 'NEGOTIATION', tagColor: 'hsl(var(--ln-orange))', name: 'Autonomous Negotiation Agent', desc: 'Autonomously negotiates with multiple LSPs in parallel — generates counter-offers, adapts strategy based on responses, and optimizes procurement costs.' },
              { tag: 'ROUTING', tagColor: 'hsl(var(--ln-purple))', name: 'AI Route Optimization Engine', desc: 'Intelligent route planning considering distance, time, cost, delivery windows, and vehicle capacity — with dynamic re-routing and continuous learning.' },
              { tag: 'CONSOLIDATION', tagColor: 'hsl(var(--ln-green))', name: 'Load Consolidation Engine', desc: 'AI-powered shipment grouping that maximizes vehicle utilization, minimizes empty miles, and simulates consolidation scenarios to reduce trips and emissions.' },
              { tag: 'ESG', tagColor: 'hsl(var(--ln-blue))', name: 'Carbon Tracker Agent', desc: 'Estimates shipment-level carbon emissions, tracks emission trends across lanes, identifies reduction opportunities, and provides sustainability analytics dashboards.' },
              { tag: 'INTELLIGENCE', tagColor: 'hsl(var(--ln-orange))', name: 'LoRRI.AI Platform', desc: 'AI-native logistics intelligence platform — autonomous freight procurement, optimization, sustainability insights, and global data positioning in one unified experience.' },
              { tag: 'DATA', tagColor: 'hsl(var(--ln-purple))', name: 'Lane Intelligence Builder', desc: 'The Data Cleaner agent — structures, validates, and enriches lane-level logistics data to power all downstream AI systems with clean, reliable intelligence.' },
            ].map((ai) => (
              <StaggerItem key={ai.name}>
                <div className="card-hover !p-6 h-full">
                  <span className="inline-block text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full mb-3" style={{ color: ai.tagColor, background: `${ai.tagColor}15`, border: `1px solid ${ai.tagColor}30` }}>{ai.tag}</span>
                  <div className="font-display text-[17px] font-bold mb-2.5">{ai.name}</div>
                  <div className="text-[13px] text-muted-foreground leading-[1.7]">{ai.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-[88px] px-[5vw] bg-background">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal><div className="section-tag">Case Studies</div></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 items-end">
            <ScrollReveal>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(30px, 4.2vw, 54px)' }}>
                Real Results, <span className="text-ln-purple">Real Clients</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-[17px] leading-[1.75]">Proven savings across geographies, industries and freight types — from India to Europe to Australia.</p>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASES.map((cs, i) => (
              <StaggerItem key={cs.client}>
                <div className="card-hover !p-7">
                  <div className="font-mono text-[11px] font-bold tracking-[0.08em] uppercase text-ln-green mb-2.5">{cs.tag}</div>
                  <div className="font-display text-lg font-bold mb-3.5 leading-[1.3]">{cs.client}</div>
                  <div className="grid grid-cols-2 gap-2.5 mb-3">
                    <div className="p-3 bg-background rounded-xl text-center">
                      <div className="font-display text-xl font-extrabold" style={{ color: caseColors[i] }}>{cs.spend}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">Spend</div>
                    </div>
                    <div className="p-3 rounded-xl text-center" style={{ background: 'rgba(84,175,58,.08)' }}>
                      <div className="font-display text-xl font-extrabold text-ln-green">{cs.saving}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">Savings ({cs.pct})</div>
                    </div>
                  </div>
                  {cs.extra && <div className="text-[12.5px] text-muted-foreground mb-1">📊 {cs.extra}</div>}
                  <button className="bg-ln-purple rounded-full px-4 py-2 text-[12.5px] font-bold border-none cursor-pointer mt-2" style={{ color: '#fff' }}>▶ Watch Case Study</button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[88px] px-[5vw] bg-bg2">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-[52px]">
              <div className="section-tag justify-center">Client Testimonials</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(30px, 4.2vw, 54px)' }}>What Our Clients Say</h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <StaggerItem key={i}>
                <div className="card-hover relative overflow-hidden !p-8">
                  <div className="text-[56px] text-ln-purple opacity-10 absolute top-1.5 left-4 leading-none" style={{ fontFamily: 'Georgia, serif' }}>"</div>
                  <div className="text-[14.5px] text-muted-foreground leading-[1.78] italic mb-5 relative z-[1]">{t.q}</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-base" style={{ background: t.grad }}>👤</div>
                    <div>
                      <div className="text-[13.5px] font-bold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal direction="none" duration={0.8}>
        <div className="gradient-cta py-[100px] px-[5vw] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(84,175,58,.15), transparent 60%)' }} />
          <h2 className="font-display font-extrabold tracking-[-0.025em] mb-4 relative z-[1]" style={{ fontSize: 'clamp(30px, 5vw, 58px)', color: '#fff' }}>
            Ready to Plug Into India's<br /><span className="text-ln-green">Logistics Brain?</span>
          </h2>
          <p className="text-lg max-w-[520px] mx-auto mb-9 relative z-[1]" style={{ color: 'rgba(255,255,255,.72)' }}>Join 120+ enterprises already transforming their supply chains. Get a personalized demo in 48 hours.</p>
          <div className="flex gap-3.5 justify-center flex-wrap relative z-[1]">
            <button className="btn-white-ln">🚛 Schedule a Demo →</button>
            <Link to="/about" className="btn-ghost-ln no-underline">Learn About Us</Link>
          </div>
          <p className="font-mono text-[13px] mt-4 relative z-[1]" style={{ color: 'rgba(255,255,255,.45)' }}>No credit card required · Onboarding in 5 business days · Free 30-day pilot</p>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Home;
