import { Link } from "react-router";
import { RevealText } from "../../ui/RevealText";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  path: string;
  imageUrl: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "film-production",
    title: "Film Production",
    description:
      "Award-winning film production services delivering compelling feature films, cinematic storytelling, and visually stunning productions crafted to captivate audiences across local and international screens.",
    path: "/services/film",
    imageUrl:
      "https://images.unsplash.com/photo-1596483941213-f9d3d65cf52d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "documentary-production",
    title: "Documentary Production",
    description:
      "Research-driven documentary production focused on authentic storytelling, creating powerful narratives for NGOs, international organizations, broadcasters, and audiences seeking meaningful real-world impact.",
    path: "/services/documentary",
    imageUrl:
      "https://images.unsplash.com/photo-1761370981309-219ac22752af?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "music-video-production",
    title: "Music Video Production",
    description:
      "Creative music video production combining cinematic visuals, innovative concepts, and dynamic direction to produce unforgettable performances for Ethiopia's leading artists and emerging talent.",
    path: "/services/music-video",
    imageUrl:
      "https://images.unsplash.com/photo-1669892977943-bff31e658d65?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "tv-commercials-stills",
    title: "TV, Commercials & Stills",
    description:
      "Professional commercial production and photography delivering striking television advertisements, brand campaigns, and premium still imagery that strengthens identity and engages audiences across platforms.",
    path: "/services/tv-commercials",
    imageUrl:
      "https://images.unsplash.com/photo-1616418625298-baef98bc34f8?w=800&auto=format&fit=crop&q=80",
  },
];

export default function ServicesOverview() {
  return (
    <section className="relative w-full bg-canvas py-site-margin text-primary selection:bg-accent selection:text-white border-b border-border">
      <div className="max-w-(--max-width-main) mx-auto px-site-margin mb-16 md:mb-24">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-bold tracking-[0.3em] text-accent uppercase">
              What We Do
            </span>
          </div>

          <RevealText
            text={"Capabilities"}
            tag="h2"
            trigger="onScroll"
            delay={0.1}
            className="font-display text-4xl md:text-6xl font-black tracking-tight uppercase leading-none mb-6"
          />

          <p className="font-body text-base md:text-lg text-secondary leading-relaxed">
            We bring precision engineering and high-end cinematic vision to
            every frame — forged from a dedicated creative process to accomplish
            highly impactful visual stories.
          </p>
        </div>
      </div>

      <div className="max-w-(--max-width-main) mx-auto px-site-margin flex flex-col gap-24 md:gap-32">
        {SERVICES_DATA.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-site-gutter items-center group/row"
            >
              <div
                className={`w-full lg:col-span-6 relative aspect-video rounded-sm overflow-hidden bg-surface-alt shadow-card ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Link
                  to={item.path}
                  className="block w-full h-full relative group/video"
                >
                  <div className="absolute inset-0 z-10 bg-black/10 transition-colors duration-500 group-hover/video:bg-black/0" />
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover scale-100 transition-transform duration-700 ease-out group-hover/row:scale-103"
                  />
                </Link>
              </div>

              <div
                className={`flex flex-col lg:col-span-6 justify-center ${
                  isEven ? "lg:order-2 lg:pl-12" : "lg:order-1 lg:pr-12"
                }`}
              >
                <h3 className="font-display text-2xl md:text-6xl font-bold text-primary tracking-tight uppercase mb-4">
                  {item.title}
                </h3>

                <p className="font-body text-sm md:text-base text-secondary leading-relaxed mb-8">
                  {item.description}
                </p>

                <div className="flex">
                  <Link
                    to={item.path}
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-accent px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-primary transition-all duration-200 hover:scale-105 hover:text-white"
                  >
                    <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand scale-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[8]" />

                    <span className="relative z-10">Explore Workspace</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
