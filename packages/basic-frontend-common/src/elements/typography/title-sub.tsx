import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type TitleSubProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const TitleSub: FC<TitleSubProps> = ({ children, theme }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } text-xl font-semibold md:text-2xl md:font-bold tracking-wider`;

  return <h2 className={style}>{children}</h2>;
};
