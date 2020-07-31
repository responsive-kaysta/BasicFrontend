import React, { FC, ReactNode } from "react";
import { defCaption } from "../../identity";
import { ThemeType } from "../../typings";

type CaptionProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const Caption: FC<CaptionProps> = ({ children, theme }) => {
  const style = `w-full ${
    theme ? theme.body.textColor : "text-gray-500"
  } ${defCaption}`;

  return <caption className={style}>{children}</caption>;
};
