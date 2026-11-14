import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <nav className="contact-nav">
        <Link to="/" className="logo">
          <span className="logo-icon">A</span>
          ARV
        </Link>

        <div className="contact-nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <section className="contact-hero">
        <span className="eyebrow">CONTACT ARV</span>

        <h1>
          Let's build something
          <br />
          <span>meaningful.</span>
        </h1>

        <p>
          Have an idea, a problem to solve, or a question about our products?
          We'd like to hear from you.
        </p>
      </section>

      <section className="contact-content">
        <div>
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Every good idea starts with a conversation.</h2>
          <p>
            We're working on useful software that makes everyday tasks simpler.
            Your feedback and suggestions matter.
          </p>
        </div>

        <div className="contact-card">
          <span>01 / PRODUCT ENQUIRIES</span>
          <h3>Teacher Management System</h3>
          <p>Interested in our upcoming product? Get in touch with us.</p>
          <p className="coming-soon">Contact details coming soon.</p>
        </div>
      </section>

      <footer className="contact-footer">
        <strong>ARV Technologies</strong>
        <span>Building software. Solving problems.</span>
        <span>© {new Date().getFullYear()} ARV Technologies.</span>
      </footer>
    </div>
  );
}

export default Contact;
