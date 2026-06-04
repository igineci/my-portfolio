import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import CaseStudyModalDetail from "./case-study-modal-detail";
import type { CaseStudyDemoLayout, CaseStudyModalMeta } from "./types";

const demoLayoutClasses: Record<CaseStudyDemoLayout, string> = {
  center:
    "flex min-h-[14rem] max-h-[45vh] shrink-0 items-start justify-center overflow-auto bg-[#dddbd4] px-6 pb-4 pt-6 sm:px-10 sm:pt-8",
  editorial:
    "flex shrink-0 items-start justify-center overflow-visible bg-[#dddbd4] px-6 pb-4 pt-6 sm:px-10 sm:pt-8",
};

type CaseStudyModalProps = {
  open: boolean;
  onClose: () => void;
  caption: string;
  title?: string;
  children: ReactNode;
  modal?: CaseStudyModalMeta;
  demoLayout?: CaseStudyDemoLayout;
};

export default function CaseStudyModal({
  open,
  onClose,
  caption,
  title,
  children,
  modal,
  demoLayout = "center",
}: CaseStudyModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="case-study-dialog fixed inset-0 z-50 m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-[#131313]/50"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      data-lenis-prevent
    >
      <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
        <div
          className={`relative flex max-h-[90vh] w-full max-w-4xl flex-col border border-[#131313] bg-[#f2f0ea] shadow-lg ${demoLayout === "editorial" ? "overflow-visible" : "overflow-hidden"}`}
          onClick={(e) => e.stopPropagation()}
          role="document"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center border border-[#131313] bg-[#f2f0ea] text-[#131313] transition-colors hover:bg-[#131313] hover:text-[#f2f0ea]"
            aria-label="Close"
          >
            ×
          </button>

          <header className="shrink-0 border-b border-[#131313] px-6 py-4 pr-14">
            {title ? (
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#131313]">
                {title}
              </h3>
            ) : null}
            <p className="mt-1 font-mono text-sm text-[#131313]/70">{caption}</p>
          </header>

          <div className={demoLayoutClasses[demoLayout]}>
            <div
              className={
                demoLayout === "editorial" ? "w-full" : undefined
              }
            >
              {children}
            </div>
          </div>

          {modal ? (
            <div
              className={
                demoLayout === "editorial"
                  ? "shrink-0"
                  : "min-h-0 overflow-y-auto"
              }
            >
              <CaseStudyModalDetail modal={modal} />
            </div>
          ) : null}
        </div>
      </div>
    </dialog>
  );
}
