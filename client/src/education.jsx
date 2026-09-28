export default function Education() {
  return (
    <main className="education-page">
      <section className="education-hero">
        <p className="section-label">Education</p>
        <h2>My academic background and current learning path.</h2>
        <p>
        My education is focused on game programming, software development, 
        interactive systems, problem solving,
         and building practical projects through hands-on coursework.
        </p>
      </section>

      <section className="education-grid">
        <article className="education-card featured-education">
          <p className="education-date">Current</p>
          <h3>Game Programming Student</h3>
          
          <p>
            I am developing my skills in Unity, C#, object-oriented programming, gameplay systems, 
            animation, physics, and game design while also building experience in web development and software engineering.
          </p>
        </article>

        <article className="education-card">
          <p className="education-date">Completed</p>
          <h3>High School Diploma</h3>
          
          <p>
            Built a strong foundation in communication, mathematics, problem solving,
  organization, and technology before continuing into game programming and
  software development.
          </p>
        </article>
      </section>

      <section className="coursework-section">
        <h3>Relevant Coursework and Skills</h3>
        <ul className="coursework-list">
          <li>React components and page routing</li>
          <li>HTML, CSS, and responsive layout design</li>
          <li>JavaScript programming fundamentals</li>
          <li>Software design and problem solving</li>
        </ul>
      </section>
    </main>
  );
}
