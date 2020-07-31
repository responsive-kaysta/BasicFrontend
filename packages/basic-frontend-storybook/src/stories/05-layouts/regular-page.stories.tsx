import { storiesOf } from "@storybook/react";
import {
  ContainerArticle,
  ContainerCover,
  ContainerSection,
  IntroSimple,
  PictogramSize,
  Spotlight,
  SubTitle,
  ThemeDarkgray,
  ThemeGray,
  ThemeLight,
  ThemeTransparent,
  Topbar,
  ToTopLink,
} from "basic-frontend-common";
import React from "react";
import { footerComponent, menuItems } from "../../helper";

storiesOf("Design System / 05 Layouts", module).add("Regular Page", () => (
  <Topbar
    menuItems={menuItems}
    footer={footerComponent(ThemeDarkgray)}
    backgroundImage="/images/mainboard-1174219.jpg"
    branding="Fancy Branding"
    theme={ThemeDarkgray}
  >
    <ContainerArticle theme={ThemeTransparent}>
      <IntroSimple
        theme={ThemeTransparent}
        centerContent
        title="Fancy landing Page"
        lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
      />
      <Spotlight
        theme={ThemeGray}
        title="At vero eos et accusam et justo duo dolores et ea rebum."
        content="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
        sed diam voluptua."
        pictogram="ai_nano_technology"
        pictogramSize={PictogramSize.xl}
      />
      <ContainerCover>
        <ContainerSection>
          <SubTitle
            theme={ThemeLight}
            title="At vero eos et accusam et justo duo dolores et ea rebum"
            leadText="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
          />
          <ToTopLink theme={ThemeLight}>
            <span className="block">&#x2191;</span>
            <span className="block mb-4">to top</span>
          </ToTopLink>
        </ContainerSection>
      </ContainerCover>
    </ContainerArticle>
  </Topbar>
));
