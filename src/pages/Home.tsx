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
  ChevronRight,
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
    desc: "Make faster, smarter logistics decisions using real-time data, predictive models, and continuous learning.",
    featured: true,
  },
  {
    icon: DollarSign,
    title: "Cost Optimization at Scale",
    desc: "Reduce freight costs through dynamic pricing, benchmarking, and network-level optimization.",
    featured: false,
  },
  {
    icon: Map,
    title: "End-to-End Visibility",
    desc: "Gain real-time visibility across shipments, routes, and carrier performance with predictive insights.",
    featured: false,
  },
  {
    icon: Network,
    title: "Network Collaboration Platform",
    desc: "Connect shippers, carriers, and partners in a unified, data-driven logistics network globally.",
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
        className="relative flex min-h-[calc(100vh-120px)] flex-col items-center justify-center overflow-hidden px-[5vw] pb-4 pt-6 sm:pb-6 sm:pt-8 text-center transition-all duration-700"
        style={{
          background: isDarkHero
            ? "linear-gradient(175deg, #0f1629 0%, #1a2142 40%, #162038 100%)"
            : undefined,
        }}
      >
        <button
          onClick={() => setHeroTheme(isDarkHero ? "light" : "dark")}
          className="absolute right-3 top-2 sm:right-6 sm:top-4 z-20 flex cursor-pointer items-center gap-1.5 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[11px] font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
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

        <div className="relative z-[2] max-w-[1000px] w-full">
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
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {isDarkHero ? (
                <>
                   <Link
                     to="/product"
                     className="inline-flex items-center gap-2 rounded-full no-underline !px-5 !py-2.5 sm:!px-7 sm:!py-3 !text-[13px] sm:!text-[15px] font-bold transition-all duration-300 hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #6AA9FF, #4A8FE7)", color: "#fff", boxShadow: "0 4px 24px rgba(106,169,255,0.35)" }}
                  >
                    Explore the Platform →
                  </Link>
                   <Link
                     to="/about"
                     className="inline-flex items-center gap-2 rounded-full no-underline !px-5 !py-2 sm:!px-6 sm:!py-2.5 !text-[13px] sm:!text-[15px] font-semibold transition-all duration-300 hover:scale-105"
                    style={{ background: "transparent", color: "rgba(255,255,255,0.85)", border: "2px solid rgba(255,255,255,0.25)" }}
                  >
                    Book a Demo
                  </Link>
                </>
              ) : (
                 <>
                   <Link to="/product" className="btn-primary-ln no-underline !px-5 !py-2.5 sm:!px-7 sm:!py-3 !text-[13px] sm:!text-[15px]">
                     Explore the Platform →
                   </Link>
                   <Link to="/about" className="btn-secondary-ln no-underline !px-5 !py-2 sm:!px-6 sm:!py-2.5 !text-[13px] sm:!text-[15px]">
                    Book a Demo
                  </Link>
                </>
              )}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.45}>
            <div className="relative z-[2] mx-auto mt-4 sm:mt-7 grid w-full max-w-[860px] grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105"
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
                     <div className="mb-0.5 font-display text-[18px] sm:text-[24px] font-black tracking-[-0.03em] text-ln-purple md:text-[28px]">
                       {s.num}
                    </div>
                     <div className="text-[9px] sm:text-[10.5px] font-semibold leading-tight" style={{ color: isDarkHero ? "rgba(255,255,255,0.6)" : "hsl(60,0%,45%)" }}>
                       {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="relative overflow-visible border-y border-border py-4 sm:py-6" style={{ clipPath: "inset(-20px 0 -20px 0)", background: "hsl(var(--bg3))" }}>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-48" style={{ background: "linear-gradient(to right, hsl(var(--bg3)), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-48" style={{ background: "linear-gradient(to left, hsl(var(--bg3)), transparent)" }} />

        <div className="mx-auto mb-4 max-w-4xl px-[5vw] text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ln-purple shadow-sm">
            <Network className="h-3 w-3" />
            Two-sided logistics network
          </div>
          <div className="mb-1.5 flex items-center justify-center gap-2 sm:gap-3">
            <div className="hidden sm:block h-[2px] w-8 rounded-full bg-ln-purple" />
            <h2 className="heading-section font-display font-extrabold leading-[1.1] tracking-[-0.03em] text-[clamp(18px,3vw,38px)]">
              A Network Trusted by Global <span className="text-ln-purple">Shippers and Carriers</span>
            </h2>
            <div className="hidden sm:block h-[2px] w-8 rounded-full bg-ln-purple" />
          </div>
          <p className="text-[11px] sm:text-[12px] font-semibold tracking-wide text-foreground">
            Supporting 120+ enterprises and 2300+ carriers across complex logistics networks
          </p>
          <p className="mt-1 inline-flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
            <Network className="h-3.5 w-3.5 text-ln-green" />
            Enabling seamless collaboration between shippers, carriers, and logistics partners
          </p>
        </div>

        <div className="relative z-20 mb-1.5 px-[5vw]">
          <div className="mx-auto max-w-[1280px]">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ln-purple" style={{ transform: 'translateZ(0)', willChange: 'auto', backfaceVisibility: 'hidden' }}>Shippers &amp; Manufacturers</div>
            <p className="text-[11px] text-muted-foreground" style={{ transform: 'translateZ(0)', willChange: 'auto', backfaceVisibility: 'hidden' }}>Enterprises optimizing logistics operations</p>
          </div>
        </div>

        <div className="mb-4 flex w-max items-center gap-4 sm:gap-8 animate-marquee">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => {
            const hasLogo = c.logo && c.logo.length > 7;
            return (
              <Tooltip key={`shipper-${i}`}>
                <TooltipTrigger asChild>
                  <div className="group relative flex h-[50px] w-[110px] sm:h-[64px] sm:w-[140px] cursor-pointer items-center justify-center rounded-lg border border-border bg-card/95 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_4px_20px_hsl(var(--ln-purple)/0.15)]">
                    {hasLogo ? (
                      <img
                        src={c.logo}
                        alt={c.name}
                       className="max-h-[28px] max-w-[80px] sm:max-h-[38px] sm:max-w-[100px] object-contain opacity-95 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
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

        <div className="relative z-20 mb-1.5 px-[5vw]">
          <div className="mx-auto max-w-[1280px]">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ln-green" style={{ transform: 'translateZ(0)', willChange: 'auto', backfaceVisibility: 'hidden' }}>Carriers &amp; Logistics Partners</div>
            <p className="text-[11px] text-muted-foreground" style={{ transform: 'translateZ(0)', willChange: 'auto', backfaceVisibility: 'hidden' }}>Network partners enabling execution at scale</p>
          </div>
        </div>

        <div className="flex w-max items-center gap-4 sm:gap-8 animate-marquee-reverse">
          {[...CLIENT_LOGOS_2, ...CLIENT_LOGOS_2].map((c, i) => {
            const hasLogo = c.logo && c.logo.length > 7;
            return (
              <Tooltip key={`partner-${i}`}>
                <TooltipTrigger asChild>
                  <div className="group relative flex h-[44px] w-[100px] sm:h-[56px] sm:w-[128px] cursor-pointer items-center justify-center rounded-lg border border-border/80 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_4px_18px_hsl(var(--ln-purple)/0.12)]">
                    {hasLogo ? (
                      <img
                        src={c.logo}
                        alt={c.name}
                         className="max-h-[24px] max-w-[70px] sm:max-h-[32px] sm:max-w-[90px] object-contain opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
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

      <section className="px-[5vw] py-6 sm:py-10" style={{ background: "hsl(var(--bg2))", paddingTop: '1%' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 items-center">
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
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
            {/* Powered by continuous learning across logistics data, enabling smarter decisions with every shipment. <br/>  */}
            Designed to be unbiased across shippers and carriers, enabling transparent and efficient decision-making
          </p>
        </div>
      </section>

      {/* AI DECISION ENGINE */}
      <section className="px-[5vw] pt-6 sm:pt-10 pb-4 sm:pb-6 bg-background">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 sm:mb-5 items-start">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="section-tag !mb-0.5 !font-black !tracking-[0.12em]">AI Decision Engine</div>
              <h2 className="font-display font-extrabold leading-[1.05] tracking-[-0.028em] text-[clamp(20px,2.5vw,32px)] mt-1">
                Not AI as a Feature.
                <br />
                <span className="text-ln-purple">AI as the Foundation.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <p className="text-muted-foreground text-[13px] leading-[1.5] md:pt-5">
                A coordinated system of AI agents working together to optimize procurement, routing, pricing, and execution across logistics networks.
              </p>
            </ScrollReveal>
          </div>

          {/* Animated Orchestration Flow */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="relative mb-2 py-2.5 px-4 rounded-xl overflow-hidden" style={{ background: 'hsl(var(--ln-purple) / 0.04)', border: '1px solid hsl(var(--ln-purple) / 0.08)' }}>
              {/* Animated pulse line */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute top-1/2 -translate-y-1/2 h-[2px] w-full">
                  <div className="absolute h-full w-[30%] rounded-full animate-[flowPulse_4s_ease-in-out_infinite]" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--ln-purple) / 0.3), hsl(var(--ln-green) / 0.3), transparent)' }} />
                </div>
              </div>
              <div className="flex items-center justify-center gap-0 relative z-10 overflow-x-auto">
                {['Procurement', 'Routing', 'Execution', 'Feedback', 'Optimization'].map((step, i) => {
                  const colors = ['hsl(var(--ln-green))', 'hsl(var(--ln-purple))', 'hsl(var(--ln-orange))', 'hsl(var(--ln-blue))', 'hsl(var(--ln-green))'];
                  return (
                    <div key={step} className="flex items-center">
                      <div className="flex flex-col items-center">
                         <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mb-1" style={{ background: colors[i], boxShadow: `0 0 8px ${colors[i]}` }} />
                         <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.08em] uppercase whitespace-nowrap" style={{ color: colors[i] }}>{step}</span>
                      </div>
                      {i < 4 && (
                        <div className="flex items-center mx-1 sm:mx-2">
                          <div className="w-4 sm:w-8 h-[1.5px] rounded-full" style={{ background: `linear-gradient(90deg, ${colors[i]}, ${colors[i + 1]})`, opacity: 0.3 }} />
                          <ChevronRight size={12} className="text-muted-foreground/30 -ml-1" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="text-center text-[10.5px] text-muted-foreground/60 mb-4">
              Agents collaborate across the workflow, sharing data and continuously improving decisions across the network.
            </p>
          </ScrollReveal>

          {/* Agent Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {/* Procurement Intelligence */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-5 rounded-full" style={{ background: 'hsl(var(--ln-green))' }} />
                  <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground">Procurement Intelligence</span>
                </div>
                {/* Hero Agent: Negotiation */}
                <div
                  className="card-hover !p-4 !rounded-2xl flex flex-col relative overflow-hidden group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                  style={{ border: '1.5px solid hsl(var(--ln-orange) / 0.2)', background: 'hsl(var(--ln-orange) / 0.03)' }}
                >
                  <div className="absolute top-2 right-2">
                    <span className="text-[8px] font-bold tracking-[0.1em] uppercase px-1.5 py-0.5 rounded-full" style={{ color: 'hsl(var(--ln-orange))', background: 'hsl(var(--ln-orange) / 0.1)', border: '1px solid hsl(var(--ln-orange) / 0.2)' }}>🔥 Core</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--ln-orange) / 0.12)' }}>
                      <Handshake size={17} style={{ color: 'hsl(var(--ln-orange))' }} strokeWidth={2} />
                    </div>
                    <span className="inline-block text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full" style={{ color: 'hsl(var(--ln-orange))', background: 'hsl(var(--ln-orange) / 0.08)', border: '1px solid hsl(var(--ln-orange) / 0.2)' }}>NEGOTIATION</span>
                  </div>
                  <div className="font-display text-[14px] font-bold mb-1">Autonomous Negotiation Agent</div>
                  <div className="text-[11px] text-muted-foreground leading-[1.55]">Automatically negotiate with multiple carriers to secure optimal pricing and terms.</div>
                  {/* Hover: Input → AI → Output */}
                  <div className="mt-2 pt-2 border-t border-border/40 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                    <div className="flex items-center gap-1.5 text-[9px]">
                      <span className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">Lane pricing</span>
                      <span className="text-muted-foreground/40">→</span>
                      <span className="px-1.5 py-0.5 rounded font-medium" style={{ color: 'hsl(var(--ln-orange))', background: 'hsl(var(--ln-orange) / 0.08)' }}>AI Agent</span>
                      <span className="text-muted-foreground/40">→</span>
                      <span className="px-1.5 py-0.5 rounded font-bold" style={{ color: 'hsl(var(--ln-green))', background: 'hsl(var(--ln-green) / 0.08)' }}>12% cost reduction</span>
                    </div>
                  </div>
                </div>
                {/* Carrier Selection */}
                <div className="card-hover !p-3.5 !rounded-2xl flex flex-col group transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--ln-green) / 0.12)' }}>
                      <Network size={15} style={{ color: 'hsl(var(--ln-green))' }} strokeWidth={2} />
                    </div>
                    <span className="inline-block text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full" style={{ color: 'hsl(var(--ln-green))', background: 'hsl(var(--ln-green) / 0.08)', border: '1px solid hsl(var(--ln-green) / 0.2)' }}>PROCUREMENT</span>
                  </div>
                  <div className="font-display text-[13.5px] font-bold mb-1">Carrier Selection Agent</div>
                  <div className="text-[11px] text-muted-foreground leading-[1.5] line-clamp-2">Identify the best carriers using performance data, pricing benchmarks, and network intelligence.</div>
                  <div className="mt-2 pt-2 border-t border-border/40 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                    <div className="flex items-center gap-1.5 text-[9px]">
                      <span className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">Carrier pool</span>
                      <span className="text-muted-foreground/40">→</span>
                      <span className="px-1.5 py-0.5 rounded font-medium" style={{ color: 'hsl(var(--ln-green))', background: 'hsl(var(--ln-green) / 0.08)' }}>AI Agent</span>
                      <span className="text-muted-foreground/40">→</span>
                      <span className="px-1.5 py-0.5 rounded font-bold" style={{ color: 'hsl(var(--ln-green))', background: 'hsl(var(--ln-green) / 0.08)' }}>Best-fit carrier</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Execution Intelligence */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-5 rounded-full" style={{ background: 'hsl(var(--ln-purple))' }} />
                  <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground">Execution Intelligence</span>
                </div>
                {/* Hero Agent: Route Optimization */}
                <div
                  className="card-hover !p-4 !rounded-2xl flex flex-col relative overflow-hidden group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                  style={{ border: '1.5px solid hsl(var(--ln-purple) / 0.2)', background: 'hsl(var(--ln-purple) / 0.03)' }}
                >
                  <div className="absolute top-2 right-2">
                    <span className="text-[8px] font-bold tracking-[0.1em] uppercase px-1.5 py-0.5 rounded-full" style={{ color: 'hsl(var(--ln-purple))', background: 'hsl(var(--ln-purple) / 0.1)', border: '1px solid hsl(var(--ln-purple) / 0.2)' }}>🔥 Core</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--ln-purple) / 0.12)' }}>
                      <Route size={17} style={{ color: 'hsl(var(--ln-purple))' }} strokeWidth={2} />
                    </div>
                    <span className="inline-block text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full" style={{ color: 'hsl(var(--ln-purple))', background: 'hsl(var(--ln-purple) / 0.08)', border: '1px solid hsl(var(--ln-purple) / 0.2)' }}>ROUTING</span>
                  </div>
                  <div className="font-display text-[14px] font-bold mb-1">Route Optimization Agent</div>
                  <div className="text-[11px] text-muted-foreground leading-[1.55]">Continuously optimize routes based on cost, time, and real-time network conditions.</div>
                  <div className="mt-2 pt-2 border-t border-border/40 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                    <div className="flex items-center gap-1.5 text-[9px]">
                      <span className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">Route plan</span>
                      <span className="text-muted-foreground/40">→</span>
                      <span className="px-1.5 py-0.5 rounded font-medium" style={{ color: 'hsl(var(--ln-purple))', background: 'hsl(var(--ln-purple) / 0.08)' }}>AI Agent</span>
                      <span className="text-muted-foreground/40">→</span>
                      <span className="px-1.5 py-0.5 rounded font-bold" style={{ color: 'hsl(var(--ln-green))', background: 'hsl(var(--ln-green) / 0.08)' }}>18% faster delivery</span>
                    </div>
                  </div>
                </div>
                {/* Load Consolidation */}
                <div className="card-hover !p-3.5 !rounded-2xl flex flex-col group transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--ln-green) / 0.12)' }}>
                      <Container size={15} style={{ color: 'hsl(var(--ln-green))' }} strokeWidth={2} />
                    </div>
                    <span className="inline-block text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full" style={{ color: 'hsl(var(--ln-green))', background: 'hsl(var(--ln-green) / 0.08)', border: '1px solid hsl(var(--ln-green) / 0.2)' }}>CONSOLIDATION</span>
                  </div>
                  <div className="font-display text-[13.5px] font-bold mb-1">Load Consolidation Agent</div>
                  <div className="text-[11px] text-muted-foreground leading-[1.5] line-clamp-2">Maximize vehicle utilization and reduce empty miles across your network.</div>
                  <div className="mt-2 pt-2 border-t border-border/40 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                    <div className="flex items-center gap-1.5 text-[9px]">
                      <span className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">Shipments</span>
                      <span className="text-muted-foreground/40">→</span>
                      <span className="px-1.5 py-0.5 rounded font-medium" style={{ color: 'hsl(var(--ln-green))', background: 'hsl(var(--ln-green) / 0.08)' }}>AI Agent</span>
                      <span className="text-muted-foreground/40">→</span>
                      <span className="px-1.5 py-0.5 rounded font-bold" style={{ color: 'hsl(var(--ln-green))', background: 'hsl(var(--ln-green) / 0.08)' }}>95% utilization</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Intelligence & Automation */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-5 rounded-full" style={{ background: 'hsl(var(--ln-blue))' }} />
                  <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground">Intelligence & Automation</span>
                </div>
                {/* Document Intelligence */}
                <div className="card-hover !p-3.5 !rounded-2xl flex flex-col group transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--ln-blue) / 0.12)' }}>
                      <FileText size={15} style={{ color: 'hsl(var(--ln-blue))' }} strokeWidth={2} />
                    </div>
                    <span className="inline-block text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full" style={{ color: 'hsl(var(--ln-blue))', background: 'hsl(var(--ln-blue) / 0.08)', border: '1px solid hsl(var(--ln-blue) / 0.2)' }}>DOCUMENT AI</span>
                  </div>
                  <div className="font-display text-[13.5px] font-bold mb-1">Document Intelligence Agent</div>
                  <div className="text-[11px] text-muted-foreground leading-[1.5] line-clamp-2">Automate document processing, validation, and reconciliation across logistics workflows.</div>
                  <div className="mt-2 pt-2 border-t border-border/40 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                    <div className="flex items-center gap-1.5 text-[9px]">
                      <span className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">Documents</span>
                      <span className="text-muted-foreground/40">→</span>
                      <span className="px-1.5 py-0.5 rounded font-medium" style={{ color: 'hsl(var(--ln-blue))', background: 'hsl(var(--ln-blue) / 0.08)' }}>AI Agent</span>
                      <span className="text-muted-foreground/40">→</span>
                      <span className="px-1.5 py-0.5 rounded font-bold" style={{ color: 'hsl(var(--ln-green))', background: 'hsl(var(--ln-green) / 0.08)' }}>90% automation</span>
                    </div>
                  </div>
                </div>
                {/* Carbon Intelligence */}
                <div className="card-hover !p-3.5 !rounded-2xl flex flex-col group transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--ln-blue) / 0.12)' }}>
                      <Leaf size={15} style={{ color: 'hsl(var(--ln-blue))' }} strokeWidth={2} />
                    </div>
                    <span className="inline-block text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full" style={{ color: 'hsl(var(--ln-blue))', background: 'hsl(var(--ln-blue) / 0.08)', border: '1px solid hsl(var(--ln-blue) / 0.2)' }}>ESG</span>
                  </div>
                  <div className="font-display text-[13.5px] font-bold mb-1">Carbon Intelligence Agent</div>
                  <div className="text-[11px] text-muted-foreground leading-[1.5] line-clamp-2">Monitor emissions and proactively identify opportunities to reduce carbon impact across your logistics network.</div>
                  <div className="mt-2 pt-2 border-t border-border/40 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                    <div className="flex items-center gap-1.5 text-[9px]">
                      <span className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">Shipment data</span>
                      <span className="text-muted-foreground/40">→</span>
                      <span className="px-1.5 py-0.5 rounded font-medium" style={{ color: 'hsl(var(--ln-blue))', background: 'hsl(var(--ln-blue) / 0.08)' }}>AI Agent</span>
                      <span className="text-muted-foreground/40">→</span>
                      <span className="px-1.5 py-0.5 rounded font-bold" style={{ color: 'hsl(var(--ln-green))', background: 'hsl(var(--ln-green) / 0.08)' }}>Carbon reduction</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* AI Data Moat Signal */}
          <div className="mt-5 pt-4 border-t border-border/30 text-center">
            <p className="text-[11.5px] italic text-muted-foreground/70">
              Powered by continuous learning across logistics data — improving accuracy, pricing, and routing decisions with every transaction.
            </p>
          </div>
        </div>
      </section>

      {/* 6-STEP METHODOLOGY */}
      <section className="px-[5vw] py-8 sm:py-14 relative overflow-hidden" style={{ background: "hsl(var(--ln-purple) / 0.04)" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--ln-purple)) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-[1280px] mx-auto relative">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4 items-end">
            <ScrollReveal>
              <div className="section-tag !mb-1">6-Step Methodology</div>
              <div className="text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 text-muted-foreground/60">Designed for enterprise procurement & logistics teams</div>
              <h2 className="font-display font-extrabold leading-[1.05] tracking-[-0.028em] text-[clamp(22px,3vw,36px)]">
                From Data to <span className="text-ln-green">Savings</span> — Powered by AI
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[20px] font-display font-extrabold text-ln-purple">$21M+</span>
                <span className="text-[12px] text-muted-foreground">savings delivered across 120+ enterprises</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <p className="text-muted-foreground text-[13px] leading-[1.6] mb-4">
                  Powered by AI agents and network intelligence, LogisticsNow transforms your procurement operations in weeks — not months.
                </p>
                <div className="flex flex-col gap-1.5">
                  <button onClick={() => setOpen(true)} className="btn-primary-ln !px-6 !py-2.5 !text-[13px] w-fit cursor-pointer border-none">
                    Get Your 90-Day Optimization Plan →
                  </button>
                  <span className="text-[10.5px] text-muted-foreground/60 italic">See how much you can save in the first 90 days</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Flow Bar */}
          <ScrollReveal direction="up" delay={0.08}>
            <div className="hidden lg:flex items-center justify-between mb-1.5 px-2">
              {(['Data', 'Insights', 'Execution', 'Integration', 'Automation', 'Optimization'] as const).map((label, i) => {
                const colors = ['hsl(var(--ln-blue))', 'hsl(var(--ln-green))', 'hsl(var(--ln-orange))', 'hsl(var(--ln-purple))', 'hsl(var(--ln-green))', 'hsl(var(--ln-purple))'];
                const isHighlight = i === 2 || i === 5;
                return (
                  <div key={label} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center gap-1">
                      <div className={`rounded-full flex items-center justify-center font-mono font-bold text-white ${isHighlight ? 'w-8 h-8 text-[11px]' : 'w-7 h-7 text-[10px]'}`} style={{ background: colors[i], boxShadow: isHighlight ? `0 0 12px ${colors[i]}` : undefined }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span className={`font-bold tracking-[0.06em] uppercase ${isHighlight ? 'text-[10px]' : 'text-[9px]'}`} style={{ color: colors[i] }}>{label}</span>
                    </div>
                    {i < 5 && (
                      <div className="flex-1 h-[2px] mx-2 mt-[-12px]" style={{ background: `linear-gradient(90deg, ${colors[i]}, ${colors[i + 1]})`, opacity: 0.25 }} />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-[10.5px] text-muted-foreground/50 italic hidden lg:block">Each stage is powered by AI agents that continuously improve decisions across your logistics network.</p>
              <span className="text-[9px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full hidden lg:inline-block" style={{ color: 'hsl(var(--ln-purple))', background: 'hsl(var(--ln-purple) / 0.08)', border: '1px solid hsl(var(--ln-purple) / 0.15)' }}>Typical timeline: 8–12 weeks</span>
            </div>
          </ScrollReveal>

          {/* Step Cards */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {(METHODOLOGY_STEPS as Array<{num: string; title: string; desc: string}>).map((s, i) => {
              const icons = [Database, GitBranch, Handshake, FileSignature, Cog, Bot];
              const colorKeys = ['--ln-blue', '--ln-green', '--ln-orange', '--ln-purple', '--ln-green', '--ln-purple'];
              const StepIcon = icons[i];
              const color = colorKeys[i];
              const isHero = i === 2;
              const isSecondary = i === 5;
              return (
                <StaggerItem key={s.num}>
                  <div
                    className={`card-hover !p-5 !rounded-2xl relative overflow-hidden h-full group transition-all duration-300 hover:scale-[1.02] ${isHero ? 'ring-1' : ''}`}
                    style={{
                      borderLeft: `3px solid hsl(var(${color}) / ${isHero ? '0.6' : isSecondary ? '0.45' : '0.3'})`,
                      background: isHero ? `hsl(var(${color}) / 0.04)` : isSecondary ? `hsl(var(${color}) / 0.02)` : undefined,
                      ...(isHero ? { boxShadow: `0 0 20px hsl(var(${color}) / 0.08)`, borderColor: `hsl(var(${color}) / 0.3)` } : {}),
                    }}
                  >
                    {isHero && (
                      <div className="absolute top-2 right-2">
                        <span className="text-[8px] font-bold tracking-[0.1em] uppercase px-1.5 py-0.5 rounded-full" style={{ color: `hsl(var(${color}))`, background: `hsl(var(${color}) / 0.1)`, border: `1px solid hsl(var(${color}) / 0.2)` }}>⚡ Key Stage</span>
                      </div>
                    )}
                    <div className="absolute right-3 top-2 font-mono text-[38px] font-bold opacity-[0.08] leading-none" style={{ color: `hsl(var(${color}))` }}>
                      {s.num}
                    </div>
                    <div className={`rounded-lg flex items-center justify-center mb-2.5 ${isHero ? 'w-9 h-9' : 'w-8 h-8'}`} style={{ background: `hsl(var(${color}) / 0.1)` }}>
                      <StepIcon size={isHero ? 18 : 16} style={{ color: `hsl(var(${color}))` }} strokeWidth={2} />
                    </div>
                    <div className={`font-display font-bold mb-1 ${isHero ? 'text-[15px]' : 'text-[14px]'}`}>{s.title}</div>
                    <div className="text-[11.5px] text-muted-foreground leading-[1.55]">{s.desc}</div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Bottom CTA + Emotional Payoff */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="mt-5 sm:mt-8 text-center">
              <p className="font-display text-[13px] sm:text-[15px] font-bold mb-2 sm:mb-3 text-foreground/80">Transform procurement from a cost center into a strategic advantage.</p>
              <button onClick={() => setOpen(true)} className="btn-primary-ln !px-6 !py-2.5 sm:!px-8 sm:!py-3 !text-[12px] sm:!text-[13px] inline-block cursor-pointer border-none">
                Get Your 90-Day Optimization Plan →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-[5vw] py-5 mb-4 bg-background">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3 items-end">
            <ScrollReveal>
              <div className="section-tag !mb-0.5">Case Studies</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] text-[clamp(18px,2.2vw,28px)]">
                Proven Savings Across <span className="text-ln-purple">Global Logistics Networks</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-[12px] leading-[1.4]">
                Delivered through AI-driven procurement, routing, and network optimization.
              </p>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {(CASES as Array<{tag: string; industry: string; client: string; story: string; spend: string; saving: string; pct: string; extra: string; timeline: string}>).map((cs) => (
              <StaggerItem key={cs.client}>
                <div className="card-hover !p-3 !rounded-xl h-full flex flex-col group transition-all duration-300 hover:scale-[1.02]">
                  {/* Tag + Industry */}
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="font-mono text-[9px] font-bold tracking-[0.08em] uppercase text-ln-green">{cs.tag}</span>
                    <span className="text-[8px] font-bold tracking-[0.08em] uppercase px-1.5 py-px rounded-full bg-muted text-muted-foreground">{cs.industry}</span>
                  </div>
                  {/* Client + Story */}
                  <div className="font-display text-[12px] font-bold mb-0.5 leading-[1.2]">{cs.client}</div>
                  <div className="text-[9.5px] text-muted-foreground/70 leading-[1.35] mb-2 italic">{cs.story}</div>
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-1.5">
                    <div className="p-1.5 bg-muted/50 rounded-lg text-center">
                      <div className="text-[7px] text-muted-foreground uppercase tracking-wider mb-px">Spend</div>
                      <div className="font-display text-[11px] font-bold text-foreground/60">{cs.spend}</div>
                    </div>
                    <div className="p-1.5 rounded-lg text-center relative overflow-hidden" style={{ background: "hsl(var(--ln-green) / 0.08)", border: '1px solid hsl(var(--ln-green) / 0.2)', boxShadow: '0 0 10px hsl(var(--ln-green) / 0.06)' }}>
                      <div className="text-[7px] uppercase tracking-wider font-bold mb-px" style={{ color: 'hsl(var(--ln-green))' }}>Savings ({cs.pct})</div>
                      <div className="font-display text-[17px] font-extrabold leading-none" style={{ color: 'hsl(var(--ln-green))' }}>{cs.saving}</div>
                    </div>
                  </div>
                  {/* Timeline + Extra */}
                  <div className="mt-auto flex items-center justify-between gap-1">
                    <span className="text-[8px] font-bold tracking-[0.06em] uppercase px-1.5 py-px rounded-full" style={{ color: 'hsl(var(--ln-purple))', background: 'hsl(var(--ln-purple) / 0.06)', border: '1px solid hsl(var(--ln-purple) / 0.12)' }}>⏱ {cs.timeline}</span>
                    {cs.extra && (
                      <span className="text-[8px] text-muted-foreground/50 truncate">📊 {cs.extra}</span>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Aggregation Proof + CTA */}
          <div className="mt-3 text-center">
            <p className="text-[11px] text-muted-foreground/60 italic mb-2">
              Across industries, LogisticsNow consistently delivers 4–20% savings through AI-driven optimization.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link to="/contact" className="btn-primary-ln no-underline !px-6 !py-2 !text-[12px]">
                See How Much You Can Save →
              </Link>
              <Link to="/about" className="btn-secondary-ln no-underline !px-5 !py-2 !text-[12px]">
                View Detailed Case Studies
              </Link>
            </div>
          </div>
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
