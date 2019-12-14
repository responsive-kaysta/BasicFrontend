import * as React from "react";
import { iEyeCatcherProps } from "./spec";

class EyeCatcher extends React.Component<iEyeCatcherProps> {
  public render() {
    const style = "special " + this.props.cssStyle;
    const header = this.props.header;
    const paragraph = this.props.paragraph;
    const elementId = this.props.elementId;

    return (
      <>
        <section className={style} id={elementId}>
          <header className="major">
            <h2>{header}</h2>
            <p>{paragraph}</p>
          </header>
        </section>
      </>
    );
  }
}

export default EyeCatcher;
