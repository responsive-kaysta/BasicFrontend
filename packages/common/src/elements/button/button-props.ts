import { Appearance } from "./appearance";
import { Sizes } from "./sizes";
import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  appearance: Appearance;

  isLink?: boolean;
  isDisabled?: boolean;
  isUnclickable?: boolean;

  containsIcon?: boolean;

  size?: Sizes;
};
