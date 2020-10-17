import React, { FC } from 'react';

// type ImageCaptchaProps = {};

export const ImageCaptcha: FC = () => {
  const crs = require('crypto-random-string');
  const text = crs({ length: 6, type: 'alphanumeric' });

  const imageUrl = `https://dummyimage.com/300x60.png&text=${text}`;
  return (
    <section>
      <div>
        <img src={imageUrl} />
      </div>
    </section>
  );
};
