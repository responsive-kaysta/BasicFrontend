import ePageStyleTemplates from "../../../less/page-style-templates";

export interface iTileItemProps {
  item: number;
  date: string;
  header: string;
  paragraph: string;
  link: string;
  pageStyle?: ePageStyleTemplates;
}

export default iTileItemProps;
