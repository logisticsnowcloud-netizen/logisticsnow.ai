import { Link } from "react-router-dom";

const Topbar = () => (
  <div className="bg-ln-purple flex items-center justify-between px-[5vw] min-h-[40px] text-[12.5px] font-medium" style={{ color: '#fff' }}>
    <div className="flex items-center gap-5">
      <a href="mailto:connect@logisticsnow.in" className="flex items-center gap-1.5 text-xs no-underline" style={{ color: 'rgba(255,255,255,.85)' }}>
        ✉ connect@logisticsnow.in
      </a>
      <span style={{ color: 'rgba(255,255,255,.3)' }}>|</span>
      <a href="tel:+919867773508" className="flex items-center gap-1.5 text-xs no-underline" style={{ color: 'rgba(255,255,255,.85)' }}>
        📞 +91-9867773508
      </a>
    </div>
    <div className="bg-ln-green rounded-full px-4 py-1 text-[11px] font-bold tracking-[0.06em] uppercase cursor-pointer flex items-center gap-1.5" style={{ color: '#fff' }}>
      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'rgba(255,255,255,.7)' }} />
      🚛 Schedule a Demo
    </div>
  </div>
);

export default Topbar;
