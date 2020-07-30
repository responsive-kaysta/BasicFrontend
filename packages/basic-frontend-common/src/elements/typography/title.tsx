import React, { FC, ReactNode } from "react";
import { defTitle } from "../../identity";
import { ThemeType } from "../../typings";

type TitleProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const Title: FC<TitleProps> = ({ children, theme }) => {
  const style = `mb-4 ${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTitle}`;
  return <h1 className={style}>{children}</h1>;
};
