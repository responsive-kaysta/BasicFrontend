import { storiesOf } from "@storybook/react";
import { Intro } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 03 Compositions", module).add(
  "Content-Blocks",
  () => (
    <div className="container">
      <section className="flex flex-row mb-10">
        <div className="w-1/3 text-xl">Type</div>
        <div className="w-2/3 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/3">Intro without Theme</div>
        <div className="w-2/3 flex flex-row justify-between">
          <Intro
            title="Lorem ipsum dolor sit amet"
            subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          />
        </div>
      </section>
    </div>
  )
);
