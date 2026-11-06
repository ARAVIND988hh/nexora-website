import "./Products.css";

function Products() {
  return (
    <div className="products-page">
      <nav className="products-nav">
        <a href="/" className="logo">
          <span className="logo-icon">N</span>
          NEXORA
        </a>

        <div className="products-nav-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
        </div>

        <a href="/contact" className="nav-button">
          Get in touch
        </a>
      </nav>

      <section className="products-hero">
        <span className="eyebrow">OUR PRODUCTS</span>

        <h1>
          Software designed
          <br />
          <span>to solve problems.</span>
        </h1>

        <p>
          We build practical digital tools that make everyday work simpler,
          smarter and more efficient.
        </p>
      </section>

      <section className="products-list">
        <div className="products-card">
          <div className="products-card-info">
            <span className="status">IN DEVELOPMENT</span>

            <h2>Teacher Management System</h2>

            <p>
              A simple platform designed to help teachers manage students,
              academic records, marks and report cards in one place.
            </p>

            <h3>Planned features</h3>

            <ul>
              <li>Student record management</li>
              <li>Marks and grade calculation</li>
              <li>Academic report generation</li>
              <li>Attendance management</li>
            </ul>

            <a href="/#contact" className="primary-button">
              Discuss this product ↗
            </a>
          </div>

          <div className="products-card-visual">
            <div className="product-icon">T</div>
            <h3>Teacher Workspace</h3>
            <p>One place for academic management.</p>

            <div className="mock-stats">
              <div>
                <strong>Students</strong>
                <span>Records</span>
              </div>
              <div>
                <strong>Marks</strong>
                <span>Tracking</span>
              </div>
              <div>
                <strong>Reports</strong>
                <span>Generation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="products-footer">
        <strong>NEXORA</strong>
        <span>Building software. Solving problems.</span>
        <span>© {new Date().getFullYear()} NEXORA.</span>
      </footer>
    </div>
  );
}

export default Products;
