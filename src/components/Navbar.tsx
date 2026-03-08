import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Products", to: "/product" },
    { label: "News & Events", to: "#" },
    { label: "Contact Us", to: "#" },
  ];

  return (
    <nav className="sticky top-0 z-[190] border-b border-border transition-colors duration-300" style={{ background: 'hsl(var(--nav-bg))', boxShadow: '0 2px 20px hsl(var(--ln-purple) / 0.12)' }}>
      <div className="flex items-center justify-between px-[5vw] h-[68px] max-w-[1400px] mx-auto">
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-10 h-10 rounded-[10px] gradient-primary flex items-center justify-center font-display text-lg font-extrabold" style={{ color: '#fff' }}>
            LN
          </div>
          <div className="font-display text-xl font-extrabold tracking-[-0.02em] text-ln-purple">
            LogisticsNow<span className="text-ln-green">.</span><span className="text-ln-blue text-sm align-super">ai</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 no-underline font-body ${
                path === item.to
                  ? "text-ln-purple bg-surface"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface"
              }`}
            >
              {item.label}{item.label === "News & Events" ? " ▾" : ""}
            </Link>
          ))}
        </div>


        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-transparent border-none cursor-pointer text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-1 px-[5vw] pb-4 border-t border-border" style={{ background: 'hsl(var(--nav-bg))' }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`px-3.5 py-3 rounded-lg text-sm font-semibold no-underline font-body ${
                path === item.to
                  ? "text-ln-purple bg-surface"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-ln-green rounded-full px-5 py-2.5 mt-2 text-[13.5px] font-bold border-none cursor-pointer font-body w-full" style={{ color: '#fff' }}>
            Schedule Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
