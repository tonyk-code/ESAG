import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { name: "Film Production", path: "/services/film" },
    { name: "Documentary", path: "/services/documentary" },
    { name: "Music Video", path: "/services/music-video" },
    { name: "TV & Commercials", path: "/services/tv-commercials" },
  ];

  const isServicesActive = location.pathname.startsWith("/services");
  const activeLinkClass = "text-primary border-b-2 border-accent pb-[2px]";
  const inactiveLinkClass =
    "text-secondary hover:text-primary transition-colors duration-200";

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
      className={`fixed top-0 inset-x-0 h-16 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-canvas/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-350 mx-auto px-[clamp(1.5rem,5vw,6rem)] h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-display font-extrabold text-2xl text-primary tracking-tight"
        >
          ESSAG
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeLinkClass : inactiveLinkClass
            }
          >
            About
          </NavLink>

          {/* Services dropdown — CSS hover, no state needed on desktop */}
          <div className="relative group">
            <Link
              to="/services"
              className={`flex items-center gap-1 transition-colors duration-200 hover:text-primary ${
                isServicesActive ? activeLinkClass : "text-secondary"
              }`}
            >
              Services
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            {/* Dropdown panel */}
            <div className="absolute top-full left-0 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
              <div className="bg-surface border border-border rounded-2xl shadow-card p-2 w-56 flex flex-col gap-1">
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm rounded-lg transition-colors duration-200 hover:bg-surface-alt hover:text-accent ${
                        isActive
                          ? "text-accent bg-surface-alt"
                          : "text-secondary"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? activeLinkClass : inactiveLinkClass
            }
          >
            Work
          </NavLink>

          <NavLink
            to="/clients"
            className={({ isActive }) =>
              isActive ? activeLinkClass : inactiveLinkClass
            }
          >
            Clients
          </NavLink>
        </nav>

        {/* Right side — CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 min-h-11 rounded-md bg-accent hover:bg-accent-hover text-canvas font-semibold text-sm transition-colors cursor-pointer relative overflow-hidden"
          >
            Start a Project
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
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-55"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              className="fixed top-0 right-0 bottom-0 w-[min(360px,100vw)] bg-surface z-60 flex flex-col"
            >
              {/* Drawer header */}
              <div className="h-16 flex items-center justify-between px-6 border-b border-border shrink-0">
                <Link
                  to="/"
                  className="font-display font-extrabold text-xl text-primary tracking-tight"
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

              {/* Drawer links */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                <Link
                  to="/about"
                  className="text-2xl font-display font-bold text-primary"
                >
                  About
                </Link>

                <div className="flex flex-col gap-3">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <Link
                      to="/services"
                      className="text-2xl font-display font-bold text-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                      }}
                    >
                      Services
                    </Link>
                    <ChevronDown
                      className={`w-6 h-6 text-secondary transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-3 pl-4 border-l border-border pt-1">
                          {serviceLinks.map((link) => (
                            <Link
                              key={link.path}
                              to={link.path}
                              className="text-base text-secondary hover:text-accent transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/work"
                  className="text-2xl font-display font-bold text-primary"
                >
                  Work
                </Link>

                <Link
                  to="/clients"
                  className="text-2xl font-display font-bold text-primary"
                >
                  Clients
                </Link>

                <Link
                  to="/contact"
                  className="text-2xl font-display font-bold text-primary"
                >
                  Contact
                </Link>

                {/* CTA at bottom of drawer */}
                <div className="mt-auto pt-8">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center w-full h-14 rounded-md bg-accent hover:bg-accent-hover text-canvas font-semibold text-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Start a Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
