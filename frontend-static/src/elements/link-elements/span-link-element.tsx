import * as React from "react";
import { iRegularLinkElementProps } from "./spec";

class SpanLinkElement extends React.Component<iRegularLinkElementProps> {
  openWindow = (url: string) => {
    window.open(url);
  };

  public render() {
    return (
      <>
        <span onClick={() => this.openWindow(this.props.link)}>
          {this.props.text}
        </span>
      </>
    );
  }
}

export default SpanLinkElement;
