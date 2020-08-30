import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
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
      <div className="w-3/4 flex flex-row justify-between">
        <CheckBoxGroup
          id="TheId"
          name="CheckBoxGroup"
          legend="CheckBoxGroup Legend"
          comment="CheckBoxGroup Comment"
          options={optionsCheckBox}
          onChange={action(`Checked`)}
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">RadioButtonGroup</div>
      <div className="w-3/4 flex flex-row justify-between">
        <RadioButtonGroup
          id="TheId"
          name="RadioButtonGroup"
          legend="RadioButtonGroup Legend"
          comment="RadioButtonGroup Comment"
          options={optionsRadioButton}
          onChange={action("onChecked")}
          selectedItem="value2"
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Dropdown</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Dropdown
          id="TheId"
          name="Dropdown"
          legend="Dropdown Legend"
          comment="Dropdown Comment"
          defaultOption={true}
          options={optionsDropdown}
          onSelectionChanged={action("onSelectionChanged")}
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Input</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Input
          id="TheId"
          name="Input"
          legend="Input Legend"
          comment="Input Comment"
          type={select("Input Type", ["text", "email", "password"], "text")}
          placeholderText="Input Placeholder"
          onInputChanged={action("onInputChanged")}
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Textarea</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Textarea
          id="TheId"
          name="Textarea"
          legend="Textarea Legend"
          comment="Textarea Comment"
          placeholderText="Textarea Placeholder"
          onInputChanged={action("onInputChanged")}
        />
      </div>
    </section>
  </div>
));
