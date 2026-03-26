import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { Users, ChevronRight } from "lucide-react";

const committees = [
  {
    title: "Core Committee",
    description:
      "The driving force behind I-DAAP CON's scientific agenda. Our core committee members are seasoned dermatologists and academicians dedicated to curating a world-class program.",
    count: "12 Members",
    href: "/committee/core",
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    title: "Organizing Committee",
    description:
      "A dedicated team of professionals who ensure the seamless execution of every aspect of I-DAAP CON — from logistics and hospitality to technical management and delegate experience.",
    count: "24 Members",
    href: "/committee/organizing",
    gradient: "from-yellow-600 to-amber-700",
  },
];

const ScientificCommitteeSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="seminars" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-sm font-sans font-semibold tracking-widest uppercase gold-text mb-3">
            Organization
          </p>
          <h2 className="section-title">Scientific Committee</h2>
          <div className="section-divider" />
          <p className="text-charcoal/70 font-sans font-light text-base max-w-2xl mx-auto">
            Meet the distinguished professionals who shape the scientific content and ensure the smooth 
            running of I-DAAP CON 2026.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {committees.map((c, i) => (
            <Link
              key={c.title}
              to={c.href}
              className={`group block bg-white rounded-2xl border border-border overflow-hidden shadow-card card-hover transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Top bar */}
              <div
                className="h-2 w-full"
                style={{ background: "linear-gradient(to right, hsl(38, 46%, 56%), hsl(46, 62%, 52%))" }}
              />
              <div className="p-8">
                <div
                  className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center shadow-gold"
                  style={{ background: "linear-gradient(135deg, hsl(38, 46%, 56%), hsl(46, 62%, 52%))" }}
                >
                  <Users size={26} className="text-white" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-charcoal-dark mb-2 group-hover:text-gold transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs gold-text font-sans font-semibold tracking-wide mb-4">{c.count}</p>
                <p className="text-charcoal/70 font-sans font-light text-sm leading-relaxed mb-6">
                  {c.description}
                </p>
                <div className="flex items-center gold-text font-sans font-semibold text-sm group-hover:gap-3 gap-2 transition-all duration-200">
                  View Members <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScientificCommitteeSection;
