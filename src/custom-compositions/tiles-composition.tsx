import * as React from "react";
import { FC } from "react";
import { TileItem, TileSection } from "../components/";
import { ePictogram, ePageStyleTemplates } from "../page-types/";

interface TilesCompositionProps {
  pageStyle: ePageStyleTemplates;
}

export const TilesComposition: FC<TilesCompositionProps> = ({ pageStyle }) => {
  return (
    <>
      <TileSection pageStyle={pageStyle}>
        <TileItem
          item={1}
          backgroundImage={ePictogram.ai_1}
          date="February 12 2020"
          header="Tile Header 1"
          paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          link="#"
          pageStyle={pageStyle}
        />
        <TileItem
          item={2}
          backgroundImage={ePictogram.ai_2}
          date="January 12 2020"
          header="Tile Header 2"
          paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          link="#"
          pageStyle={pageStyle}
        />
        <TileItem
          item={3}
          backgroundImage={ePictogram.ai_3}
          date="January 12 2020"
          header="Tile Header 3"
          paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          link="#"
          pageStyle={pageStyle}
        />
        <TileItem
          item={4}
          backgroundImage={ePictogram.ai_4}
          date="January 12 2020"
          header="Tile Header 4"
          paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          link="#"
          pageStyle={pageStyle}
        />
        <TileItem
          item={5}
          backgroundImage={ePictogram.computer}
          date="January 12 2020"
          header="Tile Header 5"
          paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          link="#"
          pageStyle={pageStyle}
        />
      </TileSection>
    </>
  );
};
