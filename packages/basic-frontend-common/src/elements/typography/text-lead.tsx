import React, { FC, ReactNode } from "react";
import { defTextLead } from "../../identity";
import { ThemeType } from "../../typings";

type TextLeadProps = {
  children: ReactNode;
  theme?: ThemeType;
  cssStyle?: string;
};

export const TextLead: FC<TextLeadProps> = ({ children, theme, cssStyle }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-800"
  } ${defTextLead} ${cssStyle}`;

  return <p className={style}>{children}</p>;
};
