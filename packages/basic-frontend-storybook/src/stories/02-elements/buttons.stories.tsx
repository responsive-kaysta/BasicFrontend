import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { ButtonRegular, ButtonSize, ButtonType } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 02 Elements", module).add("Buttons", () => (
  <div>
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Button primary</div>
      <div className="w-3/4 flex flex-row justify-between">
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

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Button secondary</div>
      <div className="w-3/4 flex flex-row justify-between">
        <ButtonRegular
          text="Size normal"
          size={ButtonSize.normal}
          type={ButtonType.secondary}
          onClick={action("clicked")}
        />
        <ButtonRegular
          text="Size small"
          size={ButtonSize.small}
          type={ButtonType.secondary}
          onClick={action("clicked")}
        />
        <ButtonRegular
          text="Disabled"
          type={ButtonType.secondary}
          size={ButtonSize.normal}
          disabled={boolean("Disabled", true)}
          onClick={action("clicked")}
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Button tertiary</div>
      <div className="w-3/4 flex flex-row justify-between">
        <ButtonRegular
          text="Size normal"
          size={ButtonSize.normal}
          type={ButtonType.tertiary}
          onClick={action("clicked")}
        />
        <ButtonRegular
          text="Size small"
          size={ButtonSize.small}
          type={ButtonType.tertiary}
          onClick={action("clicked")}
        />
        <ButtonRegular
          text="Disabled"
          type={ButtonType.tertiary}
          size={ButtonSize.normal}
          disabled={boolean("Disabled", true)}
          onClick={action("clicked")}
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Button transparent</div>
      <div className="w-3/4 flex flex-row justify-between">
        <ButtonRegular
          text="Size normal"
          size={ButtonSize.normal}
          type={ButtonType.transparent}
          onClick={action("clicked")}
        />
        <ButtonRegular
          text="Size small"
          size={ButtonSize.small}
          type={ButtonType.transparent}
          onClick={action("clicked")}
        />
        <ButtonRegular
          text="Disabled"
          type={ButtonType.transparent}
          size={ButtonSize.normal}
          disabled={boolean("Disabled", true)}
          onClick={action("clicked")}
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Button alarm</div>
      <div className="w-3/4 flex flex-row justify-between">
        <ButtonRegular
          text="Size normal"
          size={ButtonSize.normal}
          type={ButtonType.alarm}
          onClick={action("clicked")}
        />
        <ButtonRegular
          text="Size small"
          size={ButtonSize.small}
          type={ButtonType.alarm}
          onClick={action("clicked")}
        />
        <ButtonRegular
          text="Disabled"
          type={ButtonType.alarm}
          size={ButtonSize.normal}
          disabled={boolean("Disabled", true)}
          onClick={action("clicked")}
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Button special</div>
      <div className="w-3/4 flex flex-row justify-between">
        <ButtonRegular
          text="Size normal"
          size={ButtonSize.normal}
          type={ButtonType.special}
          onClick={action("clicked")}
        />
        <ButtonRegular
          text="Size small"
          size={ButtonSize.small}
          type={ButtonType.special}
          onClick={action("clicked")}
        />
        <ButtonRegular
          text="Disabled"
          type={ButtonType.special}
          size={ButtonSize.normal}
          disabled={boolean("Disabled", true)}
          onClick={action("clicked")}
        />
      </div>
    </section>
  </div>
));
