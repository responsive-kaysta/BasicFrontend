import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type SectionHeaderProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const SectionHeader: FC<SectionHeaderProps> = ({ children, theme }) => {
  const style = `w-full ${
    theme
      ? `${theme.body.headerBackgroundColor} ${theme.body.headerTextColor}`
      : "bg-gray-50 text-gray-800"
  }`;
  return <header className={style}>{children}</header>;
};
