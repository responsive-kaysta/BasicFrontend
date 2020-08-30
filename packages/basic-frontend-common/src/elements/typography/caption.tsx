import React, { FC, ReactNode } from "react";
import {
  defCaption,
  defTextMargin,
  defTextPadding,
  ThemeLight,
} from "../../identity";
import { BaseProps } from "./base-props";

type CaptionProps = BaseProps & {
  children: ReactNode;
};

export const Caption: FC<CaptionProps> = ({
  children,
  marginBottom = false,
  marginTop = false,
  paddingBottom = false,
  paddingTop = false,
  theme = ThemeLight,
}) => {
  const style = `w-full ${
    theme ? theme.body.textSecondaryColor : "text-gray-500"
  } ${defCaption} ${defTextMargin(marginBottom, marginTop)} ${defTextPadding(
    paddingBottom,
    paddingTop
  )}`;

  return <caption className={style}>{children}</caption>;
};
