import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { PAGE_NAME } from "../constants";
import { ArticleContainer } from "../components/article-container/article-container";
import { ArticleBanner } from "../compositions/article-banner/article-banner";
import { ePageStyleTemplates } from "../less";
import { Spotlight } from "../compositions/spotlight/spotlight";
import { ePictogram, eSpotlightOrientation, eTextStyles } from "../page-types/";
import { ColorContainer } from "../components/color-container/color-container";
import { ParagraphElement } from "../elements/text-elements/paragraph-element";
import { Spacer } from "../elements/spacer/spacer";
import { ToTopButton } from "../elements/to-top-button/to-top-button";

var scroll = Scroll.animateScroll;

class Contact extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <Head>
          <title>Haftungsausschluss - {PAGE_NAME}</title>
        </Head>

        <ArticleContainer>
          <ArticleBanner
            header="Haftungsausschluss"
            paragraph="Kommunikation und Kreativität - ein wunderbare Zusammenspiel"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Inhalt des Onlineangebotes"
            paragraph=""
            pictogram={ePictogram.connection_1}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />
          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <ParagraphElement textStyles={eTextStyles.lead}>
              Der Autor übernimmt keinerlei Gewähr für die Aktualität,
              Richtigkeit und Vollständigkeit der bereitgestellten Informationen
              auf unserer Website.
            </ParagraphElement>
            <ParagraphElement>
              Haftungsansprüche gegen den Autor, welche sich auf Schäden
              materieller oder ideeller Art beziehen, die durch die Nutzung oder
              Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung
              fehlerhafter und unvollständiger Informationen verursacht wurden,
              sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein
              nachweislich vorsätzliches oder grob fahrlässiges Verschulden
              vorliegt.
            </ParagraphElement>
            <ParagraphElement>
              Alle Angebote sind freibleibend und unverbindlich. Der Autor
              behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte
              Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu
              löschen oder die Veröffentlichung zeitweise oder endgültig
              einzustellen.
            </ParagraphElement>
          </ColorContainer>

          <Spotlight
            header="Verweise und Links "
            paragraph=""
            pictogram={ePictogram.connection_2}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />
          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <ParagraphElement textStyles={eTextStyles.lead}>
              Bei direkten oder indirekten Verweisen auf fremde Webseiten
              (“Hyperlinks”), die außerhalb des Verantwortungsbereiches des
              Autors liegen, würde eine Haftungsverpflichtung ausschließlich in
              dem Fall in Kraft treten, in dem der Autor von den Inhalten
              Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die
              Nutzung im Falle rechtswidriger Inhalte zu verhindern.
            </ParagraphElement>
            <ParagraphElement>
              Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der
              Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten
              erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die
              Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten
              hat der Autor keinerlei Einfluss. Deshalb distanziert er sich
              hiermit ausdrücklich von allen Inhalten aller verlinkten
              /verknüpften Seiten, die nach der Linksetzung verändert wurden.
            </ParagraphElement>
            <ParagraphElement>
              Diese Feststellung gilt für alle innerhalb des eigenen
              Internetangebotes gesetzten Links und Verweise sowie für
              Fremdeinträge in vom Autor eingerichteten Gästebüchern,
              Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen
              anderen Formen von Datenbanken, auf deren Inhalt externe
              Schreibzugriffe möglich sind.
            </ParagraphElement>
            <ParagraphElement>
              Für illegale, fehlerhafte oder unvollständige Inhalte und
              insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung
              solcherart dargebotener Informationen entstehen, haftet allein der
              Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige,
              der über Links auf die jeweilige Veröffentlichung lediglich
              verweist.
            </ParagraphElement>
          </ColorContainer>

          <Spotlight
            header="Urheber- und Kennzeichenrecht"
            paragraph=""
            pictogram={ePictogram.share}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />
          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <ParagraphElement textStyles={eTextStyles.lead}>
              Der Autor ist bestrebt, in allen Publikationen die Urheberrechte
              der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und
              Texte zu beachten, von ihm selbst erstellte Bilder, Grafiken,
              Tondokumente, Videosequenzen und Texte zu nutzen oder auf
              lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte
              zurückzugreifen.
            </ParagraphElement>
            <ParagraphElement>
              Alle innerhalb des Internetangebotes genannten und ggf. durch
              Dritte geschützten Marken- und Warenzeichen unterliegen
              uneingeschränkt den Bestimmungen des jeweils gültigen
              Kennzeichenrechts und den Besitzrechten der jeweiligen
              eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist
              nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte
              Dritter geschützt sind!
            </ParagraphElement>
            <ParagraphElement>
              Das Copyright für veröffentlichte, vom Autor selbst erstellte
              Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung
              oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und
              Texte in anderen elektronischen oder gedruckten Publikationen ist
              ohne ausdrückliche Zustimmung des Autors nicht gestattet.
            </ParagraphElement>
          </ColorContainer>

          <Spotlight
            header="Datenschutz "
            paragraph=""
            pictogram={ePictogram.planning}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />
          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <ParagraphElement textStyles={eTextStyles.lead}>
              Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe
              persönlicher oder geschäftlicher Daten (Emailadressen, Namen,
              Anschriften) besteht, so erfolgt die Preisgabe dieser Daten
              seitens des Nutzers auf ausdrücklich freiwilliger Basis.
            </ParagraphElement>
            <ParagraphElement>
              Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist –
              soweit technisch möglich und zumutbar – auch ohne Angabe solcher
              Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms
              gestattet. Die Nutzung der im Rahmen des Impressums oder
              vergleichbarer Angaben veröffentlichten Kontaktdaten wie
              Postanschriften, Telefon- und Faxnummern sowie Emailadressen durch
              Dritte zur Übersendung von nicht ausdrücklich angeforderten
              Informationen ist nicht gestattet.
            </ParagraphElement>
            <ParagraphElement>
              Rechtliche Schritte gegen die Versender von sogenannten Spam-Mails
              bei Verstössen gegen dieses Verbot sind ausdrücklich vorbehalten.
            </ParagraphElement>
          </ColorContainer>

          <Spotlight
            header="Rechtswirksamkeit dieses Haftungsausschlusses  "
            paragraph=""
            pictogram={ePictogram.education}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />
          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <ParagraphElement textStyles={eTextStyles.lead}>
              Dieser Haftungsausschluss/Disclaimer ist als Teil des
              Internetangebotes zu betrachten, von dem aus auf diese Seite
              verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses
              Textes der geltenden Rechtslage nicht, nicht mehr oder nicht
              vollständig entsprechen sollten, bleiben die übrigen Teile des
              Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
            </ParagraphElement>
            <Spacer />

            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default Contact;
