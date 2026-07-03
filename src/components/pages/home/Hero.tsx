import { motion } from "motion/react";
import { RevealText } from "../../ui/RevealText";

const MARQUEE_ITEMS = [
  {
    id: 1,
    type: "video",
    url: "https://hadi-community.b-cdn.net/Marquee%20Creatives/01__Winterliche%20Outfits_v2%20(3)%20(1).mov",
  },
  {
    id: 2,
    type: "image",
    url: "https://cdn.prod.website-files.com/69c3da179dd9a2e60f53c6bc/69f45f641f2b8d7444a3ba8c_Subliments%2001.webp",
  },
  {
    id: 3,
    type: "video",
    url: "https://hadi-community.b-cdn.net/Marquee%20Creatives/02.%20Francesco%20Wie%20macht%20man%20den%20besten%20Kaffee.mp4",
  },
  {
    id: 4,
    type: "image",
    url: "https://cdn.prod.website-files.com/69c3da179dd9a2e60f53c6bc/69f45f64210b8f695e844f98_Food%2004.webp",
  },
  {
    id: 5,
    type: "video",
    url: "https://hadi-community.b-cdn.net/Marquee%20Creatives/03.%20Verschiedene%20Farben_V2.mp4",
  },
  {
    id: 6,
    type: "image",
    url: "https://cdn.prod.website-files.com/69c3da179dd9a2e60f53c6bc/6a10590c298a7c4060c71746_HADiStory_Ad.jpg",
  },
  {
    id: 7,
    type: "video",
    url: "https://hadi-community.b-cdn.net/Marquee%20Creatives/08.%20Muttertag.mp4",
  },
  {
    id: 8,
    type: "image",
    url: "https://cdn.prod.website-files.com/69c3da179dd9a2e60f53c6bc/69d5087745a0a8ebb7803f26_Story%203.webp",
  },
  {
    id: 9,
    type: "video",
    url: "https://hadi-community.b-cdn.net/Marquee%20Creatives/08.%20RED%20BULL%20Reel%20.mp4",
  },
];

export default function Hero() {
  return (
    <section className="min-h-dvh w-full relative overflow-hidden flex flex-col justify-center select-none bg-canvas text-primary">
     
      <div className="relative z-10 w-full max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-site-gutter items-center px-site-margin py-20 lg:py-0">
        <motion.div className="lg:col-span-6 flex flex-col text-left items-start z-20">
  {/* Eyebrow Label with modern tracking and indicator crosshair */}
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="flex items-center gap-2 mb-6"
  >
    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
    <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-accent font-medium">
      Film · Documentary · Music Video · Television
    </p>
  </motion.div>

  {/* Amplified Display Headline */}
  <div className="relative max-w-2xl">
    <RevealText
      text="Creating beauty like *never* before"
      tag="h1"
      trigger="onLoad"
      delay={0.2}
      className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-left font-display font-black uppercase leading-[0.95]"
      style={{ color: "var(--color-primary)" }}
    />
  </div>

  {/* Refined Secondary Text Block */}
  <motion.p
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="mt-8 text-sm md:text-base lg:text-lg text-secondary font-body font-normal max-w-xl leading-relaxed opacity-90"
  >
    Ethiopia's leading film and documentary production house. Over two
    decades of cinema, music videos, and NGO stories — crafted from
    Addis Ababa to the world.
  </motion.p>

  {/* Premium Action Triggers */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.75, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="mt-10 flex items-center gap-4 flex-wrap w-full sm:w-auto"
  >
    <a
      href="/work"
      className="group relative inline-flex items-center justify-center px-8 py-4 min-h-13 overflow-hidden rounded-sm bg-accent font-mono text-xs tracking-widest uppercase text-white transition-transform duration-300 active:scale-98"
    >
      <span className="absolute inset-0 w-full h-full bg-white/10 transition-transform duration-300 -translate-x-full group-hover:translate-x-0" />
      <span className="relative z-10 font-bold">See Our Work</span>
    </a>
    <a
      href="/contact"
      className="inline-flex items-center justify-center px-8 py-4 min-h-13 rounded-sm bg-surface hover:bg-surface-alt font-mono text-xs tracking-widest uppercase text-primary font-bold border border-border/80 transition-colors duration-300 active:scale-98"
    >
      Start a Project
    </a>
  </motion.div>
</motion.div>

        <motion.div className="lg:col-span-6 flex items-center justify-center relative w-full h-125 md:h-162.5 lg:h-187.5">
          <div className="absolute inset-0 z-10 pointer-events-none " />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            className="w-20 h-20 relative flex items-center justify-center origin-center"
          >
            {MARQUEE_ITEMS.map((item, index) => {
              const rotationAngle = index * (360 / MARQUEE_ITEMS.length);

              return (
                <div
                  key={item.id}
                  className="absolute origin-center select-none pointer-events-auto"
                  style={{
                    transform: `rotate(${rotationAngle}deg) translateY(-280px)`,
                  }}
                >
                  <div className="w-35 h-55 md:w-40 md:h-65 bg-surface-alt border border-border rounded-xl overflow-hidden shadow-card relative">
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
    </section>
  );
}
