import * as React from "react";
import { iTextElementProps } from "./spec";

class ParagraphElement extends React.Component<iTextElementProps> {
  public render() {
    const cssClass = this.props.textStyles
      ? this.props.textStyles
      : "paragraph";

    return (
      <p className={cssClass} id={this.props.elementId}>
        {this.props.children}
      </p>
    );
  }
}

export default ParagraphElement;
