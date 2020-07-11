import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";
import { contentStyle, wrapperStyle } from "./styles";

type PanelBasicProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const PanelBasic: FC<PanelBasicProps> = ({ children, theme }) => {
  return (
    <div className={wrapperStyle(theme)}>
      <div className={contentStyle()}>{children}</div>
    </div>
  );
};
