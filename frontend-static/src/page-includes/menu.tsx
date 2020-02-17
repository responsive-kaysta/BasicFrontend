import { Link } from "@reach/router";
import * as React from "react";
import { FC, useState } from "react";

export const Menu: FC = () => {
  const [isRight, setIsRight] = useState<boolean>(false);

  const showRight = () => {
    setIsRight(isRight ? false : true);
  };

  return (
    <>
      <span
        onClick={showRight}
        className={isRight ? "menuClose" : "menuToggle"}
      >
        <span className={!isRight ? "" : "displayNone"}>menu</span>
      </span>

      <div className={isRight ? "menu displayBlock" : "displayNone"} id="menu">
        <ul onClick={showRight}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/text-heading">Texts & Headings</Link>
          </li>
          <li>
            <Link to="/link-button">Link & Button</Link>
          </li>
          <li>
            <Link to="/list-icon">Lists & Icons</Link>
          </li>
          <li>
            <Link to="/container">Container</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
