import { eButtonStyles } from ".";

export interface iButtonElementProps {
  text: string;
  link?: string;
  action?: () => void;
  cssClass?: eButtonStyles;
}
