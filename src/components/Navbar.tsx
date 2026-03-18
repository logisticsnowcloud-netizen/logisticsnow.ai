import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScheduleDemo } from "@/hooks/useScheduleDemo";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [open, setOpen] = useState(false);
  const { setOpen: setDemoOpen } = useScheduleDemo();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Products", to: "/product" },
    { label: "Careers", to: "/careers" },
    { label: "News & Events", to: "/news" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <nav
      className="sticky top-0 z-[190] border-b border-border transition-colors duration-300"
      style={{ background: "hsl(var(--nav-bg))", boxShadow: "0 2px 20px hsl(var(--ln-purple) / 0.12)" }}
    >
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between gap-3 px-[4vw] sm:px-[5vw]">
        <Link to="/" className="flex min-w-0 items-center gap-1.5 no-underline">
          <img src="/logos/ln.png" alt="LogisticsNow" className="h-auto w-[170px] sm:w-[200px]" />
          <span className="mt-1 text-sm font-bold text-ln-green sm:mt-2">.ai</span>
        </Link>

        <div className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`rounded-lg px-3.5 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-200 no-underline font-body ${
                path === item.to
                  ? "text-ln-purple bg-surface"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface"
              }`}
            >
              {item.label}
              {item.label === "News & Events" ? " ▾" : ""}
            </Link>
          ))}
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border-none bg-transparent text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          type="button"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-border px-[5vw] pb-4 pt-3 md:hidden" style={{ background: "hsl(var(--nav-bg))" }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3.5 py-3 text-sm font-semibold no-underline font-body ${
                path === item.to
                  ? "text-ln-purple bg-surface"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              requestAnimationFrame(() => setDemoOpen(true));
            }}
            className="mt-2 w-full rounded-full bg-ln-green px-5 py-2.5 text-[13.5px] font-bold text-primary-foreground touch-manipulation"
            type="button"
          >
            Schedule Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
