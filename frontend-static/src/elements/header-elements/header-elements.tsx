import * as React from "react";
import { eHeaderElementTypes, iHeaderElementProps } from "./spec";

class HeaderElements extends React.Component<iHeaderElementProps> {
  public render() {
    let listElements;
    switch (this.props.headerElementType) {
      case eHeaderElementTypes.abstract:
        listElements = <h2 className="abstract">{this.props.children}</h2>;
        break;
      case eHeaderElementTypes.headLine:
        listElements = <h2 className="headline">{this.props.children}</h2>;
        break;
      case eHeaderElementTypes.headLineCenter:
        listElements = (
          <h2 className="headline align-center">{this.props.children}</h2>
        );
        break;
      default:
        listElements = <h1>{this.props.children}</h1>;
        break;
    }

    return <>{listElements}</>;
  }
}

export default HeaderElements;
