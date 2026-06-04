import type { ReactNode } from "react";
import { CASE_STUDIES_WIDTH } from "./layout";

type CaseStudySectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function CaseStudySection({
  title,
  children,
  className = "px-20 py-10 border border-[#dddbd4] shadow-sm",
}: CaseStudySectionProps) {
  return (
    <section className={`${CASE_STUDIES_WIDTH} ${className}`}>
      <h2 className="mb-6 text-lg font-semibold uppercase tracking-[0.2em] text-[#131313] sm:text-xl">
        {title}
      </h2>
      <div className="-mx-1 flex flex-row flex-nowrap items-start justify-start gap-6 overflow-x-auto px-1 pb-2 snap-x snap-mandatory">
        {children}
      </div>
    </section>
  );
}
