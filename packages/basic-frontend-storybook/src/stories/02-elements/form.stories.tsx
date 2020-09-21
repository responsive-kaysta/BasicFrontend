import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import {
  CheckBoxGroup,
  Dropdown,
  Input,
  RadioButtonGroup,
  Textarea,
} from "basic-frontend-common";
import React from "react";
import {
  optionsCheckBox,
  optionsDropdown,
  optionsRadioButton,
} from "../../helper";

storiesOf("Design System / 02 Elements", module).add("Form", () => (
  <div>
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">CheckBoxGroup</div>
      <div className="w-3/4">
        <CheckBoxGroup
          id="TheId"
          name="CheckBoxGroup"
          label="Label"
          legend="CheckBoxGroup Legend"
          options={optionsCheckBox}
          onChange={action(`Checked`)}
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">RadioButtonGroup</div>
      <div className="w-3/4">
        <RadioButtonGroup
          id="TheId"
          name="RadioButtonGroup"
          label="Label"
          legend="RadioButtonGroup Legend"
          options={optionsRadioButton}
          onChange={action("onChecked")}
          selectedItem="value2"
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Dropdown</div>
      <div className="w-3/4">
        <Dropdown
          id="TheId"
          name="Dropdown"
          label="Label"
          legend="Dropdown Legend"
          defaultOption={true}
          options={optionsDropdown}
          onSelectionChanged={action("onSelectionChanged")}
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Input</div>
      <div className="w-3/4">
        <Input
          id="TheId"
          name="Input"
          label="Label"
          legend="Input Legend"
          error="Error Message"
          value={text("Input", "Some Value")}
          type={select("Input Type", ["text", "email", "password"], "text")}
          placeholderText="Input Placeholder"
          onInputChanged={action("onInputChanged")}
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Textarea</div>
      <div className="w-3/4">
        <Textarea
          id="TheId"
          name="Textarea"
          label="Label"
          legend="Textarea Legend"
          placeholderText="Textarea Placeholder"
          onInputChanged={action("onInputChanged")}
        />
      </div>
    </section>
  </div>
));
