type CommonNamespace = typeof import("../locales/en/common.json");

interface Resources {
  common: CommonNamespace;
}

export default Resources;
