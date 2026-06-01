import enArchitectureOfMe from "../../../locales/en/architecture-of-me.json";

const { footer, header } = enArchitectureOfMe;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andjela Djekic",
  jobTitle: "Frontend Engineer",
  email: "andjeladjek@gmail.com",
  telephone: footer.phoneTel,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belgrade",
    addressCountry: "Serbia",
  },
  url: footer.handleHref,
  sameAs: header.links
    .filter((link) => link.external)
    .map((link) => link.href),
} as const;

export function CvPersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
