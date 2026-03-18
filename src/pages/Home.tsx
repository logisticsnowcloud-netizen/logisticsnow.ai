import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CLIENTS, CASES, TESTIMONIALS, METHODOLOGY_STEPS } from "@/lib/data";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import CtaBanner from "@/components/CtaBanner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Bot, Coins, Leaf, Map, Zap, Users, DollarSign, User, Network, FileText, Handshake, Route, Container, Database, GitBranch, FileSignature, Cog, ChevronRight } from "lucide-react";
...
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
...
        <div className="mx-auto mb-10 max-w-4xl px-[5vw] text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ln-purple shadow-sm">
            <Network className="h-3.5 w-3.5" />
            Two-sided logistics network
          </div>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-10 rounded-full" style={{ background: "hsl(var(--ln-purple))" }} />
            <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[1.1] heading-section">
              A Network Trusted by Global <span className="text-ln-purple">Shippers and Carriers</span>
            </h2>
            <div className="h-[2px] w-10 rounded-full" style={{ background: "hsl(var(--ln-purple))" }} />
          </div>
          <p className="mt-2 text-[14px] font-semibold tracking-wide text-foreground">
            Supporting 120+ enterprises and 2300+ carriers across complex logistics networks
          </p>
          <p className="mt-3 inline-flex max-w-3xl items-center justify-center gap-2 text-[13px] text-muted-foreground">
            <Network className="h-4 w-4 text-ln-green" />
            Enabling seamless collaboration between shippers, carriers, and logistics partners
          </p>
        </div>

        <div className="mb-3 px-[5vw]">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-ln-purple">Shippers &amp; Manufacturers</div>
              <p className="mt-1 text-sm text-muted-foreground">Demand side of the network</p>
            </div>
          </div>
        </div>

        <div className="flex w-max items-center gap-10 animate-marquee mb-8">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => {
            const hasLogo = c.logo && c.logo.length > 7;
            return (
              <Tooltip key={`shipper-${i}`}>
                <TooltipTrigger asChild>
                  <div
                    className="group relative flex h-[88px] w-[168px] cursor-pointer items-center justify-center rounded-xl border border-border bg-card/95 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_6px_28px_hsl(var(--ln-purple)/0.15)]"
                    style={{ boxShadow: "0 2px 8px hsl(var(--ln-purple) / 0.06)" }}
                  >
                    {hasLogo ? (
                      <img
                        src={c.logo}
                        alt={c.name}
                        className="max-h-[52px] max-w-[118px] object-contain opacity-95 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                        style={{ mixBlendMode: "multiply" }}
                      />
                    ) : (
                      <span className="font-display text-sm font-bold text-muted-foreground transition-colors group-hover:text-foreground">
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

        <div className="mb-3 px-[5vw]">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-ln-green">Carriers &amp; Logistics Partners</div>
              <p className="mt-1 text-sm text-muted-foreground">Supply side of the network</p>
            </div>
          </div>
        </div>

        <div className="flex w-max items-center gap-10 animate-marquee-reverse">
          {[...CLIENT_LOGOS_2, ...CLIENT_LOGOS_2].map((c, i) => {
            const hasLogo = c.logo && c.logo.length > 7;
            return (
              <Tooltip key={`partner-${i}`}>
                <TooltipTrigger asChild>
                  <div
                    className="group relative flex h-[76px] w-[152px] cursor-pointer items-center justify-center rounded-xl border border-border/80 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_6px_24px_hsl(var(--ln-purple)/0.12)]"
                    style={{ boxShadow: "0 2px 8px hsl(var(--ln-purple) / 0.05)" }}
                  >
                    {hasLogo ? (
                      <img
                        src={c.logo}
                        alt={c.name}
                        className="max-h-[44px] max-w-[104px] object-contain opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                        style={{ mixBlendMode: "multiply" }}
                      />
                    ) : (
                      <span className="font-display text-sm font-bold text-muted-foreground transition-colors group-hover:text-foreground">
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

        <p className="mx-auto mt-8 max-w-3xl px-[5vw] text-center text-[13px] font-medium text-muted-foreground">
          Managing multi-million dollar freight operations across diverse industries
        </p>
      </div>

      <section className="px-[5vw] py-10" style={{ background: "hsl(var(--bg2))", paddingTop: '1%' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-center">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="section-tag !mb-2">Our Purpose</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] text-[clamp(20px,2.5vw,32px)]">
                The Trusted, Neutral
                <br />
                <span className="text-ln-purple">Logistics Intelligence Platform</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <div>
                <p className="text-[13.5px] leading-[1.65] mb-4" style={{ color: "hsl(60,0%,35%)" }}>
                  LogisticsNow combines trusted expertise, advanced technology, and data to power your digital logistics ecosystem.
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
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {VISION_CARDS.map((c) => {
              const Icon = c.icon;
              return (
                <StaggerItem key={c.title}>
                  <div
                    className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-default"
                    style={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      boxShadow: "0 2px 12px hsl(var(--ln-purple) / 0.05)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "hsl(var(--ln-green) / 0.1)" }}
                    >
                      <Icon size={20} strokeWidth={1.8} style={{ color: "hsl(var(--ln-green))" }} />
                    </div>
                    <div className="font-display text-[14.5px] font-bold mb-1.5">{c.title}</div>
                    <div className="text-[12px] leading-[1.6]" style={{ color: "hsl(60,0%,38%)" }}>{c.desc}</div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
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
