import { storiesOf } from "@storybook/react";
import {
  Intro,
  IntroAbstract,
  IntroComplex,
  Spacer,
  IntroSimple,
} from "basic-frontend-common";
import React from "react";
import { boolean } from "@storybook/addon-knobs";

storiesOf("Design System / 04 Components", module).add("Content-Blocks", () => (
  <div className="container">
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Intro</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Intro
          title="Lorem ipsum dolor sit amet"
          subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        />
      </div>
    </section>

    <Spacer />
    <Spacer />

    <section className="flex flex-row mb-10">
      <div className="w-1/4">IntroAbstract</div>
      <div className="w-3/4 flex flex-row justify-between">
        <IntroAbstract
          title="Lorem ipsum dolor sit amet"
          hruler={boolean("IntroAbstract Hruler", true)}
          lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        />
      </div>
    </section>

    <Spacer />
    <Spacer />

    <section className="flex flex-row mb-10">
      <div className="w-1/4">IntroComplex</div>
      <div className="w-3/4 flex flex-row justify-between">
        <IntroComplex
          title="Lorem ipsum dolor sit amet"
          titleComponent={<div>Div inside</div>}
          hruler={boolean("IntroComplex Hruler", true)}
          lead="At vero eos et accusam et justo duo dolores et ea rebum."
        />
      </div>
    </section>

    <Spacer />
    <Spacer />

    <section className="flex flex-row mb-10">
      <div className="w-1/4">IntroSimple</div>
      <div className="w-3/4 flex flex-row justify-between">
        <IntroSimple
          title="Lorem ipsum dolor sit amet"
          hruler={boolean("IntroSimple Hruler", true)}
          lead="At vero eos et accusam et justo duo dolores et ea rebum."
        />
      </div>
    </section>
  </div>
));
