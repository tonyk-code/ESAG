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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-5"
          >
            Film · Documentary · Music Video · Television
          </motion.p>

          <RevealText
            text="Creating beauty than *ever* before"
            tag="h1"
            trigger="onLoad"
            delay={0.2}
            className="text-h1 tracking-tight text-left font-display font-black"
            style={{ color: "var(--color-primary)", lineHeight: 1.08 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-main text-secondary font-body font-light max-w-lg leading-relaxed"
          >
            Ethiopia's leading film and documentary production house. Over two
            decades of cinema, music videos, and NGO stories — crafted from
            Addis Ababa to the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex items-center gap-4 flex-wrap"
          >
            <a
              href="/work"
              className="inline-flex items-center justify-center px-8 py-3.5 min-h-13 rounded-md bg-accent hover:bg-accent-hover font-semibold text-base text-white transition-colors transition-timing-ease-out duration-200"
            >
              See Our Work
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 min-h-13 rounded-md bg-surface hover:bg-surface-alt font-semibold text-base text-primary border border-border transition-colors transition-timing-ease-out duration-200"
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
