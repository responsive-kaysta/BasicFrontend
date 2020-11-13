import React, { FC, useEffect, useState } from "react";
import { ButtonRegular, ButtonSize, ButtonType, Input } from "../../elements";
import { Error } from "../../elements/typography";
import { ThemeType } from "../../typings";
import { getCaptcha } from "./captcha-service";

// https://dummyimage.com/
// https://dummyimage.com/300x60.png&text=dummyimage.com+rocks!
// https://www.npmjs.com/package/crypto-random-string

type ImageCaptchaProps = {
  apiHost: string;
  value: string;
  theme: ThemeType;
  captchaInput: string;
  pageOrigin: string;
  onCaptchaChange: (captcha: string) => void;
  onCaptchaRefresh: () => void;
  error?: boolean;
};

export const ImageCaptcha: FC<ImageCaptchaProps> = ({
  apiHost,
  value,
  theme,
  captchaInput,
  pageOrigin,
  onCaptchaChange,
  onCaptchaRefresh,
  error = false,
}) => {
  const [captchaState, setCaptchaState] = useState<string>();

  useEffect(() => {
    getCaptcha(apiHost, pageOrigin, value).then((res) => setCaptchaState(res));
  }, [value]);

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full md:w-1/2 md:mr-2">
          <div className="w-full">
            <Input
              theme={theme}
              label="Captcha Input"
              type="text"
              id="captchaInput"
              name="captchaInput"
              value={captchaInput}
              placeholderText="Captcha Placeholder"
              onInputChanged={(captcha: string) => onCaptchaChange(captcha)}
            />
            <div>
              {error && <Error theme={theme}>Captcha does not match!</Error>}
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between md:w-1/2 md:ml-2 mt-2 md:mt-0">
          <img src={`data:image/png;base64,${captchaState}`} />
          <div className="flex items-center ml-2">
            <ButtonRegular
              text="Refresh"
              size={ButtonSize.small}
              type={ButtonType.primary}
              onClick={onCaptchaRefresh}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
