import eButtonStyles from "./eButtonStyles";

export interface iButtonElementProps {
  text: string;
  link?: string;
  action?: () => void;
  cssClass?: eButtonStyles;
}

export default iButtonElementProps;
