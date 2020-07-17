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

const optionsDropdown: { value: string; label: string }[] = [
  {
    label: "Value 1",
    value: "1",
  },
  {
    label: "Value 2",
    value: "2",
  },
  {
    label: "Value 3",
    value: "3",
  },
];

const optionsCheckBox: {
  value: string;
  label: string;
  checked?: boolean;
}[] = [
  {
    value: "value1",
    label: "Label 1",
    checked: true,
  },
  {
    value: "value2",
    label: "Label 2",
  },
  {
    value: "value3",
    label: "Label 3",
  },
];

const optionsRadioButton: {
  value: string;
  label: string;
}[] = [
  {
    value: "value1",
    label: "Label 1",
  },
  {
    value: "value2",
    label: "Label 2",
  },
  {
    value: "value3",
    label: "Label 3",
  },
];

storiesOf("Design System / 02 Elements", module).add("Form", () => (
  <div className="container">
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">CheckBoxGroup</div>
      <div className="w-3/4 flex flex-row justify-between">
        <CheckBoxGroup
          id="TheId"
          name="TheName"
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
          name="TheName"
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
          name="TheName"
          label="Some Label Text"
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
          name="TheName"
          type={select("Input Type", ["text", "email", "password"], "text")}
          label="Some Label Text"
          placeholderText="Placeholder"
          onInputChanged={action("onInputChanged")}
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Textarea</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Textarea
          id="TheId"
          name="TheName"
          comment="Some Comment describing the Textarea"
          label="Some Label Text"
          placeholderText="Placeholder"
          onInputChanged={action("onInputChanged")}
        />
      </div>
    </section>
  </div>
));
