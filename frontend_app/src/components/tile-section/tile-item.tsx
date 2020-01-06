import * as React from "react";
import { iTileItemProps } from "./spec";

class TileItem extends React.Component<iTileItemProps> {
  public render() {
    const pageStyle = this.props.pageStyle ? this.props.pageStyle : "light";
    const cssClass = `${pageStyle} box-equal box-round-corner`;
    const itemClass = `item-${this.props.item}`;
    return (
      <div className={itemClass}>
        <div className={cssClass}>
          <a href={this.props.link}>
            <div className="date">{this.props.date}</div>
            <h3>{this.props.header}</h3>
            <div className="paragraph">
              <p>{this.props.paragraph}</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default TileItem;
