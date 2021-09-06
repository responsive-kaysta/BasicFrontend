import { defButtonNormal, defButtonSmall } from '../../identity';
import { ThemeType } from '../../typings';
import { ButtonSize } from './button-types';

export const buttonWrapper = (size: ButtonSize) => {
  return `inline-flex ${
    size === ButtonSize.normal
      ? 'shadow-md rounded-xl hover:shadow-2xl'
      : 'shadow-md rounded-lg hover:shadow-xl max-h-12'
  } `;
};

export const buttonPadding = (size: ButtonSize) => {
  return `${
    size === ButtonSize.normal ? 'w-44 px-4 py-4' : 'w-30 max-h-12 px-4 py-2'
  }`;
};

export const buttonTextStyle = (size: ButtonSize) => {
  return `${size === ButtonSize.normal ? defButtonNormal : defButtonSmall}`;
};

export const buttonBorderStyle = (size: ButtonSize) => {
  return `${size === ButtonSize.normal ? 'rounded-md' : 'rounded'}`;
};

export const stylePrimary = (size: ButtonSize) => {
  return `inline-flex justify-center items-center ${buttonPadding(
    size
  )} border border-gray-300 ${buttonBorderStyle(
    size
  )} text-gray-700 ${buttonTextStyle(
    size
  )} bg-gray-100 hover:text-gray-900 hover:shadow-lg focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-100 transition ease-in-out duration-150`;
};

export const styleSecondary = (size: ButtonSize) => {
  return `inline-flex justify-center items-center ${buttonPadding(
    size
  )} border border-transparent ${buttonBorderStyle(
    size
  )} text-white ${buttonTextStyle(
    size
  )} bg-green-400 hover:bg-green-500 hover:shadow-lg focus:outline-none focus:border-green-500 focus:shadow-outline-green active:bg-green-400 transition ease-in-out duration-150`;
};

export const styleTertiary = (size: ButtonSize) => {
  return `inline-flex justify-center items-center ${buttonPadding(
    size
  )} border border-transparent ${buttonBorderStyle(
    size
  )} text-white ${buttonTextStyle(
    size
  )} bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`;
};

export const styleTransparent = (size: ButtonSize, theme: ThemeType) => {
  return `inline-flex justify-center items-center ${buttonPadding(
    size
  )} border ${
    theme ? theme.body.borderColor : 'border-transparent'
  } ${buttonBorderStyle(size)} ${
    theme ? theme.body.textColor : 'text-gray-800'
  } ${buttonTextStyle(
    size
  )} bg-transparent hover:text-gray-900 hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-transparent transition ease-in-out duration-150`;
};

export const styleAlarm = (size: ButtonSize) => {
  return `inline-flex justify-center items-center ${buttonPadding(
    size
  )} border border-transparent ${buttonBorderStyle(
    size
  )} text-white ${buttonTextStyle(
    size
  )} bg-red-500 hover:bg-red-600 hover:text-gray-100 hover:shadow-lg focus:outline-none focus:border-red-600 focus:shadow-outline-indigo active:bg-red-500 transition ease-in-out duration-150`;
};

export const styleSpecial = (size: ButtonSize) => {
  return `inline-flex justify-center items-center ${buttonPadding(
    size
  )} border-2 border-gray-300 ${buttonBorderStyle(
    size
  )} text-gray-100 ${buttonTextStyle(
    size
  )} bg-sred-100 hover:text-gray-200 hover:bg-sred-200 hover:shadow-lg focus:outline-none focus:border-gray-500 focus:shadow-outline-gray active:bg-sred-200 transition ease-in-out duration-150`;
};
