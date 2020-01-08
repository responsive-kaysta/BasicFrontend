import * as React from "react";
import { iListElementProps, eListElementTypes } from "./spec";

class ListElement extends React.Component<iListElementProps> {
  public render() {
    let listElement;
    switch (this.props.listElementType) {
      case eListElementTypes.li:
        listElement = <li>{this.props.children}</li>;
        break;
      default:
        listElement = <li>{this.props.children}</li>;
        break;
    }

    return <>{listElement}</>;
  }
}

export default ListElement;
