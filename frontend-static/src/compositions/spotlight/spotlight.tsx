import * as React from "react";
import { ePictogram, eSpotlightOrientation } from "../../page-types/";
import { FC } from "react";
import { ePageStyleTemplates } from "page-types/ePageStyleTemplates";

interface iSpotlightProps {
  header: string;
  pictogram: ePictogram;
  orientation: eSpotlightOrientation;
  paragraph?: string;
  pageStyle?: ePageStyleTemplates;
}

export const Spotlight: FC<iSpotlightProps> = ({
  header,
  pictogram,
  orientation,
  pageStyle,
  paragraph
}) => {
  let cssStyle = "";

  if (orientation === eSpotlightOrientation.right) {
    cssStyle = "spotlight " + pageStyle + " spotlight-right";
  } else {
    cssStyle = "spotlight " + pageStyle + " spotlight-left";
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
