import { ThemeType } from "../../typings";

export type IntroBaseProps = {
  theme?: ThemeType;
  paddingTop?: boolean;
  paddingBottom?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
  centerContent?: boolean;
  containerContent?: boolean;
  elementId?: string;
  cssStyle?: string;
};
