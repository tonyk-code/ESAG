import { useRef, useState, useLayoutEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";

export default function Clients() {
  const clients = [
    "Save the Children",
    "United Nations",
    "African Union",
    "European Union",
    "UNDP",
    "Concern Ethiopia",
    "CISP",
    "Pact Ethiopia",
  ];

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useLayoutEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.offsetWidth / 2);
    }
  }, []);

  const x = useTransform(baseX, (v) => {
    if (trackWidth === 0) return "0px";
    const range = trackWidth;
    const mod = (((v - -range) % range) + range) % range;
    return `${-mod}px`;
  });

  useAnimationFrame((_, delta) => {
    let moveBy = -40 * (delta / 1000);

    moveBy += velocityFactor.get() * moveBy;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section
      className="bg-surface overflow-hidden select-none"
      style={{
        paddingTop: "calc(var(--_spacing---section-space--large) * 0.3)",
        paddingBottom: "calc(var(--_spacing---section-space--large) * 0.3)",
      }}
    >
      <div className="w-full">
        <p className="font-mono text-accent font-bold text-xs tracking-[0.25em] uppercase block mb-6 text-center">
          TRUSTED BY
        </p>

        <div className="relative w-full flex overflow-hidden hover:opacity-100 transition-all duration-300 mask-[linear-gradient(90deg,transparent_0%,black_15%,black_85%,transparent_100%)] group">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-24 whitespace-nowrap h-12 text-center"
          >
            {clients.map((client, i) => (
              <span
                key={`c1-${i}`}
                className="font-display font-bold text-lg md:text-xl text-primary transition-colors duration-300 tracking-tight"
              >
                {client} 
              </span>
            ))}
            {clients.map((client, i) => (
              <span
                key={`c2-${i}`}
                aria-hidden="true"
                className="font-display font-bold text-lg md:text-xl text-primary transition-colors duration-300 tracking-tight"
              >
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
