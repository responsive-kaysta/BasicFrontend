import {
  ContainerArticle,
  ContainerCover,
  ContainerSection,
  IntroSimple,
  Spacer,
  SubTitle,
  ThemeLight,
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
                <ContainerSection theme={ThemeTransparent}>
                  <SubTitle
                    theme={ThemeTransparent}
                    title="Little Effort, maximum Result"
                    leadText="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
                  />
                </ContainerSection>

                <TileSection theme={ThemeTransparent}>
                  <TileItem
                    headline="Product Page"
                    date="Aug. 1. 2020"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                    link="/product-page"
                    bgImage="/backgrounds/team.png"
                    theme={ThemeTransparent}
                  />

                  <TileItem
                    headline="Contact Page"
                    date="Aug. 1. 2020"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                    link="/contact-page"
                    bgImage="/backgrounds/internet_1.png"
                    theme={ThemeTransparent}
                  />

                  <TileItem
                    headline="Links Page"
                    date="Aug. 1. 2020"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                    link="/links-page"
                    bgImage="/backgrounds/settings-gears.png"
                    theme={ThemeTransparent}
                  />

                  <TileItem
                    headline="Legal Page"
                    date="Aug. 1. 2020"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                    link="/legal-page"
                    bgImage="/backgrounds/hosting.png"
                    theme={ThemeTransparent}
                  />

                  <TileItem
                    headline="Tiles Page"
                    date="Aug. 1. 2020"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                    link="/tiles-page"
                    bgImage="/backgrounds/engineer.png"
                    theme={ThemeTransparent}
                  />

                  <TileItem
                    headline="About Page"
                    date="Aug. 1. 2020"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                    link="/about-page"
                    bgImage="/backgrounds/planning.png"
                    theme={ThemeTransparent}
                  />
                </TileSection>

                <Spacer />
                <ToTopLink theme={ThemeLight} />
              </ContainerCover>
            </ContainerArticle>
          </>
        ) : null}
      </>
    );
  }
}

export default TilesPage;
