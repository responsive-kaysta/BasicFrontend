import { storiesOf } from "@storybook/react";
import {
  ContainerArticle,
  ContainerSection,
  Intro,
  ThemeDarkgray,
  ThemeTransparent,
  Topbar,
  Input,
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
              <p className="text-red-500 text-xs italic">
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
              <p className="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                State
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Zip
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="90210"
              />
            </div>
          </div>
        </form>
      </ContainerSection>
    </ContainerArticle>
  </Topbar>
));
