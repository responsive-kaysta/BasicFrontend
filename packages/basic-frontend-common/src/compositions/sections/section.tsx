import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type SectionProps = {
  children: ReactNode;
  theme?: ThemeType;
  elementId?: string;
};

export const Section: FC<SectionProps> = ({ children, theme, elementId }) => {
  const style = `w-full ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  }`;
  return (
    <section className={style} id={elementId}>
      {children}
    </section>
  );
};
