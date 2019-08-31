import * as React from "react";
import { NavLink } from "react-router-dom";

import IToggleMenuState from "../../application/interfaces/page/IToggleMenuState";

class ToggleMenu extends React.Component<any, IToggleMenuState> {
  constructor(props: any, state: IToggleMenuState) {
    super(props);
    this.state = { isRight: false };
    this.showRight = this.showRight.bind(this);
  }

  public showRight = () => {
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
              <NavLink to="/" activeClassName="menu-active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff" activeClassName="menu-active">
                Stuff
              </NavLink>
            </li>
            <li>
              <NavLink to="/latestarticles" activeClassName="menu-active">
                Latest Articles
              </NavLink>
            </li>
            <li>
              <NavLink to="/adminoverviewboxes" activeClassName="menu-active">
                Admin Overview with Boxes
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="menu-active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default ToggleMenu;
