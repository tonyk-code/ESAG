export default function Clients() {
  const clients: string[] = [
    "Save the Children",
    "United Nations",
    "African Union",
    "European Union",
    "UNDP",
    "Concern Ethiopia",
    "CISP",
    "Pact Ethiopia",
  ];

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="font-mono text-accent font-bold text-sm tracking-widest uppercase block mb-12 text-center">
          TRUSTED BY
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {clients.map((client, i) => (
            <div
              key={i}
              className="font-display font-bold text-xl md:text-2xl text-center text-primary"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
