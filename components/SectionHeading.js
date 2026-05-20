export function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="mt-4 font-display text-4xl font-black leading-tight text-white md:text-6xl">
        {title}
      </h2>
      {copy ? <p className="muted mt-5 text-base leading-8 md:text-lg">{copy}</p> : null}
    </div>
  );
}
