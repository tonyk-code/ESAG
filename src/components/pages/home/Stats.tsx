import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

interface StatItem {
  num: number;
  label: string;
}

function Counter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [count, value, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  const stats: StatItem[] = [
    { num: 20, label: "Cinema Films" },
    { num: 200, label: "Music Videos" },
    { num: 25, label: "Years of Work" },
    { num: 50, label: "NGO & Brand Clients" },
  ];

  return (
    <section
      className="relative w-full bg-primary py-site-margin text-white selection:bg-accent selection:text-white border-b-2 border-border/60 overflow-hidden"
      aria-label="Our operational metrics"
    >
      <div className="max-w-(--max-width-main) mx-auto px-site-margin relative z-10">
        <div className="mb-12 md:mb-16 text-center">
          <span className="font-mono text-xs font-bold tracking-[0.3em] text-secondary uppercase block">
            Our Craft —{" "}
            <span className="text-white font-black">Years in Motion</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
          {stats.map((stat, i) => {
            const isLast = i === stats.length - 1;

            return (
              <div
                key={i}
                className="relative w-full flex flex-col items-center justify-center text-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-accent">
                    <Counter value={stat.num} />+
                  </div>

                  <div className="font-body text-sm md:text-base text-secondary font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>

                {!isLast && (
                  <div
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-border/20"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
