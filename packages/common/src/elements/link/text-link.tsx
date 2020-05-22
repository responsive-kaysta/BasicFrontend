import * as React from "react";
import { FC } from "react";
import { LinkTypes } from "./link-types";

interface TextLinkProps {
  text: string;
  link: string;
  type?: LinkTypes;
  showLinkIcon?: boolean;
  showLinkDivider?: boolean;
}

export const TextLink: FC<TextLinkProps> = ({
  text,
  link,
  showLinkIcon,
  showLinkDivider,
}) => {
  const openWindow = (url: string) => {
    window.open(url);
  };

  const cssClass = showLinkIcon ? "fas fa-link clickable" : "clickable";

  return (
    <span onClick={() => openWindow(link)} className={cssClass}>
      {showLinkDivider && " - "}
      {text}
    </span>
  );
};
