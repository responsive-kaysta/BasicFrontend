import * as React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./menu";

class Header extends React.Component {
  public render() {
    return (
      <>
        <header id="header">
          <h1>
            <NavLink to="/">MasterArchive</NavLink>
          </h1>
          <nav id="nav">
            <Menu pageKey="main-menu" />
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
