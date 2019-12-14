import { eSpotlightOrientation, eSpotlightPictogram } from ".";
import { ePageStyleTemplates } from "../../../less";

export interface iSpotlightProps {
  header: string;
  paragraph: string;
  pictogram: eSpotlightPictogram;
  orientation: eSpotlightOrientation;
  elementId?: string;
  pageStyle?: ePageStyleTemplates;
}

export default iSpotlightProps;
