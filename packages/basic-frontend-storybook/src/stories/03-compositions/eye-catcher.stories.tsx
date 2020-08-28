import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import {
  IntroEyeCatcher,
  SimpleEyeCatcher,
  ThemeGray,
} from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 03 Compositions / Eye-Catcher", module)
  .add("SimpleEyeCatcher", () => (
    <div>
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">SimpleEyeCatcher</div>
        <div className="w-3/4 flex flex-row justify-between">
          <SimpleEyeCatcher
            contentTop={text("top", "Lorem ipsum dolor sit amet")}
            contentBottom={text(
              "bottom",
              "At vero eos et accusam et justo duo dolores et ea rebum"
            )}
            theme={ThemeGray}
            cssStyle={text("cssStyle", "py-24")}
          />
        </div>
      </section>
    </div>
  ))
  .add("IntroEyeCatcher", () => (
    <div>
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">IntroEyeCatcher</div>
        <div className="w-3/4 flex flex-row justify-between">
          <IntroEyeCatcher
            contentTop={text("top", "Lorem ipsum dolor sit amet")}
            contentBottom={text(
              "bottom",
              "At vero eos et accusam et justo duo dolores et ea rebum"
            )}
            theme={ThemeGray}
            cssStyle={text("cssStyle", "py-24")}
          />
        </div>
      </section>
    </div>
  ));
