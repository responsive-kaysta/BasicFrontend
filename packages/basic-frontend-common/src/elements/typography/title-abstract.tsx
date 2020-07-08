import React, { FC } from "react";

export const TitleAbstract: FC = ({ children }) => {
  return (
    <h3 className="text-lg font-semibold md:text-xl md:font-bold uppercase tracking-wider">
      {children}
    </h3>
  );
};
