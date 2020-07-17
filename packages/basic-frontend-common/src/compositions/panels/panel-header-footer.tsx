import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";
import { contentStyle, footerStyle, headerStyle, wrapperStyle } from "./styles";

type PanelHeaderFooterProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  theme?: ThemeType;
};

export const PanelHeaderFooter: FC<PanelHeaderFooterProps> = ({
  header,
  children,
  footer,
  theme,
}) => {
  return (
    <div className={wrapperStyle(theme)}>
      <div className={headerStyle(theme)}>{header}</div>
      <div className={contentStyle()}>{children}</div>
      <div className={footerStyle(theme)}>{footer}</div>
    </div>
  );
};
