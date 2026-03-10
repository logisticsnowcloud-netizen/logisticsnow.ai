import { Link } from "react-router-dom";
import { TESTIMONIALS } from "@/lib/data";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import CtaBanner from "@/components/CtaBanner";

const JOURNEY = [
  { num: 1, color: '#393185', tag: 'The Beginning', title: 'Vision Articulated at ISB Hyderabad', body: "Raj Saxena articulates the founding vision of a National Logistics Grid at the Indian School of Business — the idea that would reshape India's freight intelligence landscape." },
  { num: 2, color: '#54AF3A', tag: 'Early Validation', title: 'Shell E4 Incubation & Acclaimed Demo Day', body: "Selected for Shell's prestigious E4 program. The Demo Day presentation was widely acclaimed — earning Shell's investment and global attention." },
  { num: 3, color: '#1AA6DF', tag: 'Scale-Up', title: 'Flipkart Leap Ahead + Fortune 500 Clients', body: "Selected for Flipkart/Walmart's Leap Ahead program. First major clients: Apollo Tyres, Jyothy Labs, Perfetti Van Melle, MIRC Electronics, Saint-Gobain." },
  { num: 4, color: 'linear-gradient(135deg,#393185,#1AA6DF)', tag: 'Today & Beyond', title: 'Global Smart Logistics Grid — 4 Continents', body: "$2.5Bn+ analyzed, $21Mn+ savings, 120+ companies including 25+ Fortune 500. India, Europe, Australia, China. GITEX Dubai 2025 Sustainability Leaders winner." },
];

const WHY_US = [
  { icon: '🤝', title: 'Trusted & Neutral Platform', desc: 'We operate as a completely neutral, independent platform for both Shippers and Carriers. No conflicts of interest — ever.', proof: '🏛️ Incubated by Shell · Invested by Walmart / Flipkart', proofBg: 'rgba(57,49,133,.07)', proofColor: '#393185', strip: 'linear-gradient(90deg,#393185,#1AA6DF)' },
  { icon: '🌍', title: 'Global Reach at Scale', desc: 'Multi-billion dollar spend data spanning 3 continents. 80,000+ routes globally, 2,200+ carriers, 100+ truck types.', proof: '📊 $2.5Bn+ spend · 80K+ routes · 4 continents', proofBg: 'rgba(84,175,58,.07)', proofColor: '#54AF3A', strip: 'linear-gradient(90deg,#54AF3A,#1AA6DF)' },
  { icon: '🧠', title: 'Advanced Analytics & AI', desc: 'Proprietary AI delivering multi-million dollar savings while improving service levels. Not incremental — genuine transformation at scale.', proof: '💰 $21Mn+ locked-in · 20%+ avg reduction', proofBg: 'rgba(26,166,223,.06)', proofColor: '#1AA6DF', strip: 'linear-gradient(90deg,#1AA6DF,#393185)' },
];

