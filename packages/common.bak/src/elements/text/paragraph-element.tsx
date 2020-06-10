import * as React from "react";
import { FC, ReactNode } from "react";
import { TextStyles } from "./text-styles";

interface ParagraphProps {
  children: ReactNode;
  style?: TextStyles;
  elementId?: string;
}

export const Paragraph: FC<ParagraphProps> = ({
  children,
  style,
  elementId,
}) => {
  const cssClass = style ? style : "paragraph";

  return (
    <p className={cssClass} id={elementId}>
      {children}
    </p>
  );
};
