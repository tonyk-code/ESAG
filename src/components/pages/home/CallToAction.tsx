import { Link } from "react-router";

export default function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/2 h-full bg-accent opacity-10 blur-[120px] -translate-y-1/2 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-surface-alt border border-border rounded-2xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center md:text-left max-w-xl text-primary leading-tight">
            Every great film starts with a conversation.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-canvas font-semibold rounded-md text-lg transition-colors whitespace-nowrap shadow-md"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
}
