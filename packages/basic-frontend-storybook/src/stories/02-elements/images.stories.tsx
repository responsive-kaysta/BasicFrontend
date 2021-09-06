import { storiesOf } from '@storybook/react';
import { Image } from 'basic-frontend-common';
import React from 'react';

storiesOf('Design System / 02 Elements', module).add('Images', () => (
  <div>
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Simple Image</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Image
          src="https://cdn.responsive-it.biz/assets/bg-images/AdobeStock_103620070.jpg"
          alt="some alt text"
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Image with Caption</div>
      <div className="w-3/4 flex flex-row justify-between">
        <Image
          src="https://cdn.responsive-it.biz/assets/bg-images/AdobeStock_103620070.jpg"
          alt="some alt text"
          caption="Image Caption Text"
        />
      </div>
    </section>
  </div>
));
