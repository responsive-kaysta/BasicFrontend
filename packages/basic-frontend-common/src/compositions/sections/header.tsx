import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../typings";

type SectionHeaderProps = {
  children: ReactNode;
  centerContent?: boolean;
  theme?: ThemeType;
  elementId?: string;
};

export const SectionHeader: FC<SectionHeaderProps> = ({
  children,
  centerContent = false,
  theme,
  elementId,
}) => {
  const style = `w-full ${centerContent ? "text-center" : "text-left"} ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  }`;
  return (
    <header className={style} id={elementId}>
      {children}
    </header>
  );
};
