"use client";

import {
  trackCvDownload,
  trackEngineeringStatementDownload,
} from "@/lib/analytics";

export type ContactDownloadKind = "cv" | "engineering_statement";

/**
 * ContactDownloadRow — a contact-page row for PDF downloads (CV,
 * Engineering Statement, …). Matches the TEL / EMAIL row rhythm on
 * the left, but the right side is an editorial download trigger:
 *
 *   Resting: large label inside corner registration marks.
 *   Hover:   dark ink rises behind the label (cream type), brackets
 *            flip to cream, and an inverse-T stem drops below with a
 *            tiny tracked "click to download · pdf" hint so the action
 *            is unmistakable before the click.
 */
interface ContactDownloadRowProps {
  /** Muted left-column label (e.g. "CV", "Engineering Statement"). */
  label: string;
  /** Large right-column value shown inside the download trigger. */
  value: string;
  /** Public path to the PDF in `/public`. */
  href: string;
  /** Filename suggested to the browser on save. */
  downloadFilename: string;
  /** Tiny tracked hint revealed on hover (i18n string). */
  downloadHint: string;
  downloadKind: ContactDownloadKind;
}

function triggerDownload(
  href: string,
  downloadFilename: string,
  downloadKind: ContactDownloadKind,
) {
  if (downloadKind === "cv") {
    trackCvDownload("contact");
  } else {
    trackEngineeringStatementDownload();
  }

  const link = document.createElement("a");
  link.href = href;
  link.download = downloadFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function ContactDownloadRow({
  label,
  value,
  href,
  downloadFilename,
  downloadHint,
  downloadKind,
}: ContactDownloadRowProps) {
  return (
    <div className="border-b border-[#131313] py-10 mb-0">
      <div className="flex flex-col gap-6 sm:gap-4 text-center sm:text-left sm:flex-row sm:items-start sm:justify-between">
        <span className="text-[#929291] text-sm sm:text-base font-light uppercase tracking-[0.12em] sm:pt-2">
          {label}
        </span>

        <div className="flex flex-col items-center sm:items-end">
          <button
            type="button"
            onClick={() =>
              triggerDownload(href, downloadFilename, downloadKind)
            }
            aria-label={`${downloadHint} — ${value}`}
            className="group relative inline-flex flex-col items-center sm:items-end bg-transparent border-0 cursor-pointer p-4 -m-4 focus:outline-none focus-visible:outline-1 focus-visible:outline-[#131313]/40"
          >
            {/* Click target — specimen tag with ink-fill wipe */}
            <span className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden">
              <span
                aria-hidden
                className="absolute inset-0 bg-[#131313] translate-y-full group-hover:translate-y-0 transition-transform duration-[420ms] ease-out"
              />

              {/* Corner registration marks — same language as project CTAs */}
              <span
                aria-hidden
                className="absolute top-0 left-0 z-10 h-2.5 w-2.5 border-t border-l border-[#131313] transition-colors duration-300 group-hover:border-[#f2f0ea]"
              />
              <span
                aria-hidden
                className="absolute top-0 right-0 z-10 h-2.5 w-2.5 border-t border-r border-[#131313] transition-colors duration-300 group-hover:border-[#f2f0ea]"
              />
              <span
                aria-hidden
                className="absolute bottom-0 left-0 z-10 h-2.5 w-2.5 border-b border-l border-[#131313] transition-colors duration-300 group-hover:border-[#f2f0ea]"
              />
              <span
                aria-hidden
                className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 border-b border-r border-[#131313] transition-colors duration-300 group-hover:border-[#f2f0ea]"
              />

              <span className="relative z-20 text-[#131313] text-2xl sm:text-3xl font-light transition-colors duration-300 group-hover:text-[#f2f0ea]">
                {value}
              </span>
            </span>

            {/* Inverse-T download hint — stem + cap + tracked copy.
                Always faintly visible on touch; full reveal on hover. */}
            <span
              aria-hidden
              className="mt-3 flex max-h-16 flex-col items-center overflow-hidden opacity-50 transition-all duration-500 ease-out sm:mt-0 sm:max-h-0 sm:opacity-0 group-hover:mt-4 group-hover:max-h-16 group-hover:opacity-100"
            >
              <span className="nav-hover-circle mt-2 text-[10px] uppercase tracking-[0.32em] text-[#131313]/80 transition-colors duration-300 group-hover:text-[#131313]">
                {downloadHint}
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
