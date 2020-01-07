import { ePageStyleTemplates } from "../../../less";

export interface iTileItemProps {
  item: number;
  date: string;
  header: string;
  paragraph: string;
  link: string;
  pageStyle?: ePageStyleTemplates;
}
