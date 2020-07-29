import { storiesOf } from "@storybook/react";
import {
  ContainerBody,
  ContainerSection,
  ContainerCover,
  Footer,
  IntroEyeCatcher,
  Link,
  Pictogram,
  PictogramSize,
  SimpleEyeCatcher,
  Spotlight,
  ThemeGray,
  ThemeGreen,
  ThemeTransparent,
  IntroSimple,
} from "basic-frontend-common";
import React from "react";
import * as Scroll from "react-scroll";

var ScrollLink = Scroll.Link;

storiesOf("Design System / 05 Layouts", module).add("Landing Page", () => (
  <>
    <ContainerBody
      theme={ThemeTransparent}
      backgroundImage="/images/mainboard-1174219.jpg"
    >
      <IntroEyeCatcher
        theme={ThemeTransparent}
        contentTop="Fancy landing Page"
        contentBottom="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
      />
      <ScrollLink
        className={`bg-transparent ${ThemeTransparent.body.textColor} hover:${ThemeGreen.link.hoverColor} text-center font-semibold py-2 px-2`}
        to="first-eye-catcher"
        spy={true}
        smooth="easeInOutQuint"
        duration={2500}
        offset={0}
      >
        <span className="block mb-4">weiter</span>
        <span className="block">&#x2B07;</span>
      </ScrollLink>
    </ContainerBody>
    <SimpleEyeCatcher
      theme={ThemeGreen}
      elementId="first-eye-catcher"
      contentBottom="Lorem ipsum dolor sit amet"
      contentTop="At vero eos et accusam et justo duo dolores et ea rebum"
    />

    <Spotlight
      theme={ThemeGray}
      title="At vero eos et accusam et justo duo dolores et ea rebum."
      content="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      pictogram="ai_nano_technology"
      pictogramSize={PictogramSize.xxxl}
    />

    <ContainerCover>
      <ContainerSection>
        <IntroSimple
          hruler
          title="At vero eos et accusam et justo duo dolores et ea rebum"
          lead="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        >
          <Link href="http://localhost:6006" buttonLink>
            weiter ...
          </Link>
        </IntroSimple>
      </ContainerSection>
    </ContainerCover>

    <Footer>
      <ul className="flex flex-row mt-2 mb-1 md:mb-2 md:mt-4">
        <li className="m-1 md:m-2">
          <Link
            href="https://github.com/responsive-kaysta"
            theme={ThemeTransparent}
            newWindow
          >
            <Pictogram name="xing_logo" size={PictogramSize.xs} />
          </Link>
        </li>
        <li className="m-1 md:m-2">
          <Link
            href="https://www.xing.com/profile/Kay_Stuckenschmidt/cv"
            theme={ThemeTransparent}
            newWindow
          >
            <Pictogram name="linkedin_logo" size={PictogramSize.xs} />
          </Link>
        </li>
        <li className="m-1 md:m-2">
          <Link
            href="https://www.linkedin.com/in/responsivekaysta/"
            theme={ThemeTransparent}
            newWindow
          >
            <Pictogram name="github_logo" size={PictogramSize.xs} />
          </Link>
        </li>
      </ul>
      <span className="mb-2 md:mb-4">
        <Link
          href="https://responsive-it.biz"
          theme={ThemeTransparent}
          newWindow
        >
          2020 responsive IT
        </Link>
      </span>
    </Footer>
  </>
));
