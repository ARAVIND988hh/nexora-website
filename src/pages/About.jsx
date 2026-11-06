import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <nav className="about-nav">
        <Link to="/" className="logo">
          <span className="logo-icon">N</span>
          NEXORA
        </Link>

        <div className="about-nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </div>

        <Link to="/#contact" className="nav-button">
          Get in touch
        </Link>
      </nav>

      <section className="about-hero">
        <span className="eyebrow">ABOUT NEXORA</span>

        <h1>
          We believe in
          <br />
          <span>making things simpler.</span>
        </h1>

        <p>
          NEXORA is an independent software company focused on building useful
          digital products that solve real-world problems.
        </p>
      </section>

      <section className="about-mission">
        <span className="eyebrow">OUR MISSION</span>

        <h2>Technology should make life easier, not more complicated.</h2>

        <p>
          We want to identify everyday problems and turn them into simple,
          reliable and accessible software. Our focus is on usefulness,
          thoughtful design and continuous improvement.
        </p>
      </section>

      <section className="about-values">
        <span className="eyebrow">WHAT WE BELIEVE</span>
        <h2>Our principles.</h2>

        <div className="values-grid">
          <div className="value-card">
            <span>01</span>
            <h3>Simplicity</h3>
            <p>Good software makes complicated tasks easier.</p>
          </div>

          <div className="value-card">
            <span>02</span>
            <h3>Usefulness</h3>
            <p>Every product should solve a genuine problem.</p>
          </div>

          <div className="value-card">
            <span>03</span>
            <h3>Improvement</h3>
            <p>We learn, listen and improve continuously.</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Have a problem worth solving?</h2>
        <p>Let's explore what we can build together.</p>
        <Link to="/contact" className="primary-button">
          Get in touch ↗
        </Link>
      </section>

      <footer className="about-footer">
        <strong>NEXORA</strong>
        <span>Building software. Solving problems.</span>
        <span>© {new Date().getFullYear()} NEXORA.</span>
      </footer>
    </div>
  );
}

export default About;
