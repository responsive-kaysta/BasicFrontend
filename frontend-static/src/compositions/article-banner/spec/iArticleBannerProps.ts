import { ePageStyleTemplates } from "../../../less";

export interface iArticleBannerProps {
  header: string;
  paragraph: string;
  pageStyle?: ePageStyleTemplates;
  elementId?: string;
}
