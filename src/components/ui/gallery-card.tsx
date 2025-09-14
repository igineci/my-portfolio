import { type ReactNode, useState } from "react";
import { Badge } from "./badge";

interface GalleryCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  technologies?: string;
  notes?: string;
  tags?: string[];
}

export default function GalleryCard({
  title,
  description,
  children,
  notes,
  tags = [],
}: GalleryCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#dddbd4] overflow-hidden">
      {/* Gallery Item Header */}
      <div className="px-13 py-7 text-center">
        <h4 className="text-lg uppercase font-semibold text-[#131313] mb-2">
          {title}
        </h4>
        <p className="text-sm text-[#131313]/60">{description}</p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2 justify-center">
            {tags.map((t, i) => (
              <Badge key={`${t}-${i}`} className="text-xs px-2 py-0.5">
                {t}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Gallery Item Content */}
      <div className="relative h-[300px] bg-[#dddbd4] flex items-center justify-center">
        {children}
      </div>

      {/* Optional Usage Notes */}
      {notes && (
        <div className="px-6 py-4 border-t border-[#131313]/20">
          <button
            className="w-full text-left text-sm uppercase tracking-wide text-[#131313] hover:opacity-80"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            {open ? "Hide Usage" : "Show Usage"}
          </button>
          {open && (
            <p className="mt-2 text-sm leading-relaxed text-[#131313]/80">
              {notes}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
