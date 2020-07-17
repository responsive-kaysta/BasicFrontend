import { storiesOf } from "@storybook/react";
import {
  ContainerArticle,
  ContainerBody,
  ContainerSection,
  ThemeTransparent,
} from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 05 Layouts", module)
  .add("ContainerSection", () => (
    <div className="container">
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">ContainerSection without Theme</div>
        <div className="w-3/4 flex flex-row justify-between">
          <ContainerSection>
            <div>Container Content</div>
          </ContainerSection>
        </div>
      </section>
    </div>
  ))
  .add("ContainerArticle", () => (
    <div className="container">
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">ContainerArticle without Theme</div>
        <div className="w-3/4 flex flex-row justify-between">
          <ContainerArticle>
            <div>Container Content</div>
          </ContainerArticle>
        </div>
      </section>
    </div>
  ))
  .add("ContainerBody", () => (
    <div className="container bg-transparent text-gray-100 border-gray-100">
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">ContainerBody, ThemeTransparent</div>
        <div className="w-3/4 flex flex-row justify-between">
          <ContainerBody
            theme={ThemeTransparent}
            backgroundImage="/images/mainboard-1174219.jpg"
          >
            <div>Container Content</div>
          </ContainerBody>
        </div>
      </section>
    </div>
  ));
