export type ThemeType = {
  body: {
    textColor: string;
    textSecondaryColor: string;
    backgroundColor: string;
    borderColor: string;
  };
  link: {
    textColor: string;
    focusColor: string;
    hoverColor: string;
    activeColor: string;
    visitedColor: string;
  };
  form: {
    textColor: string;
    textSecondaryColor: string;
    textErrorColor: string;
    placeholderColor: string;
    backgroundColor: string;
    borderColor: string;
    borderHoverColor: string;
  };
  format: {
    codeTextColor: string;
    codeBorderColor: string;
    codeBackgroundColor: string;
  };
};
