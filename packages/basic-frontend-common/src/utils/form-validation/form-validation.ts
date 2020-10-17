import LocalizedStrings from 'react-localization';
import { getLanguage } from '../general';
import {
  FormFieldType,
  FormFieldValidation,
  typeOfStringCheck,
} from './form-field-validation';
import * as json from './localization.json';

const localizedStrings = new LocalizedStrings(json);
localizedStrings.setLanguage(getLanguage());

export const InputTextValidation = (
  value: string,
  minLength?: number,
  maxLength?: number
): string | null => {
  if (!FormFieldValidation(FormFieldType.String, value, minLength, maxLength)) {
    if (!typeOfStringCheck(value)) {
      return localizedStrings
        .formatString(
          localizedStrings.formValidation.incorrectFormFieldType,
          'FormFieldType.String'
        )
        .toString();
    }

    if (value.length < minLength || value.length > maxLength) {
      return localizedStrings
        .formatString(
          localizedStrings.formValidation.incorrectLength,
          `${minLength}`,
          `${maxLength}`
        )
        .toString();
    }
  }

  return null;
};

export const InputEmailValidation = (value: string): string | null => {
  if (!value) {
    return localizedStrings
      .formatString(localizedStrings.formValidation.formFieldEmpty, 'Email')
      .toString();
  }

  if (!FormFieldValidation(FormFieldType.Email, value)) {
    return localizedStrings
      .formatString(localizedStrings.formValidation.incorrectEmailField, value)
      .toString();
  }

  return null;
};
