import React, { FC, ReactNode } from "react";
import {
  defLabel,
  defTextMargin,
  defTextPadding,
  ThemeLight,
} from "../../identity";
import { BaseProps } from "./base-props";

type LabelProps = BaseProps & {
  children: ReactNode;
  htmlFor?: string;
};

export const Label: FC<LabelProps> = ({
  children,
  htmlFor,
  marginBottom = false,
  marginTop = false,
  paddingBottom = false,
  paddingTop = false,
  theme = ThemeLight,
}) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defLabel} ${defTextMargin(marginBottom, marginTop)} ${defTextPadding(
    paddingBottom,
    paddingTop
  )}`;

  return (
    <label htmlFor={htmlFor} className={style}>
      {children}
    </label>
  );
};
