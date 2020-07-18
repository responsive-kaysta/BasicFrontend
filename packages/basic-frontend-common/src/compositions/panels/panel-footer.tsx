import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";
import { contentStyle, footerStyle, wrapperStyle } from "./styles";

type PanelFooterProps = {
  children: ReactNode;
  footer: ReactNode;
  theme?: ThemeType;
  elementId?: string;
};

export const PanelFooter: FC<PanelFooterProps> = ({
  children,
  footer,
  theme,
  elementId,
}) => {
  return (
    <div className={wrapperStyle(theme)} id={elementId}>
      <div className={contentStyle()}>{children}</div>
      <div className={footerStyle(theme)}>{footer}</div>
    </div>
  );
};
