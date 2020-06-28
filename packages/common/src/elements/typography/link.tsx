import React, { FC } from "react";

type LinkProps = {
  text: string;
  href: string;
  newWindow?: boolean;
};

export const Link: FC<LinkProps> = ({ text, href, newWindow = false }) => {
  const openWindow = (url: string) => {
    window.open(url);
  };
  if (newWindow) {
    return <button onClick={() => openWindow(href)}>{text}</button>;
  }
  return <a href={href}>{text}</a>;
};
