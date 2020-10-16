export enum FormFieldType {
  String,
  Number,
  Password,
  Email,
}

export const typeOfStringCheck = (value: any) => {
  return typeof value === 'string';
};

export const typeOfNumberCheck = (value: any) => {
  return typeof value === 'number';
};

export const FormFieldValidation = (
  fieldType: FormFieldType,
  fieldValue: any,
  minLength?: number,
  maxLength?: number
) => {
  const fieldMinLength = minLength ? minLength : 1;
  const fieldMaxLength = maxLength ? maxLength : 64;

  switch (fieldType) {
    case FormFieldType.Email:
      return (
        typeOfStringCheck(fieldValue) &&
        fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      );

    case FormFieldType.Password:
      return (
        typeOfStringCheck(fieldValue) &&
        fieldValue.length >= fieldMinLength &&
        fieldValue.length <= fieldMaxLength
      );

    case FormFieldType.String:
      return (
        typeOfStringCheck(fieldValue) &&
        fieldValue.length >= fieldMinLength &&
        fieldValue.length <= fieldMaxLength
      );

    case FormFieldType.Number:
      return typeOfNumberCheck(fieldValue) && fieldValue > 0;

    default:
      return false;
  }
};
