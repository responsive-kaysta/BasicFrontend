import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type SectionHeaderProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const SectionHeader: FC<SectionHeaderProps> = ({ children, theme }) => {
  const style = `w-full ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  }`;
  return <header className={style}>{children}</header>;
};
