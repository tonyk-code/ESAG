"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// ─── Types & Interfaces ──────────────────────────────────────────────────────

interface BaseSlide {
  id: string;
  number: string;
  title: string;
  tagline: string;
  bgImageDescription: string; // Used to instruct image selections or alt tags
  bgUrl: string;               // Replace with your asset paths (e.g., "/images/hero-meskel.jpg")
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

// ─── Production Company Content Data ─────────────────────────────────────────

const MIXED_TRACK_DATA: SlideData[] = [
  {
    id: "why-us-intro",
    number: "00",
    type: "why-us",
    title: "WHY US",
    tagline: "We don't play it safe. We tell stories that command attention.",
    bgImageDescription: "Cinematic, moody wide-angle silhouette shot of historic Ethiopian landscape or high-contrast modern Addis Ababa architecture during golden hour.",
    bgUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1920&auto=format&fit=crop", // Placeholder: Ethiopian visual landscape vibe
    pillars: [
      { label: "CRAFTED", desc: "Every project is handled with intentional framing, bespoke sound, and deep narrative purpose—never just a camera setup." },
      { label: "LOCAL", desc: "Deeply rooted in our culture, communities, and streets. We know this audience, this heritage, and how to capture its true soul." },
      { label: "BOLD", desc: "Uncompromising creative vision. We capture raw emotion and take creative risks that make your brand impossible to ignore." }
    ]
  },
  {
    id: "film-production",
    number: "01",
    type: "service",
    title: "FILM PRODUCTION",
    tagline: "Cinematic narratives engineered to make your audience feel.",
    description: "From commercial campaigns and high-impact brand documentaries to cinematic music films and shorts, we handle the entire lifecycle of moving images with absolute precision.",
    capabilities: ["Short Films", "Documentaries", "Commercials", "Branded Content"],
    bgImageDescription: "Moody production still featuring anamorphic lenses, atmospheric haze, shooting a cultural story on location in Ethiopia.",
    bgUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: "music-production",
    number: "02",
    type: "service",
    title: "MUSIC & AUDIO",
    tagline: "Sound design and records that command acoustic presence.",
    description: "Our studio environment handles tracking, deep-layered mixing, professional mastering, and custom beat arrangements across multiple sonic genres.",
    capabilities: ["Recording", "Mixing & Mastering", "Beat Production", "Sound Design"],
    bgImageDescription: "Bespoke recording studio control room with warm accent lighting, vintage microphones, and local design accents in Addis Ababa.",
    bgUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: "live-streaming",
    number: "03",
    type: "service",
    title: "LIVE STREAMING",
    tagline: "Flawless broadcast delivery, live-multiplexed anywhere.",
    description: "Multi-camera configurations and rock-solid encoding architecture engineered for high-stakes concerts, cultural festivals, corporate conferences, and product launches.",
    capabilities: ["Multi-Cam Setup", "Custom RTMP Broadcast", "Event Coverage", "Concerts"],
    bgImageDescription: "High-octane multi-cam concert broadcast scene with laser lights slicing over a massive audience crowd in Meskel Square or Millennium Hall.",
    bgUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: "youtube-production",
    number: "04",
    type: "service",
    title: "YOUTUBE ENGINE",
    tagline: "End-to-end video assembly tailored for high retention.",
    description: "Full-service management built for creators, businesses, and NGOs looking to scale presence. Script design, capture sessions, and rapid editing optimization.",
    capabilities: ["Content Strategy", "High-Retention Edits", "Channel Management", "Scripting"],
    bgImageDescription: "Modern editing workflow studio setup, dual color-graded monitors displaying sharp, energetic, modern lifestyle frames from Addis Ababa street culture.",
    bgUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1920&auto=format&fit=crop"
  }
];

// ─── Main Component ──────────────────────────────────────────────────────────

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
      {/* Sticky Frame Viewport */}
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden bg-canvas">
        
