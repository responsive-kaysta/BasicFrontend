export const ThemeTransparent = {
  body: {
    textColor: "text-gray-100",
    backgroundColor: "bg-transparent",
    borderColor: "border-gray-100",
  },
  link: {
    textColor: "",
    focusColor: "",
    hoverColor: "",
    activeColor: "",
    visitedColor: "",
  },
  form: {
    textColor: "",
    backgroundColor: "",
    borderColor: "",
  },
  format: {
    codeTextColor: "",
    codeBorderColor: "",
    codeBackgroundColor: "",
  },
};

export type ThemeType = {
  body: {
    textColor: string;
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
    backgroundColor: string;
    borderColor: string;
  };
  format: {
    codeTextColor: string;
    codeBorderColor: string;
    codeBackgroundColor: string;
  };
};
