import * as React from "react";
import { FC } from "react";

interface RegularLinkElementProps {
  text: string;
  link: string;
}

export const RegularLinkElement: FC<RegularLinkElementProps> = ({
  text,
  link
}) => {
  return <a href={link}>{text}</a>;
};
