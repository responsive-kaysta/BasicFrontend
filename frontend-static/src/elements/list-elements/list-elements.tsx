import * as React from "react";
import { iListElementProps, eListElementTypes } from "./spec";

class ListElements extends React.Component<iListElementProps> {
  public render() {
    let listElements;
    switch (this.props.listElementType) {
      case eListElementTypes.li:
        listElements = <li>{this.props.children}</li>;
        break;
      default:
        listElements = <li>{this.props.children}</li>;
        break;
    }

    return <>{listElements}</>;
  }
}

export default ListElements;
