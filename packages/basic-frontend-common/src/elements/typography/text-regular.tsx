import React, { FC } from "react";

export const TextRegular: FC = ({ children }) => {
  return (
    <p className="text-base font-normal md:text-lg md:font-medium">
      {children}
    </p>
  );
};
