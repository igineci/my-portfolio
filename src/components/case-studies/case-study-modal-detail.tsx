import { GiStarShuriken } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import {
  caseStudyModalFieldKey,
  type CaseStudyModalMeta,
  type CaseStudyModalTechnicalMeta,
  type CasualModalCopyKey,
} from "./types";

type CaseStudyModalDetailProps = {
  modal: CaseStudyModalMeta;
};

function BulletItem({ text }: { text: string }) {
  return (
    <li className="relative pl-7">
      <span
        aria-hidden
        className="absolute left-0 top-[3px] inline-flex h-4 w-4 items-center justify-center"
      >
        <GiStarShuriken className="text-[14px] text-[#131313]" />
      </span>
      <p className="text-sm leading-snug text-[#131313]/90">{text}</p>
    </li>
  );
}

function CasualFooter({ copyKey }: { copyKey: CasualModalCopyKey }) {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-[#131313] px-6 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#131313]">
        {t("caseStudyModalFun", "Just for fun")}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[#131313]/90">
        {t(caseStudyModalFieldKey(copyKey, "pick"))}
      </p>
    </footer>
  );
}

function TechnicalDetail({ modal }: { modal: CaseStudyModalTechnicalMeta }) {
  const { t } = useTranslation();
  const { copyKey, snippet } = modal;

  return (
    <>
      <div className="border-t border-[#131313]/20 bg-[#dddbd4] px-6 py-4">
        <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-[#131313] sm:text-sm">
          <code>{snippet}</code>
        </pre>
      </div>

      <div className="grid grid-cols-1 gap-8 border-t border-[#131313]/20 px-6 py-5 sm:grid-cols-2 sm:gap-6">
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#131313]">
            {t("caseStudyModalPros", "Pros")}
          </h4>
          <ul className="space-y-3">
            <BulletItem text={t(caseStudyModalFieldKey(copyKey, "pro1"))} />
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#131313]">
            {t("caseStudyModalCons", "Cons")}
          </h4>
          <ul className="space-y-3">
            <BulletItem text={t(caseStudyModalFieldKey(copyKey, "con1"))} />
          </ul>
        </div>
      </div>

      <footer className="border-t border-[#131313] px-6 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#131313]">
          {t("caseStudyModalPick", "When I'd pick this")}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#131313]/90">
          {t(caseStudyModalFieldKey(copyKey, "pick"))}
        </p>
      </footer>
    </>
  );
}

export default function CaseStudyModalDetail({ modal }: CaseStudyModalDetailProps) {
  if (!("snippet" in modal)) {
    return <CasualFooter copyKey={modal.copyKey} />;
  }
  return <TechnicalDetail modal={modal} />;
}
