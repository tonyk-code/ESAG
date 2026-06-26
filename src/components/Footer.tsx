import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-surface mt-auto border-t border-border">
      <div className="w-full max-w-350 mx-auto px-[clamp(1.5rem,5vw,6rem)] py-16 grid grid-cols-[2fr_1fr_1fr_1fr] gap-12">
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="font-display font-extrabold text-xl text-primary tracking-tight"
          >
            ESSAG
          </Link>
          <p className="text-sm text-secondary max-w-[32ch] leading-relaxed">
            Creating beauty than ever before.
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
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.04em] text-disabled mb-4">
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
                  className="text-sm text-secondary hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.04em] text-disabled mb-4">
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
                  className="text-sm text-secondary hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.04em] text-disabled mb-4">
            Get in Touch
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="mailto:essagfilm33@gmail.com"
                className="text-sm text-secondary hover:text-accent transition-colors break-all"
              >
                essagfilm33@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+251911221602"
                className="text-sm text-secondary hover:text-accent transition-colors"
              >
                +251 911 221 602
              </a>
            </li>
            <li className="text-sm text-secondary leading-relaxed">
              Addis Ababa, Ethiopia
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-350 mx-auto px-[clamp(1.5rem,5vw,6rem)] border-t border-border py-6 flex items-center justify-between">
        <p className="text-xs text-disabled">
          &copy; {new Date().getFullYear()} ESSAG Film Production. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
