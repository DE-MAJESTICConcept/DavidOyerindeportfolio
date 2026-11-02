export default function Contact({ profile }) {
  const { contact, socials } = profile;
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card cta">
          <span className="pill"><i className="far fa-handshake" /> Let's collaborate</span>
          <h2>Have a project in mind?<br />Let's build something <span className="text-gold">unforgettable.</span></h2>
          <p className="muted">Currently taking on freelance contracts, full-time remote roles, and creative consultations. Reach out directly and let's bring your vision to life.</p>

          <div className="hero-actions">
            <a className="btn btn-gold" href={`mailto:${contact.email}`}><i className="far fa-envelope" /> {contact.email}</a>
            <a className="btn btn-ghost" href={`tel:${contact.phone.replace(/\s/g, '')}`}><i className="fas fa-phone-alt" /> {contact.phone}</a>
            <span className="btn btn-ghost static"><i className="fas fa-map-marker-alt" /> {contact.address}</span>
          </div>

          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
                <i className={`fab ${s.icon}`} /> {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
