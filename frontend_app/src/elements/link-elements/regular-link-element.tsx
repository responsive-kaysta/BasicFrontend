import * as React from "react";
import iRegularLinkElementProps from "./spec/iRegularLinkElementProps";

class RegularLinkElement extends React.Component<iRegularLinkElementProps> {
  openWindow = (url: string) => {
    window.open(url);
  };

  public render() {
    return (
      <>
        <a href={this.props.link}>{this.props.text}</a>
      </>
    );
  }
}

export default RegularLinkElement;
