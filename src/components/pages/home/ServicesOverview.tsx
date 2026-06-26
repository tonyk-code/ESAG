import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
  title: string;
  desc: string;
  path: string;
  img: string;
}

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

export default function ServicesOverview() {
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

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-accent font-bold text-sm tracking-widest uppercase block mb-4">
            WHAT WE DO
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
            Four crafts. One house.
          </h2>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div
                className={`aspect-4/3 rounded-2xl overflow-hidden shadow-card border border-border relative ${
                  i % 2 !== 0 ? "lg:col-start-2" : ""
                }`}
              >
                <ParallaxImage src={service.img} alt={service.title} />
              </div>

              <div
                className={`flex flex-col items-start ${i % 2 !== 0 ? "lg:col-start-1" : ""}`}
              >
                <h3 className="text-3xl font-display font-bold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="font-body text-secondary text-lg mb-8">
                  {service.desc}
                </p>
                <Link
                  to={service.path}
                  className="text-accent font-medium flex items-center gap-2 transition-colors group hover:text-accent-hover"
                >
                  Explore{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
