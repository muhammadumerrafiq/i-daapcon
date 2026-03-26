import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/idaap-logo.png";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Seminars", href: "/#seminars" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="I-DAAP Logo"
            className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
          <div className="flex flex-col leading-tight">
            <span
              className={`font-bold text-xl tracking-widest font-serif transition-colors duration-300 ${
                scrolled ? "text-charcoal-dark" : "text-white"
              }`}
            >
              I-DAAP
            </span>
            <span
              className={`text-[10px] tracking-wider font-sans uppercase transition-colors duration-300 ${
                scrolled ? "gold-text" : "text-white/80"
              }`}
            >
              CON 2026
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`text-sm font-medium tracking-wide transition-all duration-200 hover:text-gold relative group ${
                scrolled ? "text-charcoal" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-gold transition-all duration-300 group-hover:w-full rounded" />
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link to="/login" className="btn-gold-outline hidden md:flex text-sm px-5 py-2">
            Login
          </Link>
          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-charcoal-dark" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-t border-divider shadow-card-hover">
          <div className="container px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-charcoal font-medium py-2 border-b border-light-grey hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link to="/login" className="btn-gold text-center mt-2" onClick={() => setMobileOpen(false)}>
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
