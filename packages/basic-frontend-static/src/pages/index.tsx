import {
  ContainerBody,
  ContainerSection,
  Footer,
  IntroEyeCatcher,
  SimpleEyeCatcher,
  ThemeGreen,
  ThemeTransparent,
} from "basic-frontend-common";
import React from "react";
import * as Scroll from "react-scroll";

var scroll = Scroll.animateScroll;
var ScrollLink = Scroll.Link;

class Index extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <ContainerBody
          theme={ThemeTransparent}
          backgroundImage="/images/mainboard-1174219.jpg"
        >
          <IntroEyeCatcher
            contentTop="responsive kaysta"
            contentBottom="finest full stack development"
            theme={ThemeTransparent}
          />

          <ScrollLink
            className={`bg-transparent ${ThemeTransparent.body.textColor} hover:${ThemeGreen.link.hoverColor} text-center font-semibold py-2 px-2`}
            to="first-eye-catcher"
            spy={true}
            smooth="easeInOutQuint"
            duration={2500}
            offset={0}
          >
            <span className="block mb-4">weiter</span>
            <span className="block">&#x2B07;</span>
          </ScrollLink>
        </ContainerBody>

        <SimpleEyeCatcher
          theme={ThemeGreen}
          elementId="first-eye-catcher"
          contentBottom="Lorem ipsum dolor sit amet"
          contentTop="At vero eos et accusam et justo duo dolores et ea rebum"
        />

        <ContainerSection theme={ThemeTransparent}>
          <div>Some Content</div>
        </ContainerSection>

        <Footer>
          <div>footer content</div>
        </Footer>
      </>
    );
  }
}

export default Index;
