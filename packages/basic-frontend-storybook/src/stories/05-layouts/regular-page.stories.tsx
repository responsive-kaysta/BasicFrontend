import { storiesOf } from "@storybook/react";
import {
  ContainerArticle,
  HorizontalNavbar,
  NavigationItems,
  ThemeTransparent,
} from "basic-frontend-common";
import React from "react";

const menuItems: NavigationItems[] = [
  { link: "/", text: "Menu-Item 1", title: "Menu-Item 1" },
  { link: "/", text: "Menu-Item 2", title: "Menu-Item 2" },
  { link: "/", text: "Menu-Item 3", title: "Menu-Item 3" },
  { link: "/", text: "Menu-Item 4", title: "Menu-Item 4" },
];

let menuVisible = false;

const setMenuVisible = (toggle: boolean) => {
  console.log("toggle: ", toggle);
  menuVisible = toggle;
  console.log("menuVisible: ", menuVisible);
};

storiesOf("Design System / 05 Layouts", module).add("Regular Page", () => (
  <>
    <HorizontalNavbar
      menuItems={menuItems}
      isMenuVisible={menuVisible}
      toggleMenuVisible={setMenuVisible}
      logo="Fancy Branding"
    />
    <ContainerArticle
      theme={ThemeTransparent}
      backgroundImage="/images/mainboard-1174219.jpg"
    >
      <div>some content</div>
    </ContainerArticle>
  </>
));
