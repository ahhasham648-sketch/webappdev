export default function Project() {
  const projects = [
    {
      title: 'Trimly',
      type: 'Barber Booking Marketplace',
      description:
        'A modern barber booking marketplace built with Next.js, React, TypeScript, Tailwind CSS, and Supabase. It supports shops, barbers, services, booking times, admin tools, and customer notifications.',
      tools: ['Next.js', 'React', 'TypeScript', 'Supabase'],
      image: '/trimlyy.png',
      imageAlt: 'Trimly homepage screenshot',
    },
    {
      title: 'React Portfolio Website',
      type: 'COMP229 Assignment',
      description:
        'A personal portfolio website built with React and Vite to present my background, education, projects, services, contact form, custom logo, profile image, and resume.',
      tools: ['React', 'Vite', 'CSS', 'Routing'],
      image: '/project-portfolio.png',
      imageAlt: 'React portfolio Projects page screenshot',
    },
    {
      title: 'Dragon warrior rush',
      type: 'Unity 2D Game',
      description:
        'Dragon Warrior Rush is a 2D action platformer I developed in Unity using C#. The player must fight ninja enemies, avoid environmental traps, navigate through the level, and defeat a final boss to complete the game. While developing the project, I worked with player movement, enemy behaviour, animations, collisions, physics, combat mechanics, and level design.',
      tools: ['Unity', 'C#', 'Game Design', 'OOP'],
      image: '/draagonwarrior.png',
      imageAlt: 'Dragon Warrior Rush project visual',
    },
  ];

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <p className="section-label">Projects</p>
        <h2>Selected work that shows what I am building and learning.</h2>
        <p>
          These projects highlight my experience with web development, React,
          software design, and practical problem solving.
        </p>
      </section>

      <section className="projects-grid" aria-label="Project list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img
              className="project-image"
              src={project.image}
              alt={project.imageAlt}
            />
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <ul className="project-tools" aria-label={`${project.title} tools`}>
              {project.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
