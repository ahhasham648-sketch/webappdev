export default function Services() {
  const services = [
    {
      title: 'Web Page Development',
      description:
        'I can create clean web pages using HTML, CSS, JavaScript, and React with organized structure and readable code.',
    },
    {
      title: 'Responsive Design',
      description:
        'I can build layouts that adjust for desktop, tablet, and mobile screens so the website stays easy to use.',
    },
    {
      title: 'React Components',
      description:
        'I can build reusable React components, connect pages with routing, and organize content into a clear user experience.',
    },
    {
      title: 'Website Updates and Debugging',
      description:
        'I can help improve existing pages, fix layout issues, update content, and check that the project builds correctly.',
    },
    {
      title: 'Game Development',
      description:
        'I can create small 2D games in Unity using C#, including player movement, combat, enemies, collisions, physics, and level progression.'
    }
  ];

  return (
    <main className="services-page">
      <section className="services-hero">
        <p className="section-label">Services</p>
        <h2>Ways I can help with web and software projects.</h2>
        <p>
          These services reflect the skills I am developing through coursework,
           personal projects, and hands-on practice in game programming, web development, and software design.
        </p>
      </section>

      <section className="services-grid" aria-label="Services list">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
