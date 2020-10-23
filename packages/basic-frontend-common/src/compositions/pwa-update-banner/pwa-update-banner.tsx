import { useServiceWorker } from '@smartive/react-pwa-toolbox';
import React, { FC, ReactNode } from 'react';
import LocalizedStrings from 'react-localization';
import {
  ButtonRegular,
  ButtonSize,
  ButtonType,
  Comment,
  TitleAbstract,
} from '../../elements';
import { ThemeType } from '../../typings';
import * as json from './localization.json';

// https://www.npmjs.com/package/@smartive/react-pwa-toolbox

type PwaUpdateBannerProps = {
  children: ReactNode;
  theme: ThemeType;
  language: string;
  title?: string;
  text?: string;
  buttonAcceptType?: ButtonType;
};

export const PwaUpdateBanner: FC<PwaUpdateBannerProps> = ({
  children,
  theme,
  language,
  title,
  text,
  buttonAcceptType,
}) => {
  const localizedStrings = new LocalizedStrings(json);
  localizedStrings.setLanguage(language);

  const [updateAvailable, installUpdate] = useServiceWorker(
    'service-worker.js'
  );

  const style = `z-0 bg-teal-100 bg-opacity-25 rounded-lg m-4 p-4 text-center ${
    theme ? theme.body.textColor : 'text-gray-800'
  }`;

  const bannerTitle = title ? title : localizedStrings.updateBanner.title;
  const bannerText = text ? text : localizedStrings.updateBanner.text;

  const buttonAcceptStyle = buttonAcceptType
    ? buttonAcceptType
    : ButtonType.primary;

  return (
    <>
      {updateAvailable && (
        <div className={style}>
          <TitleAbstract theme={theme} marginBottom>
            {bannerTitle}
          </TitleAbstract>
          <Comment theme={theme} marginBottom>
            {bannerText}
          </Comment>
          <div className="flex flex-row justify-center">
            <span className="mr-1">
              <ButtonRegular
                onClick={installUpdate}
                text="Accept"
                size={ButtonSize.small}
                type={buttonAcceptStyle}
              />
            </span>
          </div>
        </div>
      )}
      {children}
    </>
  );
};
