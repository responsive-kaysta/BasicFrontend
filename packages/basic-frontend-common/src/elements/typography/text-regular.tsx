import React, { FC, ReactNode } from "react";
import { defTextRegular } from "../../identity";
import { ThemeType } from "../../typings";

type TextRegularProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const TextRegular: FC<TextRegularProps> = ({ children, theme }) => {
  const style = `mb-2 ${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTextRegular}`;
  return <p className={style}>{children}</p>;
};
