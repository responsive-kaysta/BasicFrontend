export const ThemeTransparent = {
  body: {
    textColor: "text-gray-100",
    secondaryText: "text-gray-100",
    backgroundColor: "bg-transparent",
    borderColor: "border-gray-100",
  },
  link: {
    textColor: "text-gray-100",
    focusColor: "text-gray-100",
    hoverColor: "text-gray-100",
    activeColor: "text-gray-100",
    visitedColor: "text-gray-100",
  },
  form: {
    textColor: "text-gray-100",
    backgroundColor: "bg-transparent",
    borderColor: "border-gray-200",
    borderHoverColor: "border-gray-300",
  },
  format: {
    codeTextColor: "text-gray-100",
    codeBorderColor: "bg-transparent",
    codeBackgroundColor: "border-gray-100",
  },
};

export type ThemeType = {
  body: {
    textColor: string;
    secondaryText: string;
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
    borderHoverColor: string;
  };
  format: {
    codeTextColor: string;
    codeBorderColor: string;
    codeBackgroundColor: string;
  };
};
