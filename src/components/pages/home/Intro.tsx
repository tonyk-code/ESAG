import { Link } from "react-router";
import { RevealText } from "../../ui/RevealText";

export default function Intro() {
  return (
    <section
      className="w-full bg-brand relative overflow-hidden text-white"
      data-scroll-section="true"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-center">
        <div className="w-full lg:w-[90%] grid grid-cols-1 lg:grid-cols-2 relative border-b border-white/10 lg:border-b-0">
          <div className="hidden lg:block absolute top-0 left-[-5%] right-[-5%] h-px bg-white/10" />
          <div className="hidden lg:block absolute top-0 left-1/2 w-px h-full bg-white/10" />

          <div className="py-16 md:py-20 lg:py-28 flex flex-col justify-center items-start pr-0 lg:pr-16">
            <span className="font-mono text-accent text-lg md:text-xl font-bold tracking-widest uppercase mb-6 block">
              WHO WE ARE
            </span>

            <RevealText
              text={"Ethiopia's film house."}
              tag="h2"
              trigger="onScroll"
              delay={0.1}
              className="font-display font-black text-white text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tighter mb-10"
            />

            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-mono font-bold uppercase tracking-wider text-sm transition-colors duration-300 shadow-lg"
            >
              About Us
            </Link>
          </div>

          <div className="py-12 pt-12 md:py-20 lg:py-28 lg:pt-28 flex flex-col justify-center lg:pl-16 border-t border-white/10 lg:border-t-0">
            <div className="max-w-xl">
              <p className="font-body text-white/80 text-base md:text-lg leading-relaxed whitespace-pre-line">
                For over two decades, ESSAG has been at the forefront of
                Ethiopian cinema and media. We don't just point cameras; we
                craft narratives that resonate locally and translate globally.
                From award-winning feature films to impactful NGO documentaries,
                our commitment to the craft remains unchanged.
                {"\n\n"}
                We build stories that combine deep emotion with technical
                precision. Every project becomes a collaboration between vision
                and execution, screen and audience, imagination and legacy
                impact. Our house of experienced directors, visual artists, and
                fixing support works carefully to leave absolute markers in
                cinematic storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
