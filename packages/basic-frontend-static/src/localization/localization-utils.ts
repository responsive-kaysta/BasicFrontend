import LocalizedStrings from "react-localization";
import * as json from "./localization.json";

export var TEXTS: any;

export const InitLocalizedStrings = (language: string) => {
  TEXTS = new LocalizedStrings(json);
  TEXTS.setLanguage(language);
  Object.freeze(TEXTS);
};
