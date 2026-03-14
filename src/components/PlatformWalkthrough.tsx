import { useState, useEffect, useCallback, useRef } from "react";
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
          <div className="flex gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#e8f7fd] text-[#1AA6DF]">AI Optimized</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-green-50 text-green-600">✓ Saved ₹42K</span>
          </div>
        </div>
        {/* Top KPIs */}
        <div className="grid grid-cols-6 gap-2 mb-3">
          {[
            { label: "Shipments", value: "24", icon: "📦" },
            { label: "Orders", value: "18", icon: "📋" },
            { label: "Vehicles", value: "8", icon: "🚛" },
            { label: "Total Cost", value: "₹5.2L", icon: "💰" },
            { label: "Vol. Util.", value: "94%", icon: "📊" },
            { label: "Wt. Util.", value: "91%", icon: "⚖️" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-lg p-2 text-center">
              <div className="text-[10px] mb-0.5">{s.icon}</div>
              <div className="text-sm font-bold">{s.value}</div>
              <div className="text-[7px] text-gray-500 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-3">
          {/* Shipment Table */}
          <div className="col-span-3 bg-gray-50 rounded-lg p-3">
            <div className="text-[10px] font-semibold text-gray-500 mb-2">Shipment Plan</div>
            <div className="grid grid-cols-5 gap-1 mb-1.5 text-[8px] font-bold text-gray-400 uppercase">
              <span>Vehicle</span><span>Route</span><span>Weight</span><span>Vol%</span><span>Status</span>
            </div>
            {[
              { v: "MH-04-AB-1234", route: "MUM→PUN", wt: "18T", vol: "96%", status: "Planned" },
              { v: "MH-12-CD-5678", route: "MUM→DEL", wt: "22T", vol: "98%", status: "Dispatched" },
              { v: "GJ-01-EF-9012", route: "AHM→BLR", wt: "16T", vol: "88%", status: "Planned" },
              { v: "RJ-14-GH-3456", route: "JAI→HYD", wt: "20T", vol: "92%", status: "Loading" },
            ].map((s) => (
              <div key={s.v} className="grid grid-cols-5 gap-1 py-1.5 border-b border-gray-100 last:border-0 text-[9px]">
                <span className="font-mono font-medium truncate">{s.v}</span>
                <span className="font-semibold">{s.route}</span>
                <span>{s.wt}</span>
                <span className="font-bold text-[#1AA6DF]">{s.vol}</span>
                <span className={`px-1 py-0.5 rounded text-[7px] font-bold text-center ${s.status === "Dispatched" ? "bg-green-100 text-green-700" : s.status === "Loading" ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-700"}`}>{s.status}</span>
              </div>
            ))}
          </div>
          {/* Analytics + Route */}
          <div className="col-span-2 flex flex-col gap-2">
            <div className="bg-gray-50 rounded-lg p-3 flex-1">
              <div className="text-[10px] font-semibold text-gray-500 mb-2">Utilization Trend</div>
              <div className="flex items-end gap-1 h-14">
                {[72, 78, 85, 80, 88, 92, 86, 94, 90, 96, 93, 94].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t relative group" style={{ height: `${h}%`, background: h >= 90 ? "#54AF3A" : h >= 80 ? "#1AA6DF" : "#fb923c" }}>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[6px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">{h}%</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[7px] text-gray-400 mt-1">
                <span>Jan</span><span>Jun</span><span>Dec</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#e3f0ff] to-[#e8f4e8] rounded-lg p-3 relative overflow-hidden flex-1">
              <div className="text-[10px] font-semibold text-gray-600 mb-1">Route Map</div>
              {/* Simulated route lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ top: 20 }}>
                <path d="M 20 60 Q 60 20, 100 50 T 180 40" stroke="#393185" strokeWidth="2" fill="none" strokeDasharray="4,3" opacity="0.6" />
                <path d="M 30 80 Q 80 50, 130 70 T 200 30" stroke="#1AA6DF" strokeWidth="2" fill="none" strokeDasharray="4,3" opacity="0.6" />
                <circle cx="20" cy="60" r="4" fill="#54AF3A" />
                <circle cx="100" cy="50" r="3" fill="#fb923c" />
                <circle cx="180" cy="40" r="4" fill="#ef4444" />
                <circle cx="30" cy="80" r="4" fill="#54AF3A" />
                <circle cx="200" cy="30" r="4" fill="#ef4444" />
              </svg>
              <div className="absolute bottom-2 left-3 text-[8px] text-gray-500">4 Pickup • 3 Drop • 8 Vehicles</div>
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
          <h3 className="font-bold text-base">Live Tracking — Map View</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-semibold text-green-600">108 Active</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-red-50 text-red-600">7 Delayed</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3" style={{ minHeight: 220 }}>
          {/* Full Map View */}
          <div className="col-span-2 rounded-lg relative overflow-hidden border border-gray-200" style={{ background: "linear-gradient(145deg, #e8f0e0 0%, #d4e4cc 25%, #e0e8d8 50%, #dce8d0 75%, #e4ece0 100%)" }}>
            {/* Grid lines for map feel */}
            <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
            {/* Major road lines */}
            <svg className="absolute inset-0 w-full h-full">
              <path d="M 10 120 Q 80 40, 150 80 T 280 50 T 400 70" stroke="#999" strokeWidth="1.5" fill="none" opacity="0.3" />
              <path d="M 50 180 Q 120 100, 200 140 T 350 90" stroke="#999" strokeWidth="1" fill="none" opacity="0.2" />
              {/* Route path highlighted */}
              <path d="M 40 160 Q 100 90, 180 110 T 320 60" stroke="#393185" strokeWidth="2.5" fill="none" strokeDasharray="6,4" opacity="0.7" />
              <path d="M 40 160 Q 100 90, 180 110" stroke="#54AF3A" strokeWidth="2.5" fill="none" opacity="0.9" />
            </svg>
            {/* Vehicle markers on map */}
            {[
              { top: "30%", left: "20%", color: "#54AF3A", label: "MH-04", status: "On Time" },
              { top: "45%", left: "42%", color: "#54AF3A", label: "GJ-01", status: "On Time" },
              { top: "55%", left: "65%", color: "#fb923c", label: "RJ-14", status: "Delayed" },
              { top: "25%", left: "75%", color: "#54AF3A", label: "DL-02", status: "On Time" },
              { top: "65%", left: "30%", color: "#ef4444", label: "KA-05", status: "Stopped" },
              { top: "40%", left: "85%", color: "#1AA6DF", label: "UP-32", status: "Loading" },
            ].map((v, i) => (
              <div key={i} className="absolute group" style={{ top: v.top, left: v.left }}>
                <div className="w-3 h-3 rounded-full animate-ping absolute" style={{ background: v.color, opacity: 0.3 }} />
                <div className="w-3 h-3 rounded-full relative border-2 border-white shadow-md" style={{ background: v.color }} />
                <div className="absolute left-4 -top-1 bg-white rounded shadow-lg px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <div className="text-[8px] font-bold">{v.label}</div>
                  <div className="text-[7px]" style={{ color: v.color }}>{v.status}</div>
                </div>
              </div>
            ))}
            {/* Origin & Destination markers */}
            <div className="absolute" style={{ top: "62%", left: "12%" }}>
              <div className="w-5 h-5 rounded-full bg-green-600 border-2 border-white shadow-lg flex items-center justify-center text-white text-[7px] font-bold">A</div>
              <div className="text-[7px] font-bold text-gray-700 mt-0.5">Mumbai</div>
            </div>
            <div className="absolute" style={{ top: "18%", left: "82%" }}>
              <div className="w-5 h-5 rounded-full bg-red-600 border-2 border-white shadow-lg flex items-center justify-center text-white text-[7px] font-bold">B</div>
              <div className="text-[7px] font-bold text-gray-700 mt-0.5">Delhi</div>
            </div>
            {/* Map legend */}
            <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1.5 shadow-sm">
              <div className="flex gap-3 text-[7px]">
                {[
                  { c: "#54AF3A", l: "On Time" },
                  { c: "#fb923c", l: "Delayed" },
                  { c: "#ef4444", l: "Stopped" },
                  { c: "#1AA6DF", l: "Loading" },
                ].map((s) => (
                  <div key={s.l} className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.c }} />
                    <span className="text-gray-600">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Zoom controls */}
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              <div className="w-5 h-5 bg-white rounded shadow text-center text-[10px] font-bold text-gray-600 leading-5">+</div>
              <div className="w-5 h-5 bg-white rounded shadow text-center text-[10px] font-bold text-gray-600 leading-5">−</div>
            </div>
          </div>
          {/* Trip Details Panel */}
          <div className="flex flex-col gap-2">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-[10px] font-semibold text-gray-500 mb-2">Selected Trip</div>
              <div className="text-[10px]"><span className="text-gray-400">ID:</span> <span className="font-mono font-bold">TRP-28451</span></div>
              <div className="text-[10px] mt-1"><span className="text-gray-400">Route:</span> <span className="font-medium">Mumbai → Delhi</span></div>
              <div className="text-[10px] mt-1"><span className="text-gray-400">Vehicle:</span> <span className="font-medium">MH-04-AB-1234</span></div>
              <div className="text-[10px] mt-1"><span className="text-gray-400">Driver:</span> <span className="font-medium">Ramesh K.</span></div>
              <div className="text-[10px] mt-1.5"><span className="text-gray-400">Distance:</span> <span className="font-bold">980 / 1,102 km</span></div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1.5">
                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "89%" }} />
              </div>
              <div className="flex justify-between text-[8px] text-gray-400 mt-1">
                <span>89% completed</span>
                <span>ETA: 10 Dec, 20:30</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-[10px] font-semibold text-gray-500 mb-1.5">Trip Timeline</div>
              {[
                { time: "06:00", event: "Departed Mumbai", done: true },
                { time: "12:30", event: "Crossed Nashik", done: true },
                { time: "18:45", event: "Reached Jaipur", done: true },
                { time: "20:30", event: "ETA Delhi", done: false },
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-2 mb-1.5 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-2 h-2 rounded-full mt-0.5 ${t.done ? "bg-green-500" : "bg-gray-300"}`} />
                    {i < 3 && <div className={`w-px h-3 ${t.done ? "bg-green-300" : "bg-gray-200"}`} />}
                  </div>
                  <div>
                    <div className="text-[8px] text-gray-400">{t.time}</div>
                    <div className={`text-[9px] ${t.done ? "font-medium" : "text-gray-400"}`}>{t.event}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-[10px] font-semibold text-gray-500 mb-1">Location Source</div>
              <div className="flex gap-3">
                <div>
                  <div className="text-[8px] text-gray-400">Primary</div>
                  <div className="text-[9px] font-bold flex items-center gap-1">📱 SIM</div>
                </div>
                <div>
                  <div className="text-[8px] text-gray-400">Fallback</div>
                  <div className="text-[9px] font-bold flex items-center gap-1">📡 GPS</div>
                </div>
                <div>
                  <div className="text-[8px] text-gray-400">Updated</div>
                  <div className="text-[9px] font-bold text-green-600">2m ago</div>
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
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-semibold text-green-600">Live</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#f0eeff] text-[#393185]">Dashboard</span>
          </div>
        </div>
        {/* Phase Cards */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { title: "Pre-Transit", value: "47", sub: "37 Contracted • 10 Spot", color: "#393185", icon: "📋" },
            { title: "In-Transit", value: "108", sub: "96 On-Track • 12 Delayed", color: "#1AA6DF", icon: "🚛" },
            { title: "Post-Transit", value: "32", sub: "28 ePOD • 4 Pending", color: "#54AF3A", icon: "✅" },
            { title: "Exceptions", value: "19", sub: "7 Overspeed • 5 Route Dev", color: "#ef4444", icon: "⚠️" },
          ].map((c) => (
            <div key={c.title} className="bg-gray-50 rounded-lg p-2.5 relative overflow-hidden">
              <div className="absolute top-1 right-1 text-[14px] opacity-10">{c.icon}</div>
              <div className="text-[9px] font-semibold" style={{ color: c.color }}>{c.title}</div>
              <div className="text-xl font-bold mt-0.5" style={{ color: c.color }}>{c.value}</div>
              <div className="text-[7px] text-gray-400 mt-0.5">{c.sub}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {/* Mini Map */}
          <div className="rounded-lg relative overflow-hidden border border-gray-200" style={{ background: "linear-gradient(145deg, #e8f0e0 0%, #d4e4cc 50%, #e4ece0 100%)", minHeight: 120 }}>
            <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            {[
              { t: "20%", l: "25%", c: "#54AF3A" },
              { t: "35%", l: "45%", c: "#54AF3A" },
              { t: "50%", l: "65%", c: "#fb923c" },
              { t: "30%", l: "75%", c: "#54AF3A" },
              { t: "60%", l: "35%", c: "#ef4444" },
              { t: "45%", l: "55%", c: "#1AA6DF" },
              { t: "70%", l: "20%", c: "#54AF3A" },
              { t: "25%", l: "85%", c: "#54AF3A" },
            ].map((d, i) => (
              <div key={i} className="absolute w-2 h-2 rounded-full" style={{ top: d.t, left: d.l, background: d.c, boxShadow: `0 0 6px ${d.c}` }} />
            ))}
            <div className="absolute bottom-1 left-1 bg-white/80 rounded px-1 py-0.5 text-[6px] font-semibold text-gray-600">Pan India View</div>
          </div>
          {/* Alerts Feed */}
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-[10px] font-semibold text-gray-500 mb-2">Live Alerts</div>
            {[
              { type: "🔴", msg: "MH-04 Overspeeding — 92km/h", time: "2m" },
              { type: "🟠", msg: "Route deviation — GJ-01", time: "8m" },
              { type: "🟡", msg: "Unscheduled stop — RJ-14", time: "15m" },
              { type: "🔴", msg: "Geofence breach — KA-05", time: "22m" },
              { type: "🟢", msg: "ePOD uploaded — DL-02", time: "30m" },
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-1.5 py-1 border-b border-gray-100 last:border-0">
                <span className="text-[8px] mt-0.5">{a.type}</span>
                <span className="flex-1 text-[8px] leading-tight">{a.msg}</span>
                <span className="text-[7px] text-gray-400 whitespace-nowrap">{a.time}</span>
              </div>
            ))}
          </div>
          {/* Performance Summary */}
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-[10px] font-semibold text-gray-500 mb-2">Performance</div>
            {[
              { label: "On-Time Delivery", value: "89%", bar: 89, color: "#54AF3A" },
              { label: "Vehicle Utilization", value: "94%", bar: 94, color: "#1AA6DF" },
              { label: "Cost per Km", value: "₹32.4", bar: 72, color: "#393185" },
              { label: "SLA Compliance", value: "96%", bar: 96, color: "#54AF3A" },
            ].map((p) => (
              <div key={p.label} className="mb-2 last:mb-0">
                <div className="flex justify-between text-[8px] mb-0.5">
                  <span className="text-gray-500">{p.label}</span>
                  <span className="font-bold">{p.value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="h-1 rounded-full" style={{ width: `${p.bar}%`, background: p.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

const AUTO_SWITCH_INTERVAL = 4000;

const PlatformWalkthrough = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSwitch = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % FEATURES.length);
    }, AUTO_SWITCH_INTERVAL);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startAutoSwitch();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, startAutoSwitch]);

  const handleTabClick = (i: number) => {
    setActiveTab(i);
    setIsPaused(true);
    // Resume auto-switch after 10 seconds of inactivity
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <div className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Tabs */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {FEATURES.map((f, i) => (
          <button
            key={f.id}
            onClick={() => handleTabClick(i)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all border relative overflow-hidden ${
              activeTab === i
                ? "text-white border-transparent shadow-lg"
                : "bg-surface border-border text-muted-foreground hover:border-primary/30"
            }`}
            style={activeTab === i ? { background: f.color, borderColor: f.color, boxShadow: `0 4px 14px ${f.color}40` } : {}}
          >
            {/* Progress bar for active tab */}
            {activeTab === i && !isPaused && (
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-white/40"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTO_SWITCH_INTERVAL / 1000, ease: "linear" }}
                key={`progress-${i}-${activeTab}`}
              />
            )}
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
      {/* <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.08em] uppercase z-10" style={{ background: "linear-gradient(135deg, #393185, #1AA6DF)", color: "#fff", boxShadow: "0 4px 16px rgba(57,49,133,0.3)" }}>
        Interactive Demo
      </div> */}
    </div>
  );
};

export default PlatformWalkthrough;
