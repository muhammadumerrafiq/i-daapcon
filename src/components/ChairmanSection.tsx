import { useInView } from "@/hooks/useInView";
import chairmanImg from "@/assets/chairman.jpg";
import { Quote } from "lucide-react";

const ChairmanSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="chairman" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-sm font-sans font-semibold tracking-widest uppercase gold-text mb-3">
            Leadership
          </p>
          <h2 className="section-title">Chairman's Message</h2>
          <div className="section-divider" />
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image */}
          <div className="relative group">
            <div
              className="absolute inset-0 rounded-2xl rotate-2 opacity-40"
              style={{ background: "linear-gradient(135deg, hsl(38, 46%, 56%), hsl(46, 62%, 52%))" }}
            />
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={chairmanImg}
                alt="Conference Chairman"
                className="w-full object-cover aspect-[4/5] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={512}
                height={640}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)" }}
              >
                <h3 className="text-white font-serif font-bold text-xl">Maj Gen (Retd) Zafar Iqbal Shaikh</h3>
                <span
                  className="inline-block mt-2 text-xs px-3 py-1 rounded-full font-sans font-semibold tracking-wide"
                  style={{ background: "linear-gradient(135deg, hsl(38, 46%, 56%), hsl(46, 62%, 52%))", color: "white" }}
                >
                  Conference Chairman
                </span>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col justify-center">
            <Quote size={48} className="text-gold/30 mb-4" />
            <p className="text-charcoal font-sans font-light text-lg leading-relaxed mb-6 italic">
              "It is with immense pride and enthusiasm that I welcome you to the 3rd I-DAAP CON 2026. 
              This conference represents a landmark moment for dermatology and aesthetic medicine in Pakistan — 
              a platform where clinical excellence meets innovation, and where the boundaries of what is 
              possible in skin science are continually redefined."
            </p>
            <p className="text-charcoal/80 font-sans font-light text-base leading-relaxed mb-6">
              Over three enriching days, distinguished international and local faculty will share 
              cutting-edge insights on medical dermatology, cosmetic procedures, anti-ageing therapies, 
              and reconstructive surgery. I invite you to join us in this celebration of science, 
              fellowship, and the relentless pursuit of excellence in patient care.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-gradient-gold rounded" />
              <div>
                <p className="font-serif font-bold text-charcoal-dark">Maj Gen (Retd) Zafar Iqbal Shaikh</p>
                <p className="text-sm font-sans gold-text">Conference Chairman, I-DAAP CON 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;
