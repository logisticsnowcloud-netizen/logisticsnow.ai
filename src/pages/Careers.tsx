import { useState } from "react";
import { ChevronDown, MapPin, Clock, Tag, ArrowRight, Rocket, Users, TrendingUp, Heart } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  domain: string;
  summary: string;
  sections: { heading: string; items: string[] }[];
  applyUrl: string;
};

const JOBS: Job[] = [
  {
    id: "data-analyst",
    title: "Passionate Data Analyst",
    location: "Bangalore",
    type: "Full-time",
    domain: "Data / Analytics",
    summary: "We're hiring founders at heart and data rockstars who want to build new ventures within LogisticsNow, drive impact using data, and scale 10x.",
    sections: [
      {
        heading: "What You'll Do",
        items: [
          "Build new business lines & growth experiments inside LogisticsNow",
          "Analyze $Billion+ of freight data, benchmark logistics costs & emissions",
          "Turn raw data into insights, insights into product ideas, and ideas into scale",
          "Lead internal product/data projects or customer-facing transformations",
          "Work closely with CXOs, ops, and engineers to shape decision-making",
        ],
      },
      {
        heading: "Requirements",
        items: [
          "2-5+ years of experience in a data/consulting/startup/growth/ops role",
          "Bachelor's (mandatory) / Master's (preferred)",
          "Hands-on with Python, Excel, Power BI/Tableau; bonus if you know SQL, R",
          "Obsession with data and bias to action",
          "Experience in logistics/supply chain is great—but passion counts more!",
        ],
      },
    ],
    applyUrl: "https://logisticsnow.in/careers.aspx?cid=3",
  },
  {
    id: "software-builder",
    title: "Entrepreneurial Software Builder",
    location: "Bangalore",
    type: "Full-time",
    domain: "Engineering",
    summary: "We're building the brain of global logistics. If you've ever dreamed of being a founder, shipping real code, and building products that solve billion-dollar problems — this is your moment.",
    sections: [
      {
        heading: "What You'll Do",
        items: [
          "Build & scale LoRRI – India's only deep data-driven logistics brain",
          "Design, build & ship APIs, services, and backend magic powering 80,000+ routes",
          "Lead product experiments, work cross-functionally with leadership & data teams",
          "Design systems that enable analytics of billions in freight across 90+ truck types",
          "Move fast on the SDLC—from writing specs to debugging live code in production",
        ],
      },
      {
        heading: "Tech Stack",
        items: [
          "Python (core) | REST APIs | R | Redis | MongoDB | SQL/NoSQL",
          "Azure DevOps | WebSockets | Git | SignalR | Basic JS/HTML",
          "Agile development | Scalable architecture | Cloud infra | DevSecOps",
        ],
      },
      {
        heading: "Requirements",
        items: [
          "2-5+ years of backend experience",
          "A builder's mindset — think MVP to scale, not just sprints",
          "You've shipped features, squashed bugs, and handled pressure",
          "Experience in startups or scrappy product teams a huge plus",
        ],
      },
    ],
    applyUrl: "https://logisticsnow.in/careers.aspx?cid=4",
  },
  {
    id: "sales-specialist",
    title: "Enterprise SaaS Sales Specialist",
    location: "Mumbai",
    type: "Full-time",
    domain: "Enterprise SaaS",
    summary: "Own and shape the end-to-end enterprise sales motion, from prospecting and pipeline development to closing. Work with leadership to develop GTM strategies and win strategically important accounts.",
    sections: [
      {
        heading: "What You'll Own",
        items: [
          "Full sales cycle ownership for enterprise clients, from pipeline to closure",
          "Develop and execute GTM strategies in collaboration with leadership",
          "Build, hire, and lead an enterprise SaaS sales team as LogisticsNow scales",
          "Collaborate with Tech, Data, and Customer Success to win strategic accounts",
          "Deeply understand customer needs and influence product roadmap",
        ],
      },
      {
        heading: "Requirements",
        items: [
          "7–10 years of B2B SaaS enterprise sales experience",
          "Proven track record of closing 7-figure deals and exceeding quotas",
          "Prior experience selling supply chain, logistics, or transportation SaaS is a strong plus",
          "High-trust relationship builder with C-level buyers",
          "Startup or fast-scaling GTM experience preferred",
        ],
      },
    ],
    applyUrl: "https://logisticsnow.in/careers.aspx?cid=6",
  },
  {
    id: "customer-success",
    title: "Customer Success — Enterprise / SaaS",
    location: "Mumbai / Remote",
    type: "Full-time",
    domain: "Customer Success",
    summary: "Own the end-to-end post-sales lifecycle for strategic accounts — from onboarding and adoption to value realization and renewal. Be a trusted advisor and driver of long-term customer health.",
    sections: [
      {
        heading: "What You'll Own",
        items: [
          "Full post-sales ownership for enterprise clients, from onboarding to renewal",
          "Customer onboarding, adoption, and value realization with measurable ROI",
          "Build and lead an enterprise SaaS customer success function at scale",
          "Cross-functional collaboration with Sales, Product, Engineering, and Data",
          "Drive customer advocacy, references, and case studies",
        ],
      },
      {
        heading: "Requirements",
        items: [
          "5–10 years in customer success or account management in B2B SaaS",
          "Familiarity with supply chain, logistics, or transportation SaaS is a plus",
          "Proven ability to engage and influence at C-suite levels",
          "Strong strategic thinking and data-driven decision making",
          "Self-starter with ownership mindset in fast-paced startup environment",
        ],
      },
    ],
    applyUrl: "https://logisticsnow.in/careers.aspx?cid=10",
  },
  {
    id: "product-manager",
    title: "Product Manager — AI Platform",
    location: "Bangalore",
    type: "Full-time",
    domain: "AI / Platform",
    summary: "Own the end-to-end product lifecycle for LoRRI and the broader LogisticsNow platform. Define product strategy, prioritize the roadmap, and deliver outcomes that improve adoption, retention, and ROI.",
    sections: [
      {
        heading: "What You'll Do",
        items: [
          "Define the product vision and a data-informed roadmap aligned with business goals",
          "Lead cross-functional teams across Product, Design, Engineering, Data, and Analytics",
          "Gather customer and market insights; translate into user stories and requirements",
          "Use analytics to inform prioritization, A/B testing, and iteration cycles",
          "Define and track KPIs for product health, performance, and reliability",
        ],
      },
      {
        heading: "Requirements",
        items: [
          "7–10 years in product management, preferably enterprise SaaS or logistics tech",
          "Familiarity with React (web) and Flutter (mobile); comfortable with Python",
          "Ability to partner with data teams; leverage SQL and data-driven decision making",
          "Proven ability to translate customer needs into product outcomes",
          "Track record of delivering product roadmaps on time",
        ],
      },
    ],
    applyUrl: "https://logisticsnow.in/careers.aspx?cid=11",
  },
];

