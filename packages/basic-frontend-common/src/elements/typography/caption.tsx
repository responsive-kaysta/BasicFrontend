import React, { FC, ReactNode } from "react";
import { defCaption, ThemeType } from "../../identity";

type CaptionProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const Caption: FC<CaptionProps> = ({ children, theme }) => {
  const style = `w-full mt-2 ${
    theme ? theme.body.textColor : "text-gray-500"
  } ${defCaption}`;

  return <caption className={style}>{children}</caption>;
};
