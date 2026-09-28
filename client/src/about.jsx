function About() {
  return (
    <main className="about-page">
      <section className="about-card">
        <div className="about-image-wrap">
          <img
            src="/AhmedAl-Hasham.jpeg"
            alt="Ahmad Al-Hasham profile image"
            className="profile-image"
          />
        </div>

        <div className="about-content">
          <p className="section-label">About Me</p>
          <h2>Ahmad Al-Hasham</h2>
          <p>
            I am a Game Programming student with an interest in web
            development, programming, and creating user-friendly applications. I
            enjoy learning new technologies and working on projects that help me
            improve as a developer.
          </p>

          <a className="button primary-button resume-button" href="/resume.pdf" target="_blank">
            View My Resume
          </a>
        </div>
      </section>

      <section className="about-details">
        <div>
          <h3>What I am learning</h3>
          <p>
           I am building my skills in game programming and development using Unity, C#, and object-oriented programming.
            I am also learning React, JavaScript, HTML, and CSS, while creating practical game and web projects that strengthen my programming, 
            problem-solving, and software design skills.
          </p>
        </div>

        <div>
          <h3>My goal</h3>
          <p>
            My goal is to become a skilled game developer who can design engaging gameplay, 
            build interactive systems, and create enjoyable player experiences.
            I also want to continue improving my web development and software engineering skills so I can become a well-rounded developer.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
