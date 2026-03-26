import { useInView } from "@/hooks/useInView";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, caption: "Plenary Sessions", span: "md:col-span-2" },
  { src: gallery2, caption: "Workshops & Training", span: "" },
  { src: gallery3, caption: "Awards Ceremony", span: "" },
  { src: gallery4, caption: "Networking & Gala", span: "md:col-span-2" },
];

const GallerySection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="gallery" className="py-24 bg-light-grey">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-sm font-sans font-semibold tracking-widest uppercase gold-text mb-3">
            Highlights
          </p>
          <h2 className="section-title">Gallery</h2>
          <div className="section-divider" />
          <p className="text-charcoal/70 font-sans font-light text-base max-w-xl mx-auto">
            Relive the best moments from previous I-DAAP CON editions — scientific excellence, global connections, and unforgettable experiences.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl shadow-card ${img.span}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-white font-sans font-semibold text-sm tracking-wide">{img.caption}</p>
              </div>
              {/* Gold corner accent */}
              <div
                className="absolute top-3 left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  borderTop: "2px solid hsl(var(--gold))",
                  borderLeft: "2px solid hsl(var(--gold))",
                  borderRadius: "2px 0 0 0",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
