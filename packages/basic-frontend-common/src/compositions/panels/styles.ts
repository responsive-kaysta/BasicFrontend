import { ThemeType } from "../../identity";

export const wrapperStyle = (theme?: ThemeType) => {
  return theme
    ? `${theme.body.backgroundColor} ${theme.body.borderColor} ${theme.body.textColor} overflow-hidden shadow-lg rounded-lg`
    : "bg-gray-50 border-gray-300 text-gray-800 overflow-hidden shadow-lg rounded-lg";
};

export const headerStyle = (theme?: ThemeType) => {
  return theme
    ? `${theme.body.borderColor} ${theme.body.textColor}`
    : "border-gray-300 text-gray-800 border-b px-4 py-5 sm:px-6";
};

export const footerStyle = (theme?: ThemeType) => {
  return theme
    ? `${theme.body.borderColor} ${theme.body.textColor}`
    : "border-gray-300 text-gray-800 border-t px-4 py-5 sm:px-6";
};

export const contentStyle = () => {
  return "px-4 py-5 sm:p-6";
};
