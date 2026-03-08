import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

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

        <div className="flex items-center gap-0.5">
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

        <div className="flex items-center gap-2.5">
          <button className="bg-ln-green rounded-full px-5 py-2 text-[13.5px] font-bold border-none cursor-pointer font-body" style={{ color: '#fff' }}>
            Schedule Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
