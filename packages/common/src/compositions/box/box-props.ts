import { BoxSizes } from "./box-sizes";
import { background, color } from "../../identity";

export type BoxProps = {
  size?: BoxSizes;
  minHeight?: string;
  withMargin?: boolean;
  withShadow?: boolean;
  backgroundColor?: background | color;
};
