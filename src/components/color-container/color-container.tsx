import * as React from "react";
import { FC, ReactNode } from "react";
import { ePageStyleTemplates } from "../../page-types/";

interface iColorContainerProps {
  children: ReactNode;
  pageStyle: ePageStyleTemplates;
  padded?: boolean;
  cssClass?: string;
}

export const ColorContainer: FC<iColorContainerProps> = ({
  children,
  pageStyle,
  padded,
  cssClass
}) => {
  const cssStyle = padded ? "container " + pageStyle : pageStyle;

  const customCssClass = cssClass ? cssStyle + " " + cssClass : cssStyle;

  return <div className={customCssClass}>{children}</div>;
};
