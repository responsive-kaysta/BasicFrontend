import React, { FC, ReactNode } from "react";

type PanelHeaderProps = {
  header: ReactNode;
  children: ReactNode;
};

export const PanelHeader: FC<PanelHeaderProps> = ({ children, header }) => {
  return (
    <div className={`overflow-hidden shadow rounded-lg bg-white`}>
      <div
        className={`border-b px-4 py-5 sm:px-6 border-gray-200 text-lg font-semibold leading-5`}
      >
        {header}
      </div>
      <div className={`px-4 py-5 sm:p-6`}>{children}</div>
    </div>
  );
};
