import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import {
  CheckBoxGroup,
  ContainerArticle,
  ContainerSection,
  defComment,
  Dropdown,
  Input,
  Intro,
  RadioButtonGroup,
  Textarea,
  ThemeDarkgray,
  ThemeTransparent,
  Topbar,
} from "basic-frontend-common";
import React from "react";
import {
  footerComponent,
  menuItems,
  optionsCheckBox,
  optionsDropdown,
  optionsRadioButton,
} from "../../helper";

storiesOf("Design System / 05 Layouts", module).add("Contact Page", () => (
  <Topbar
    menuItems={menuItems}
    footer={footerComponent(ThemeDarkgray)}
    backgroundImage="/images/mainboard-1174219.jpg"
    branding="Fancy Branding"
    theme={ThemeDarkgray}
  >
    <ContainerArticle theme={ThemeTransparent}>
      <Intro
        title="Contact"
        subTitle="Sample Contact Page"
        lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        theme={ThemeTransparent}
        containerContent
        marginBottom={false}
        paddingBottom={false}
      />

      <ContainerSection theme={ThemeTransparent}>
        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Input
                id="grid-first-name"
                name="grid-first-name"
                label="Label"
                onInputChanged={action("")}
                placeholderText=""
                type="text"
                comment="Comment"
                legend="Legend"
                value={text("first-name", "Harald")}
                theme={ThemeTransparent}
              />
              <p className={`text-red-500 text-xs italic ${defComment}`}>
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Input
                id="grid-last-name"
                name="grid-last-name"
                label="Label"
                onInputChanged={action("")}
                placeholderText=""
                type="text"
                comment="Comment"
                legend="Legend"
                value={text("last-name", "Hendrikson")}
                theme={ThemeTransparent}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <Input
                id="grid-password"
                name="grid-password"
                label="Label"
                onInputChanged={action("")}
                placeholderText="******************"
                type="password"
                comment="Comment"
                legend="Legend"
                value={text("password", "1234567890")}
                theme={ThemeTransparent}
              />
              <p className={`text-red-500 text-xs italic ${defComment}`}>
                Please fill out this field.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <CheckBoxGroup
                id="TheId"
                name="CheckBoxGroup"
                label="Label"
                legend="CheckBoxGroup Legend"
                comment="CheckBoxGroup Comment"
                options={optionsCheckBox}
                onChange={action(`Checked`)}
                theme={ThemeTransparent}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <RadioButtonGroup
                id="TheId"
                name="RadioButtonGroup"
                label="Label"
                legend="RadioButtonGroup Legend"
                comment="RadioButtonGroup Comment"
                options={optionsRadioButton}
                onChange={action("onChecked")}
                selectedItem="value2"
                theme={ThemeTransparent}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Input
                id="grid-city"
                name="grid-city"
                onInputChanged={action("")}
                placeholderText=""
                type="text"
                comment="Comment"
                legend="Legend"
                value={text("city", "London")}
                theme={ThemeTransparent}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Dropdown
                id="grid-state"
                name="grid-state"
                onSelectionChanged={action("")}
                options={optionsDropdown}
                comment="Comment"
                defaultOption
                defaultValue="0"
                legend="Legend"
                theme={ThemeTransparent}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Input
                id="grid-zip"
                name="grid-zip"
                onInputChanged={action("")}
                placeholderText=""
                type="text"
                comment="Comment"
                legend="Legend"
                value={text("zip", "FXY 123 MB")}
                theme={ThemeTransparent}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <Textarea
                id="grid-comment"
                name="grid-comment"
                onInputChanged={action("")}
                placeholderText=""
                comment=""
                legend=""
                rows={5}
                theme={ThemeTransparent}
              />
            </div>
          </div>
        </form>
      </ContainerSection>
    </ContainerArticle>
  </Topbar>
));
