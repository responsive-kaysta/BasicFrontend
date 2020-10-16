import React, { FC } from 'react';
import { ThemeType } from '../../typings';
import { FormLocalization } from './localization';

type ContactFormRegularProps = {
  language: string;
  pageOrigin: string;
  theme: ThemeType;
  localization: FormLocalization;
  reasonsDropdown: { value: string; label: string }[];
  reCaptchaSiteKey: string;
};

export const ContactFormRegular: FC<ContactFormRegularProps> = ({
  language,
  localization,
  pageOrigin,
  theme,
  reasonsDropdown,
}) => {
  console.log('language: ', language);
  console.log('localization: ', localization);
  console.log('pageOrigin: ', pageOrigin);
  console.log('theme: ', theme);
  console.log('reasonsDropdown: ', reasonsDropdown);

  return (
    <section>
      <div>Contact Form Regular</div>
    </section>
  );
};
