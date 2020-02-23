import * as React from "react";
import Iframe from "react-iframe";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components/";
import { EyeCatcher, PageBanner } from "../compositions/";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { ePageStyleTemplates } from "../page-types/";

var scroll = Scroll.animateScroll;

class Contact extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }
  public render() {
    return (
      <>
        <Head>
          <title>Startseite - {PAGE_NAME}</title>
        </Head>
        <PageBanner
          header={PAGE_NAME}
          paragraph={PAGE_MAIN_TOPIC}
          pageStyle={ePageStyleTemplates.transparent}
          scrollTo="one"
        />
        <ArticleContainer>
          <EyeCatcher
            header="Fragen & Antworten"
            paragraph="Wir beantworten Ihre Fragen baldigst ..."
            pageStyle={ePageStyleTemplates.green}
            elementId="one"
          />

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <Iframe
              url="https://www.emailmeform.com/builder/embed/34HIAVnOyUf4TlBvo"
              width="100%"
              height="750px"
              id="emailmeform"
            />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default Contact;
