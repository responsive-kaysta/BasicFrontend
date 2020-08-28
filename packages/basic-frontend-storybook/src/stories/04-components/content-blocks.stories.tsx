import { storiesOf } from "@storybook/react";
import {
  Intro,
  IntroAbstract,
  IntroComplex,
  IntroSimple,
  Spacer,
  ThemeGray,
  Orientation,
} from "basic-frontend-common";
import React from "react";
import { boolean, text } from "@storybook/addon-knobs";

storiesOf("Design System / 04 Components / Content-Blocks", module)
  .add("All", () => (
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
            theme={ThemeGray}
            title="Lorem ipsum dolor sit amet"
            hruler
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
            theme={ThemeGray}
            title="Lorem ipsum dolor sit amet"
            component={<div>Div inside</div>}
            hruler
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
            theme={ThemeGray}
            title="Lorem ipsum dolor sit amet"
            hruler
            lead="At vero eos et accusam et justo duo dolores et ea rebum."
          />
        </div>
      </section>
    </div>
  ))
  .add("Intro", () => (
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
  ))
  .add("IntroAbstract", () => (
    <div>
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">IntroAbstract</div>
        <div className="w-3/4 flex flex-row justify-between">
          <IntroAbstract
            theme={ThemeGray}
            hruler={boolean("hruler", true)}
            title={text("title", "Lorem ipsum dolor sit amet")}
            lead={text(
              "lead",
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            )}
          />
        </div>
      </section>
    </div>
  ))
  .add("IntroSimple", () => (
    <div>
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">IntroSimple</div>
        <div className="w-3/4 flex flex-row justify-between">
          <IntroSimple
            theme={ThemeGray}
            hruler={boolean("hruler", true)}
            title={text("title", "Lorem ipsum dolor sit amet")}
            lead={text(
              "lead",
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            )}
          />
        </div>
      </section>
    </div>
  ))
  .add("IntroComplex", () => (
    <div>
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">IntroComplex</div>
        <div className="w-3/4 flex flex-row justify-between">
          <IntroComplex
            theme={ThemeGray}
            hruler={boolean("hruler", true)}
            title={text("title", "Lorem ipsum dolor sit amet")}
            componentOrientation={Orientation.right}
            component={
              <div className="flex flex-row justify-between items-baseline">
                <span>Span 1 inside</span>
                <span>Span 2 inside</span>
              </div>
            }
            lead={text(
              "lead",
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            )}
          />
        </div>
      </section>
    </div>
  ));
