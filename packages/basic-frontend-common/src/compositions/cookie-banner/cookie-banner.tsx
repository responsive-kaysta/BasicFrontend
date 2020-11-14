import React, { FC, ReactNode, useState } from "react";
import LocalizedStrings from "react-localization";
import {
  ButtonRegular,
  ButtonSize,
  ButtonType,
  Comment,
  TitleAbstract,
} from "../../elements";
import { ThemeType } from "../../typings";
import { COOKIE_KEY, setStorageItem } from "../../utils";
import * as json from "./localization.json";

type CookieBannerProps = {
  children: ReactNode;
  theme: ThemeType;
  language: string;
  isCookieSet?: boolean;
  title?: string;
  text?: string;
  buttonAcceptType?: ButtonType;
  buttonDeclineType?: ButtonType;
  cookieKey?: string;
};

// https://www.cookiepolicygenerator.com/
// https://eigene-homepage.net/cookie-hinweis
// https://www.termsfeed.com/cookie-consent/

export const CookieBanner: FC<CookieBannerProps> = ({
  children,
  theme,
  language,
  isCookieSet = false,
  title,
  text,
  buttonAcceptType,
  buttonDeclineType,
  cookieKey,
}) => {
  const localizedStrings = new LocalizedStrings(json);
  localizedStrings.setLanguage(language);

  const [isCookieSetState, setIsCookieSetState] = useState<boolean>(
    isCookieSet
  );

  const style = `z-0 bg-teal-100 bg-opacity-25 rounded-lg m-4 p-4 text-center ${
    theme ? theme.body.textColor : "text-gray-800"
  }`;

  const key = cookieKey ? cookieKey : COOKIE_KEY;

  const onAcceptClicked = () => {
    const cookie = JSON.stringify({ analytics: true });
    setStorageItem(key, cookie);
    setIsCookieSetState(true);
  };

  const onDeclineClicked = () => {
    const cookie = JSON.stringify({ analytics: false });
    setStorageItem(key, cookie);
    setIsCookieSetState(true);
  };

  const bannerTitle = title ? title : localizedStrings.cookieBanner.title;
  const bannerText = text ? text : localizedStrings.cookieBanner.text;

  const buttonAcceptStyle = buttonAcceptType
    ? buttonAcceptType
    : ButtonType.primary;
  const buttonDeclineStyle = buttonDeclineType
    ? buttonDeclineType
    : ButtonType.tertiary;

  return (
    <>
      {!isCookieSetState && (
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
                onClick={onAcceptClicked}
                text="Accept"
                size={ButtonSize.small}
                type={buttonAcceptStyle}
              />
            </span>
            <span className="ml-1">
              <ButtonRegular
                onClick={onDeclineClicked}
                text="Decline"
                size={ButtonSize.small}
                type={buttonDeclineStyle}
              />
            </span>
          </div>
        </div>
      )}
      {children}
    </>
  );
};
