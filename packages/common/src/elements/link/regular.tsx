import * as React from "react";
import { FC } from "react";

interface RegularLinkProps {
  text: string;
  link: string;
}

export const RegularLink: FC<RegularLinkProps> = ({ text, link }) => {
  return <a href={link}>{text}</a>;
};
