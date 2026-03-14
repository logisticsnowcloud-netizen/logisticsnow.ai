import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Newspaper, Calendar, MapPin } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import CtaBanner from "@/components/CtaBanner";
import supernovaAward from "@/assets/supernova-award.png";
import gscsPanel2018 from "@/assets/events/gscs-panel-2018.png";
import gscsPanel2019 from "@/assets/events/gscs-panel-2019.png";
import gscsAward2019 from "@/assets/events/gscs-award-2019.png";
import shellDemoBooth from "@/assets/events/shell-demo-booth.png";
import shellDemoSpeaking from "@/assets/events/shell-demo-speaking.png";
import shellDemoTeam from "@/assets/events/shell-demo-team.png";
import shellDemoStage from "@/assets/events/shell-demo-stage.png";
import shellDemoBooth2 from "@/assets/events/shell-demo-booth2.png";
import shellDemoBooth3 from "@/assets/events/shell-demo-booth3.png";
import shellDemoPanel from "@/assets/events/shell-demo-panel.png";
import shellDemoAudience from "@/assets/events/shell-demo-audience.png";
import elscBoothTeam from "@/assets/events/elsc-booth-team.png";
import elscSpeaking from "@/assets/events/elsc-speaking.png";
import elscTeam from "@/assets/events/elsc-team.png";
import elscAwards from "@/assets/events/elsc-awards.png";
import elscPodium from "@/assets/events/elsc-podium.png";
import elscStage from "@/assets/events/elsc-stage.png";
import elscStage2 from "@/assets/events/elsc-stage2.png";

const FEATURED_ARTICLE = {
  title: "LogisticsNow Wins Sustainability Leaders Track at Supernova Challenge Dubai 2025",
  date: "January 19, 2026",
  paragraphs: [
    <>LogisticsNow, a vertical AI logistics-tech platform, has been recognized as the <strong>Winner of the Sustainability Leaders Track at the Supernova Challenge Dubai 2025</strong>, part of Expand North Star — one of the world's largest global startup events.</>,
    <>The recognition highlights LogisticsNow's work in building <strong>AI-powered freight intelligence systems that help enterprises optimize logistics networks, reduce costs, and lower carbon emissions</strong> across global supply chains.</>,
    <>Through its platform <a href="https://www.lorri.ai/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline hover:text-primary/80 transition-colors">LoRRI.ai</a>, LogisticsNow enables companies to make <strong>data-driven freight decisions</strong>, improving load efficiency, reducing empty miles, and creating more sustainable logistics operations.</>,
  ],
  impact: [
    "$2.5B+ freight intelligence analyzed",
    "$500M+ freight transacted globally",
    "2,200+ logistics partners",
    "80,000+ freight routes",
    "$21M+ savings delivered",
  ],
  closing: <>The award places LogisticsNow among leading global innovators building technology solutions that combine <strong>AI, sustainability, and logistics intelligence</strong> to transform the future of supply chains.</>,
};

const MEDIA_COVERAGE = [
  { outlet: "Google News", description: "LogisticsNow's sustainability innovation recognized at Supernova Challenge Dubai 2025.", url: "https://news.google.com/search?q=LogisticsNow+Wins+the+Sustainability+Leaders+Track+at+Supernova+Challenge+Dubai+2025" },
  { outlet: "Yahoo News", description: "AI-driven logistics intelligence platform LogisticsNow wins sustainability innovation award.", url: "https://search.yahoo.com/search?p=LogisticsNow+Wins+the+Sustainability+Leaders+Track+at+Supernova+Challenge+Dubai+2025" },
  { outlet: "MSN News", description: "LogisticsNow recognized globally for building sustainable freight intelligence infrastructure.", url: "https://www.bing.com/search?q=LogisticsNow+Wins+the+Sustainability+Leaders+Track+at+Supernova+Challenge+Dubai+2025" },
  { outlet: "The Tribune", description: "LogisticsNow's LoRRI.ai platform driving smarter, greener supply chains.", url: "https://www.tribuneindia.com/news/business/logisticsnow-wins-the-sustainability-leaders-track-at-supernova-challenge-dubai-2025/" },
  { outlet: "India CSR", description: "LogisticsNow wins international recognition for sustainable logistics technology.", url: "https://indiacsr.in/logisticsnow-sustainability-leaders-track-supernova-challenge-dubai-2025/" },
];

