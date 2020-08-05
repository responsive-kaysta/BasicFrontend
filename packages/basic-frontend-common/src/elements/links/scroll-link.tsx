import React, { FC, ReactNode } from "react";
import * as Scroll from "react-scroll";
import { Icon, IconSize } from "../../identity";
import { ThemeType } from "../../typings";

var ScrollLinkElement = Scroll.Link;

type ScrollLinkProps = {
  children?: ReactNode;
  elementId: string;
  theme?: ThemeType;
};

export const ScrollLink: FC<ScrollLinkProps> = ({
  children,
  elementId,
  theme,
}) => {
  const style = `py-2 md:py-4 ${
    theme ? theme.body.textColor : "text-gray-100"
  } hover:${
    theme ? theme.link.hoverColor : "text-red-500"
  } font-semibold cursor-pointer`;

  const wrapper = `flex flex-col items-center w-20 mx-auto bg-transparent text-center`;

  return (
    <div className={wrapper}>
      <ScrollLinkElement
        className={style}
        to={elementId}
        spy={true}
        smooth="easeInOutQuint"
        duration={2500}
        offset={0}
      >
        {children}
        <Icon name="down_arrow" size={IconSize.xs} />
      </ScrollLinkElement>
    </div>
  );
};
