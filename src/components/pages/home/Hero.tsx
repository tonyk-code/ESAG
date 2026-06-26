import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroVideo from "/Hero video.mp4";
import { RevealText } from "../../ui/RevealText";

export default function Hero() {
  const containerRef = useRef(null);

  // Track the scroll position of the Hero section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll transformations for cinema effect
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="min-h-dvh w-full relative overflow-hidden flex flex-col justify-between select-none bg-canvas"
    >
      {/* Background Media Container */}
      <motion.div 
        style={{ scale: videoScale }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          style={{ opacity: videoOpacity }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-linear-to-t from-canvas via-transparent to-black/40" />
      </motion.div>

      {/* Floating Hero Copy */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-[clamp(1.5rem,5vw,6rem)] flex flex-col items-center justify-center text-center flex-1 py-24"
      >
        <RevealText
          text="Creating beauty than *ever* before"
          tag="h1"
          trigger="onLoad"
          delay={0.1}
          className="text-5xl md:text-7xl lg:text-8xl tracking-tight justify-center text-primary"
        />

        <RevealText
          text="Film · Documentary · Music Video · Television"
          tag="p"
          trigger="onLoad"
          delay={0.3}
          staggerSpeed={0.03}
          className="mt-4 text-sm md:text-base tracking-[0.2em] uppercase justify-center font-mono text-accent"
        />

        <RevealText
          text="ESSAG is a premium film and documentary production house crafting cinematic narratives from Addis Ababa."
          tag="p"
          trigger="onLoad"
          delay={0.5}
          staggerSpeed={0.02}
          className="mt-6 text-sm md:text-base max-w-sm mx-auto font-light tracking-wide justify-center text-secondary"
        />

        <div className="mt-10 flex items-center gap-4 justify-center">
          <a
            href="/work"
            className="inline-flex items-center justify-center px-6 py-3 min-h-11 rounded-md bg-accent hover:bg-accent-hover text-canvas font-semibold text-[0.9375rem] transition-colors cursor-pointer"
          >
            See Our Work
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 min-h-11 rounded-md border border-border hover:border-accent text-primary hover:text-accent font-semibold text-[0.9375rem] transition-colors cursor-pointer"
          >
            Start a Project
          </a>
        </div>
      </motion.div>

      {/* Animated Down indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 opacity-30 bg-secondary" 
        />
      </div>
    </section>
  );
}