import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import Hero from "../components/pages/home/Hero";

interface ParallaxImageProps {
  src: string;
  alt: string;
}

interface ServiceItem {
  title: string;
  desc: string;
  path: string;
  img: string;
}

interface StatItem {
  num: string;
  label: string;
}

function ParallaxImage({ src, alt }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax subtle scaling inside its container mask
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

export function Home() {
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

  const stats: StatItem[] = [
    { num: "20", label: "Cinema Films" },
    { num: "200", label: "Music Videos" },
    { num: "25", label: "Years of Work" },
    { num: "50", label: "NGO & Brand Clients" },
  ];

  const clients: string[] = [
    "Save the Children",
    "United Nations",
    "African Union",
    "European Union",
    "UNDP",
    "Concern Ethiopia",
    "CISP",
    "Pact Ethiopia",
  ];

  const tabs: string[] = [
    "All",
    "Films",
    "Documentaries",
    "Music Videos",
    "TV & Ads",
  ];

  return (
    <div className="flex flex-col w-full bg-canvas">
      <Hero />

      {/* 3. INTRO */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="max-w-3xl"
          >
            <span className="font-mono text-accent font-bold text-sm tracking-widest uppercase block mb-4">
              WHO WE ARE
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
              Ethiopia's film house.
            </h2>
            <p className="font-body text-secondary text-lg leading-relaxed">
              For over two decades, ESSAG has been at the forefront of Ethiopian
              cinema and media. We don't just point cameras; we craft narratives
              that resonate locally and translate globally. From award-winning
              feature films to impactful NGO documentaries, our commitment to
              the craft remains unchanged.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
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

      {/* 5. FEATURED WORK */}
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
                <div className="absolute inset-0 bglinear-to-t from-canvas via-transparent to-transparent opacity-90" />
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

      {/* 6. STATS */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-2"
              >
                <div className="text-5xl md:text-6xl font-display font-bold text-primary">
                  {stat.num}
                  <span className="text-accent">+</span>
                </div>
                <div className="font-body text-secondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENTS */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="font-mono text-accent font-bold text-sm tracking-widest uppercase block mb-12 text-center">
            TRUSTED BY
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {clients.map((client, i) => (
              <div
                key={i}
                className="font-display font-bold text-xl md:text-2xl text-center text-primary"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/2 h-full bg-accent opacity-10 blur-[120px] -translate-y-1/2 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="bg-surface-alt border border-border rounded-2xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center md:text-left max-w-xl text-primary leading-tight">
              Every great film starts with a conversation.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-canvas font-semibold rounded-md text-lg transition-colors whitespace-nowrap shadow-md"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
