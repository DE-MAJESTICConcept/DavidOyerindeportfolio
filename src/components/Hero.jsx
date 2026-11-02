export default function Hero({ profile }) {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <span className="pill"><span className="dot" /> {profile.availability}</span>

        <h1 className="hero-title">Welcome, I'm <span className="text-gold">{profile.name}</span></h1>
        <p className="hero-sub">A <strong>{profile.title}</strong> <span className="text-gold">•</span> {profile.specialty}</p>
        <p className="hero-text">{profile.intro}</p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-gold">Connect With Me <i className="fas fa-arrow-right" /></a>
          <a href="#projects" className="btn btn-ghost"><i className="far fa-play-circle" /> View Projects</a>
        </div>

        <div className="stats">
          {profile.stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong><span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
