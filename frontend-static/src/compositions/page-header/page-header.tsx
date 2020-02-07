import * as React from "react";
import { ePageStyleTemplates } from "../../page-types/";
import { FC } from "react";

interface iPageHeaderProps {
  header: string;
  paragraph?: string;
  pageStyle?: ePageStyleTemplates;
}

export const PageHeader: FC<iPageHeaderProps> = ({
  header,
  paragraph,
  pageStyle
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
