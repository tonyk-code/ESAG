import { Link } from "react-router";
import { motion, type Variants } from "motion/react";

export default function TeamTeaser(): React.JSX.Element {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const imageMaskVariants: Variants = {
    hidden: {
      scaleY: 0,
      opacity: 0,
    },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 16 },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-canvas overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <span className="font-mono text-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-6 block">
          Visionaries Behind DID
        </span>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            width: "100%",
          }}
          className="max-w-4xl mb-14 px-4"
        >
          <motion.h2
            variants={textVariants}
            className="font-display font-black text-4xl md:text-6xl text-accent uppercase tracking-tight text-shadow-[0_0_10px_rgba(229,9,19,0.4)]"
          >
            Our team
          </motion.h2>

          <motion.div
            variants={imageMaskVariants}
            style={{ transformOrigin: "bottom" }} // ← KEY: anchors scale to bottom
            className="w-32.5 md:w-43 h-17.5 overflow-hidden rounded-lg border border-border bg-surface shrink-0"
          >
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/683324862de9b3057e918945/6839b92bb2e96fe02de52cb4_limits-1.avif"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h2
            variants={textVariants}
            className="font-display font-black text-4xl md:text-6xl text-primary uppercase tracking-tight text-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          >
            redefines
          </motion.h2>

          <motion.h2
            variants={textVariants}
            className="font-display font-black text-4xl md:text-6xl text-primary uppercase tracking-tight text-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          >
            cinematic storytelling
          </motion.h2>

          <motion.h2
            variants={textVariants}
            className="font-display font-black text-4xl md:text-6xl text-primary uppercase tracking-tight text-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          >
            with
          </motion.h2>

          <motion.div
            variants={imageMaskVariants}
            style={{ transformOrigin: "bottom" }}
            className="w-32.5 md:w-43 h-17.5 overflow-hidden rounded-lg border border-border bg-surface shrink-0"
          >
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/683324862de9b3057e918945/6839b92bb2e96fe02de52cb6_limits-3.avif"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h2
            variants={textVariants}
            className="font-display font-black text-4xl md:text-6xl text-accent uppercase tracking-tight text-shadow-[0_0_10px_rgba(229,9,19,0.4)]"
          >
            originality &amp;
          </motion.h2>

          <motion.h2
            variants={textVariants}
            className="font-display font-black text-4xl md:text-6xl text-primary uppercase tracking-tight text-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          >
            excellence
          </motion.h2>

          <motion.div
            variants={imageMaskVariants}
            style={{ transformOrigin: "bottom" }}
            className="w-32.5 md:w-43 h-17.5 overflow-hidden rounded-lg border border-border bg-surface shrink-0"
          >
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/683324862de9b3057e918945/6839b92bb2e96fe02de52cb8_limits-2.avif"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <Link
          to="/contact"
          className="px-8 py-4 bg-primary hover:bg-accent hover:text-canvas text-canvas font-mono font-bold uppercase tracking-wider text-sm transition-colors duration-300 shadow-md cursor-pointer"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}