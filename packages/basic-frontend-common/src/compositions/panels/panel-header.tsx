import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../typings";
import { contentStyle, headerStyle, wrapperStyle } from "./styles";

type PanelHeaderProps = {
  children: ReactNode;
  header: ReactNode;
  theme?: ThemeType;
  elementId?: string;
};

export const PanelHeader: FC<PanelHeaderProps> = ({
  children,
  header,
  theme,
  elementId,
}) => {
  return (
    <div className={wrapperStyle(theme)} id={elementId}>
      <div className={headerStyle(theme)}>{header}</div>
      <div className={contentStyle()}>{children}</div>
    </div>
  );
};
