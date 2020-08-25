import {
  ContainerArticle,
  ContainerCover,
  ContainerSection,
  IntroSimple,
  PictogramSize,
  Spacer,
  Spotlight,
  TextLead,
  TextRegular,
  ThemeDarkgray,
  ThemeGray,
  ThemeLight,
  ThemeTransparent,
  Topbar,
  ToTopLink,
} from "basic-frontend-common";
import React from "react";
import { PAGE_NAME } from "../constants";
import { FooterComponent, menuItems } from "../includes/site-parts";

class LegalPage extends React.Component {
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
                  title="Fancy Legal Page"
                  lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                />
                <Spotlight
                  theme={ThemeGray}
                  title="Inhalt des Onlineangebotes"
                  pictogram="robotics_3d_sensor"
                  pictogramSize={PictogramSize.xl}
                />

                <ContainerCover>
                  <ContainerSection>
                    <TextLead>
                      Der Autor übernimmt keinerlei Gewähr für die Aktualität,
                      Richtigkeit und Vollständigkeit der bereitgestellten
                      Informationen auf unserer Website.
                    </TextLead>
                  </ContainerSection>
                  <ContainerSection>
                    <TextRegular>
                      Haftungsansprüche gegen den Autor, welche sich auf Schäden
                      materieller oder ideeller Art beziehen, die durch die
                      Nutzung oder Nichtnutzung der dargebotenen Informationen
                      bzw. durch die Nutzung fehlerhafter und unvollständiger
                      Informationen verursacht wurden, sind grundsätzlich
                      ausgeschlossen, sofern seitens des Autors kein
                      nachweislich vorsätzliches oder grob fahrlässiges
                      Verschulden vorliegt.
                    </TextRegular>
                  </ContainerSection>
                  <ContainerSection>
                    <TextRegular>
                      Alle Angebote sind freibleibend und unverbindlich. Der
                      Autor behält es sich ausdrücklich vor, Teile der Seiten
                      oder das gesamte Angebot ohne gesonderte Ankündigung zu
                      verändern, zu ergänzen, zu löschen oder die
                      Veröffentlichung zeitweise oder endgültig einzustellen.
                    </TextRegular>
                    <Spacer />
                  </ContainerSection>
                </ContainerCover>

                <Spotlight
                  theme={ThemeGray}
                  title="Verweise und Links"
                  pictogram="robotics_remote_control"
                  pictogramSize={PictogramSize.xl}
                />

                <ContainerCover>
                  <ContainerSection>
                    <TextLead>
                      Bei direkten oder indirekten Verweisen auf fremde
                      Webseiten (“Hyperlinks”), die außerhalb des
                      Verantwortungsbereiches des Autors liegen, würde eine
                      Haftungsverpflichtung ausschließlich in dem Fall in Kraft
                      treten, in dem der Autor von den Inhalten Kenntnis hat und
                      es ihm technisch möglich und zumutbar wäre, die Nutzung im
                      Falle rechtswidriger Inhalte zu verhindern.
                    </TextLead>
                  </ContainerSection>
                  <ContainerSection>
                    <TextRegular>
                      Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt
                      der Linksetzung keine illegalen Inhalte auf den zu
                      verlinkenden Seiten erkennbar waren. Auf die aktuelle und
                      zukünftige Gestaltung, die Inhalte oder die Urheberschaft
                      der verlinkten/verknüpften Seiten hat der Autor keinerlei
                      Einfluss. Deshalb distanziert er sich hiermit ausdrücklich
                      von allen Inhalten aller verlinkten /verknüpften Seiten,
                      die nach der Linksetzung verändert wurden.
                    </TextRegular>
                  </ContainerSection>
                  <ContainerSection>
                    <TextRegular>
                      Diese Feststellung gilt für alle innerhalb des eigenen
                      Internetangebotes gesetzten Links und Verweise sowie für
                      Fremdeinträge in vom Autor eingerichteten Gästebüchern,
                      Diskussionsforen, Linkverzeichnissen, Mailinglisten und in
                      allen anderen Formen von Datenbanken, auf deren Inhalt
                      externe Schreibzugriffe möglich sind.
                    </TextRegular>
                  </ContainerSection>
                  <ContainerSection>
                    <TextRegular>
                      Für illegale, fehlerhafte oder unvollständige Inhalte und
                      insbesondere für Schäden, die aus der Nutzung oder
                      Nichtnutzung solcherart dargebotener Informationen
                      entstehen, haftet allein der Anbieter der Seite, auf
                      welche verwiesen wurde, nicht derjenige, der über Links
                      auf die jeweilige Veröffentlichung lediglich verweist.
                    </TextRegular>
                    <Spacer />
                  </ContainerSection>
                </ContainerCover>

