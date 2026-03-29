import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/idaap-logo.png";
import chairmanImg from "@/assets/chairman.jpg";
import presidentImg from "@/assets/president.jpg";
import vpImg from "@/assets/vice-president.jpg";
import anitaImg from "@/assets/anita.jpg";
import sohailImg from "@/assets/sohail.jpg";
import uzairImg from "@/assets/uzair.jpg";
import dureshehwarImg from "@/assets/dureshehwar.jpg";
import { useInView } from "@/hooks/useInView";

const members = [
  { name: "Maj Gen (Retd) Zafar Iqbal Shaikh", role: "Chairman of IDAAP", image: chairmanImg },
  { name: "Dr Bilal Shams", role: "President of IDAAP", image: presidentImg },
  { name: "Dr Neelam Ayub", role: "Vice President of IDAAP", image: vpImg },
  { name: "Dr Anita Kazi", role: "Director Coordination and Management", image: anitaImg },
  { name: "Dr Sohail Ahmad", role: "Director Social Media and Marketing", image: sohailImg },
  { name: "Dr Uzair Wazir", role: "General Secretary", image: uzairImg },
  { name: "Dr Dureshehwar Marwat", role: "Secretary Finance", image: dureshehwarImg },
];

const MemberCard = ({ member, delay }: { member: typeof members[0]; delay: number }) => {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl overflow-hidden shadow-card card-hover group transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width={300}
          height={208}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 border-t-2" style={{ borderColor: "hsl(var(--gold))" }}>
        <h3 className="font-serif font-bold text-charcoal-dark text-sm leading-tight mb-1">{member.name}</h3>
        <p className="gold-text text-xs font-sans font-semibold">{member.role}</p>
      </div>
    </div>
  );
};

const CoreCommittee = () => (
  <div className="min-h-screen bg-light-grey">
    <div style={{ background: "linear-gradient(135deg, hsl(0, 0%, 12%), hsl(60, 1%, 18%))" }} className="py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm font-sans mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div className="flex items-center gap-4 mb-4">
          <img src={logo} alt="I-DAAP" className="w-14 h-14 object-contain" />
          <div>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--gold))" }}>
              I-DAAP CON 2026
            </p>
            <h1 className="font-serif font-bold text-white text-3xl md:text-4xl">Core Committee</h1>
          </div>
        </div>
        <p className="text-white/60 font-sans font-light text-base max-w-2xl">
          The distinguished academic and clinical leaders who shape the scientific vision of I-DAAP CON 2026.
        </p>
      </div>
    </div>

    <div className="container mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {members.map((m, i) => (
          <MemberCard key={m.name} member={m} delay={i * 60} />
        ))}
      </div>
    </div>
  </div>
);

export default CoreCommittee;
