import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="website">
      {/* Navigation */}
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">A</span>
          ARV
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
            Discover ARV Technologies
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
          <span className="eyebrow">OUR PRODUCTS</span>
          <h2>Software with a purpose.</h2>
          <p>Our products are designed around real problems.</p>
        </div>

        <div className="product-card">
          <div className="product-info">
            <span className="status">AVAILABLE</span>
            <h3>Teacher Management System</h3>
            <p>
              Manage students, calculate marks and generate academic reports
              with a ready-to-use platform for teachers.
            </p>
            <a
              href="https://nexora-teacher.pages.dev/"
              className="primary-button"
            >
              ARV Teacher
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

        <div className="play-section-heading">
          <span className="eyebrow">A FUTURE PRODUCT</span>
          <h2>Learn Through Play</h2>
        </div>

        <div className="product-card play-card">
          <div className="product-info">
            <span className="status">Coming Soon</span>
            <h3>ARV Play</h3>
            <p>
              Interactive educational games designed to make learning
              enjoyable. Develop logical thinking, problem-solving, creativity,
              memory, mathematics, and other valuable skills through gameplay.
            </p>
            <p className="play-plan">
              ARV plans to develop educational games that combine learning
              and entertainment, including:
            </p>
            <ul className="play-categories">
              <li>Logic and Brain Games</li>
              <li>Mathematics Games</li>
              <li>Memory and Concentration Games</li>
              <li>Programming and Coding Games</li>
              <li>Science Learning Games</li>
              <li>Problem-Solving Challenges</li>
              <li>General Knowledge Games</li>
            </ul>
          </div>

          <div className="play-visual" aria-hidden="true">
            <div className="play-orbit play-orbit-outer"></div>
            <div className="play-orbit play-orbit-inner"></div>
            <div className="play-token play-token-one">+</div>
            <div className="play-token play-token-two">◇</div>
            <div className="play-token play-token-three">●</div>
            <div className="play-core">A</div>
            <span className="play-visual-label">LEARN · PLAY · GROW</span>
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
        <span className="eyebrow">CONTACT ARV</span>
        <h2>Let's solve something meaningful.</h2>
        <p>Have a problem worth solving? We'd like to hear about it.</p>
        <a
          href="mailto:1nexoraofficial@gmail.com"
          className="primary-button"
        >
          1nexoraofficial@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo">
          <span className="logo-icon">A</span>
          ARV
        </a>
        <p>Building software. Solving problems.</p>
        <a
          className="footer-email"
          href="mailto:1nexoraofficial@gmail.com"
        >
          1nexoraofficial@gmail.com
        </a>
        <span>
          © {new Date().getFullYear()} ARV Technologies. Built with purpose.
        </span>
      </footer>
    </div>
  );
}

export default Home;
