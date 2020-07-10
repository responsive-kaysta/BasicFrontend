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
    return (
      <button
        onClick={() => openWindow(href)}
        className="text-blue-900 hover:text-blue-800 active:text-blue-800 visited:text-blue-800 text-base font-normal md:text-lg md:font-medium tracking-wide"
      >
        {text}
      </button>
    );
  }
  return (
    <a
      href={href}
      className="text-blue-900 hover:text-blue-800 active:text-blue-800 visited:text-blue-800 text-base font-normal md:text-lg md:font-medium tracking-wide"
    >
      {text}
    </a>
  );
};
