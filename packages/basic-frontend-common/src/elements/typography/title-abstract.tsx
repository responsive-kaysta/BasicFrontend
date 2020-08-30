import React, { FC, ReactNode } from "react";
import {
  defTextMargin,
  defTextPadding,
  defTitleAbstract,
  ThemeLight,
} from "../../identity";
import { BaseProps } from "./base-props";

type TitleAbstractProps = BaseProps & {
  children: ReactNode;
};

export const TitleAbstract: FC<TitleAbstractProps> = ({
  children,
  marginBottom = false,
  marginTop = false,
  paddingBottom = false,
  paddingTop = false,
  theme = ThemeLight,
}) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTitleAbstract} ${defTextMargin(
    marginBottom,
    marginTop
  )} ${defTextPadding(paddingBottom, paddingTop)}`;
  return <h3 className={style}>{children}</h3>;
};
