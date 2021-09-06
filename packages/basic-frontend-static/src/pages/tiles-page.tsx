import {
  ContainerArticle,
  ContainerCover,
  ContainerSection,
  IntroSimple,
  Spacer,
  SubTitle,
  ThemeTransparent,
  TileItem,
  TileSection,
  ToTopLink,
} from 'basic-frontend-common';
import React from 'react';

class TilesPage extends React.Component {
  public render() {
    return (
      <>
        {typeof window !== 'undefined' ? (
          <>
            <ContainerArticle theme={ThemeTransparent}>
              <IntroSimple
                theme={ThemeTransparent}
                centerContent
                containerContent
                title="Fancy Tiles Page"
                lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
              />

              <ContainerCover theme={ThemeTransparent}>
                <ContainerSection theme={ThemeTransparent} marginBottom>
                  <SubTitle
                    theme={ThemeTransparent}
                    title="Little Effort, maximum Result"
                    leadText="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
                  />
                </ContainerSection>
              </ContainerCover>

              <TileSection theme={ThemeTransparent}>
                <TileItem
                  headline="Product Page"
                  date="Aug. 1. 2020"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                  link="/product-page"
                  bgImage="https://cdn.responsive-it.biz/assets/bg-images/team.png"
                  theme={ThemeTransparent}
                />

                <TileItem
                  headline="Contact Page"
                  date="Aug. 1. 2020"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                  link="/contact-page"
                  bgImage="https://cdn.responsive-it.biz/assets/bg-images/internet_1.png"
                  theme={ThemeTransparent}
                />

                <TileItem
                  headline="Links Page"
                  date="Aug. 1. 2020"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                  link="/links-page"
                  bgImage="https://cdn.responsive-it.biz/assets/bg-images/settings-gears.png"
                  theme={ThemeTransparent}
                />

                <TileItem
                  headline="Legal Page"
                  date="Aug. 1. 2020"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                  link="/legal-page"
                  bgImage="https://cdn.responsive-it.biz/assets/bg-images/hosting.png"
                  theme={ThemeTransparent}
                />

                <TileItem
                  headline="Tiles Page"
                  date="Aug. 1. 2020"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                  link="/tiles-page"
                  bgImage="https://cdn.responsive-it.biz/assets/bg-images/engineer.png"
                  theme={ThemeTransparent}
                />

                <TileItem
                  headline="About Page"
                  date="Aug. 1. 2020"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                  link="/about-page"
                  bgImage="https://cdn.responsive-it.biz/assets/bg-images/planning.png"
                  theme={ThemeTransparent}
                />
              </TileSection>

              <Spacer />
              <ToTopLink />
            </ContainerArticle>
          </>
        ) : null}
      </>
    );
  }
}

export default TilesPage;
