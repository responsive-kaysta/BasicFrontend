import { Appearance } from "./appearance";
import { Sizes } from "./sizes";

export type ButtonProps = {
  appearance: Appearance;

  isLink?: boolean;
  isDisabled?: boolean;
  isUnclickable?: boolean;

  containsIcon?: boolean;

  size?: Sizes;
};
