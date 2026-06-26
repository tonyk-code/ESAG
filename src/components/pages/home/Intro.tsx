import { motion } from "motion/react";

export default function Intro() {
  return (
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
            feature films to impactful NGO documentaries, our commitment to the
            craft remains unchanged.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
