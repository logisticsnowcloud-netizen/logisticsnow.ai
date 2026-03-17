import ScrollReveal from "@/components/ScrollReveal";
import { useScheduleDemo } from "@/hooks/useScheduleDemo";

const CtaBanner = () => {
  const { setOpen } = useScheduleDemo();

  return (
    <ScrollReveal direction="none" duration={0.8}>
      <div className="gradient-cta py-5 px-[5vw] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(84,175,58,.15), transparent 60%)' }} />
        <h2 className="font-display font-extrabold tracking-[-0.025em] mb-2 relative z-[1] text-2xl md:text-3xl" style={{ color: '#fff' }}>
          Ready to Join the <span className="text-ln-green">Logistics Intelligence Revolution?</span>
        </h2>
        <p className="text-sm max-w-[520px] mx-auto mb-4 relative z-[1]" style={{ color: 'rgba(255,255,255,.72)' }}>See how LogisticsNow transforms freight procurement, carrier relationships and logistics intelligence.</p>
        <div className="flex gap-3 justify-center flex-wrap relative z-[1]">
          <button onClick={() => setOpen(true)} className="btn-white-ln no-underline text-sm py-2 px-6 border-none cursor-pointer">🚛 Schedule Demo →</button>
        </div>
        <p className="font-mono text-[11px] mt-2.5 relative z-[1]" style={{ color: 'rgba(255,255,255,.45)' }}>Onboarding in 5 days | Go-Live in 30 days</p>
      </div>
    </ScrollReveal>
  );
};

export default CtaBanner;
