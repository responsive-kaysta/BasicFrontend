import { Appearance } from "./appearance";

export type LinkProps = {
  href: string;
  appearance?: Appearance;
  isButton?: boolean;
  withArrow?: boolean;
  containsIcon?: boolean;
};
