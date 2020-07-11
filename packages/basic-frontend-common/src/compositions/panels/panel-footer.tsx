import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";
import { contentStyle, footerStyle, wrapperStyle } from "./styles";

type PanelFooterProps = {
  children: ReactNode;
  footer: ReactNode;
  theme?: ThemeType;
};

export const PanelFooter: FC<PanelFooterProps> = ({
  children,
  footer,
  theme,
}) => {
  return (
    <div className={wrapperStyle(theme)}>
      <div className={contentStyle()}>{children}</div>
      <div className={footerStyle(theme)}>{footer}</div>
    </div>
  );
};
