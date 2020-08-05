import React, { FC, ReactNode } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Icon, IconSize } from "../../identity";
import { ThemeType } from "../../typings";

type ToTopLinkProps = {
  children?: ReactNode;
  theme?: ThemeType;
};

export const ToTopLink: FC<ToTopLinkProps> = ({ children, theme }) => {
  const style = `py-2 md:py-4 ${
    theme ? theme.body.textColor : "text-gray-100"
  } hover:${
    theme ? theme.link.hoverColor : "text-red-500"
  } font-semibold cursor-pointer`;

  const wrapper = `flex flex-col items-center w-20 mx-auto bg-transparent text-center`;

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className={wrapper}>
      <a onClick={() => scrollToTop()} className={style}>
        <Icon name="long_arrow_up" size={IconSize.xs} />
        {children}
      </a>
    </div>
  );
};