const MORE_COVERAGE = [
  { outlet: "Manufacturing Today India", title: "LogisticsNow Launches LoRRI Benchmark — India's First Freight Benchmark for Contracted Freight", url: "https://www.manufacturingtodayindia.com/9149-logisticsnow-launches-lorri-benchmark-indias-first-freight-benchmark-for-contracted-freight" },
  { outlet: "Manufacturing Today India", title: "How Data Science Can Enable Solutions for and Help Organize the Logistics Industry", url: "https://www.manufacturingtodayindia.com/9058-how-data-science-can-enable-solutions-for-and-help-organize-the-logistics-industry" },
  { outlet: "Telangana Today", title: "LogisticsNow to Go Multi-Modal", url: "https://telanganatoday.com/logisticsnow-to-go-multi-modal" },
  { outlet: "DailyHunt", title: "LogisticsNow Gears Up for Vaccine Distribution", url: "https://m.dailyhunt.in/news/africa/english/telangana+today+english-epaper-teltdyen/logisticsnow+gears+up+for+vaccine+distribution-newsid-n239105630" },
  { outlet: "Economic Times", title: "LogisticsNow Launches Benchmark Platform for Road Freight Rates", url: "https://economictimes.indiatimes.com/tech/startups/logisticsnow-launches-benchmark-platform-for-road-freight-rates/articleshow/79562516.cms" },
  { outlet: "The Hindu", title: "Movement of Essential Goods Hit by Disruptions", url: "https://www.thehindu.com/business/movement-of-essential-goods-hit-by-disruptions/article31241198.ece" },
  { outlet: "YourStory", title: "Indian Logistics Startups Revamp During Coronavirus", url: "https://yourstory.com/2020/04/indian-logistics-startups-revamp-coronavirus-logisticsnow" },
  { outlet: "ITLN", title: "Being Digital Is the Solution to Survive Such Logistic Emergencies", url: "https://www.itln.in/being-digital-is-the-solution-to-survive-such-logistic-emergencies-logisticsnow" },
];

