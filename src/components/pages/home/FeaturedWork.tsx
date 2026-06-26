import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <div ref={ref} className="w-full h-full relative overflow-hidden">
      <motion.img
        style={{ scale }}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default function FeaturedWork() {
  const tabs: string[] = [
    "All",
    "Films",
    "Documentaries",
    "Music Videos",
    "TV & Ads",
  ];

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="font-mono text-accent font-bold text-sm tracking-widest uppercase block mb-4">
            OUR WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-primary">
            Stories we've told.
          </h2>

          <div className="flex flex-wrap gap-2 mb-12">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  i === 0
                    ? "bg-accent text-canvas"
                    : "bg-transparent border border-border text-secondary hover:border-accent hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Featured Wide Card */}
          <Link to="/work" className="md:col-span-2 group block">
            <div className="relative aspect-21/9 rounded-2xl overflow-hidden shadow-card border border-border transition-all duration-300 group-hover:border-accent">
              <div className="w-full h-full absolute inset-0">
                <ParallaxImage
                  src="https://picsum.photos/seed/nisir/1200/500"
                  alt="Nisir Film"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-canvas via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-6 lg:p-10 w-full flex justify-between items-end">
                <div>
                  <span className="font-mono text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                    Film
                  </span>
                  <h3 className="text-2xl md:text-4xl font-display font-bold text-primary">
                    Nisir
                  </h3>
                </div>
                <span className="font-mono text-secondary">2021</span>
              </div>
            </div>
          </Link>

          {/* Standard Card 1 */}
          <Link to="/work" className="group block">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-card border border-border transition-all duration-300 group-hover:border-accent">
              <div className="w-full h-full absolute inset-0">
                <ParallaxImage
                  src="https://picsum.photos/seed/cisp/800/450"
                  alt="CISP Documentary"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-canvas via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
                <div>
                  <span className="font-mono text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                    Documentary
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-primary">
                    CISP Irregular Immigration
                  </h3>
                </div>
                <span className="font-mono text-secondary">2022</span>
              </div>
            </div>
          </Link>

          {/* Standard Card 2 */}
          <Link to="/work" className="group block">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-card border border-border transition-all duration-300 group-hover:border-accent">
              <div className="w-full h-full absolute inset-0">
                <ParallaxImage
                  src="https://picsum.photos/seed/honeymoon/800/450"
                  alt="Honeymoon Film"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-canvas via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
                <div>
                  <span className="font-mono text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                    Film
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-primary">
                    Honeymoon
                  </h3>
                </div>
                <span className="font-mono text-secondary">2019</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex justify-center">
          <Link
            to="/work"
            className="px-6 py-3 border border-border text-primary rounded-md text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
}
