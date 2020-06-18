import React, { FC, ReactNode } from "react";

type BasicContainerProps = {
  children: ReactNode;
  cssWidth?: string;
  cssStyle?: string;
};

export const ContainerMain: FC<BasicContainerProps> = ({
  children,
  cssWidth,
  cssStyle,
}) => {
  return (
    <main
      className={`container mx-auto ${cssWidth || "md:w-3/4 lg:w-3/5 "} ${
        cssStyle || ""
      }`}
    >
      {children}
    </main>
  );
};
