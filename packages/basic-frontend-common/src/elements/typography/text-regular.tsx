import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type TextRegularProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const TextRegular: FC<TextRegularProps> = ({ children, theme }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } text-base font-normal md:text-lg md:font-medium tracking-wide`;
  return <p className={style}>{children}</p>;
};
