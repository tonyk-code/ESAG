import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-primary border-t border-border/40 mt-auto w-full text-white selection:bg-accent selection:text-white">
      <div className="w-full max-w-350 mx-auto px-[clamp(1.5rem,5vw,6rem)] py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="font-display font-extrabold text-xl text-white tracking-tight hover:text-accent transition-colors"
          >
            ESSAG
          </Link>
          <p className="text-sm text-secondary max-w-[32ch] leading-relaxed">
            Creating beauty than ever before[cite: 1].
          </p>
          <ul className="flex gap-4 mt-2">
            {[
              { href: "#", label: "Facebook", short: "FB" },
              { href: "#", label: "YouTube", short: "YT" },
              { href: "#", label: "Instagram", short: "IG" },
            ].map(({ href, label, short }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="text-xs text-secondary hover:text-accent tracking-wide transition-colors"
                >
                  {short}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-secondary/60 mb-4">
            Explore
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/work", label: "Work" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-secondary hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-secondary/60 mb-4">
            Services
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { to: "/services/film", label: "Film Production" },
              { to: "/services/documentary", label: "Documentary" },
              { to: "/services/music-video", label: "Music Video" },
              { to: "/services/tv-commercials", label: "TV & Commercials" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-secondary hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-secondary/60 mb-4">
            Get in Touch
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="mailto:essagfilm33@gmail.com"
                className="text-sm text-secondary hover:text-accent transition-colors break-all"
              >
                essagfilm33@gmail.com[cite: 1]
              </a>
            </li>
            <li>
              <a
                href="tel:+251911221602"
                className="text-sm text-secondary hover:text-accent transition-colors"
              >
                +251 911 221 602[cite: 1]
              </a>
            </li>
            <li className="text-sm text-secondary leading-relaxed">
              Addis Ababa, Ethiopia
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-350 mx-auto px-[clamp(1.5rem,5vw,6rem)] border-t border-border/20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-secondary/50">
          &copy; {new Date().getFullYear()} ESSAG Film Production. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
