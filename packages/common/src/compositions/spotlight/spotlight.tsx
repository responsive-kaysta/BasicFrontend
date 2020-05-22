import * as React from "react";
import { FC } from "react";
import { PageStyleTemplates, Pictograms } from "../../style-types";
import { SpotlightOrientation } from "./spotlight-orientation";

interface SpotlightProps {
  header: string;
  pictogram: Pictograms;
  orientation: SpotlightOrientation;
  paragraph?: string;
  pageStyle?: PageStyleTemplates;
}

export const Spotlight: FC<SpotlightProps> = ({
  header,
  pictogram,
  orientation,
  pageStyle,
  paragraph,
}) => {
  let cssStyle = "";

  if (orientation === SpotlightOrientation.right) {
    cssStyle = `spotlight ${pageStyle} spotlight-right`;
  } else {
    cssStyle = `spotlight ${pageStyle} spotlight-left`;
  }
  return (
    <section className={cssStyle}>
      <div className="image">
        <img className="wide" src={pictogram} alt="Brains and engineering" />
      </div>
      <div className="content">
        <div>
          <h2>{header}</h2>
          {paragraph && <p>{paragraph}</p>}
        </div>
      </div>
    </section>
  );
};
