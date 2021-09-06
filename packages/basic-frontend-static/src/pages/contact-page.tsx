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
  ThemeGray,
  ThemeLight,
  ThemeTransparent,
  ToTopLink,
} from "basic-frontend-common";
import React from "react";
import { BASIC_FRONTEND_VERSION, PAGE_NAME } from "../constants";
import { TEXTS } from "../localization";

class ContactPage extends React.Component {
  public render() {
    return (
      <>
        {typeof window !== "undefined" ? (
          <>
            <title>
              {TEXTS.pages.contact.title} - {PAGE_NAME}
            </title>

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
                    apiParcel=""
                    language={getLanguage()}
                    pageOrigin="basic-frontend.responsive-kaysta.ch"
                    reasonsDropdown={[{ value: "1", label: "Some Option" }]}
                    theme={ThemeLight}
                    isSingleOption
                    version={BASIC_FRONTEND_VERSION}
                  />

                  <Spacer />
                  <ToTopLink theme={ThemeLight} />
                </ContainerCover>
              </ContainerArticle>
            </CookieBanner>
          </>
        ) : null}
      </>
    );
  }
}

export default ContactPage;