                <Spotlight
                  theme={ThemeGray}
                  title="Urheber- und Kennzeichenrecht"
                  pictogram="robotics_mandatory"
                  pictogramSize={PictogramSize.xl}
                />

                <ContainerCover>
                  <ContainerSection>
                    <TextLead>
                      Der Autor ist bestrebt, in allen Publikationen die
                      Urheberrechte der verwendeten Bilder, Grafiken,
                      Tondokumente, Videosequenzen und Texte zu beachten, von
                      ihm selbst erstellte Bilder, Grafiken, Tondokumente,
                      Videosequenzen und Texte zu nutzen oder auf lizenzfreie
                      Grafiken, Tondokumente, Videosequenzen und Texte
                      zurückzugreifen.
                    </TextLead>
                  </ContainerSection>
                  <ContainerSection>
                    <TextRegular>
                      Alle innerhalb des Internetangebotes genannten und ggf.
                      durch Dritte geschützten Marken- und Warenzeichen
                      unterliegen uneingeschränkt den Bestimmungen des jeweils
                      gültigen Kennzeichenrechts und den Besitzrechten der
                      jeweiligen eingetragenen Eigentümer. Allein aufgrund der
                      bloßen Nennung ist nicht der Schluss zu ziehen, dass
                      Markenzeichen nicht durch Rechte Dritter geschützt sind!
                    </TextRegular>
                  </ContainerSection>
                  <ContainerSection>
                    <TextRegular>
                      Das Copyright für veröffentlichte, vom Autor selbst
                      erstellte Objekte bleibt allein beim Autor der Seiten.
                      Eine Vervielfältigung oder Verwendung solcher Grafiken,
                      Tondokumente, Videosequenzen und Texte in anderen
                      elektronischen oder gedruckten Publikationen ist ohne
                      ausdrückliche Zustimmung des Autors nicht gestattet.
                    </TextRegular>
                    <Spacer />
                  </ContainerSection>
                </ContainerCover>

                <Spotlight
                  theme={ThemeGray}
                  title="Datenschutz"
                  pictogram="robotics_assembly"
                  pictogramSize={PictogramSize.xl}
                />

                <ContainerCover>
                  <ContainerSection>
                    <TextLead>
                      Sofern innerhalb des Internetangebotes die Möglichkeit zur
                      Eingabe persönlicher oder geschäftlicher Daten
                      (Emailadressen, Namen, Anschriften) besteht, so erfolgt
                      die Preisgabe dieser Daten seitens des Nutzers auf
                      ausdrücklich freiwilliger Basis.
                    </TextLead>
                  </ContainerSection>
                  <ContainerSection>
                    <TextRegular>
                      Die Inanspruchnahme und Bezahlung aller angebotenen
                      Dienste ist – soweit technisch möglich und zumutbar – auch
                      ohne Angabe solcher Daten bzw. unter Angabe anonymisierter
                      Daten oder eines Pseudonyms gestattet. Die Nutzung der im
                      Rahmen des Impressums oder vergleichbarer Angaben
                      veröffentlichten Kontaktdaten wie Postanschriften,
                      Telefon- und Faxnummern sowie Emailadressen durch Dritte
                      zur Übersendung von nicht ausdrücklich angeforderten
                      Informationen ist nicht gestattet.
                    </TextRegular>
                  </ContainerSection>
                  <ContainerSection>
                    <TextRegular>
                      Rechtliche Schritte gegen die Versender von sogenannten
                      Spam-Mails bei Verstössen gegen dieses Verbot sind
                      ausdrücklich vorbehalten.
                    </TextRegular>
                    <Spacer />
                  </ContainerSection>
                </ContainerCover>

                <Spotlight
                  theme={ThemeGray}
                  title="Rechtswirksamkeit dieses Haftungsausschlusses"
                  pictogram="robotics_rechargeable"
                  pictogramSize={PictogramSize.xl}
                />

                <ContainerCover>
                  <ContainerSection>
                    <TextLead>
                      Dieser Haftungsausschluss/Disclaimer ist als Teil des
                      Internetangebotes zu betrachten, von dem aus auf diese
                      Seite verwiesen wurde. Sofern Teile oder einzelne
                      Formulierungen dieses Textes der geltenden Rechtslage
                      nicht, nicht mehr oder nicht vollständig entsprechen
                      sollten, bleiben die übrigen Teile des Dokumentes in ihrem
                      Inhalt und ihrer Gültigkeit davon unberührt.
                    </TextLead>
                    <Spacer />
                    <ToTopLink theme={ThemeLight} />
                  </ContainerSection>
                </ContainerCover>
              </ContainerArticle>
            </Topbar>
          </>
        ) : null}
      </>
    );
  }
}

export default LegalPage;
