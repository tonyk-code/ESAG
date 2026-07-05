import { RevealText } from "../../ui/RevealText";

export default function AboutManifesto() {
  return (
    <section className="py-24 lg:py-36 bg-surface border-y border-border/40 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
        <div className="space-y-4">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent/80 block">
            Our Origin
          </span>

          <RevealText
            text="The Manifesto"
            tag="h3"
            trigger="onScroll"
            className="text-4xl lg:text-5xl font-display font-black tracking-tighter text-primary uppercase"
          />
        </div>

        <div className="max-w-[65ch] space-y-8 lg:space-y-10">
          <p className="text-primary text-xl md:text-2xl font-medium leading-relaxed tracking-tight">
            It started with a single story to tell. What began as a small
            ambition quickly grew into Ethiopia's leading film house. For over
            twenty years,{" "}
            <span className="text-accent font-semibold underline decoration-accent/40 underline-offset-4">
              ESSAG Film Production
            </span>{" "}
            has been the quiet force behind the frames that define modern
            Ethiopian cinema.
          </p>
          <p className="text-secondary text-lg md:text-xl leading-relaxed">
            From gripping cinema screens and feature films to impactful,
            research-led NGO documentaries and over two hundred music videos,
            our canvas has expanded, but our core remains untouched. We believe
            that a story told honestly can shift perspectives, bridge divides,
            and echo across generations.
          </p>
          <p className="text-secondary/80 text-lg md:text-xl leading-relaxed italic border-l-2 border-accent/40 pl-6">
            "We don't merely document events; we translate human experience into
            a universal visual language. Whether we are shooting a high-stakes
            TV commercial, capturing an international summit, or grading a
            feature film, it is always the same craft. Always the same care.
            Always ESSAG."
          </p>
        </div>
      </div>
    </section>
  );
}
