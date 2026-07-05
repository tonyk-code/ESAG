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
      className="h-screen w-full relative overflow-hidden"
      ref={containerRef}
    >
      <motion.img
        src="g3.png"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y: yImage }}
        alt="Hero background"
      />

      <div className="absolute inset-0 max-w-7xl mx-auto flex flex-col justify-center px-4 md:px-8">
        <motion.div
          style={{ y: yParallel }}
          className="max-w-2xl absolute top-40"
        >
          <RevealText
            text="Architects, designers, engineers --- a team built on ideas and precision"
            tag="h1"
            trigger="onLoad"
            delay={0.2}
            className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-left font-display font-black uppercase leading-[0.95] z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
