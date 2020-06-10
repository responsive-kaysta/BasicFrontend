import * as React from "react";
import { FC, ReactNode } from "react";
import { TextStyles } from "./text-styles";

interface SpanProps {
  children: ReactNode;
  style?: TextStyles;
  elementId?: string;
}

export const Span: FC<SpanProps> = ({ children, style, elementId }) => {
  const cssClass = style ? style : "paragraph";

  return (
    <span className={cssClass} id={elementId}>
      {children}
    </span>
  );
};
