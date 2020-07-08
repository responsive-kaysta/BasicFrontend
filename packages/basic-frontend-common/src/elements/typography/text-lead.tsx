import React, { FC } from "react";

export const TextLead: FC = ({ children }) => {
  return (
    <p className="text-lg font-medium md:text-xl md:font-semibold tracking-wider">
      {children}
    </p>
  );
};
