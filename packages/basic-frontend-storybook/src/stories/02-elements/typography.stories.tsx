import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { ButtonRegular, ButtonSize, ButtonType } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 02 Elements", module).add("Typography", () => (
  <div className="container">
    <section className="flex flex-row mb-10">
      <div className="w-1/3 text-xl">Button-Type</div>
      <div className="w-2/3 text-xl">Example</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">Button primary</div>
      <div className="w-2/3 flex flex-row justify-between">
        <ButtonRegular
          text="Size normal"
          size={ButtonSize.normal}
          type={ButtonType.primary}
          onClick={action("clicked")}
        />
        <ButtonRegular
          text="Size small"
          size={ButtonSize.small}
          type={ButtonType.primary}
          onClick={action("clicked")}
        />
        <ButtonRegular
          text="Disabled"
          type={ButtonType.primary}
          size={ButtonSize.normal}
          disabled={boolean("Disabled", true)}
          onClick={action("clicked")}
        />
      </div>
    </section>
  </div>
));
