const LINKS = [['about', 'About'], ['experience', 'Experience'], ['projects', 'Projects'], ['skills', 'Skills & Toolkit'], ['awards', 'Awards'], ['contact', 'Contact']];

export default function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#hero" className="brand">
            <img src={profile.logo} alt="" />
            <span><strong>{profile.brandName}</strong><small>Graphic Designer • Motion Designer • {profile.specialty}</small></span>
          </a>
          <nav className="footer-links">
            {LINKS.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span><span className="dot" /> Designed with precision & kinetic motion</span>
        </div>
      </div>
    </footer>
  );
}
