import React, { FC, ReactNode } from "react";
import {
  defTextMargin,
  defTextPadding,
  defTextRegular,
  ThemeLight,
} from "../../identity";
import { BaseProps } from "./base-props";

type TextRegularProps = BaseProps & {
  children: ReactNode;
};

export const TextRegular: FC<TextRegularProps> = ({
  children,
  marginBottom = false,
  marginTop = false,
  paddingBottom = false,
  paddingTop = false,
  theme = ThemeLight,
}) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTextRegular} ${defTextMargin(
    marginBottom,
    marginTop
  )} ${defTextPadding(paddingBottom, paddingTop)}`;
  return <p className={style}>{children}</p>;
};
