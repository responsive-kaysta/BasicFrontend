import React, { FC, ReactNode } from "react";

type PanelHeaderProps = {
  header: ReactNode;
  content: ReactNode;
  contentCss?: string;
  headerCss?: string;
  wrapperCss?: string;
};

export const PanelHeader: FC<PanelHeaderProps> = ({
  header,
  content,
  contentCss,
  headerCss,
  wrapperCss,
}) => {
  return (
    <div
      className={`overflow-hidden shadow rounded-lg ${
        wrapperCss || "bg-white"
      }`}
    >
      <div
        className={`border-b px-4 py-5 sm:px-6 ${
          headerCss || "border-gray-200"
        }`}
      >
        {header}
      </div>
      <div className={`px-4 py-5 sm:p-6 ${contentCss || ""}`}>{content}</div>
    </div>
  );
};
