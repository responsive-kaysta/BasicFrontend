import React, { FC, ReactNode } from "react";
import { defTextLead } from "../../identity";
import { ThemeType } from "../../typings";

type TextLeadProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const TextLead: FC<TextLeadProps> = ({ children, theme }) => {
  const style = `mb-2 ${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTextLead}`;

  return <p className={style}>{children}</p>;
};
