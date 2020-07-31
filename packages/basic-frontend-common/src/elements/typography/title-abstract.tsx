import React, { FC, ReactNode } from "react";
import { defTitleAbstract } from "../../identity";
import { ThemeType } from "../../typings";

type TitleAbstractProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const TitleAbstract: FC<TitleAbstractProps> = ({ children, theme }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTitleAbstract}`;
  return <h3 className={style}>{children}</h3>;
};
