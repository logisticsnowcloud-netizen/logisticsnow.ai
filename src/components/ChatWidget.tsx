import { useState } from "react";

const botReplies: Record<string, string> = {
  lorri: "LoRRI (Logistics Routing & Real-time Intelligence) is our flagship AI routing engine trained on $2.5Bn+ of logistics data. Clients see 7–20%+ cost reduction! 🗺️",
  pricing: "Usage-based pricing scaling with shipment volume. Enterprise contracts ₹8–25L/month. Free 30-day pilot available. 💰",
  demo: "Happy to set that up! Our team runs a live 45-min demo tailored to your industry. Click 'Schedule Demo' above, or I can take your details now. 📅",
  default: "Great question! LogisticsNow.ai powers India's national logistics intelligence — AI routing, benchmarking, real-time visibility. What aspect interests you? 🚀",
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot" as const, text: "Hello! I'm NowAssist, your AI logistics advisor. What would you like to know?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const newMsgs = [...messages, { role: "usr" as const, text }];
    setMessages(newMsgs);
    setInput("");

    const key = Object.keys(botReplies).find((k) => text.toLowerCase().includes(k)) || "default";
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot" as const, text: botReplies[key] }]);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-7 right-7 z-[400] w-[58px] h-[58px] rounded-full border-none text-2xl cursor-pointer gradient-primary"
        style={{ boxShadow: '0 8px 28px hsl(var(--ln-purple) / 0.4)', color: '#fff' }}
      >
        🤖
      </button>

      {open && (
        <div className="fixed bottom-[98px] right-7 z-[400] w-[340px] max-h-[480px] rounded-[28px] overflow-hidden flex flex-col border border-border" style={{ background: 'hsl(var(--nav-bg))', boxShadow: '0 12px 48px hsl(var(--ln-purple) / 0.16)' }}>
          <div className="px-4 py-4 gradient-primary flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-base" style={{ background: 'rgba(255,255,255,.2)' }}>🧠</div>
              <div>
                <div className="text-sm font-bold" style={{ color: '#fff' }}>NowAssist AI</div>
                <div className="text-[11px]" style={{ color: 'rgba(255,255,255,.75)' }}>Online</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="bg-transparent border-none text-lg cursor-pointer" style={{ color: 'rgba(255,255,255,.7)' }}>✕</button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2.5">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[88%] ${m.role === "bot" ? "self-start" : "self-end"}`}>
                <div className={`px-3.5 py-2.5 text-[13px] leading-[1.6] ${
                  m.role === "bot"
                    ? "bg-surface border border-border rounded-[4px_14px_14px_14px] text-foreground"
                    : "gradient-primary rounded-[14px_4px_14px_14px]"
                }`} style={m.role === "usr" ? { color: '#fff' } : {}}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-3.5 pt-2.5 pb-0 flex flex-wrap gap-1.5">
            {["How does LoRRI work?", "Pricing?", "Book a demo"].map((q) => (
              <button key={q} onClick={() => sendMessage(q)} className="text-xs font-semibold text-ln-purple rounded-full px-3 py-1 cursor-pointer font-body" style={{ background: 'hsl(var(--ln-purple) / 0.08)', border: '1px solid hsl(var(--ln-purple) / 0.2)' }}>
                {q}
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Ask anything…"
              className="flex-1 bg-surface border border-border text-foreground rounded-[14px] px-3.5 py-2 text-[13px] outline-none font-body"
            />
            <button onClick={() => sendMessage(input)} className="bg-ln-green border-none rounded-[14px] px-3.5 text-base cursor-pointer" style={{ color: '#fff' }}>→</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
