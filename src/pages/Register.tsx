import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin } from "lucide-react";
import logo from "@/assets/idaap-logo.png";

const Register = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ background: "linear-gradient(135deg, hsl(0, 0%, 12%) 0%, hsl(60, 1%, 18%) 100%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 40%, hsl(38, 46%, 56%, 0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 text-center max-w-lg w-full">
        {/* Logo */}
        <img src={logo} alt="I-DAAP" className="w-24 h-24 object-contain mx-auto mb-6 animate-fade-in" />

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 animate-fade-in delay-100"
          style={{ borderColor: "hsl(var(--gold) / 0.4)", background: "hsl(var(--gold) / 0.08)" }}
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-sans font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--gold))" }}>
            Coming Soon
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif font-bold text-white mb-4 text-4xl md:text-5xl animate-fade-in delay-200">
          Registration
          <br />
          <span style={{ color: "hsl(var(--gold))" }}>Opening Soon</span>
        </h1>

        {/* Divider */}
        <div
          className="w-16 h-[2px] mx-auto rounded mb-8 animate-fade-in delay-300"
          style={{ background: "linear-gradient(to right, hsl(38, 46%, 56%), hsl(46, 62%, 52%))" }}
        />

        {/* Message */}
        <p className="text-white/70 font-sans font-light text-base leading-relaxed mb-10 animate-fade-in delay-300">
          Registration for the 3rd I-DAAP CON will open soon. 
          Stay tuned for early-bird rates, workshop packages, and exclusive delegate benefits. 
          Be the first to know — follow us on social media or contact our secretariat.
        </p>

        {/* Event info cards */}
        <div className="grid grid-cols-3 gap-3 mb-10 animate-fade-in delay-400">
          {[
            { icon: Calendar, label: "Date", value: "Oct 24–26, 2026" },
            { icon: Clock, label: "Duration", value: "3 Days" },
            { icon: MapPin, label: "Venue", value: "Serena Hotel, ISB" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-4 flex flex-col items-center gap-2"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <item.icon size={18} style={{ color: "hsl(var(--gold))" }} />
              <p className="text-white/40 text-xs font-sans">{item.label}</p>
              <p className="text-white font-sans font-semibold text-xs text-center">{item.value}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <a href="mailto:info@idaapcon.org" className="btn-gold px-8 py-3">
            Notify Me
          </a>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1"
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
          >
            ← Back to Home
          </Link>
        </div>

        <p className="text-white/30 font-sans text-xs mt-10">
          © 2026 I-DAAP CON · International Dermatology and Aesthetic Association of Pakistan
        </p>
      </div>
    </div>
  );
};

export default Register;
