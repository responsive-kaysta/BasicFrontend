import { SpinnerTypes } from "./spinner-types";

export type SpinnerProps = {
  type?: SpinnerTypes;
  positive?: boolean;
  negative?: boolean;
  neutral?: boolean;
  inverse?: boolean;
};
