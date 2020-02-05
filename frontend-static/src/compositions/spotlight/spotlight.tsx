import * as React from "react";
import { ePictogram, eSpotlightOrientation } from "../../page-types/";
import { ePageStyleTemplates } from "src/less";
import { FC } from "react";

interface iSpotlightProps {
  header: string;
  paragraph: string;
  pictogram: ePictogram;
  orientation: eSpotlightOrientation;
  pageStyle?: ePageStyleTemplates;
}

export const Spotlight: FC<iSpotlightProps> = ({
  header,
  paragraph,
  pictogram,
  orientation,
  pageStyle
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
          <p>{paragraph}</p>
        </div>
      </div>
    </section>
  );
};
