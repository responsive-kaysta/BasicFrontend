import React, { FC, ReactNode } from "react";

type PanelHeaderFooterProps = {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
  contentCss?: string;
  headerCss?: string;
  footerCss?: string;
  wrapperCss?: string;
};

export const PanelHeaderFooter: FC<PanelHeaderFooterProps> = ({
  header,
  content,
  footer,
  contentCss,
  headerCss,
  footerCss,
  wrapperCss,
}) => {
  return (
    <div
      className={`overflow-hidden shadow rounded-lg ${
        wrapperCss || "bg-white"
      }`}
    >
      <div
        className={`border-b px-4 py-5 sm:px-6 text-lg font-semibold leading-5 ${
          headerCss || "border-gray-200"
        }`}
      >
        {header}
      </div>
      <div className={`px-4 py-5 sm:p-6 ${contentCss || ""}`}>{content}</div>
      <div
        className={`border-t px-4 py-4 sm:px-6 text-sm ${
          footerCss || "border-gray-200"
        }`}
      >
        {footer}
      </div>
    </div>
  );
};
