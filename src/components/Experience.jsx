import SectionHeading from './SectionHeading';

export default function Experience({ data }) {
  return (
    <section id="experience" className="section">
      <div className="container exp-layout">
        <div>
          <SectionHeading eyebrow="Career Track">
            Experience & <span className="text-gold">Recognitions</span>
          </SectionHeading>
          <p className="muted">{data.intro}</p>

          <article id="awards" className="card pad award">
            <span className="icon-box"><i className="fas fa-trophy" /></span>
            <div>
              <span className="eyebrow-text">{data.award.label}</span>
              <h3>{data.award.title}</h3>
              <p className="muted small">{data.award.text}</p>
            </div>
          </article>
        </div>

        <div className="stack">
          {data.items.map((it) => (
            <article key={it.org} className="card pad">
              <div className="row-between">
                <div>
                  <h3>{it.role}</h3>
                  <span className="text-gold small">{it.org}</span>
                </div>
                <span className="tag">{it.period}</span>
              </div>
              <p className="muted small">{it.text}</p>
              {it.tags.length > 0 && <div className="tags">{it.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
