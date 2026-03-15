import { GoogleGenerativeAI } from "@google/generative-ai";

// ── Knowledge Base ──────────────────────────────────────────────────────────
export interface Chunk {
  id: number;
  text: string;
  sourceUrl: string;
  pageTitle: string;
}

const CHUNKS: Chunk[] = [
  {
    "id": 0,
    "text": "LogisticsNow is a logistics technology company building the Smart Logistics Grid. The Smart Logistics Grid is a digital infrastructure that connects enterprises, transporters, and logistics service providers to enable smarter logistics operations. LogisticsNow platforms digitize freight procurement, shipment tracking, and logistics analytics to improve operational efficiency and reduce logistics costs.",
    "sourceUrl": "knowledge://logisticsnow_overview",
    "pageTitle": "LogisticsNow Overview"
  },
  {
    "id": 1,
    "text": "The vision of LogisticsNow is to build the Smart Logistics Grid, the digital backbone of logistics that connects enterprises, logistics service providers, and transporters through a unified digital ecosystem.",
    "sourceUrl": "knowledge://vision",
    "pageTitle": "LogisticsNow Vision"
  },
  {
    "id": 2,
    "text": "LogisticsNow's mission is to digitize and democratize logistics by enabling enterprises to manage transportation procurement, shipment visibility, and logistics intelligence through modern technology platforms.",
    "sourceUrl": "knowledge://mission",
    "pageTitle": "LogisticsNow Mission"
  },
  {
    "id": 3,
    "text": "The Smart Logistics Grid is a digital network connecting enterprises, transporters, and logistics service providers. It enables better logistics visibility, efficient freight procurement, and data-driven decision making.",
    "sourceUrl": "knowledge://smart_logistics_grid",
    "pageTitle": "Smart Logistics Grid"
  },
  {
    "id": 4,
    "text": "LoRRI is a logistics intelligence platform developed by LogisticsNow. It helps enterprises manage transportation procurement, shipment tracking, transporter collaboration, and logistics analytics.",
    "sourceUrl": "knowledge://lorri_platform",
    "pageTitle": "LoRRI Platform"
  },
  {
    "id": 5,
    "text": "Freight procurement refers to selecting transporters for shipments through bidding workflows such as contract bids, spot bids, and mini bids.",
    "sourceUrl": "knowledge://freight_procurement",
    "pageTitle": "Freight Procurement"
  },
  {
    "id": 6,
    "text": "Spot bidding allows enterprises to procure transportation services for immediate shipment requirements by inviting transporters to submit competitive bids.",
    "sourceUrl": "knowledge://spot_bid",
    "pageTitle": "Spot Bidding"
  },
  {
    "id": 7,
    "text": "Contract procurement allows enterprises to establish long-term transportation agreements with carriers across defined logistics lanes.",
    "sourceUrl": "knowledge://contract_bid",
    "pageTitle": "Contract Procurement"
  },
  {
    "id": 8,
    "text": "Mini bids are procurement events run among a smaller set of shortlisted transporters to determine the best carrier for specific shipments.",
    "sourceUrl": "knowledge://mini_bid",
    "pageTitle": "Mini Bid"
  },
  {
    "id": 9,
    "text": "The shipment lifecycle includes shipment planning, transporter assignment, dispatch, in-transit monitoring, delivery confirmation, and document submission.",
    "sourceUrl": "knowledge://shipment_lifecycle",
    "pageTitle": "Shipment Lifecycle"
  },
  {
    "id": 10,
    "text": "Shipment tracking allows enterprises to monitor vehicle locations and shipment status throughout the delivery journey.",
    "sourceUrl": "knowledge://shipment_tracking",
    "pageTitle": "Shipment Tracking"
  },
  {
    "id": 11,
    "text": "GPS tracking uses installed GPS devices in vehicles to provide real-time vehicle location information.",
    "sourceUrl": "knowledge://gps_tracking",
    "pageTitle": "GPS Tracking"
  },
  {
    "id": 12,
    "text": "SIM tracking uses mobile SIM location signals to estimate the truck's location during shipment transit.",
    "sourceUrl": "knowledge://sim_tracking",
    "pageTitle": "SIM Tracking"
  },
  {
    "id": 13,
    "text": "Transporter management enables enterprises to onboard carriers, manage transporter profiles, monitor performance, and collaborate digitally.",
    "sourceUrl": "knowledge://transporter_management",
    "pageTitle": "Transporter Management"
  },
  {
    "id": 14,
    "text": "Enterprises rely on transporter networks to move goods between warehouses, factories, and distribution centers.",
    "sourceUrl": "knowledge://carrier_network",
    "pageTitle": "Carrier Network"
  },
  {
    "id": 15,
    "text": "Shipment visibility provides real-time insights into shipment location, delivery timelines, and transporter activity.",
    "sourceUrl": "knowledge://shipment_visibility",
    "pageTitle": "Shipment Visibility"
  },
  {
    "id": 16,
    "text": "Logistics analytics enables enterprises to analyze freight costs, shipment delays, transporter reliability, and operational performance.",
    "sourceUrl": "knowledge://logistics_analytics",
    "pageTitle": "Logistics Analytics"
  },
  {
    "id": 17,
    "text": "Freight benchmarking compares transportation costs across carriers and logistics lanes to help enterprises identify optimal freight rates.",
    "sourceUrl": "knowledge://freight_benchmarking",
    "pageTitle": "Freight Benchmarking"
  },
  {
    "id": 18,
    "text": "LogisticsNow platforms allow transporters to upload and manage logistics documents such as Lorry Receipts, Proof of Delivery, and invoices.",
    "sourceUrl": "knowledge://document_management",
    "pageTitle": "Document Management"
  },
  {
    "id": 19,
    "text": "A Lorry Receipt is a transport document issued by a carrier acknowledging receipt of goods for shipment.",
    "sourceUrl": "knowledge://lorry_receipt",
    "pageTitle": "Lorry Receipt"
  },
  {
    "id": 20,
    "text": "Proof of Delivery confirms that a shipment has been delivered successfully to the consignee.",
    "sourceUrl": "knowledge://pod",
    "pageTitle": "Proof of Delivery"
  },
  {
    "id": 21,
    "text": "Transporters upload invoices after shipment completion to initiate payment processing.",
    "sourceUrl": "knowledge://invoice_management",
    "pageTitle": "Invoice Management"
  },
  {
    "id": 22,
    "text": "Enterprises manage large logistics networks involving multiple carriers, warehouses, and shipment routes.",
    "sourceUrl": "knowledge://enterprise_logistics",
    "pageTitle": "Enterprise Logistics"
  },
  {
    "id": 23,
    "text": "Supply chain visibility helps organizations track shipments and logistics operations across the supply chain.",
    "sourceUrl": "knowledge://supply_chain_visibility",
    "pageTitle": "Supply Chain Visibility"
  },
  {
    "id": 24,
    "text": "Automation in logistics reduces manual processes and improves operational efficiency.",
    "sourceUrl": "knowledge://logistics_automation",
    "pageTitle": "Logistics Automation"
  },
  {
    "id": 25,
    "text": "Fleet management involves tracking and managing vehicles used for transportation operations.",
    "sourceUrl": "knowledge://fleet_management",
    "pageTitle": "Fleet Management"
  },
  {
    "id": 26,
    "text": "Data-driven logistics uses operational data and analytics to optimize transportation decisions.",
    "sourceUrl": "knowledge://data_driven_logistics",
    "pageTitle": "Data Driven Logistics"
  },
  {
    "id": 27,
    "text": "Improving logistics efficiency involves optimizing procurement workflows, improving shipment visibility, and automating logistics operations.",
    "sourceUrl": "knowledge://logistics_efficiency",
    "pageTitle": "Logistics Efficiency"
  },
  {
    "id": 28,
    "text": "Enterprises interested in LogisticsNow platforms can request a product demo to explore LoRRI capabilities including freight procurement, shipment tracking, and analytics.",
    "sourceUrl": "knowledge://demo_overview",
    "pageTitle": "Request a Demo"
  },
  {
    "id": 29,
    "text": "The demo process typically includes a discovery discussion, a walkthrough of the LoRRI platform, and a discussion of enterprise logistics use cases.",
    "sourceUrl": "knowledge://demo_process",
    "pageTitle": "Demo Process"
  },
  {
    "id": 30,
    "text": "During a demo session, enterprises can explore procurement workflows, tracking dashboards, transporter collaboration tools, and analytics features.",
    "sourceUrl": "knowledge://demo_features",
    "pageTitle": "Demo Features"
  },
  {
    "id": 31,
    "text": "After the demo, enterprises evaluate the platform and may begin onboarding and implementation planning.",
    "sourceUrl": "knowledge://demo_next_steps",
    "pageTitle": "Post Demo Steps"
  },
  {
    "id": 32,
    "text": "LogisticsNow is a logistics technology company helping enterprises digitize logistics operations through the Smart Logistics Grid.",
    "sourceUrl": "knowledge://faq_logisticsnow",
    "pageTitle": "FAQ LogisticsNow"
  },
  {
    "id": 33,
    "text": "LoRRI is a logistics intelligence platform that enables enterprises to manage freight procurement and shipment execution.",
    "sourceUrl": "knowledge://faq_lorri",
    "pageTitle": "FAQ LoRRI"
  },
  {
    "id": 34,
    "text": "Enterprises use procurement workflows such as spot bids and contract bids to select transporters.",
    "sourceUrl": "knowledge://faq_procurement",
    "pageTitle": "FAQ Freight Procurement"
  },
  {
    "id": 35,
    "text": "Shipment tracking allows enterprises to monitor delivery progress using GPS or SIM tracking.",
    "sourceUrl": "knowledge://faq_tracking",
    "pageTitle": "FAQ Shipment Tracking"
  },
  {
    "id": 36,
    "text": "Logistics documents include Lorry Receipts, Proof of Delivery, and invoices used to confirm shipment execution.",
    "sourceUrl": "knowledge://faq_documents",
    "pageTitle": "FAQ Logistics Documents"
  },
  {
    "id": 37,
    "text": "LogisticsNow stands out by building the Smart Logistics Grid, a unique digital backbone that connects the entire ecosystem—enterprises, transporters, and LSPs—on a single platform. Unlike traditional siloed software, we offer end-to-end visibility, AI-driven routing through LoRRI (trained on $2.5Bn+ of data), and deep freight benchmarking. Our clients typically see a 7-20% reduction in costs and significant improvements in operational transparency and speed.",
    "sourceUrl": "knowledge://competitive_advantage",
    "pageTitle": "Why LogisticsNow?"
  }
];

