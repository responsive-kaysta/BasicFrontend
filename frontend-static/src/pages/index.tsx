import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer } from "../components/";
import { EyeCatcher, PageBanner } from "../compositions/";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { ToTopButton } from "../elements/";
import { ePageStyleTemplates } from "../page-types/";

var scroll = Scroll.animateScroll;

class Index extends React.Component {
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
            header="Design-System"
            paragraph="UX | Reactive | Responsive | Atomic | Component"
            pageStyle={ePageStyleTemplates.green}
            elementId="one"
          />

          <ToTopButton />
        </ArticleContainer>
      </>
    );
  }
}

export default Index;
