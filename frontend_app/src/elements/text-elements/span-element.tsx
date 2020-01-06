import * as React from "react";
import { iTextElementProps } from "./spec";

class SpanElement extends React.Component<iTextElementProps> {
  public render() {
    const cssClass = this.props.textStyles
      ? this.props.textStyles
      : "paragraph";

    return (
      <span className={cssClass} id={this.props.elementId}>
        {this.props.children}
      </span>
    );
  }
}

export default SpanElement;
