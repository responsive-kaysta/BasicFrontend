import { storiesOf } from "@storybook/react";
import { Orientation, Product, Spacer } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 04 Components", module).add("Product", () => (
  <div>
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Product, right alignment</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Product
          title="Lorem ipsum dolor sit amet"
          content="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          src="/images/AdobeStock_103620070.jpg"
          alt="Alt text"
          caption="At vero eos et accusam et justo duo dolores et ea rebum"
        />
      </div>
    </section>

    <Spacer />
    <Spacer />

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Product, left alignment</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Product
          title="Lorem ipsum dolor sit amet"
          content="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          src="/images/AdobeStock_103620070.jpg"
          alt="Alt text"
          orientation={Orientation.left}
          caption="At vero eos et accusam et justo duo dolores et ea rebum"
        />
      </div>
    </section>
  </div>
));
