import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, MapPin, Mail, Phone, Globe, ArrowUpRight, Facebook, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden">
    {/* Gradient top edge */}
    <div className="h-1 w-full bg-gradient-to-r from-ln-blue via-ln-green to-ln-purple" />

    <div className="py-5 px-[5vw]" style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #16162a 100%)', color: 'rgba(255,255,255,.75)' }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 15% 85%, hsl(var(--ln-blue)) 0%, transparent 40%), radial-gradient(circle at 85% 15%, hsl(var(--ln-green)) 0%, transparent 40%)"
      }} />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2.2fr_1fr_1fr_1fr] gap-5 mb-5">
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-extrabold mb-2" style={{ color: '#fff' }}>
              LogisticsNow<span className="text-ln-green">.</span>ai
            </div>
            <p className="text-[11px] leading-[1.6] max-w-[260px] mb-3" style={{ color: 'rgba(255,255,255,.5)' }}>
              India’s logistics intelligence platform helping enterprises build smarter, faster and more resilient supply chains using AI.
            </p>
            <div className="flex gap-2">
              {[
                { icon: <Linkedin size={14} />, label: "LinkedIn", to: "https://www.linkedin.com/company/logisticsnow/?originalSubdomain=in" },
                { icon: <Facebook size={14} />, label: "Facebook", to: "https://www.facebook.com/logisticsnow/" },
                { icon: <Instagram size={14} />, label: "Instagram", to: "https://www.instagram.com/logisticsnowln/?hl=en" },
                { icon: <Youtube size={14} />, label: "Youtube", to: "https://www.youtube.com/@logisticsnowpvtltd1252" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.to}
                  target="_blank"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-md flex items-center justify-center no-underline transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{
                    background: 'rgba(255,255,255,.06)',
                    border: '1px solid rgba(255,255,255,.1)',
                    color: 'rgba(255,255,255,.6)',
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h5 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-3 text-ln-green">Products/ Solutions</h5>
            {["LoRRI Platform for Shippers", "LoRRI Platform for Carriers"].map((l) => (
              <a key={l} href="#" className="group flex items-center gap-1 text-[13px] mb-2 no-underline transition-colors duration-200 hover:!text-white" style={{ color: 'rgba(255,255,255,.55)' }}>
                {l}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-3 text-ln-green">Company</h5>
            {[
              { label: "About Us", to: "/about" },
              { label: "Careers", to: "/careers" },
              { label: "Investors", to: "#" },
              { label: "Vision", to: "#" },
              { label: "Contact Us", to: "/contact" },
            ].map((l) => (
              <Link key={l.label} to={l.to} className="group flex items-center gap-1 text-[13px] mb-2 no-underline transition-colors duration-200 hover:!text-white" style={{ color: 'rgba(255,255,255,.55)' }}>
                {l.label}
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-3 text-ln-green">Get in Touch</h5>
            <div className="space-y-2">
              <a href="mailto:connect@logisticsnow.in" className="flex items-center gap-2 text-[13px] no-underline transition-colors hover:!text-white" style={{ color: 'rgba(255,255,255,.55)' }}>
                <Mail size={13} className="text-ln-green flex-shrink-0" />
                connect@logisticsnow.in
              </a>
              <a href="tel:+919867773508" className="flex items-center gap-2 text-[13px] no-underline transition-colors hover:!text-white" style={{ color: 'rgba(255,255,255,.55)' }}>
                <Phone size={13} className="text-ln-green flex-shrink-0" />
                +91-9867773508
              </a>
              <a href="https://www.lorri.ai" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[13px] no-underline transition-colors hover:!text-white" style={{ color: 'rgba(255,255,255,.55)' }}>
                <Globe size={13} className="text-ln-green flex-shrink-0" />
                www.lorri.ai
              </a>
              <div className="flex items-start gap-2 text-[13px]" style={{ color: 'rgba(255,255,255,.45)' }}>
                <MapPin size={13} className="text-ln-green flex-shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-4 flex justify-between items-center flex-wrap gap-3" style={{ borderColor: 'rgba(255,255,255,.08)' }}>
          <p className="text-[13px]" style={{ color: 'rgba(255,255,255,.35)' }}>
            © 2026 LogisticsNow Technologies Pvt. Ltd. All rights reserved. 
            {/* | Developed with <span className="text-red-400">❤</span> in India */}
          </p>
          <div className="flex items-center gap-2 font-mono text-[11.5px]" style={{ color: 'rgba(255,255,255,.35)' }}>
            <div className="w-[7px] h-[7px] bg-ln-green rounded-full animate-pulse" style={{ boxShadow: '0 0 8px hsl(107 50% 46%)' }} />
            {/* All systems operational */}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
