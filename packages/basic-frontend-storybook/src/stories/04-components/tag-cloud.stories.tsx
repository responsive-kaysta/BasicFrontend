import { storiesOf } from "@storybook/react";
import { TagCloud, TagItem } from "basic-frontend-common";
import React from "react";

const tagList: TagItem[] = [
  {
    label: "Tag 1",
  },
  {
    label: "Tag 2",
  },
  {
    label: "Tag 3",
  },
  {
    label: "Tag 4",
  },
  {
    label: "Tag 5",
  },
  {
    label: "Tag 6",
  },
  {
    label: "Tag 7",
  },
  {
    label: "Tag 8",
  },
];

storiesOf("Design System / 04 Components", module).add("Tag Cloud", () => (
  <div>
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">TagCloud</div>
      <div className="w-3/4 flex flex-row justify-between">
        <TagCloud title="Lorem ipsum dolor sit amet" hruler tags={tagList} />
      </div>
    </section>
  </div>
));
