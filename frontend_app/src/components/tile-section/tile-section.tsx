import * as React from "react";
import iTileSectionProps from "./spec/iTileSectionProps";

class TileSection extends React.Component<iTileSectionProps> {
  public render() {
    return (
      <section className={this.props.pageStyle}>
        <section className="blogarchive">{this.props.children}</section>
      </section>
    );
  }
}

export default TileSection;
