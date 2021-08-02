import { Orientation, ThemeType } from '../../typings';

export type FormBaseProps = {
  label?: string;
  legend?: string;
  error?: string;
  htmlFor?: string;
  theme?: ThemeType;
  orientation?: Orientation;
};
