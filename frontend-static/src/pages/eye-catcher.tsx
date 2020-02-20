import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer } from "../components/";
import { ArticleBanner, EyeCatcher } from "../compositions/";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { ToTopButton } from "../elements/";
import { ePageStyleTemplates } from "../page-types/";

var scroll = Scroll.animateScroll;

class EyeCatcherPage extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }
  public render() {
    return (
      <>
        <Head>
          <title>Startseite - {PAGE_NAME}</title>
        </Head>

        <ArticleContainer>
          <ArticleBanner
            header={PAGE_NAME}
            paragraph={PAGE_MAIN_TOPIC}
            pageStyle={ePageStyleTemplates.transparent}
          />

          <EyeCatcher
            header="EyeCatcher -> ePageStyleTemplates.purple"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            pageStyle={ePageStyleTemplates.purple}
          />

          <EyeCatcher
            header="EyeCatcher -> ePageStyleTemplates.green"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            pageStyle={ePageStyleTemplates.green}
          />

          <EyeCatcher
            header="EyeCatcher -> ePageStyleTemplates.transparent"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <EyeCatcher
            header="EyeCatcher -> ePageStyleTemplates.gray"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            pageStyle={ePageStyleTemplates.gray}
          />

          <EyeCatcher
            header="EyeCatcher -> ePageStyleTemplates.light"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            pageStyle={ePageStyleTemplates.light}
          />
          <ToTopButton />
        </ArticleContainer>
      </>
    );
  }
}

export default EyeCatcherPage;
