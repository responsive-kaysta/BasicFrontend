import { ePageStyleTemplates } from "../../../less";

export interface iPageBannerProps {
  header: string;
  paragraph: string;
  scrollTo: string;
  pageStyle?: ePageStyleTemplates;
  elementId?: string;
}
