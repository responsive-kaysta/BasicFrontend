import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../typings";
import { contentStyle, wrapperStyle } from "./styles";

type PanelBasicProps = {
  children: ReactNode;
  theme?: ThemeType;
  elementId?: string;
};

export const PanelBasic: FC<PanelBasicProps> = ({
  children,
  theme,
  elementId,
}) => {
  return (
    <div className={wrapperStyle(theme)} id={elementId}>
      <div className={contentStyle()}>{children}</div>
    </div>
  );
};
