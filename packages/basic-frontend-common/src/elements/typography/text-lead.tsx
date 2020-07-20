import React, { FC, ReactNode } from "react";
import { defTextLead, ThemeType } from "../../identity";

type TextLeadProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const TextLead: FC<TextLeadProps> = ({ children, theme }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTextLead}`;

  return <p className={style}>{children}</p>;
};
