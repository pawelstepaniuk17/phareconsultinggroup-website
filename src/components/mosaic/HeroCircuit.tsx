import { useEffect, useMemo, useRef, useState } from "react";

type Node = {
  id: string;
  x: number;
  y: number;
  r: number;
  color: string;
  hollow: boolean;
};

type Segment = {
  id: string;
  d: string;
  color: string;
  flow: boolean;
};

const PALETTE = [
  "hsl(var(--primary))",
  "hsl(var(--secondary))",
  "hsl(var(--accent))",
  "hsl(var(--ochre))",
];

const DIM = "hsl(var(--foreground) / 0.4)";
const DIM_NODE = "hsl(var(--foreground) / 0.55)";

/** Build a wide horizontal circuit network sized to the container in px. */
function buildCircuit(w: number, h: number): { nodes: Node[]; segments: Segment[] } {
  const nodes: Node[] = [];
  const segments: Segment[] = [];
  if (w <= 0 || h <= 0) return { nodes, segments };

  const padX = Math.min(56, w * 0.045);
  const spineY = h * 0.5;
  const branch = h * 0.3;
  // Denser columns on wider screens so the network fills the width.
  const cols = Math.max(6, Math.min(14, Math.round(w / 130)));
  const step = (w - padX * 2) / (cols - 1);

  let prevX: number | null = null;

  for (let i = 0; i < cols; i++) {
    const x = padX + i * step;
    const color = PALETTE[i % PALETTE.length];

    // Main node sits on the spine.
    nodes.push({
      id: `m${i}`,
      x,
      y: spineY,
      r: i % 4 === 2 ? 7 : 6,
      color: i % 3 === 0 ? "hsl(var(--primary))" : DIM_NODE,
      hollow: i % 4 === 1,
    });

    // Spine segment connecting to the previous main node.
    if (prevX !== null) {
      segments.push({
        id: `s${i}`,
        d: `M ${prevX} ${spineY} H ${x}`,
        color: DIM,
        flow: i % 2 === 0,
      });
    }

    // Branch off the spine — alternate up/down, with occasional elbows.
    const dir = i % 2 === 0 ? -1 : 1;
    const by = spineY + dir * branch;
    const variant = i % 3;

    if (variant === 0) {
      // Elbow: vertical then horizontal to an offset terminal.
      const ex = x + step * 0.5;
      segments.push({ id: `b${i}`, d: `M ${x} ${spineY} V ${by} H ${ex}`, color, flow: true });
      nodes.push({ id: `t${i}`, x: ex, y: by, r: 10, color, hollow: i % 2 === 0 });
    } else if (variant === 1) {
      // Straight branch to a terminal.
      segments.push({ id: `b${i}`, d: `M ${x} ${spineY} V ${by}`, color, flow: true });
      nodes.push({ id: `t${i}`, x, y: by, r: 9, color, hollow: false });
    } else {
      // Short stub with a small terminal dot.
      const sy = spineY + dir * branch * 0.55;
      segments.push({ id: `b${i}`, d: `M ${x} ${spineY} V ${sy}`, color: DIM, flow: false });
      nodes.push({ id: `t${i}`, x, y: sy, r: 7, color, hollow: true });
    }

    prevX = x;
  }

  return { nodes, segments };
}

interface HeroCircuitProps {
  className?: string;
}

const HeroCircuit = ({ className = "" }: HeroCircuitProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>();

  // Measure the container so 1 SVG unit === 1px (keeps circles perfectly round).
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      setSize({ w: Math.round(rect.width), h: Math.round(rect.height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { nodes, segments } = useMemo(() => buildCircuit(size.w, size.h), [size.w, size.h]);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setPointer({ x, y }));
  };

  const handleLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setPointer(null);
  };

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const RADIUS = 150; // px influence radius of the pointer

  return (
    <div
      ref={wrapRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative ${className}`}
    >
      {size.w > 0 && (
        <svg
          aria-hidden
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          fill="none"
          className="absolute inset-0"
        >
          {/* Base traces */}
          <g strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
            {segments.map((s) => (
              <path key={s.id} d={s.d} stroke={s.color} opacity={0.9} />
            ))}
          </g>

          {/* Animated "signal flow" overlay on the colored branches */}
          <g strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
            {segments
              .filter((s) => s.flow)
              .map((s) => (
                <path key={`f-${s.id}`} d={s.d} stroke={s.color} className="circuit-flow" opacity={0.95} />
              ))}
          </g>

          {/* Nodes — grow and glow near the pointer */}
          <g>
            {nodes.map((n) => {
              let boost = 0;
              if (pointer) {
                const dx = n.x - pointer.x;
                const dy = n.y - pointer.y;
                const dist = Math.hypot(dx, dy);
                boost = dist < RADIUS ? 1 - dist / RADIUS : 0;
              }
              const r = n.r + boost * 7;
              return (
                <g key={n.id}>
                  {boost > 0.02 && (
                    <circle cx={n.x} cy={n.y} r={r + 10} fill={n.color} opacity={boost * 0.22} />
                  )}
                  {n.hollow ? (
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={r}
                      fill="hsl(var(--background))"
                      stroke={n.color}
                      strokeWidth={4}
                    />
                  ) : (
                    <circle cx={n.x} cy={n.y} r={r} fill={n.color} />
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      )}
    </div>
  );
};

export default HeroCircuit;
