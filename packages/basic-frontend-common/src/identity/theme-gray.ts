import { ThemeType } from "../typings";

export const ThemeGray: ThemeType = {
  body: {
    textColor: "text-gray-100",
    textSecondaryColor: "text-gray-200",
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
    textSecondaryColor: "text-gray-100",
    textErrorColor: "text-red-600",
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
