import * as React from "react";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components/";
import { ArticleBanner } from "../compositions/";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { ePageStyleTemplates } from "../page-types/";
import { TextHeadingComposition } from "../custom-compositions/text-heading-composition";

class TextHeading extends React.Component {
  public render() {
    return (
      <>
        <Head>
          <title>Texts & Headings - {PAGE_NAME}</title>
        </Head>
        <ArticleContainer>
          <ArticleBanner
            header={PAGE_NAME}
            paragraph={PAGE_MAIN_TOPIC}
            elementId="one"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <TextHeadingComposition text="Texts and Headings -> ePageStyleTemplates.light" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.green}>
            <TextHeadingComposition text="Texts and Headings -> ePageStyleTemplates.light" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.gray}>
            <TextHeadingComposition text="Texts and Headings -> ePageStyleTemplates.light" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.transparent}>
            <TextHeadingComposition text="Texts and Headings -> ePageStyleTemplates.light" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.purple}>
            <TextHeadingComposition text="Texts and Headings -> ePageStyleTemplates.light" />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default TextHeading;
