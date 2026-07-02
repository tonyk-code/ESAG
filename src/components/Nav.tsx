import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { name: "Film Production", path: "/services/film" },
    { name: "Documentary", path: "/services/documentary" },
    { name: "Music Video", path: "/services/music-video" },
    { name: "TV & Commercials", path: "/services/tv-commercials" },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors duration-200 py-1 relative
     after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-200
     ${isActive ? "text-accent after:w-full" : "text-primary hover:text-accent after:w-0 hover:after:w-full"}`;

  return (
    <header className="sticky top-0 z-50 bg-canvas border-b border-border shadow-card">
      {/* Top Banner Info Bar */}
      <div
        className={`w-full border-b text-secondary/80 text-xs font-mono transition-all duration-200 overflow-hidden ${
          isScrolled
            ? "h-0 border-none opacity-0"
            : "h-9 opacity-100 border-border"
        }`}
      >
        <div className="w-full h-full flex items-center justify-end gap-site-gutter px-site-margin">
          <a
            href="tel:+251911000000"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Phone className="w-3 h-3 text-accent" />
            <span>+251 911 000 000</span>
          </a>
          <span className="text-border">|</span>
          <span className="hidden sm:inline tracking-wider">
            ADDIS ABABA, ETHIOPIA
          </span>
        </div>
      </div>

      <div className="w-full h-15 flex items-center justify-between px-site-margin">
        <Link
          to="/"
          className="font-display font-black text-2xl text-primary tracking-tight"
        >
          ESSAG
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          {/* Services dropdown */}
          <div className="relative group py-2">
            <Link
              to="/services"
              className={`text-sm font-semibold transition-colors duration-200 flex items-center gap-1 ${
                location.pathname.startsWith("/services")
                  ? "text-accent"
                  : "text-primary hover:text-accent"
              }`}
            >
              Services
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
              <div className="bg-canvas border border-border shadow-card p-2 w-56 flex flex-col gap-0.5">
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-surface hover:text-accent ${
                        isActive ? "text-accent bg-surface" : "text-primary"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/work" className={linkClass}>
            Work
          </NavLink>
          <NavLink to="/clients" className={linkClass}>
            Clients
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center px-6 h-11 bg-accent hover:bg-accent-hover text-white font-bold text-xs uppercase tracking-widest transition-colors transition-timing-ease-out duration-200"
          >
            Start A Project
          </Link>

          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-55"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[min(360px,100vw)] bg-canvas z-60 flex flex-col"
            >
              <div className="h-20 flex items-center justify-between px-6 border-b border-border shrink-0">
                <Link
                  to="/"
                  className="font-display font-black text-xl text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  ESSAG
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-primary"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
                <Link
                  to="/about"
                  className="text-xl font-display font-bold text-primary hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                <div className="flex flex-col gap-2">
                  <span className="text-xl font-display font-bold text-primary">
                    Services
                  </span>
                  <div className="flex flex-col gap-3 pl-4 border-l-2 border-border">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="text-sm text-secondary hover:text-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/work"
                  className="text-xl font-display font-bold text-primary hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Work
                </Link>
                <Link
                  to="/clients"
                  className="text-xl font-display font-bold text-primary hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Clients
                </Link>
                <Link
                  to="/contact"
                  className="text-xl font-display font-bold text-primary hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <div className="mt-auto pt-8 border-t border-border">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center w-full h-12 bg-accent hover:bg-accent-hover text-white font-bold text-xs uppercase tracking-widest transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Start A Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
