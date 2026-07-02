import { motion } from "motion/react";

interface AwardBadge {
  name: string;
  year: string;
  category: string;
  imgUrl: string;
}

export default function AwardsStrip() {
  const awards: AwardBadge[] = [
    {
      name: "Addy Awards",
      year: "2025",
      category: "Best Cinematography",
      imgUrl: "https://cdn.prod.website-files.com/65f0eda4907429e328a9b8a2/65f69850f859eed35314545f_addy.webp",
    },
    {
      name: "Telly Awards",
      year: "2025",
      category: "Gold Winner — Commercials",
      imgUrl: "https://cdn.prod.website-files.com/65f0eda4907429e328a9b8a2/65f6a2084368510500989f99_telly.webp",
    },
    {
      name: "Muse Creative Awards",
      year: "2024",
      category: "Platinum — Video Production",
      imgUrl: "https://cdn.prod.website-files.com/65f0eda4907429e328a9b8a2/65f6a26d3eae060f2437bc72_muse.webp",
    },
  ];

  return (
    <div 
      className="w-full bg-surface-alt border-b border-border/80 overflow-hidden"
      style={{ 
        paddingTop: "var(--_spacing---section-space--small)", 
        paddingBottom: "var(--_spacing---section-space--small)" 
      }}
    >
      <div 
        className="mx-auto flex flex-col items-center"
        style={{ 
          maxWidth: "var(--max-width--main)",
          paddingLeft: "var(--site--margin)",
          paddingRight: "var(--site--margin)"
        }}
      >
        
        <div className="flex items-center gap-4 mb-12 select-none opacity-80">
          <svg className="w-5 h-5 text-accent transform -scale-x-100" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 0 1-9-9m9 9a9 9 0 0 0 9-9m-9 9V3m0 18a9 9 0 0 1 9-9m-9 9a9 9 0 0 0-9-9M3 12h18" />
          </svg>

          <span className="font-mono text-xs font-bold uppercase tracking-widest text-secondary">
            AWARD WINNING PRODUCTION STUDIO
          </span>

          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 0 1-9-9m9 9a9 9 0 0 0 9-9m-9 9V3m0 18a9 9 0 0 1 9-9m-9 9a9 9 0 0 0-9-9M3 12h18" />
          </svg>
        </div>

        <div 
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 items-center justify-items-center"
        >
          {awards.map((award, idx) => (
            <motion.div
              key={`award-${idx}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center text-center group w-fit "
            >
              <div className="h-16 flex items-center justify-center mb-5">
                <img 
                  src={award.imgUrl} 
                  alt={`${award.name} Crest`}
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}