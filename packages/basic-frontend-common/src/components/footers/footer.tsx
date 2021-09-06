import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../typings";

type FooterProps = {
  children?: ReactNode;
  theme?: ThemeType;
};

export const Footer: FC<FooterProps> = ({ children, theme }) => {
  const style = `bottom-0 z-10 w-full ${
    theme ? theme.body.backgroundColor : "bg-gray-800"
  } ${theme ? theme.body.textColor : "text-gray-100"}`;
  return (
    <footer className={style}>
      <div className="flex flex-col items-center justify-center h-auto">
        {children}
      </div>
    </footer>
  );
};
