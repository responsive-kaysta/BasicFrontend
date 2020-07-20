import React, { FC, ReactNode } from "react";
import { ThemeType, defTitle } from "../../identity";

type TitleProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const Title: FC<TitleProps> = ({ children, theme }) => {
  const style = `${theme ? theme.body.textColor : "text-gray-800"} ${defTitle}`;
  return <h1 className={style}>{children}</h1>;
};
