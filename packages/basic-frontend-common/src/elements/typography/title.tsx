import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type TitleProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const Title: FC<TitleProps> = ({ children, theme }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } text-2xl md:text-3xl font-semibold md:font-bold tracking-wider`;
  return <h1 className={style}>{children}</h1>;
};
