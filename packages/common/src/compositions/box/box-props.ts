import { BoxSizes } from "./box-sizes";
import { background, color } from "../../identity";

export type BoxProps = {
  size?: BoxSizes;
  backgroundColor?: background | color;
};
