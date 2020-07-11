import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type SectionProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const Section: FC<SectionProps> = ({ children }) => {
  return <section>{children}</section>;
};
