import * as React from "react";
import { FC } from "react";
import { HeaderStyles } from "./header-styles";

interface HeaderProps {
  text: string;
  style?: HeaderStyles;
}

export const Header: FC<HeaderProps> = ({ text, style }) => {
  if (!style) {
    return <h1>{text}</h1>;
  }

  return <h2 className={style}>{text}</h2>;
};
