import { ePageStyleTemplates } from "../../../less";

export interface iSpotlightProps {
  header: string;
  paragraph: string;
  image: string;
  pageStyle?: ePageStyleTemplates;
  elementId?: string;
}

export default iSpotlightProps;
