export default function SectionHeading({ eyebrow, icon, children, centered = false }) {
  return (
    <div className={`section-heading ${centered ? 'centered' : ''}`}>
      <span className="eyebrow">{icon && <i className={`fas ${icon}`} />} {eyebrow}</span>
      <h2>{children}</h2>
    </div>
  );
}
