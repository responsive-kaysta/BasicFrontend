import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type TextLeadProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const TextLead: FC<TextLeadProps> = ({ children, theme }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } text-lg font-medium md:text-xl md:font-semibold tracking-wider`;

  return <p className={style}>{children}</p>;
};
