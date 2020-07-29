import { storiesOf } from "@storybook/react";
import {
  ButtonType,
  CallToAction,
  ContainerArticle,
  ContainerBody,
  ContainerSection,
  Footer,
  IntroEyeCatcher,
  IntroSimple,
  Link,
  Pictogram,
  PictogramSize,
  ScrollLink,
  SimpleEyeCatcher,
  Spotlight,
  ThemeGray,
  ThemeGreen,
  ThemeLight,
  ThemeTransparent,
  ToTopLink,
} from "basic-frontend-common";
import React from "react";

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
      <ScrollLink elementId="first-eye-catcher">
        <span className="block mb-4">weiter</span>
        <span className="block">&#x2193;</span>
      </ScrollLink>
    </ContainerBody>

    <ContainerArticle>
      <SimpleEyeCatcher
        theme={ThemeGreen}
        elementId="first-eye-catcher"
        contentBottom="Lorem ipsum dolor sit amet"
        contentTop="At vero eos et accusam et justo duo dolores et ea rebum"
      />

      <Spotlight
        theme={ThemeGray}
        title="At vero eos et accusam et justo duo dolores et ea rebum."
        content="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
        labore et dolore magna aliquyam erat, sed diam voluptua."
        pictogram="ai_nano_technology"
        pictogramSize={PictogramSize.xl}
      />

      <ContainerSection>
        <IntroSimple
          hruler
          title="At vero eos et accusam et justo duo dolores et ea rebum"
          lead="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
          labore et dolore magna aliquyam erat, sed diam voluptua."
        >
          <Link href="http://localhost:6006" buttonLink>
            weiter ...
          </Link>
        </IntroSimple>
      </ContainerSection>

      <Spotlight
        theme={ThemeGray}
        title="At vero eos et accusam et justo duo dolores et ea rebum."
        content="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
        labore et dolore magna aliquyam erat, sed diam voluptua."
        pictogram="ai_cloud"
        pictogramSize={PictogramSize.xl}
      />

      <ContainerSection>
        <IntroSimple
          hruler
          title="At vero eos et accusam et justo duo dolores et ea rebum"
          lead="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
          labore et dolore magna aliquyam erat, sed diam voluptua."
        />
        <CallToAction
          ctaHeader="Call to action"
          ctaText="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
          takimata sanctus est Lorem ipsum dolor sit amet."
          primaryButtonAction="/"
          primaryButtonType={ButtonType.primary}
          primaryButtonText="primaryButtonText"
          secondaryButtonAction="/"
          secondaryButtonType={ButtonType.secondary}
          secondaryButtonText="secondaryButtonText"
        />

        <ToTopLink theme={ThemeLight}>
          <span className="block">&#x2191;</span>
          <span className="block mb-4">to top</span>
        </ToTopLink>
      </ContainerSection>
    </ContainerArticle>

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
