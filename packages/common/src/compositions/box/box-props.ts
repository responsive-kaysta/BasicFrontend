import { BoxSizes } from "./box-sizes";
import { background, color } from "../../identity";

export type BoxProps = {
  size?: BoxSizes;
  minHeight?: string;
  widthMargin?: boolean;
  backgroundColor?: background | color;
};
