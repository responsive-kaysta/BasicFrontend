import * as React from "react";
import { FC } from "react";

export const Button: FC = ({ children }) => {
  console.log("Button");

  return <div>{children}</div>;
};
