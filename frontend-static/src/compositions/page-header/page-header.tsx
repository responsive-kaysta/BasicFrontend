import * as React from "react";
import { iPageHeaderProps } from "./spec";

class PageHeader extends React.Component<iPageHeaderProps> {
  public render() {
    const header = this.props.header;
    const paragraph = this.props.paragraph;
    const pageStyle = this.props.pageStyle;

    return (
      <div className={pageStyle}>
        <div className="page-header">
          <h2>{header}</h2>
        </div>
        {paragraph && <p className="lead">{paragraph}</p>}
      </div>
    );
  }
}

export default PageHeader;
