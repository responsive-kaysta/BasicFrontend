import * as React from "react";
import { eTextStyles } from "page-types/eTextStyles";
import { ReactNode, FC } from "react";

interface SpanElementProps {
  children: ReactNode;
  textStyles?: eTextStyles;
  elementId?: string;
}

export const SpanElement: FC<SpanElementProps> = ({
  children,
  textStyles,
  elementId
}) => {
  const cssClass = textStyles ? textStyles : "paragraph";

  return (
    <span className={cssClass} id={elementId}>
      {children}
    </span>
  );
};
