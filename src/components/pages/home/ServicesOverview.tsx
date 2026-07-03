import { motion } from "framer-motion";
import { Link } from "react-router";

// ─── Types & Interfaces ──────────────────────────────────────────────────────

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  path: string;
  imageUrl: string;
}

// ─── Production Company Content Data ─────────────────────────────────────────

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "film-production",
    title: "Film Production",
    description: "Award-winning cinema and feature films built for global screens.",
    path: "/services/film",
    imageUrl: "https://images.unsplash.com/photo-1596483941213-f9d3d65cf52d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "documentary-production",
    title: "Documentary Production",
    description: "Research-led stories crafted for NGOs and global organizations.",
    path: "/services/documentary",
    imageUrl: "https://images.unsplash.com/photo-1761370981309-219ac22752af?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "music-video-production",
    title: "Music Video Production",
    description: "Over 200 high-energy visuals created for Ethiopia's biggest artists.",
    path: "/services/music-video",
    imageUrl: "https://images.unsplash.com/photo-1669892977943-bff31e658d65?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "tv-commercials-stills",
    title: "TV, Commercials & Stills",
    description: "High-impact brand campaigns and precision commercial photography.",
    path: "/services/tv-commercials",
    imageUrl: "https://images.unsplash.com/photo-1616418625298-baef98bc34f8?w=800&auto=format&fit=crop&q=80",
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

export default function ServicesOverview() {
  return (
    <section className="relative w-full bg-canvas py-site-margin text-primary selection:bg-accent selection:text-white border-b border-border">
      
      {/* ─── Header Block ─── */}
      <div className="max-w-(--max-width-main) mx-auto px-site-margin mb-16 md:mb-24">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          
          {/* Subtitle Accent Element */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-bold tracking-[0.3em] text-accent uppercase">
              What We Do
            </span>
          </div>

          {/* Main Title & Description */}
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight uppercase leading-none mb-6">
            Four crafts. One house.
          </h2>
          <p className="font-body text-base md:text-lg text-secondary leading-relaxed">
            We bring precision engineering and high-end cinematic vision to every frame — forged from a dedicated creative process to accomplish highly impactful visual stories.
          </p>
        </div>
      </div>

      {/* ─── Alternating Grid Track List ─── */}
      <div className="max-w-(--max-width-main) mx-auto px-site-margin flex flex-col gap-24 md:gap-32">
        {SERVICES_DATA.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-site-gutter items-center group/row"
            >
              
              {/* Media Wrapper (Left column layout if even, Right column layout if odd) */}
              <div 
                className={`w-full lg:col-span-6 relative aspect-video rounded-sm overflow-hidden bg-surface-alt shadow-card ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Link to={item.path} className="block w-full h-full relative group/video">
                  <div className="absolute inset-0 z-10 bg-black/10 transition-colors duration-500 group-hover/video:bg-black/0" />
                  <img 
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover scale-100 transition-transform duration-700 ease-out group-hover/row:scale-103"
                  />
                </Link>
              </div>

              {/* Text Description Container */}
              <div 
                className={`flex flex-col lg:col-span-6 justify-center ${
                  isEven ? "lg:order-2 lg:pl-12" : "lg:order-1 lg:pr-12"
                }`}
              >
                <span className="font-mono text-xs text-accent font-medium tracking-wider mb-3 block">
                  // CRAFT 0{index + 1}
                </span>
                
                <h3 className="font-display text-2xl md:text-4xl font-bold text-primary tracking-tight uppercase mb-4">
                  {item.title}
                </h3>
                
                <p className="font-body text-sm md:text-base text-secondary leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Animated Premium Button Link */}
                <div className="flex">
                  <Link 
                    to={item.path} 
                    className="relative inline-flex items-center justify-center font-mono text-xs font-bold tracking-widest uppercase border border-border text-primary px-6 py-3 rounded-sm bg-transparent overflow-hidden transition-colors duration-300 hover:text-white group/btn"
                  >
                    <span className="relative z-10">Explore Workspace</span>
                    <motion.div 
                      className="absolute inset-0 bg-accent z-0"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
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