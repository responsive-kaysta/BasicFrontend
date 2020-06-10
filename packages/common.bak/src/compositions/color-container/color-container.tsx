import * as React from "react";
import { FC, ReactNode } from "react";
import { PageStyleTemplates } from "../../style-types";

interface ColorContainerProps {
  children: ReactNode;
  style: PageStyleTemplates;
  padded?: boolean;
  cssClass?: string;
}

export const ColorContainer: FC<ColorContainerProps> = ({
  children,
  style,
  padded,
  cssClass,
}) => {
  const cssStyle = padded ? `container ${style}` : style;

  const customCssClass = cssClass ? cssStyle + " " + cssClass : cssStyle;

  return <div className={customCssClass}>{children}</div>;
};
