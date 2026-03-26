import { useInView } from "@/hooks/useInView";
import { Award, Users, Globe, BookOpen } from "lucide-react";

const stats = [
  { icon: Globe, value: "30+", label: "International Speakers" },
  { icon: Users, value: "1000+", label: "Expected Attendees" },
  { icon: BookOpen, value: "40+", label: "Scientific Sessions" },
  { icon: Award, value: "3rd", label: "Annual Edition" },
];

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 bg-light-grey">
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm font-sans font-semibold tracking-widest uppercase gold-text mb-3">
            About the Conference
          </p>
          <h2 className="section-title">Welcome to I-DAAP CON 2026</h2>
          <div className="section-divider" />
          <p className="text-charcoal font-sans font-light text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            The International Academy of Dermatology, Anti-Ageing and Plastic Surgery (I-DAAP) is proud 
            to host its 3rd Annual International Conference — a premier gathering of dermatologists, 
            aesthetic medicine practitioners, and plastic surgeons from across the globe.
          </p>
          <p className="text-charcoal/80 font-sans font-light text-base leading-relaxed max-w-2xl mx-auto">
            Join us at the elegant Serena Hotel, Islamabad for three transformative days of scientific 
            sessions, hands-on workshops, live demonstrations, and unparalleled networking opportunities 
            with world-class faculty. This conference serves as a vital platform for advancing knowledge, 
            sharing innovations, and shaping the future of dermatological and aesthetic sciences in Pakistan and beyond.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-white rounded-xl p-6 text-center shadow-card card-hover transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div
                className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, hsl(38, 46%, 56%), hsl(46, 62%, 52%))" }}
              >
                <stat.icon size={22} className="text-white" />
              </div>
              <div className="text-3xl font-bold font-serif text-charcoal-dark mb-1">{stat.value}</div>
              <div className="text-sm font-sans text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
