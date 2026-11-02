import SectionHeading from './SectionHeading';

export default function Skills({ data }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="centered-block">
          <SectionHeading eyebrow="Technical Stack" icon="fa-tools" centered>
            Software & <span className="text-gold">Capabilities Matrix</span>
          </SectionHeading>
          <p className="muted">{data.intro}</p>
        </div>

        <div className="grid grid-6">
          {data.tools.map((t) => (
            <div key={t.name} className="card pad tool">
              <span className="icon-box"><i className={`fas ${t.icon}`} /></span>
              <strong>{t.name}</strong>
              <small>{t.note}</small>
            </div>
          ))}
        </div>

        <div className="card pad methods">
          <span className="eyebrow-text">Methodologies:</span>
          {data.methodologies.map((m) => <span key={m} className="tag">{m}</span>)}
        </div>
      </div>
    </section>
  );
}
