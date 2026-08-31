/**
 * Schematic trace rail — a horizontal circuit strip used as a section
 * divider. Draws a baseline trace with periodic junction nodes and short
 * branch stubs that terminate in circles, in the stylized electronics
 * schematic language. Pure SVG; no images.
 *
 * Keeps the historical `MosaicGrid` name/props so existing page headers
 * continue to work; `cols` drives the number of trace segments and
 * `className` controls sizing.
 */
const MosaicGrid = ({
  rows = 3,
  cols = 12,
  className = "",
}: {
  rows?: number;
  cols?: number;
  className?: string;
}) => {
  void rows; // retained for API compatibility

  const width = 240;
  const height = 32;
  const midY = height / 2;
  const segments = Math.max(6, cols);
  const step = width / segments;

  // Deterministic pseudo-random branch pattern
  const nodes = Array.from({ length: segments + 1 }).map((_, i) => {
    const x = i * step;
    const kind = (i * 7 + 3) % 5; // 0-4 → varied node treatments
    return { x, kind, i };
  });

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={className}
      fill="none"
    >
      <g vectorEffect="non-scaling-stroke">
        {/* Baseline trace */}
        <line
          x1="0"
          y1={midY}
          x2={width}
          y2={midY}
          stroke="hsl(var(--foreground) / 0.28)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        {nodes.map(({ x, kind, i }) => {
          const up = i % 2 === 0;
          const branchY = up ? midY - 9 : midY + 9;
          return (
            <g key={i}>
              {/* Branch stub with terminal node on alternating rows */}
              {kind !== 0 && (
                <>
                  <line
                    x1={x}
                    y1={midY}
                    x2={x}
                    y2={branchY}
                    stroke="hsl(var(--foreground) / 0.3)"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle
                    cx={x}
                    cy={branchY}
                    r={kind === 2 ? 3 : 2}
                    fill={
                      kind === 2
                        ? "hsl(var(--primary))"
                        : "hsl(var(--secondary))"
                    }
                  />
                </>
              )}
              {/* Junction dot on the baseline */}
              <circle
                cx={x}
                cy={midY}
                r={kind === 3 ? 2.5 : 1.8}
                fill={
                  kind === 3
                    ? "hsl(var(--primary))"
                    : "hsl(var(--foreground) / 0.45)"
                }
                stroke={kind === 3 ? "hsl(var(--background))" : "none"}
                strokeWidth="1"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default MosaicGrid;
