import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CASES, TESTIMONIALS, METHODOLOGY_STEPS } from "@/lib/data";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import CtaBanner from "@/components/CtaBanner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Bot,
  Leaf,
  Map,
  Zap,
  DollarSign,
  User,
  Network,
  FileText,
  Handshake,
  Route,
  Container,
  Database,
  GitBranch,
  FileSignature,
  Cog,
} from "lucide-react";

const STATS = [
  { num: "$2.5Bn+", label: "Freight Spend Analyzed" },
  { num: "2300+", label: "Global Carriers Profiles" },
  { num: "$500Mn+", label: "Freight Procured" },
  { num: "$21M+", label: "Freight Cost Savings" },
];

const VISION_CARDS = [
  {
    icon: Bot,
    title: "AI-Driven Decision Intelligence",
    desc: "Optimize procurement, routing, and pricing using real-time data and machine learning.",
    featured: true,
  },
  {
    icon: DollarSign,
    title: "Cost Optimization at Scale",
    desc: "Reduce freight costs through dynamic pricing, benchmarking, and network optimization.",
    featured: false,
  },
  {
    icon: Map,
    title: "End-to-End Visibility",
    desc: "Gain real-time insights across shipments, routes, and carrier performance.",
    featured: false,
  },
  {
    icon: Network,
    title: "Network Collaboration Platform",
    desc: "Seamlessly connect shippers, carriers, and partners across a unified logistics network.",
    featured: false,
  },
];

const CLIENT_LOGOS = [
  { name: "Apollo Tyres", logo: "/logos/apollo.jpeg", insight: "Tyre manufacturing • Enterprise freight network" },
  { name: "CEAT", logo: "/logos/ceat.png", insight: "Tyre manufacturing • High-volume lane procurement" },
  { name: "Perfetti Van Melle", logo: "/logos/perfetti.png", insight: "FMCG • Pan-India distribution" },
  { name: "Saint-Gobain", logo: "/logos/saint-gobain.png", insight: "Industrial manufacturing • Plant-to-distributor logistics" },
  { name: "General Mills", logo: "/logos/general-mills.png", insight: "FMCG • Multi-node supply chain" },
  { name: "Kimberly-Clark", logo: "/logos/kimberly-clark.png", insight: "Consumer goods • National distribution" },
  { name: "Jyothy Labs", logo: "/logos/jyothy-labs.png", insight: "FMCG • Large-scale primary and secondary movement" },
  { name: "Hidromas", logo: "/logos/hidromas.png", insight: "Industrial manufacturing • Export logistics" },
  { name: "Onida MIRC Electronics", logo: "/logos/mirc.png", insight: "Electronics • Regional distribution" },
  { name: "Bajaj Electricals", logo: "/logos/bajaj.png", insight: "Consumer durables • Omnichannel logistics" },
  { name: "Schreiber Foods", logo: "/logos/schreiber.png", insight: "Food manufacturing • Temperature-sensitive supply chain" },
  { name: "Shell", logo: "/logos/shell.png", insight: "Energy • Complex distribution operations" },
  { name: "Kimbal", logo: "/logos/kimbal.png", insight: "Industrial products • Managed freight operations" },
  { name: "Pernod Ricard", logo: "/logos/pernod.png", insight: "FMCG • Global supply chain" },
  { name: "Paper Boat", logo: "/logos/paperboat.jpeg", insight: "Beverage • Agile outbound logistics" },
  { name: "Sundrop", logo: "/logos/sundrop.png", insight: "FMCG • National food distribution" },
  { name: "Vredestein", logo: "/logos/vredestein.jpg", insight: "Tyres • Channel and dealer logistics" },
  { name: "Zydus Wellness", logo: "/logos/zydus.jpeg", insight: "Consumer health • Nationwide distribution" },
];

