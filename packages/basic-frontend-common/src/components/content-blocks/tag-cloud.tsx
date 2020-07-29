import React, { FC } from "react";
import { Section } from "../../compositions/sections";
import { AbstractTitle } from "../../compositions/title-blocks";
import { ThemeType } from "../../identity";
import { TagItem } from "../../typings";
import { Link } from "../../elements";

type TagCloudProps = {
  title: string;
  tags: TagItem[];
  hruler?: boolean;
  theme?: ThemeType;
  elementId?: string;
};

export const TagCloud: FC<TagCloudProps> = ({
  title,
  tags,
  hruler,
  theme,
  elementId,
}) => {
  return (
    <Section theme={theme} elementId={elementId}>
      <AbstractTitle title={title} hruler={hruler} theme={theme} />
      <div className="text-center">
        {tags.map((tag) => {
          return (
            <span className="m-4 text-lg font-medium">
              {tag.link ? (
                <Link href={tag.link} theme={theme}>
                  {tag.label}
                </Link>
              ) : (
                tag.label
              )}
            </span>
          );
        })}
      </div>
    </Section>
  );
};
