import {
  ContainerArticle,
  ContainerCover,
  ContainerSection,
  IntroSimple,
  PictogramSize,
  Spacer,
  Spotlight,
  SubTitle,
  ThemeDarkgray,
  ThemeLight,
  ThemeTransparent,
  TileItem,
  TileSection,
  Topbar,
  ToTopLink,
} from "basic-frontend-common";
import React from "react";
import { PAGE_NAME } from "../constants";
import { FooterComponent, menuItems } from "../includes/site-parts";

class TilesPage extends React.Component {
  public render() {
    return (
      <>
        {typeof window !== "undefined" ? (
          <>
            <Topbar
              backgroundImage="/backgrounds/Website-Design-Background.png"
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
                  title="Fancy Overview Page"
                  lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                />
                <Spotlight
                  theme={ThemeLight}
                  title="An example of an Overview page"
                  content="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua."
                  pictogram="cloud_global_network"
                  pictogramSize={PictogramSize.xl}
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
                      headline="Text Page"
                      date="Aug. 1. 2020"
                      description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                      link="/text-page"
                      bgImage="/backgrounds/team.png"
                      theme={ThemeTransparent}
                    />

                    <TileItem
                      headline="Text Page"
                      date="Aug. 1. 2020"
                      description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                      link="/text-page"
                      bgImage="/backgrounds/internet_1.png"
                      theme={ThemeTransparent}
                    />

                    <TileItem
                      headline="Text Page"
                      date="Aug. 1. 2020"
                      description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                      link="/text-page"
                      bgImage="/backgrounds/settings-gears.png"
                      theme={ThemeTransparent}
                    />

                    <TileItem
                      headline="Text Page"
                      date="Aug. 1. 2020"
                      description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                      link="/text-page"
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
                      headline="Product Page"
                      date="Aug. 1. 2020"
                      description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                      link="/product-page"
                      bgImage="/backgrounds/planning.png"
                      theme={ThemeTransparent}
                    />
                  </TileSection>

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

export default TilesPage;
