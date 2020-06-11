import { ReactNode } from "react";
import { HeadingTypes } from "./heading-types";

export type HeadingProps = {
  children: ReactNode;
  type: HeadingTypes;
};
