import { type ReactNode } from "react";

export type GalleryPreviewMode = "center" | "bottom" | "fill" | "scroll";

interface GalleryPreviewProps {
  children: ReactNode;
  mode?: GalleryPreviewMode;
  /** Allow 3D transforms to extend outside the preview box */
  overflowVisible?: boolean;
  className?: string;
}

/**
 * Frames UI LAB demos inside the 300px gallery preview.
 * - center: flexbox center (default for most demos)
 * - bottom: anchor to bottom (e.g. nav bars)
 * - fill: child stretches to full preview (split layouts)
 * - scroll: inner scroll, isolated from Lenis
 */
export default function GalleryPreview({
  children,
  mode = "center",
  overflowVisible = false,
  className = "",
}: GalleryPreviewProps) {
  const overflow = overflowVisible ? "overflow-visible" : "overflow-hidden";
  const base = `relative h-full w-full min-h-0 ${overflow} ${className}`;

  if (mode === "scroll") {
    return (
      <div className={`${base} overflow-hidden`} data-lenis-prevent>
        <div className="h-full w-full overflow-y-auto overflow-x-hidden overscroll-contain">
          {children}
        </div>
      </div>
    );
  }

  if (mode === "fill") {
    return (
      <div className={`${base} overflow-hidden flex flex-col [&>*]:min-h-0 [&>*]:flex-1 [&>*]:w-full`}>
        {children}
      </div>
    );
  }

  const align =
    mode === "bottom"
      ? "flex items-end justify-center"
      : "flex items-center justify-center";

  const inner = overflowVisible
    ? "relative mx-auto flex items-center justify-center"
    : "relative mx-auto flex max-h-full max-w-full items-center justify-center [&>*]:max-h-full [&>*]:max-w-full";

  return (
    <div className={`${base} ${align} box-border p-3`}>
      <div className={inner}>{children}</div>
    </div>
  );
}
