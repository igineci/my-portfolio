import { type ReactNode } from "react";

interface GalleryGridProps {
  children: ReactNode;
  className?: string;
}

// Shared grid wrapper to keep gallery layout consistent across tabs
export default function GalleryGrid({ children, className = "" }: GalleryGridProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>
      {children}
    </div>
  );
}

