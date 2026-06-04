import type { ReactNode } from "react";
import type { CaseStudySize } from "./types";

const sizeClasses: Record<CaseStudySize, string> = {
  square: "aspect-square w-40 sm:w-48 shrink-0",
  wide: "aspect-[16/10] w-52 sm:w-64 shrink-0",
  tall: "aspect-[3/4] w-36 sm:w-40 shrink-0",
  rect: "h-auto w-48 shrink-0 sm:w-56",
  portrait: "h-auto w-64 shrink-0 sm:w-72",
};

type CaseStudyProps = {
  caption: string;
  children: ReactNode;
  title?: string;
  size?: CaseStudySize;
  /** Shapes need overflow:visible + block layout so shape-outside works */
  previewLayout?: "center" | "block";
  onOpen: () => void;
};

export default function CaseStudy({
  caption,
  children,
  title,
  size = "square",
  previewLayout = "center",
  onOpen,
}: CaseStudyProps) {
  const block = previewLayout === "block";
  const rect = size === "rect" || size === "portrait";

  return (
    <div className="flex shrink-0 flex-col gap-2 hover:cursor-pointer">
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className="group flex flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#131313]"
      >
        <div
          className={`border border-[#131313] bg-[#dddbd4] shadow-sm transition-shadow group-hover:shadow-md ${block ? "overflow-visible" : "overflow-hidden"} ${sizeClasses[size]}`}
        >
          <div
            className={
              block
                ? `block w-full p-2 hover:cursor-pointer ${rect ? "" : "h-full"}`
                : "flex h-full w-full items-center justify-center p-2 hover:cursor-pointer"
            }
          >
            {children}
          </div>
        </div>
      </button>
      <p
        className={`font-mono text-xs text-[#131313]/70 sm:text-sm ${size === "portrait" ? "max-w-[18rem]" : rect ? "max-w-[14rem]" : "max-w-[12rem]"}`}
      >
        {caption}
      </p>
      {title ? (
        <span className="sr-only">{title}</span>
      ) : null}
    </div>
  );
}
