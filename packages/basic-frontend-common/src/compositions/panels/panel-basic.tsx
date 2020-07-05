import React, { FC, ReactNode } from "react";

type PanelBasicProps = {
  children: ReactNode;
};

export const PanelBasic: FC<PanelBasicProps> = ({ children }) => {
  return (
    <div
      className={`bg-white border-gray-300 overflow-hidden shadow rounded-lg`}
    >
      <div className={`px-4 py-5 sm:p-6`}>{children}</div>
    </div>
  );
};
