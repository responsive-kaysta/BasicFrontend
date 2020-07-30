import React, { FC, ReactNode } from "react";
import { defLegend } from "../../identity";
import { ThemeType } from "../../typings";

type LegendProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const Legend: FC<LegendProps> = ({ children, theme }) => {
  const style = `mb-2 ${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defLegend}`;

  return <legend className={style}>{children}</legend>;
};
