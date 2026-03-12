// Shared data for the LogisticsNow site

export const CLIENTS = [
  'Apollo Tyres', 'Perfetti Van Melle', 'Jyothy Labs', 'Saint-Gobain', 'MIRC Electronics',
  'General Mills', 'Bajaj Electricals', 'Schreiber Foods', 'Kimberly-Clark', 'Woolworths AU', 'CEVA Logistics'
];

export const CASES = [
  { tag: '🇪🇺 Europe', client: 'European Tyre Co.', spend: '€18Mn+', saving: '€4Mn+', pct: '20%+', extra: '100+ carriers' },
  { tag: '🇮🇳 India', client: 'Indian Tyre Company', spend: '$38Mn', saving: '$2.6Mn', pct: '7%+', extra: '920 MT GHG reduced · 26K+ dispatches' },
  { tag: '🌏 FMCG', client: 'Indian FMCG (10yr)', spend: '$70Mn', saving: '$3Mn', pct: '4.3%+', extra: '50+ carriers · 30K+ dispatches' },
  { tag: '🍭 FMCG', client: 'Indian FMCG Company', spend: '$26Mn', saving: '$0.6Mn', pct: '~2.5%', extra: '438 MT GHG · 85 e-auctions in <3 days' },
  { tag: '📺 Electronics', client: 'Indian Electronics Company', spend: '$3Mn', saving: '$0.24Mn', pct: '8%', extra: '26 MT GHG · 2.5K+ dispatches' },
  { tag: '🇦🇺 Australia', client: 'Fortune 500 Australia', spend: 'AUD 25Mn', saving: 'AUD 911K', pct: '~4%', extra: '' },
];

export const TESTIMONIALS = [
  { q: '"Year on year we have learned from Team LoRRI, …it has given our company immense savings as well as better service."', name: 'Head of Operations', role: 'Jyothy Labs', logo: '/logos/jyothy-labs.png', grad: 'linear-gradient(135deg,#393185,#1AA6DF)' },
  { q: '"This was the shortest time period in which we have completed annual procurement cycle. It was good result & experience which we got from LoRRI."', name: 'Associate Director, Supply Chain', role: 'Perfetti Van Melle', logo: '/logos/perfetti.png', grad: 'linear-gradient(135deg,#54AF3A,#1AA6DF)' },
  { q: '"Success was possible because of Team LoRRI\'s excellent support enabling change management among all key stakeholders."', name: 'Chief Supply Chain Officer', role: 'Paperboat (Hector Beverages)', logo: '/logos/paperboat.jpeg', grad: 'linear-gradient(135deg,#1AA6DF,#393185)' },
];

