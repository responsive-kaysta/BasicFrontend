import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type LabelProps = {
  children: ReactNode;
  htmlFor?: string;
  theme?: ThemeType;
};

export const Label: FC<LabelProps> = ({ children, htmlFor, theme }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } text-sm font-medium leading-5`;

  return (
    <label htmlFor={htmlFor} className={style}>
      {children}
    </label>
  );
};
