import { storiesOf } from "@storybook/react";
import {
  Intro,
  Product,
  IntroAbstract,
  TagCloud,
  TagItem,
  IntroComplex,
  ImageOrientation,
} from "basic-frontend-common";
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

storiesOf("Design System / 03 Compositions", module).add(
  "Content-Blocks",
  () => (
    <div className="container">
      <section className="flex flex-row mb-10">
        <div className="w-1/3 text-xl">Type</div>
        <div className="w-2/3 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/3">Intro without Theme</div>
        <div className="w-2/3 flex flex-row justify-between">
          <Intro
            title="Lorem ipsum dolor sit amet"
            subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          />
        </div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/3">IntroAbstract without Theme</div>
        <div className="w-2/3 flex flex-row justify-between">
          <IntroAbstract
            title="Lorem ipsum dolor sit amet"
            hruler
            lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          />
        </div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/3">TagCloud without Theme</div>
        <div className="w-2/3 flex flex-row justify-between">
          <TagCloud title="Lorem ipsum dolor sit amet" hruler tags={tagList} />
        </div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/3">IntroComplex without Theme</div>
        <div className="w-2/3 flex flex-row justify-between">
          <IntroComplex
            title="Lorem ipsum dolor sit amet"
            titleComponent={<div>Div inside</div>}
            hruler
            lead="At vero eos et accusam et justo duo dolores et ea rebum."
          />
        </div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/3">Product, right alignment, no Theme</div>
        <div className="w-2/3 flex flex-row justify-between">
          <Product
            title="Lorem ipsum dolor sit amet"
            content="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            src="/AdobeStock_103620070.jpg"
            alt="Alt text"
            caption="At vero eos et accusam et justo duo dolores et ea rebum"
          />
        </div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/3">Product, left alignment, no Theme</div>
        <div className="w-2/3 flex flex-row justify-between">
          <Product
            title="Lorem ipsum dolor sit amet"
            content="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            src="/AdobeStock_103620070.jpg"
            alt="Alt text"
            orientation={ImageOrientation.left}
            caption="At vero eos et accusam et justo duo dolores et ea rebum"
          />
        </div>
      </section>
    </div>
  )
);
