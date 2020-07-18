import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type SectionHeaderProps = {
  children: ReactNode;
  theme?: ThemeType;
  elementId?: string;
};

export const SectionHeader: FC<SectionHeaderProps> = ({
  children,
  theme,
  elementId,
}) => {
  const style = `w-full ${
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
