import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="My Portfolio home">
          <img src="/portfolio-logo.png" alt="Portfolio logo" />
          <span>My Portfolio</span>
        </Link>

        <nav aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About me</Link>
          <Link to="/education">Education</Link>
          <Link to="/project">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <hr />
    </div>
  );
}
