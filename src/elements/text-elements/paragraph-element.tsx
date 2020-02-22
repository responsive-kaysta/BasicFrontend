import * as React from "react";
import { eTextStyles } from "page-types/eTextStyles";
import { FC, ReactNode } from "react";

interface ParagraphElementProps {
  children: ReactNode;
  textStyles?: eTextStyles;
  elementId?: string;
}

export const ParagraphElement: FC<ParagraphElementProps> = ({
  children,
  textStyles,
  elementId
}) => {
  const cssClass = textStyles ? textStyles : "paragraph";

  return (
    <p className={cssClass} id={elementId}>
      {children}
    </p>
  );
};
