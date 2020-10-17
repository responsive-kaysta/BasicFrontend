import {
  ButtonType,
  CallToAction,
  ContainerArticle,
  ContainerBody,
  ContainerSection,
  CookieBanner,
  getLanguage,
  IntroEyeCatcher,
  IntroSimple,
  isCookieSet,
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
} from 'basic-frontend-common';
import React from 'react';
import ServiceWorkerWrapper from '../service-worker-wrapper';
import { BG_IMAGE, PAGE_NAME } from '../constants';
import { FooterComponent } from '../includes/site-parts';
import { TEXTS } from '../localization';

class Index extends React.Component {
  public render() {
    const language = getLanguage();
    return (
      <>
        {typeof window !== 'undefined' ? (
          <>
            <title>
              {TEXTS.pages.home.title} - {PAGE_NAME}
            </title>
            <ServiceWorkerWrapper>
              <CookieBanner
                theme={ThemeTransparent}
                language={language}
                isCookieSet={isCookieSet()}
              >
                <ContainerBody
                  theme={ThemeTransparent}
                  backgroundImage={BG_IMAGE}
                >
                  <IntroEyeCatcher
                    theme={ThemeTransparent}
                    contentTop={PAGE_NAME}
                    contentBottom="Example Page(s) showing the power of ReactJS, Skills and Passion"
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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                    pictogram="robotics_robot2"
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
                    pictogram="robotics_rechargeable"
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
                      primaryButtonAction="/about-page"
                      primaryButtonType={ButtonType.primary}
                      primaryButtonText="About"
                      secondaryButtonAction="/tiles-page"
                      secondaryButtonType={ButtonType.secondary}
                      secondaryButtonText="Tiles"
                    />
                  </ContainerSection>
                  <ContainerSection>
                    <ToTopLink theme={ThemeLight} />
                  </ContainerSection>
                </ContainerArticle>

                <FooterComponent theme={ThemeDarkgray} />
              </CookieBanner>
            </ServiceWorkerWrapper>
          </>
        ) : null}
      </>
    );
  }
}

export default Index;
