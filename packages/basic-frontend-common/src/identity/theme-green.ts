import { ThemeType } from "../typings";

export const ThemeGreen: ThemeType = {
  body: {
    textColor: "text-gray-100",
    textSecondaryColor: "text-gray-200",
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
    textSecondaryColor: "text-gray-100",
    textErrorColor: "text-red-600",
    placeholderColor: "placeholder-gray-100",
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
