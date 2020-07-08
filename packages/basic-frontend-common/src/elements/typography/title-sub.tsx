import React, { FC } from "react";

export const TitleSub: FC = ({ children }) => {
  return (
    <h2 className="text-xl font-semibold md:text-2xl md:font-bold tracking-wider">
      {children}
    </h2>
  );
};
