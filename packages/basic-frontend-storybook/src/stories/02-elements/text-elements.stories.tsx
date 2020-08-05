import { storiesOf } from "@storybook/react";
import {
  Caption,
  Comment,
  Hruler,
  Label,
  Legend,
  TextLead,
  TextRegular,
  Title,
  TitleAbstract,
  TitleSub,
} from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 02 Elements", module).add("Text-Elements", () => (
  <div>
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Title</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Title>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Title>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">TitleSub</div>
      <div className="w-3/4 flex flex-row justify-between">
        <TitleSub>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </TitleSub>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">TitleAbstract</div>
      <div className="w-3/4 flex flex-row justify-between">
        <TitleAbstract>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </TitleAbstract>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">TextLead</div>
      <div className="w-3/4 flex flex-row justify-between">
        <TextLead>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </TextLead>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">TextRegular</div>
      <div className="w-3/4 flex flex-row justify-between">
        <TextRegular>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </TextRegular>
      </div>
    </section>

    <Hruler />

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Caption</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Caption>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        </Caption>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Comment</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Comment>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        </Comment>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Label</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Label>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        </Label>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Legend</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Legend>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        </Legend>
      </div>
    </section>
  </div>
));
