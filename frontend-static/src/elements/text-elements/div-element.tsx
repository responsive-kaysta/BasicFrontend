import * as React from "react";
import { iTextElementProps } from "./spec";

class DivElement extends React.Component<iTextElementProps> {
  public render() {
    const cssClass = this.props.textStyles
      ? this.props.textStyles
      : "paragraph";

    return (
      <div className={cssClass} id={this.props.elementId}>
        {this.props.children}
      </div>
    );
  }
}

export default DivElement;
