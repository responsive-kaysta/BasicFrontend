import * as React from "react";
import { FC } from "react";
import * as Scroll from "react-scroll";

var scroll = Scroll.animateScroll;

export const ToTopButton: FC = () => {
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    scroll.scrollToTop();
  };
  return (
    <div className="totop-wrapper">
      <button className="totop" onClick={handleClick}>
        &#x2191;
      </button>
    </div>
  );
};
