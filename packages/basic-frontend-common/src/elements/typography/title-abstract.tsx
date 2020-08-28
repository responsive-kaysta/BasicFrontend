import React, { FC, ReactNode } from "react";
import { defTitleAbstract } from "../../identity";
import { ThemeType } from "../../typings";

type TitleAbstractProps = {
  children: ReactNode;
  theme?: ThemeType;
  cssStyle?: string;
};

export const TitleAbstract: FC<TitleAbstractProps> = ({
  children,
  theme,
  cssStyle,
}) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTitleAbstract} ${cssStyle}`;
  return <h3 className={style}>{children}</h3>;
};
