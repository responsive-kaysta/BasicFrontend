import { ePageStyleTemplates } from "../../../less";

export interface iCallToActionProps {
  header: string;
  paragraph: string;
  linkText: string;
  linkUrl: string;
  specialText: string;
  specialUrl: string;
  pageStyle?: ePageStyleTemplates;
}

export default iCallToActionProps;
