import React, { FC } from "react";
import { ThemeType } from "../../identity";
import { TagItem } from "../../typings";
import { Section } from "../sections";
import { AbstractTitle } from "../title-blocks";

type TagCloudProps = {
  title: string;
  tags: TagItem[];
  hruler?: boolean;
  theme?: ThemeType;
};

export const TagCloud: FC<TagCloudProps> = ({ title, hruler, theme }) => {
  return (
    <Section theme={theme}>
      <AbstractTitle title={title} hruler={hruler} theme={theme} />
    </Section>
  );
};
