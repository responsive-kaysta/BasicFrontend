import { storiesOf } from "@storybook/react";
import { Orientation, PictogramSize, Spotlight } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 04 Components", module).add("Spotlight", () => (
  <div className="container">
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Spotlight</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Spotlight
          title="Lorem ipsum dolor sit amet"
          content="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          pictogram="ai_1"
          pictogramSize={PictogramSize.xxxl}
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Spotlight</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Spotlight
          title="Lorem ipsum dolor sit amet"
          content="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          pictogram="ai_binary_code"
          pictogramSize={PictogramSize.xl}
          orientation={Orientation.right}
        />
      </div>
    </section>
  </div>
));
