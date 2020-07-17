import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type TextColumnProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const TextColumn: FC<TextColumnProps> = ({ children, theme }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } text-base font-normal md:text-lg md:font-medium`;
  return <p className={style}>{children}</p>;
};