const CLIENT_LOGOS_2 = [
  { name: "CJ Darcl", logo: "/logos/cjdarcl.png", insight: "Integrated transport partner" },
  { name: "CEVA Logistics", logo: "/logos/ceva.png", insight: "Global logistics partner" },
  { name: "DHL", logo: "/logos/dhl.png", insight: "Global supply chain partner" },
  { name: "DSV", logo: "/logos/dsv.png", insight: "Multimodal logistics partner" },
  { name: "FM Logistics", logo: "/logos/fm.png", insight: "Contract logistics partner" },
  { name: "Fiege", logo: "/logos/fiege.png", insight: "Warehousing and transport partner" },
  { name: "Maersk", logo: "/logos/Maersk.png", insight: "Global logistics partner" },
  { name: "RCI Logistics", logo: "/logos/rci.jpeg", insight: "Regional transport partner" },
  { name: "Rhenus Logistics", logo: "/logos/rhenus.png", insight: "Global freight partner" },
  { name: "Sennder", logo: "/logos/sennder.png", insight: "Digital road freight partner" },
  { name: "SCC India", logo: "/logos/scc.jpeg", insight: "Logistics services partner" },
  { name: "TCI Freight", logo: "/logos/tci.png", insight: "Domestic freight partner" },
  { name: "TOLL", logo: "/logos/toll.png", insight: "Integrated logistics partner" },
  { name: "Western Carriers", logo: "/logos/wc.png", insight: "Multi-vertical logistics partner" },
  { name: "Quehenberger", logo: "/logos/quehenberger.png", insight: "European logistics partner" },
];

