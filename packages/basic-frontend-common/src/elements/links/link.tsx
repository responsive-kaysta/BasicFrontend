import React, { FC } from "react";
import { defLink, ThemeType } from "../../identity";

type LinkProps = {
  text: string;
  href: string;
  newWindow?: boolean;
  theme?: ThemeType;
};

export const Link: FC<LinkProps> = ({
  text,
  href,
  newWindow = false,
  theme,
}) => {
  const style = `${
    theme
      ? `${theme.link.textColor} hover:${theme.link.hoverColor} active:${theme.link.activeColor} visited:${theme.link.visitedColor} focus:${theme.link.focusColor}`
      : "text-gray-800 hover:text-blue-800 active:text-blue-800 visited:text-blue-800 "
  } ${defLink}`;

  const openWindow = (url: string) => {
    window.open(url);
  };
  if (newWindow) {
    return (
      <button onClick={() => openWindow(href)} className={style}>
        {text}
      </button>
    );
  }
  return (
    <a href={href} className={style}>
      {text}
    </a>
  );
};
