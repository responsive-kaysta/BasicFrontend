import * as React from "react";
import { iTileItemProps } from "./spec";

class TileItem extends React.Component<iTileItemProps> {
  public render() {
    const pageStyle = this.props.pageStyle ? this.props.pageStyle : "light";
    const cssClass = `${pageStyle} box-equal box-round-corner`;
    const itemClass = `item-${this.props.item}`;

    const styles = {
      width: "100%",
      height: "100%",
      backgroundImage: "url(/assets/pictogram/ai_1.png)"
    };

    return (
      <div className={itemClass}>
        <div className={cssClass} style={styles}>
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
