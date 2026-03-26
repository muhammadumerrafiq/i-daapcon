import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/idaap-logo.png";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Scientific Committee", href: "/#seminars" },
  { label: "Register", href: "/register" },
  { label: "Login", href: "/login" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "hsl(0, 0%, 10%)" }}>
      {/* Main footer */}
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="I-DAAP" className="h-12 w-12 object-contain" loading="lazy" />
              <div>
                <p className="font-serif font-bold text-white text-xl">I-DAAP CON</p>
                <p className="text-xs font-sans tracking-widest uppercase" style={{ color: "hsl(var(--gold))" }}>
                  2026
                </p>
              </div>
            </div>
            <p className="text-white/60 font-sans font-light text-sm leading-relaxed mb-6">
              International Dermatology and Aesthetic Association of Pakistan — uniting the world's 
              finest minds in skin science and aesthetic medicine.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-200 hover:-translate-y-1"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-lg mb-6 relative">
              Quick Links
              <span
                className="absolute -bottom-2 left-0 w-8 h-[2px] rounded"
                style={{ background: "linear-gradient(to right, hsl(38, 46%, 56%), hsl(46, 62%, 52%))" }}
              />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      if (l.href.startsWith("/#")) {
                        e.preventDefault();
                        scrollTo(l.href.replace("/#", ""));
                      }
                    }}
                    className="text-white/60 font-sans text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-all duration-200 group-hover:w-3"
                      style={{ background: "hsl(var(--gold))" }}
                    />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Map */}
          <div>
            <h4 className="font-serif font-bold text-white text-lg mb-6 relative">
              Contact & Venue
              <span
                className="absolute -bottom-2 left-0 w-8 h-[2px] rounded"
                style={{ background: "linear-gradient(to right, hsl(38, 46%, 56%), hsl(46, 62%, 52%))" }}
              />
            </h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/40 text-xs font-sans uppercase tracking-wide mb-0.5">Email</p>
                  <a href="mailto:info@idaapcon.org" className="text-white/70 font-sans text-sm hover:text-gold transition-colors">
                    info@idaapcon.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/40 text-xs font-sans uppercase tracking-wide mb-0.5">Phone</p>
                  <a href="tel:+92512345678" className="text-white/70 font-sans text-sm hover:text-gold transition-colors">
                    +92-51-234-5678
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/40 text-xs font-sans uppercase tracking-wide mb-0.5">Venue</p>
                  <p className="text-white/70 font-sans text-sm">Serena Hotel, Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <a
              href="https://maps.google.com/?q=Serena+Hotel+Islamabad"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-white/10 hover:border-gold transition-colors group"
            >
              <div className="relative h-32 bg-white/5 flex items-center justify-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.676!2d73.0902!3d33.7294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf1a9e8b0e67%3A0x1a2b3c4d5e6f7a8b!2sSerena+Hotel+Islamabad!5e0!3m2!1sen!2spk!4v1234567890"
                  width="100%"
                  height="128"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Serena Hotel Islamabad"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-gold/10 transition-colors duration-300" />
                <div
                  className="absolute bottom-2 right-2 px-2 py-1 rounded text-xs font-sans font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "hsl(var(--gold))" }}
                >
                  Open in Maps ↗
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 max-w-7xl py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 font-sans text-xs">
            © 2026 I-DAAP CON. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 font-sans text-xs hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 font-sans text-xs hover:text-gold transition-colors">Terms of Use</a>
            <a href="#" className="text-white/40 font-sans text-xs hover:text-gold transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
