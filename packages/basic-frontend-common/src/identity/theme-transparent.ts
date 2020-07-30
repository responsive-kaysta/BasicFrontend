import { ThemeType } from "../typings";

export const ThemeTransparent: ThemeType = {
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
