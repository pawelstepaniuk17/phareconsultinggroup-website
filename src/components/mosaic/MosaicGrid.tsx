/**
 * Decorative mosaic graphic — uses the logo tile language as a section divider.
 * Pure CSS; no images.
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
  const palette = [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "bg-[hsl(var(--cobalt-soft))]",
    "bg-muted",
    "bg-paper-soft",
    "bg-[hsl(var(--teal-tile))]",
    "bg-[hsl(var(--forest))]",
  ];
  const items = Array.from({ length: rows * cols });
  return (
    <div
      aria-hidden
      className={`grid gap-1 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
    >
      {items.map((_, i) => {
        // Deterministic pseudo-random distribution based on index
        const swatch = palette[(i * 7 + Math.floor(i / cols) * 3) % palette.length];
        const opacity = ((i * 13) % 100) / 100;
        return (
          <span
            key={i}
            className={`${swatch} aspect-square block`}
            style={{ opacity: 0.35 + opacity * 0.65 }}
          />
        );
      })}
    </div>
  );
};

export default MosaicGrid;