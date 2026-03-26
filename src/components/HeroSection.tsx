import { Link } from "react-router-dom";
import { Calendar, MapPin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl pt-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm mb-6 animate-fade-in"
            style={{ background: "rgba(197,160,89,0.15)" }}
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-white text-xs font-semibold tracking-widest uppercase font-sans">
              International Medical Conference
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-white font-serif font-bold mb-4 animate-slide-in-left"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 1.1 }}
          >
            3<sup className="text-3xl">rd</sup>{" "}
            <span style={{ color: "hsl(var(--gold))" }}>I-DAAP</span>
            <br />
            CON
          </h1>

          {/* Subheading */}
          <p className="text-white/85 text-lg md:text-xl font-sans font-light mb-8 max-w-lg leading-relaxed animate-fade-in delay-200">
            International Dermatology and Aesthetic Association of Pakistan
          </p>

          {/* Event details */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in delay-300">
            <div className="flex items-center gap-2 text-white/90 text-sm font-sans">
              <Calendar size={16} className="text-gold flex-shrink-0" />
              <span>Oct 24–26, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm font-sans">
              <MapPin size={16} className="text-gold flex-shrink-0" />
              <span>Serena Hotel, Islamabad</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in delay-400">
            <Link to="/register" className="btn-gold text-base px-10 py-4">
              Register Now
            </Link>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToAbout(); }}
              className="btn-gold-outline text-base px-8 py-4 border-white text-white hover:border-gold"
              style={{ borderColor: "rgba(255,255,255,0.6)" }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors group animate-fade-in delay-600"
        aria-label="Scroll down"
      >
        <span className="text-xs font-sans tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
