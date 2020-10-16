import {
  ContactFormRegular,
  ContainerArticle,
  ContainerCover,
  IntroSimple,
  PictogramSize,
  Spacer,
  Spotlight,
  ThemeDarkgray,
  ThemeGray,
  ThemeLight,
  ThemeTransparent,
  Topbar,
  ToTopLink,
} from 'basic-frontend-common';
import React from 'react';
import { BG_IMAGE, PAGE_NAME } from '../constants';
import { FooterComponent, menuItems } from '../includes/site-parts';

class ContactPage extends React.Component {
  public render() {
    return (
      <>
        {typeof window !== 'undefined' ? (
          <>
            <Topbar
              backgroundImage={BG_IMAGE}
              branding={PAGE_NAME}
              theme={ThemeDarkgray}
              menuItems={menuItems}
              footer={<FooterComponent theme={ThemeDarkgray} />}
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
                  pictogram="cloud_hardware"
                  pictogramSize={PictogramSize.xl}
                />

                <ContainerCover theme={ThemeLight}>
                  <ContactFormRegular
                    apiHost="http://api.master-archive.local"
                    language="en"
                    pageOrigin="storybook.responsive-kaysta.local"
                    reasonsDropdown={[{ value: '1', label: 'Value 1' }]}
                    theme={ThemeLight}
                  />

                  <Spacer />
                  <ToTopLink theme={ThemeLight} />
                </ContainerCover>
              </ContainerArticle>
            </Topbar>
          </>
        ) : null}
      </>
    );
  }
}

export default ContactPage;
