import { motion } from "motion/react";
import { RevealText } from "../../ui/RevealText";

const team = [
  {
    name: "Essayas Gizaw",
    role: "Managing Director, Screenwriter & Director",
    img: "https://images.unsplash.com/photo-1659128103048-e41477d734a5?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Essayas Ahimed",
    role: "Journalist & Narrator",
    img: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Ejigayehu G/Yes",
    role: "Film Editor",
    img: "https://images.unsplash.com/photo-1718392372879-950be2bfe52c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc3fHx8ZW58MHx8fHx8",
  },
  {
    name: "Wubshet Adugna",
    role: "Editor & Graphics Designer",
    img: "https://images.unsplash.com/photo-1579038773867-044c48829161?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
  },
  {
    name: "Zenawork Kassahun",
    role: "Cinematographer",
    img: "https://images.unsplash.com/photo-1665534056605-86a9524ffba7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
  },
  {
    name: "Habitamu Beyene",
    role: "Sound Engineer",
    img: "https://images.unsplash.com/photo-1713819487323-6f12b2b63b9c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8",
  },
  {
    name: "Fanuel Metasebiya",
    role: "Cameraman",
    img: "https://images.unsplash.com/photo-1749365820081-43a01a341356?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk3fHx8ZW58MHx8fHx8",
  },
  {
    name: "Mered Tilahun",
    role: "Executive Producer",
    img: "https://images.unsplash.com/photo-1623813030497-61508d0e0e52?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Selamawit Assefa",
    role: "Production Designer",
    img: "https://images.unsplash.com/photo-1600273759837-a4d4abb62142?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Yohannes Hailu",
    role: "Colorist & DIT",
    img: "https://images.unsplash.com/photo-1683609553620-d85c01bc2ba5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tsion Kebede",
    role: "Assistant Director",
    img: "https://images.unsplash.com/photo-1602442787305-decbd65be507?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  },
  {
    name: "Abraham Bekele",
    role: "Lighting Technician / Gaffer",
    img: "https://images.unsplash.com/photo-1764545973653-94c40d993495?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1NXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Beti Solomon",
    role: "Costume & Wardrobe",
    img: "https://images.unsplash.com/photo-1585798289433-8daa3749619e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
  },
  {
    name: "Dawit Mengistu",
    role: "Production Manager",
    img: "https://images.unsplash.com/photo-1735762020031-d58bff794938?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3M3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hanna Mekonnen",
    role: "Makeup Artist",
    img: "https://images.unsplash.com/photo-1726654368654-52c5033b1239?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8",
  },
  {
    name: "Tamirat Alemu",
    role: "Boom Operator",
    img: "https://images.unsplash.com/photo-1565691084171-2c9d79a29009?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1NXx8fGVufDB8fHx8fA%3D%3D",
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
              className="flex flex-col items-center text-center h-150 group"
            >
              <div
                className={`w-full h-100 overflow-hidden mb-6 transition-colors duration-300 shadow-card mt-0 ${desktopMargins[i % 4]}`}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-40"
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
