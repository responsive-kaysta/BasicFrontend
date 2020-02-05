import { Link } from "@reach/router";
import * as React from "react";
import { FC } from "react";
import { PAGE_NAME } from "../constants";
import { Menu } from "./menu";

export const Header: FC = () => {
  return (
    <>
      <header id="header">
        <h1>
          <Link to="/">{PAGE_NAME}</Link>
        </h1>
        <nav id="nav">
          <Menu />
        </nav>
      </header>
    </>
  );
};
