import React, { FC, ReactNode } from "react";
import {
  defLegend,
  defTextMargin,
  defTextPadding,
  ThemeLight,
} from "../../identity";
import { BaseProps } from "./base-props";

type LegendProps = BaseProps & {
  children: ReactNode;
};

export const Legend: FC<LegendProps> = ({
  children,
  marginBottom = false,
  marginTop = false,
  paddingBottom = false,
  paddingTop = false,
  theme = ThemeLight,
}) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defLegend} ${defTextMargin(marginBottom, marginTop)} ${defTextPadding(
    paddingBottom,
    paddingTop
  )}`;

  return <legend className={style}>{children}</legend>;
};
