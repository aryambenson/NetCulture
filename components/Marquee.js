export function Marquee({ items }) {
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-label="NetCulture capabilities">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
      <div className="marquee-track" aria-hidden="true">
        {loop.map((item, index) => (
          <span className="marquee-item" key={`${item}-ghost-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
