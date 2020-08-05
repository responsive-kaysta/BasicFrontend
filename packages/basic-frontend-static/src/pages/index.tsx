import {
  ButtonType,
  CallToAction,
  ContainerArticle,
  ContainerBody,
  ContainerSection,
  IntroEyeCatcher,
  IntroSimple,
  Link,
  PictogramSize,
  ScrollLink,
  SimpleEyeCatcher,
  Spacer,
  Spotlight,
  ThemeDarkgray,
  ThemeGray,
  ThemeGreen,
  ThemeLight,
  ThemeTransparent,
  ToTopLink,
} from "basic-frontend-common";
import React from "react";
import { FooterComponent } from "../includes/site-parts";

class Index extends React.Component {
  public render() {
    return (
      <>
        {typeof window !== "undefined" ? (
          <>
            <ContainerBody
              theme={ThemeTransparent}
              backgroundImage="/backgrounds/Website-Design-Background.png"
            >
              <IntroEyeCatcher
                theme={ThemeTransparent}
                contentTop="Basic Frontend"
                contentBottom="Example Page(s) showing the power of ReactJS, TailwindCSS, Skills and Love"
              />

              <ScrollLink elementId="first-eye-catcher" />
            </ContainerBody>

            <ContainerArticle>
              <SimpleEyeCatcher
                theme={ThemeGreen}
                elementId="first-eye-catcher"
                contentTop="SimpleEyeCatcher"
                contentBottom="At vero eos et accusam et justo duo dolores et ea rebum"
              />

              <Spotlight
                theme={ThemeGray}
                title="Spotlight"
                content="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
        labore et dolore magna aliquyam erat, sed diam voluptua."
                pictogram="ai_chip"
                pictogramSize={PictogramSize.xl}
              />

              <ContainerSection>
                <IntroSimple
                  hruler
                  title="IntroSimple"
                  lead="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
          labore et dolore magna aliquyam erat, sed diam voluptua."
                />
                <Link href="/product-page" buttonLink>
                  Product-Page
                </Link>
                <Spacer />
              </ContainerSection>

              <Spotlight
                theme={ThemeGray}
                title="Spotlight"
                content="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
        labore et dolore magna aliquyam erat, sed diam voluptua."
                pictogram="ai_cloud"
                pictogramSize={PictogramSize.xl}
              />

              <ContainerSection>
                <IntroSimple
                  hruler
                  title="IntroSimple"
                  lead="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
          labore et dolore magna aliquyam erat, sed diam voluptua."
                />
              </ContainerSection>

              <ContainerSection>
                <CallToAction
                  ctaHeader="CallToAction"
                  ctaText="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
          takimata sanctus est Lorem ipsum dolor sit amet."
                  primaryButtonAction="/text-page"
                  primaryButtonType={ButtonType.primary}
                  primaryButtonText="Text-Page"
                  secondaryButtonAction="/tiles-page"
                  secondaryButtonType={ButtonType.secondary}
                  secondaryButtonText="Tiles-Page"
                />
              </ContainerSection>
              <ContainerSection>
                <ToTopLink theme={ThemeLight} />
              </ContainerSection>
            </ContainerArticle>

            <FooterComponent theme={ThemeDarkgray} />
          </>
        ) : null}
      </>
    );
  }
}

export default Index;
