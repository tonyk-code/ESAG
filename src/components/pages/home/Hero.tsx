import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroVideo from "../../../../public/Hero video.mp4";
import { RevealText } from "../../ui/RevealText";

// Define the items to show inside your rotating wheel.
// The math below handles up to 18 items out of the box.
const MARQUEE_ITEMS = [
  { id: 1, type: "video", url: "https://hadi-community.b-cdn.net/Marquee%20Creatives/01__Winterliche%20Outfits_v2%20(3)%20(1).mov" },
  { id: 2, type: "image", url: "https://cdn.prod.website-files.com/69c3da179dd9a2e60f53c6bc/69f45f641f2b8d7444a3ba8c_Subliments%2001.webp" },
  { id: 3, type: "video", url: "https://hadi-community.b-cdn.net/Marquee%20Creatives/02.%20Francesco%20Wie%20macht%20man%20den%20besten%20Kaffee.mp4" },
  { id: 4, type: "image", url: "https://cdn.prod.website-files.com/69c3da179dd9a2e60f53c6bc/69f45f64210b8f695e844f98_Food%2004.webp" },
  { id: 5, type: "video", url: "https://hadi-community.b-cdn.net/Marquee%20Creatives/03.%20Verschiedene%20Farben_V2.mp4" },
  { id: 6, type: "image", url: "https://cdn.prod.website-files.com/69c3da179dd9a2e60f53c6bc/6a10590c298a7c4060c71746_HADiStory_Ad.jpg" },
  { id: 7, type: "video", url: "https://hadi-community.b-cdn.net/Marquee%20Creatives/08.%20Muttertag.mp4" },
  { id: 8, type: "image", url: "https://cdn.prod.website-files.com/69c3da179dd9a2e60f53c6bc/69d5087745a0a8ebb7803f26_Story%203.webp" },
  { id: 9, type: "video", url: "https://hadi-community.b-cdn.net/Marquee%20Creatives/08.%20RED%20BULL%20Reel%20.mp4" },
];

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax scroll effects
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const wheelScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const wheelOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);

  return (
    <section
      ref={containerRef}
      className="min-h-dvh w-full relative overflow-hidden flex flex-col justify-center select-none bg-primary text-white"
    >
      {/* ── Background Subtle Video Glow (Optional ambient layer) ── */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* ── Grid Layout Container ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 md:px-12 py-20 lg:py-0">
        
        {/* Left Side: Typography & Content */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="lg:col-span-6 flex flex-col text-left items-start z-20"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4"
          >
            Your Creative Performance Agency
          </motion.p>

          {/* Main Headline */}
          <RevealText
            text="Finally, *profitable growth* for your social ads."
            tag="h1"
            trigger="onLoad"
            delay={0.2}
            className="text-4xl md:text-6xl tracking-tight text-left font-bold"
            style={{ color: "#ffffff", lineHeight: 1.1 }}
          />

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base md:text-lg text-white/70 font-light max-w-xl"
          >
            Most companies don't fail because of their ads, but because of their creatives. 
            We develop high-performance campaigns and produce in-house content that stands out, 
            converts, and predictably brings in new customers.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex items-center gap-4 flex-wrap"
          >
            <a
              href="/work"
              className="inline-flex items-center justify-center px-8 py-3.5 min-h-[52px] rounded-md bg-accent hover:bg-accent-hover font-semibold text-base text-white transition-colors cursor-pointer"
            >
              See Our Work
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 min-h-[52px] rounded-md bg-white hover:bg-white/90 font-semibold text-base text-primary transition-colors cursor-pointer"
            >
              Start a Project
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: The Giant Radial Marquee Wheel */}
        <motion.div
          style={{ scale: wheelScale, opacity: wheelOpacity }}
          className="lg:col-span-6 flex items-center justify-center relative w-full h-[500px] md:h-[650px] lg:h-[750px]"
        >
          {/* Masking overlay to fade out the bottom of the wheel like the reference */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-primary via-85%" />

          {/* Core Infinite Rotating Element */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            className="w-20 h-20 relative flex items-center justify-center origin-center"
          >
            {MARQUEE_ITEMS.map((item, index) => {
              // Automatically space the items evenly around the 360 degree ring
              const rotationAngle = index * (360 / MARQUEE_ITEMS.length);
              
              return (
                <div
                  key={item.id}
                  className="absolute origin-center select-none pointer-events-auto"
                  style={{
                    // translate Y shifts the items outwards from the center hub to form the circle edge
                    // Adjust the translation value (e.g., -280px to -340px) to control the size of the wheel radius
                    transform: `rotate(${rotationAngle}deg) translateY(-280px)`,
                  }}
                >
                  {/* The actual Card container (Maintains vertical orientation correction if desired, or tilts relative to circle) */}
                  <div className="w-[140px] h-[220px] md:w-[160px] md:h-[260px] bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 relative">
                    {item.type === "video" ? (
                      <video
                        src={item.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={item.url}
                        alt=""
                        loading="eager"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-white/20"
        />
      </div>
    </section>
  );
}