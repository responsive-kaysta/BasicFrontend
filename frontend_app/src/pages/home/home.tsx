import * as React from "react";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import EyeCatcher from "../../compositions/eye-catcher/eye-catcher";
import PageBanner from "../../compositions/page-banner/page-banner";
import PageHeader from "../../compositions/page-header/page-header";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import Spinner from "../../elements/spinner/spinner";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";

class Home extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<Spinner />}>
        <Header />

        <PageBanner
          header="Basic Frontend"
          paragraph="finest - reactive & responsive - frontend"
          pageStyle={ePageStyleTemplates.transparent}
          scrollTo="one"
        />

        <ArticleContainer pageStyle={ePageStyleTemplates.transparent}>
          <EyeCatcher
            header="html5 & css & reactjs"
            paragraph="Die Kombination – html5 & css & reactjs"
            elementId="one"
            pageStyle={ePageStyleTemplates.green}
          />
          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <PageHeader
              header="responsive, react(ive), modular"
              paragraph="paragraph"
              pageStyle={ePageStyleTemplates.light}
            />
            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>

        <Footer />
      </React.Suspense>
    );
  }
}

export default Home;
