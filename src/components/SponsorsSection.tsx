import { useInView } from "@/hooks/useInView";

const sponsors = [
  { name: "SkinCeuticals", category: "Platinum" },
  { name: "Allergan Aesthetics", category: "Platinum" },
  { name: "Galderma", category: "Gold" },
  { name: "Merz Aesthetics", category: "Gold" },
  { name: "La Roche-Posay", category: "Silver" },
  { name: "Cantabria Labs", category: "Silver" },
  { name: "Obagi Medical", category: "Bronze" },
  { name: "Clinique Laboratories", category: "Bronze" },
];

const categoryColor: Record<string, string> = {
  Platinum: "hsl(210, 14%, 53%)",
  Gold: "hsl(38, 46%, 56%)",
  Silver: "hsl(0, 0%, 60%)",
  Bronze: "hsl(25, 50%, 48%)",
};

const SponsorsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-sm font-sans font-semibold tracking-widest uppercase gold-text mb-3">
            Partners
          </p>
          <h2 className="section-title">Our Sponsors</h2>
          <div className="section-divider" />
          <p className="text-charcoal/70 font-sans font-light text-base max-w-xl mx-auto">
            We are grateful to our esteemed sponsors and partners who make I-DAAP CON 2026 possible.
          </p>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Marquee */}
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to right, white, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to left, white, transparent)" }} />
            <div className="marquee-track flex gap-6 w-max">
              {[...sponsors, ...sponsors].map((s, i) => (
                <div
                  key={`${s.name}-${i}`}
                  className="flex-shrink-0 w-48 h-24 rounded-xl border border-border flex flex-col items-center justify-center gap-1 px-4 shadow-sm hover:shadow-card transition-shadow group"
                >
                  <span
                    className="text-xs font-sans font-bold tracking-widest uppercase"
                    style={{ color: categoryColor[s.category] }}
                  >
                    {s.category}
                  </span>
                  <span className="text-charcoal-dark font-sans font-semibold text-sm text-center group-hover:text-gold transition-colors">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship CTA */}
          <div
            className="mt-14 rounded-2xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, hsl(38, 46%, 56%), hsl(46, 62%, 52%))" }}
          >
            <h3 className="font-serif font-bold text-2xl text-white mb-3">Become a Sponsor</h3>
            <p className="text-white/85 font-sans font-light max-w-xl mx-auto mb-6 text-sm">
              Partner with I-DAAP CON 2026 and gain unparalleled visibility among Pakistan's leading 
              dermatologists, aesthetic physicians, and plastic surgeons.
            </p>
            <a
              href="mailto:sponsorship@idaap.org"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ color: "hsl(var(--gold))" }}
            >
              Contact for Sponsorship
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
