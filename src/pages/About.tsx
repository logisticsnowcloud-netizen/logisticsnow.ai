import { Link } from "react-router-dom";
import { TESTIMONIALS } from "@/lib/data";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import CtaBanner from "@/components/CtaBanner";

const JOURNEY = [
  { num: 1, color: '#393185', tag: 'The Beginning', title: 'Vision Articulated at ISB Hyderabad', body: "Raj Saxena articulates the founding vision of a National Logistics Grid at the Indian School of Business." },
  { num: 2, color: '#54AF3A', tag: 'Early Validation', title: 'Shell E4 Incubation & Acclaimed Demo Day', body: "Selected for Shell's prestigious E4 program. Demo Day earned Shell's investment and global attention." },
  { num: 3, color: '#1AA6DF', tag: 'Scale-Up', title: 'Flipkart Leap Ahead + Fortune 500 Clients', body: "Selected for Flipkart/Walmart's Leap Ahead program. First major clients: Apollo Tyres, Jyothy Labs, Perfetti." },
  { num: 4, color: 'linear-gradient(135deg,#393185,#1AA6DF)', tag: 'Today & Beyond', title: 'Global Smart Logistics Grid — 4 Continents', body: "$2.5Bn+ analyzed, $21Mn+ savings, 120+ companies including 25+ Fortune 500." },
];

const WHY_US = [
  { icon: '🤝', title: 'Trusted & Neutral', desc: 'Completely neutral, independent platform. No conflicts of interest — ever.', proof: '🏛️ Shell · Flipkart / Walmart', proofBg: 'rgba(57,49,133,.07)', proofColor: '#393185', strip: 'linear-gradient(90deg,#393185,#1AA6DF)' },
  { icon: '🌍', title: 'Global Scale', desc: 'Multi-billion dollar spend data spanning 4 continents. 80,000+ routes, 2,200+ carriers.', proof: '📊 $2.5Bn+ · 80K+ routes', proofBg: 'rgba(84,175,58,.07)', proofColor: '#54AF3A', strip: 'linear-gradient(90deg,#54AF3A,#1AA6DF)' },
  { icon: '🧠', title: 'AI-Powered Intelligence', desc: 'Proprietary AI delivering multi-million dollar savings while improving service levels.', proof: '💰 $21Mn+ savings · 20%+ reduction', proofBg: 'rgba(26,166,223,.06)', proofColor: '#1AA6DF', strip: 'linear-gradient(90deg,#1AA6DF,#393185)' },
];

