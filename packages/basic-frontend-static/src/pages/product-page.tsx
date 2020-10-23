import {
  ContainerArticle,
  ContainerCover,
  ContainerSection,
  IntroSimple,
  Orientation,
  PictogramSize,
  Product,
  Spacer,
  Spotlight,
  SubTitle,
  TextRegular,
  ThemeDarkgray,
  ThemeGray,
  ThemeLight,
  ThemeTransparent,
  Topbar,
  ToTopLink,
} from 'basic-frontend-common';
import React from 'react';
import { BG_IMAGE, PAGE_NAME } from '../constants';
import { FooterComponent, MenuItems } from '../includes/site-parts';

class ProductPage extends React.Component {
  public render() {
    return (
      <>
        {typeof window !== 'undefined' ? (
          <>
            <Topbar
              backgroundImage={BG_IMAGE}
              branding={PAGE_NAME}
              theme={ThemeDarkgray}
              menuItems={MenuItems()}
              footer={<FooterComponent theme={ThemeDarkgray} />}
            >
              <ContainerArticle theme={ThemeTransparent}>
                <IntroSimple
                  theme={ThemeTransparent}
                  centerContent
                  containerContent
                  title="Fancy Product Page"
                  lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                  marginBottom
                  marginTop
                  paddingBottom
                  paddingTop
                />
                <Spotlight
                  theme={ThemeGray}
                  title="An example Page describing a fancy Product"
                  content="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua."
                  pictogram="robotics_prosthetic"
                  pictogramSize={PictogramSize.xl}
                />

                <ContainerCover>
                  <ContainerSection paddingTop>
                    <SubTitle
                      theme={ThemeLight}
                      title="Little Effort, maximum Result"
                      leadText="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
                    />
                    <TextRegular>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet.
                    </TextRegular>
                  </ContainerSection>
                  <Spacer />
                  <ContainerSection paddingTop>
                    <Product
                      title="Engineering of cloud based Software and Services"
                      content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
                      duo dolores et ea rebum."
                      src="https://cdn.responsive-it.biz/assets/bg-images/planning.png"
                      caption="Stet clita kasd gubergren, no sea takimata sanctus est"
                      alt="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                      orientation={Orientation.right}
                      theme={ThemeLight}
                    />
                  </ContainerSection>
                  <Spacer />
                  <ContainerSection paddingTop>
                    <SubTitle
                      theme={ThemeLight}
                      title="Save, reliable and scalable"
                      leadText="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
                    />
                    <TextRegular>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet.
                    </TextRegular>
                  </ContainerSection>
                  <Spacer />
                  <ContainerSection paddingTop>
                    <Product
                      title="Innovative engineered cloud based Software and Services"
                      content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
                      duo dolores et ea rebum."
                      src="https://cdn.responsive-it.biz/assets/bg-images/assembly.png"
                      caption="Stet clita kasd gubergren, no sea takimata sanctus est"
                      alt="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                      orientation={Orientation.left}
                      theme={ThemeLight}
                    />
                  </ContainerSection>
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

export default ProductPage;
