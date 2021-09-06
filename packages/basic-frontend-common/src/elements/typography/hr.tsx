import React, { FC } from 'react';
import { ThemeType } from '../../typings';

type HrulerProps = {
  theme?: ThemeType;
};

export const Hruler: FC<HrulerProps> = ({ theme }) => {
  return (
    <hr
      className={`mt-3 mb-3 md:mt-5 md:mb-5 xl:mt-7 xl:mb-7 ${
        theme ? theme.body.borderColor : 'border-gray-300'
      }`}
    />
  );
};
