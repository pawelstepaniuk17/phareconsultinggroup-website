/**
 * GlassDivider — unusual graphic interlude between sections.
 * Combines: animated dot-field, conic prism behind frosted glass,
 * floating mosaic tiles with tile-flip reveal, and a refractive sweep.
 * Pure decoration; aria-hidden.
 */
import { useEffect, useRef } from "react";

const tilePalette = [
  "bg-cobalt",
  "bg-sage",
  "bg-ochre",
  "bg-[hsl(var(--cobalt-soft))]",
  "bg-[hsl(var(--teal-tile))]",
  "bg-[hsl(var(--forest))]",
  "bg-paper",
];

type Props = {
  variant?: "ribbon" | "orb";
  label?: string;
};

const GlassDivider = ({ variant = "ribbon", label }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>("[data-tile]")
              .forEach((el, i) => {
                el.style.animationDelay = `${i * 35}ms`;
                el.classList.add("tile-flip");
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (variant === "orb") {
    return (
      <div
        aria-hidden
        ref={ref}
        className="relative w-full overflow-hidden bg-background py-24"
      >
        <div className="absolute inset-0 dot-field opacity-60" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 flex items-center justify-center">
          {/* Spinning prism core */}
          <div className="absolute w-[480px] h-[480px] prism opacity-50" />
          {/* Orb of glass */}
          <div className="relative w-[340px] h-[340px] rounded-full glass glass-refract">
            <div className="absolute inset-6 rounded-full glass-tint flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1 w-32 h-32">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    data-tile
                    className={`${tilePalette[(i * 3) % tilePalette.length]} block opacity-0`}
                  />
                ))}
              </div>
            </div>
          </div>
          {label && (
            <span className="absolute bottom-6 right-10 text-eyebrow text-foreground/55">
              {label}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Ribbon variant
  return (
    <div
      aria-hidden
      ref={ref}
      className="relative w-full overflow-hidden bg-background py-16 grain"
    >
      <div className="absolute inset-0 dot-field opacity-50" />
      {/* Soft prism wash */}
      <div className="absolute -top-40 left-1/4 w-[640px] h-[640px] prism opacity-30 pointer-events-none" />

      {/* Glass ribbon */}
      <div className="relative mx-6 lg:mx-10">
        <div className="glass glass-refract px-8 lg:px-12 py-8 lg:py-10 flex items-center justify-between gap-8">
          {/* Floating mosaic tile cluster */}
          <div className="grid grid-cols-6 gap-1.5 w-44 lg:w-56 shrink-0">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                data-tile
                className={`${tilePalette[(i * 5) % tilePalette.length]} aspect-square block opacity-0`}
              />
            ))}
          </div>

          {/* Center label */}
          {label && (
            <div className="hidden md:flex flex-1 items-center gap-4">
              <span className="h-px flex-1 bg-foreground/20" />
              <span className="text-eyebrow text-foreground/70">{label}</span>
              <span className="h-px flex-1 bg-foreground/20" />
            </div>
          )}

          {/* Orbiting glass discs */}
          <div className="relative w-32 h-20 shrink-0">
            <div className="absolute right-0 top-0 w-20 h-20 rounded-full glass-tint glass-refract" />
            <div className="absolute right-14 top-6 w-10 h-10 rounded-full glass-ink float-y" />
            <div
              className="absolute right-24 top-2 w-6 h-6 bg-ochre float-y-slow"
              style={{ ["--rot" as never]: "12deg" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassDivider;