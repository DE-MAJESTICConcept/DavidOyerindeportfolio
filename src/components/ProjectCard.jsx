const FALLBACK = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400"><rect width="100%" height="100%" fill="#1a1a1a"/></svg>'
);

export default function ProjectCard({ project, onOpen }) {
  const isVideo = project.kind === 'video';
  return (
    <article className="card project" onClick={() => onOpen(project)} tabIndex={0}
             onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(project)} role="button"
             aria-label={`Open ${project.name}`}>
      <div className="thumb">
        <img src={project.thumbnail} alt={project.name} loading="lazy"
             onError={(e) => { e.currentTarget.src = FALLBACK; }} />
        <span className="badge">{project.phase}</span>
        {isVideo && <span className="play"><i className="fas fa-play" /></span>}
      </div>
      <div className="project-body">
        <span className="meta">{project.phase} • {project.format}</span>
        <h3>{project.name}</h3>
        <p className="muted small">{project.description}</p>
        <div className="card-foot">
          <span>{isVideo ? 'Watch' : 'View'}</span>
          <span className="arrow"><i className={`fas ${isVideo ? 'fa-play' : 'fa-expand-alt'}`} /></span>
        </div>
      </div>
    </article>
  );
}
