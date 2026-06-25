import { useState } from "react";
import {motion} from 'motion/react'

export default function Test() {
  // --- Theme Mode State ---
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    const html = document.documentElement;
    if (nextTheme === "light") {
      html.classList.add("light");
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
      html.classList.remove("light");
    }
  };

  // --- Interactive States for Testing ---
  const [activeTab, setActiveTab] = useState("all");
  const [formError, setFormError] = useState(false);
  const [simulateScrollReveal, setSimulateScrollReveal] = useState(true);

  return (
    <>
      {/* ==========================================
          NAV BAR COMPONENT
         ========================================== */}

      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo">ESSAG FILM</div>

          <div className="nav-right">
            <ul className="nav-links">
              <li>
                <a href="#hero" aria-current="page">
                  Showcase
                </a>
              </li>
              <li>
                <a href="#components">Components</a>
              </li>
              <li>
                <a href="#layouts">Layouts</a>
              </li>
            </ul>

            {/* Mode Toggle Button testing your specific CSS rules */}
            <button
              className="mode-toggle"
              onClick={toggleTheme}
              aria-label="Toggle colour mode"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            >
              <span className="mode-icon mode-icon--sun">&#9728;</span>
              <span className="mode-icon mode-icon--moon">&#9790;</span>
            </button>

            <button
              className="btn btn-ghost"
              style={{
                minHeight: "unset",
                padding: "var(--space-2) var(--space-4)",
              }}
            >
              Portal
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container Containerizing all design blocks */}
      <main className="container" style={{ paddingTop: "6rem" }}>
        {/* Toggle Utility Box for Debugging Components */}

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Framer Motion is ready!</h1>
      </motion.div>
        <div
          className="card"
          style={{
            padding: "var(--space-4)",
            marginBottom: "var(--space-8)",
            border: "1px dashed var(--color-accent)",
          }}
        >
          <h3
            className="text-mono text-accent"
            style={{ marginBottom: "var(--space-2)" }}
          >
            ⚡ Test Controls
          </h3>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Current Mode Status:{" "}
            <strong className="text-mono">{theme.toUpperCase()}</strong>. Use
            the navbar toggle or click below to verify systemic runtime
            transitions.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)" }}>
            <button
              className="btn btn-primary"
              onClick={() => setSimulateScrollReveal((prev) => !prev)}
            >
              {simulateScrollReveal
                ? "Reset Viewport Revelations"
                : "Trigger Viewport Revelations"}
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => setFormError((prev) => !prev)}
            >
              Toggle Error States ({formError ? "On" : "Off"})
            </button>
          </div>
        </div>

        {/* ==========================================
            HERO SECTION
           ========================================== */}
        <section id="hero" className="hero">
          <div className="hero-content">
            <h1 className="hero-headline">
              Cinematic
              <span
                className="inline-img skeleton"
                style={{ display: "inline-block", verticalAlign: "middle" }}
              />
              Vision.
            </h1>
            <p className="hero-description">
              Testing body configurations, paragraph metrics, scale constraints,
              and functional baseline tracking parameters. Max width rule
              bounded up to 65 characters safely.
            </p>
            <div className="hero-cta-group">
              <button className="btn btn-primary">Primary Action</button>
              <button className="btn btn-ghost">Secondary Action</button>
              <button className="btn btn-primary" disabled>
                Disabled State
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div
              className="card skeleton-card skeleton"
              style={{ width: "100%", maxWidth: "500px" }}
            />
          </div>
        </section>

        <hr
          style={{
            border: "none",
            height: "1px",
            backgroundColor: "var(--color-border)",
          }}
        />

        {/* ==========================================
            STATS GRID COMPONENT
           ========================================== */}
        <section className="section">
          <div className="section-header">
            <div className="title-block">
              <span className="eyebrow">Performance Matrix</span>
              <h2>Data Threshold Metrics</h2>
            </div>
            <p>
              Testing structural edge boundaries, pixel borders, and font
              variable alignment counters across dynamic containers.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">
                24<span className="accent">fps</span>
              </div>
              <div className="stat-label">True Native Capture</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8K</div>
              <div className="stat-label">Master Definition Format</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                120<span className="accent">dB</span>
              </div>
              <div className="stat-label">Acoustic Ceiling Bounds</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                0.04<span className="accent">%</span>
              </div>
              <div className="stat-label">Optical Distortion Max</div>
            </div>
          </div>
        </section>

        {/* ==========================================
            PORTFOLIO GRID & FILTER TABS
           ========================================== */}
        <section id="components" className="section">
          <div className="section-header">
            <div className="title-block">
              <span className="eyebrow">Archival Matrix</span>
              <h2>Production Indexes</h2>
            </div>
            <div>
              <ul className="filter-tabs">
                {["all", "feature", "documentary", "commercial"].map((tab) => (
                  <li key={tab}>
                    <button
                      className={`filter-tab ${activeTab === tab ? "active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Portfolio Layout Testing (Featured & Regular variants) */}
          <div className="portfolio-grid">
            {/* Featured Item Box */}
            <div className="card card-portfolio card-featured">
              <div className="card-thumb">
                <div
                  className="skeleton"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="card-body">
                <span className="card-category">Featured Production</span>
                <h3 className="card-title">
                  Chronicles of Light and Shadows (2026)
                </h3>
                <span className="card-meta">
                  Format: 70mm Anamorphic · Duration: 142 mins
                </span>
                <div className="card-iptc">
                  IPTC Meta Attribution: ESSAG Production Archive · Master
                  Negative Core
                </div>
              </div>
            </div>

            {/* Standard Item Box 1 */}
            <div className="card card-portfolio">
              <div className="card-thumb">
                <div
                  className="skeleton"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="card-body">
                <span className="card-category">Documentary Strip</span>
                <h3 className="card-title">Projector Optics</h3>
                <span className="card-meta">Format: Super 35 · 45 mins</span>
              </div>
            </div>

            {/* Standard Item Box 2 */}
            <div className="card card-portfolio">
              <div className="card-thumb">
                <div
                  className="skeleton"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="card-body">
                <span className="card-category">Commercial Reel</span>
                <h3 className="card-title">
                  Aesthetic Minimalist Architecture
                </h3>
                <span className="card-meta">
                  Format: Digital Arri Alexa · 60s
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            FORM ELEMENTS & UTILITY SKELETONS
           ========================================== */}
        <section className="section">
          <div className="section-header">
            <div className="title-block">
              <span className="eyebrow">Interactive Interfaces</span>
              <h2>Component Form Assertions</h2>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-12)",
            }}
          >
            {/* Forms testing markup */}
            <div className="card" style={{ padding: "var(--space-8)" }}>
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-4)",
                }}
              >
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Yesehak Kebere"
                  />
                  <span className="form-helper">
                    Enter title metadata catalog matching ID signatures.
                  </span>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Project Domain Classification
                  </label>
                  <select className="form-select">
                    <option value="cv">Computer Vision Rendering</option>
                    <option value="film">Cinematic Post Production</option>
                    <option value="web">Premium UX Design Language</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Transmission Log Details</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Write logs here..."
                  ></textarea>
                  {formError && (
                    <span className="form-error">
                      Critical Exception: Data submission stream missing
                      authentic keys.
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Dispatch Manifest
                </button>
              </form>
            </div>

            {/* Skeletons and Text Typography Matrix */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-6)",
              }}
            >
              <div>
                <span className="text-caption">Typography Verification</span>
                <div style={{ marginTop: "var(--space-2)" }}>
                  <p>
                    <span className="text-mono">.text-mono:</span> JetBrains
                    Mono Active Token Set
                  </p>
                  <p>
                    <span className="text-accent">.text-accent:</span> Projector
                    Gold Core Accent Tone
                  </p>
                  <p>
                    <strong>Strong Block Element:</strong> Validates bold text
                    rendering parameters.
                  </p>
                </div>
              </div>

              <div>
                <span className="text-caption">
                  Skeleton Async Load Assertions
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-3)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  <div
                    className="skeleton skeleton-text"
                    style={{ width: "100%" }}
                  />
                  <div
                    className="skeleton skeleton-text"
                    style={{ width: "85%" }}
                  />
                  <div
                    className="skeleton skeleton-text"
                    style={{ width: "40%" }}
                  />
                </div>
              </div>

              <div>
                <span className="text-caption">
                  Stagger Animation Assertions
                </span>
                <div
                  className={`stagger-children ${simulateScrollReveal ? "animate-up is-visible" : "animate-up"}`}
                  style={{
                    display: "flex",
                    gap: "var(--space-2)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--color-surface-alt)",
                      borderRadius: "4px",
                    }}
                  />
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--color-surface-alt)",
                      borderRadius: "4px",
                    }}
                  />
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--color-surface-alt)",
                      borderRadius: "4px",
                    }}
                  />
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--color-surface-alt)",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            TEAM & LOGO WALLS
           ========================================== */}
        <section id="layouts" className="section">
          <div className="section-header">
            <div className="title-block">
              <span className="eyebrow">Collective Module</span>
              <h2>Team & Client Structuring</h2>
            </div>
          </div>

          {/* Team Array Testing */}
          <div
            className="team-list"
            style={{ marginBottom: "var(--space-12)" }}
          >
            {[
              { name: "Executive Producer", role: "Creative Direction" },
              { name: "Cinematographer", role: "Director of Photography" },
              { name: "Lead Architect", role: "Visual Engineering" },
            ].map((member, idx) => (
              <div className="team-member" key={idx}>
                <div
                  className="skeleton"
                  style={{ width: "4rem", height: "4rem", borderRadius: "50%" }}
                />
                <div>
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logo Grid Testing */}
          <div className="clients-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="client-logo" key={i}>
                <div
                  style={{
                    width: "80px",
                    height: "24px",
                    background: "var(--color-text-disabled)",
                    opacity: 0.3,
                    borderRadius: "2px",
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            Q&A CONFIGURATIONS (Always visible SEO variant)
           ========================================== */}
        <section className="section">
          <div className="section-header">
            <div className="title-block">
              <span className="eyebrow">Fulfillment Diagnostics</span>
              <h2>Structural QA System</h2>
            </div>
          </div>

          <div className="qa-grid">
            <div className="qa-card">
              <div className="qa-question">
                Why does this framework avoid standard accordion systems?
              </div>
              <div className="qa-answer">
                To maintain maximum accessibility and optimize crawlable index
                schemas, information remains completely visible across semantic
                query components.
              </div>
            </div>
            <div className="qa-card">
              <div className="qa-question">
                How does theme color handling remain deterministic?
              </div>
              <div className="qa-answer">
                Explicit root declarations lock token variables contextually
                using manual classes (`.light` / `.dark`) while preserving
                hardware media preferences natively.
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            CTA BANNER ACTION CARD
           ========================================== */}
        <section className="section">
          <div className="cta-banner">
            <div>
              <h2
                className="cta-title"
                style={{ fontSize: "var(--text-section)" }}
              >
                Ready to capture master scale production sequences?
              </h2>
              <p style={{ marginTop: "var(--space-2)" }}>
                Let us establish system guidelines for your upcoming deployment
                architecture arrays.
              </p>
            </div>
            <div>
              <button className="btn btn-primary">Initialize Pipeline</button>
            </div>
          </div>
        </section>
      </main>

      {/* ==========================================
          FOOTER COMPONENT
         ========================================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="footer-logo">ESSAG STUDIO</div>
              <p className="footer-tagline">
                Crafting premium, high-frequency digital experiences with
                meticulous attention to cinematic detail.
              </p>
            </div>
            <div>
              <div className="footer-col-title">Archive</div>
              <ul className="footer-links">
                <li>
                  <a href="#hero">Showcase Reel</a>
                </li>
                <li>
                  <a href="#components">Tokens Matrix</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">System</div>
              <ul className="footer-links">
                <li>
                  <a href="#layouts">Grid Systems</a>
                </li>
                <li>
                  <a href="#components">Forms Core</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Identity</div>
              <ul className="footer-links">
                <li>
                  <a href="#hero">Aesthetics Profile</a>
                </li>
                <li>
                  <a href="#layouts">Team Manifest</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; 2026 ESSAG Film Production. System verification validated.
            </p>
            <ul className="footer-socials">
              <li>
                <a href="#github">GH / TONYK-CODE</a>
              </li>
              <li>
                <a href="#index">V1.0.0-PROD</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
