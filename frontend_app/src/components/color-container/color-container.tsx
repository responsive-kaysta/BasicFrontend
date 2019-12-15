import * as React from "react";
import iColorContainerProps from "./spec/iColorContainerProps";

class ColorContainer extends React.Component<iColorContainerProps> {
  public render() {
    const pageStyle = this.props.padded
      ? "container " + this.props.pageStyle
      : this.props.pageStyle;

    return <div className={pageStyle}>{this.props.children}</div>;
  }
}

export default ColorContainer;
