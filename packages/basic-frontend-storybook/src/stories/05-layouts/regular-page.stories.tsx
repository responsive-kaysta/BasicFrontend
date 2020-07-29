import { storiesOf } from "@storybook/react";
import {
  ContainerArticle,
  ContainerCover,
  ContainerSection,
  Footer,
  IntroSimple,
  Link,
  NavigationItems,
  Pictogram,
  PictogramSize,
  Spotlight,
  TextRegular,
  ThemeGray,
  ThemeLight,
  ThemeTransparent,
  Topbar,
  ToTopLink,
} from "basic-frontend-common";
import React from "react";

const menuItems: NavigationItems[] = [
  { link: "/", text: "Menu-Item 1", title: "Menu-Item 1" },
  { link: "/", text: "Menu-Item 2", title: "Menu-Item 2" },
  { link: "/", text: "Menu-Item 3", title: "Menu-Item 3" },
  { link: "/", text: "Menu-Item 4", title: "Menu-Item 4" },
];

const footerComponent = (
  <Footer>
    <ul className="flex flex-row mt-2 mb-1 md:mb-2 md:mt-4">
      <li className="m-1 md:m-2">
        <Link
          href="https://github.com/responsive-kaysta"
          theme={ThemeTransparent}
          newWindow
        >
          <Pictogram name="xing_logo" size={PictogramSize.xxxs} />
        </Link>
      </li>
      <li className="m-1 md:m-2">
        <Link
          href="https://www.xing.com/profile/Kay_Stuckenschmidt/cv"
          theme={ThemeTransparent}
          newWindow
        >
          <Pictogram name="linkedin_logo" size={PictogramSize.xxxs} />
        </Link>
      </li>
      <li className="m-1 md:m-2">
        <Link
          href="https://www.linkedin.com/in/responsivekaysta/"
          theme={ThemeTransparent}
          newWindow
        >
          <Pictogram name="github_logo" size={PictogramSize.xxxs} />
        </Link>
      </li>
    </ul>
    <span className="mb-2 md:mb-4">
      <Link href="https://responsive-it.biz" theme={ThemeTransparent} newWindow>
        2020 responsive IT
      </Link>
    </span>
  </Footer>
);

storiesOf("Design System / 05 Layouts", module).add("Regular Page", () => (
  <Topbar
    menuItems={menuItems}
    footer={footerComponent}
    backgroundImage="/images/mainboard-1174219.jpg"
    logo="Fancy Branding"
  >
    <ContainerArticle
      theme={ThemeTransparent}
      backgroundImage="/images/mainboard-1174219.jpg"
    >
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
          <IntroSimple
            hruler
            title="Fancy Title"
            lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
          >
            <TextRegular>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </TextRegular>
          </IntroSimple>
          {/*    */}
          <IntroSimple
            hruler
            title="Fancy Title"
            lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
          >
            <TextRegular>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </TextRegular>
          </IntroSimple>
          {/*    */}
          <IntroSimple
            hruler
            title="Fancy Title"
            lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
          >
            <TextRegular>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </TextRegular>
          </IntroSimple>
          {/*    */}
          <IntroSimple
            hruler
            title="Fancy Title"
            lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
          >
            <TextRegular>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </TextRegular>
          </IntroSimple>
          {/*    */}
          <ToTopLink theme={ThemeLight}>
            <span className="block">&#x2191;</span>
            <span className="block mb-4">to top</span>
          </ToTopLink>
        </ContainerSection>
      </ContainerCover>
    </ContainerArticle>
  </Topbar>
));
