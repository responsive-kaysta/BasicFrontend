import { ButtonSize } from "./button-types";

export const buttonWrapper = (size: ButtonSize) => {
  return `inline-flex ${
    size === ButtonSize.normal
      ? "shadow-md rounded-lg hover:shadow-lg"
      : "shadow-md rounded-md hover:shadow-lg"
  } `;
};

export const buttonPadding = (size: ButtonSize) => {
  return `${size === ButtonSize.normal ? "w-32 px-4 py-2" : "w-20 px-2 py-0"}`;
};

export const buttonTextStyle = (size: ButtonSize) => {
  return `${
    size === ButtonSize.normal
      ? "text-sm leading-5 font-medium"
      : "text-xs leading-4"
  }`;
};

export const buttonBorderStyle = (size: ButtonSize) => {
  return `${size === ButtonSize.normal ? "rounded-md" : "rounded"}`;
};

export const stylePrimary = (size: ButtonSize) => {
  return `inline-flex items-center ${buttonPadding(
    size
  )} border border-gray-300 ${buttonBorderStyle(
    size
  )} text-gray-700 ${buttonTextStyle(
    size
  )} bg-gray-100 hover:text-gray-900 hover:shadow-lg focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-100 transition ease-in-out duration-150`;
};

export const styleSecondary = (size: ButtonSize) => {
  return `inline-flex items-center ${buttonPadding(
    size
  )} border border-transparent ${buttonBorderStyle(
    size
  )} text-white ${buttonTextStyle(
    size
  )} bg-green-400 hover:bg-green-300 hover:shadow-lg focus:outline-none focus:border-green-500 focus:shadow-outline-green active:bg-green-400 transition ease-in-out duration-150`;
};

export const styleTertiary = (size: ButtonSize) => {
  return `inline-flex items-center ${buttonPadding(
    size
  )} border border-transparent ${buttonBorderStyle(
    size
  )} text-white ${buttonTextStyle(
    size
  )} bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`;
};

export const styleTransparent = (size: ButtonSize) => {
  return `inline-flex items-center ${buttonPadding(
    size
  )} border border-transparent ${buttonBorderStyle(
    size
  )} text-gray-800 ${buttonTextStyle(
    size
  )} bg-transparent hover:text-gray-900 hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-transparent transition ease-in-out duration-150`;
};

export const styleAlarm = (size: ButtonSize) => {
  return `inline-flex items-center ${buttonPadding(
    size
  )} border border-transparent ${buttonBorderStyle(
    size
  )} text-white ${buttonTextStyle(
    size
  )} bg-red-600 hover:bg-red-500 hover:text-gray-100 hover:shadow-lg focus:outline-none focus:border-red-600 focus:shadow-outline-indigo active:bg-red-500 transition ease-in-out duration-150`;
};

export const styleSpecial = (size: ButtonSize) => {
  return `inline-flex items-center ${buttonPadding(
    size
  )} border-1 border-gray-400 ${buttonBorderStyle(
    size
  )} text-gray-100 ${buttonTextStyle(
    size
  )} bg-sred-100 hover:text-gray-200 hover:bg-sred-200 hover:shadow-lg focus:outline-none focus:border-gray-500 focus:shadow-outline-gray active:bg-sred-200 transition ease-in-out duration-150`;
};
