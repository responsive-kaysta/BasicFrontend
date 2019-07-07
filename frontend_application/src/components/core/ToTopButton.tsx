import * as React from "react";
import * as Scroll from "react-scroll";

var scroll = Scroll.animateScroll;

function handleClick(e: { preventDefault: () => void }) {
  e.preventDefault();
  scroll.scrollToTop();
}

function ToTopButton() {
  return (
    <div className="totop-wrapper">
      <button className="totop" onClick={handleClick}>
        &#x2191;
      </button>
    </div>
  );
}

export default ToTopButton;
