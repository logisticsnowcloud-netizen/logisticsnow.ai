import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURES = [
  {
    id: "freight-benchmark",
    label: "Freight Benchmark",
    icon: "📊",
    color: "#393185",
    content: () => (
      <div className="bg-white rounded-xl p-5 h-full text-[#1a1a2e]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-base">Freight Benchmark</h3>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#f0eeff] text-[#393185]">Last 30 Days</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-500">All Routes</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: "Avg Rate/Ton", value: "₹2,847", change: "-3.2%", positive: true },
            { label: "Routes Analyzed", value: "12,450", change: "+8.1%", positive: true },
            { label: "Carriers Compared", value: "340", change: "+12%", positive: true },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-lg p-3">
              <div className="text-[10px] text-gray-500 mb-1">{s.label}</div>
              <div className="text-lg font-bold">{s.value}</div>
              <div className={`text-[10px] font-semibold ${s.positive ? "text-green-600" : "text-red-500"}`}>{s.change}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <div className="flex-1 bg-gray-50 rounded-lg p-3">
            <div className="text-[10px] font-semibold text-gray-500 mb-2">Rate Trend (₹/Ton)</div>
            <div className="flex items-end gap-1 h-16">
              {[65, 58, 72, 55, 48, 62, 45, 52, 40, 55, 48, 42].map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i >= 10 ? "#54AF3A" : i >= 8 ? "#1AA6DF" : "#393185", opacity: 0.7 + (i * 0.025) }} />
              ))}
            </div>
          </div>
          <div className="w-[140px] bg-gray-50 rounded-lg p-3">
            <div className="text-[10px] font-semibold text-gray-500 mb-2">Top Lanes</div>
            {["MUM → DEL", "CHE → BLR", "PUN → HYD"].map((l) => (
              <div key={l} className="flex justify-between text-[10px] py-1 border-b border-gray-100 last:border-0">
                <span className="font-medium">{l}</span>
                <span className="text-gray-400">₹2.4K</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "transport-discovery",
    label: "Transport Discovery",
    icon: "🔍",
    color: "#1AA6DF",
    content: () => (
      <div className="bg-white rounded-xl p-5 h-full text-[#1a1a2e]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-base">Transport Discovery</h3>
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#e8f7fd] text-[#1AA6DF]">AI Matching</span>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 mb-3 flex items-center gap-2">
          <span className="text-gray-400 text-sm">🔍</span>
          <span className="text-[11px] text-gray-500">Mumbai → Delhi | 20T | FTL | Open Body</span>
          <span className="ml-auto px-2 py-0.5 rounded bg-[#393185] text-white text-[9px] font-bold">Search</span>
        </div>
        <div className="text-[10px] text-gray-400 mb-2 font-semibold">147 Carriers Found — Top Matches</div>
        {[
          { name: "Sri Krishna Transport", score: 98, rate: "₹48,500", trips: "2.4K", rating: "4.8" },
          { name: "Rajesh Roadlines", score: 94, rate: "₹46,200", trips: "1.8K", rating: "4.6" },
          { name: "National Carriers Ltd", score: 91, rate: "₹51,000", trips: "3.1K", rating: "4.7" },
          { name: "Highway Express", score: 87, rate: "₹44,800", trips: "950", rating: "4.4" },
        ].map((c) => (
          <div key={c.name} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#393185] to-[#1AA6DF] flex items-center justify-center text-white text-[10px] font-bold">{c.name[0]}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold truncate">{c.name}</div>
              <div className="text-[9px] text-gray-400">{c.trips} trips • ⭐ {c.rating}</div>
            </div>
            <div className="text-right">
              <div className="text-[11px] font-bold">{c.rate}</div>
              <div className="text-[9px] font-semibold text-green-600">Match {c.score}%</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "spot-enquiries",
    label: "Spot Enquiries",
    icon: "⚡",
    color: "#fb923c",
    content: () => (
      <div className="bg-white rounded-xl p-5 h-full text-[#1a1a2e]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-base">Spot Enquiries</h3>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-orange-50 text-orange-600">12 Active</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-green-50 text-green-600">5 Awarded</span>
          </div>
        </div>
        {[
          { id: "SE-4521", route: "Pune → Bangalore", type: "FTL 20T", bids: 8, best: "₹32,500", status: "Live", time: "2h left" },
          { id: "SE-4520", route: "Mumbai → Ahmedabad", type: "PTL 5T", bids: 12, best: "₹14,200", status: "Live", time: "4h left" },
          { id: "SE-4519", route: "Delhi → Jaipur", type: "FTL 16T", bids: 6, best: "₹18,900", status: "Awarded", time: "" },
          { id: "SE-4518", route: "Chennai → Hyderabad", type: "FTL 22T", bids: 15, best: "₹28,100", status: "Awarded", time: "" },
        ].map((e) => (
          <div key={e.id} className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-gray-400">{e.id}</span>
                <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${e.status === "Live" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-700"}`}>{e.status}</span>
                {e.time && <span className="text-[9px] text-red-500 font-medium">⏱ {e.time}</span>}
              </div>
              <div className="text-[11px] font-semibold mt-0.5">{e.route}</div>
              <div className="text-[9px] text-gray-400">{e.type} • {e.bids} bids received</div>
            </div>
            <div className="text-right">
              <div className="text-[9px] text-gray-400">Best Bid</div>
              <div className="text-[12px] font-bold text-green-700">{e.best}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "rfi-rfx",
    label: "RFI / RFX",
    icon: "📋",
    color: "#393185",
    content: () => (
      <div className="bg-white rounded-xl p-5 h-full text-[#1a1a2e]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-base">Contracted RFI / RFX</h3>
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#f0eeff] text-[#393185]">Q1 2026</span>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: "Active RFQs", value: "7", color: "#393185" },
            { label: "Responses", value: "142", color: "#1AA6DF" },
            { label: "Awarded", value: "3", color: "#54AF3A" },
            { label: "Savings", value: "8.2%", color: "#fb923c" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-lg p-2 text-center">
              <div className="text-lg font-bold" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[9px] text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
        {[
          { id: "RFQ-2026-034", name: "Pan India FTL Contract", lanes: 45, responses: 28, status: "Evaluation", deadline: "Mar 20" },
          { id: "RFQ-2026-033", name: "West Zone PTL", lanes: 18, responses: 32, status: "Bidding", deadline: "Mar 25" },
          { id: "RFQ-2026-032", name: "Dedicated Fleet — South", lanes: 8, responses: 15, status: "Awarded", deadline: "Completed" },
        ].map((r) => (
          <div key={r.id} className="py-2.5 border-b border-gray-100 last:border-0">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-gray-400">{r.id}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${r.status === "Awarded" ? "bg-green-100 text-green-700" : r.status === "Bidding" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>{r.status}</span>
                </div>
                <div className="text-[11px] font-semibold mt-0.5">{r.name}</div>
                <div className="text-[9px] text-gray-400">{r.lanes} lanes • {r.responses} responses • Due: {r.deadline}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "reverse-auctions",
    label: "Reverse Auctions",
    icon: "🔄",
    color: "#54AF3A",
    content: () => (
      <div className="bg-white rounded-xl p-5 h-full text-[#1a1a2e]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-base">Reverse Auctions</h3>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-semibold text-red-600">LIVE</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 mb-3">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="text-[11px] font-semibold">Auction #RA-892 — Mumbai → Delhi</div>
              <div className="text-[9px] text-gray-400">FTL 22T Open Body • 15 Participants</div>
            </div>
            <div className="text-right">
              <div className="text-[9px] text-gray-400">Time Left</div>
              <div className="text-sm font-bold text-red-600 font-mono">14:32</div>
            </div>
          </div>
          <div className="flex items-end gap-0.5 h-12 mb-2">
            {[100, 95, 88, 82, 78, 75, 72, 70, 68, 65, 63, 60].map((h, i) => (
              <div key={i} className="flex-1 rounded-t transition-all" style={{ height: `${h}%`, background: i === 11 ? "#54AF3A" : `rgba(57,49,133,${0.2 + i * 0.05})` }} />
            ))}
          </div>
          <div className="flex justify-between text-[9px] text-gray-400">
            <span>Start: ₹55,000</span>
            <span className="font-bold text-green-600">Current Best: ₹38,200</span>
          </div>
        </div>
        <div className="text-[10px] font-semibold text-gray-500 mb-1.5">Top Bidders</div>
        {[
          { rank: 1, name: "TransCo Logistics", bid: "₹38,200", time: "2m ago" },
          { rank: 2, name: "FastTrack Carriers", bid: "₹39,100", time: "4m ago" },
          { rank: 3, name: "Prime Movers", bid: "₹40,500", time: "6m ago" },
        ].map((b) => (
          <div key={b.rank} className="flex items-center gap-2 py-1.5 border-b border-gray-100 last:border-0">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white ${b.rank === 1 ? "bg-green-500" : "bg-gray-400"}`}>{b.rank}</span>
            <span className="flex-1 text-[11px] font-medium">{b.name}</span>
            <span className="text-[11px] font-bold">{b.bid}</span>
            <span className="text-[9px] text-gray-400">{b.time}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "planning",
    label: "Planning",
    icon: "📐",
    color: "#1AA6DF",
    content: () => (
      <div className="bg-white rounded-xl p-5 h-full text-[#1a1a2e]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-base">Planning — Create Plan</h3>
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#e8f7fd] text-[#1AA6DF]">Optimized</span>
        </div>
        <div className="grid grid-cols-5 gap-2 mb-3">
          {[
            { label: "Shipments", value: "5" },
            { label: "Orders", value: "1" },
            { label: "Vehicles", value: "5" },
            { label: "Total Cost", value: "₹5,00,000" },
            { label: "Vol. Util.", value: "100%" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded p-2 text-center">
              <div className="text-sm font-bold">{s.value}</div>
              <div className="text-[8px] text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-[10px] font-semibold text-gray-500 mb-2">Planning Analytics</div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              {[
                { l: "Vehicle Util.", v: "95%" },
                { l: "Dispatch Comp.", v: "88%" },
                { l: "Delivery Comp.", v: "90%" },
                { l: "Orders Combined", v: "59%" },
              ].map((m) => (
                <div key={m.l}>
                  <div className="text-[9px] text-gray-400">{m.l}</div>
                  <div className="text-[12px] font-bold">{m.v}</div>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-0.5 h-10">
              {[40, 55, 65, 50, 70, 80, 60, 75, 85, 72].map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i % 2 ? "#54AF3A" : "#1AA6DF", opacity: 0.7 }} />
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 relative overflow-hidden">
            <div className="text-[10px] font-semibold text-gray-500 mb-2">Route Map</div>
            <div className="absolute inset-3 top-7 rounded bg-gradient-to-br from-[#e8f4e8] to-[#f0f4e8] flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-1">🗺️</div>
                <div className="text-[9px] text-gray-500">3 Pickup • 2 Drop Points</div>
                <div className="text-[9px] text-gray-400">19 Tons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "indenting",
    label: "Indenting",
    icon: "📝",
    color: "#fb923c",
    content: () => (
      <div className="bg-white rounded-xl p-5 h-full text-[#1a1a2e]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-base">Indents Summary</h3>
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-orange-50 text-orange-600">Last 24 hrs</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { label: "Published", value: "109", color: "#393185" },
            { label: "Open Indents", value: "47", color: "#fb923c" },
            { label: "Accepted", value: "60", color: "#54AF3A" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-lg p-2.5 text-center">
              <div className="text-lg font-bold" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[9px] text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-[10px] font-semibold text-gray-500 mb-1.5">Indent Status</div>
            {[
              { label: "Pending Acceptance", count: "22", color: "#fb923c" },
              { label: "In Assignment", count: "15", color: "#1AA6DF" },
              { label: "In Reporting", count: "10", color: "#393185" },
              { label: "Placement In-Progress", count: "8", color: "#54AF3A" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 py-1 border-b border-gray-100 last:border-0">
                <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                <span className="flex-1 text-[10px]">{s.label}</span>
                <span className="text-[11px] font-bold">{s.count}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="text-[10px] font-semibold text-gray-500 mb-1.5">Vehicles</div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-[9px] text-gray-400">120 Vehicles Requested</div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div>
                  <div className="text-lg font-bold text-green-600">90</div>
                  <div className="text-[8px] text-gray-400">Assigned (75%)</div>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <div className="text-lg font-bold text-red-500">30</div>
                  <div className="text-[8px] text-gray-400">Pending (25%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "tracking",
    label: "Tracking",
    icon: "📍",
    color: "#54AF3A",
    content: () => (
      <div className="bg-white rounded-xl p-5 h-full text-[#1a1a2e]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-base">Live Tracking</h3>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-semibold text-green-600">108 Active Trips</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-[#e8f7e8] to-[#f0f8e8] rounded-lg p-3 relative overflow-hidden" style={{ minHeight: 160 }}>
            <div className="text-[10px] font-semibold text-gray-600 mb-1">Map View</div>
            <div className="absolute bottom-2 left-3 bg-white rounded shadow px-2 py-1">
              <div className="text-[9px] font-bold">09 Dec, 05:24 AM</div>
              <div className="text-[8px] text-gray-400">Driver Phone: 781 588 ••••</div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 rounded-full bg-green-500 animate-ping opacity-40" />
              <div className="w-3 h-3 rounded-full bg-green-600 absolute top-0.5 left-0.5" />
            </div>
            <div className="absolute top-8 right-3 w-3 h-3 rounded-full bg-blue-500 opacity-60" />
            <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-orange-500 opacity-60" />
          </div>
          <div>
            <div className="bg-gray-50 rounded-lg p-3 mb-2">
              <div className="text-[10px] font-semibold text-gray-500 mb-1">Trip Details</div>
              <div className="text-[10px]"><span className="text-gray-400">Route:</span> <span className="font-medium">NC, Raigad → Patancheru TG</span></div>
              <div className="text-[10px] mt-1"><span className="text-gray-400">Distance:</span> <span className="font-bold">980km</span> / 1102km</div>
              <div className="text-[10px] mt-1"><span className="text-gray-400">ETA:</span> <span className="font-bold">10 Dec, 20:30</span></div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "89%" }} />
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-[10px] font-semibold text-gray-500 mb-1">Location Source</div>
              <div className="flex gap-3">
                <div>
                  <div className="text-[9px] text-gray-400">Primary</div>
                  <div className="text-[10px] font-bold">Driver Phone</div>
                </div>
                <div>
                  <div className="text-[9px] text-gray-400">Fallback</div>
                  <div className="text-[10px] font-bold">GPS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "control-tower",
    label: "Control Tower",
    icon: "🗼",
    color: "#393185",
    content: () => (
      <div className="bg-white rounded-xl p-5 h-full text-[#1a1a2e]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-base">Control Tower</h3>
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#f0eeff] text-[#393185]">Live Dashboard</span>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { title: "Pre-Transit", value: "47 Indents", sub: "37 Contracted", color: "#393185" },
            { title: "In-Transit", value: "108 Trips", sub: "96 On-Track", color: "#1AA6DF" },
            { title: "Post-Transit", value: "9 Open", sub: "1 Closed Trip", color: "#54AF3A" },
            { title: "Alerts", value: "34 Active", sub: "7 Overspeeding", color: "#ef4444" },
          ].map((c) => (
            <div key={c.title} className="bg-gray-50 rounded-lg p-2.5">
              <div className="text-[9px] font-semibold" style={{ color: c.color }}>{c.title}</div>
              <div className="text-sm font-bold mt-0.5">{c.value}</div>
              <div className="text-[8px] text-gray-400 mt-0.5">{c.sub}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1 mb-2">
          {["Indents 8", "Vehicles 12", "Open Trips 12", "Closed 75", "Alerts 12"].map((t) => (
            <div key={t} className="text-center py-1 rounded text-[8px] font-semibold bg-gray-100 text-gray-600">{t}</div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-[#f0f4e8] to-[#e8f0f4] rounded-lg p-3 relative overflow-hidden" style={{ height: 80 }}>
          {[
            { top: "20%", left: "15%", color: "#54AF3A" },
            { top: "40%", left: "35%", color: "#1AA6DF" },
            { top: "55%", left: "60%", color: "#fb923c" },
            { top: "30%", left: "80%", color: "#393185" },
            { top: "70%", left: "45%", color: "#54AF3A" },
          ].map((d, i) => (
            <div key={i} className="absolute w-2.5 h-2.5 rounded-full" style={{ top: d.top, left: d.left, background: d.color, boxShadow: `0 0 6px ${d.color}` }} />
          ))}
        </div>
      </div>
    ),
  },
];

const PlatformWalkthrough = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative">
      {/* Tabs */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {FEATURES.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all border ${
              activeTab === i
                ? "text-white border-transparent shadow-lg"
                : "bg-surface border-border text-muted-foreground hover:border-primary/30"
            }`}
            style={activeTab === i ? { background: f.color, borderColor: f.color, boxShadow: `0 4px 14px ${f.color}40` } : {}}
          >
            <span>{f.icon}</span>
            <span>{f.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative rounded-[20px] overflow-hidden border border-border/50" style={{ boxShadow: "0 20px 60px rgba(57,49,133,0.15), 0 0 0 1px rgba(57,49,133,0.08)" }}>
        <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {FEATURES[activeTab].content()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.08em] uppercase z-10" style={{ background: "linear-gradient(135deg, #393185, #1AA6DF)", color: "#fff", boxShadow: "0 4px 16px rgba(57,49,133,0.3)" }}>
        Interactive Demo
      </div>
    </div>
  );
};

export default PlatformWalkthrough;