const About = () => (
  <div>
    {/* HERO */}
    <div className="px-[5vw] pt-14 pb-[40px] bg-background relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 opacity-45 pointer-events-none" style={{ backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 70% at 15% 50%, transparent 30%, hsl(var(--background)) 100%)' }} />
      <div className="relative z-[2] max-w-[1280px] mx-auto">
        <div className="flex items-center gap-[7px] text-xs font-semibold tracking-[0.07em] uppercase text-muted-foreground mb-7">
          <Link to="/" className="no-underline text-muted-foreground font-body">Home</Link>
          <span>›</span>
          <span className="text-ln-purple">About Us</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[72px] items-center">
          <ScrollReveal direction="up">
            <div>
              <div className="section-tag">Company</div>
              <h1 className="font-display font-extrabold leading-[1.03] tracking-[-0.035em] mb-5" style={{ fontSize: 'clamp(38px, 5.5vw, 72px)' }}>
                Building the <span className="text-ln-purple">Digital</span><br /><span className="text-ln-green">Backbone</span> of Logistics
              </h1>
              <p className="text-muted-foreground leading-[1.78] mb-8 max-w-[520px]" style={{ fontSize: 'clamp(15px, 1.6vw, 18px)' }}>
                LogisticsNow uses the power of Data Science to organize the logistics industry — optimizing operations, time and revenue for Carriers, Transporters and Manufacturers across 4 continents.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <button className="btn-primary-ln !px-7 !py-3 !text-[14.5px]">Our Vision →</button>
                <a href="https://yourstory.com/2019/01/shell-second-e4-startups-india" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-ln-purple font-bold text-[14.5px] no-underline rounded-full px-6 py-2.5" style={{ border: '2px solid #393185' }}>▶ Read Our Story</a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-surface border border-border rounded-[28px] p-9">
              <div className="section-tag">LogisticsNow Today</div>
              <div className="grid grid-cols-2 gap-3.5 mb-5">
                {[
                  { n: '$2.5Bn+', l: 'Spend Analyzed', c: '#393185', bg: 'rgba(57,49,133,.07)' },
                  { n: '$21Mn+', l: 'Savings Locked-in', c: '#54AF3A', bg: 'rgba(84,175,58,.07)' },
                  { n: '2200+', l: 'Carriers Onboarded', c: '#1AA6DF', bg: 'rgba(26,166,223,.07)' },
                  { n: '80K+', l: 'Routes Globally', c: '#393185', bg: 'rgba(57,49,133,.07)' },
                ].map((s) => (
                  <div key={s.l} className="p-5 rounded-2xl text-center" style={{ background: s.bg }}>
                    <div className="font-display text-[26px] font-extrabold leading-none tracking-[-0.03em]" style={{ color: s.c }}>{s.n}</div>
                    <div className="text-[11.5px] text-muted-foreground mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                {['🐚 Shell', '🛒 Flipkart / Walmart', '🏆 GITEX 2025'].map((b) => (
                  <div key={b} className="flex items-center gap-1.5 px-3.5 py-[7px] bg-background border border-border rounded-full text-xs font-semibold text-muted-foreground">{b}</div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>

    {/* VISION */}
    <section className="py-[48px] px-[5vw] bg-background">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] items-start">
          <ScrollReveal direction="up">
            <div>
              <div className="section-tag">Our Vision</div>
              <div className="relative pl-7 mb-5">
                <div className="absolute left-0 top-1 bottom-1 w-1 rounded-full" style={{ background: 'linear-gradient(180deg,#393185,#54AF3A)' }} />
                <div className="font-display font-bold leading-[1.16] tracking-[-0.025em]" style={{ fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                  "Build world class logistics ecosystems leveraging <span className="px-0.5 rounded-sm" style={{ background: 'rgba(84,175,58,.15)' }}>data and trust</span>"
                </div>
              </div>
              <div className="flex items-center gap-3 pl-7 mb-9">
                <div className="w-[22px] h-0.5 bg-ln-green rounded-sm flex-shrink-0" />
                <div className="text-[13.5px] text-muted-foreground">
                  <strong className="block text-foreground font-bold">Raj Saxena, Founder & CEO</strong>
                  Inaugural address · Indian School of Business (ISB), Hyderabad
                </div>
              </div>
              <div className="text-[15.5px] leading-[1.85] text-muted-foreground">
                <p className="mb-4">LogisticsNow is building the <strong className="text-foreground">Digital Backbone of Logistics</strong> — helping Carriers, Transporters and Manufacturers build a stronger, technology-enabled transportation business.</p>
                <p className="mb-4">As the <strong className="text-foreground">trusted, neutral platform for logistics</strong>, we seek to create efficiency which is beyond imagination today. We have been trusted by 25+ Fortune 500 companies to drive business visibility and prepare for upcoming logistics challenges.</p>
                <p>We aim to build the <strong className="text-foreground">National Logistics Grid for India</strong> — and every other country in the future.</p>
              </div>
              <div className="mt-7 p-5 bg-surface rounded-r-[14px] text-[15px] italic leading-[1.72]" style={{ borderLeft: '3px solid #54AF3A' }}>
                "We are a team of enthusiastic, passionate, hardworking and self-driven people who truly want to address the inefficiencies in the Indian logistics space."
                <cite className="block mt-2 text-[11.5px] not-italic text-muted-foreground font-mono">— The LogisticsNow Team</cite>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <div>
              <div className="bg-surface border border-border rounded-[28px] p-8 relative overflow-hidden mb-4">
                <div className="absolute right-[-10px] bottom-[-16px] font-display text-[110px] font-extrabold text-ln-purple opacity-5 leading-none pointer-events-none tracking-[-0.04em]">ISB</div>
                <div className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 mb-3.5 text-[11px] font-bold tracking-[0.04em] text-ln-purple" style={{ background: 'rgba(57,49,133,.08)', border: '1px solid rgba(57,49,133,.15)' }}>🎓 Founding Moment</div>
                <h3 className="font-display text-[19px] font-extrabold mb-2.5">The Vision That Started It All</h3>
                <p className="text-sm text-muted-foreground leading-[1.76] mb-2.5">The inaugural event of LogisticsNow, conducted by <strong className="text-foreground">Raj Saxena at ISB Hyderabad</strong>, laid the foundation for India's most ambitious logistics intelligence platform.</p>
                <p className="text-sm text-muted-foreground leading-[1.76] mb-2.5">The presentation during Shell's Demo Day was <strong className="text-foreground">widely acclaimed for its transformative vision</strong> — the moment that put LogisticsNow on the global map.</p>
                <a href="https://yourstory.com/2019/01/shell-second-e4-startups-india" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-ln-purple text-[13px] font-bold no-underline" style={{ borderBottom: '2px solid rgba(57,49,133,.15)', paddingBottom: 1 }}>Read Our Story on YourStory →</a>
              </div>
              <div className="bg-surface border border-border rounded-[20px] px-6 py-5">
                <div className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-muted-foreground mb-3">What We're Building</div>
                <div className="flex flex-col gap-2">
                  {[
                    'Organize the logistics industry with data science & AI',
                    'Create the National Logistics Grid for India and globally',
                    'Enable efficiency beyond imagination today via LoRRI',
                    'Drive sustainability — lower emissions, better utilization',
                    'Build a level playing field for all ecosystem participants',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[13.5px] text-muted-foreground">
                      <span className="text-ln-green font-bold flex-shrink-0 mt-px">✓</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* WHY US */}
    <section className="py-[48px] px-[5vw] bg-bg2">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[28px] items-end">
          <ScrollReveal>
            <div>
              <div className="section-tag">Why LogisticsNow</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(30px, 4.2vw, 54px)' }}>
                Uniquely Positioned with<br /><span className="text-ln-purple">Trust, Technology & Data</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-[17px] leading-[1.75]">Three pillars no other logistics platform combines — the reason India's most reputed companies trust us with billions in freight spend.</p>
          </ScrollReveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((w) => (
            <StaggerItem key={w.title}>
              <div className="bg-card border border-border rounded-[28px] p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 hover:opacity-100 transition-opacity" style={{ background: w.strip }} />
                <div className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-[26px] mb-5" style={{ background: 'rgba(57,49,133,.08)' }}>{w.icon}</div>
                <div className="font-display text-[21px] font-extrabold tracking-[-0.018em] mb-3">{w.title}</div>
                <p className="text-[14.5px] text-muted-foreground leading-[1.76] mb-4">{w.desc}</p>
                <div className="flex items-center gap-2 p-2.5 rounded-[14px] text-[12.5px] font-semibold" style={{ background: w.proofBg, color: w.proofColor }}>{w.proof}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* JOURNEY */}
    <section className="py-[48px] px-[5vw] bg-background">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[28px] items-end">
          <ScrollReveal>
            <div>
              <div className="section-tag">Our Journey</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(30px, 4.2vw, 54px)' }}>
                From a Vision at ISB to a<br /><span className="text-ln-green">Global Logistics Grid</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-[17px] leading-[1.75]">From a founding vision to operating across 4 continents — building trust, one shipper and carrier at a time.</p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            {JOURNEY.map((j, i) => (
              <ScrollReveal key={j.num} delay={i * 0.1}>
                <div className="flex gap-5 pb-10 relative last:pb-0">
                  {i < JOURNEY.length - 1 && (
                    <div className="absolute left-[18px] top-[38px] bottom-0 w-0.5" style={{ background: 'linear-gradient(180deg,#393185,rgba(57,49,133,.08))' }} />
                  )}
                  <div className="w-[38px] h-[38px] rounded-full flex-shrink-0 flex items-center justify-center font-display text-sm font-extrabold relative z-[1]" style={{ background: j.color, color: '#fff' }}>{j.num}</div>
                  <div>
                    <div className="font-mono text-[10.5px] tracking-[0.07em] text-muted-foreground uppercase mb-1">{j.tag}</div>
                    <div className="font-display text-lg font-bold mb-[7px] tracking-[-0.012em]">{j.title}</div>
                    <p className="text-sm text-muted-foreground leading-[1.74]">{j.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <div className="bg-surface border border-border rounded-[20px] p-6 mb-4">
                <div className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-muted-foreground mb-3.5">Platform at a Glance</div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { n: '350+', l: 'Winning LSPs', c: '#393185', bg: 'rgba(57,49,133,.07)' },
                    { n: '1Mn+', l: 'Truckloads', c: '#54AF3A', bg: 'rgba(84,175,58,.07)' },
                    { n: '$500Mn+', l: 'Freight Procured', c: '#1AA6DF', bg: 'rgba(26,166,223,.07)' },
                    { n: '25+', l: 'Fortune 500', c: '#393185', bg: 'rgba(57,49,133,.07)' },
                  ].map((s) => (
                    <div key={s.l} className="p-5 rounded-2xl text-center" style={{ background: s.bg }}>
                      <div className="font-display text-[26px] font-extrabold leading-none tracking-[-0.03em]" style={{ color: s.c }}>{s.n}</div>
                      <div className="text-[11.5px] text-muted-foreground mt-1 font-medium">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-[20px] p-6 mb-4">
                <div className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-muted-foreground mb-3.5">Recognition & Backing</div>
                {[
                  { icon: '🏆', title: 'GITEX Dubai 2025', sub: 'Sustainability Leaders Track — Supernova Winner' },
                  { icon: '🐚', title: 'Shell E4 Program', sub: "Selected & incubated by Shell's innovation arm" },
                  { icon: '🛒', title: 'Flipkart Leap Ahead', sub: 'Investment & mentorship by Flipkart / Walmart' },
                ].map((r) => (
                  <div key={r.title} className="flex items-center gap-3 p-2.5 bg-card border border-border rounded-[14px] mb-2">
                    <div className="text-xl flex-shrink-0">{r.icon}</div>
                    <div>
                      <div className="text-[13px] font-bold">{r.title}</div>
                      <div className="text-[11.5px] text-muted-foreground">{r.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 rounded-[20px]" style={{ background: 'rgba(26,166,223,.06)', border: '1px solid rgba(26,166,223,.16)' }}>
                <div className="text-[10.5px] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: '#1AA6DF' }}>Resilience Story</div>
                <p className="text-[13.5px] text-muted-foreground leading-[1.72]">During India's first COVID-19 lockdown, LoRRI kept <strong className="text-foreground">manufacturing plants running</strong> by rapidly aligning carrier capacities — digital indents answered in under <strong className="text-foreground">30 minutes</strong>.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* INVESTORS */}
    <section className="py-[48px] px-[5vw] bg-bg2">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[28px] items-end">
          <ScrollReveal>
            <div>
              <div className="section-tag">Investors & Partners</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(30px, 4.2vw, 54px)' }}>
                Backed by the World's<br /><span className="text-ln-purple">Most Respected Names</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-[17px] leading-[1.75]">Strategic believers who accelerated our journey from founding vision to global platform.</p>
          </ScrollReveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: '🐚', name: 'Shell', type: 'Incubator & Investor · E4 Program', desc1: "LogisticsNow was selected for Shell's E4 program — one of the world's most prestigious energy and sustainability incubation programs.", desc2: "The LogisticsNow presentation during Shell's Demo Day was widely acclaimed for its transformative vision — the defining moment that validated our global ambition.", badge: '🌍 Energy · Environment · Education · Entrepreneurship', badgeBg: 'rgba(57,49,133,.07)', badgeColor: '#393185', strip: 'linear-gradient(90deg,#393185,#1AA6DF)', link: 'https://yourstory.com/2019/01/shell-second-e4-startups-india' },
            { icon: '🛒', name: 'Flipkart / Walmart', type: 'Investor · Flipkart Leap Ahead Program', desc1: "Flipkart — the world's third-largest startup ecosystem, backed by Walmart — selected LogisticsNow for its prestigious Leap Ahead program.", desc2: "Beyond investment, the program provided direct mentorship by Flipkart's top leadership — helping us scale faster and validate our platform.", badge: '🚀 Investment + Leadership Mentorship + Scale Access', badgeBg: 'rgba(26,166,223,.07)', badgeColor: '#1AA6DF', strip: 'linear-gradient(90deg,#1AA6DF,#54AF3A)', link: '#' },
          ].map((inv) => (
            <StaggerItem key={inv.name}>
              <div className="bg-card border border-border rounded-[28px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-[5px]" style={{ background: inv.strip }} />
                <div className="p-8">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-[50px] h-[50px] rounded-[13px] border border-border bg-surface flex items-center justify-center text-2xl flex-shrink-0">{inv.icon}</div>
                    <div>
                      <div className="font-display text-[22px] font-extrabold tracking-[-0.02em]">{inv.name}</div>
                      <div className="text-[11px] font-semibold tracking-[0.07em] uppercase text-muted-foreground mt-0.5">{inv.type}</div>
                    </div>
                  </div>
                  <p className="text-[14.5px] text-muted-foreground leading-[1.77] mb-3.5">{inv.desc1}</p>
                  <p className="text-[14.5px] text-muted-foreground leading-[1.77] mb-3.5">{inv.desc2}</p>
                  <div className="inline-flex items-center gap-[7px] px-4 py-2 rounded-[14px] text-[12.5px] font-bold mt-1" style={{ background: inv.badgeBg, color: inv.badgeColor }}>{inv.badge}</div>
                  <br />
                  <a href={inv.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-3.5 text-ln-purple text-[13px] font-bold no-underline" style={{ borderBottom: '2px solid rgba(57,49,133,.15)', paddingBottom: 1 }}>Read the story →</a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.2}>
          <div className="mt-5 p-5 bg-card border border-border rounded-[28px] flex items-center gap-4 flex-wrap">
            <div className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-muted-foreground flex-shrink-0">Also Associated With</div>
            {['🏛️ Wadhwani Foundation', '🇬🇧 UK Government', '🎓 ISB Hyderabad', '🇮🇳 National Logistics Policy'].map((p) => (
              <div key={p} className="px-4 py-2 bg-surface border border-border rounded-full text-[12.5px] font-semibold text-muted-foreground">{p}</div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="py-[48px] px-[5vw] bg-background">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[28px] items-end">
          <ScrollReveal>
            <div>
              <div className="section-tag">What Clients Say</div>
              <h2 className="font-display font-extrabold leading-[1.07] tracking-[-0.028em]" style={{ fontSize: 'clamp(30px, 4.2vw, 54px)' }}>
                Trusted by Those Who<br /><span className="text-ln-green">Know Logistics Best</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-[17px] leading-[1.75]">Direct quotes from the supply chain leaders who rely on Team LoRRI every day.</p>
          </ScrollReveal>
        </div>
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

    <CtaBanner />
  </div>
);

export default About;
