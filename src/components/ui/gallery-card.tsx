import { type ReactNode } from "react";

interface GalleryCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  technologies?: string;
}

export default function GalleryCard({
  title,
  description,
  children,
}: GalleryCardProps) {
  return (
    <div className="bg-[#dddbd4] overflow-hidden">
      {/* Gallery Item Header */}
      <div className="px-13 py-7 text-center">
        <h4 className="text-lg uppercase font-semibold text-[#131313] mb-2">
          {title}
        </h4>
        <p className="text-sm text-[#131313]/60">{description}</p>
      </div>

      {/* Gallery Item Content */}
      <div className="relative h-[300px] bg-[#dddbd4] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
