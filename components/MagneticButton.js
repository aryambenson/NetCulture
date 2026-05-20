"use client";

import Link from "next/link";
import { useRef } from "react";

export function MagneticButton({ href, children, icon, variant = "primary", className = "", ...props }) {
  const ref = useRef(null);
  const external = href?.startsWith("http") || href?.startsWith("mailto:") || href?.startsWith("tel:");
  const classes = `premium-button ${variant === "secondary" ? "secondary" : ""} ${variant === "crimson" ? "crimson" : ""} ${className}`;

  const onPointerMove = (event) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate3d(${x * 0.16}px, ${y * 0.16}px, 0)`;
  };

  const onPointerLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate3d(0, 0, 0)";
    }
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon ? <span className="relative z-10">{icon}</span> : null}
    </>
  );

  const sharedProps = {
    ref,
    className: classes,
    onPointerMove,
    onPointerLeave,
    ...props
  };

  if (!href) {
    return (
      <button type="button" {...sharedProps}>
        {content}
      </button>
    );
  }

  if (external) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" {...sharedProps}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} {...sharedProps}>
      {content}
    </Link>
  );
}
