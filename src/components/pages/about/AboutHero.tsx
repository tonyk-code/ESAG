import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { RevealText } from "../../ui/RevealText";

export default function AboutHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yParallel = useTransform(scrollYProgress, [0, 1], ["0px", "-150px"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      className="h-screen max-w-7xl mx-auto w-full relative overflow-hidden"
      ref={containerRef}
    >
      <motion.img
        src="https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?q=80&w=978&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y: yImage }}
        alt="Hero background"
      />

      {/* FIXED PLACEMENT: Flexbox handles the vertical centering, max-w handles the wrap */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8">
        <motion.div style={{ y: yParallel }} className="max-w-4xl">
          <RevealText
            text="Architects, designers, engineers --- a team built on ideas and precision"
            tag="h1"
            trigger="onLoad"
            delay={0.2}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-left font-display font-black uppercase leading-[0.95] z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
