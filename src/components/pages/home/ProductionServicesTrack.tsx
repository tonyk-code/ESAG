import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface BaseSlide {
  id: string;
  number: string;
  title: string;
  tagline: string;
  bgUrl: string;
  bgAlt: string;
}

interface ServiceSlide extends BaseSlide {
  type: "service";
  description: string;
  capabilities: string[];
}

interface WhyUsSlide extends BaseSlide {
  type: "why-us";
  pillars: { label: string; desc: string }[];
}

type SlideData = WhyUsSlide | ServiceSlide;

interface ProductionServicesTrackProps {
  springStiffness?: number;
  springDamping?: number;
}

// ─── ESSAG Content ────────────────────────────────────────────────────────────

const MIXED_TRACK_DATA: SlideData[] = [
  {
    id: "why-us-intro",
    number: "00",
    type: "why-us",
    title: "WHY ESSAG",
    tagline: "Twenty years. Fifty films. We don't just point cameras — we tell stories that last.",
    bgUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1920&auto=format&fit=crop",
    bgAlt: "Cinematic Ethiopian landscape at golden hour",
    pillars: [
      {
        label: "CRAFTED",
        desc: "Every project — from a feature film to an NGO documentary — is handled with intentional framing, bespoke sound, and deep narrative purpose."
      },
      {
        label: "LOCAL",
        desc: "Born and built in Addis Ababa. We know this culture, this audience, and how to capture its true soul for Ethiopian and international screens."
      },
      {
        label: "BOLD",
        desc: "WIPO Award-winning storytelling. Over 20 cinema films and 200+ music videos. We take creative risks that make stories impossible to forget."
      }
    ]
  },
  {
    id: "film-production",
    number: "01",
    type: "service",
    title: "FILM PRODUCTION",
    tagline: "Cinema that resonates locally and translates globally.",
    description: "From feature films and short films to branded content and cinematic commercials — ESSAG handles the entire production lifecycle. 20+ cinema films including Nisir, Honeymoon, Elzabel, and YebetSira.",
    capabilities: ["Feature Films", "Short Films", "TV Serials", "Branded Content"],
    bgUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1920&auto=format&fit=crop",
    bgAlt: "Film production on location"
  },
  {
    id: "documentary",
    number: "02",
    type: "service",
    title: "DOCUMENTARY",
    tagline: "Real stories. Told honestly. Built to last.",
    description: "Research-led documentary production for international NGOs, government bodies, and development organizations. Multi-lingual field production across Ethiopia — working with the UN, African Union, Save the Children, and the EU.",
    capabilities: ["NGO Documentaries", "Government Films", "Field Production", "Multi-Language"],
    bgUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1920&auto=format&fit=crop",
    bgAlt: "Documentary filming in the field"
  },
  {
    id: "music-video",
    number: "03",
    type: "service",
    title: "MUSIC VIDEO",
    tagline: "200+ videos. Every genre. Ethiopia's biggest artists.",
    description: "Full-service music video production — concept to final cut. We've worked with Ephrem Tamru, Tsehaye Yohannes, Tadele Gemechu, and Fikreaddis Neqatibeb. Your vision, our craft.",
    capabilities: ["Concept Development", "Full Production", "Color Grading", "Motion Graphics"],
    bgUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop",
    bgAlt: "Music video production set"
  },
  {
    id: "tv-commercials",
    number: "04",
    type: "service",
    title: "TV & COMMERCIALS",
    tagline: "On screen. On air. On brand.",
    description: "TV serials, radio spots, and commercial campaigns for universities, banks, hotels, and private brands. Currently airing Bete ESSAG on Ahadu TV every Sunday.",
    capabilities: ["TV Serials", "TV & Radio Ads", "Corporate Campaigns", "Photography"],
    bgUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1920&auto=format&fit=crop",
    bgAlt: "TV commercial production"
  }
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProductionServicesTrack({
  springStiffness = 75,
  springDamping = 22,
}: ProductionServicesTrackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const slideCount = MIXED_TRACK_DATA.length;

  const scrollBudget = useCallback(() => {
    if (!stickyRef.current) return 0;
    return stickyRef.current.offsetHeight * (slideCount - 1);
  }, [slideCount]);

  const rawX = useMotionValue(0);
  const smoothX = useSpring(rawX, { stiffness: springStiffness, damping: springDamping });
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      const sticky = stickyRef.current;
      if (!el || !sticky) return;

      const elTop = el.getBoundingClientRect().top + window.scrollY;
      const scrolled = window.scrollY - elTop;
      const budget = scrollBudget();
      const progress = Math.min(Math.max(scrolled / budget, 0), 1);
      const slideW = sticky.offsetWidth;
      const targetX = -(progress * slideW * (slideCount - 1));

      rawX.set(targetX);
      setActiveSlide(Math.round(Math.abs(progress * (slideCount - 1))));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [rawX, scrollBudget, slideCount]);

  const totalHeight = `calc(100vh + ${slideCount - 1} * 100vh)`;

  return (
    <div ref={containerRef} style={{ height: totalHeight }} className="relative z-10">
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden">

        <motion.div
          className="flex h-full"
          style={{ x: smoothX, width: `${slideCount * 100}%` }}
        >
          {MIXED_TRACK_DATA.map((slide) => (
            <div
              key={slide.id}
              className="h-full shrink-0 relative overflow-hidden group"
              style={{ width: `${100 / slideCount}%` }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${slide.bgUrl})` }}
                role="img"
                aria-label={slide.bgAlt}
              />

              {/* FIX: Dark overlay — not canvas/white. Deep navy-black gradient
                  so content always reads clearly on any background image. */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e1a2b]/95 via-[#0e1a2b]/80 to-[#0e1a2b]/70 lg:from-[#0e1a2b]/90 lg:via-[#0e1a2b]/70 lg:to-[#0e1a2b]/50" />

              {slide.type === "why-us" ? (
                <WhyUsSlideLayout slide={slide} />
              ) : (
                <ServiceSlideLayout service={slide} />
              )}
            </div>
          ))}
        </motion.div>

        <ProgressIndicator total={slideCount} current={activeSlide} />
        <ScrollHint visible={activeSlide === 0} />
      </div>
    </div>
  );
}

// ─── Why Us Slide ─────────────────────────────────────────────────────────────

function WhyUsSlideLayout({ slide }: { slide: WhyUsSlide }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-center h-full w-full px-6 md:px-16 lg:px-24 xl:px-32 py-24 relative z-10 select-none">
      <div className="lg:col-span-5 mb-8 lg:mb-0">
        <span className="font-mono text-xs tracking-[0.4em] text-accent block mb-4 uppercase">
          Est. 2000 · Addis Ababa
        </span>
        <h2 className="font-display text-5xl md:text-7xl font-black tracking-tight uppercase leading-none mb-6"
          style={{ color: "#ffffff" }}>
          {slide.title}
        </h2>
        <p className="font-body text-base md:text-lg leading-relaxed max-w-sm"
          style={{ color: "rgba(255,255,255,0.7)" }}>
          {slide.tagline}
        </p>
      </div>

      <div className="lg:col-span-7 flex flex-col gap-4 w-full lg:pl-12">
        {slide.pillars.map((pillar, i) => (
          <div
            key={pillar.label}
            // FIX: Dark card surface instead of light surface/60
            // rgba(255,255,255,0.06) = barely visible on dark bg, readable
            className="p-6 backdrop-blur-md border rounded-sm hover:border-accent transition-colors duration-300"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              borderColor: "rgba(255,255,255,0.12)"
            }}
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="font-mono text-xs text-accent font-bold">
                0{i + 1}.
              </span>
              <h4 className="font-display text-xl font-black tracking-wide uppercase"
                style={{ color: "#ffffff" }}>
                {pillar.label}
              </h4>
            </div>
            <p className="font-body text-xs md:text-sm leading-relaxed pl-7"
              style={{ color: "rgba(255,255,255,0.6)" }}>
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Service Slides ───────────────────────────────────────────────────────────

function ServiceSlideLayout({ service }: { service: ServiceSlide }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-center h-full w-full px-6 md:px-16 lg:px-24 xl:px-32 py-24 relative z-10 select-none">
      <div className="lg:col-span-8 flex flex-col justify-between h-full max-h-[460px]">
        <div>
          <span className="font-mono text-xs tracking-[0.4em] text-accent block mb-4 uppercase">
            Service {service.number}
          </span>
          <h2
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none mb-6"
            style={{ color: "#ffffff" }}
          >
            {service.title}
          </h2>
          <h3
            className="font-body text-base md:text-xl font-medium tracking-wide mb-5 max-w-xl"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {service.tagline}
          </h3>
          <p
            className="font-body text-sm md:text-base max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {service.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8 lg:mt-0">
          {service.capabilities.map((item) => (
            <span
              key={item}
              className="font-mono text-[10px] md:text-xs tracking-wider uppercase backdrop-blur-sm px-3 py-1.5 rounded-sm"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)"
              }}
            >
              • {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Progress Indicator ───────────────────────────────────────────────────────

function ProgressIndicator({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex gap-3 items-center absolute bottom-10 left-6 md:left-16 lg:left-24 xl:left-32 z-20">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className="h-1 rounded-full"
          animate={{
            width: i === current ? 44 : 10,
            backgroundColor: i === current
              ? "var(--color-accent)"
              : "rgba(255,255,255,0.25)",
            opacity: i === current ? 1 : 0.5,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        />
      ))}
    </div>
  );
}

// ─── Scroll Hint ──────────────────────────────────────────────────────────────

function ScrollHint({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="absolute right-8 md:right-16 bottom-10 flex items-center gap-3 pointer-events-none z-20"
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="text-[10px] font-mono tracking-[0.3em] uppercase"
        style={{ color: "rgba(255,255,255,0.5)" }}>
        Scroll to explore
      </span>
      <div className="w-16 h-px relative overflow-hidden"
        style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 bg-accent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}