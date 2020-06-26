import React, { FC, ReactNode } from "react";

type FooterProps = {
  children?: ReactNode;
};

export const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <footer className="bottom-0 z-10 w-full bg-gray-800 text-gray-100">
      <div className="flex flex-col items-center justify-center h-auto">
        {children}
      </div>
    </footer>
  );
};
