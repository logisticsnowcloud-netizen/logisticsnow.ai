import { Link } from "react-router-dom";
import { TESTIMONIALS } from "@/lib/data";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import CtaBanner from "@/components/CtaBanner";

const JOURNEY = [
  { num: 1, color: '#393185', tag: 'The Beginning', title: 'Vision for a Data-Driven Logistics Platform', body: "Raj Saxena presents the vision for a Smart Logistics Grid, laying the foundation for LogisticsNow as a global logistics intelligence platform." },
  { num: 2, color: '#54AF3A', tag: 'Early Validation', title: 'Shell E4 Incubation & Global Exposure', body: "LogisticsNow is selected for Shell's prestigious E4 incubation program, gaining early industry validation and global exposure." },
  { num: 3, color: '#393185', tag: 'Scale-Up', title: 'Strategic Investment & Fortune 500 Clients', body: "LogisticsNow receives strategic investment from Flipkart (Walmart), gaining access to large enterprise logistics networks and accelerating platform development." },
  { num: 4, color: '#54AF3A', tag: 'Today & Beyond', title: 'Multi-Continent Logistics Intelligence Network', body: "Expanded from early validation in India to a multi-continent logistics intelligence network — $2.5Bn+ analyzed, $21Mn+ savings, 120+ companies including 25+ Fortune 500." },
];

const WHY_US = [
  { icon: '🤝', title: 'Independent & Conflict-Free Network', desc: 'Unlike traditional logistics platforms, LogisticsNow does not operate assets — enabling unbiased optimization across carriers and networks.', proof: '🏛️ Shell · Flipkart · Carnegie Mellon University Alumni', proofBg: 'rgba(57,49,133,.07)', proofColor: '#393185', strip: 'linear-gradient(90deg,#393185,#1AA6DF)' },
  { icon: '🌍', title: 'Global Freight Intelligence Network', desc: 'A intelligence platform analyzing billions in freight spend across thousands of routes and networks worldwide — spanning USA, Europe & APAC.', proof: '📊 $2.5Bn+ · 80K+ routes · 4+ continents', proofBg: 'rgba(84,175,58,.07)', proofColor: '#54AF3A', strip: 'linear-gradient(90deg,#54AF3A,#1AA6DF)' },
  { icon: '🧠', title: 'Self-Learning Logistics AI', desc: 'Proprietary AI models that continuously learn from cross-enterprise network effects, identifying cost optimization opportunities and improving logistics performance over time.', proof: '💰 $21Mn+ savings · 20%+ reduction', proofBg: 'rgba(26,166,223,.06)', proofColor: '#1AA6DF', strip: 'linear-gradient(90deg,#1AA6DF,#393185)' },
];

const VISION_PILLARS = [
  { icon: '🏗️', title: 'Digital Backbone', desc: 'Building the digital infrastructure that enables intelligent logistics operations across carriers, shippers, and supply chains.', color: '#393185' },
  { icon: '🌐', title: 'Smart Logistics Grid', desc: 'Connecting carriers, shippers, and logistics routes into a unified global logistics intelligence network.', color: '#54AF3A' },
  { icon: '🤖', title: 'AI-First Approach', desc: 'AI-powered analytics transforming logistics data into actionable insights and optimization opportunities.', color: '#54AF3A' },
  { icon: '🌱', title: 'Sustainability', desc: 'Optimizing logistics networks to reduce emissions, improve asset utilization, and enable more sustainable supply chains.', color: '#393185' },
];

const DIFFERENTIATORS = [
  { icon: '⚖️', title: 'Neutral Intelligence Layer', desc: 'Asset-light model ensures unbiased carrier recommendations and rate benchmarking — no conflicts of interest.', color: '#393185' },
  { icon: '🔄', title: 'AI-Driven Continuous Learning', desc: 'Models improve with every transaction, learning from billions in freight data across industries and geographies.', color: '#54AF3A' },
  { icon: '🔗', title: 'Cross-Enterprise Network Effects', desc: 'Each new shipper and carrier strengthens the intelligence network — creating compounding value for all participants.', color: '#1AA6DF' },
];

