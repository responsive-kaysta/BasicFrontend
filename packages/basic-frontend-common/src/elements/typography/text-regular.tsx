import React, { FC, ReactNode } from "react";
import { defTextRegular, ThemeType } from "../../identity";

type TextRegularProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const TextRegular: FC<TextRegularProps> = ({ children, theme }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTextRegular}`;
  return <p className={style}>{children}</p>;
};
