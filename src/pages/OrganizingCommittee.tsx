import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/idaap-logo.png";
import speakerLocal1 from "@/assets/speaker-local-1.jpg";
import speakerLocal2 from "@/assets/speaker-local-2.jpg";
import speakerLocal3 from "@/assets/speaker-local-3.jpg";
import presidentImg from "@/assets/president.jpg";
import vpImg from "@/assets/vice-president.jpg";
import chairmanImg from "@/assets/chairman.jpg";
import speakerIntl1 from "@/assets/speaker-intl-1.jpg";
import speakerIntl2 from "@/assets/speaker-intl-2.jpg";
import speakerIntl3 from "@/assets/speaker-intl-3.jpg";
import speakerIntl4 from "@/assets/speaker-intl-4.jpg";
import { useInView } from "@/hooks/useInView";

const members = [
  { name: "Dr. Usman Riaz", role: "Event Manager", image: speakerLocal1 },
  { name: "Dr. Rabia Malik", role: "Hospitality Chair", image: speakerLocal2 },
  { name: "Dr. Omer Sheikh", role: "Logistics Head", image: speakerLocal3 },
  { name: "Dr. Nadia Hussain", role: "Sponsorship Lead", image: vpImg },
  { name: "Dr. Zubair Ahmad", role: "Media & Comms", image: presidentImg },
  { name: "Dr. Sara Qureshi", role: "Delegate Affairs", image: chairmanImg },
  { name: "Dr. Bilal Tahir", role: "Tech Coordinator", image: speakerIntl1 },
  { name: "Dr. Hina Qureshi", role: "Abstract Manager", image: speakerIntl2 },
  { name: "Dr. Waqas Khalid", role: "Finance Coord.", image: speakerIntl3 },
  { name: "Dr. Maha Younis", role: "Registration Desk", image: speakerIntl4 },
  { name: "Dr. Imran Lodhi", role: "Venue Manager", image: speakerLocal1 },
  { name: "Dr. Farah Siddiqui", role: "Speaker Liaison", image: speakerLocal2 },
  { name: "Dr. Kamran Aziz", role: "Workshop Coord.", image: speakerLocal3 },
  { name: "Dr. Irum Naz", role: "Social Media Mgr", image: vpImg },
  { name: "Dr. Asim Rashid", role: "Exhibition Coord.", image: presidentImg },
  { name: "Dr. Sobia Javed", role: "Volunteer Lead", image: speakerIntl2 },
  { name: "Dr. Farzana Baig", role: "CME Coordinator", image: speakerIntl3 },
  { name: "Dr. Shoaib Mirza", role: "Security Lead", image: speakerIntl4 },
  { name: "Dr. Amina Tariq", role: "Protocol Officer", image: speakerLocal2 },
  { name: "Dr. Naveed Butt", role: "AV Manager", image: speakerLocal3 },
  { name: "Dr. Alina Khan", role: "Catering Mgr", image: vpImg },
  { name: "Dr. Sajid Raza", role: "Transport Coord.", image: presidentImg },
  { name: "Dr. Lubna Akhtar", role: "Guest Relations", image: speakerIntl1 },
  { name: "Dr. Tahir Mehmood", role: "Deco & Branding", image: chairmanImg },
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
      <div className="relative overflow-hidden h-48">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width={240}
          height={192}
        />
      </div>
      <div className="p-4 border-t-2" style={{ borderColor: "hsl(var(--gold))" }}>
        <h3 className="font-serif font-bold text-charcoal-dark text-sm leading-tight mb-1">{member.name}</h3>
        <p className="gold-text text-xs font-sans font-semibold">{member.role}</p>
      </div>
    </div>
  );
};

const OrganizingCommittee = () => (
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
            <h1 className="font-serif font-bold text-white text-3xl md:text-4xl">Organizing Committee</h1>
          </div>
        </div>
        <p className="text-white/60 font-sans font-light text-base max-w-2xl">
          The dedicated professionals who work tirelessly to deliver a seamless and memorable I-DAAP CON experience.
        </p>
      </div>
    </div>
    <div className="container mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {members.map((m, i) => (
          <MemberCard key={m.name} member={m} delay={(i % 6) * 60} />
        ))}
      </div>
    </div>
  </div>
);

export default OrganizingCommittee;
