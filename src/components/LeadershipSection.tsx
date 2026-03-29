import { useInView } from "@/hooks/useInView";
import presidentImg from "@/assets/president.jpg";
import vpImg from "@/assets/vice-president.jpg";

const leaders = [
  {
    image: presidentImg,
    name: "Dr Bilal Shams",
    role: "President",
    message:
      "As President of I-DAAP, I am committed to elevating dermatological standards across Pakistan. This conference is our greatest platform for scientific exchange and professional development.",
  },
  {
    image: vpImg,
    name: "Dr Neelam Ayub",
    role: "Vice President",
    message:
      "I-DAAP CON brings together the brightest minds in dermatology and aesthetic medicine. I look forward to three inspiring days of learning, collaboration, and advancing our shared mission.",
  },
];

const LeadershipSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="leadership" className="py-24 bg-light-grey">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-sm font-sans font-semibold tracking-widest uppercase gold-text mb-3">
            Executive Committee
          </p>
          <h2 className="section-title">President & Vice President</h2>
          <div className="section-divider" />
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
        >
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className={`bg-white rounded-2xl overflow-hidden shadow-card card-hover transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative overflow-hidden" style={{ height: "320px" }}>
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  width={512}
                  height={512}
                />
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-sans font-bold tracking-wide"
                  style={{ background: "linear-gradient(135deg, hsl(38, 46%, 56%), hsl(46, 62%, 52%))", color: "white" }}
                >
                  {leader.role}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-serif font-bold text-xl text-charcoal-dark mb-1">{leader.name}</h3>
                <p className="gold-text text-sm font-sans font-semibold mb-4">{leader.role} of IDAAP</p>
                <div className="border-t border-light-grey pt-4">
                  <p className="text-charcoal/80 font-sans font-light text-sm leading-relaxed italic">
                    "{leader.message}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
