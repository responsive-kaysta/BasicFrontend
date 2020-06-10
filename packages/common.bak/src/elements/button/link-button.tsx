import * as React from "react";
import { FC } from "react";
import { ButtonStyles } from "./button-styles";

interface LinkButtonProps {
  text: string;
  link?: string;
  style?: ButtonStyles;
}

export const LinkButton: FC<LinkButtonProps> = ({ text, link, style }) => {
  const cssStyle = style ? style : "button";

  return (
    <a href={link} className={cssStyle}>
      {text}
    </a>
  );
};
