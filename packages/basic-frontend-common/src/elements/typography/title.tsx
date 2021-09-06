import React, { FC, ReactNode } from "react";
import {
  defTextMargin,
  defTextPadding,
  defTitle,
  ThemeLight,
} from "../../identity";
import { BaseProps } from "./base-props";

type TitleProps = BaseProps & {
  children: ReactNode;
};

export const Title: FC<TitleProps> = ({
  children,
  marginBottom = false,
  marginTop = false,
  paddingBottom = false,
  paddingTop = false,
  theme = ThemeLight,
}) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTitle} ${defTextMargin(marginBottom, marginTop)} ${defTextPadding(
    paddingBottom,
    paddingTop
  )}`;
  return <h1 className={style}>{children}</h1>;
};
