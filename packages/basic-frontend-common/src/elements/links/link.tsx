import React, { FC, ReactNode } from "react";
import { defLink, ThemeType } from "../../identity";
import { openUrl, openWindow } from "../../utils";
import { ButtonSize } from "../buttons";
import { buttonWrapper, styleSpecial } from "../buttons/button-styles";

type LinkProps = {
  children: ReactNode;
  href: string;
  newWindow?: boolean;
  buttonLink?: boolean;
  theme?: ThemeType;
};

export const Link: FC<LinkProps> = ({
  children,
  href,
  newWindow = false,
  buttonLink = false,
  theme,
}) => {
  const style = `${
    theme
      ? `${theme.link.textColor} hover:${theme.link.hoverColor} active:${theme.link.activeColor} visited:${theme.link.visitedColor} focus:${theme.link.focusColor}`
      : "text-gray-800 hover:text-blue-800 active:text-blue-800 visited:text-blue-800 "
  } ${defLink}`;

  if (newWindow) {
    return (
      <button onClick={() => openWindow(href)} className={style}>
        {children}
      </button>
    );
  } else if (buttonLink) {
    return (
      <span className={buttonWrapper(ButtonSize.normal)}>
        <button
          onClick={() => (newWindow ? openWindow(href) : openUrl(href))}
          type="button"
          className={styleSpecial(ButtonSize.normal)}
        >
          {children}
        </button>
      </span>
    );
  } else
    return (
      <a href={href} className={style}>
        {children}
      </a>
    );
};
