import { Link } from "@reach/router";
import * as React from "react";
import { iMenuState, iPageProps } from "./spec";

class Menu extends React.Component<iPageProps, iMenuState> {
  constructor(props: iPageProps, state: iMenuState) {
    super(props, state);
    this.state = { isRight: false };
    this.showRight = this.showRight.bind(this);
  }

  private showRight = () => {
    this.setState({ isRight: !this.state.isRight });
  };

  public render() {
    return (
      <>
        <span
          onClick={this.showRight}
          className={this.state.isRight ? "menuClose" : "menuToggle"}
        >
          <span className={!this.state.isRight ? "" : "displayNone"}>menu</span>
        </span>

        <div
          className={this.state.isRight ? "menu displayBlock" : "displayNone"}
          id="menu"
        >
          <ul onClick={this.showRight}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Über uns</Link>
            </li>
            <li>
              <Link to="/technic">Technik</Link>
            </li>
            <li>
              <Link to="/projects">Projekte</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Menu;
