import SectionHeading from './SectionHeading';

export default function Foundations({ data }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="split-heading">
          <SectionHeading eyebrow="Creative Foundations">
            Engineering Precision meets <span className="text-gold">Dynamic Motion</span>
          </SectionHeading>
          <p className="muted">{data.intro}</p>
        </div>

        <div className="grid grid-4">
          {data.items.map((it) => (
            <article key={it.title} className="card pad">
              <span className="icon-box"><i className={`fas ${it.icon}`} /></span>
              <h3>{it.title}</h3>
              <p className="muted small">{it.text}</p>
              <div className="card-foot"><span>{it.tools}</span><i className="fas fa-arrow-right" /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
