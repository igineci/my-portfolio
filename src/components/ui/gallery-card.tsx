import { type ReactNode } from "react";
import GalleryPreview, { type GalleryPreviewMode } from "./gallery-preview";

interface GalleryCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  /** How the demo is framed inside the 300px preview */
  previewMode?: GalleryPreviewMode;
  /** For 3D demos whose transforms extend past the preview bounds */
  previewOverflowVisible?: boolean;
}

export default function GalleryCard({
  title,
  description,
  children,
  previewMode = "center",
  previewOverflowVisible = false,
}: GalleryCardProps) {
  return (
    <article
      className={`bg-[#dddbd4] ${previewOverflowVisible ? "overflow-visible" : "overflow-hidden"}`}
    >
      <header className="px-12 py-7 text-center">
        <h4 className="text-lg uppercase font-semibold text-[#131313] mb-2">
          {title}
        </h4>
        {description ? (
          <p className="text-sm text-[#131313]/60">{description}</p>
        ) : null}
      </header>

      <div
        className={`relative h-[300px] w-full bg-[#dddbd4] ${previewOverflowVisible ? "overflow-visible" : "overflow-hidden"}`}
      >
        <GalleryPreview
          mode={previewMode}
          overflowVisible={previewOverflowVisible}
        >
          {children}
        </GalleryPreview>
      </div>
    </article>
  );
}
