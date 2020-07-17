import { storiesOf } from "@storybook/react";
import { ContainerSection, TileItem } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 04 Components", module).add("Tiles", () => (
  <div className="container">
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Tiles without Theme</div>
      <div className="w-3/4 flex flex-row justify-between">
        <ContainerSection cssStyle="table-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <TileItem
            headline="Tile Item 1"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            date="21.04.2020"
            link="#"
          />
          <TileItem
            headline="Tile Item 1"
            description="Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua"
            date="21.04.2020"
            link="#"
          />
          <TileItem
            headline="Tile Item 1"
            description="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            date="21.04.2020"
            link="#"
          />

          <TileItem
            headline="Tile Item 1"
            description="Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua"
            date="21.04.2020"
            link="#"
          />
          <TileItem
            headline="Tile Item 1"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            date="21.04.2020"
            link="#"
          />
          <TileItem
            headline="Tile Item 1"
            description="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            date="21.04.2020"
            link="#"
          />

          <TileItem
            headline="Tile Item 1"
            description="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            date="21.04.2020"
            link="#"
          />
          <TileItem
            headline="Tile Item 1"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            date="21.04.2020"
            link="#"
          />
          <TileItem
            headline="Tile Item 1"
            description="Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua"
            date="21.04.2020"
            link="#"
          />
        </ContainerSection>
      </div>
    </section>
  </div>
));
