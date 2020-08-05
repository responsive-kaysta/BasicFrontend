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

              <ScrollLink elementId="first-eye-catcher">weiter</ScrollLink>
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
                pictogram="ai_chip"
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
                <Link href="http://localhost:6006" buttonLink>
                  weiter ...
                </Link>
                <Spacer />
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
              </ContainerSection>

              <ContainerSection>
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
              </ContainerSection>
              <ContainerSection>
                <ToTopLink theme={ThemeLight}>to top</ToTopLink>
              </ContainerSection>
            </ContainerArticle>

            <FooterComponent theme={ThemeDarkgray} />
          </>
        ) : null}{" "}
      </>
    );
  }
}

export default Index;
