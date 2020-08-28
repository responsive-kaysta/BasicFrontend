import React, { FC, ReactNode } from "react";
import { defTitleSub } from "../../identity";
import { ThemeType } from "../../typings";

type TitleSubProps = {
  children: ReactNode;
  theme?: ThemeType;
  cssStyle?: string;
};

export const TitleSub: FC<TitleSubProps> = ({ children, theme, cssStyle }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTitleSub} ${cssStyle}`;

  return <h2 className={style}>{children}</h2>;
};
