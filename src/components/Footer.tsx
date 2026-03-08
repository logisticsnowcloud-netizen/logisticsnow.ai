import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-16 px-[5vw]" style={{ background: '#2B2A29', color: 'rgba(255,255,255,.75)' }}>
    <div className="grid grid-cols-1 md:grid-cols-[2.2fr_1fr_1fr_1fr] gap-12 mb-12 max-w-[1280px] mx-auto">
      <div>
        <div className="font-display text-xl font-extrabold mb-3.5" style={{ color: '#fff' }}>
          LogisticsNow<span className="text-ln-green">.</span>ai
        </div>
        <p className="text-sm leading-[1.7] max-w-[280px]" style={{ color: 'rgba(255,255,255,.55)' }}>
          India's national logistics intelligence grid — making every supply chain smarter, faster, and more resilient with AI.
        </p>
        <div className="flex gap-2 mt-4">
          {["in", "X", "▶"].map((s) => (
            <a key={s} href="#" className="w-[34px] h-[34px] rounded-lg flex items-center justify-center text-sm no-underline" style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.1)', color: 'rgba(255,255,255,.6)' }}>
              {s}
            </a>
          ))}
        </div>
      </div>
      <div>
        <h5 className="text-xs font-bold tracking-[0.1em] uppercase mb-4" style={{ color: 'rgba(255,255,255,.35)' }}>Platform</h5>
        {["LoRRI for Shippers", "LoRRI for Carriers", "Command Center", "Predict Engine"].map((l) => (
          <a key={l} href="#" className="block text-sm mb-2.5 no-underline hover:!text-white" style={{ color: 'rgba(255,255,255,.6)' }}>{l}</a>
        ))}
      </div>
      <div>
        <h5 className="text-xs font-bold tracking-[0.1em] uppercase mb-4" style={{ color: 'rgba(255,255,255,.35)' }}>Company</h5>
        {[
          { label: "About Us", to: "/about" },
          { label: "Vision", to: "#" },
          { label: "Investors", to: "#" },
          { label: "Careers", to: "#" },
          { label: "News & Events", to: "#" },
        ].map((l) => (
          <Link key={l.label} to={l.to} className="block text-sm mb-2.5 no-underline hover:!text-white" style={{ color: 'rgba(255,255,255,.6)' }}>{l.label}</Link>
        ))}
      </div>
      <div>
        <h5 className="text-xs font-bold tracking-[0.1em] uppercase mb-4" style={{ color: 'rgba(255,255,255,.35)' }}>Contact</h5>
        <a href="mailto:connect@logisticsnow.in" className="block text-sm mb-2.5 no-underline" style={{ color: 'rgba(255,255,255,.6)' }}>connect@logisticsnow.in</a>
        <a href="tel:+919867773508" className="block text-sm mb-2.5 no-underline" style={{ color: 'rgba(255,255,255,.6)' }}>+91-9867773508</a>
        <a href="https://www.lorri.ai" target="_blank" rel="noreferrer" className="block text-sm mb-2.5 no-underline" style={{ color: 'rgba(255,255,255,.6)' }}>www.lorri.ai</a>
        <Link to="/product" className="block text-sm mb-2.5 no-underline" style={{ color: 'rgba(255,255,255,.6)' }}>Products</Link>
      </div>
    </div>
    <div className="border-t pt-6 flex justify-between items-center flex-wrap gap-3 max-w-[1280px] mx-auto" style={{ borderColor: 'rgba(255,255,255,.1)' }}>
      <p className="text-[13px]" style={{ color: 'rgba(255,255,255,.35)' }}>© 2025 LogisticsNow Technologies Pvt. Ltd. All rights reserved. | Developed with ❤ in India</p>
      <div className="flex items-center gap-2 font-mono text-[11.5px]" style={{ color: 'rgba(255,255,255,.35)' }}>
        <div className="w-[7px] h-[7px] bg-ln-green rounded-full" style={{ boxShadow: '0 0 6px hsl(107 50% 46%)' }} />
        All systems operational · api.logisticsnow.ai
      </div>
    </div>
  </footer>
);

export default Footer;
