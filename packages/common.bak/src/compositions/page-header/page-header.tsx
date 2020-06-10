import * as React from "react";
import { FC } from "react";
import { PageStyleTemplates } from "../../style-types";

interface PageHeaderProps {
  header: string;
  paragraph?: string;
  pageStyle?: PageStyleTemplates;
}

export const PageHeader: FC<PageHeaderProps> = ({
  header,
  paragraph,
  pageStyle,
}) => {
  return (
    <div className={pageStyle}>
      <div className="page-header">
        <h2>{header}</h2>
      </div>
      {paragraph && <p className="lead">{paragraph}</p>}
    </div>
  );
};
