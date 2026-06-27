import { Link } from "react-router";
import { motion } from "motion/react";

export default function About() {
  const team = [
    {
      name: "Essayas Gizaw",
      role: "Managing Director, Screenwriter & Director",
      img: "https://picsum.photos/seed/team1/400/400",
    },
    {
      name: "Essayas Ahimed",
      role: "Journalist & Narrator",
      img: "https://picsum.photos/seed/team2/400/400",
    },
    {
      name: "Ejigayehu G/Yes",
      role: "Film Editor",
      img: "https://picsum.photos/seed/team3/400/400",
    },
    {
      name: "Wubshet Adugna",
      role: "Editor & Graphics Designer",
      img: "https://picsum.photos/seed/team4/400/400",
    },
    {
      name: "Zenawork Kassahun",
      role: "Cinematographer",
      img: "https://picsum.photos/seed/team5/400/400",
    },
    {
      name: "Habitamu Beyene",
      role: "Sound Engineer",
      img: "https://picsum.photos/seed/team6/400/400",
    },
    {
      name: "Fanuel Metasebiya",
      role: "Cameraman",
      img: "https://picsum.photos/seed/team7/400/400",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-canvas text-primary font-body">
      {/* 2. HERO */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="max-w-4xl"
          >
            <span className="font-mono text-accent font-bold text-sm tracking-widest uppercase block mb-6">
              OUR STORY
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-12">
              About ESSAG Film Production
            </h1>
          </motion.div>

          <div className="relative aspect-21/9 w-full rounded-2xl overflow-hidden shadow-card border border-border">
            <img
              src="https://picsum.photos/seed/about-hero/1600/700"
              alt="Cinematic set in Addis Ababa"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. MANIFESTO */}
      <section className="py-20 lg:py-28 bg-surface border-y border-border px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-[70ch] space-y-6">
            <p className="text-secondary text-lg md:text-xl leading-relaxed">
              It started with a single story to tell. What began as a small
              ambition quickly grew into Ethiopia's leading film house. For over
              twenty years, ESSAG Film Production has been the quiet force
              behind the frames that define modern Ethiopian cinema.
            </p>
            <p className="text-secondary text-lg md:text-xl leading-relaxed">
              From gripping cinema screens and feature films to impactful,
              research-led NGO documentaries and over two hundred music videos,
              our canvas has expanded, but our core remains untouched. We
              believe that a story told honestly can shift perspectives, bridge
              divides, and echo across generations.
            </p>
            <p className="text-secondary text-lg md:text-xl leading-relaxed">
              We don't merely document events; we translate human experience
              into a universal visual language. Whether we are shooting a
              high-stakes TV commercial, capturing an international summit, or
              grading a feature film, it is always the same craft. Always the
              same care. Always ESSAG.
            </p>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-20 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="font-mono text-accent font-bold text-sm tracking-widest uppercase block mb-4">
              MISSION
            </span>
            <h2 className="text-3xl font-display font-bold mb-6 text-primary">
              To craft truth.
            </h2>
            <p className="text-secondary leading-relaxed">
              Our mission is to produce visually stunning, emotionally resonant
              films, documentaries, and media that authentically represent
              Ethiopian culture and tackle universal themes. We handle every
              frame with precision and purpose.
            </p>
          </div>
          <div>
            <span className="font-mono text-accent font-bold text-sm tracking-widest uppercase block mb-4">
              VISION
            </span>
            <h2 className="text-3xl font-display font-bold mb-6 text-primary">
              To project Africa.
            </h2>
            <p className="text-secondary leading-relaxed">
              We envision ESSAG as the premier cinematic conduit between Africa
              and the globe. By nurturing local talent and utilizing world-class
              production standards, we aim to be the definitive voice in African
              visual storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* 5. AWARDS */}
      <section className="pb-24 lg:pb-32 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-surface-alt border-l-4 border-accent p-8 md:p-12 rounded-r-2xl shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-secondary text-xs tracking-widest uppercase block mb-2">
              AS RECOGNIZED BY
            </span>
            <h3 className="text-2xl font-display font-bold text-primary">
              Best Playwright Award
            </h3>
          </div>
          <div className="md:text-right">
            <div className="text-xl text-primary font-medium">
              World Intellectual Property Organization (WIPO)
            </div>
            <div className="font-mono text-accent mt-1 text-sm font-bold tracking-wider">
              2008
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEAM */}
      <section className="py-20 lg:py-28 border-t border-border bg-surface px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16">
            <span className="font-mono text-accent font-bold text-sm tracking-widest uppercase block mb-4">
              THE TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-primary">
              The people behind the lens.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {team.map((member, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-2 border-transparent transition-colors duration-300 group-hover:border-accent shadow-card">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-80 transition-all duration-500 ease-spring group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-display font-bold mb-2 text-primary">
                  {member.name}
                </h3>
                <p className="text-secondary text-sm max-w-[25ch]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STATS */}
      <section className="py-20 border-t border-b border-border px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            {[
              { num: "20", label: "Cinema Films" },
              { num: "200", label: "Music Videos" },
              { num: "25", label: "Years of Work" },
              { num: "50", label: "NGO & Brand Clients" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="text-4xl sm:text-5xl font-display font-black text-primary">
                  {stat.num}
                  <span className="text-accent font-light font-body ml-0.5">
                    •
                  </span>
                </div>
                <div className="text-secondary text-sm font-mono tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section className="py-20 lg:py-28 relative overflow-hidden px-4 md:px-8">
        <div className="absolute top-1/2 left-0 w-1/2 h-full bg-accent/5 blur-[120px] -translate-y-1/2 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="bg-surface-alt border border-border rounded-2xl p-10 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-card">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-center md:text-left max-w-xl leading-tight">
              Every great film starts with a conversation.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-canvas font-display font-bold tracking-wide uppercase whitespace-nowrap text-base px-8 py-4 rounded-xl transition-colors duration-300 shadow-focus focus-visible:outline-none"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
