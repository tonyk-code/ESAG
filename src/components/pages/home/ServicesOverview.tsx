import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
  title: string;
  desc: string;
  path: string;
  img: string;
}

/* ============================================================
   SUB-COMPONENT 1: Pinned Tracking Tab (Left Column)
   ============================================================ */
/* ============================================================
   SUB-COMPONENT 1: Pinned Tracking Tab (Left Column)
   ============================================================ */
function TrackingTab({ 
  title, 
  idx, 
  total, 
  progress 
}: { 
  title: string; 
  idx: number; 
  total: number; 
  progress: MotionValue<number>; 
}) {
  const step = 1 / total;
  const startRange = idx * step;
  const endRange = (idx + 1) * step;

  // FIXED: Wrapped calculation thresholds in Math constraints to guarantee native boundaries
  const tabOpacity = useTransform(
    progress,
    [
      Math.max(0, startRange - 0.05), 
      startRange, 
      endRange, 
      Math.min(1, endRange + 0.05)
    ],
    [0.3, 1, 1, 0.3]
  );

  return (
    <motion.div
      style={{ opacity: tabOpacity }}
      className="p-4 rounded-xl border border-border bg-surface/40 backdrop-blur-xs font-display font-semibold text-lg text-primary"
    >
      {title}
    </motion.div>
  );
}

/* ============================================================
   SUB-COMPONENT 2: Scrolling Service Card (Right Column)
   ============================================================ */
function ServiceCard({ service }: { service: ServiceItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Cleanly tracking individual element viewport status away from loop callbacks
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(cardProgress, [0, 0.7], [0, 1]);
  const x = useTransform(cardProgress, [0, 0.7], [25, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, x }}
      className="w-full flex flex-col p-6 md:p-8 rounded-2xl border border-border bg-surface shadow-card relative overflow-hidden group"
    >
      <div className="flex items-center space-x-3 mb-6">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-primary">
          {service.title}
        </h3>
      </div>

      <div className="w-full aspect-4/3 rounded-xl overflow-hidden border border-border bg-canvas relative mb-6">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>

      <p className="font-body text-secondary text-lg mb-6 leading-relaxed">
        {service.desc}
      </p>

      <Link
        to={service.path}
        className="text-accent font-medium inline-flex items-center gap-2 transition-colors group/link hover:text-accent-hover self-start"
      >
        Explore{" "}
        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </motion.div>
  );
}

/* ============================================================
   MAIN WRAPPER COMPONENT
   ============================================================ */
export default function ServicesOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const services: ServiceItem[] = [
    {
      title: "Film Production",
      desc: "Award-winning cinema and feature films.",
      path: "/services/film",
      img: "https://picsum.photos/seed/film/800/600",
    },
    {
      title: "Documentary Production",
      desc: "Research-led stories for NGOs and global organizations.",
      path: "/services/documentary",
      img: "https://picsum.photos/seed/doc/800/600",
    },
    {
      title: "Music Video Production",
      desc: "200+ videos for Ethiopia's biggest artists.",
      path: "/services/music-video",
      img: "https://picsum.photos/seed/music/800/600",
    },
    {
      title: "TV, Commercials & Photography",
      desc: "Brand campaigns, serials, and commercial stills.",
      path: "/services/tv-commercials",
      img: "https://picsum.photos/seed/tv/800/600",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      ref={containerRef} 
      className="py-24 md:py-32 bg-canvas relative" 
      id="features"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Sticky Navigation Elements */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col justify-between h-auto lg:h-[calc(100vh-16rem)] space-y-12">
          <div>
            <span className="font-mono text-accent font-bold text-sm tracking-widest uppercase block mb-4">
              WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary tracking-tight mb-10 leading-[1.1]">
              Four crafts.<br />One house.
            </h2>

            <div className="flex flex-col space-y-3 max-w-sm">
              {services.map((service, idx) => (
                <TrackingTab 
                  key={`tab-${service.title}`}
                  title={service.title}
                  idx={idx}
                  total={services.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-border max-w-sm">
            <p className="font-body text-secondary text-base mb-4">
              Premium visual execution engineered around deep human narratives.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Cards */}
        <div className="lg:col-span-7 flex flex-col space-y-24 lg:space-y-36 pb-[15vh]">
          {services.map((service) => (
            <ServiceCard key={`card-${service.title}`} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}