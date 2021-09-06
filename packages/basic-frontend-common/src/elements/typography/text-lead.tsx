import React, { FC, ReactNode } from "react";
import {
  defTextLead,
  defTextMargin,
  defTextPadding,
  ThemeLight,
} from "../../identity";
import { BaseProps } from "./base-props";

type TextLeadProps = BaseProps & {
  children: ReactNode;
};

export const TextLead: FC<TextLeadProps> = ({
  children,
  marginBottom = false,
  marginTop = false,
  paddingBottom = false,
  paddingTop = false,
  theme = ThemeLight,
}) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTextLead} ${defTextMargin(marginBottom, marginTop)} ${defTextPadding(
    paddingBottom,
    paddingTop
  )}`;

  return <p className={style}>{children}</p>;
};