        {/* Horizontal Track Slider */}
        <motion.div
          className="flex h-full"
          style={{
            x: smoothX,
            width: `${slideCount * 100}%`,
          }}
        >
          {MIXED_TRACK_DATA.map((slide) => (
            <div
              key={slide.id}
              className="h-full shrink-0 relative overflow-hidden group"
              style={{ width: `${100 / slideCount}%` }}
            >
              {/* Cinematic Background Image Layer */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${slide.bgUrl})` }}
                aria-label={slide.bgImageDescription}
              />
              {/* Deep Cinematic Overlay Vignette — matches your canvas token */}
              <div className="absolute inset-0 bg-linear-to-r from-canvas via-canvas/85 to-canvas/95 lg:from-canvas/90 lg:via-canvas/75 lg:to-canvas/90" />

              {/* Slide Content Dynamic Router */}
              {slide.type === "why-us" ? (
                <WhyUsSlideLayout slide={slide} />
              ) : (
                <ServiceSlideLayout service={slide} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Dynamic Linear Progress Tracker */}
        <ProgressIndicator total={slideCount} current={activeSlide} />

        {/* Cinematic Scroll Track Hint */}
        <ScrollHint visible={activeSlide === 0} />
      </div>
    </div>
  );
}

// ─── Slide 00: Why Us Explicit Layout ────────────────────────────────────────

function WhyUsSlideLayout({ slide }: { slide: WhyUsSlide }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-center h-full w-full px-6 md:px-16 lg:px-24 xl:px-32 py-24 relative z-10 select-none">
      <div className="lg:col-span-5 mb-8 lg:mb-0">
        <span className="font-mono text-xs tracking-[0.4em] text-accent block mb-4">
          // PILLED FOUNDATION
        </span>
        <h2 className="font-display text-5xl md:text-7xl font-black text-primary tracking-tight uppercase leading-none mb-6">
          {slide.title}
        </h2>
        <p className="font-body text-base md:text-lg text-secondary max-w-sm leading-relaxed">
          {slide.tagline}
        </p>
      </div>

      {/* Grid Stack of the 3 Pillar Lists */}
      <div className="lg:col-span-7 flex flex-col gap-6 w-full lg:pl-12">
        {slide.pillars.map((pillar, i) => (
          <div 
            key={pillar.label}
            className="p-6 bg-surface/60 backdrop-blur-md border border-border rounded-sm hover:border-accent transition-colors duration-300"
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="font-mono text-xs text-accent font-bold">
                0{i + 1}.
              </span>
              <h4 className="font-display text-xl font-black text-primary tracking-wide uppercase">
                {pillar.label}
              </h4>
            </div>
            <p className="font-body text-xs md:text-sm text-secondary leading-relaxed pl-7">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Slides 01-04: Core Service Layout ───────────────────────────────────────

function ServiceSlideLayout({ service }: { service: ServiceSlide }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-center h-full w-full px-6 md:px-16 lg:px-24 xl:px-32 py-24 relative z-10 select-none">
      <div className="lg:col-span-8 flex flex-col justify-between h-full max-h-115">
        <div>
          <span className="font-mono text-xs tracking-[0.4em] text-accent block mb-4">
            // SERVICE CAPABILITY {service.number}
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary tracking-tight uppercase leading-none mb-6">
            {service.title}
          </h2>
          <h3 className="font-body text-base md:text-xl text-primary font-medium tracking-wide mb-5 max-w-xl">
            {service.tagline}
          </h3>
          <p className="font-body text-sm md:text-base text-secondary max-w-xl leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Dynamic Capabilities Pill Badges */}
        <div className="flex flex-wrap gap-2 mt-8 lg:mt-0">
          {service.capabilities.map((item) => (
            <span
              key={item}
              className="font-mono text-[10px] md:text-xs tracking-wider uppercase bg-surface/80 backdrop-blur-sm border border-border text-secondary px-3 py-1.5 rounded-sm"
            >
              • {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Progress Tracker Indicator ──────────────────────────────────────────────

function ProgressIndicator({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex gap-3 items-center justify-center absolute bottom-10 left-6 md:left-16 lg:left-24 xl:left-32 z-20">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className="h-1 rounded-full"
          animate={{
            width: i === current ? 44 : 10,
            backgroundColor: i === current ? "var(--color-accent)" : "var(--color-disabled)",
            opacity: i === current ? 1 : 0.4,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        />
      ))}
    </div>
  );
}

// ─── Fine Scroll Track Hint ──────────────────────────────────────────────────

function ScrollHint({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="absolute right-8 md:right-16 bottom-10 flex items-center gap-3 pointer-events-none z-20"
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.4, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <span className="text-secondary text-[10px] font-mono tracking-[0.3em] uppercase">
        Slide to Begin
      </span>
      <div className="w-16 h-px bg-linear-to-r from-secondary to-transparent relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 bg-accent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}