import { storiesOf } from "@storybook/react";
import { ContainerArticle } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 04 Components", module).add("Container", () => (
  <div className="container">
    <section className="flex flex-row mb-10">
      <div className="w-1/3 text-xl">Type</div>
      <div className="w-2/3 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/3">ContainerArticle without Theme</div>
      <div className="w-2/3 flex flex-row justify-between">
        <ContainerArticle>Container Content</ContainerArticle>
      </div>
    </section>
  </div>
));
