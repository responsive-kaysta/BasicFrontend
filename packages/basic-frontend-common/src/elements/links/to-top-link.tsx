import React, { FC, ReactNode } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ThemeType } from "../../typings";

type ToTopLinkProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const ToTopLink: FC<ToTopLinkProps> = ({ children, theme }) => {
  const style = `bg-transparent ${
    theme ? theme.body.textColor : "text-gray-100"
  } hover:${
    theme ? theme.link.hoverColor : "text-red-500"
  } text-center font-semibold py-2 px-2 cursor-pointer`;

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <a onClick={() => scrollToTop()} className={style}>
      {children}
    </a>
  );
};
