import React, { FC } from "react";

const pictogramMap = {
  hamburger_menu: (size: number, className: string) => (
    <svg
      className={className}
      fill="inherit"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={size}
      height={size}
      name="hamburger_menu"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ),
  hamburger_menu_close: (size: number, className: string) => (
    <svg
      className={className}
      stroke="currentColor"
      fill="inherit"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      name="hamburger_menu_close"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  arrow_left: (size: number, className: string) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 54 54"
      fill="inherit"
      stroke="currentColor"
      className={className}
      name="desktop_arrow_left"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="27" cy="27" r="26.5" stroke="#6ECD96" />
      <path
        d="M29 18L21 26L29 34"
        stroke="#6ECD96"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export const allPictogramNames = Object.keys(pictogramMap);

export enum PictogramSize {
  xs = 32,
  sm = 48,
  md = 64,
  lg = 72,
  xl = 96,
}

export type PictogramName = keyof typeof pictogramMap;

export type PictogramProps = {
  name: PictogramName;
  className?: string;
  size?: PictogramSize;
};

export const Pictogram: FC<PictogramProps> = ({
  name,
  className = "",
  size = PictogramSize.sm,
}) => {
  if (!pictogramMap[name]) {
    console.warn(`No Icon with name '${name}' found!`);
    return null;
  }

  return pictogramMap[name](size, `fill-current ${className}`);
};
