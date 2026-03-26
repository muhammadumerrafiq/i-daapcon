import { useState, useRef, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import speakerIntl1 from "@/assets/speaker-intl-1.jpg";
import speakerIntl2 from "@/assets/speaker-intl-2.jpg";
import speakerIntl3 from "@/assets/speaker-intl-3.jpg";
import speakerIntl4 from "@/assets/speaker-intl-4.jpg";
import speakerLocal1 from "@/assets/speaker-local-1.jpg";
import speakerLocal2 from "@/assets/speaker-local-2.jpg";
import speakerLocal3 from "@/assets/speaker-local-3.jpg";

export interface Speaker {
  id: number;
  name: string;
  qualification: string;
  specialty: string;
  country: string;
  image: string;
  description: string;
}

const internationalSpeakers: Speaker[] = [
  {
    id: 1,
    name: "Prof. Dr. Jean-François Morel",
    qualification: "MD, PhD, FAAD",
    specialty: "Cosmetic Dermatology & Lasers",
    country: "France",
    image: speakerIntl1,
    description:
      "Prof. Morel is a globally recognized authority in cosmetic dermatology and laser medicine, with over 25 years of clinical and academic experience. He has published more than 150 peer-reviewed articles and is a faculty member at the Sorbonne University, Paris.",
  },
  {
    id: 2,
    name: "Dr. Wei Lin Chen",
    qualification: "MD, MRCP (UK), Fellow AAD",
    specialty: "Aesthetic Medicine & Injectables",
    country: "Singapore",
    image: speakerIntl2,
    description:
      "Dr. Chen is the leading authority on aesthetic injectable techniques in Southeast Asia. As the founder of the Singapore Centre for Aesthetic Dermatology, she has pioneered minimally invasive rejuvenation protocols adopted across 12 countries.",
  },
  {
    id: 3,
    name: "Dr. Khalid Al-Mansouri",
    qualification: "FRCP, FEBVD, PhD",
    specialty: "Anti-Ageing & Regenerative Medicine",
    country: "UAE",
    image: speakerIntl3,
    description:
      "A pioneer in regenerative aesthetic medicine, Dr. Al-Mansouri's research on platelet-rich plasma and stem cell therapies has been featured in JAMA Dermatology. He serves as Director of the Dubai International Centre for Skin & Aesthetics.",
  },
  {
    id: 4,
    name: "Prof. Dr. Isabella Ricci",
    qualification: "MD, PhD, EDF Fellow",
    specialty: "Dermato-Oncology & Skin Surgery",
    country: "Italy",
    image: speakerIntl4,
    description:
      "Prof. Ricci is Chair of Dermatology at the University of Milan and a distinguished member of the European Academy of Dermatology. Her groundbreaking research in Mohs micrographic surgery has transformed skin cancer management across Europe.",
  },
];

const localSpeakers: Speaker[] = [
  {
    id: 5,
    name: "Dr. Hassan Bilal Niazi",
    qualification: "FCPS Dermatology, Fellowship Laser (USA)",
    specialty: "Medical & Cosmetic Dermatology",
    country: "Pakistan",
    image: speakerLocal1,
    description:
      "Dr. Niazi is one of Pakistan's most celebrated dermatologists, known for his expertise in laser treatments and cosmetic procedures. He is the founding member of I-DAAP and has trained over 500 dermatologists through his workshops.",
  },
  {
    id: 6,
    name: "Dr. Ayesha Imran",
    qualification: "FCPS, MCPS, BHMS",
    specialty: "Trichology & Hair Restoration",
    country: "Pakistan",
    image: speakerLocal2,
    description:
      "Dr. Imran is a leading trichologist in Pakistan with specialized training in hair restoration and scalp disorders. Her research on androgenetic alopecia in South Asian populations has been cited in international dermatology journals.",
  },
  {
    id: 7,
    name: "Prof. Dr. Irfan Mirza",
    qualification: "MS Plastic Surgery, FRCS (UK)",
    specialty: "Plastic & Reconstructive Surgery",
    country: "Pakistan",
    image: speakerLocal3,
    description:
      "Prof. Mirza is Head of Plastic Surgery at Shaukat Khanum Hospital and a Fellow of the Royal College of Surgeons. He has performed over 3,000 reconstructive procedures and is a trainer for the International Society of Plastic Surgeons.",
  },
];

interface SpeakerCardProps {
  speaker: Speaker;
  onOpen: (s: Speaker) => void;
}

const SpeakerCard = ({ speaker, onOpen }: SpeakerCardProps) => (
  <div
    className="relative group flex-shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2"
    style={{
      width: "220px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.55)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.35)";
    }}
  >
    <img
      src={speaker.image}
      alt={speaker.name}
      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
      style={{ height: "280px" }}
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <p className="text-xs gold-text font-sans font-semibold tracking-wide mb-1">{speaker.country}</p>
      <h4 className="text-white font-serif font-bold text-sm leading-tight mb-1">{speaker.name}</h4>
      <p className="text-white/65 text-xs font-sans mb-3">{speaker.specialty}</p>
      <button
        onClick={() => onOpen(speaker)}
        className="btn-gold text-xs px-4 py-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
      >
        View Details
      </button>
    </div>
  </div>
);

interface CarouselProps {
  speakers: Speaker[];
  onOpen: (s: Speaker) => void;
  label: string;
}

const CARD_WIDTH = 220;
const CARD_GAP = 16;

const SpeakerCarousel = ({ speakers, onOpen, label }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = containerRef.current?.offsetWidth ?? window.innerWidth;
      setVisible(Math.floor(w / (CARD_WIDTH + CARD_GAP)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const max = Math.max(0, speakers.length - visible);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  return (
    <div className="mb-10">
      {/* Subheading row with nav controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-1 h-7 rounded"
            style={{ background: "linear-gradient(to bottom, hsl(38, 46%, 56%), hsl(46, 62%, 52%))" }}
          />
          <h3 className="text-lg font-serif font-bold text-white">{label}</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold disabled:opacity-25 transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            disabled={index >= max}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold disabled:opacity-25 transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Carousel track */}
      <div ref={containerRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap: `${CARD_GAP}px`,
            transform: `translateX(calc(-${index * (CARD_WIDTH + CARD_GAP)}px))`,
          }}
        >
          {speakers.map((s) => (
            <SpeakerCard key={s.id} speaker={s} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Speaker Modal
const SpeakerModal = ({ speaker, onClose }: { speaker: Speaker; onClose: () => void }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div
      className="relative bg-white rounded-2xl shadow-card-hover max-w-lg w-full mx-4 animate-scale-in overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
        aria-label="Close"
      >
        <X size={16} />
      </button>
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-full h-64 object-cover object-top"
        loading="lazy"
        width={512}
        height={256}
      />
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(to right, hsl(38, 46%, 56%), hsl(46, 62%, 52%))" }}
      />
      <div className="p-6">
        <span className="text-xs gold-text font-sans font-bold tracking-widest uppercase">{speaker.country}</span>
        <h3 className="font-serif font-bold text-2xl text-charcoal-dark mt-1 mb-1">{speaker.name}</h3>
        <p className="gold-text text-sm font-sans font-semibold mb-1">{speaker.qualification}</p>
        <p className="text-muted-foreground text-sm font-sans mb-4">{speaker.specialty}</p>
        <p className="text-charcoal/80 font-sans font-light text-sm leading-relaxed">{speaker.description}</p>
      </div>
    </div>
  </div>
);

const SpeakersSection = () => {
  const { ref, inView } = useInView();
  const [selected, setSelected] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="py-16 bg-charcoal-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-10">
            <p className="text-xs font-sans font-semibold tracking-widest uppercase gold-text mb-2">Faculty</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-3">Speakers & Faculty</h2>
            <div className="section-divider" />
          </div>

          {/* International Faculty */}
          <SpeakerCarousel
            speakers={internationalSpeakers}
            onOpen={setSelected}
            label="International Faculty"
          />

          {/* Local Speakers */}
          <SpeakerCarousel
            speakers={localSpeakers}
            onOpen={setSelected}
            label="Local Speakers & Trainers"
          />
        </div>
      </div>

      {selected && <SpeakerModal speaker={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default SpeakersSection;
