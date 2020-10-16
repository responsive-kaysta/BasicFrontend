import { storiesOf } from "@storybook/react";
import { ContactFormRegular, ThemeLight } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 04 Compositions / Contact Form Regular", module).add(
  "SimpleEyeCatcher",
  () => (
    <div>
      <section className="flex flex-row mb-10">
        <div className="w-1/4 text-xl">Type</div>
        <div className="w-3/4 text-xl">Swarm</div>
      </section>

      <section className="flex flex-row mb-10">
        <div className="w-1/4">SimpleEyeCatcher</div>
        <div className="w-3/4 flex flex-row justify-between">
          <ContactFormRegular
            apiHost="http://api.master-archive.local"
            language="en"
            pageOrigin="storybook.responsive-kaysta.local"
            reCaptchaSiteKey="6LeYO9gZAAAAAMr3jJaTQPmypyKF-kc7gfy8SnwP"
            reasonsDropdown={[{ value: "1", label: "Value 1" }]}
            theme={ThemeLight}
          />
        </div>
      </section>
    </div>
  )
);
