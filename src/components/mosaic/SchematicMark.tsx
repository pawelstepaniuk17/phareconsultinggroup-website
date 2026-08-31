/**
 * SchematicMark — the Phare brand mark drawn in an electronics-schematic
 * language: a central beacon node (the "lighthouse lamp") ringed by two
 * concentric circles, with radiating trace lines that terminate in small
 * junction dots. Pure SVG, themeable via design tokens.
 */
type Props = {
  className?: string;
  title?: string;
};

const SchematicMark = ({ className = "", title }: Props) => {
  // Six evenly spaced radiating traces (beacon beams as circuit traces)
  const cx = 32;
  const cy = 32;
  const beams = Array.from({ length: 6 }).map((_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2; // start at top
    const inner = 15;
    const outer = 27;
    return {
      x1: cx + Math.cos(angle) * inner,
      y1: cy + Math.sin(angle) * inner,
      x2: cx + Math.cos(angle) * outer,
      y2: cy + Math.sin(angle) * outer,
    };
  });

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      {/* Outer concentric ring */}
      <circle
        cx={cx}
        cy={cy}
        r="21"
        stroke="hsl(var(--foreground) / 0.35)"
        strokeWidth="1.5"
      />
      {/* Inner ring */}
      <circle
        cx={cx}
        cy={cy}
        r="12"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
      />
      {/* Radiating traces + terminal junction dots */}
      {beams.map((b, i) => (
        <g key={i}>
          <line
            x1={b.x1}
            y1={b.y1}
            x2={b.x2}
            y2={b.y2}
            stroke="hsl(var(--foreground) / 0.5)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx={b.x2}
            cy={b.y2}
            r="2"
            fill="hsl(var(--primary))"
          />
        </g>
      ))}
      {/* Beacon core node */}
      <circle cx={cx} cy={cy} r="4.5" fill="hsl(var(--primary))" />
      <circle cx={cx} cy={cy} r="8" stroke="hsl(var(--foreground) / 0.4)" strokeWidth="1" />
    </svg>
  );
};

export default SchematicMark;
