import React, { FC, ReactNode } from "react";
import { defTitleSub } from "../../identity";
import { ThemeType } from "../../typings";

type TitleSubProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const TitleSub: FC<TitleSubProps> = ({ children, theme }) => {
  const style = `mb-2 ${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTitleSub}`;

  return <h2 className={style}>{children}</h2>;
};
