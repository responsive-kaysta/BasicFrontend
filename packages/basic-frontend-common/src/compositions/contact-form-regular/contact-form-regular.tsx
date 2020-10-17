import React, { FC, useState } from 'react';
import LocalizedStrings from 'react-localization';
import { ContainerSection } from '../../components';
import {
  ButtonRegular,
  ButtonSize,
  ButtonType,
  Dropdown,
  Input,
  Textarea,
  TextRegular,
  Title,
  TitleAbstract,
} from '../../elements';
import { ThemeType } from '../../typings';
import {
  DropdownValidation,
  InputEmailValidation,
  InputTextValidation,
  isMobileView,
} from '../../utils';
import { ImageCaptcha } from '../image-captcha';
import { EmailForm, sendEmail } from './email-form';
import * as json from './localization.json';
import crs from 'crypto-random-string';

// https://dummyimage.com/
// https://dummyimage.com/300x60.png&text=dummyimage.com+rocks!
// https://www.npmjs.com/package/crypto-random-string
const captcha = crs({ length: 6, type: 'alphanumeric' });

type ContactFormRegularProps = {
  theme: ThemeType;
  language: string;
  reasonsDropdown: { value: string; label: string }[];
  pageOrigin: string;
  apiHost: string;
};

export const ContactFormRegular: FC<ContactFormRegularProps> = ({
  language,
  theme,
  reasonsDropdown,
  pageOrigin,
  apiHost,
}) => {
  const localizedStrings = new LocalizedStrings(json);
  localizedStrings.setLanguage(language);

  const [emailFormState, setEmailFormState] = useState<EmailForm>({});
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  const [errorFirstName, setErrorFirstName] = useState<string>(null);
  const [errorSurName, setErrorSurName] = useState<string>(null);
  const [errorEmailAddress, setErrorEmailAddress] = useState<string>(null);
  const [errorReason, setErrorReason] = useState<string>(null);
  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [errorCaptcha, setErrorCaptcha] = useState<boolean>(false);

  const [captchaMatch, setCaptchaMatch] = useState<boolean>(false);
  const [captchaInput, setCaptchaInput] = useState<string>();
  const [captchaValue, setCaptchaValue] = useState<string>(captcha);

  const optionsDropdown: {
    value: string;
    label: string;
  }[] = reasonsDropdown.map((item: { value: any; label: any }) => {
    return { value: item.value, label: item.label };
  });

  const optionSelected = optionsDropdown.find((opt) => {
    return opt.value === emailFormState.Reason;
  });

  const onSubmit = async () => {
    const eFirstName = InputTextValidation(emailFormState.FirstName, 3, 24);
    setErrorFirstName(eFirstName);

    const eSurName = InputTextValidation(emailFormState.SurName, 4, 64);
    setErrorSurName(eSurName);

    const eMessage = InputTextValidation(emailFormState.Message, 1, 512);
    setErrorMessage(eMessage);

    const eReason = DropdownValidation(emailFormState.Reason);
    setErrorReason(eReason);

    const eEmailAddress = InputEmailValidation(emailFormState.EmailAddress);
    setErrorEmailAddress(eEmailAddress);

    setCaptchaMatch(captcha === captchaInput);
    console.log('captchaInput: ', captchaInput);
    console.log('captchaMatch: ', captchaMatch);
    setErrorCaptcha(!captchaMatch);
    console.log('errorCaptcha: ', errorCaptcha);

    if (
      !eFirstName &&
      !eSurName &&
      !eMessage &&
      !eReason &&
      !eEmailAddress &&
      captchaMatch
    ) {
      emailFormState.Origin = pageOrigin;
      emailFormState.Reason = optionSelected.label;

      const mailSent = await sendEmail(emailFormState, apiHost);
      setIsEmailSent(mailSent);
    }
  };

  const onCaptchaRefresh = () => {
    setCaptchaValue(crs({ length: 6, type: 'alphanumeric' }));
  };

  return (
    <>
      {isEmailSent && (
        <ContainerSection theme={theme}>
          <Title theme={theme} marginBottom paddingTop>
            {localizedStrings.sharedContent.pages.pageContact.sentEmailTitle}
          </Title>
          <TextRegular theme={theme}>
            {localizedStrings.sharedContent.pages.pageContact.sentEmailText}
          </TextRegular>
        </ContainerSection>
      )}
      {!isEmailSent && (
        <form onSubmit={onSubmit}>
          <ContainerSection theme={theme} paddingTop>
            <fieldset className="flex flex-col w-full">
              <TitleAbstract theme={theme} marginBottom marginTop>
                {localizedStrings.sharedContent.pages.pageContact.legendPerson}
              </TitleAbstract>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:mr-2">
                  <Input
                    theme={theme}
                    label={
                      localizedStrings.sharedContent.pages.pageContact
                        .formFirstname
                    }
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={emailFormState.FirstName || ''}
                    placeholderText={
                      localizedStrings.sharedContent.pages.pageContact
                        .formFirstnamePlaceholder
                    }
                    onInputChanged={(FirstName: string) =>
                      setEmailFormState({ ...emailFormState, FirstName })
                    }
                    error={errorFirstName}
                  />
                </div>
                <div className="w-full md:w-1/2 md:ml-2 mt-6 md:mt-0">
                  <Input
                    theme={theme}
                    label={
                      localizedStrings.sharedContent.pages.pageContact
                        .formSurname
                    }
                    type="text"
                    id="surName"
                    name="surName"
                    value={emailFormState.SurName || ''}
                    placeholderText={
                      localizedStrings.sharedContent.pages.pageContact
                        .formSurnamePlaceholder
                    }
                    onInputChanged={(SurName: string) =>
                      setEmailFormState({ ...emailFormState, SurName })
                    }
                    error={errorSurName}
                  />
                </div>
              </div>

              <div className="w-full mt-6">
                <Input
                  theme={theme}
                  label={
                    localizedStrings.sharedContent.pages.pageContact.formEmail
                  }
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={emailFormState.EmailAddress || ''}
                  placeholderText={
                    localizedStrings.sharedContent.pages.pageContact
                      .formEmailPlaceholder
                  }
                  onInputChanged={(EmailAddress: string) =>
                    setEmailFormState({ ...emailFormState, EmailAddress })
                  }
                  error={errorEmailAddress}
                />
              </div>

              <div className="flex flex-col md:flex-row mt-6">
                <div className="w-full md:w-2/3 md:mr-2">
                  <Input
                    theme={theme}
                    label={
                      localizedStrings.sharedContent.pages.pageContact
                        .formStreet
                    }
                    type="text"
                    id="street"
                    name="street"
                    value={emailFormState.Street}
                    placeholderText={
                      localizedStrings.sharedContent.pages.pageContact
                        .formStreetPlaceholder
                    }
                    onInputChanged={(Street: string) =>
                      setEmailFormState({ ...emailFormState, Street })
                    }
                  />
                </div>
                <div className="w-full md:w-1/3 md:ml-2 mt-6 md:mt-0">
                  <Input
                    theme={theme}
                    label={
                      localizedStrings.sharedContent.pages.pageContact
                        .formNumber
                    }
                    type="number"
                    id="number"
                    name="number"
                    value={emailFormState.Number}
                    placeholderText={
                      localizedStrings.sharedContent.pages.pageContact
                        .formNumberPlaceholder
                    }
                    onInputChanged={(Number: string) =>
                      setEmailFormState({ ...emailFormState, Number })
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row mt-6">
                <div className="w-full md:w-2/3 md:mr-2">
                  <Input
                    theme={theme}
                    label={
                      localizedStrings.sharedContent.pages.pageContact.formCity
                    }
                    type="text"
                    id="city"
                    name="city"
                    value={emailFormState.City}
                    placeholderText={
                      localizedStrings.sharedContent.pages.pageContact
                        .formCityPlaceholder
                    }
                    onInputChanged={(City: string) =>
                      setEmailFormState({ ...emailFormState, City })
                    }
                  />
                </div>
                <div className="w-full md:w-1/3 md:ml-2 mt-6 md:mt-0">
                  <Input
                    theme={theme}
                    label={
                      localizedStrings.sharedContent.pages.pageContact
                        .formPostcode
                    }
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={emailFormState.PostCode}
                    placeholderText={
                      localizedStrings.sharedContent.pages.pageContact
                        .formPostcodePlaceholder
                    }
                    onInputChanged={(PostCode: string) =>
                      setEmailFormState({ ...emailFormState, PostCode })
                    }
                  />
                </div>
              </div>
            </fieldset>
          </ContainerSection>

          <ContainerSection theme={theme} marginTop>
            <fieldset className="flex flex-col w-full">
              <TitleAbstract theme={theme} marginBottom={true} marginTop={true}>
                {localizedStrings.sharedContent.pages.pageContact.legendReason}
              </TitleAbstract>
              <div className="w-full">
                <Dropdown
                  label={
                    localizedStrings.sharedContent.pages.pageContact.formReason
                  }
                  id="reason"
                  name="reason"
                  theme={theme}
                  options={optionsDropdown}
                  onSelectionChanged={(Reason: string) =>
                    setEmailFormState({ ...emailFormState, Reason })
                  }
                  error={errorReason}
                />
              </div>

              <div className="w-full mt-6">
                <Textarea
                  id="message"
                  name="message"
                  label={
                    localizedStrings.sharedContent.pages.pageContact.formMessage
                  }
                  theme={theme}
                  placeholderText={
                    localizedStrings.sharedContent.pages.pageContact
                      .formMessagePlaceholder
                  }
                  onInputChanged={(Message: string) =>
                    setEmailFormState({ ...emailFormState, Message })
                  }
                  error={errorMessage}
                />
              </div>
            </fieldset>
          </ContainerSection>

          <ContainerSection theme={theme} marginTop>
            <div className="flex justify-center w-full mt-8 mb-8">
              <ImageCaptcha
                theme={theme}
                value={captchaValue}
                captchaInput={captchaInput}
                onCaptchaChange={setCaptchaInput}
                onCaptchaRefresh={onCaptchaRefresh}
                error={errorCaptcha}
              />
            </div>

            <div className="flex justify-center w-full">
              <ButtonRegular
                onClick={onSubmit}
                text={
                  localizedStrings.sharedContent.pages.pageContact
                    .formButtonSend
                }
                size={ButtonSize.normal}
                type={ButtonType.secondary}
              />
            </div>
          </ContainerSection>
        </form>
      )}
    </>
  );
};
