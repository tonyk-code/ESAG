import { useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
  title: string;
  desc: string;
  path: string;
  img: string;
}

export default function ServicesOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const services: ServiceItem[] = [
    {
      title: "Film Production",
      desc: "Award-winning cinema and feature films built for global screens.",
      path: "/services/film",
      img: "https://images.unsplash.com/photo-1596483941213-f9d3d65cf52d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww",
    },
    {
      title: "Documentary Production",
      desc: "Research-led stories crafted for NGOs and global organizations.",
      path: "/services/documentary",
      img: "https://images.unsplash.com/photo-1761370981309-219ac22752af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGRvY3VtZW50YXJ5JTIwcHJvZHVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Music Video Production",
      desc: "Over 200 high-energy visuals created for Ethiopia's biggest artists.",
      path: "/services/music-video",
      img: "https://images.unsplash.com/photo-1669892977943-bff31e658d65?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxtdXNpYyUyMHByb2R1Y3Rpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "TV, Commercials & Stills",
      desc: "High-impact brand campaigns and precision commercial photography.",
      path: "/services/tv-commercials",
      img: "https://images.unsplash.com/photo-1616418625298-baef98bc34f8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbW1lcmNpYWxzfGVufDB8fDB8fHww",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalServices = services.length;
    const index = Math.floor(latest * totalServices);
    const clampedIndex = Math.min(Math.max(index, 0), totalServices - 1);
    if (clampedIndex !== activeIndex) {
      setActiveIndex(clampedIndex);
    }
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-surface border-b border-border pb-10"
      style={{ height: `${services.length * 100}vh` }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col lg:flex-row">
        <div className="w-full lg:w-[45%] h-full flex flex-col justify-between p-6 md:p-12 lg:p-20 z-10 bg-surface/90 lg:bg-surface backdrop-blur-md lg:backdrop-blur-none border-r border-border/40">
          <div>
            <span className="font-mono text-accent font-bold text-xs tracking-[0.2em] uppercase block mb-4">
              WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-primary uppercase tracking-tighter mb-12 leading-[0.95]">
              Four crafts.
              <br />
              One house.
            </h2>

            <div className="flex flex-col space-y-4 max-w-sm">
              {services.map((service, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={`nav-${idx}`}
                    onClick={() => {
                      // Smooth scroll mechanism matching custom interaction patterns
                      const element = containerRef.current;
                      if (element) {
                        const totalHeight = element.scrollHeight;
                        const targetPos = (idx / services.length) * totalHeight;
                        window.scrollTo({
                          top: targetPos + element.offsetTop,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="text-left relative pl-6 transition-all duration-300 group"
                  >
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-full transition-all duration-300 ${
                        isActive
                          ? "opacity-100 scale-y-100"
                          : "opacity-0 scale-y-50 group-hover:opacity-40"
                      }`}
                    />
                    <span
                      className={`font-display font-bold text-xl md:text-2xl transition-all duration-300 block ${
                        isActive
                          ? "text-primary translate-x-2"
                          : "text-secondary/50 group-hover:text-secondary hover:translate-x-1"
                      }`}
                    >
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Active Block Description Display */}
          <div className="mt-8 pt-8 border-t border-border/60 max-w-sm min-h-35 flex flex-col justify-between">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="font-body text-secondary text-base md:text-lg leading-relaxed mb-6">
                {services[activeIndex].desc}
              </p>
              <Link
                to={services[activeIndex].path}
                className="text-accent font-mono font-bold uppercase text-xs tracking-widest inline-flex items-center gap-2 transition-colors hover:text-accent-hover"
              >
                Explore Workspace <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* RIGHT PANEL: Cinematic Project Windows */}
        <div className="w-full lg:w-[55%] h-[50vh] lg:h-full relative bg-primary overflow-hidden">
          {/* Subtle radial inner glow vignetting over production scenes */}
          <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.15)] mix-blend-multiply" />

          {services.map((service, idx) => {
            const isActive = idx === activeIndex;
            return (
              <motion.div
                key={`img-${idx}`}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 1.08,
                  zIndex: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} // Fast-out smooth cinematic curve
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover filtering-density"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
