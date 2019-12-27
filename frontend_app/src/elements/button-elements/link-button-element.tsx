import * as React from "react";
import iButtonElementProps from "./spec/iButtonElementProps";

class LinkButtonElement extends React.Component<iButtonElementProps> {
  public render() {
    const cssClass = this.props.cssClass ? this.props.cssClass : "button";

    return (
      <a href={this.props.link} className={cssClass}>
        {this.props.text}
      </a>
    );
  }
}

export default LinkButtonElement;
