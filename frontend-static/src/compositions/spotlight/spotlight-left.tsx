import * as React from "react";

function SpotlightLeft(props: {
  header: string;
  paragraph: string;
  pictogram: string;
  pageStyle: string;
}) {
  return (
    <section className={props.pageStyle}>
      <div className="image">
        <img
          className="wide"
          src={props.pictogram}
          alt="Brains and engineering"
        />
      </div>
      <div className="content">
        <h2>{props.header}</h2>
        <p>{props.paragraph}</p>
      </div>
    </section>
  );
}

export default SpotlightLeft;
