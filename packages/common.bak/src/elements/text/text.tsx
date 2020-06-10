import * as React from "react";
import { FC, ReactNode } from "react";
import { TextStyles } from "./text-styles";
import { TextTypes } from "./text-types";
import { Div } from "./div-element";
import { Paragraph } from "./paragraph-element";
import { Span } from "./span-element";

interface TextProps {
  children: ReactNode;
  type: TextTypes;
  style?: TextStyles;
  elementId?: string;
}

export const Text: FC<TextProps> = ({ children, type, style, elementId }) => {
  if (type === TextTypes.code) {
    return <></>;
  } else if (type === TextTypes.div) {
    return <Div children={children} elementId={elementId} style={style} />;
  } else if (type === TextTypes.paragraph) {
    return (
      <Paragraph children={children} elementId={elementId} style={style} />
    );
  } else if (type === TextTypes.pre) {
    return <></>;
  } else if (type === TextTypes.span) {
    return <Span children={children} elementId={elementId} style={style} />;
  } else {
    return (
      <Paragraph children={children} elementId={elementId} style={style} />
    );
  }
};
