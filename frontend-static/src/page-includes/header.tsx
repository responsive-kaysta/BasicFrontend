import { Link } from "@reach/router";
import * as React from "react";
import { PAGE_NAME } from "../constants";
import Menu from "./menu";

class Header extends React.Component {
  public render() {
    return (
      <>
        <header id="header">
          <h1>
            <Link to="/">{PAGE_NAME}</Link>
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
