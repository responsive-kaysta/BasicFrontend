import { eTextStyles } from "page-types/eTextStyles";
import * as React from "react";
import { FC, ReactNode } from "react";

interface DivElementProps {
  children: ReactNode;
  textStyles?: eTextStyles;
  elementId?: string;
}
export const DivElement: FC<DivElementProps> = ({
  children,
  textStyles,
  elementId
}) => {
  const cssClass = textStyles ? textStyles : "paragraph";

  return (
    <div className={cssClass} id={elementId}>
      {children}
    </div>
  );
};
