import * as React from "react";
import { FC } from "react";
import { Spotlight } from "../compositions/";
import {
  ePageStyleTemplates,
  ePictogram,
  eSpotlightOrientation
} from "../page-types/";

interface SpotlightCompositionProps {
  pageStyle: ePageStyleTemplates;
}

export const SpotlightComposition: FC<SpotlightCompositionProps> = ({
  pageStyle
}) => {
  return (
    <>
      <div className="spotlight-container">
        <Spotlight
          header="Spotlight 1"
          paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          pageStyle={pageStyle}
          pictogram={ePictogram.computer}
          orientation={eSpotlightOrientation.left}
        />
        <Spotlight
          header="Spotlight 2"
          paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          pageStyle={pageStyle}
          pictogram={ePictogram.ai_1}
          orientation={eSpotlightOrientation.right}
        />
        <Spotlight
          header="Spotlight 3"
          paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          pageStyle={pageStyle}
          pictogram={ePictogram.connection_1}
          orientation={eSpotlightOrientation.left}
        />
        <Spotlight
          header="Spotlight 4"
          paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          pageStyle={pageStyle}
          pictogram={ePictogram.internet_2}
          orientation={eSpotlightOrientation.right}
        />
        <Spotlight
          header="Spotlight 5"
          paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          pageStyle={pageStyle}
          pictogram={ePictogram.tools}
          orientation={eSpotlightOrientation.left}
        />
      </div>
    </>
  );
};
