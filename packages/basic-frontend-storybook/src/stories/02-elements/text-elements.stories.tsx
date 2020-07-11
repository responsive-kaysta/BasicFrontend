import { storiesOf } from "@storybook/react";
import {
  TextLead,
  TextRegular,
  Title,
  TitleAbstract,
  TitleSub,
} from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 02 Elements", module).add("Text-Elements", () => (
  <div className="container">
    <section className="flex flex-row mb-10">
      <div className="w-1/3 text-xl">Text-Element-Type</div>
      <div className="w-2/3 text-xl">Example</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">Title</div>
      <div className="w-2/3 flex flex-row justify-between">
        <Title>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Title>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">TitleSub</div>
      <div className="w-2/3 flex flex-row justify-between">
        <TitleSub>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </TitleSub>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">TitleAbstract</div>
      <div className="w-2/3 flex flex-row justify-between">
        <TitleAbstract>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </TitleAbstract>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">TextLead</div>
      <div className="w-2/3 flex flex-row justify-between">
        <TextLead>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </TextLead>
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">TextRegular</div>
      <div className="w-2/3 flex flex-row justify-between">
        <TextRegular>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </TextRegular>
      </div>
    </section>
  </div>
));
