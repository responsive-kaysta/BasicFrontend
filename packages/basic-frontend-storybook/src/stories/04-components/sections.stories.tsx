import React from "react";
import {
  ArticleSection,
  SectionContainer,
  TextRegular,
  Title,
} from "basic-frontend-common";

export default {
  title: "Design System / 04 Components / Sections",
  component: ArticleSection,
};

export const defaultStory = () => (
  <div className="flex flex-col">
    <SectionContainer>Simple section element</SectionContainer>
  </div>
);
defaultStory.storyName = "Simple Section";

const simpleHeaderContent = "Header Content";
const simpleSectionContent =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ";

export const unstyledArticleSectionStory = () => (
  <div className="flex flex-col">
    <ArticleSection
      sectionHeader={simpleHeaderContent}
      sectionContent={simpleSectionContent}
    />
  </div>
);

unstyledArticleSectionStory.storyName = "Article Section unstyled";

const styledHeaderContent = <Title>Some Title content</Title>;
const styledSectionContent = (
  <TextRegular>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua.
  </TextRegular>
);

export const styledArticleSectionStory = () => (
  <div className="flex flex-col">
    <ArticleSection
      sectionHeader={styledHeaderContent}
      sectionContent={styledSectionContent}
    />
  </div>
);

styledArticleSectionStory.storyName = "Styled Article Section";
