import React, { FC, ReactNode } from "react";

type BasicContainerProps = {
  children: ReactNode;
  cssStyle?: string;
};

export const BasicContainer: FC<BasicContainerProps> = ({
  children,
  cssStyle,
}) => {
  return (
    <div className={`container md:w-3/4 lg:w-3/5 mx-auto ${cssStyle || ""}`}>
      {children}
    </div>
  );
};
