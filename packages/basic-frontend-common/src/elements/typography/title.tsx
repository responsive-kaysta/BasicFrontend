import React, { FC } from "react";

export const Title: FC = ({ children }) => {
  return (
    <h1 className="text-2xl md:text-3xl font-semibold md:font-bold tracking-wider">
      {children}
    </h1>
  );
};
