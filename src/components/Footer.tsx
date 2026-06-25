import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="footer bg-(--color-surface) mt-auto">
      <div className="container footer-inner">
        {/* Brand Column */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo tracking-(--tracking-label)">
            ESSAG
          </Link>
          <p className="footer-tagline">Creating beauty than ever before.</p>
          {/* Social Cluster */}
          <ul className="footer-socials mt-2">
            <li>
              <a href="#" aria-label="Facebook">
                FB
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                YT
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                IG
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">Explore</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-links">
            <li>
              <Link to="/services/film">Film Production</Link>
            </li>
            <li>
              <Link to="/services/documentary">Documentary</Link>
            </li>
            <li>
              <Link to="/services/music-video">Music Video</Link>
            </li>
            <li>
              <Link to="/services/tv-commercials">TV & Commercials</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">Get in Touch</h4>
          <ul className="footer-links">
            <li>
              <a href="mailto:essagfilm33@gmail.com" className="break-all">
                essagfilm33@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+251911221602">+251 911 221 602</a>
            </li>
            <li className="text-sm text-(--color-text-secondary) leading-(--leading-body)">
              Addis Ababa, Ethiopia
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} ESSAG Film Production. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
