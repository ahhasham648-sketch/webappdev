// Home page introduces the portfolio and provides a mission statement for the developer.
// It includes links to the About Me and Projects pages, as well as a brief overview of the developer's goals and approach to learning and building projects.

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <p className="home-eyebrow">COMP229 React Portfolio</p>
        <h2>Welcome to my personal portfolio.</h2>
        <p className="home-intro">
          I am building a clean, professional space to introduce who I am,
          highlight my coursework, and share the projects I am developing as a
          student.
        </p>
        
        <div className="home-actions" aria-label="Portfolio sections">
          {/* about me button*/}
          <Link className="button primary-button" to="/about">
            About Me
          </Link>
          {/* projects button*/}
          <Link className="button secondary-button" to="/project">
            View Projects
          </Link>
        </div>
      </section>
       {/* mission statement section */}
      <section className="mission-panel" aria-labelledby="mission-title">
        <p className="section-label">Mission Statement</p>
        <h3 id="mission-title">Learning with purpose, building with care.</h3>
        <p>
          My mission is to keep improving as a developer by creating practical,
          user-friendly web experiences that combine strong technical skills,
          clear communication, and thoughtful design.
        </p>
      </section>
    </main>
  );
}
