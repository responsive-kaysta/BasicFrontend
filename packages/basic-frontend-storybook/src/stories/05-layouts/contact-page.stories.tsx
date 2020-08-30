import { storiesOf } from "@storybook/react";
import {
  ContainerArticle,
  ContainerSection,
  Intro,
  ThemeDarkgray,
  ThemeTransparent,
  Topbar,
  Input,
  Dropdown,
  defComment,
} from "basic-frontend-common";
import React from "react";
import { footerComponent, menuItems } from "../../helper";
import { action } from "@storybook/addon-actions";

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
                onInputChanged={action("")}
                placeholderText=""
                type="text"
                comment="Comment"
                label="First Name"
                legend="Legend"
                theme={ThemeTransparent}
              />
              <p className={`text-red-500 text-xs italic ${defComment}`}>
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Input
                id="grid-last-name"
                name="grid-first-name"
                onInputChanged={action("")}
                placeholderText=""
                type="text"
                comment="Comment"
                label="Last Name"
                legend="Legend"
                theme={ThemeTransparent}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <Input
                id="grid-password"
                name="grid-password"
                onInputChanged={action("")}
                placeholderText="******************"
                type="password"
                comment="Comment"
                label="Password"
                legend="Legend"
                theme={ThemeTransparent}
              />
              <p className={`text-red-500 text-xs italic ${defComment}`}>
                Please fill out this field.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Input
                id="grid-city"
                name="grid-city"
                onInputChanged={action("")}
                placeholderText=""
                type="text"
                comment="Comment"
                label="City"
                legend="Legend"
                theme={ThemeTransparent}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Dropdown
                id="grid-state"
                name="grid-state"
                onSelectionChanged={action("")}
                options={[
                  {
                    label: "Select",
                    value: "0",
                  },
                  {
                    label: "Germany",
                    value: "1",
                  },
                  {
                    label: "Austria",
                    value: "2",
                  },
                  {
                    label: "Switzerland",
                    value: "3",
                  },
                ]}
                comment="Comment"
                defaultOption
                defaultValue="0"
                label="State"
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
                label="Zip"
                legend="Legend"
                theme={ThemeTransparent}
              />
            </div>
          </div>
        </form>
      </ContainerSection>
    </ContainerArticle>
  </Topbar>
));
