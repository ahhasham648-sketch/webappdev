import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const contactInfo = Object.fromEntries(formData.entries());

    console.log('Contact form submitted:', contactInfo);
    event.currentTarget.reset();
    navigate('/');
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="section-label">Contact Me</p>
        <h2>Let&apos;s connect about a project or opportunity.</h2>
        <p>
          Use the form below to send your contact information and message. After
          submitting, you will be redirected back to the Home page.
        </p>
      </section>

      <section className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            First Name
            <input name="firstName" type="text" required />
          </label>

          <label>
            Last Name
            <input name="lastName" type="text" required />
          </label>

          <label>
            Email
            <input name="email" type="email" required />
          </label>

          <label>
            Phone Number
            <input name="phone" type="tel" />
          </label>

          <label className="message-field">
            Message
            <textarea name="message" rows="6" required></textarea>
          </label>

          <button className="button primary-button contact-submit" type="submit">
            Send Message
          </button>
        </form>

        <aside className="contact-card">
          <h3>Contact Details</h3>
          <p>
            I am open to discussing school projects, web development ideas, and
            learning opportunities.
          </p>
          <ul>
            <li>Email: a.h.hasham648@gmail.com</li>
            <li>Location: Toronto, Ontario</li>
            <li>Focus: Game Development, React, and web development</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
