import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import {
  Checkbox,
  Dropdown,
  Input,
  RadiobuttonGroup,
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

const optionsRadio: {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
}[] = [
  {
    id: "id1",
    name: "radio1",
    value: "value1",
    label: "Label 1",
    checked: false,
  },
  {
    id: "id2",
    name: "radio2",
    value: "value2",
    label: "Label 2",
    checked: true,
  },
  {
    id: "id3",
    name: "radio3",
    value: "value3",
    label: "Label 3",
    checked: false,
  },
];

storiesOf("Design System / 02 Elements", module).add("Form", () => (
  <div className="container">
    <section className="flex flex-row mb-10">
      <div className="w-1/3 text-xl">Form Elements</div>
      <div className="w-2/3 text-xl">Example</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">Checkbox</div>
      <div className="w-2/3 flex flex-row justify-between">
        <Checkbox />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">Checkbox</div>
      <div className="w-2/3 flex flex-row justify-between">
        <RadiobuttonGroup
          id="TheId"
          name="TheName"
          legend="Radio-Button Legend"
          comment="Radio-Button Comment"
          options={optionsRadio}
          onChange={action("onChecked")}
          selectedItem="value2"
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">Dropdown</div>
      <div className="w-2/3 flex flex-row justify-between">
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
      <div className="w-1/3">Input</div>
      <div className="w-2/3 flex flex-row justify-between">
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
  </div>
));
