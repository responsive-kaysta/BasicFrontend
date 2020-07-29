import React, { FC, ReactNode } from "react";
import * as Scroll from "react-scroll";
import { ThemeType } from "../../identity";

var ScrollLinkElement = Scroll.Link;

type ScrollLinkProps = {
  children: ReactNode;
  elementId: string;
  theme?: ThemeType;
};

export const ScrollLink: FC<ScrollLinkProps> = ({
  children,
  elementId,
  theme,
}) => {
  const style = `bg-transparent ${
    theme ? theme.body.textColor : "text-gray-100"
  } hover:${
    theme ? theme.link.hoverColor : "text-red-500"
  } text-center font-semibold py-2 px-2 cursor-pointer`;

  return (
    <ScrollLinkElement
      className={style}
      to={elementId}
      spy={true}
      smooth="easeInOutQuint"
      duration={2500}
      offset={0}
    >
      {children}
    </ScrollLinkElement>
  );
};