export const PILLARS = [
  {
    num: '01', icon: '🔍', color: '#1AA6DF', glow: 'rgba(26,166,223,0.3)',
    title: 'Deep Discovery', sub: 'Know before you go',
    desc: 'Logistics Intelligence that maps best-fit capacities, modes and carriers across 80K+ routes before you spend a rupee.',
    tags: ['LoRRI Benchmark', 'DiscoverNow', 'LoRRI Synergy'],
    bullets: ['Industry-first freight benchmarks on 50K+ lanes', 'AI-matched carrier recommendations by lane', 'Synergy map: backhaul & multi-stop optimization', '100+ truck types indexed by payload & route'],
    impact: [['$2.5Bn+', 'Spend Analyzed', '#393185'], ['2200+', 'Carriers', '#1AA6DF'], ['80K+', 'Routes', '#54AF3A'], ['50K+', 'Lanes', '#fb923c']],
  },
  {
    num: '02', icon: '⚡', color: '#54AF3A', glow: 'rgba(84,175,58,0.3)',
    title: 'Rapid Procurement', sub: 'Negotiate at the speed of AI',
    desc: 'High-speed transactions with green capacities, contracted RFI/RFX and reverse auctions — annual cycles compressed to 3 days.',
    tags: ['Spot Enquiries', 'Contracted RFI/RFX', 'Reverse Auctions'],
    bullets: ['e-Auctions completed in under 3 business days', 'Integrated green & spot capacity booking', 'Contracted lane rate management & alerts', 'Multi-carrier simultaneous RFX broadcast'],
    impact: [['85', 'e-Auctions in <3d', '#54AF3A'], ['20%+', 'Avg Savings', '#1AA6DF'], ['$500Mn+', 'Freight Procured', '#393185'], ['120+', 'Companies', '#fb923c']],
  },
  {
    num: '03', icon: '🏭', color: '#c084fc', glow: 'rgba(192,132,252,0.3)',
    title: 'Digitalize Operations', sub: 'Live in days, not months',
    desc: 'End-to-end digital TMS with private marketplace capabilities — planning, indenting and real-time track all on one platform.',
    tags: ['LoRRI Planning', 'LoRRI Indent', 'LoRRI Track'],
    bullets: ['Digital indent workflow replacing manual calls', 'Real-time GPS + IoT shipment tracking', 'Private carrier marketplace per plant/depot', 'Automated MIS & analytics dashboards'],
    impact: [['Days', 'Go-Live Time', '#c084fc'], ['1M+', 'Truckloads Digitized', '#54AF3A'], ['Real-time', 'GPS + IoT', '#1AA6DF'], ['E2E', 'TMS Coverage', '#393185']],
  },
  {
    num: '04', icon: '💳', color: '#fb923c', glow: 'rgba(251,146,60,0.3)',
    title: 'LoRRI Pay', sub: '10× faster B2B payments',
    desc: '10× faster payment cycles that create win-win for shippers and carriers — reducing friction, improving carrier loyalty and service.',
    tags: ['LoRRI Invoice', 'Auto-reconciliation', 'Payment Analytics'],
    bullets: ['Automated freight invoice digitisation', '10× faster payment vs industry average', 'Carrier credit scoring & payment planning', 'Dispute resolution workflow built-in'],
    impact: [['10×', 'Faster Payments', '#fb923c'], ['Auto', 'Invoice Digitisation', '#54AF3A'], ['Win-Win', 'Carrier Loyalty', '#1AA6DF'], ['$21Mn+', 'Savings Enabled', '#393185']],
  },
];

export const MFR_FEATURES = [
  { icon: '🧠', title: 'Logistics Intelligence', desc: 'Truck-to-Network visibility — benchmark every lane against the market before negotiating.' },
  { icon: '📊', title: 'Freight Benchmarks', desc: 'Real freight rate data from $2.5Bn+ of analyzed spend across 50K+ lanes.' },
  { icon: '⭐', title: 'Verified Carrier Ratings', desc: 'Peer-verified ratings from Fortune 500 shippers — no fake reviews, no bias.' },
  { icon: '🗺️', title: 'Best Carrier: Long Haul to Last Mile', desc: 'AI matches the best carrier for every leg — FTL, LTL, multimodal, last mile.' },
];

export const CARRIER_FEATURES = [
  { icon: '⚖️', title: 'Level Playing Field', desc: 'Compete on merit, not relationships. Neutral platform gives every carrier equal access to opportunities.' },
  { icon: '🌐', title: 'Intelligent Network Utilization', desc: 'Fill trucks intelligently — reduce deadhead, maximise revenue per kilometre.' },
  { icon: '👁️', title: 'Demand-Supply Visibility', desc: "See upcoming demand before it's tendered — plan capacity proactively." },
  { icon: '🔄', title: 'Drive Efficiency (Backhauls & Scale)', desc: 'LoRRI Synergy maps backhaul opportunities across the network automatically.' },
];

export const VAL_DRIVERS = [
  'Trusted Platform', 'Freight Intelligence', 'Carrier Mapping', 'Backhauls',
  'Collaborative Analytics', 'Real-time Visibility', 'AI Routing', 'Digital Payments'
];

export const METHODOLOGY_STEPS = [
  { num: '01', title: 'Master Data Creation', desc: 'Organize carrier, lane and rate data into a unified intelligence layer.' },
  { num: '02', title: 'Procurement Process Mapping', desc: 'Map current freight procurement workflows and identify optimization levers.' },
  { num: '03', title: 'Managed Procurement Execution', desc: 'Run AI-powered e-auctions and carrier negotiations on your behalf.' },
  { num: '04', title: 'Contract Closure & Integration', desc: 'Close contracts and integrate rates directly into your ERP/TMS.' },
  { num: '05', title: 'Automation Prioritisation', desc: 'Identify top automation opportunities with ROI-ranked PRD creation.' },
  { num: '06', title: 'AI Agent Deployment', desc: 'Deploy LoRRI AI agents for continuous optimization on a 90-day rolling cadence.' },
];
