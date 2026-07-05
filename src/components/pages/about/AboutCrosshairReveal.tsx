import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function AboutCrosshairReveal() {
  const revealContainerRef = useRef(null);

  const { scrollYProgress: revealProgress } = useScroll({
    target: revealContainerRef,
    offset: ["start start", "end end"],
  });

  const lineWidthHeight = useTransform(
    revealProgress,
    [0, 0.45],
    ["0%", "50%"],
  );
  const firstImageScale = useTransform(revealProgress, [0, 1], [1.15, 1.0]);
  const rectClipPath = useTransform(
    revealProgress,
    [0.45, 0.95, 1],
    ["inset(50% 50% 50% 50%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
  );
  const borderInset = useTransform(
    revealProgress,
    [0.45, 0.95, 1],
    ["50%", "0%", "0%"],
  );
  const secondImageScale = useTransform(
    revealProgress,
    [0.45, 0.95, 1],
    [1.15, 1.0, 1.0],
    { clamp: true },
  );

  return (
    <section ref={revealContainerRef} className="relative h-[320vh] bg-black">
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?q=80&w=978&auto=format&fit=crop"
          alt="Base View"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale: firstImageScale }}
        />

        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-0 h-px bg-white/80 -translate-y-1/2"
            style={{ width: lineWidthHeight }}
          />
          <motion.div
            className="absolute top-1/2 right-0 h-px bg-white/80 -translate-y-1/2"
            style={{ width: lineWidthHeight }}
          />
          <motion.div
            className="absolute left-1/2 top-0 w-px bg-white/80 -translate-x-1/2"
            style={{ height: lineWidthHeight }}
          />
          <motion.div
            className="absolute left-1/2 bottom-0 w-px bg-white/80 -translate-x-1/2"
            style={{ height: lineWidthHeight }}
          />
        </div>

        <motion.div
          className="absolute inset-0 z-20 w-full h-full overflow-hidden"
          style={{ clipPath: rectClipPath }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1000&auto=format&fit=crop"
            alt="Revealed Canvas"
            className="w-full h-full object-cover"
            style={{ scale: secondImageScale }}
          />
        </motion.div>

        <motion.div
          className="absolute z-30 border border-white/80 pointer-events-none"
          style={{
            top: borderInset,
            bottom: borderInset,
            left: borderInset,
            right: borderInset,
          }}
        />
      </div>
    </section>
  );
}
