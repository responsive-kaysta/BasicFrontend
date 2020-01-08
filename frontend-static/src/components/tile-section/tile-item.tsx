import * as React from "react";
import { iTileItemProps } from "./spec";

class TileItem extends React.Component<iTileItemProps> {
  public render() {
    const pageStyle = this.props.pageStyle ? this.props.pageStyle : "light";
    const cssClass = `${pageStyle} box-equal box-round-corner`;
    const itemClass = `item-${this.props.item}`;
    const bgImg = this.props.backgroundImage ? this.props.backgroundImage : "";

    const styles = {
      backgroundSize: "50%",
      backgroundPosition: "top right",
      backgroundRepeat: "no-repeat",
      backgroundImage:
        "linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(255,255,255,0) 100%), url(" +
        bgImg +
        ")"
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
