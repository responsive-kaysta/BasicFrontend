import * as React from "react";
import { FC } from "react";

interface SpanLinkElementProps {
  text: string;
  link: string;
  showLinkIcon?: boolean;
  showLinkDivider?: boolean;
}

export const SpanLinkElement: FC<SpanLinkElementProps> = ({
  text,
  link,
  showLinkIcon,
  showLinkDivider
}) => {
  const openWindow = (url: string) => {
    window.open(url);
  };

  return (
    <span
      onClick={() => openWindow(link)}
      className={showLinkIcon && "fas fa-link clickable"}
    >
      {showLinkDivider && " - "}
      {text}
    </span>
  );
};
