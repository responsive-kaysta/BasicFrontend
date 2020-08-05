import { storiesOf } from "@storybook/react";
import {
  PanelBasic,
  PanelFooter,
  PanelHeader,
  PanelHeaderFooter,
} from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 03 Compositions", module).add("Panels", () => (
  <div>
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">PanelBasic</div>
      <div className="w-3/4 flex flex-row justify-between">
        <PanelBasic>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </PanelBasic>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">PanelHeader</div>
      <div className="w-3/4 flex flex-row justify-between">
        <PanelHeader header="Header content">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </PanelHeader>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">PanelFooter</div>
      <div className="w-3/4 flex flex-row justify-between">
        <PanelFooter footer="Footer content">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </PanelFooter>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">PanelHeaderFooter</div>
      <div className="w-3/4 flex flex-row justify-between">
        <PanelHeaderFooter header="Header content" footer="Footer content">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </PanelHeaderFooter>
      </div>
    </section>
  </div>
));
