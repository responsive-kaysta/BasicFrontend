import React, { FC } from "react";
import { PictogramProps } from "./pictogram-props";
import Netzwerk from "./pictograms/netzwerk";
import KuenstlicheIntelligenz from "./pictograms/kuenstliche-intelligenz";

// https://svg2jsx.com/
export const Pictogram: FC<PictogramProps> = ({ pictogram }) => {
  switch (pictogram) {
    case "netzwerk": {
      return <Netzwerk />;
    }
    case "kuenstliche_intelligenz": {
      return <KuenstlicheIntelligenz />;
    }
    default: {
      return <KuenstlicheIntelligenz />;
    }
  }
};
