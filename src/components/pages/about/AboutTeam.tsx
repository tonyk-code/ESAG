import { motion } from "motion/react";
import { RevealText } from "../../ui/RevealText";

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
  {
    name: "Mered Tilahun",
    role: "Executive Producer",
    img: "https://picsum.photos/seed/team8/400/400",
  },
  {
    name: "Selamawit Assefa",
    role: "Production Designer",
    img: "https://picsum.photos/seed/team9/400/400",
  },
  {
    name: "Yohannes Hailu",
    role: "Colorist & DIT",
    img: "https://picsum.photos/seed/team10/400/400",
  },
  {
    name: "Tsion Kebede",
    role: "Assistant Director",
    img: "https://picsum.photos/seed/team11/400/400",
  },
  {
    name: "Abraham Bekele",
    role: "Lighting Technician / Gaffer",
    img: "https://picsum.photos/seed/team12/400/400",
  },
  {
    name: "Beti Solomon",
    role: "Costume & Wardrobe",
    img: "https://picsum.photos/seed/team13/400/400",
  },
  {
    name: "Dawit Mengistu",
    role: "Production Manager",
    img: "https://picsum.photos/seed/team14/400/400",
  },
  {
    name: "Hanna Mekonnen",
    role: "Makeup Artist",
    img: "https://picsum.photos/seed/team15/400/400",
  },
  {
    name: "Tamirat Alemu",
    role: "Boom Operator",
    img: "https://picsum.photos/seed/team16/400/400",
  },
];

const desktopMargins = ["mt-0", "lg:mt-15", "lg:mt-25", "lg:mt-10"];

export default function AboutTeam() {
  return (
    <section className="py-20 lg:py-28 border-t border-border bg-surface px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <RevealText
            text="THE TEAM"
            tag="span"
            trigger="onScroll"
            delay={0.2}
            className="font-mono text-center text-accent font-bold text-sm tracking-widest uppercase block mb-4"
          />
          <RevealText
            text="The people behind the lens."
            tag="h2"
            trigger="onScroll"
            delay={0.2}
            className="text-3xl text-center sm:text-4xl md:text-5xl font-display font-black tracking-tight text-primary"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1.0],
                delay: (i % 4) * 0.15,
              }}
              className="flex flex-col items-center text-center cursor-pointer h-150 group"
            >
              <div
                className={`w-full h-100 overflow-hidden mb-6 transition-colors duration-300 shadow-card mt-0 ${desktopMargins[i % 4]}`}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale opacity-80 transition-all duration-500 ease-spring group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
              <h3 className="text-md font-display font-bold mb-2 text-primary">
                {member.name}
              </h3>
              <p className="text-secondary text-xs max-w-[25ch]">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
