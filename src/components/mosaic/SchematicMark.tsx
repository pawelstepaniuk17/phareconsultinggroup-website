/**
 * SchematicMark — the Phare brand mark drawn in a bold electronics-schematic
 * language: a central beacon node (the "lighthouse lamp") ringed by two
 * concentric circles, with radiating trace lines that terminate in large
 * junction dots. Solid strokes, pure SVG, themeable via tokens.
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
    const inner = 16;
    const outer = 29;
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
      {/* Outer concentric ring — solid, opaque */}
      <circle
        cx={cx}
        cy={cy}
        r="20"
        stroke="#1E293B"
        strokeWidth="2.75"
      />
      {/* Inner ring — thick, solid signature teal */}
      <circle
        cx={cx}
        cy={cy}
        r="12"
        stroke="hsl(var(--primary))"
        strokeWidth="2.75"
      />
      {/* Radiating traces + large terminal junction dots */}
      {beams.map((b, i) => (
        <g key={i}>
          <line
            x1={b.x1}
            y1={b.y1}
            x2={b.x2}
            y2={b.y2}
            stroke="#1E293B"
            strokeWidth="2.75"
            strokeLinecap="round"
          />
          <circle
            cx={b.x2}
            cy={b.y2}
            r="3.5"
            fill={i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--secondary))"}
          />
        </g>
      ))}
      {/* Beacon core node — big */}
      <circle cx={cx} cy={cy} r="6" fill="hsl(var(--primary))" />
      <circle cx={cx} cy={cy} r="2.5" fill="#35ABA7" />
    </svg>
  );
};

export default SchematicMark;
