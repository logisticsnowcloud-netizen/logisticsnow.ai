import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { CLIENTS, CASES, TESTIMONIALS, METHODOLOGY_STEPS } from "@/lib/data";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import CtaBanner from "@/components/CtaBanner";

const STATS = [
  { num: "$2.5Bn+", label: "Supply Chain Spend Analyzed", color: "#393185" },
  { num: "2300+", label: "Carriers incl. Global", color: "#54AF3A" },
  { num: "$500Mn+", label: "Freight Procured on Platform", color: "#54AF3A" },
  { num: "1Mn+", label: "Truckloads Procured", color: "#393185" },
];

const VISION_CARDS = [
  {
    icon: "🤖",
    title: "AI-Powered Intelligence",
    desc: "Industry-first logistics intelligence platform combining benchmarks, procurement, TMS and AI agents — all in one integrated ecosystem.",
  },
  {
    icon: "💰",
    title: "Cost Control & Savings",
    desc: "Enable up to 20%+ freight savings through AI-powered benchmarking, carrier synergies, backhaul loops & intelligent route optimization.",
  },
  {
    icon: "🌱",
    title: "Sustainability at Scale",
    desc: "Create the Global Smart Logistics Grid for green capacities. Better vehicle utilization, lower emissions per ton, efficient distribution.",
  },
  {
    icon: "🗺️",
    title: "Enabling Reach & Service",
    desc: "90K+ routes covered globally. Carrier depth at every plant, depot and CFA location — from local to national to multimodal network.",
  },
  {
    icon: "⚡",
    title: "Resilience & Speed",
    desc: "During COVID's first lockdown, LoRRI kept plants running by rapidly aligning capacities. Digital indents answered in <30 minutes.",
  },
  {
    icon: "😊",
    title: "Happy Users & Ecosystem",
    desc: "Rate, benchmark and share feedback on carriers with industry peers — driving continuous improvement across the logistics network.",
  },
];

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

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
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(57,49,133,0.28)";
        ctx.fill();
      });
      pts.forEach((a, i) => {
        pts.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(57,49,133,${0.05 * (1 - d / 110)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const CLIENT_LOGOS = [
    { name: "Apollo Tyres", logo: "/logos/apollo.jpeg" },
    { name: "CEAT", logo: "/logos/ceat.png" },
    { name: "Perfetti Van Melle", logo: "/logos/perfetti.png" },
    { name: "Saint-Gobain", logo: "/logos/saint-gobain.png" },
    { name: "General Mills", logo: "/logos/general-mills.png" },
    { name: "Kimberly-Clark", logo: "/logos/kimberly-clark.png" },
    { name: "Jyothy Labs", logo: "/logos/jyothy-labs.png" },
    { name: "Hidromas", logo: "/logos/hidromas.png" },
    { name: "Onida MIRC Electronics", logo: "/logos/mirc.png" },
    { name: "Bajaj Electricals", logo: "/logos/bajaj.png" },
    { name: "Schreiber Foods", logo: "/logos/schreiber.png" },
    { name: "Shell", logo: "/logos/shell.png" },
    { name: "Kimbal", logo: "/logos/kimbal.png" },
    { name: "Pernod Ricard", logo: "/logos/pernod.png" },
    { name: "Paper Boat", logo: "/logos/paperboat.jpeg" },
    { name: "Sundrop", logo: "/logos/sundrop.png" },
    { name: "Vredestein", logo: "/logos/vredestein.jpg" },
    { name: "Zydus Wellness", logo: "/logos/zydus.jpeg" },
  ];
  const CLIENT_LOGOS_2 = [
    { name: "CJ Darcl", logo: "/logos/cjdarcl.png" },
    // { name: "CCI Group", logo: "/cci.png" },
    { name: "CEVA Logistics", logo: "/logos/ceva.png" },
    { name: "DHL", logo: "/logos/dhl.png" },
    { name: "DSV ", logo: "/logos/dsv.png" },
    // { name: "Delhivery", logo: "/delhivery.png" },
    { name: "FM Logistics", logo: "/logos/fm.png" },
    { name: "Fiege", logo: "/logos/fiege.png" },
    { name: "Maersk", logo: "/logos/Maersk.png" },
    { name: "RCI Logistics", logo: "/logos/rci.jpeg" },
    { name: "Rhenus Logistics", logo: "/logos/rhenus.png" },
    { name: "Sennder", logo: "/logos/sennder.png" },
    { name: "SCC India", logo: "/logos/scc.jpeg" },
    { name: "TCI Freight", logo: "/logos/tci.png" },
    { name: "TOLL", logo: "/logos/toll.png" },
    { name: "Western Carriers ", logo: "/logos/wc.png" },
    { name: "Quehenberger", logo: "/logos/quehenberger.png" },
  ];
  const caseColors = ["#393185", "#54AF3A", "#1AA6DF", "#393185", "#54AF3A", "#1AA6DF"];

  return (
    <div>
      {/* HERO */}
      <section
        className="flex flex-col items-center justify-center text-center px-[5vw] pt-8 pb-6 bg-background relative overflow-hidden"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        <div
          className="absolute inset-0 opacity-55 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, hsl(var(--background)) 100%)",
          }}
        />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
        <div className="relative z-[2] max-w-[1000px]">
          <ScrollReveal direction="up" delay={0}>
            <div
              className="inline-flex items-center gap-2 rounded-full px-[16px] py-[5px] text-[11px] font-bold tracking-[0.07em] uppercase text-ln-purple mb-2"
              style={{ background: "rgba(57,49,133,0.09)", border: "1px solid rgba(57,49,133,0.2)" }}
            >
              <span className="w-[6px] h-[6px] bg-ln-green rounded-full inline-block" />
              The AI Brain for Global Logistics
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1
              className="font-display font-extrabold leading-[1.05] tracking-[-0.035em] mb-2 heading-hero"
            >
               AI-Powered <span className="text-ln-purple">Intelligence</span> for <br /><span className="text-ln-green">Global Logistics & Procurement</span>
                {/* Logistics
              <br />& Procurement Platform for <span className="text-ln-green">Global</span> */}
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p
              className="text-muted-foreground max-w-[600px] leading-[1.5] mx-auto mb-4"
              style={{ fontSize: "clamp(13px, 1.3vw, 16px)" }}
            >
              AI-powered freight procurement, routing intelligence and supply chain visibility — trusted by 120+
              companies including 25+ Fortune 500s across 4 continents.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex gap-3 flex-wrap justify-center">
              <Link to="/product" className="btn-primary-ln no-underline !px-7 !py-3 !text-[15px]">
                🚛 Try AI Logistics Copilot →
              </Link>
              <Link to="/about" className="btn-secondary-ln no-underline !px-6 !py-2.5 !text-[15px]">
                Learn About Us
              </Link>
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
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${s.color}15, transparent 70%)` }}
                  />
                  <div className="relative z-[1]">
                    <div
                      className="font-display text-[24px] md:text-[28px] font-black tracking-[-0.03em] mb-0.5"
                      style={{ color: s.color }}
                    >
                      {s.num}
                    </div>
                    <div className="text-[10px] text-muted-foreground font-semibold leading-tight">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative overflow-visible py-14 bg-bg2 border-y border-border" style={{ clipPath: 'inset(-20px 0 -20px 0)' }}>
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-40 z-10"
          style={{ background: "linear-gradient(to right, hsl(var(--bg2)), transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-40 z-10"
          style={{ background: "linear-gradient(to left, hsl(var(--bg2)), transparent)" }}
        />

        <div className="text-center mb-8">
          <h2
            className="font-display font-extrabold tracking-[-0.03em] leading-[1.1] heading-section"
          >
            Trusted by <span className="text-ln-purple">Industry Leaders</span> Worldwide
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Powering logistics for 120+ companies including 25+ Fortune 500s
          </p>
        </div>

        {/* Row 1 */}
        <div className="flex gap-8 items-center animate-marquee w-max mb-5">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => {
            const hasLogo = c.logo && c.logo.length > 7;
            return (
              <div
                key={i}
                className="relative flex items-center justify-center rounded-lg bg-card/80 border border-border/40 backdrop-blur-sm hover:bg-card hover:border-primary/50 hover:shadow-[0_0_24px_hsl(var(--ln-purple)/0.2)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                style={{ width: 150, height: 75 }}
              >
                {hasLogo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-w-[100px] max-h-[45px] object-contain opacity-85 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                ) : (
                  <span className="font-display font-bold text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {c.name}
                  </span>
                )}
                {/* Tooltip */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50"
                  style={{ background: "hsl(var(--ln-purple))", color: "#fff" }}
                >
                  {c.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2 - reverse */}
        <div className="flex gap-8 items-center animate-marquee-reverse w-max">
          {[...CLIENT_LOGOS_2, ...CLIENT_LOGOS_2].map((c, i) => {
            const hasLogo = c.logo && c.logo.length > 7;
            return (
              <div
                key={i}
                className="relative flex items-center justify-center rounded-lg bg-card/80 border border-border/40 backdrop-blur-sm hover:bg-card hover:border-primary/50 hover:shadow-[0_0_24px_hsl(var(--ln-purple)/0.2)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                style={{ width: 150, height: 75 }}
              >
                {hasLogo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-w-[100px] max-h-[45px] object-contain opacity-85 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                ) : (
                  <span className="font-display font-bold text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {c.name}
                  </span>
                )}
                {/* Tooltip */}
                <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50"
                  style={{ background: "hsl(var(--ln-purple))", color: "#fff" }}
                >
                  {c.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* VISION */}
      <section className="px-[5vw] py-5 bg-background">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 items-end">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="section-tag !mb-1">Our Purpose</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] text-[clamp(20px,2.5vw,32px)]">
                The Trusted, Neutral
                <br />
                <span className="text-ln-purple">Logistics Intelligence Platform</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <div>
                <p className="text-muted-foreground text-[13px] leading-[1.5]">
                  LogisticsNow is uniquely positioned with trust, technology & data to enable your digital logistics
                  ecosystem.
                </p>
                <div className="flex gap-3 mt-3">
                  <Link to="/product" className="btn-primary-ln no-underline !px-6 !py-2.5 !text-[13px]">
                    Explore Platform →
                  </Link>
                  <Link
                    to="/product"
                    className="btn-secondary-ln no-underline !px-5 !py-2 !text-[13px] !text-ln-purple !border-ln-purple"
                  >
                    Meet LoRRI
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {VISION_CARDS.map((c) => (
              <StaggerItem key={c.title}>
                <div className="card-hover !p-4 !rounded-2xl">
                  <div className="text-[20px] mb-1.5">{c.icon}</div>
                  <div className="font-display text-[14px] font-bold mb-1">{c.title}</div>
                  <div className="text-[11.5px] text-muted-foreground leading-[1.55]">{c.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* AI SUITE */}
      <section className="px-[5vw] py-5 bg-background">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 items-end">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="section-tag !mb-1">AI Suite</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] text-[clamp(20px,2.5vw,32px)]">
                Not AI as a Feature.
                <br />
                <span className="text-ln-purple">AI as the Foundation.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <p className="text-muted-foreground text-[13px] leading-[1.5]">
                Nine proprietary AI agents and engines built ground-up for Indian logistics — each solving a critical
                industry problem at national scale.
              </p>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                tag: "PROCUREMENT",
                tagColor: "hsl(var(--ln-green))",
                name: "Carrier Selection Agent",
                desc: "Evaluates carriers, scores performance per lane, normalizes bids, and recommends optimal award strategies.",
              },
              {
                tag: "DOCUMENT AI",
                tagColor: "hsl(var(--ln-blue))",
                name: "Document Intelligence Agent",
                desc: "LR-POD-Invoice matching — extracts data via OCR, auto-matches documents, and detects discrepancies.",
              },
              {
                tag: "NEGOTIATION",
                tagColor: "hsl(var(--ln-orange))",
                name: "Autonomous Negotiation Agent",
                desc: "Negotiates with multiple LSPs in parallel — generates counter-offers and optimizes procurement costs.",
              },
              {
                tag: "ROUTING",
                tagColor: "hsl(var(--ln-purple))",
                name: "AI Route Optimization Engine",
                desc: "Route planning considering distance, time, cost, delivery windows — with dynamic re-routing.",
              },
              {
                tag: "CONSOLIDATION",
                tagColor: "hsl(var(--ln-green))",
                name: "Load Consolidation Engine",
                desc: "Maximizes vehicle utilization, minimizes empty miles, and simulates consolidation scenarios.",
              },
              {
                tag: "ESG",
                tagColor: "hsl(var(--ln-blue))",
                name: "Carbon Tracker Agent",
                desc: "Tracks shipment-level carbon emissions, identifies reduction opportunities & sustainability analytics.",
              },
            ].map((ai) => (
              <StaggerItem key={ai.name}>
                <div className="card-hover !p-4 !rounded-2xl h-full">
                  <span
                    className="inline-block text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full mb-1.5"
                    style={{ color: ai.tagColor, background: `${ai.tagColor}15`, border: `1px solid ${ai.tagColor}30` }}
                  >
                    {ai.tag}
                  </span>
                  <div className="font-display text-[14px] font-bold mb-1">{ai.name}</div>
                  <div className="text-[11.5px] text-muted-foreground leading-[1.55]">{ai.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="px-[5vw] py-5 bg-bg2">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 items-end">
            <ScrollReveal>
              <div className="section-tag !mb-1">6-Step Methodology</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] text-[clamp(20px,2.5vw,32px)]">
                From Data to <span className="text-ln-green">Savings</span> in 90 Days
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-[13px] leading-[1.5]">
                A proven procurement transformation methodology that has delivered $21Mn+ in savings across 120+
                enterprises.
              </p>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {METHODOLOGY_STEPS.map((s) => (
              <StaggerItem key={s.num}>
                <div className="card-hover !p-4 !rounded-2xl relative overflow-hidden">
                  <div className="absolute right-3 top-1 font-mono text-4xl font-bold text-ln-purple opacity-[0.07]">
                    {s.num}
                  </div>
                  {/* <div
                    className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-ln-purple font-display text-xs font-extrabold mb-2"
                    style={{ background: "rgba(57,49,133,.1)" }}
                  >
                    {s.num}
                  </div> */}
                  <div className="font-display text-[14px] font-bold mb-1">{s.title}</div>
                  <div className="text-[11.5px] text-muted-foreground leading-[1.55]">{s.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-[5vw] py-5 bg-background">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 items-end">
            <ScrollReveal>
              <div className="section-tag !mb-1">Case Studies</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] text-[clamp(20px,2.5vw,32px)]">
                Real Results, <span className="text-ln-purple">Real Clients</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-[13px] leading-[1.5]">
                Proven savings across geographies, industries and freight types — from India to Europe to Australia.
              </p>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {CASES.map((cs, i) => (
              <StaggerItem key={cs.client}>
                <div className="card-hover !p-4 !rounded-2xl">
                  <div className="font-mono text-[9px] font-bold tracking-[0.08em] uppercase text-ln-green mb-1.5">
                    {cs.tag}
                  </div>
                  <div className="font-display text-[14px] font-bold mb-2 leading-[1.3]">{cs.client}</div>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="p-2 bg-background rounded-lg text-center">
                      <div className="font-display text-[16px] font-extrabold" style={{ color: caseColors[i] }}>
                        {cs.spend}
                      </div>
                      <div className="text-[9px] text-muted-foreground">Spend</div>
                    </div>
                    <div className="p-2 rounded-lg text-center" style={{ background: "rgba(84,175,58,.08)" }}>
                      <div className="font-display text-[16px] font-extrabold text-ln-green">{cs.saving}</div>
                      <div className="text-[9px] text-muted-foreground">Savings ({cs.pct})</div>
                    </div>
                  </div>
                  {cs.extra && <div className="text-[11px] text-muted-foreground">📊 {cs.extra}</div>}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* <section className="px-[5vw] py-5 bg-bg2">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-3">
              <div className="section-tag justify-center !mb-1">Client Testimonials</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] text-[clamp(20px,2.5vw,32px)]">
                What Our Clients Say
              </h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {TESTIMONIALS.map((t, i) => (
              <StaggerItem key={i}>
                <div className="card-hover !p-5 !rounded-2xl relative overflow-hidden">
                  <div
                    className="text-[40px] text-ln-purple opacity-10 absolute top-0.5 left-3 leading-none"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    "
                  </div>
                  <div className="text-[12px] text-muted-foreground leading-[1.6] italic mb-3 relative z-[1]">
                    {t.q}
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                      style={{ background: t.grad }}
                    >
                      👤
                    </div>
                    <div>
                      <div className="text-[12px] font-bold">{t.name}</div>
                      <div className="text-[10px] text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      <CtaBanner />
    </div>
  );
};

export default Home;
