import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../typings";

type SectionFooterProps = {
  children: ReactNode;
  theme?: ThemeType;
  elementId?: string;
};

export const SectionFooter: FC<SectionFooterProps> = ({
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
    <footer className={style} id={elementId}>
      {children}
    </footer>
  );
};
