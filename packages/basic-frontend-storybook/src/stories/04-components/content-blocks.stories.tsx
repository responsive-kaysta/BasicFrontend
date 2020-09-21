import { storiesOf } from "@storybook/react";
import {
  Intro,
  IntroAbstract,
  IntroComplex,
  IntroSimple,
  Spacer,
  ThemeGray,
  Orientation,
  Input,
} from "basic-frontend-common";
import React from "react";
import { boolean, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

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
            centerContent={boolean("centerContent", false)}
            containerContent={boolean("containerContent", false)}
            cssStyle={text("cssStyle", "")}
            elementId={text("elementId", "intro-element-id")}
            marginBottom={boolean("marginBottom", false)}
            marginTop={boolean("marginTop", false)}
            paddingBottom={boolean("paddingBottom", true)}
            paddingTop={boolean("paddingTop", true)}
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
            centerContent={boolean("centerContent", false)}
            containerContent={boolean("containerContent", false)}
            cssStyle={text("cssStyle", "")}
            elementId={text("elementId", "intro-abstract-element-id")}
            marginBottom={boolean("marginBottom", false)}
            marginTop={boolean("marginTop", false)}
            paddingBottom={boolean("paddingBottom", true)}
            paddingTop={boolean("paddingTop", true)}
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
            centerContent={boolean("centerContent", false)}
            containerContent={boolean("containerContent", false)}
            cssStyle={text("cssStyle", "")}
            elementId={text("elementId", "intro-simple-element-id")}
            marginBottom={boolean("marginBottom", false)}
            marginTop={boolean("marginTop", false)}
            paddingBottom={boolean("paddingBottom", true)}
            paddingTop={boolean("paddingTop", true)}
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
            centerContent={boolean("centerContent", false)}
            containerContent={boolean("containerContent", false)}
            cssStyle={text("cssStyle", "")}
            elementId={text("elementId", "intro-complex-element-id")}
            marginBottom={boolean("marginBottom", false)}
            marginTop={boolean("marginTop", false)}
            paddingBottom={boolean("paddingBottom", true)}
            paddingTop={boolean("paddingTop", true)}
            title={text("title", "Lorem ipsum")}
            componentOrientation={select(
              "componentOrientation",
              [Orientation.right, Orientation.left],
              Orientation.right
            )}
            component={
              <div className="flex flex-row items-center self-end">
                <span className="mr-3">Description</span>
                <Input
                  id="Input"
                  name="Input"
                  onInputChanged={(value) => action(`onInputChanged: ${value}`)}
                  placeholderText={text("placeholderText", "Input Placeholder")}
                  type="text"
                  value={text("Input", "Input")}
                  theme={ThemeGray}
                />
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
