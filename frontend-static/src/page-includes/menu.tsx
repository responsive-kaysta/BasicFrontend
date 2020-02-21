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
            <Link to="/landing-light-page-style">Landing-Page Example</Link>
          </li>
          <li>
            <Link to="/regular-light-page-style">Regular-Page Example</Link>
          </li>
          <li>
            <Link to="#">Atomic Objects</Link>
          </li>
          <li>
            <Link to="#">Molecular Objects</Link>
          </li>
          <li>
            <Link to="#">Organisms</Link>
          </li>
          <li>
            <Link to="#">Page Examples</Link>
          </li>
          <li>
            <Link to="#">Color Style Examples</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
