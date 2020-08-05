import React, { FC, ReactNode } from "react";
import { defLabel } from "../../identity";
import { ThemeType } from "../../typings";

type LabelProps = {
  children: ReactNode;
  htmlFor?: string;
  theme?: ThemeType;
};

export const Label: FC<LabelProps> = ({ children, htmlFor, theme }) => {
  const style = `${theme ? theme.body.textColor : "text-gray-800"} ${defLabel}`;

  return (
    <label htmlFor={htmlFor} className={style}>
      {children}
    </label>
  );
};