// ── Gemini Configuration ─────────────────────────────────────────────────────
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyC79bBQPKVpjEFJVLcvBbZguuJdzLvh0iY";
const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_PROMPT = `You are a helpful company website assistant for LogisticsNow and LoRRI.

Your job is to answer questions strictly using the provided website context below. Follow these rules:

1. ONLY answer using information found in the provided context. Do not use any outside knowledge.
2. If the answer is NOT clearly found in the provided context, say exactly:
   "Please reach out to the LogisticsNow team directly for further information and assistance."
3. If the question is unrelated to LogisticsNow or LoRRI (e.g., general math, politics, trivia, other topics), respond with:
   "I can only answer questions about LogisticsNow and LoRRI. Please ask me something about our company, products, or services."
4. Keep answers concise, clear, and professional.
5. Never invent or guess company details not present in the context.
6. When answering, you may naturally reference the companies by name.
7. If the user asks to book a demo, schedule a meeting, or contact the team, tell them: "Certainly! I'll guide you to our Contact page so you can fill in your details and our team will get back to you shortly. Redirecting you now..."`;

// ── Retrieval Logic ──────────────────────────────────────────────────────────
export function retrieve(query: string, topN: number = 3): Chunk[] {
  const words = query.toLowerCase().split(/\W+/).filter(w => w.length > 2);
  
  if (words.length === 0) return [];

  const scored = CHUNKS.map(chunk => {
    let score = 0;
    const text = chunk.text.toLowerCase();
    const title = chunk.pageTitle.toLowerCase();

    words.forEach(word => {
      if (title.includes(word)) score += 3;
      if (text.includes(word)) score += 1;
    });

    return { ...chunk, score };
  });

  return scored
    .filter(c => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN);
}

// ── Generation Logic ─────────────────────────────────────────────────────────
export async function generateAnswer(question: string) {
  const chunks = retrieve(question);
  
  if (chunks.length === 0) {
    return {
      answer: "Please reach out to the LogisticsNow team directly for further information and assistance."
    };
  }

  const contextBlock = chunks
    .map((c, i) => `[${i + 1}] Source: ${c.pageTitle} (${c.sourceUrl})\n${c.text}`)
    .join("\n\n---\n\n");

  const prompt = `${SYSTEM_PROMPT}

---
WEBSITE CONTEXT:
${contextBlock}
---

USER QUESTION: ${question}

ANSWER:`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();

    return {
      answer: text
    };
  } catch (error) {
    console.error("[Chatbot] Error generating answer:", error);
    return {
      answer: "Sorry, I'm having trouble connecting to the AI service right now. Please try again in a moment."
    };
  }
}
