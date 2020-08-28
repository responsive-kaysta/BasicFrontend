import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { Intro, ThemeGray } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 04 Components / Content-Blocks", module).add(
  "2 - Intro",
  () => (
    <div>
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">Intro</div>
        <div className="w-3/4 flex flex-row justify-between">
          <Intro
            theme={ThemeGray}
            hruler={boolean("hruler", true)}
            title={text("title", "Lorem ipsum dolor sit amet")}
            subTitle={text(
              "subTitle",
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            )}
            lead={text(
              "lead",
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            )}
          />
        </div>
      </section>
    </div>
  )
);
