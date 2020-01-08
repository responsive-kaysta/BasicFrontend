import { eSpotlightOrientation } from ".";
import { ePageStyleTemplates } from "../../../less";
import { ePictogram } from "../../../page-types";

export interface iSpotlightProps {
  header: string;
  paragraph: string;
  pictogram: ePictogram;
  orientation: eSpotlightOrientation;
  elementId?: string;
  pageStyle?: ePageStyleTemplates;
}
