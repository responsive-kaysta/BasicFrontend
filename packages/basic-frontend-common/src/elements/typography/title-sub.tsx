import React, { FC, ReactNode } from "react";
import {
  defTextMargin,
  defTextPadding,
  defTitleSub,
  ThemeLight,
} from "../../identity";
import { BaseProps } from "./base-props";

type TitleSubProps = BaseProps & {
  children: ReactNode;
};

export const TitleSub: FC<TitleSubProps> = ({
  children,
  marginBottom = false,
  marginTop = false,
  paddingBottom = false,
  paddingTop = false,
  theme = ThemeLight,
}) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTitleSub} ${defTextMargin(marginBottom, marginTop)} ${defTextPadding(
    paddingBottom,
    paddingTop
  )}`;

  return <h2 className={style}>{children}</h2>;
};
