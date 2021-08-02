import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../typings";
import { contentStyle, footerStyle, headerStyle, wrapperStyle } from "./styles";

type PanelHeaderFooterProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  theme?: ThemeType;
  elementId?: string;
};

export const PanelHeaderFooter: FC<PanelHeaderFooterProps> = ({
  header,
  children,
  footer,
  theme,
  elementId,
}) => {
  return (
    <div className={wrapperStyle(theme)} id={elementId}>
      <div className={headerStyle(theme)}>{header}</div>
      <div className={contentStyle()}>{children}</div>
      <div className={footerStyle(theme)}>{footer}</div>
    </div>
  );
};
