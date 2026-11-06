import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="website">
      {/* Navigation */}
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">N</span>
          NEXORA
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </div>

        <Link to="/contact" className="nav-button">
          Get in touch
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <span className="eyebrow">INDEPENDENT SOFTWARE COMPANY</span>

        <h1>
          Ideas into
          <br />
          <span>useful software.</span>
        </h1>

        <p>
          We create thoughtful digital products that simplify everyday work and
          solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#products" className="primary-button">
            Explore products <span>↗</span>
          </a>
          <a href="#about" className="secondary-button">
            Discover NEXORA
          </a>
        </div>

        <div className="hero-decoration">
          <div className="decoration-circle circle-one"></div>
          <div className="decoration-circle circle-two"></div>
          <div className="decoration-circle circle-three"></div>
          <span className="decoration-text">THINK · BUILD · IMPROVE</span>
        </div>
      </section>

      {/* Products */}
      <section className="section products" id="products">
        <div className="section-heading">
          <span className="eyebrow">WHAT WE'RE BUILDING</span>
          <h2>Software with a purpose.</h2>
          <p>Our products are designed around real problems.</p>
        </div>

        <div className="product-card">
          <div className="product-info">
            <span className="status">IN DEVELOPMENT</span>
            <h3>Teacher Management System</h3>
            <p>
              Simplify student management, marks calculation and academic report
              generation.
            </p>
            <a href="#contact" className="product-link">
              Learn about our vision ↗
            </a>
          </div>

          <div className="product-visual">
            <div className="visual-window">
              <div className="window-top">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="visual-content">
                <div className="visual-sidebar"></div>
                <div className="visual-main">
                  <div className="visual-line"></div>
                  <div className="visual-line short"></div>
                  <div className="visual-boxes">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="visual-table"></div>
                  <div className="visual-table"></div>
                  <div className="visual-table"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section philosophy" id="about">
        <span className="eyebrow">OUR PHILOSOPHY</span>
        <h2>
          Technology isn't about making things complicated.
          <span> It's about making complicated things simple.</span>
        </h2>
        <p>
          We believe useful software should be thoughtful, accessible and built
          around the people who use it.
        </p>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <span className="eyebrow">HAVE AN IDEA?</span>
        <h2>Let's solve something meaningful.</h2>
        <p>Have a problem worth solving? We'd like to hear about it.</p>
        <a href="mailto:hello@nexora.example" className="primary-button">
          Contact us ↗
        </a>
        <small>Contact email will be updated before public launch.</small>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo">
          <span className="logo-icon">N</span>
          NEXORA
        </a>
        <p>Building software. Solving problems.</p>
        <span>© {new Date().getFullYear()} NEXORA. Built with purpose.</span>
      </footer>
    </div>
  );
}

export default Home;
