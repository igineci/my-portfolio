type CommonNamespace = typeof import("../locales/en/common.json");
type ArchitectureOfMeNamespace =
  typeof import("../locales/en/architecture-of-me.json");

interface Resources {
  common: CommonNamespace;
  architectureOfMe: ArchitectureOfMeNamespace;
}

export default Resources;
