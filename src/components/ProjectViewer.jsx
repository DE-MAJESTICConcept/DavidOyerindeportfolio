import { useEffect, useState } from 'react';

/**
 * Responsive viewer for videos AND images.
 * - Starts at 16:9, then switches to the media's real aspect ratio once metadata loads
 *   (so portrait phone videos stay portrait, landscape stay landscape).
 * - The stage is capped by viewport HEIGHT (--stage-h) and by available WIDTH, so the
 *   whole player always fits on screen: phones, tablets, laptops, rotated devices.
 * - object-fit: contain means nothing is ever cropped or stretched.
 */
export default function ProjectViewer({ project, onClose }) {
  const [ratio, setRatio] = useState(16 / 9);
  const isVideo = project.kind === 'video';

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  const setFrom = (w, h) => { if (w && h) setRatio(w / h); };

  return (
    <div className="viewer-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.name}>
      <div className="viewer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="viewer-head">
          <div>
            <span className="meta">{project.phase} • {project.format}</span>
            <h3>{project.name}</h3>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close"><i className="fas fa-times" /></button>
        </div>

        <div className="viewer-stage" style={{ '--ar': ratio }}>
          {isVideo ? (
            <video src={project.media} poster={project.thumbnail} controls autoPlay playsInline preload="metadata"
                   controlsList="nodownload"
                   onLoadedMetadata={(e) => setFrom(e.currentTarget.videoWidth, e.currentTarget.videoHeight)} />
          ) : (
            <img src={project.media} alt={project.name}
                 onLoad={(e) => setFrom(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight)} />
          )}
        </div>

        <p className="muted small viewer-desc">{project.description}</p>
      </div>
    </div>
  );
}
