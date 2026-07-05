export default function AboutMissionVision() {
  return (
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
            Ethiopian culture and tackle universal themes. We handle every frame
            with precision and purpose.
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
  );
}
