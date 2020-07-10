import { storiesOf } from "@storybook/react";
import { Link } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 02 Elements", module).add("Links", () => (
  <div className="container">
    <section className="flex flex-row mb-10">
      <div className="w-1/3 text-xl">Link</div>
      <div className="w-2/3 text-xl">Example</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">Simple Link</div>
      <div className="w-2/3 flex flex-row justify-between">
        <Link
          href="/?path=/story/design-system-02-elements--links"
          text="Simple Link"
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">Link new Window</div>
      <div className="w-2/3 flex flex-row justify-between">
        <Link
          href="https://responsive-it.biz"
          text="Link new Window"
          newWindow
        />
      </div>
    </section>
  </div>
));
