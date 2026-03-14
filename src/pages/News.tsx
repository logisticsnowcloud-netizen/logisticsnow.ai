import { ExternalLink, Newspaper, Calendar } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import CtaBanner from "@/components/CtaBanner";

const FEATURED_ARTICLE = {
  title: "LogisticsNow Wins Sustainability Leaders Track at Supernova Challenge Dubai 2025",
  date: "January 19, 2026",
  paragraphs: [
    <>LogisticsNow, a vertical AI logistics-tech platform, has been recognized as the <strong>Winner of the Sustainability Leaders Track at the Supernova Challenge Dubai 2025</strong>, part of Expand North Star — one of the world's largest global startup events.</>,
    <>The recognition highlights LogisticsNow's work in building <strong>AI-powered freight intelligence systems that help enterprises optimize logistics networks, reduce costs, and lower carbon emissions</strong> across global supply chains.</>,
    <>Through its platform <strong>LoRRI.ai</strong>, LogisticsNow enables companies to make <strong>data-driven freight decisions</strong>, improving load efficiency, reducing empty miles, and creating more sustainable logistics operations.</>,
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
  {
    outlet: "Google News",
    description: "LogisticsNow's sustainability innovation recognized at Supernova Challenge Dubai 2025.",
    url: "https://news.google.com/search?q=LogisticsNow+Wins+the+Sustainability+Leaders+Track+at+Supernova+Challenge+Dubai+2025",
  },
  {
    outlet: "Yahoo News",
    description: "AI-driven logistics intelligence platform LogisticsNow wins sustainability innovation award.",
    url: "https://search.yahoo.com/search?p=LogisticsNow+Wins+the+Sustainability+Leaders+Track+at+Supernova+Challenge+Dubai+2025",
  },
  {
    outlet: "MSN News",
    description: "LogisticsNow recognized globally for building sustainable freight intelligence infrastructure.",
    url: "https://www.bing.com/search?q=LogisticsNow+Wins+the+Sustainability+Leaders+Track+at+Supernova+Challenge+Dubai+2025",
  },
  {
    outlet: "The Tribune",
    description: "LogisticsNow's LoRRI.ai platform driving smarter, greener supply chains.",
    url: "https://www.tribuneindia.com/news/business/logisticsnow-wins-the-sustainability-leaders-track-at-supernova-challenge-dubai-2025/",
  },
  {
    outlet: "India CSR",
    description: "LogisticsNow wins international recognition for sustainable logistics technology.",
    url: "https://indiacsr.in/logisticsnow-sustainability-leaders-track-supernova-challenge-dubai-2025/",
  },
];

const MORE_COVERAGE = [
  {
    outlet: "Manufacturing Today India",
    title: "LogisticsNow Launches LoRRI Benchmark — India's First Freight Benchmark for Contracted Freight",
    url: "https://www.manufacturingtodayindia.com/9149-logisticsnow-launches-lorri-benchmark-indias-first-freight-benchmark-for-contracted-freight",
  },
  {
    outlet: "Manufacturing Today India",
    title: "How Data Science Can Enable Solutions for and Help Organize the Logistics Industry",
    url: "https://www.manufacturingtodayindia.com/9058-how-data-science-can-enable-solutions-for-and-help-organize-the-logistics-industry",
  },
  {
    outlet: "Telangana Today",
    title: "LogisticsNow to Go Multi-Modal",
    url: "https://telanganatoday.com/logisticsnow-to-go-multi-modal",
  },
  {
    outlet: "DailyHunt",
    title: "LogisticsNow Gears Up for Vaccine Distribution",
    url: "https://m.dailyhunt.in/news/africa/english/telangana+today+english-epaper-teltdyen/logisticsnow+gears+up+for+vaccine+distribution-newsid-n239105630",
  },
  {
    outlet: "Economic Times",
    title: "LogisticsNow Launches Benchmark Platform for Road Freight Rates",
    url: "https://economictimes.indiatimes.com/tech/startups/logisticsnow-launches-benchmark-platform-for-road-freight-rates/articleshow/79562516.cms",
  },
  {
    outlet: "The Hindu",
    title: "Movement of Essential Goods Hit by Disruptions",
    url: "https://www.thehindu.com/business/movement-of-essential-goods-hit-by-disruptions/article31241198.ece",
  },
  {
    outlet: "YourStory",
    title: "Indian Logistics Startups Revamp During Coronavirus",
    url: "https://yourstory.com/2020/04/indian-logistics-startups-revamp-coronavirus-logisticsnow",
  },
  {
    outlet: "ITLN",
    title: "Being Digital Is the Solution to Survive Such Logistic Emergencies",
    url: "https://www.itln.in/being-digital-is-the-solution-to-survive-such-logistic-emergencies-logisticsnow",
  },
];

const News = () => (
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
    <section className="section-std py-10 bg-[hsl(var(--bg2))]">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="section-tag mb-3">
            <Newspaper className="w-4 h-4" /> Media Coverage
          </div>
          <h2 className="heading-section max-w-2xl">Featured in Global Media</h2>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {MEDIA_COVERAGE.map((item, i) => (
            <StaggerItem key={i}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-xl border border-border bg-card p-5 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-bold text-foreground text-sm">
                    {item.outlet}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* More Coverage */}
    <section className="section-std py-10">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="heading-section max-w-2xl mb-6">More Coverage</h2>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 gap-3">
          {MORE_COVERAGE.map((item, i) => (
            <StaggerItem key={i}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:shadow-sm transition-all"
              >
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {item.outlet}
                  </span>
                  <p className="text-sm font-medium text-foreground mt-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1 group-hover:text-primary transition-colors" />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <CtaBanner />
  </main>
);

export default News;
