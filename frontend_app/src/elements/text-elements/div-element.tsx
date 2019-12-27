import * as React from "react";
import iTextElementProps from "./spec/iTextElementProps";

class DivElement extends React.Component<iTextElementProps> {
  public render() {
    const cssClass = this.props.cssClass ? this.props.cssClass : "paragraph";

    return (
      <div className={cssClass} id={this.props.elementId}>
        {this.props.children}
      </div>
    );
  }
}

export default DivElement;
