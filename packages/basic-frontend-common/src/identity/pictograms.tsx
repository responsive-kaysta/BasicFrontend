import React, { FC } from "react";
import download from "/pictograms/file-and-document/001-download.svg";

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

  box: (size: number, className: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 568.034 568.034"
      fill="inherit"
      stroke="currentColor"
      className={className}
      name="box"
    >
      <g>
        <path d="m446.822 213.631-190.827-63.256-190.827 63.256-65.158 103.498 59.984 19.884v110.007l196 64.97 196-64.97v-110.007l59.984-19.884zm-57.5 12.545-133.327 44.195-133.327-44.195 133.327-44.195zm-343.52 74.527 35.627-56.592 151.67 50.276-35.626 56.591zm44.193 46.255 120.345 39.892 30.655-48.693v137.256l-151-50.054zm181 128.454v-137.256l30.655 48.693 120.345-39.892v78.401zm43.522-124.433-35.626-56.591 151.67-50.276 35.627 56.592z" />
        <path d="m240.995 0h30v100.174h-30z" />
        <path
          d="m122.952 31.63h30v100.174h-30z"
          transform="matrix(.866 -.5 .5 .866 -22.376 79.924)"
        />
        <path
          d="m323.951 66.717h100.174v30h-100.174z"
          transform="matrix(.5 -.866 .866 .5 116.249 364.784)"
        />
      </g>
    </svg>
  ),
  cardboard_box: (size: number, className: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="inherit"
      stroke="currentColor"
      className={className}
      name="cardboard_box"
    >
      <g>
        <path d="m497 60.25h-482c-8.284 0-15 6.716-15 15v90.375c0 8.284 6.716 15 15 15h15.125v256.125c0 8.284 6.716 15 15 15h421.75c8.284 0 15-6.716 15-15v-256.125h15.125c8.284 0 15-6.716 15-15v-90.375c0-8.284-6.716-15-15-15zm-45.125 361.5h-391.75v-241.125h391.75zm30.125-271.125h-452v-60.375h452z" />
        <path d="m225.875 301.125h60.25c24.882 0 45.125-20.243 45.125-45.125s-20.243-45.125-45.125-45.125h-60.25c-24.882 0-45.125 20.243-45.125 45.125s20.243 45.125 45.125 45.125zm0-60.25h60.25c8.34 0 15.125 6.785 15.125 15.125s-6.785 15.125-15.125 15.125h-60.25c-8.34 0-15.125-6.785-15.125-15.125s6.785-15.125 15.125-15.125z" />
      </g>
    </svg>
  ),
  download: (size: number, className: string) => (
    <img
      src={download}
      alt="React Logo"
      className={className}
      width={size}
      height={size}
    />
  ),
};

export const allPictogramNames = Object.keys(pictogramMap);

export enum PictogramSize {
  xxxs = 18,
  xxs = 24,
  xs = 36,
  sm = 48,
  md = 72,
  lg = 96,
  xl = 144,
  xxl = 192,
  xxxl = 288,
  xxxxl = 384,
  xxxxxl = 596,
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

// more prictograms
// https://www.flaticon.com/packs/programming-87?word=programming
// https://www.flaticon.com/packs/encryption?word=programming
// https://www.flaticon.com/packs/interface-107?word=programming
