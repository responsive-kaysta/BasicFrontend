import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";
import { NavigationItems } from "../../typings";

type HorizontalNavbarProps = {
  menuItems: NavigationItems[];
  isMenuVisible: boolean;
  toggleMenuVisible: (visible: boolean) => void;
  theme?: ThemeType;
  withSearch?: boolean;
  logo?: ReactNode;
};

export const HorizontalNavbar: FC<HorizontalNavbarProps> = ({
  menuItems,
  isMenuVisible,
  toggleMenuVisible,
  theme,
  withSearch,
  logo,
}) => {
  console.log(theme);
  console.log(withSearch);

  return (
    <header id="horizontal-navbar-header">
      <div className="md:hidden flex flex-row justify-between h-12">
        <div className="flex" id="horizontal-navbar-mobile-logo">
          {logo}
        </div>
        {!isMenuVisible && (
          <div className="flex">
            <button
              className="m-0 p-0 h-6 w-6 text-gray-500"
              aria-label="Open sidebar"
              onClick={() => toggleMenuVisible(true)}
            >
              <svg
                className="m-0 p-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        )}
        {isMenuVisible && (
          <nav
            id="horizontal-navbar-mobile-nav"
            className="fixed flex top-0 right-0 w-1/2 z-40 bg-gray-300"
            onClick={() => toggleMenuVisible(false)}
          >
            <ul>
              {menuItems.map((item) => {
                return (
                  <li key={item.title}>
                    <a href={item.link} title={item.title}>
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      <div className="hidden md:flex flex-row md:h-12">
        <div id="horizontal-navbar-logo">{logo}</div>
        <nav id="horizontal-navbar-nav">
          <ul className="flex flex-row">
            {menuItems.map((item) => {
              return (
                <li key={item.title}>
                  <a href={item.link} title={item.title}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
