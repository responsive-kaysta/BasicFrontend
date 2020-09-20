import { ThemeType } from "../../typings";

export type FormBaseProps = {
  label?: string;
  legend?: string;
  error?: string;
  comment?: string;
  theme?: ThemeType;
  htmlFor?: string;
};
