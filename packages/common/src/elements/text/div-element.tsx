import * as React from "react";
import { FC, ReactNode } from "react";
import { TextStyles } from "./text-styles";

interface DivProps {
  children: ReactNode;
  style?: TextStyles;
  elementId?: string;
}

export const Div: FC<DivProps> = ({ children, style, elementId }) => {
  const cssClass = style ? style : "paragraph";

  return (
    <div className={cssClass} id={elementId}>
      {children}
    </div>
  );
};
