import * as React from "react";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import PageHeader from "../../compositions/page-header/page-header";
import eSpotlightOrientation from "../../compositions/spotlight/spec/eSpotlightOrientation";
import eSpotlightPictogram from "../../compositions/spotlight/spec/eSpotlightPictogram";
import Spotlight from "../../compositions/spotlight/spotlight";
import RegularLinkElement from "../../elements/link-elements/regular-link-element";
import Spacer from "../../elements/spacer/spacer";
import DivElement from "../../elements/text-elements/div-element";
import ParagraphElement from "../../elements/text-elements/paragraph-element";
import eTextStyles from "../../elements/text-elements/spec/eTextStyles";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";

class Impressum extends React.Component {
  public render() {
    return (
      <>
        <ArticleContainer>
          <ArticleBanner
            header="Impressum"
            paragraph="Partnerschaft beginnt mit Kommunikation"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Kommunikation"
            paragraph="Darauf haben wir uns nicht nur im technischen Sinne spezialisiert"
            pictogram={eSpotlightPictogram.connection_1}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Die Gestaltung und Betreuung der Inhalte erfolgt durch"
              paragraph="responsive IT"
              pageStyle={ePageStyleTemplates.light}
            />
            <ParagraphElement cssClass={eTextStyles.italic}>
              IT & Software Architecture, Engineering & Consulting
            </ParagraphElement>
            <ParagraphElement cssClass={eTextStyles.italic}>
              Kay Stuckenschmidt
            </ParagraphElement>
            <ParagraphElement cssClass={eTextStyles.italic}>
              Gossauerstrasse 17
            </ParagraphElement>
            <ParagraphElement cssClass={eTextStyles.italic}>
              9100 Herisau, Switzerland
            </ParagraphElement>
            <ParagraphElement cssClass={eTextStyles.italic}>
              Handelsregisternummer: CHE-460.558.934
            </ParagraphElement>

            <Spacer />

            <PageHeader
              header="Credits"
              paragraph="Unsere Arbeit wäre ohne Open-Source und Hilfsbereitschaft nicht möglich – credits to"
              pageStyle={ePageStyleTemplates.light}
            />
            <DivElement>
              <ul>
                <li>
                  <RegularLinkElement
                    text="ServerTown"
                    link="https://servertown.ch/webhosting-hosting/impressum"
                  />
                </li>
                <li>
                  <RegularLinkElement
                    text="Microsoft .NET"
                    link="https://dotnet.microsoft.com/"
                  />
                </li>
                <li>
                  <RegularLinkElement
                    text="Microsoft ASP.NET MVC"
                    link="https://dotnet.microsoft.com/apps/aspnet/mvc"
                  />
                </li>
                <li>
                  <RegularLinkElement
                    text="VisualStudio"
                    link="https://visualstudio.microsoft.com/"
                  />
                </li>
                <li>
                  <RegularLinkElement
                    text="VisualStudio CODE"
                    link="https://code.visualstudio.com/"
                  />
                </li>
                <li>
                  <RegularLinkElement
                    text="AZURE"
                    link="https://azure.microsoft.com/de-de/"
                  />
                </li>
                <li>
                  <RegularLinkElement
                    text="Bootstrap"
                    link="https://getbootstrap.com/"
                  />
                </li>
                <li>
                  <RegularLinkElement
                    text="Reactjs"
                    link="https://reactjs.org/"
                  />
                </li>
                <li>
                  <RegularLinkElement
                    text="html5up"
                    link="https://html5up.net/"
                  />
                </li>
                <li>
                  <RegularLinkElement
                    text="GitHub"
                    link="https://github.com/"
                  />
                </li>
                <li>
                  <RegularLinkElement
                    text="Nuget"
                    link="https://www.nuget.org/"
                  />
                </li>
                <li>
                  <RegularLinkElement
                    text="StackOverflow"
                    link="https://stackoverflow.com/"
                  />
                </li>
              </ul>
            </DivElement>

            <Spacer />

            <PageHeader
              header="Skills"
              paragraph="Mit diesen mehr oder weniger kreativen Fähigkeiten können Sie rechnen"
              pageStyle={ePageStyleTemplates.light}
            />

            <ParagraphElement cssClass={eTextStyles.align_center}>
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
