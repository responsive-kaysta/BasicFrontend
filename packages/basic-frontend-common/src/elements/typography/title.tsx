import React, { FC, ReactNode } from "react";
import { defTitle } from "../../identity";
import { ThemeType } from "../../typings";

type TitleProps = {
  children: ReactNode;
  theme?: ThemeType;
  cssStyle?: string;
};

export const Title: FC<TitleProps> = ({ children, theme, cssStyle }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTitle} ${cssStyle}`;
  return <h1 className={style}>{children}</h1>;
};
