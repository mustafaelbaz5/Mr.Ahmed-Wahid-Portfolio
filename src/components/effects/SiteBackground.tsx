"use client";

import ShapeGrid from "./ShapeGrid";

/**
 * Fixed, viewport-sized ambient background rendered once at the root layout.
 * Sits behind every section so the whole page shares one consistent
 * electric-blue grid — no per-section overlays on top of it, which is what
 * caused a visible seam between the hero and the rest of the page.
 *
 * Position/inset/z-index are set via inline style (not Tailwind classes) so
 * this layer is guaranteed to stay pinned behind all content regardless of
 * CSS build/specificity — a negative z-index also means normal in-flow
 * content always paints above it even if "fixed" positioning were ever lost.
 */
export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(560px circle at 8% 10%, rgba(37, 99, 235, 0.16), transparent 60%)," +
            "radial-gradient(620px circle at 95% 30%, rgba(96, 165, 250, 0.12), transparent 60%)," +
            "radial-gradient(680px circle at 15% 85%, rgba(37, 99, 235, 0.14), transparent 60%)",
        }}
      />
      <ShapeGrid
        direction="diagonal"
        speed={0.4}
        squareSize={48}
        borderColor="rgba(255,255,255,0.06)"
        hoverFillColor="rgba(37,99,235,0.35)"
        hoverTrailAmount={6}
        shape="square"
        style={{ opacity: 0.9 }}
      />
    </div>
  );
}
