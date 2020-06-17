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
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="border-b border-gray-200 px-4 py-5 sm:px-6">{header}</div>
      <div className="px-4 py-5 sm:p-6">{content}</div>
      <div className="border-t border-gray-200 px-4 py-4 sm:px-6">{footer}</div>
    </div>
  );
};
