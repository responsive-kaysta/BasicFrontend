import { storiesOf } from "@storybook/react";
import { ContainerArticle } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 05 Layouts / Container", module).add(
  "Container's",
  () => (
    <div className="container">
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">ContainerArticle without Theme</div>
        <div className="w-3/4 flex flex-row justify-between">
          <ContainerArticle>Container Content</ContainerArticle>
        </div>
      </section>
    </div>
  )
);
