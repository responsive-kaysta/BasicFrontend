import * as React from "react";
import iTextElementProps from "./spec/iTextElementProps";

class ParagraphElement extends React.Component<iTextElementProps> {
  public render() {
    const cssClass = this.props.cssClass ? this.props.cssClass : "paragraph";

    return <p className={cssClass}>{this.props.children}</p>;
  }
}

export default ParagraphElement;
