import React, { FC, ReactNode } from "react";
import { SectionHeader } from "./section-header";
import { SectionContainer } from "./section-container";

type ArticleSectionProps = {
  sectionHeader: ReactNode;
  sectionContent: ReactNode;
};

export const ArticleSection: FC<ArticleSectionProps> = ({
  sectionHeader,
  sectionContent,
}) => {
  return (
    <article>
      <SectionHeader>{sectionHeader}</SectionHeader>
      <SectionContainer>{sectionContent}</SectionContainer>
    </article>
  );
};
