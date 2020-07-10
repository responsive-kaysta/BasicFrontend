import { storiesOf } from "@storybook/react";
import { Image } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 02 Elements", module).add("Images", () => (
  <div className="container">
    <section className="flex flex-row mb-10">
      <div className="w-1/3 text-xl">Image</div>
      <div className="w-2/3 text-xl">Example</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">Simple Image</div>
      <div className="w-2/3 flex flex-row justify-between">
        <Image src="/AdobeStock_103620070.jpg" alt="some alt text" />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">Image with Caption</div>
      <div className="w-2/3 flex flex-row justify-between">
        <Image
          src="/AdobeStock_103620070.jpg"
          alt="some alt text"
          caption="Image Caption Text"
        />
      </div>
    </section>
  </div>
));
