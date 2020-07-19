import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type LegendProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const Legend: FC<LegendProps> = ({ children, theme }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } text-base font-medium`;

  return <legend className={style}>{children}</legend>;
};
