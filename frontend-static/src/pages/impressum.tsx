import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { PAGE_NAME } from "../constants";
import { ArticleContainer } from "../components/article-container/article-container";
import { ArticleBanner } from "../compositions/article-banner/article-banner";
import { ePageStyleTemplates } from "../less";
import { Spotlight } from "../compositions/spotlight/spotlight";
import {
  ePictogram,
  eSpotlightOrientation,
  eTextStyles,
  eListContainerTypes
} from "../page-types/";
import { ColorContainer } from "../components/color-container/color-container";
import { PageHeader } from "../compositions/page-header/page-header";
import { ParagraphElement } from "../elements/text-elements/paragraph-element";
import { Spacer } from "../elements/spacer/spacer";
import { ListContainer } from "../compositions/list-container/list-container";
import { ListElement } from "../elements/list-elements/list-elements";
import { SpanLinkElement } from "../elements/link-elements/span-link-element";
import { ToTopButton } from "../elements/to-top-button/to-top-button";

var scroll = Scroll.animateScroll;

class Impressum extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <Head>
          <title>Impressum - {PAGE_NAME}</title>
        </Head>

        <ArticleContainer>
          <ArticleBanner
            header="Impressum"
            paragraph="Partnerschaft beginnt mit Kommunikation"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Kommunikation"
            paragraph="Darauf haben wir uns nicht nur im technischen Sinne spezialisiert"
            pictogram={ePictogram.connection_1}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Die Gestaltung und Betreuung der Inhalte erfolgt durch"
              paragraph="responsive IT"
              pageStyle={ePageStyleTemplates.light}
            />
            <ParagraphElement textStyles={eTextStyles.italic}>
              IT & Software Architecture, Engineering & Consulting
            </ParagraphElement>
            <ParagraphElement textStyles={eTextStyles.italic}>
              Kay Stuckenschmidt
            </ParagraphElement>
            <ParagraphElement textStyles={eTextStyles.italic}>
              Gossauerstrasse 17
            </ParagraphElement>
            <ParagraphElement textStyles={eTextStyles.italic}>
              9100 Herisau, Switzerland
            </ParagraphElement>
            <ParagraphElement textStyles={eTextStyles.italic}>
              Handelsregisternummer: CHE-460.558.934
            </ParagraphElement>

            <Spacer />

            <PageHeader
              header="Credits"
              paragraph="Unsere Arbeit wäre ohne Schweiss, Bier, Open-Source und Hilfsbereitschaft nicht möglich – credits to"
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <ListContainer listContainerType={eListContainerTypes.alt}>
              <ListElement>
                <SpanLinkElement
                  text="ServerTown"
                  link="https://servertown.ch/webhosting-hosting/impressum"
                  showLinkIcon
                  showLinkDivider
                />
              </ListElement>
              <ListElement>
                <SpanLinkElement
                  text="Microsoft .NET"
                  link="https://dotnet.microsoft.com/"
                  showLinkIcon
                  showLinkDivider
                />
              </ListElement>
              <ListElement>
                <SpanLinkElement
                  text="Microsoft ASP.NET MVC"
                  link="https://dotnet.microsoft.com/apps/aspnet/mvc"
                  showLinkIcon
                  showLinkDivider
                />
              </ListElement>
              <ListElement>
                <SpanLinkElement
                  text="VisualStudio"
                  link="https://visualstudio.microsoft.com/"
                  showLinkIcon
                  showLinkDivider
                />
              </ListElement>
              <ListElement>
                <SpanLinkElement
                  text="VisualStudio CODE"
                  link="https://code.visualstudio.com/"
                  showLinkIcon
                  showLinkDivider
                />
              </ListElement>
              <ListElement>
                <SpanLinkElement
                  text="AZURE"
                  link="https://azure.microsoft.com/de-de/"
                  showLinkIcon
                  showLinkDivider
                />
              </ListElement>
              <ListElement>
                <SpanLinkElement
                  text="Bootstrap"
                  link="https://getbootstrap.com/"
                  showLinkIcon
                  showLinkDivider
                />
              </ListElement>
              <ListElement>
                <SpanLinkElement
                  text="Reactjs"
                  link="https://reactjs.org/"
                  showLinkIcon
                  showLinkDivider
                />
              </ListElement>
              <ListElement>
                <SpanLinkElement
                  text="html5up"
                  link="https://html5up.net/"
                  showLinkIcon
                  showLinkDivider
                />
              </ListElement>
              <ListElement>
                <SpanLinkElement
                  text="GitHub"
                  link="https://github.com/"
                  showLinkIcon
                  showLinkDivider
                />
              </ListElement>
              <ListElement>
                <SpanLinkElement
                  text="Nuget"
                  link="https://www.nuget.org/"
                  showLinkIcon
                  showLinkDivider
                />
              </ListElement>
              <ListElement>
                <SpanLinkElement
                  text="StackOverflow"
                  link="https://stackoverflow.com/"
                  showLinkIcon
                  showLinkDivider
                />
              </ListElement>
            </ListContainer>

            <Spacer />

            <PageHeader
              header="Skills"
              paragraph="Mit diesen mehr oder weniger kreativen Fähigkeiten können Sie rechnen"
              pageStyle={ePageStyleTemplates.light}
            />

            <ParagraphElement textStyles={eTextStyles.align_center}>
              .NET, Development, Entwicklung, Datenbank, Oracle, MSSQL, MYSQL,
              Mobile, CMS, Content, Management, System, Mobile, responsive, web,
              jquery, bootstrap, umbraco, frontend, basic, open source, asp.net,
              c#, java script, css, html, MVC, UML, modelinh, hardening, scrum,
              agile, adaptive, senior, architect, engineering, planing, dev-ops,
              azure, vsts
            </ParagraphElement>

            <Spacer />

            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default Impressum;
