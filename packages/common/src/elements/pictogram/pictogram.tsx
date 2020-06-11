import React, { FC } from "react";
import KuenstlicheIntelligenz from "./pictograms/kuenstliche-intelligenz";
import { Pictograms } from "../../identity";
import { PictogramProps } from "./pictogram-props";

// https://svg2jsx.com/
export const Pictogram: FC<PictogramProps> = ({ pictogram }) => {
  switch (pictogram) {
    case Pictograms.kuenstliche_intelligenz: {
      return <KuenstlicheIntelligenz />;
    }
    default: {
      return <KuenstlicheIntelligenz />;
    }
  }
};
