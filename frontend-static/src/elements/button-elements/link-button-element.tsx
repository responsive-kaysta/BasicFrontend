import * as React from "react";
import { FC } from "react";
import { eButtonStyles } from "../../page-types/";

interface LinkButtonElementProps {
  text: string;
  link?: string;
  cssClass?: eButtonStyles;
}

export const LinkButtonElement: FC<LinkButtonElementProps> = ({
  text,
  link,
  cssClass
}) => {
  const cssStyle = cssClass ? cssClass : "button";

  return (
    <a href={link} className={cssStyle}>
      {text}
    </a>
  );
};