const VISION_PILLARS = [
  { icon: '🏗️', title: 'Digital Backbone', desc: 'Building the infrastructure that powers modern logistics', color: '#393185' },
  { icon: '🌐', title: 'National Logistics Grid', desc: 'Connecting every route, carrier & shipper in India and globally', color: '#1AA6DF' },
  { icon: '🤖', title: 'AI-First Approach', desc: 'Data science organizing the logistics industry at scale', color: '#54AF3A' },
  { icon: '🌱', title: 'Sustainability', desc: 'Lower emissions, better utilization, greener supply chains', color: '#fb923c' },
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
              <h1 className="font-display font-extrabold leading-[1.03] tracking-[-0.035em] mb-3" style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}>
                Building the <span className="text-ln-purple">Digital</span><br /><span className="text-ln-green">Backbone</span> of Logistics
              </h1>
              <p className="text-muted-foreground leading-[1.7] mb-5 max-w-[500px]" style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}>
                LogisticsNow uses Data Science to organize the logistics industry — optimizing operations, time and revenue across 4 continents.
              </p>
              <div className="flex gap-3 flex-wrap">
                <button className="btn-primary-ln !px-6 !py-2.5 !text-[13.5px]">Our Vision →</button>
                <a href="https://yourstory.com/2019/01/shell-second-e4-startups-india" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-ln-purple font-bold text-[13.5px] no-underline rounded-full px-5 py-2" style={{ border: '2px solid #393185' }}>▶ Read Our Story</a>
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
                  { n: '2200+', l: 'Carriers Onboarded', c: '#1AA6DF', bg: 'rgba(26,166,223,.07)' },
                  { n: '80K+', l: 'Routes Globally', c: '#393185', bg: 'rgba(57,49,133,.07)' },
                ].map((s) => (
                  <div key={s.l} className="p-4 rounded-xl text-center" style={{ background: s.bg }}>
                    <div className="font-display text-[22px] font-extrabold leading-none tracking-[-0.03em]" style={{ color: s.c }}>{s.n}</div>
                    <div className="text-[10.5px] text-muted-foreground mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                {['🐚 Shell', '🛒 Flipkart / Walmart', '🏆 GITEX 2025'].map((b) => (
                  <div key={b} className="flex items-center gap-1.5 px-3 py-1.5 bg-background border border-border rounded-full text-[11px] font-semibold text-muted-foreground">{b}</div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>

    {/* VISION — Visual Cards Layout */}
    <section className="py-[36px] px-[5vw] bg-background">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <ScrollReveal direction="up">
            <div>
              <div className="section-tag">Our Vision</div>
              <div className="relative pl-6 mb-4">
                <div className="absolute left-0 top-1 bottom-1 w-1 rounded-full" style={{ background: 'linear-gradient(180deg,#393185,#54AF3A)' }} />
                <div className="font-display font-bold leading-[1.16] tracking-[-0.025em]" style={{ fontSize: 'clamp(20px, 3vw, 36px)' }}>
                  "Build world class logistics ecosystems leveraging <span className="px-0.5 rounded-sm" style={{ background: 'rgba(84,175,58,.15)' }}>data and trust</span>"
                </div>
              </div>
              <div className="flex items-center gap-2.5 pl-6 mb-4">
                <div className="w-[18px] h-0.5 bg-ln-green rounded-sm flex-shrink-0" />
                <div className="text-[12.5px] text-muted-foreground">
                  <strong className="block text-foreground font-bold text-[13px]">Raj Saxena, Founder & CEO</strong>
                  ISB Hyderabad
                </div>
              </div>
              <p className="text-[14px] leading-[1.7] text-muted-foreground pl-6 mb-5">
                LogisticsNow is building the <strong className="text-foreground">Digital Backbone of Logistics</strong> — a trusted, neutral platform helping 25+ Fortune 500 companies drive visibility and prepare for upcoming logistics challenges.
              </p>
              {/* Vision Pillars moved here to fill left whitespace */}
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
              <div className="absolute right-[-10px] bottom-[-12px] font-display text-[90px] font-extrabold text-ln-purple opacity-5 leading-none pointer-events-none tracking-[-0.04em]">ISB</div>
              <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-3 text-[10px] font-bold tracking-[0.04em] text-ln-purple" style={{ background: 'rgba(57,49,133,.08)', border: '1px solid rgba(57,49,133,.15)' }}>🎓 Founding Moment</div>
              <h3 className="font-display text-[17px] font-extrabold mb-2">The Vision That Started It All</h3>
              <p className="text-[13px] text-muted-foreground leading-[1.7] mb-2">The inaugural event at ISB Hyderabad laid the foundation for India's most ambitious logistics intelligence platform. Shell's Demo Day was <strong className="text-foreground">widely acclaimed</strong>.</p>
              <a href="https://yourstory.com/2019/01/shell-second-e4-startups-india" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-ln-purple text-[12.5px] font-bold no-underline" style={{ borderBottom: '2px solid rgba(57,49,133,.15)', paddingBottom: 1 }}>Read Our Story on YourStory →</a>
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
    <section className="py-[36px] px-[5vw] bg-bg2">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5 items-end">
          <ScrollReveal>
            <div>
              <div className="section-tag">Why LogisticsNow</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(26px, 3.8vw, 48px)' }}>
                Uniquely Positioned with<br /><span className="text-ln-purple">Trust, Technology & Data</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-[15px] leading-[1.7]">Three pillars no other logistics platform combines — the reason India's most reputed companies trust us.</p>
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

    {/* JOURNEY */}
    <section className="py-[36px] px-[5vw] bg-background">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="mb-4">
            <div className="section-tag">Our Journey</div>
            <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em] mb-1.5" style={{ fontSize: 'clamp(26px, 3.8vw, 48px)' }}>
              From ISB to a <span className="text-ln-green">Global Logistics Grid</span>
            </h2>
            <p className="text-muted-foreground text-[15px] leading-[1.7]">Building trust, one shipper and carrier at a time — now across 4 continents.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 items-start">
          <div>
            {JOURNEY.map((j, i) => (
              <ScrollReveal key={j.num} delay={i * 0.08}>
                <div className="flex gap-3 pb-4 relative last:pb-0">
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
          <ScrollReveal direction="up" delay={0.2}>
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
                {[
                  { icon: '🏆', title: 'GITEX Dubai 2025', sub: 'Sustainability Leaders — Supernova Winner' },
                  { icon: '🐚', title: 'Shell E4 Program', sub: "Incubated by Shell's innovation arm" },
                  { icon: '🛒', title: 'Flipkart Leap Ahead', sub: 'Investment by Flipkart / Walmart' },
                ].map((r) => (
                  <div key={r.title} className="flex items-center gap-2 p-1.5 bg-card border border-border rounded-lg mb-1 last:mb-0">
                    <div className="text-base flex-shrink-0">{r.icon}</div>
                    <div>
                      <div className="text-[11.5px] font-bold leading-tight">{r.title}</div>
                      <div className="text-[10px] text-muted-foreground leading-tight">{r.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* INVESTORS */}
    <section className="py-[36px] px-[5vw] bg-bg2">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5 items-end">
          <ScrollReveal>
            <div>
              <div className="section-tag">Investors & Partners</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(26px, 3.8vw, 48px)' }}>
                Backed by the World's<br /><span className="text-ln-purple">Most Respected Names</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-[15px] leading-[1.7]">Strategic believers who accelerated our journey from founding vision to global platform.</p>
          </ScrollReveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '🐚', name: 'Shell', type: 'Incubator & Investor', desc: "Selected for Shell's prestigious E4 program. Demo Day was widely acclaimed — the moment that put LogisticsNow on the global map.", badge: '🌍 Energy · Environment · Entrepreneurship', badgeBg: 'rgba(57,49,133,.07)', badgeColor: '#393185', strip: 'linear-gradient(90deg,#393185,#1AA6DF)', link: 'https://yourstory.com/2019/01/shell-second-e4-startups-india' },
            { icon: '🛒', name: 'Flipkart / Walmart', type: 'Investor · Leap Ahead Program', desc: "Flipkart selected LogisticsNow for its Leap Ahead program — providing investment and direct mentorship by top leadership.", badge: '🚀 Investment + Mentorship + Scale Access', badgeBg: 'rgba(26,166,223,.07)', badgeColor: '#1AA6DF', strip: 'linear-gradient(90deg,#1AA6DF,#54AF3A)', link: '#' },
          ].map((inv) => (
            <StaggerItem key={inv.name}>
              <div className="bg-card border border-border rounded-[22px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-[4px]" style={{ background: inv.strip }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-[42px] h-[42px] rounded-xl border border-border bg-surface flex items-center justify-center text-xl flex-shrink-0">{inv.icon}</div>
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
            {['🏛️ Wadhwani Foundation', '🇬🇧 UK Government', '🎓 ISB Hyderabad', '🇮🇳 National Logistics Policy'].map((p) => (
              <div key={p} className="px-3.5 py-1.5 bg-surface border border-border rounded-full text-[11.5px] font-semibold text-muted-foreground">{p}</div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* TESTIMONIALS with Client Logos */}
    <section className="py-[36px] px-[5vw] bg-background">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5 items-end">
          <ScrollReveal>
            <div>
              <div className="section-tag">What Clients Say</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(26px, 3.8vw, 48px)' }}>
                Trusted by Those Who<br /><span className="text-ln-green">Know Logistics Best</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-[15px] leading-[1.7]">Direct quotes from supply chain leaders who rely on Team LoRRI every day.</p>
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