const EVENTS = [
  {
    title: "ELSC, Taj Land's End",
    location: "Mumbai",
    date: "October 3, 2019",
    description: [
      "LogisticsNow formally unveiled its flagship product LoRRI (Logistics Rate & Route Intelligence) at the ELSC Conference held at Taj Land's End, Mumbai, one of India's leading industry gatherings for logistics and supply chain leaders.",
      "The launch marked a significant milestone for LogisticsNow as the company introduced LoRRI — a digital logistics intelligence platform designed to bring transparency, efficiency, and data-driven decision-making to freight procurement and logistics operations.",
      "During the event, the LogisticsNow team hosted live demonstrations of the platform at the LogisticsNow booth, where more than 40 leading Indian and global companies participated in product walkthroughs and discussions on the future of digital logistics.",
    ],
    bulletPoints: [
      "Benchmark freight rates across routes and regions",
      "Improve freight procurement and planning",
      "Enhance visibility across logistics networks",
      "Enable smarter supply chain decision-making using data intelligence",
    ],
    descriptionAfterBullets: [
      "The launch received wide appreciation from logistics professionals, enterprise leaders, and technology stakeholders, reinforcing LogisticsNow's vision of building the digital backbone for logistics through its Smart Logistics Grid.",
      "The event marked an important step in LogisticsNow's mission to transform logistics with technology, data intelligence, and a connected freight ecosystem.",
    ],
    photos: [elscBoothTeam, elscSpeaking, elscTeam, elscAwards, elscPodium, elscStage, elscStage2],
    videoUrl: "https://www.youtube.com/embed/IY6UxSKd0ps",
  },
  {
    title: "Shell Demo Day",
    location: "Bangalore",
    date: "July 18, 2019",
    description: [
      "LogisticsNow participated in Shell Demo Day in Bangalore, India's leading startup and innovation hub. The event brought together startups, investors, and industry leaders to explore innovative technologies transforming global industries.",
      "During the event, LogisticsNow Founder Mr. Raj Saxena presented the company's vision for LoRRI (Logistics Rate & Route Intelligence) — a platform designed to build the National Logistics Map for India and bring greater transparency, efficiency, and intelligence to the logistics sector.",
      "The presentation highlighted how LoRRI leverages data, analytics, and technology to map freight routes, benchmark logistics costs, and enable enterprises to make smarter supply chain decisions.",
      "The LogisticsNow solution received strong interest and positive feedback from the Shell and investor community, reinforcing the growing importance of digital platforms and freight intelligence in transforming the logistics industry.",
      "Participation in Shell Demo Day marked an important milestone in LogisticsNow's journey to build the digital backbone for logistics in India and globally.",
    ],
    photos: [shellDemoBooth, shellDemoSpeaking, shellDemoTeam, shellDemoStage, shellDemoBooth2, shellDemoBooth3, shellDemoPanel, shellDemoAudience],
  },
  {
    title: "Global Supply Chain Summit",
    location: "Mumbai",
    date: "February 22, 2018",
    description: [
      "LogisticsNow participated in the Global Supply Chain Summit held in Mumbai, a premier industry gathering that brought together leaders from logistics, manufacturing, technology, and supply chain management to discuss the future of global trade and supply chain innovation.",
      "The summit provided a platform for industry experts, enterprise leaders, and technology innovators to exchange ideas on digital transformation, supply chain optimization, and the role of data-driven decision-making in logistics.",
      "At the event, LogisticsNow showcased its vision of building a smart logistics intelligence platform that leverages data analytics and technology to transform how freight networks operate. The company highlighted the importance of structured freight intelligence, transparency, and digital platforms in improving supply chain efficiency across industries.",
      "The discussions also focused on the challenges faced by enterprises in managing complex logistics networks and how technology platforms like LogisticsNow can enable companies to optimize freight procurement, improve operational efficiency, and unlock cost savings.",
      "Events like the Global Supply Chain Summit reinforce LogisticsNow's commitment to working with industry stakeholders to build smarter, more efficient, and technology-driven logistics ecosystems.",
    ],
    photos: [gscsPanel2018, gscsPanel2019, gscsAward2019],
  },
];

type Tab = "newsroom" | "events";

const News = () => {
  const [activeTab, setActiveTab] = useState<Tab>("newsroom");

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <div className="px-[5vw] pt-10 pb-[28px] bg-background relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-45 pointer-events-none" style={{ backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 70% at 15% 50%, transparent 30%, hsl(var(--background)) 100%)' }} />
        <div className="relative z-[2] max-w-[1280px] mx-auto">
          <div className="flex items-center gap-[7px] text-xs font-semibold tracking-[0.07em] uppercase text-muted-foreground mb-5">
            <Link to="/" className="no-underline text-muted-foreground">Home</Link>
            <span>›</span>
            <span className="text-ln-purple">News & Events</span>
          </div>
          <ScrollReveal direction="up">
            <div className="section-tag">News & Events</div>
            <h1 className="font-display font-extrabold leading-[1.03] tracking-[-0.035em] mb-3 heading-hero">
              Latest from <span className="text-ln-purple">LogisticsNow</span>
            </h1>
            <p className="text-muted-foreground leading-[1.7] mb-2 max-w-[500px]" style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}>
              Award wins, media features, and industry insights from our journey transforming global logistics with AI.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-[5vw] border-b border-border bg-background">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex gap-0">
            <button
              onClick={() => setActiveTab("newsroom")}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "newsroom"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Newsroom
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "events"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Events
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "newsroom" ? <NewsroomContent /> : <EventsContent />}

      <CtaBanner />
    </main>
  );
};

