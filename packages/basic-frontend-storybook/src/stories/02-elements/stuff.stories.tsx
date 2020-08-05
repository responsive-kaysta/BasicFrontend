import { storiesOf } from "@storybook/react";
import {
  Link,
  ScrollLink,
  Spinner,
  ThemeLight,
  ToTopLink,
} from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 02 Elements", module)
  .add("Links", () => (
    <div>
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">Simple Link</div>
        <div className="w-3/4 flex flex-row justify-between">
          <Link href="/?path=/story/design-system-02-elements--links">
            Simple Link
          </Link>
        </div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">Link new Window</div>
        <div className="w-3/4 flex flex-row justify-between">
          <Link href="https://responsive-it.biz" newWindow>
            Link new Window
          </Link>
        </div>
      </section>
    </div>
  ))
  .add("Arrows", () => (
    <div>
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">Scroll-Link</div>
        <div className="w-3/4 flex flex-row justify-between">
          <ScrollLink theme={ThemeLight} elementId="first-eye-catcher" />
        </div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">Top-Top-Link</div>
        <div className="w-3/4 flex flex-row justify-between">
          <ToTopLink theme={ThemeLight} />
        </div>
      </section>
    </div>
  ))
  .add("Spinner", () => (
    <div>
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">Simple Link</div>
        <div className="w-3/4 flex flex-row justify-between">
          <Spinner />
        </div>
      </section>
    </div>
  ));
