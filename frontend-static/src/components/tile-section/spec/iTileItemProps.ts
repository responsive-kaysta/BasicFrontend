import { ePageStyleTemplates } from "../../../less";
import { ePictogram } from "../../../page-types";

export interface iTileItemProps {
  item: number;
  date: string;
  header: string;
  paragraph: string;
  link: string;
  pageStyle?: ePageStyleTemplates;
  backgroundImage: ePictogram;
}
