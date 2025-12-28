type Locales = "en" | "pt";

import en from "./en.json";
import pt from "./pt.json";

export default function getTranslationsByLocale(locales: Locales): typeof en {
  switch (locales) {
    case "pt":
      return pt;
    default:
      return en;
  }
}