const About = () => (
  <div>
    {/* HERO */}
    <div className="px-[5vw] pt-10 pb-[28px] bg-background relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 opacity-45 pointer-events-none" style={{ backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 70% at 15% 50%, transparent 30%, hsl(var(--background)) 100%)' }} />
      <div className="relative z-[2] max-w-[1280px] mx-auto">
        <div className="flex items-center gap-[7px] text-xs font-semibold tracking-[0.07em] uppercase text-muted-foreground mb-5">
          <Link to="/" className="no-underline text-muted-foreground font-body">Home</Link>
          <span>›</span>
          <span className="text-ln-purple">About Us</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <ScrollReveal direction="up">
            <div>
              <div className="section-tag">Company</div>
              <h1 className="font-display font-extrabold leading-[1.03] tracking-[-0.035em] mb-3 heading-hero">
                Building the <span className="text-ln-purple">Digital</span><br /><span className="text-ln-green">Backbone</span> of Logistics
              </h1>
              <p className="text-muted-foreground leading-[1.7] mb-2 max-w-[500px]" style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}>
                LogisticsNow helps enterprises optimize logistics procurement and operations using AI-driven analytics and real-time freight intelligence. 
                Our platform enables organizations to reduce freight costs, improve procurement decisions, and drive more efficient supply chain performance.
              </p>
              {/* <p className="text-foreground font-semibold leading-[1.6] mb-5 max-w-[500px]" style={{ fontSize: 'clamp(13px, 1.4vw, 14.5px)' }}>
                LogisticsNow is building the world's first neutral, AI-powered logistics intelligence layer connecting shippers, carriers, and networks globally.
              </p> */}
              <div className="flex gap-3 flex-wrap">
                <Link to="/product" className="btn-primary-ln !px-6 !py-2.5 !text-[13.5px]">Explore Our Platform →</Link>
                
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-surface border border-border rounded-[24px] p-6">
              <div className="section-tag">LogisticsNow Today</div>
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {[
                  { n: '$2.5Bn+', l: 'Spend Analyzed', c: '#393185', bg: 'rgba(57,49,133,.07)' },
                  { n: '$21Mn+', l: 'Savings Locked-in', c: '#54AF3A', bg: 'rgba(84,175,58,.07)' },
                  { n: '2300+', l: 'Carriers Onboarded', c: '#54af3a', bg: 'rgba(26,166,223,.07)' },
                  { n: '80K+', l: 'Routes Globally', c: '#393185', bg: 'rgba(57,49,133,.07)' },
                ].map((s) => (
                  <div key={s.l} className="p-4 rounded-xl text-center" style={{ background: s.bg }}>
                    <div className="font-display text-[22px] font-extrabold leading-none tracking-[-0.03em]" style={{ color: s.c }}>{s.n}</div>
                    <div className="text-[10.5px] text-muted-foreground mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              {/* Global Presence */}
              <div className="flex items-center justify-center gap-2 p-2.5 bg-background border border-border rounded-xl">
                <span className="text-[14px]">🌍</span>
                <span className="text-[11px] font-semibold text-muted-foreground tracking-wide">US &nbsp;|&nbsp; Europe &nbsp;|&nbsp; India</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>

    {/* WHO THIS IS FOR */}
    <div className="px-[5vw] py-4 bg-bg2 border-b border-border">
      <div className="max-w-[1280px] mx-auto flex items-center justify-center gap-3 flex-wrap">
        <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground">Designed for:</span>
        {['Enterprise Shippers', 'Procurement Leaders', 'Supply Chain Teams'].map((t) => (
          <span key={t} className="px-4 py-1.5 bg-surface border border-border rounded-full text-[12px] font-semibold text-foreground">{t}</span>
        ))}
      </div>
    </div>

    {/* VISION — Visual Cards Layout */}
    <section id="our-vision" className="section-std bg-background">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <ScrollReveal direction="up">
            <div>
              <div className="section-tag">Our Vision</div>
              <div className="relative pl-6 mb-4">
                <div className="absolute left-0 top-1 bottom-1 w-1 rounded-full" style={{ background: 'linear-gradient(180deg,#393185,#54AF3A)' }} />
                <div className="flex items-end gap-3 flex-wrap">
                  <div className="font-display font-bold leading-[1.16] tracking-[-0.025em]" style={{ fontSize: 'clamp(20px, 3vw, 36px)' }}>
                    "Building world-class logistics ecosystems powered by <span className="px-0.5 rounded-sm" style={{ background: 'rgba(84,175,58,.15)' }}>data, intelligence, and trust.</span>"                     
                    <span className="w-[18px] h-0.5 bg-ln-green rounded-sm" />
                    <strong className="text-foreground font-bold text-[13px] whitespace-nowrap" style={{marginLeft: '3%'}}>----- Raj Saxena, Founder & CEO</strong>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pl-6">
                {VISION_PILLARS.map((v) => (
                  <div key={v.title} className="group bg-surface border border-border rounded-[16px] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[20px] mx-auto mb-2 transition-transform group-hover:scale-110" style={{ background: `${v.color}14`, border: `1.5px solid ${v.color}30` }}>
                      {v.icon}
                    </div>
                    <div className="font-display text-[13px] font-extrabold mb-0.5" style={{ color: v.color }}>{v.title}</div>
                    <p className="text-[11px] text-muted-foreground leading-[1.5]">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <div className="bg-surface border border-border rounded-[22px] p-5 relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-3 text-[10px] font-bold tracking-[0.04em] text-ln-purple" style={{ background: 'rgba(57,49,133,.08)', border: '1px solid rgba(57,49,133,.15)' }}>🎓 Founding Moment</div>
              <h3 className="font-display text-[17px] font-extrabold mb-2">Where the Vision Began</h3>
              <p className="text-[13px] text-muted-foreground leading-[1.7] mb-2">
                The idea behind LogisticsNow originated from a vision to transform global logistics through data and intelligence — first articulated at ISB Hyderabad, where Raj Saxena presented the blueprint for a data-driven logistics platform.
              </p>
              <p className="text-[12.5px] text-foreground font-medium leading-[1.6]">
                Today, LogisticsNow is evolving into a global logistics intelligence network spanning multiple continents.
              </p>
            </div>
            {/* YouTube Video */}
            <div className="mt-3 rounded-[18px] overflow-hidden border border-border" style={{ aspectRatio: '16/9' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/woXiLVkKSpQ?start=11"
                title="LogisticsNow Vision"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="block"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* WHY US */}
    <section className="section-std bg-bg2">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5 items-end">
          <ScrollReveal>
            <div>
              <div className="section-tag">Why LogisticsNow</div>
               <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] heading-section">
                Uniquely Positioned with<br /><span className="text-ln-purple">Independence, Intelligence & Scale</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-body-lg">
              Unlike traditional logistics platforms, LogisticsNow does not operate assets — enabling unbiased optimization across carriers and networks.
            </p>
          </ScrollReveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {WHY_US.map((w) => (
            <StaggerItem key={w.title}>
              <div className="bg-card border border-border rounded-[22px] p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-[48px] h-[48px] rounded-xl flex items-center justify-center text-[22px] mb-4" style={{ background: 'rgba(57,49,133,.08)' }}>{w.icon}</div>
                <div className="font-display text-[18px] font-extrabold tracking-[-0.018em] mb-2">{w.title}</div>
                <p className="text-[13.5px] text-muted-foreground leading-[1.7] mb-3">{w.desc}</p>
                <div className="flex items-center gap-2 p-2 rounded-xl text-[11.5px] font-semibold" style={{ background: w.proofBg, color: w.proofColor }}>{w.proof}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* WHAT MAKES US DIFFERENT */}
    <section className="section-std bg-background">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-6">
            <div className="section-tag">Our Edge</div>
            <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] heading-section">
              What Makes LogisticsNow <span className="text-ln-green">Different</span>
            </h2>
            <p className="text-muted-foreground text-body-lg max-w-[600px] mx-auto mt-2">
              Processing billions in freight data across global supply chains — here's why enterprises and investors trust our platform.
            </p>
          </div>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {DIFFERENTIATORS.map((d) => (
            <StaggerItem key={d.title}>
              <div className="bg-surface border border-border rounded-[22px] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-[56px] h-[56px] rounded-2xl flex items-center justify-center text-[26px] mx-auto mb-4" style={{ background: `${d.color}14`, border: `1.5px solid ${d.color}30` }}>
                  {d.icon}
                </div>
                <div className="font-display text-[17px] font-extrabold tracking-[-0.018em] mb-2" style={{ color: d.color }}>{d.title}</div>
                <p className="text-[13px] text-muted-foreground leading-[1.7]">{d.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* JOURNEY */}
    <section className="section-std bg-bg2">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 items-start">
          <div>
            <ScrollReveal>
              <div className="mb-5">
                <div className="section-tag">Our Journey</div>
                <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] mb-1.5 heading-section">
                  From Vision to a <span className="text-ln-green">Global Logistics Grid</span>
                </h2>
                <p className="text-muted-foreground text-body-lg">Now operating across 4+ continents with enterprise clients and global carriers.</p>
              </div>
            </ScrollReveal>
            {JOURNEY.map((j, i) => (
              <ScrollReveal key={j.num} delay={i * 0.08}>
                <div className="flex gap-3 pb-6 relative last:pb-0" style={{paddingTop: '1%', paddingBottom: '2%'}}>
                  {i < JOURNEY.length - 1 && (
                    <div className="absolute left-[14px] top-[30px] bottom-0 w-0.5" style={{ background: 'linear-gradient(180deg,#393185,rgba(57,49,133,.08))' }} />
                  )}
                  <div className="w-[28px] h-[28px] rounded-full flex-shrink-0 flex items-center justify-center font-display text-[10px] font-extrabold relative z-[1]" style={{ background: j.color, color: '#fff' }}>{j.num}</div>
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.07em] text-muted-foreground uppercase mb-0">{j.tag}</div>
                    <div className="font-display text-[14px] font-bold mb-0.5 tracking-[-0.012em]">{j.title}</div>
                    <p className="text-[12px] text-muted-foreground leading-[1.6]">{j.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <div className="bg-surface border border-border rounded-[14px] p-3.5 mb-2.5">
                <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-muted-foreground mb-2">Platform at a Glance</div>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { n: '350+', l: 'Winning LSPs', c: '#393185', bg: 'rgba(57,49,133,.07)' },
                    { n: '1Mn+', l: 'Truckloads', c: '#54AF3A', bg: 'rgba(84,175,58,.07)' },
                    { n: '$500Mn+', l: 'Freight Procured', c: '#1AA6DF', bg: 'rgba(26,166,223,.07)' },
                    { n: '25+', l: 'Fortune 500', c: '#393185', bg: 'rgba(57,49,133,.07)' },
                  ].map((s) => (
                    <div key={s.l} className="p-2.5 rounded-lg text-center" style={{ background: s.bg }}>
                      <div className="font-display text-[18px] font-extrabold leading-none tracking-[-0.03em]" style={{ color: s.c }}>{s.n}</div>
                      <div className="text-[9.5px] text-muted-foreground mt-0.5 font-medium">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-[14px] p-3.5">
                <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-muted-foreground mb-2">Recognition & Backing</div>
                
                {/* Strategic Investors */}
                <div className="text-[8px] font-bold tracking-[0.08em] uppercase text-ln-purple mb-1 mt-2">Strategic Investors</div>
                {[
                  { icon: '/logos/shell.png', title: 'Shell E4 Program', sub: "Incubated by Shell's innovation arm" },
                  { icon: '/logos/flipkart.jpeg', title: 'Flipkart Leap Ahead', sub: 'Investment by Flipkart (Walmart)' },
                ].map((r) => (
                  <div key={r.title} className="flex items-center gap-2 p-1.5 bg-card border border-border rounded-lg mb-1">
                    <div className="text-base flex-shrink-0"><img width="50px" height="50px" src={r.icon} alt={r.title} /></div>
                    <div>
                      <div className="text-[11.5px] font-bold leading-tight">{r.title}</div>
                      <div className="text-[10px] text-muted-foreground leading-tight">{r.sub}</div>
                    </div>
                  </div>
                ))}

                {/* Innovation Programs */}
                <div className="text-[8px] font-bold tracking-[0.08em] uppercase text-ln-green mb-1 mt-3">Innovation Programs</div>
                {[
                  { icon: '/logos/microsoft.png', title: 'Microsoft Leap Program', sub: "Part of the Microsoft Leap Program" },
                  { icon: '/logos/nasscom.jpeg', title: 'InnoTrek ME 2024 Startups', sub: "Selected for Nasscom InnoTrek Startup Program" },
                ].map((r) => (
                  <div key={r.title} className="flex items-center gap-2 p-1.5 bg-card border border-border rounded-lg mb-1">
                    <div className="text-base flex-shrink-0"><img width="50px" height="50px" src={r.icon} alt={r.title} /></div>
                    <div>
                      <div className="text-[11.5px] font-bold leading-tight">{r.title}</div>
                      <div className="text-[10px] text-muted-foreground leading-tight">{r.sub}</div>
                    </div>
                  </div>
                ))}

                {/* Industry Recognition */}
                <div className="text-[8px] font-bold tracking-[0.08em] uppercase text-[#fb923c] mb-1 mt-3">Industry Recognition</div>
                {[
                  { icon: '/logos/gitex.png', title: 'GITEX Dubai 2025', sub: 'Sustainability Leaders — Supernova Winner' },
                ].map((r) => (
                  <div key={r.title} className="flex items-center gap-2 p-1.5 bg-card border border-border rounded-lg mb-1">
                    <div className="text-base flex-shrink-0"><img width="50px" height="50px" src={r.icon} alt={r.title} /></div>
                    <div>
                      <div className="text-[11.5px] font-bold leading-tight">{r.title}</div>
                      <div className="text-[10px] text-muted-foreground leading-tight">{r.sub}</div>
                    </div>
                  </div>
                ))}

                <p className="text-[10.5px] text-muted-foreground mt-2 italic leading-[1.5]">
                  Backed by global enterprises and innovation leaders accelerating logistics transformation.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* INVESTORS */}
    <section id="investors-partners" className="section-std bg-background">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5 items-end">
          <ScrollReveal>
            <div>
              <div className="section-tag">Investors & Partners</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] heading-section">
                Backed by Global Leaders in<br /><span className="text-ln-purple">Innovation & Supply Chain</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-body-lg">These partnerships have enabled LogisticsNow to scale globally and build a next-generation logistics intelligence platform.</p>
          </ScrollReveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '/logos/shell.png', name: 'Shell', type: 'Incubator & Investor', desc: "Shell selected LogisticsNow for its E4 innovation program, providing mentorship, industry validation, and global exposure.", badge: '🌍 Energy · Environment · Entrepreneurship', badgeBg: 'rgba(57,49,133,.07)', badgeColor: '#393185', strip: 'linear-gradient(90deg,#393185,#1AA6DF)', link: 'https://yourstory.com/2019/01/shell-second-e4-startups-india' },
            { icon: '/logos/flipkart.jpeg', name: 'Flipkart (Walmart)', type: 'Investor · Leap Ahead Program', desc: "Flipkart selected LogisticsNow for its Leap Ahead program, providing investment, mentorship, and access to large-scale logistics operations.", badge: '🚀 Investment + Mentorship + Scale Access', badgeBg: 'rgba(26,166,223,.07)', badgeColor: '#1AA6DF', strip: 'linear-gradient(90deg,#1AA6DF,#54AF3A)', link: '#' },
          ].map((inv) => (
            <StaggerItem key={inv.name}>
              <div className="bg-card border border-border rounded-[22px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-[4px]" style={{ background: inv.strip }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-[42px] h-[42px] rounded-xl border border-border bg-surface flex items-center justify-center text-xl flex-shrink-0">
                      <img width="30px" height="30px" src={inv.icon} alt={inv.name} />
                    </div>
                    <div>
                      <div className="font-display text-[19px] font-extrabold tracking-[-0.02em]">{inv.name}</div>
                      <div className="text-[10.5px] font-semibold tracking-[0.07em] uppercase text-muted-foreground">{inv.type}</div>
                    </div>
                  </div>
                  <p className="text-[13.5px] text-muted-foreground leading-[1.7] mb-3">{inv.desc}</p>
                  <div className="inline-flex items-center gap-[6px] px-3 py-1.5 rounded-xl text-[11.5px] font-bold" style={{ background: inv.badgeBg, color: inv.badgeColor }}>{inv.badge}</div>
                  <br />
                  <a href={inv.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2.5 text-ln-purple text-[12.5px] font-bold no-underline" style={{ borderBottom: '2px solid rgba(57,49,133,.15)', paddingBottom: 1 }}>Read the story →</a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.2}>
          <div className="mt-4 p-4 bg-card border border-border rounded-[22px] flex items-center gap-3 flex-wrap">
            <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-muted-foreground flex-shrink-0">Also Associated With</div>
            {['🎓 Carnegie Mellon University Alumni', '🏛️ Wadhwani Foundation', '🌐 National Logistics Policy'].map((p) => (
              <div key={p} className="px-3.5 py-1.5 bg-surface border border-border rounded-full text-[11.5px] font-semibold text-muted-foreground">{p}</div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* TESTIMONIALS with Client Logos */}
    <section className="section-std bg-bg2">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5 items-end">
          <ScrollReveal>
            <div>
              <div className="section-tag">What Clients Say</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] heading-section">
                Trusted by Those Who<br /><span className="text-ln-green">Know Logistics Best</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-body-lg">Insights from supply chain leaders who rely on LogisticsNow to optimize their logistics operations.</p>
          </ScrollReveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <StaggerItem key={i}>
              <div className="card-hover relative overflow-hidden !p-6">
                <div className="text-[48px] text-ln-purple opacity-10 absolute top-1 left-3 leading-none" style={{ fontFamily: 'Georgia, serif' }}>"</div>
                <div className="text-[13.5px] text-muted-foreground leading-[1.72] italic mb-4 relative z-[1]">{t.q}</div>
                <div className="flex items-center gap-3">
                  <div className="w-[48px] h-[48px] rounded-xl bg-background border border-border flex items-center justify-center p-1.5 flex-shrink-0">
                    <img src={t.logo} alt={t.role} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold">{t.name}</div>
                    <div className="text-[11.5px] text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <CtaBanner />
  </div>
);

export default About;
