import { storiesOf } from "@storybook/react";
import {
  ContainerArticle,
  ContainerSection,
  Intro,
  SubTitle,
  TextRegular,
  ThemeDarkgray,
  ThemeTransparent,
  Topbar,
} from "basic-frontend-common";
import React from "react";
import { footerComponent, menuItems } from "../../helper";

storiesOf("Design System / 05 Layouts", module).add("Disclaimer Page", () => (
  <Topbar
    menuItems={menuItems}
    footer={footerComponent(ThemeDarkgray)}
    backgroundImage="/images/mainboard-1174219.jpg"
    branding="Fancy Branding"
    theme={ThemeDarkgray}
  >
    <ContainerArticle theme={ThemeTransparent}>
      <Intro
        title="Disclaimer"
        subTitle="Inhalt des Onlineangebotes"
        lead="Der Autor übernimmt keinerlei Gewähr für die Aktualität, Richtigkeit und Vollständigkeit der bereitgestellten Informationen auf unserer Website."
        theme={ThemeTransparent}
        containerContent
        marginBottom={false}
        paddingBottom={false}
      />

      <ContainerSection theme={ThemeTransparent}>
        <TextRegular theme={ThemeTransparent} paddingBottom>
          Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller
          oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung
          der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und
          unvollständiger Informationen verursacht wurden, sind grundsätzlich
          ausgeschlossen, sofern seitens des Autors kein nachweislich
          vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
        </TextRegular>

        <TextRegular theme={ThemeTransparent} paddingTop>
          Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es
          sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne
          gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die
          Veröffentlichung zeitweise oder endgültig einzustellen.
        </TextRegular>
      </ContainerSection>

      <ContainerSection theme={ThemeTransparent}>
        <SubTitle
          theme={ThemeTransparent}
          title="Verweise und Links"
          leadText="Bei direkten oder indirekten Verweisen auf fremde Webseiten (“Hyperlinks”), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern."
        />
        <TextRegular theme={ThemeTransparent} paddingTop paddingBottom>
          Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der
          Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten
          erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die
          Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat
          der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit
          ausdrücklich von allen Inhalten aller verlinkten /verknüpften Seiten,
          die nach der Linksetzung verändert wurden.
        </TextRegular>

        <TextRegular theme={ThemeTransparent} paddingTop paddingBottom>
          Diese Feststellung gilt für alle innerhalb des eigenen
          Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge
          in vom Autor eingerichteten Gästebüchern, Diskussionsforen,
          Linkverzeichnissen, Mailinglisten und in allen anderen Formen von
          Datenbanken, auf deren Inhalt externe Schreibzugriffe möglich sind.
        </TextRegular>

        <TextRegular theme={ThemeTransparent} paddingTop>
          Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere
          für Schäden, die aus der Nutzung oder Nichtnutzung solcherart
          dargebotener Informationen entstehen, haftet allein der Anbieter der
          Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf
          die jeweilige Veröffentlichung lediglich verweist.
        </TextRegular>
      </ContainerSection>

      <ContainerSection theme={ThemeTransparent}>
        <SubTitle
          theme={ThemeTransparent}
          title="Urheber- und Kennzeichenrecht"
          leadText="Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen."
        />
        <TextRegular theme={ThemeTransparent} paddingTop paddingBottom>
          Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte
          geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den
          Bestimmungen des jeweils gültigen Kennzeichenrechts und den
          Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund
          der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen
          nicht durch Rechte Dritter geschützt sind!
        </TextRegular>

        <TextRegular theme={ThemeTransparent} paddingTop>
          Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte
          bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder
          Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in
          anderen elektronischen oder gedruckten Publikationen ist ohne
          ausdrückliche Zustimmung des Autors nicht gestattet.
        </TextRegular>
      </ContainerSection>

      <ContainerSection theme={ThemeTransparent}>
        <SubTitle
          theme={ThemeTransparent}
          title="Datenschutz"
          leadText="Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (Emailadressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis."
        />
        <TextRegular theme={ThemeTransparent} paddingTop paddingBottom>
          Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist –
          soweit technisch möglich und zumutbar – auch ohne Angabe solcher Daten
          bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms
          gestattet. Die Nutzung der im Rahmen des Impressums oder
          vergleichbarer Angaben veröffentlichten Kontaktdaten wie
          Postanschriften, Telefon- und Faxnummern sowie Emailadressen durch
          Dritte zur Übersendung von nicht ausdrücklich angeforderten
          Informationen ist nicht gestattet.
        </TextRegular>

        <TextRegular theme={ThemeTransparent} paddingTop>
          Rechtliche Schritte gegen die Versender von sogenannten Spam-Mails bei
          Verstössen gegen dieses Verbot sind ausdrücklich vorbehalten.
        </TextRegular>
      </ContainerSection>

      <ContainerSection theme={ThemeTransparent}>
        <SubTitle
          theme={ThemeTransparent}
          title="Rechtswirksamkeit dieses Haftungsausschlusses"
          leadText="Dieser Haftungsausschluss/Disclaimer ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt."
        />
      </ContainerSection>
    </ContainerArticle>
  </Topbar>
));
