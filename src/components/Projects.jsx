import { useState } from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function Projects({ projects, phases, onOpen }) {
  const [filter, setFilter] = useState('All Work');
  const chips = ['All Work', ...phases];
  const visible = filter === 'All Work' ? projects : projects.filter((p) => p.phase === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="split-heading">
          <SectionHeading eyebrow="Curated Portfolio">
            Selected Work & <span className="text-gold">Case Studies</span>
          </SectionHeading>
          <div className="chips" role="tablist">
            {chips.map((c) => (
              <button key={c} role="tab" aria-selected={filter === c}
                      className={`chip ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-3">
          {visible.map((p) => <ProjectCard key={p.id} project={p} onOpen={onOpen} />)}
        </div>
      </div>
    </section>
  );
}
