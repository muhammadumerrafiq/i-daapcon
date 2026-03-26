import { Link } from "react-router-dom";
import { Calendar, MapPin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Left-side gradient for text readability — fades to transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      {/* Subtle top/bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 md:px-16 max-w-7xl pt-28 pb-24">
        <div className="max-w-xl flex flex-col gap-6">

          {/* Pill label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 backdrop-blur-sm w-fit"
            style={{ background: "rgba(197,160,89,0.18)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-white/90 text-xs font-semibold tracking-widest uppercase font-sans">
              International Medical Conference
            </span>
          </div>

          {/* Main heading */}
          <div>
            <h1
              className="text-white font-serif font-bold leading-none tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
            >
              3<sup className="text-2xl md:text-4xl align-super">rd</sup>{" "}
              <span style={{ color: "hsl(var(--gold))" }}>I-DAAP</span>
              <br />
              CON
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-white/75 text-base md:text-lg font-sans font-light leading-relaxed max-w-sm">
            International Dermatology and Aesthetic Association of Pakistan
          </p>

          {/* Event details */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <div className="flex items-center gap-2 text-white/60 text-sm font-sans">
              <Calendar size={14} className="text-gold flex-shrink-0" />
              <span>Oct 24–26, 2026</span>
            </div>
            <div className="hidden sm:block w-px bg-white/20 self-stretch" />
            <div className="flex items-center gap-2 text-white/60 text-sm font-sans">
              <MapPin size={14} className="text-gold flex-shrink-0" />
              <span>Serena Hotel, Islamabad</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-semibold font-sans tracking-wide transition-all duration-200"
              style={{
                background: "hsl(var(--gold))",
                color: "#fff",
                boxShadow: "0 4px 18px rgba(197,160,89,0.35)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "hsl(var(--gold-hover))";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(197,160,89,0.5)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "hsl(var(--gold))";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 18px rgba(197,160,89,0.35)";
              }}
            >
              Register Now
            </Link>

            <a
              href="#about"
              onClick={e => { e.preventDefault(); scrollToAbout(); }}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-semibold font-sans tracking-wide border transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.85)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--gold))";
                (e.currentTarget as HTMLElement).style.color = "hsl(var(--gold))";
                (e.currentTarget as HTMLElement).style.background = "rgba(197,160,89,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.35)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/80 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-sans tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
