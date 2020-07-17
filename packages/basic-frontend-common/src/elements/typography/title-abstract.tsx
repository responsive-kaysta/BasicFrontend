import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type TitleAbstractProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const TitleAbstract: FC<TitleAbstractProps> = ({ children, theme }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } text-lg font-semibold md:text-xl md:font-bold uppercase tracking-wider`;
  return <h3 className={style}>{children}</h3>;
};
