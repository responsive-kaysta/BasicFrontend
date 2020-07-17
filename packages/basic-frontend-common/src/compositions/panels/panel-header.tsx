import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";
import { contentStyle, headerStyle, wrapperStyle } from "./styles";

type PanelHeaderProps = {
  children: ReactNode;
  header: ReactNode;
  theme?: ThemeType;
};

export const PanelHeader: FC<PanelHeaderProps> = ({
  children,
  header,
  theme,
}) => {
  return (
    <div className={wrapperStyle(theme)}>
      <div className={headerStyle(theme)}>{header}</div>
      <div className={contentStyle()}>{children}</div>
    </div>
  );
};