const Home = () => {
  const [heroTheme, setHeroTheme] = useState<"dark" | "light">("light");
  const isDarkHero = heroTheme === "dark";
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

    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.8 + 0.8,
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
        ctx.fillStyle = isDarkHero ? "rgba(106,169,255,0.13)" : "rgba(57,49,133,0.18)";
        ctx.fill();
      });
      pts.forEach((a, i) => {
        pts.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isDarkHero
              ? `rgba(106,169,255,${0.04 * (1 - d / 110)})`
              : `rgba(57,49,133,${0.04 * (1 - d / 110)})`;
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
  }, [isDarkHero]);

  return (
    <div>
      {/* HERO */}
      <section
        className="relative flex min-h-[calc(100vh-120px)] flex-col items-center justify-center overflow-hidden px-[5vw] pb-6 pt-8 text-center transition-all duration-700"
        style={{
          background: isDarkHero
            ? "linear-gradient(175deg, #0f1629 0%, #1a2142 40%, #162038 100%)"
            : undefined,
        }}
      >
        <button
          onClick={() => setHeroTheme(isDarkHero ? "light" : "dark")}
          className="absolute right-6 top-4 z-20 flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
          style={{
            background: isDarkHero ? "rgba(255,255,255,0.1)" : "rgba(57,49,133,0.08)",
            border: isDarkHero ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(57,49,133,0.2)",
            color: isDarkHero ? "rgba(255,255,255,0.8)" : "hsl(244,44%,36%)",
            backdropFilter: "blur(8px)",
          }}
        >
          {isDarkHero ? "☀️" : "🌙"} {isDarkHero ? "Light" : "Dark"} Hero
        </button>

        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: isDarkHero ? 0.06 : 0.55,
            backgroundImage: isDarkHero
              ? "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)"
              : "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: isDarkHero
              ? "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, #0f1629 100%)"
              : "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, hsl(var(--background)) 100%)",
          }}
        />
        {isDarkHero && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 50% 40% at 50% 20%, rgba(106,169,255,0.08), transparent 70%)" }}
          />
        )}
        <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />

        <div className="relative z-[2] max-w-[1000px]">
          <ScrollReveal direction="up" delay={0}>
            <div
              className="mb-2 inline-flex items-center gap-2 rounded-full px-[16px] py-[5px] text-[11px] font-bold uppercase tracking-[0.07em] transition-colors duration-500"
              style={{
                background: isDarkHero ? "rgba(106,169,255,0.12)" : "rgba(57,49,133,0.09)",
                border: isDarkHero ? "1px solid rgba(106,169,255,0.25)" : "1px solid rgba(57,49,133,0.2)",
                color: isDarkHero ? "#6AA9FF" : "hsl(244,44%,36%)",
              }}
            >
              <span className="w-[6px] h-[6px] rounded-full inline-block" style={{ background: "#54AF3A" }} />
              {/* The AI Brain for Global Logistics */}
              AI-Powered Decision Intelligence for Logistics
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1
              className="heading-hero mb-2 font-display font-extrabold leading-[1.05] tracking-[-0.035em] transition-colors duration-500"
              style={{ color: isDarkHero ? "#fff" : undefined }}
            >
               {/* AI-Powered <span style={{ color: isDarkHero ? "#6AA9FF" : "hsl(244,44%,36%)" }}>Intelligence</span> for <br />
               <span style={{ color: "#54AF3A" }}>Global Logistics & Procurement</span> */}
               The <span style={{ color: isDarkHero ? "#6AA9FF" : "hsl(244,44%,36%)" }}>Intelligence Layer</span> for <br />
               <span style={{ color: "#54AF3A" }}>Modern Logistics Networks</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p
              className="mx-auto mb-4 max-w-[600px] leading-[1.5] transition-colors duration-500"
              style={{
                fontSize: "clamp(13px, 1.3vw, 16px)",
                color: isDarkHero ? "rgba(255,255,255,0.65)" : "hsl(60,0%,45%)",
              }}
            >
              LogisticsNow connects shippers, carriers, and data across large-scale logistics networks using AI to optimize procurement, routing, and pricing in real time.
              {/* An AI decision and execution platform optimizing freight procurement, routing, and pricing across global logistics networks. */}

              {/* AI-powered freight procurement, routing intelligence and supply chain visibility — trusted by 120+
              companies including 25+ Fortune 500s across 4 continents. */}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3">
              {isDarkHero ? (
                <>
                  <Link
                    to="/product"
                    className="inline-flex items-center gap-2 rounded-full no-underline !px-7 !py-3 !text-[15px] font-bold transition-all duration-300 hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #6AA9FF, #4A8FE7)", color: "#fff", boxShadow: "0 4px 24px rgba(106,169,255,0.35)" }}
                  >
                    Explore the Platform →
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 rounded-full no-underline !px-6 !py-2.5 !text-[15px] font-semibold transition-all duration-300 hover:scale-105"
                    style={{ background: "transparent", color: "rgba(255,255,255,0.85)", border: "2px solid rgba(255,255,255,0.25)" }}
                  >
                    Book a Demo
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/product" className="btn-primary-ln no-underline !px-7 !py-3 !text-[15px]">
                    Explore the Platform →
                  </Link>
                  <Link to="/about" className="btn-secondary-ln no-underline !px-6 !py-2.5 !text-[15px]">
                    Book a Demo
                  </Link>
                </>
              )}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.45}>
            <div className="relative z-[2] mx-auto mt-7 grid w-full max-w-[860px] grid-cols-2 gap-4 md:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="group relative overflow-hidden rounded-2xl p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  style={isDarkHero ? {
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
                  } : {
                    background: "linear-gradient(135deg, rgba(57,49,133,0.07), rgba(57,49,133,0.03))",
                    border: "1px solid rgba(57,49,133,0.15)",
                    boxShadow: "0 4px 20px rgba(57,49,133,0.06)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: isDarkHero
                        ? "radial-gradient(circle at 50% 0%, rgba(106,169,255,0.12), transparent 70%)"
                        : "radial-gradient(circle at 50% 0%, rgba(57,49,133,0.1), transparent 70%)",
                    }}
                  />
                  <div className="relative z-[1]">
                    <div className="mb-1 font-display text-[24px] font-black tracking-[-0.03em] text-ln-purple md:text-[28px]">
                      {s.num}
                    </div>
                    <div className="text-[10.5px] font-semibold leading-tight" style={{ color: isDarkHero ? "rgba(255,255,255,0.6)" : "hsl(60,0%,45%)" }}>
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="relative overflow-visible border-y border-border py-6" style={{ clipPath: "inset(-20px 0 -20px 0)", background: "hsl(var(--bg3))" }}>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-48" style={{ background: "linear-gradient(to right, hsl(var(--bg3)), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-48" style={{ background: "linear-gradient(to left, hsl(var(--bg3)), transparent)" }} />

        <div className="mx-auto mb-4 max-w-4xl px-[5vw] text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ln-purple shadow-sm">
            <Network className="h-3 w-3" />
            Two-sided logistics network
          </div>
          <div className="mb-1.5 flex items-center justify-center gap-3">
            <div className="h-[2px] w-8 rounded-full bg-ln-purple" />
            <h2 className="heading-section font-display font-extrabold leading-[1.1] tracking-[-0.03em]">
              A Network Trusted by Global <span className="text-ln-purple">Shippers and Carriers</span>
            </h2>
            <div className="h-[2px] w-8 rounded-full bg-ln-purple" />
          </div>
          <p className="text-[12px] font-semibold tracking-wide text-foreground">
            Supporting 120+ enterprises and 2300+ carriers across complex logistics networks
          </p>
          <p className="mt-1 inline-flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
            <Network className="h-3.5 w-3.5 text-ln-green" />
            Enabling seamless collaboration between shippers, carriers, and logistics partners
          </p>
        </div>

        <div className="mb-1.5 px-[5vw]">
          <div className="mx-auto max-w-[1280px]">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ln-purple">Shippers &amp; Manufacturers</div>
            <p className="text-[11px] text-muted-foreground">Enterprises optimizing logistics operations</p>
          </div>
        </div>

        <div className="mb-4 flex w-max items-center gap-8 animate-marquee">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => {
            const hasLogo = c.logo && c.logo.length > 7;
            return (
              <Tooltip key={`shipper-${i}`}>
                <TooltipTrigger asChild>
                  <div className="group relative flex h-[64px] w-[140px] cursor-pointer items-center justify-center rounded-lg border border-border bg-card/95 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_4px_20px_hsl(var(--ln-purple)/0.15)]">
                    {hasLogo ? (
                      <img
                        src={c.logo}
                        alt={c.name}
                        className="max-h-[38px] max-w-[100px] object-contain opacity-95 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                        style={{ mixBlendMode: "multiply" }}
                      />
                    ) : (
                      <span className="font-display text-xs font-bold text-muted-foreground transition-colors group-hover:text-foreground">
                        {c.name}
                      </span>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-[240px] rounded-xl border-border bg-card px-3 py-2 text-card-foreground shadow-lg">
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.insight}</div>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        <div className="mb-1.5 px-[5vw]">
          <div className="mx-auto max-w-[1280px]">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ln-green">Carriers &amp; Logistics Partners</div>
            <p className="text-[11px] text-muted-foreground">Network partners enabling execution at scale</p>
          </div>
        </div>

        <div className="flex w-max items-center gap-8 animate-marquee-reverse">
          {[...CLIENT_LOGOS_2, ...CLIENT_LOGOS_2].map((c, i) => {
            const hasLogo = c.logo && c.logo.length > 7;
            return (
              <Tooltip key={`partner-${i}`}>
                <TooltipTrigger asChild>
                  <div className="group relative flex h-[56px] w-[128px] cursor-pointer items-center justify-center rounded-lg border border-border/80 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_4px_18px_hsl(var(--ln-purple)/0.12)]">
                    {hasLogo ? (
                      <img
                        src={c.logo}
                        alt={c.name}
                        className="max-h-[32px] max-w-[90px] object-contain opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                        style={{ mixBlendMode: "multiply" }}
                      />
                    ) : (
                      <span className="font-display text-xs font-bold text-muted-foreground transition-colors group-hover:text-foreground">
                        {c.name}
                      </span>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-[240px] rounded-xl border-border bg-card px-3 py-2 text-card-foreground shadow-lg">
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.insight}</div>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        <p className="mx-auto mt-3 max-w-3xl px-[5vw] text-center text-[11px] font-medium text-muted-foreground">
          Managing multi-million dollar freight operations across diverse industries
        </p>
      </div>

      <section className="px-[5vw] py-10" style={{ background: "hsl(var(--bg2))", paddingTop: '1%' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-center">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="section-tag !mb-2">What We Deliver</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] text-[clamp(20px,2.5vw,32px)]">
                A Neutral Intelligence Layer for
                <br />
                <span className="text-ln-purple">Logistics Networks</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <div>
                <p className="text-[13.5px] leading-[1.65] mb-4" style={{ color: "hsl(60,0%,35%)" }}>
                  {/* LogisticsNow combines trusted expertise, advanced technology, and data to power your digital logistics ecosystem. */}
                  LogisticsNow brings together data, AI, and execution to help enterprises optimize cost, improve visibility, and scale logistics operations.
                </p>
                <div className="flex gap-3">
                  <Link to="/product" className="btn-primary-ln no-underline !px-6 !py-2.5 !text-[13px]">
                    Explore Platform →
                  </Link>
                  {/* <Link
                    to="/product"
                    className="btn-secondary-ln no-underline !px-5 !py-2 !text-[13px]"
                    style={{ color: "hsl(var(--ln-purple))", borderColor: "hsl(var(--ln-purple))" }}
                  >
                    Meet LoRRI
                  </Link> */}
                </div>
              </div>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {VISION_CARDS.map((c) => {
              const Icon = c.icon;
              return (
                <StaggerItem key={c.title}>
                  <div
                    className={`group relative rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default ${c.featured ? 'p-6 lg:row-span-1' : 'p-5'}`}
                    style={{
                      background: c.featured ? "hsl(var(--ln-purple) / 0.06)" : "hsl(var(--card))",
                      border: c.featured ? "1.5px solid hsl(var(--ln-purple) / 0.2)" : "1px solid hsl(var(--border))",
                      boxShadow: c.featured ? "0 4px 20px hsl(var(--ln-purple) / 0.1)" : "0 2px 12px hsl(var(--ln-purple) / 0.05)",
                    }}
                  >
                    <div
                      className={`rounded-xl flex items-center justify-center mb-2.5 ${c.featured ? 'w-11 h-11' : 'w-9 h-9'}`}
                      style={{ background: c.featured ? "hsl(var(--ln-purple) / 0.12)" : "hsl(var(--ln-green) / 0.1)" }}
                    >
                      <Icon size={c.featured ? 22 : 18} strokeWidth={1.8} style={{ color: c.featured ? "hsl(var(--ln-purple))" : "hsl(var(--ln-green))" }} />
                    </div>
                    <div className={`font-display font-bold mb-1 ${c.featured ? 'text-[15px]' : 'text-[13.5px]'}`}>{c.title}</div>
                    <div className={`leading-[1.6] ${c.featured ? 'text-[12.5px]' : 'text-[11.5px]'}`} style={{ color: "hsl(60,0%,38%)" }}>{c.desc}</div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          <p className="text-center text-[11.5px] mt-3 italic" style={{ color: "hsl(60,0%,45%)" }}>
            Powered by continuous learning across logistics data, enabling smarter decisions with every shipment.
          </p>
        </div>
      </section>

      {/* AI SUITE */}
      <section className="px-[5vw] pt-10 pb-6 bg-background">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 items-start">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="section-tag !mb-0.5">AI Suite</div>
              <h2 className="font-display font-extrabold leading-[1.05] tracking-[-0.028em] text-[clamp(20px,2.5vw,32px)] mt-1">
                Not AI as a Feature.
                <br />
                <span className="text-ln-purple">AI as the Foundation.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <p className="text-muted-foreground text-[13px] leading-[1.5] md:pt-5">
                {/* Nine proprietary AI agents and engines built ground-up for Indian logistics — each solving a critical
                industry problem at national scale. */}
                A suite of proprietary AI agents built to optimize procurement, routing, pricing, and execution across complex logistics networks.
              </p>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
            {[
              {
                tag: "PROCUREMENT",
                tagColor: "hsl(var(--ln-green))",
                icon: Network,
                name: "Carrier Selection Agent",
                // desc: "Evaluates carriers, scores performance per lane, normalizes bids, and recommends optimal award strategies.",
                desc: "Analyzes carrier performance across lanes, normalizes bids, and recommends optimal carrier allocation strategies.",
              },
              {
                tag: "DOCUMENT AI",
                tagColor: "hsl(var(--ln-blue))",
                icon: FileText,
                name: "Document Intelligence Agent",
                // desc: "Extracts data via OCR, auto-matches LR-POD-Invoice documents, and detects discrepancies instantly.",
                desc: "Extracts and reconciles data across logistics documents using OCR and AI validation to automatically detect discrepancies.",
              },
              {
                tag: "NEGOTIATION",
                tagColor: "hsl(var(--ln-orange))",
                icon: Handshake,
                name: "Autonomous Negotiation Agent",
                // desc: "Negotiates with multiple LSPs in parallel, generates counter-offers, and optimizes procurement costs.",
                desc: "Conducts parallel negotiations with multiple logistics service providers, generating counter-offers to optimize procurement costs.",
              },
              {
                tag: "ROUTING",
                tagColor: "hsl(var(--ln-purple))",
                icon: Route,
                name: "Route Optimization Agent",
                // desc: "Plans routes by distance, time, cost, and delivery windows — with dynamic re-routing capabilities.",
                desc: "Optimizes routes across distance, time, cost, and delivery windows, with dynamic re-routing based on real-time conditions.",
              },
              {
                tag: "CONSOLIDATION",
                tagColor: "hsl(var(--ln-green))",
                icon: Container,
                name: "Load Consolidation Agent",
                // desc: "Maximizes vehicle utilization, minimizes empty miles, and simulates consolidation scenarios at scale.",
                desc: "Optimizes load building to maximize vehicle utilization and reduce empty miles across the network.",
              },
              {
                tag: "ESG",
                tagColor: "hsl(var(--ln-blue))",
                icon: Leaf,
                name: "Carbon Intelligence Agent",
                // desc: "Tracks shipment-level carbon emissions, identifies reduction opportunities, and powers ESG analytics.",
                desc: "Tracks shipment-level emissions and identifies carbon reduction opportunities across the logistics network.",
              },
            ].map((ai) => (
              <StaggerItem key={ai.name}>
                <div className="card-hover !p-3.5 !rounded-2xl h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${ai.tagColor}15` }}
                    >
                      <ai.icon size={15} style={{ color: ai.tagColor }} strokeWidth={2} />
                    </div>
                    <span
                      className="inline-block text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full"
                      style={{ color: ai.tagColor, background: `${ai.tagColor}12`, border: `1px solid ${ai.tagColor}30` }}
                    >
                      {ai.tag}
                    </span>
                  </div>
                  <div className="font-display text-[13.5px] font-bold mb-1">{ai.name}</div>
                  <div className="text-[11px] text-muted-foreground leading-[1.5] line-clamp-2">{ai.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="px-[5vw] py-16 relative overflow-hidden" style={{ background: "hsl(var(--ln-purple) / 0.04)", paddingTop: '1%' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--ln-purple)) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-[1280px] mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 items-end">
            <ScrollReveal>
              <div className="section-tag !mb-1">6-Step Methodology</div>
              <h2 className="font-display font-extrabold leading-[1.05] tracking-[-0.028em] text-[clamp(22px,3vw,36px)]">
                From Data to <span className="text-ln-green">Savings</span> in 90 Days
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <p className="text-muted-foreground text-[13px] leading-[1.6] mb-4">
                  {/* A proven logistics transformation methodology that has delivered over $21M in savings for enterprise supply chains. */}
                  A proven freight procurement transformation framework that has delivered <strong>$21Mn+ in savings across 120+ global enterprises.</strong>
                </p>
                <div className="flex gap-3">
                  <Link to="/contact" className="btn-primary-ln no-underline !px-6 !py-2.5 !text-[13px]">
                    Talk to a Procurement Expert →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Progress bar */}
          {/* <div className="hidden lg:flex items-center justify-between mb-6 px-4">
            {[1,2,3,4,5,6].map((n, i) => (
              <div key={n} className="flex items-center flex-1 last:flex-none">
                <div className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-[11px] font-bold text-white" style={{ background: "hsl(var(--ln-purple))" }}>
                  {String(n).padStart(2, '0')}
                </div>
                {i < 5 && (
                  <div className="flex-1 h-[2px] mx-2" style={{ background: "linear-gradient(90deg, hsl(var(--ln-purple) / 0.3), hsl(var(--ln-purple) / 0.08))" }} />
                )}
              </div>
            ))}
          </div> */}

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {(METHODOLOGY_STEPS as Array<{num: string; title: string; desc: string}>).map((s, i) => {
              const icons = [Database, GitBranch, Handshake, FileSignature, Cog, Bot];
              const StepIcon = icons[i];
              return (
                <StaggerItem key={s.num}>
                  <div className="card-hover !p-6 !rounded-2xl relative overflow-hidden h-full">
                    <div className="absolute right-3 top-2 font-mono text-[42px] font-bold text-ln-purple opacity-[0.12] leading-none">
                      {s.num}
                    </div>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: "hsl(var(--ln-purple) / 0.1)" }}>
                      <StepIcon size={18} className="text-ln-purple" strokeWidth={2} />
                    </div>
                    <div className="font-display text-[14.5px] font-bold mb-1.5">{s.title}</div>
                    <div className="text-[12px] text-muted-foreground leading-[1.6]">{s.desc}</div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-[5vw] py-5 mb-16 bg-background">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-end">
            <ScrollReveal>
              <div className="section-tag !mb-1">Case Studies</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] text-[clamp(20px,2.5vw,32px)]">
                Real Results, <span className="text-ln-purple">Real Clients</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-[13px] leading-[1.5]">
                Proven freight procurement savings across geographies, industries and transportation modes.
              </p>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {CASES.map((cs, i) => (
              <StaggerItem key={cs.client}>
                <div className="card-hover !p-6 !rounded-2xl h-full flex flex-col">
                  <div className="font-mono text-[10px] font-bold tracking-[0.08em] uppercase text-ln-green mb-2 flex items-center gap-1.5">
                    {cs.tag}
                  </div>
                  <div className="font-display text-[14px] font-bold mb-3 leading-[1.3]">{cs.client}</div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="p-2.5 bg-muted/50 rounded-xl text-center">
                      <div className="text-[9px] text-muted-foreground uppercase tracking-wider mb-0.5">Spend</div>
                      <div className="font-display text-[14px] font-bold text-foreground/70">
                        {cs.spend}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl text-center border border-ln-green/20" style={{ background: "hsl(var(--ln-green) / 0.08)" }}>
                      <div className="text-[9px] text-ln-green uppercase tracking-wider font-semibold mb-0.5">Savings ({cs.pct})</div>
                      <div className="font-display text-[20px] font-extrabold text-ln-green leading-none">{cs.saving}</div>
                    </div>
                  </div>
                  {cs.extra && (
                    <div className="text-[10px] text-muted-foreground mt-auto flex items-center gap-1">
                      <span className="text-[10px]">📊</span> {cs.extra}
                    </div>
                  )}
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
