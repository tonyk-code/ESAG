import { Link } from "react-router";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section 
      className="w-full bg-primary text-white py-site-margin md:py-32 lg:py-40 flex flex-col items-center justify-center border-t border-b border-border/40 overflow-hidden relative"
      aria-label="Work with ESSAG"
    >
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 pointer-events-none opacity-[0.05] mix-blend-screen filter blur-[120px] rounded-full bg-radial from-accent to-transparent" 
        aria-hidden="true"
      />

      <div className="max-w-(--max-width-main) mx-auto px-site-margin flex flex-col items-center relative z-10">
        
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-body text-base md:text-xl lg:text-2xl font-medium uppercase tracking-wide leading-relaxed max-w-2xl mx-auto text-secondary">
            Creating beauty than ever before. <br className="hidden md:block" />
            Human stories crafted for local and international audiences.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-12 mb-20 lg:mb-24 w-full">
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-none tracking-tighter uppercase text-white select-none">
            Create
          </h2>
          
          <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 relative shrink-0 my-4 lg:my-0 animate-pulse [animation-duration:4s]">
            <svg 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-full stroke-accent stroke-[2px] vector-effect-non-scaling-stroke"
            >
              <path 
                d="M169.232 87.8891L152.367 97.5914L169.232 107.305L135.49 126.721V165.564L118.614 155.851L101.737 146.148L84.8605 136.435L67.9952 146.148H67.9838L51.1186 155.851L34.2419 165.564L17.3653 155.851L0.5 146.148V107.305L17.3653 117.019H17.3766L34.2419 126.721L51.1186 117.019L67.9838 107.305H67.9952L84.8605 97.5914V39.3434L67.9952 29.6297H67.9838L51.1186 19.9274L67.9838 10.2137V10.2023H67.9952L84.8605 0.5L101.737 10.2023V10.2137L118.614 19.9274V78.1754L135.49 68.4731V68.4617L152.367 58.7481L169.232 49.057V87.8891Z" 
                strokeLinejoin="round"
              />
              <path 
                d="M169.228 107.305V146.148L152.352 155.85L135.486 165.564V126.732L152.352 117.018H152.363L169.228 107.305Z" 
                strokeLinejoin="round"
              />
              <path 
                d="M169.23 49.0469V49.0582L152.365 58.7605H152.353L135.488 68.4629V68.4742L118.611 78.1765V58.7605V58.7492V39.3445L135.488 29.6309L152.353 39.3445H152.365L169.23 49.0469Z" 
                strokeLinejoin="round"
              />
              <path 
                d="M84.8605 39.3437V97.5918L67.9952 107.305H67.9838L51.1186 117.019L34.2419 126.721L17.3766 117.019H17.3653L0.5 107.305L17.3653 97.5918L51.1186 78.1758V19.9277L67.9838 29.6301H67.9952L84.8605 39.3437Z" 
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-none tracking-tighter uppercase text-white select-none">
            Stories
          </h2>
        </div>

        <div className="flex">
          <Link 
            to="/contact" 
            className="relative inline-flex items-center justify-center font-mono text-xs md:text-sm font-black tracking-widest uppercase text-white px-8 py-4 md:px-12 md:py-5 rounded-sm bg-accent overflow-hidden transition-colors duration-300 hover:text-primary group"
          >
            <span className="relative z-10">Start Production</span>
            <motion.div 
              className="absolute inset-0 bg-white z-0"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </Link>
        </div>

      </div>
    </section>
  );
}