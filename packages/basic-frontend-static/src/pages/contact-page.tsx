import {
  ContactFormRegular,
  ContainerArticle,
  ContainerCover,
  CookieBanner,
  getLanguage,
  IntroSimple,
  isCookieSet,
  PictogramSize,
  Spacer,
  Spotlight,
  ThemeDarkgray,
  ThemeGray,
  ThemeLight,
  ThemeTransparent,
  Topbar,
  ToTopLink,
} from "basic-frontend-common";
import React from "react";
import { TEXTS } from "../localization";
import { BG_IMAGE, PAGE_NAME } from "../constants";
import { FooterComponent, MenuItems } from "../includes/site-parts";

class ContactPage extends React.Component {
  public render() {
    return (
      <>
        {typeof window !== "undefined" ? (
          <>
            <title>
              {TEXTS.pages.contact.title} - {PAGE_NAME}
            </title>
            <Topbar
              backgroundImage={BG_IMAGE}
              branding={PAGE_NAME}
              theme={ThemeDarkgray}
              menuItems={MenuItems()}
              footer={<FooterComponent theme={ThemeDarkgray} />}
            >
              <CookieBanner
                theme={ThemeTransparent}
                language={getLanguage()}
                isCookieSet={isCookieSet()}
              >
                <ContainerArticle theme={ThemeTransparent}>
                  <IntroSimple
                    theme={ThemeTransparent}
                    centerContent
                    containerContent
                    title="Fancy Contact Page"
                    lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                  />
                  <Spotlight
                    theme={ThemeGray}
                    title="An example Page describing a fancy Product"
                    content="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua."
                    pictogram="robotics_design"
                    pictogramSize={PictogramSize.xl}
                  />

                  <ContainerCover theme={ThemeLight}>
                    <ContactFormRegular
                      apiHost="http://api.master-archive.local"
                      language={getLanguage()}
                      pageOrigin="basic-frontend.responsive-kaysta.ch"
                      reasonsDropdown={[{ value: "1", label: "Some Option" }]}
                      theme={ThemeLight}
                      isSingleOption
                    />

                    <Spacer />
                    <ToTopLink theme={ThemeLight} />
                  </ContainerCover>
                </ContainerArticle>
              </CookieBanner>
            </Topbar>
          </>
        ) : null}
      </>
    );
  }
}

export default ContactPage;
