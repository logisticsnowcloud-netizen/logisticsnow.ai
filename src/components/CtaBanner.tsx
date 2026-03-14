import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const CtaBanner = () => (
  <ScrollReveal direction="none" duration={0.8}>
    <div className="gradient-cta py-[36px] px-[5vw] text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(84,175,58,.15), transparent 60%)' }} />
      <h2 className="font-display font-extrabold tracking-[-0.025em] mb-4 relative z-[1] heading-section" style={{ color: '#fff' }}>
        Ready to Join the<br /><span className="text-ln-green">Logistics Intelligence Revolution?</span>
      </h2>
      <p className="text-lg max-w-[520px] mx-auto mb-6 relative z-[1]" style={{ color: 'rgba(255,255,255,.72)' }}>See how LogisticsNow transforms freight costs, carrier relationships and supply chain visibility.</p>
      <div className="flex gap-3.5 justify-center flex-wrap relative z-[1]">
        <Link to="/contact" className="btn-white-ln no-underline">🚛 Schedule Demo →</Link>
        {/* <Link to="/" className="btn-ghost-ln no-underline">← Back to Home</Link> */}
      </div>
      <p className="font-mono text-[13px] mt-4 relative z-[1]" style={{ color: 'rgba(255,255,255,.45)' }}>Onboarding in 5 days | Go-Live in 30 days</p>
    </div>
  </ScrollReveal>
);

export default CtaBanner;
