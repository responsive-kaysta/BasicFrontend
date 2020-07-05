import {
  ContainerBasic,
  Footer,
  NavigationItems,
  Pictogram,
  PictogramSize,
  Topbar,
} from "basic-frontend-common";
import React, { FC } from "react";

const navigationItems: NavigationItems[] = [
  {
    text: "foo",
    title: "navigate to foo",
    link: "#",
  },
  {
    text: "man",
    title: "navigate to man",
    link: "#",
  },
  {
    text: "chu",
    title: "navigate to chu",
    link: "#",
  },
];

export default {
  title: "Design System / Layout / Topbar",
  component: Topbar,
};

const CompFooter: FC = () => {
  return (
    <Footer>
      <section className="flex flex-row mt-4 text-xs sm:text-base">
        <button className="mr-4" type="button">
          <Pictogram name="xing_logo_box" size={PictogramSize.xs} />
        </button>
        <button className="mr-4" type="button">
          <Pictogram name="linkedin_logo_box" size={PictogramSize.xs} />
        </button>
      </section>
      <div className="mt-2 text-xs sm:text-sm">
        <button type="button">2020 - responsive IT</button>
      </div>
      <div className="mt-2 mb-4 text-xs sm:text-sm">
        <button type="button">finest full-stack development</button>
      </div>
    </Footer>
  );
};

export const defaultStory = () => (
  <Topbar
    menuItems={navigationItems}
    logo="responsive IT"
    footer={<CompFooter />}
  >
    <ContainerBasic>
      <h1 className="text-2xl font-semibold text-gray-800">Theme: none</h1>

      <div className="m-0 p-0 overflow-y-auto">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-full">
          Lorem ipsum
        </div>
      </div>
    </ContainerBasic>
  </Topbar>
);

defaultStory.storyName = "Theme: none";

export const themeLightStory = () => (
  <Topbar menuItems={navigationItems} logo="responsive IT">
    Inhalte
  </Topbar>
);

themeLightStory.storyName = "Theme: Light";