/* ─── Newsroom Tab ─── */
const NewsroomContent = () => (
  <>
    {/* Featured Article */}
    <section className="section-std py-6">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="rounded-xl border border-border bg-card p-6 md:p-10 max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              {FEATURED_ARTICLE.date}
            </div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">
              {FEATURED_ARTICLE.title}
            </h2>
            <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
              {FEATURED_ARTICLE.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-6 mb-6">
              <img src={supernovaAward} alt="LogisticsNow team receiving Sustainability Leaders Award at Supernova Challenge Dubai 2025" className="rounded-lg w-full object-cover" />
            </div>
            <div className="mt-6">
              <h3 className="font-display font-bold text-foreground mb-3">Impact at Scale</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                {FEATURED_ARTICLE.impact.map((item, i) => (
                  <li key={i} className="font-semibold">{item}</li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-sm text-foreground/80 leading-relaxed">
              {FEATURED_ARTICLE.closing}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Media Coverage */}
    <section className="section-std py-6 bg-[hsl(var(--bg2))]">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="section-tag mb-2">
            <Newspaper className="w-4 h-4" /> Media Coverage
          </div>
          <h2 className="font-display font-extrabold heading-section tracking-[-0.03em] mb-1">Featured in Global Media</h2>
        </ScrollReveal>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {MEDIA_COVERAGE.map((item, i) => (
            <StaggerItem key={i}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block h-full rounded-xl border border-border bg-card p-5 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-bold text-foreground text-sm">{item.outlet}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* More Coverage */}
    <section className="section-std py-6">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <h2 className="font-display font-extrabold heading-section tracking-[-0.03em] mb-4">More Coverage</h2>
        </ScrollReveal>
        <StaggerContainer className="grid sm:grid-cols-2 gap-3">
          {MORE_COVERAGE.map((item, i) => (
            <StaggerItem key={i}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:shadow-sm transition-all">
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{item.outlet}</span>
                  <p className="text-sm font-medium text-foreground mt-1 group-hover:text-primary transition-colors">{item.title}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1 group-hover:text-primary transition-colors" />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  </>
);

/* ─── Events Tab ─── */
const EventsContent = () => (
  <>
    {EVENTS.map((event, idx) => (
      <section key={idx} className="section-std py-6">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="rounded-xl border border-border bg-card p-6 md:p-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </span>
              </div>

              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">
                {event.title} <span className="text-primary">@{event.location}</span>
              </h2>

              <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                {event.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {event.bulletPoints && (
                <div className="mt-4">
                  <p className="text-sm text-foreground/80 mb-2 font-semibold">Industry leaders showed strong interest in LoRRI's ability to:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                    {event.bulletPoints.map((bp, i) => (
                      <li key={i}>{bp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {event.descriptionAfterBullets && (
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed mt-4">
                  {event.descriptionAfterBullets.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}

              {/* Event Video */}
              {event.videoUrl && (
                <div className="mt-8">
                  <h3 className="font-display font-bold text-foreground mb-4">Event Video</h3>
                  <div className="aspect-video rounded-lg overflow-hidden border border-border">
                    <iframe
                      src={event.videoUrl}
                      title={`${event.title} video`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Event Photos */}
              <div className="mt-8">
                <h3 className="font-display font-bold text-foreground mb-4">Event Photos</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {event.photos.map((photo, i) => (
                    <img
                      key={i}
                      src={photo}
                      alt={`${event.title} photo ${i + 1}`}
                      className="rounded-lg w-full h-48 object-cover border border-border"
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    ))}
  </>
);

export default News;
