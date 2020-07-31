import { storiesOf } from "@storybook/react";
import React from "react";

storiesOf("Design System / 01 Identity", module).add("Typography", () => (
  <div>
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">font-sans</div>
      <div className="w-3/4 font-sans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">font-serif</div>
      <div className="w-3/4 font-serif">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">font-mono</div>
      <div className="w-3/4 font-mono">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">font-code</div>
      <div className="w-3/4 font-code">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </section>
  </div>
));
