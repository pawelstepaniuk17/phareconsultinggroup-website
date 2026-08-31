/**
 * Schematic trace rail — a bold, playful horizontal circuit strip used as a
 * section divider. Built as a flex row of repeated fixed-aspect SVG modules,
 * so the circle nodes stay perfectly round at any height and the thick traces
 * read crisply. Pure SVG; no images.
 *
 * Keeps the historical `MosaicGrid` name/props so existing page headers
 * continue to work; `cols` hints how many modules to render and `className`
 * controls sizing.
 */
const MODULE_COUNT = 48;

// Rotating accent colors give the strip a playful, varied rhythm.
const ACCENTS = [
  "hsl(var(--primary))",
  "hsl(var(--secondary))",
  "hsl(var(--accent))",
  "hsl(var(--ochre))",
];

const RailModule = ({ i }: { i: number }) => {
  const up = ACCENTS[i % ACCENTS.length];
  const down = ACCENTS[(i + 2) % ACCENTS.length];
  const variant = i % 3; // vary the module silhouette

  return (
    <svg
      viewBox="0 0 96 56"
      className="h-full w-auto flex-none"
      fill="none"
      aria-hidden
    >
      {/* Baseline trace — thick */}
      <line
        x1="0"
        y1="28"
        x2="96"
        y2="28"
        stroke="hsl(var(--foreground) / 0.35)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Upward branch + large node */}
      <line
        x1="24"
        y1="28"
        x2="24"
        y2="12"
        stroke="hsl(var(--foreground) / 0.35)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {variant === 1 ? (
        <circle cx="24" cy="9" r="6.5" fill="none" stroke={up} strokeWidth="3" />
      ) : (
        <circle cx="24" cy="9" r="6.5" fill={up} />
      )}

      {/* Big junction dot on the baseline */}
      <circle cx="48" cy="28" r="5" fill="hsl(var(--foreground) / 0.5)" />

      {/* Downward branch + large node */}
      <line
        x1="72"
        y1="28"
        x2="72"
        y2="44"
        stroke="hsl(var(--foreground) / 0.35)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {variant === 2 ? (
        <circle cx="72" cy="47" r="6.5" fill="none" stroke={down} strokeWidth="3" />
      ) : (
        <circle cx="72" cy="47" r="6.5" fill={down} />
      )}
    </svg>
  );
};

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
  void cols;

  return (
    <div className={`flex items-center overflow-hidden ${className}`} aria-hidden>
      {Array.from({ length: MODULE_COUNT }).map((_, i) => (
        <RailModule key={i} i={i} />
      ))}
    </div>
  );
};

export default MosaicGrid;
