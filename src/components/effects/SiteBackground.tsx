"use client";

import ShapeGrid from "./ShapeGrid";

/**
 * Fixed, viewport-sized ambient background rendered once at the root layout.
 * Sits behind every section (z-0) so the whole page — not just the hero —
 * shares the same electric-blue grid aesthetic. The grid quietly reacts to
 * the cursor wherever it's visible through page gaps/margins.
 */
export function SiteBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
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
        className="opacity-90"
      />
    </div>
  );
}
