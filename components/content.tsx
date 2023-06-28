export default function Content({ children, title }) {
  return (
    <div className="content">
      <h2>{title}</h2>
      <div className="body-of-letter">{children}</div>
    </div>
  );
}
