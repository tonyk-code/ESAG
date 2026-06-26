import { motion } from "motion/react";

interface StatItem {
  num: string;
  label: string;
}

export default function Stats() {
  const stats: StatItem[] = [
    { num: "20", label: "Cinema Films" },
    { num: "200", label: "Music Videos" },
    { num: "25", label: "Years of Work" },
    { num: "50", label: "NGO & Brand Clients" },
  ];

  return (
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
  );
}
