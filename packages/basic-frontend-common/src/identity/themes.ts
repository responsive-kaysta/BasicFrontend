export const ThemeLight = {
  body: {
    textColor: "text-gray-800",
    secondaryText: "text-gray-700",
    backgroundColor: "bg-gray-100",
    borderColor: "border-gray-800",
  },
  link: {
    textColor: "text-gray-800",
    focusColor: "text-red-500",
    hoverColor: "text-red-500",
    activeColor: "text-red-500",
    visitedColor: "text-gray-800",
  },
  form: {
    textColor: "text-white",
    backgroundColor: "bg-transparent",
    borderColor: "bg-gray-200",
    borderHoverColor: "border-gray-100",
  },
  format: {
    codeTextColor: "text-gray-900",
    codeBorderColor: "bg-gray-300",
    codeBackgroundColor: "border-gray-900",
  },
};

export const ThemeGray = {
  body: {
    textColor: "text-gray-100",
    secondaryText: "text-gray-200",
    backgroundColor: "bg-gray-500",
    borderColor: "border-gray-100",
  },
  link: {
    textColor: "text-gray-100",
    focusColor: "text-red-500",
    hoverColor: "text-red-500",
    activeColor: "text-red-500",
    visitedColor: "text-gray-100",
  },
  form: {
    textColor: "text-white",
    backgroundColor: "bg-transparent",
    borderColor: "bg-gray-200",
    borderHoverColor: "border-gray-100",
  },
  format: {
    codeTextColor: "text-gray-100",
    codeBorderColor: "bg-transparent",
    codeBackgroundColor: "border-gray-100",
  },
};

export const ThemeTransparent = {
  body: {
    textColor: "text-gray-300",
    secondaryText: "text-gray-100",
    backgroundColor: "bg-transparent",
    borderColor: "border-gray-500",
  },
  link: {
    textColor: "text-gray-300",
    focusColor: "text-red-500",
    hoverColor: "text-red-500",
    activeColor: "text-red-500",
    visitedColor: "text-gray-300",
  },
  form: {
    textColor: "text-gray-300",
    backgroundColor: "bg-transparent",
    borderColor: "border-gray-500",
    borderHoverColor: "border-gray-300",
  },
  format: {
    codeTextColor: "text-gray-300",
    codeBorderColor: "bg-transparent",
    codeBackgroundColor: "border-gray-500",
  },
};

export const ThemeGreen = {
  body: {
    textColor: "text-gray-100",
    secondaryText: "text-gray-200",
    backgroundColor: "bg-sgreen-100",
    borderColor: "border-gray-100",
  },
  link: {
    textColor: "text-gray-100",
    focusColor: "text-red-500",
    hoverColor: "text-red-500",
    activeColor: "text-red-500",
    visitedColor: "text-gray-100",
  },
  form: {
    textColor: "text-gray-100",
    backgroundColor: "bg-transparent",
    borderColor: "border-gray-100",
    borderHoverColor: "border-gray-200",
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