const PERKS = [
  { icon: Rocket, title: "High-Impact ESOPs", desc: "Generous equity so you grow as the company grows" },
  { icon: TrendingUp, title: "Fast-Track Growth", desc: "Direct exposure to leadership and global expansion" },
  { icon: Users, title: "Startup Culture", desc: "Autonomy, ownership, and a bias for action" },
  { icon: Heart, title: "Comprehensive Benefits", desc: "Health, dental, vision & flexible work arrangements" },
];

const JobCard = ({ job }: { job: Job }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl border border-border bg-card transition-all duration-300 overflow-hidden"
      style={{ boxShadow: open ? '0 8px 32px hsl(var(--ln-purple) / 0.08)' : undefined }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 md:px-8 md:py-6 bg-transparent border-none cursor-pointer text-left"
      >
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2 truncate">{job.title}</h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
              <MapPin size={12} /> {job.location}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
              <Clock size={12} /> {job.type}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
              <Tag size={12} /> {job.domain}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 ml-4 shrink-0">
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="hidden md:inline-flex items-center gap-1 text-sm font-bold no-underline text-ln-purple hover:underline"
          >
            Apply <ArrowRight size={14} />
          </a>
          <ChevronDown
            size={20}
            className="text-muted-foreground transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-border">
          <p className="text-muted-foreground text-sm leading-relaxed mt-5 mb-5">{job.summary}</p>
          {job.sections.map((section) => (
            <div key={section.heading} className="mb-5">
              <h4 className="font-display text-sm font-bold text-foreground mb-2.5">{section.heading}</h4>
              <ul className="list-none p-0 m-0 space-y-1.5">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-ln-green mt-0.5 shrink-0">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-ln no-underline inline-flex items-center gap-2 !px-7 !py-3 !text-sm mt-2"
          >
            Apply Now <ArrowRight size={16} />
          </a>
        </div>
      )}
    </div>
  );
};

const Careers = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-10 md:py-14 px-[5vw] text-center">
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, transparent 30%, hsl(var(--background)) 100%)' }} />
        <div className="relative z-[2] max-w-[720px] mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-tag justify-center">Careers</div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-display font-extrabold tracking-[-0.035em] mb-2" style={{ fontSize: 'clamp(28px, 3.8vw, 46px)', lineHeight: 1.1 }}>
              Build the Future of <span className="text-ln-green">Global Logistics</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-muted-foreground max-w-[520px] mx-auto leading-relaxed text-sm">
              Join a team of passionate builders, data rockstars, and hustlers shaping a $Trillion industry. This isn't a job — it's a launchpad.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Perks */}
      <section className="px-[5vw] pb-14">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
          {PERKS.map((perk) => (
            <StaggerItem key={perk.title}>
              <div className="card-hover text-center !p-6">
                <perk.icon size={28} className="mx-auto mb-3 text-ln-purple" />
                <h3 className="font-display text-sm font-bold text-foreground mb-1">{perk.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{perk.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Breadcrumb */}
      <section className="px-[5vw]">
        <div className="max-w-[1100px] mx-auto border-t border-border pt-4 pb-2">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            <MapPin size={12} /> <a href="/" className="text-ln-purple no-underline hover:underline">Home</a> / <span className="text-foreground font-semibold">Careers</span>
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-[5vw] py-10 md:py-14">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal direction="up">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-8">
              Open <span className="text-ln-green">Positions</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {JOBS.map((job, i) => (
              <ScrollReveal key={job.id} direction="up" delay={i * 0.05}>
                <JobCard job={job} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mt-10">
              <a
                href="https://logisticsnow.in/careers.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-ln no-underline inline-flex items-center gap-2"
              >
                View All {JOBS.length}+ Open Roles <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Life @ LogisticsNow */}
      <section className="px-[5vw] py-14 md:py-20 bg-bg2">
        <div className="max-w-[900px] mx-auto text-center">
          <ScrollReveal direction="up">
            <div className="section-tag justify-center">Life @ LogisticsNow</div>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              Where Passion Meets <span className="text-ln-purple">Purpose</span>
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto leading-relaxed mb-8" style={{ fontSize: 'clamp(14px, 1.4vw, 17px)' }}>
              We are a team of enthusiastic, passionate, hardworking and self-driven people who truly want to address the inefficiencies in the global logistics space. We dream of shaping a simpler way to manage the complexities of logistics.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <div className="aspect-video rounded-2xl overflow-hidden border border-border" style={{ boxShadow: '0 8px 32px hsl(var(--ln-purple) / 0.1)' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gIF_uaxEK_g"
                title="Life @ LogisticsNow"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Careers;
